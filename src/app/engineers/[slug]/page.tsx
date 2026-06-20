import Link from "next/link";
import { notFound } from "next/navigation";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { engineers, getEngineer } from "@/lib/engineers";

export function generateStaticParams() {
  return engineers.map((engineer) => ({ slug: engineer.slug }));
}

export default async function EngineerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const engineer = getEngineer(slug);

  if (!engineer) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">工程师资料</p>
        <h1 className="text-4xl font-black leading-tight">{engineer.displayName}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{engineer.specialty}</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <InfoPanel title="代表项目类型" items={engineer.representativeProjects} />
          <InfoPanel title="可提供服务" items={engineer.services} />
          <InfoPanel title="不提供或不承诺" items={engineer.notSuitableFor} />
          <InfoPanel title="适合对接项目" items={engineer.suitableFor} />
          <InfoPanel title="经验标签" items={engineer.tags} />
          <section className="panel p-5">
            <h2 className="text-lg font-black">对接价格</h2>
            <p className="mt-4 text-2xl font-black">{engineer.price}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{engineer.revenueShare}</p>
          </section>
        </div>
        <Link className="btn-primary mt-8" href={`/engineers/${engineer.slug}/request`}>
          申请对接
        </Link>
        <div className="mt-8">
          <BoundaryNote />
        </div>
      </main>
    </>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="panel p-5">
      <h2 className="text-lg font-black">{title}</h2>
      <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

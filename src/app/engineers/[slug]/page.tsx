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
            <p className="mt-4 text-2xl font-black">129 元 / 次</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              工程师完成有效对接后获得 29 元，平台保留 100 元。第一版不做真实分账。
            </p>
          </section>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link className="btn-primary" href={`/checkout?type=engineer&slug=${engineer.slug}`}>
            支付并发起对接
          </Link>
          <Link className="btn-secondary" href={`/engineers/${engineer.slug}/request`}>
            先填写项目申请
          </Link>
        </div>
        <section className="panel mt-8 p-5">
          <h2 className="text-xl font-black">付款后的 mock 流程</h2>
          <ol className="mt-4 grid gap-2 text-sm leading-6 text-muted">
            {["优先通知所选工程师，30 分钟优先接单", "超时后通知同领域候选工程师", "客户确认是否更换接单工程师", "24 小时无人接单则进入退款处理", "接单后生成客户、工程师、平台三方邮件预览"].map((step, index) => (
              <li key={step}>{index + 1}. {step}</li>
            ))}
          </ol>
        </section>
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

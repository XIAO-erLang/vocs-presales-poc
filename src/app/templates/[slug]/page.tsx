import Link from "next/link";
import { notFound } from "next/navigation";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { getTemplate, templates } from "@/lib/templates";

export function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export default async function TemplateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">标准模板</p>
        <h1 className="text-4xl font-black leading-tight">{template.name}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          适用于 {template.targetUsers.join("、")}。当前只展示部分预览内容，完整版本后续通过邮件或付费资料包获取。
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <InfoPanel title="适用场景" items={template.useCases} />
          <InfoPanel title="部分预览" items={template.previewItems} />
          <InfoPanel title="完整版本包含" items={template.fullVersionIncludes} />
        </div>

        <section className="panel mt-8 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black text-steel">获取完整版本</p>
              <p className="mt-1 text-2xl font-black">{template.price}</p>
              <p className="mt-1 text-sm text-muted">第一版不接真实支付，先通过邮件确认需求。</p>
            </div>
            <Link className="btn-primary" href="/intent">
              邮件咨询完整版本
            </Link>
          </div>
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
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

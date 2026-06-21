import Link from "next/link";
import { notFound } from "next/navigation";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { getTool, tools } from "@/lib/tools";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <section>
            <p className="eyebrow mb-3">{tool.category}</p>
            <h1 className="text-4xl font-black leading-tight">{tool.name}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{tool.description}</p>
          </section>
          <aside className="panel p-5">
            <p className="text-sm font-black text-steel">收费占位</p>
            <p className="mt-2 text-2xl font-black">{tool.price}</p>
            <p className="mt-2 text-sm text-muted">当前不接真实支付，可通过邮件咨询开放时间。</p>
            <Link className="btn-secondary mt-5 w-full" href="/intent">
              发送到邮箱咨询
            </Link>
          </aside>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <InfoPanel title="适用场景" items={tool.useCases} />
          <InfoPanel title="输入参数" items={tool.inputs} />
          <InfoPanel title="结果展示" items={tool.outputs} />
        </div>

        <section className="panel mt-8 p-5">
          <h2 className="text-xl font-black">示例计算区</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tool.inputs.slice(0, 4).map((input) => (
              <label className="grid gap-2 text-sm font-bold" key={input}>
                {input}
                <input className="rounded-md border border-line bg-paper px-3 py-2 font-normal" placeholder="示例输入，暂不计算" />
              </label>
            ))}
          </div>
          <button className="btn-primary mt-5" type="button">
            生成示例结果
          </button>
          <div className="mt-5 rounded-md border border-line bg-field p-4 text-sm leading-6 text-muted">
            第一版仅展示结果区结构。真实计算公式上线前，需要逐项确认工程边界、参数单位和人工复核场景。
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

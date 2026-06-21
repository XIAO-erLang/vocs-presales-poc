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
            <p className="text-sm font-black text-steel">工具使用权益</p>
            <p className="mt-2 text-2xl font-black">单次使用 9.9 元</p>
            <p className="mt-1 text-sm font-bold text-danger">年费会员 199 元 / 年</p>
            <p className="mt-2 text-sm leading-6 text-muted">免费试用 3 次为占位逻辑，后续接登录系统后绑定账号与次数。</p>
            <div className="mt-5 grid gap-3">
              <Link className="btn-primary w-full" href={`/checkout?type=tool&slug=${tool.slug}`}>
                单次使用
              </Link>
              <Link className="btn-secondary w-full" href={`/checkout?type=tool_yearly&slug=${tool.slug}`}>
                开通年费会员
              </Link>
            </div>
            <Link className="mt-4 block text-sm font-bold text-leaf-dark hover:text-danger" href="/intent">
              先邮件咨询适用边界
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

        <section className="panel mt-8 p-5">
          <h2 className="text-xl font-black">购买后交付占位</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            支付成功后将 mock 开通一次工具使用权或一年工具会员。真实上线后会由订单 webhook 写入权益表，并扣减使用次数。
          </p>
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

import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { tools } from "@/lib/tools";

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <SectionTitle
          eyebrow="计算工具"
          title="环保售前常用参数计算工具"
          description="第一版先搭工具列表和详情页结构，计算逻辑使用示例或占位，不追求工程设计精度。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <article className="panel flex flex-col p-5" key={tool.slug}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-black text-steel">{tool.category}</p>
                  <h2 className="mt-2 text-xl font-black">{tool.name}</h2>
                </div>
                <span className="rounded-md bg-field px-2.5 py-1 text-xs font-bold text-muted">{tool.status}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">{tool.description}</p>
              <div className="mt-4 grid gap-2 text-sm">
                <p>
                  <strong>输入示例：</strong>
                  {tool.inputs.slice(0, 3).join("、")}
                </p>
                <p>
                  <strong>输出示例：</strong>
                  {tool.outputs.slice(0, 2).join("、")}
                </p>
              </div>
              <div className="mt-auto pt-5">
                <p className="mb-3 text-sm font-bold text-leaf-dark">{tool.price}</p>
                <Link className="btn-primary w-full" href={`/tools/${tool.slug}`}>
                  进入工具
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <BoundaryNote />
        </div>
      </main>
    </>
  );
}

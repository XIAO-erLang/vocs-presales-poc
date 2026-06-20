import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { planFormFields, planPreviewSections } from "@/lib/plans";

export default function PlansPage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <SectionTitle
          eyebrow="初步方案框架生成"
          title="生成用于售前沟通的初步方案框架"
          description="这里生成的是售前沟通框架，不是正式治理方案。复杂项目建议进入工程师复核。"
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <section className="panel p-5">
            <h2 className="text-xl font-black">工况参数表单入口</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {planFormFields.map((field) => (
                <label className="grid gap-2 text-sm font-bold" key={field}>
                  {field}
                  <input className="rounded-md border border-line bg-white px-3 py-2 font-normal" placeholder="第一版为 UI 占位" />
                </label>
              ))}
            </div>
            <Link className="btn-primary mt-6" href="/plans/result">
              生成 mock 方案结果
            </Link>
          </section>

          <aside className="panel p-5">
            <h2 className="text-xl font-black">方案目录预览</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
              {planPreviewSections.map((section) => (
                <li className="rounded-md border border-line bg-field p-3" key={section}>
                  {section}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-md border border-line p-4 text-sm leading-6 text-muted">
              后续可展示基础版 99 元、增强版 199 元、人工复核版 299 元起；当前不接真实支付。
            </div>
          </aside>
        </div>
        <div className="mt-8">
          <BoundaryNote />
        </div>
      </main>
    </>
  );
}

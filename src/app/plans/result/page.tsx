import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { planPreviewSections, planResultMock } from "@/lib/plans";

export default function PlanResultPage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">mock 生成结果</p>
        <h1 className="text-4xl font-black leading-tight">初步方案框架预览</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{planResultMock.projectSummary}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <InfoPanel title="初步方案目录" items={planPreviewSections} />
          <InfoPanel title="可能缺失的信息" items={planResultMock.missingInfo} />
          <InfoPanel title="初步风险提示" items={planResultMock.risks} />
          <InfoPanel title="部分内容预览" items={planResultMock.preview} />
        </div>

        <section className="panel mt-8 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black text-steel">下一步</p>
              <p className="mt-2 text-xl font-black">购买完整初步方案或申请工程师复核</p>
              <p className="mt-2 text-sm leading-6 text-muted">当前只展示目录和部分内容，完整方案交付为 mock 占位。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/checkout?type=plan&slug=basic-vocs-plan">
                购买完整初步方案
              </Link>
              <Link className="btn-secondary" href="/engineers">
                申请工程师复核
              </Link>
            </div>
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

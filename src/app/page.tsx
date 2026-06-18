import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { painPoints } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="container-page grid min-h-[calc(100vh-73px)] gap-8 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-16">
          <div>
            <p className="eyebrow mb-3">轻量网页 POC</p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-normal sm:text-6xl lg:text-7xl">
              VOCs 废气治理售前助手
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              把“客户说不清需求、现场参数不完整、报价前不知道怎么问”整理成可沟通的工况信息、风险提示和初步方案框架。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/flow">
                看看我适合哪种资料
              </Link>
              <Link className="btn-secondary" href="/samples">
                先看资料包样张
              </Link>
            </div>
            <div className="mt-6 max-w-3xl">
              <BoundaryNote compact />
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="mb-4 flex items-center justify-between border-b border-line pb-4">
              <span className="font-bold text-muted">POC 验证目标</span>
              <strong className="text-steel">5 个行为</strong>
            </div>
            <ul className="grid gap-3">
              {["点击进入", "完成分流", "查看样张", "留下联系方式", "表达付费或复核意向"].map(
                (item, index) => (
                  <li className="grid grid-cols-[44px_1fr] items-center rounded-md border border-line bg-field p-3" key={item}>
                    <span className="font-black text-leaf">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        <section className="container-page py-12">
          <SectionTitle
            eyebrow="首页痛点"
            title="第一版先验证这些真实问题"
            description="不是做完整网站，而是验证这些痛点能不能带来点击、分流、样张查看和留资。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {painPoints.map((point, index) => (
              <article className="panel p-4" key={point}>
                <span className="mb-4 block text-sm font-black text-amber">痛点 {index + 1}</span>
                <p className="text-sm leading-6 text-ink">{point}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

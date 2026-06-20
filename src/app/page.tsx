import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { PlatformModuleCard } from "@/components/PlatformModuleCard";
import { SectionTitle } from "@/components/SectionTitle";
import { painPoints } from "@/lib/data";
import { platformModules, startPaths } from "@/lib/platform";
import { pricingItems } from "@/lib/pricing";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="container-page grid gap-8 py-10 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
          <div>
            <p className="eyebrow mb-3">环保售前平台骨架 v0.3</p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-normal sm:text-6xl lg:text-7xl">
              环保售前工具与初步方案平台
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              把客户说不清的废气治理需求，整理成可计算、可沟通、可复核、可对接的项目信息、标准模板和初步方案框架。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="#modules">
                查看五大板块
              </Link>
              <Link className="btn-secondary" href="/flow">
                先体验 VOCs 售前分流
              </Link>
              <Link className="btn-secondary" href="/samples">
                查看资料样张
              </Link>
            </div>
            <div className="mt-6 max-w-3xl">
              <BoundaryNote compact />
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="mb-5 border-b border-line pb-4">
              <p className="text-sm font-black text-steel">平台服务范围</p>
              <h2 className="mt-2 text-2xl font-black">先搭骨架，再用真实点击决定开发顺序</h2>
            </div>
            <div className="grid gap-3">
              {pricingItems.slice(0, 5).map((item) => (
                <div className="rounded-md border border-line bg-field p-4" key={item.name}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-muted">{item.name}</span>
                    <strong className="text-sm text-leaf-dark">{item.price}</strong>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.status}，当前不接真实支付。</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page py-12" id="modules">
          <SectionTitle
            eyebrow="五大板块"
            title="环保项目前期沟通的五个入口"
            description="第一版不做完整商业系统，先让每个板块可点击、可展示、可继续扩展。"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {platformModules.map((module, index) => (
              <PlatformModuleCard module={module} index={index} key={module.href} />
            ))}
          </div>
        </section>

        <section className="container-page py-12">
          <SectionTitle eyebrow="推荐路径" title="我该从哪里开始？" />
          <div className="grid gap-4 lg:grid-cols-5">
            {startPaths.map((path) => (
              <Link className="panel block p-5 transition hover:-translate-y-0.5 hover:shadow-soft" href={path.href} key={path.problem}>
                <p className="text-sm leading-6 text-muted">{path.problem}</p>
                <p className="mt-4 text-lg font-black text-leaf-dark">{path.target}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="container-page py-12">
          <SectionTitle
            eyebrow="原 POC 主线"
            title="VOCs 售前助手仍然保留"
            description="当前平台从 VOCs 废气治理切入，后续再逐步扩展到臭气、除尘、预处理、供应商对接等环保售前场景。"
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

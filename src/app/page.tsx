import Link from "next/link";
import { Header } from "@/components/Header";
import { LogoMark } from "@/components/LogoMark";

const primaryActions = [
  { label: "Start a Project", href: "/workspace", primary: true },
  { label: "Browse Tools", href: "/tools" },
  { label: "Generate Plan", href: "/plans" },
  { label: "Find Engineers", href: "/ecosystem" }
];

const workflowSteps = [
  {
    step: "01",
    title: "Create a Project",
    description: "先把项目名称、行业、废气类型、已有资料和下一步目标放进同一个工作上下文。"
  },
  {
    step: "02",
    title: "Structure the Inputs",
    description: "用工具和模板整理风量、浓度、成分、现场条件、风险点和缺失参数。"
  },
  {
    step: "03",
    title: "Move to Decision",
    description: "生成初步方案框架，并在需要时把同一份项目资料交给工程师或供应资源复核。"
  }
];

const productAreas = [
  {
    label: "Tools",
    href: "/tools",
    title: "计算工具",
    description: "围绕 Project 做参数初算、边界提醒和前期判断。"
  },
  {
    label: "Templates",
    href: "/templates",
    title: "标准模板",
    description: "把沟通问题、工况采集和现场勘查变成可复用资料。"
  },
  {
    label: "Plans",
    href: "/plans",
    title: "方案生成",
    description: "从结构化项目信息生成售前沟通用的初步方案框架。"
  },
  {
    label: "Ecosystem",
    href: "/ecosystem",
    title: "资源匹配",
    description: "围绕同一个 Project 对接工程师、机械设计和供应商资料。"
  }
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white text-ink">
        <section className="container-page min-h-[calc(100vh-65px)] py-28 sm:py-32 lg:py-36">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="mb-8 rounded-full border border-[#E8E8E8] bg-[#F6F7F8] px-4 py-2 text-xs font-bold text-muted">
              V1 内测中 / 正式上线前暂不开放公开增长入口
            </div>
            <div className="mb-8 flex items-center gap-4">
              <LogoMark className="h-12 w-12 text-logo-green sm:h-14 sm:w-14" />
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">SourceLink Env</p>
                <p className="mt-1 text-sm text-muted">Product Platform for Environmental Engineering</p>
              </div>
            </div>

            <h1 className="text-6xl font-semibold leading-[1.1] tracking-[0.5px] text-[#1F1F1F] sm:text-7xl lg:text-[112px]">
              源解环保
            </h1>
            <p className="mt-8 text-sm font-normal leading-7 text-muted sm:text-base">
              AI + 环境工程技术支持平台
            </p>
            <p className="mt-7 max-w-[680px] text-base leading-[1.75] text-muted sm:text-lg">
              以 Project 为中心，把 VOCs 工况信息、计算工具、标准模板、方案框架和资源对接整理成一套可推进的前期工作系统。
            </p>

            <div className="mt-10 flex w-full max-w-3xl flex-col gap-3 sm:grid sm:grid-cols-4">
              {primaryActions.map((action) => (
                <Link className={action.primary ? "btn-primary" : "btn-secondary"} href={action.href} key={action.href}>
                  {action.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-field py-20 sm:py-24">
          <div className="container-page">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-leaf">How it works</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">One Project, one workflow.</h2>
              <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
                不再从分散功能开始，而是从一个具体项目开始，把每一步工作都沉淀回同一个项目上下文。
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {workflowSteps.map((item) => (
                <article className="rounded-[28px] bg-white p-7 shadow-soft ring-1 ring-black/[0.04]" key={item.step}>
                  <p className="text-sm font-bold text-leaf">{item.step}</p>
                  <h3 className="mt-10 text-2xl font-extrabold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page py-20 sm:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">Product areas</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Everything serves the Project.</h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Tools、Templates、Plans、Network 不再是分散入口，而是同一条环境工程前期工作流中的四个能力层。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productAreas.map((area) => (
              <Link
                className="group rounded-[28px] bg-white p-6 shadow-soft ring-1 ring-black/[0.04] transition duration-200 hover:-translate-y-1 hover:bg-hover-warm hover:shadow-float"
                href={area.href}
                key={area.href}
              >
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-leaf">{area.label}</p>
                <h3 className="mt-8 text-2xl font-extrabold text-ink">{area.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{area.description}</p>
                <p className="mt-8 text-sm font-bold text-leaf-dark transition group-hover:text-leaf">Open</p>
              </Link>
            ))}
          </div>
        </section>

        <footer className="bg-ink py-12 text-white">
          <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <LogoMark className="h-12 w-12 shrink-0 text-white" />
              <div>
                <p className="text-lg font-black">源解环保</p>
                <p className="text-sm text-[#BDBDBD]">Environmental Engineering Operating System</p>
              </div>
            </div>
            <Link className="text-sm font-bold text-white transition hover:text-sand-soft" href="/workspace">
              Start a Project
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}

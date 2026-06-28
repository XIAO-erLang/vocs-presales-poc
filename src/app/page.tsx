"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { LogoMark } from "@/components/LogoMark";
import { useSiteLanguage } from "@/components/LanguageProvider";

const copy = {
  zh: {
    badge: "V1 内测中 / 正式上线前暂不开放公开增长入口",
    brandLabel: "源解环保",
    subtitle: "AI + 环境工程技术支持平台",
    headline: "源解环保",
    description: "以 Project 为中心，把 VOCs 工况信息、计算工具、标准模板、方案框架和资源对接整理成一套可推进的前期工作系统。",
    actions: [
      { label: "开始项目", href: "/workspace", primary: true },
      { label: "浏览工具", href: "/tools" },
      { label: "生成方案", href: "/plans" },
      { label: "寻找工程师", href: "/ecosystem" }
    ],
    workflowEyebrow: "工作流程",
    workflowTitle: "一个项目，一条工作流。",
    workflowDescription: "不再从分散功能开始，而是从一个具体项目开始，把每一步工作都沉淀回同一个项目上下文。",
    workflowSteps: [
      { step: "01", title: "创建项目", description: "先把项目名称、行业、废气类型、已有资料和下一步目标放进同一个工作上下文。" },
      { step: "02", title: "整理输入", description: "用工具和模板整理风量、浓度、成分、现场条件、风险点和缺失参数。" },
      { step: "03", title: "进入判断", description: "生成初步方案框架，并在需要时把同一份项目资料交给工程师或供应资源复核。" }
    ],
    areasEyebrow: "产品能力",
    areasTitle: "所有能力都服务于同一个 Project。",
    areasDescription: "工具、模板、方案、资源网络不再是分散入口，而是同一条环境工程前期工作流中的四个能力层。",
    productAreas: [
      { label: "工具", href: "/tools", title: "计算工具", description: "围绕 Project 做参数初算、边界提醒和前期判断。" },
      { label: "模板", href: "/templates", title: "标准模板", description: "把沟通问题、工况采集和现场勘查变成可复用资料。" },
      { label: "方案", href: "/plans", title: "方案生成", description: "从结构化项目信息生成售前沟通用的初步方案框架。" },
      { label: "生态", href: "/ecosystem", title: "资源匹配", description: "围绕同一个 Project 对接工程师、机械设计和供应商资料。" }
    ],
    open: "打开",
    footerSubtitle: "环境工程工作系统",
    footerAction: "开始项目"
  },
  en: {
    badge: "V1 internal testing / Public growth entry is paused before official launch",
    brandLabel: "SourceLink Env",
    subtitle: "AI + Environmental Engineering Support Platform",
    headline: "SourceLink Env",
    description: "A project-centered workspace that organizes VOCs conditions, calculation tools, standard templates, preliminary plans, and resource matching into one actionable presales workflow.",
    actions: [
      { label: "Start Project", href: "/workspace", primary: true },
      { label: "Browse Tools", href: "/tools" },
      { label: "Generate Plan", href: "/plans" },
      { label: "Find Engineers", href: "/ecosystem" }
    ],
    workflowEyebrow: "Workflow",
    workflowTitle: "One project, one workflow.",
    workflowDescription: "Instead of starting from scattered features, users start with one project and keep every step inside the same project context.",
    workflowSteps: [
      { step: "01", title: "Create a Project", description: "Collect the project name, industry context, waste gas type, existing materials, and next objective in one workspace." },
      { step: "02", title: "Structure Inputs", description: "Use tools and templates to organize airflow, concentration, components, site conditions, risks, and missing parameters." },
      { step: "03", title: "Move to Decision", description: "Generate a preliminary plan framework and pass the same project context to engineers or suppliers when review is needed." }
    ],
    areasEyebrow: "Product Areas",
    areasTitle: "Every capability serves the Project.",
    areasDescription: "Tools, templates, plans, and resource matching become four layers of one environmental engineering presales workflow.",
    productAreas: [
      { label: "Tools", href: "/tools", title: "Calculation Tools", description: "Run early parameter checks, boundary reminders, and presales estimates around the project." },
      { label: "Templates", href: "/templates", title: "Standard Templates", description: "Turn condition collection, communication questions, and site checks into reusable materials." },
      { label: "Plans", href: "/plans", title: "Plan Generation", description: "Generate a preliminary presales plan framework from structured project information." },
      { label: "Ecosystem", href: "/ecosystem", title: "Resource Matching", description: "Connect engineers, mechanical design, and supplier materials around the same project." }
    ],
    open: "Open",
    footerSubtitle: "Environmental Engineering Operating System",
    footerAction: "Start Project"
  }
};

export default function HomePage() {
  const { t } = useSiteLanguage();
  const content = t(copy);

  return (
    <>
      <Header />
      <main className="bg-white text-ink">
        <section className="container-page min-h-[calc(100vh-65px)] py-28 sm:py-32 lg:py-36">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="mb-8 rounded-full border border-[#E8E8E8] bg-[#F6F7F8] px-4 py-2 text-xs font-bold text-muted">
              {content.badge}
            </div>
            <div className="mb-8 flex items-center gap-4">
              <LogoMark className="h-12 w-12 text-[#B9976B] sm:h-14 sm:w-14" />
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">{content.brandLabel}</p>
                <p className="mt-1 text-sm text-muted">{content.subtitle}</p>
              </div>
            </div>
            <h1 className="text-6xl font-semibold leading-[1.1] tracking-[0.5px] text-[#1F1F1F] sm:text-7xl lg:text-[112px]">{content.headline}</h1>
            <p className="mt-7 max-w-[680px] text-base leading-[1.75] text-muted sm:text-lg">{content.description}</p>
            <div className="mt-10 flex w-full max-w-3xl flex-col gap-3 sm:grid sm:grid-cols-4">
              {content.actions.map((action) => (
                <Link className={action.primary ? "btn-primary" : "btn-secondary"} href={action.href} key={action.href}>{action.label}</Link>
              ))}
            </div>
          </div>
        </section>
        <section className="border-y border-line bg-field py-20 sm:py-24">
          <div className="container-page">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-leaf">{content.workflowEyebrow}</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{content.workflowTitle}</h2>
              <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{content.workflowDescription}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {content.workflowSteps.map((item) => (
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
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">{content.areasEyebrow}</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">{content.areasTitle}</h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{content.areasDescription}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.productAreas.map((area) => (
              <Link className="group rounded-[28px] bg-white p-6 shadow-soft ring-1 ring-black/[0.04] transition duration-200 hover:-translate-y-1 hover:bg-hover-warm hover:shadow-float" href={area.href} key={area.href}>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-leaf">{area.label}</p>
                <h3 className="mt-8 text-2xl font-extrabold text-ink">{area.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{area.description}</p>
                <p className="mt-8 text-sm font-bold text-leaf-dark transition group-hover:text-leaf">{content.open}</p>
              </Link>
            ))}
          </div>
        </section>
        <footer className="bg-ink py-12 text-white">
          <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <LogoMark className="h-12 w-12 shrink-0 text-[#B9976B]" />
              <div>
                <p className="text-lg font-black">{content.headline}</p>
                <p className="text-sm text-[#BDBDBD]">{content.footerSubtitle}</p>
              </div>
            </div>
            <Link className="text-sm font-bold text-white transition hover:text-sand-soft" href="/workspace">{content.footerAction}</Link>
          </div>
        </footer>
      </main>
    </>
  );
}

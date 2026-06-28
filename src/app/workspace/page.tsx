"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { useSiteLanguage } from "@/components/LanguageProvider";

const copy = {
  zh: {
    eyebrow: "工作台",
    title: "Project 工作台",
    description: "第一版工作台先把项目创建作为平台主入口。后续所有工具、模板、方案和资源匹配都会围绕同一个 Project 展开。",
    primary: "打开演示项目",
    secondary: "准备输入资料",
    flow: ["建立项目上下文", "整理工况与资料", "选择工具和模板", "生成方案框架", "对接工程师或供应资源"]
  },
  en: {
    eyebrow: "Workspace",
    title: "Project Workspace",
    description: "The first workspace version uses project creation as the main platform entry. Tools, templates, plans, and resource matching all run around the same Project.",
    primary: "Open Demo Project",
    secondary: "Prepare Inputs",
    flow: ["Create project context", "Structure conditions and files", "Choose tools and templates", "Generate plan framework", "Connect engineers or suppliers"]
  }
};

export default function WorkspacePage() {
  const { t } = useSiteLanguage();
  const content = t(copy);

  return (
    <>
      <Header />
      <main className="container-page py-16 sm:py-20">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">{content.eyebrow}</p>
          <h1 className="mt-5 text-5xl font-extrabold leading-tight sm:text-7xl">{content.title}</h1>
          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">{content.description}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link className="btn-primary" href="/workspace/demo-vocs">{content.primary}</Link>
            <Link className="btn-secondary" href="/templates">{content.secondary}</Link>
          </div>
        </section>
        <section className="mt-16 grid gap-4 md:grid-cols-5">
          {content.flow.map((item, index) => (
            <article className="rounded-[24px] bg-white p-5 shadow-soft ring-1 ring-black/[0.04]" key={item}>
              <p className="text-sm font-bold text-leaf">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-8 text-lg font-extrabold">{item}</h2>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

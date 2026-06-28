"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { useSiteLanguage } from "@/components/LanguageProvider";

const copy = {
  zh: {
    eyebrow: "知识库",
    title: "工程经验、方法论与标准资料",
    description: "Knowledge 是 Project 的知识沉淀层，让每一次判断、复核和交付都能转化成可复用资产。",
    open: "打开",
    items: [
      { title: "工程经验", description: "沉淀项目沟通、风险识别和工艺路线判断经验。", href: "/samples" },
      { title: "方法论", description: "沉淀工况采集、售前沟通和方案生成的方法框架。", href: "/templates" },
      { title: "标准资料", description: "整理模板、清单、样张和供应商资料。", href: "/library" }
    ]
  },
  en: {
    eyebrow: "Knowledge",
    title: "Engineering experience, methods, and standard materials",
    description: "Knowledge is the reusable asset layer of each Project, turning judgments, reviews, and deliveries into repeatable materials.",
    open: "Open",
    items: [
      { title: "Engineering Experience", description: "Capture project communication, risk identification, and process route judgment experience.", href: "/samples" },
      { title: "Methods", description: "Build methods for condition collection, presales communication, and plan generation.", href: "/templates" },
      { title: "Standard Materials", description: "Organize templates, checklists, samples, and supplier materials.", href: "/library" }
    ]
  }
};

export default function KnowledgePage() {
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
        </section>
        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {content.items.map((item) => (
            <Link className="rounded-[28px] bg-white p-7 shadow-soft ring-1 ring-black/[0.04] transition hover:-translate-y-1 hover:bg-hover-warm hover:shadow-float" href={item.href} key={item.href}>
              <h2 className="text-2xl font-extrabold">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
              <p className="mt-8 text-sm font-bold text-leaf-dark">{content.open}</p>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

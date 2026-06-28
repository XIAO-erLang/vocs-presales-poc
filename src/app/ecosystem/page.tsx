"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { useSiteLanguage } from "@/components/LanguageProvider";

const copy = {
  zh: {
    eyebrow: "生态协同",
    title: "工程师与供应商协同网络",
    description: "Ecosystem 是 Project 的外部协同层，把工程师、供应商和机械设计资源放回同一个项目上下文。",
    open: "打开",
    items: [
      { title: "工程师协同", description: "用于复杂项目复核、方案边界确认和风险判断。", href: "/engineers" },
      { title: "供应商协同", description: "用于设备、材料和供应能力的项目化匹配。", href: "/suppliers" },
      { title: "机械设计协作", description: "用于箱体、风管、支架和非标结构协同。", href: "/mechanical" }
    ]
  },
  en: {
    eyebrow: "Ecosystem",
    title: "Engineer and supplier collaboration network",
    description: "Ecosystem is the external collaboration layer of a Project, keeping engineers, suppliers, and mechanical design resources in the same context.",
    open: "Open",
    items: [
      { title: "Engineer Collaboration", description: "For complex project review, boundary confirmation, and risk judgment.", href: "/engineers" },
      { title: "Supplier Collaboration", description: "For project-based matching of equipment, materials, and supply capabilities.", href: "/suppliers" },
      { title: "Mechanical Design", description: "For cabinets, ducts, supports, and non-standard structure collaboration.", href: "/mechanical" }
    ]
  }
};

export default function EcosystemPage() {
  const { t } = useSiteLanguage();
  const content = t(copy);

  return (
    <>
      <Header />
      <main className="container-page py-16 sm:py-20">
        <section className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">{content.eyebrow}</p>
          <h1 className="mt-5 text-5xl font-extrabold leading-tight sm:text-7xl">{content.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted sm:text-lg">{content.description}</p>
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

import Link from "next/link";
import { Header } from "@/components/Header";

const librarySections = [
  { title: "资料样张", description: "查看工况表、问题库、现场清单和风险提示的样张。", href: "/samples" },
  { title: "标准模板", description: "沉淀可复用的售前沟通与工况采集资料。", href: "/templates" },
  { title: "供应商资料", description: "以项目需求为中心整理供应商资料与适用场景。", href: "/suppliers" }
];

export default function LibraryPage() {
  return (
    <>
      <Header />
      <main className="container-page py-16 sm:py-20">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">Library</p>
          <h1 className="mt-5 text-5xl font-extrabold leading-tight sm:text-7xl">项目资料库</h1>
          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
            Library 是 Project 的资料沉淀层：样张、模板、供应商信息和后续案例资料都在这里形成可复用资产。
          </p>
        </section>
        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {librarySections.map((section) => (
            <Link className="rounded-[28px] bg-white p-7 shadow-soft ring-1 ring-black/[0.04] transition hover:-translate-y-1 hover:bg-hover-warm hover:shadow-float" href={section.href} key={section.href}>
              <h2 className="text-2xl font-extrabold">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{section.description}</p>
              <p className="mt-8 text-sm font-bold text-leaf-dark">Open</p>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

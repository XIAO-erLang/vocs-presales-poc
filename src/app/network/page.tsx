import Link from "next/link";
import { Header } from "@/components/Header";

const networkAreas = [
  {
    title: "工程师复核",
    description: "复杂项目、报价风险、路线判断和方案边界确认。",
    href: "/engineers"
  },
  {
    title: "机械设计协作",
    description: "箱体、风管、支架、平台和非标结构协作入口。",
    href: "/mechanical"
  },
  {
    title: "供应商资料库",
    description: "围绕项目需求查看设备、材料和供应资源资料。",
    href: "/suppliers"
  }
];

export default function NetworkPage() {
  return (
    <>
      <Header />
      <main className="container-page py-16 sm:py-20">
        <section className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">Network</p>
          <h1 className="mt-5 text-5xl font-extrabold leading-tight sm:text-7xl">围绕 Project 匹配资源</h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            Network 把工程师、机械设计协作和供应商资料统一放在同一个项目语境下，避免用户带着零散信息反复沟通。
          </p>
        </section>
        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {networkAreas.map((area) => (
            <Link className="rounded-[28px] bg-white p-7 shadow-soft ring-1 ring-black/[0.04] transition hover:-translate-y-1 hover:bg-hover-warm hover:shadow-float" href={area.href} key={area.href}>
              <h2 className="text-2xl font-extrabold">{area.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{area.description}</p>
              <p className="mt-8 text-sm font-bold text-leaf-dark">Open</p>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

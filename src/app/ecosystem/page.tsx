import Link from "next/link";
import { Header } from "@/components/Header";

const ecosystemItems = [
  { title: "工程师协同", description: "用于复杂项目复核、方案边界确认和风险判断。", href: "/engineers" },
  { title: "供应商协同", description: "用于设备、材料和供应能力的项目化匹配。", href: "/suppliers" },
  { title: "机械设计协作", description: "用于箱体、风管、支架和非标结构协同。", href: "/mechanical" }
];

export default function EcosystemPage() {
  return (
    <>
      <Header />
      <main className="container-page py-16 sm:py-20">
        <section className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">Ecosystem</p>
          <h1 className="mt-5 text-5xl font-extrabold leading-tight sm:text-7xl">工程师与供应商协同网络</h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            Ecosystem 是 Project 的外部协同层，把工程师、供应商和机械设计资源放回同一个项目上下文。
          </p>
        </section>
        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {ecosystemItems.map((item) => (
            <Link className="rounded-[28px] bg-white p-7 shadow-soft ring-1 ring-black/[0.04] transition hover:-translate-y-1 hover:bg-hover-warm hover:shadow-float" href={item.href} key={item.href}>
              <h2 className="text-2xl font-extrabold">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
              <p className="mt-8 text-sm font-bold text-leaf-dark">Open</p>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

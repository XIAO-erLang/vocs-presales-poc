import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { engineers } from "@/lib/engineers";
import { engineerRevenueShare } from "@/lib/pricing";

export default function EngineersPage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <SectionTitle
          eyebrow="工程师对接"
          title="复杂项目先找工程师复核"
          description="这里展示的是对接流程和示例工程师，不开放真实支付、真实分账或公开个人敏感信息。"
        />
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="panel p-4"><strong>客户支付</strong><p>{engineerRevenueShare.customerPays}</p></div>
          <div className="panel p-4"><strong>工程师获得</strong><p>{engineerRevenueShare.engineerGets}</p></div>
          <div className="panel p-4"><strong>平台保留</strong><p>{engineerRevenueShare.platformKeeps}</p></div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {engineers.map((engineer) => (
            <article className="panel flex flex-col p-5" key={engineer.slug}>
              <p className="text-sm font-black text-steel">{engineer.specialty}</p>
              <h2 className="mt-3 text-xl font-black">{engineer.displayName}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {engineer.tags.map((tag) => (
                  <span className="rounded-md bg-field px-2 py-1 text-xs font-bold text-muted" key={tag}>{tag}</span>
                ))}
              </div>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted">
                {engineer.services.map((service) => <li key={service}>{service}</li>)}
              </ul>
              <div className="mt-auto grid gap-3 pt-5">
                <Link className="btn-secondary" href={`/engineers/${engineer.slug}`}>查看工程师资料</Link>
                <Link className="btn-primary" href={`/engineers/${engineer.slug}/request`}>申请对接</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <BoundaryNote />
        </div>
      </main>
    </>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { PlatformBoundaryStatement } from "@/components/PlatformBoundaryStatement";
import { engineers, getEngineer } from "@/lib/engineers";

const requiredFields = ["客户称呼", "客户邮箱", "项目地区", "客户身份", "项目类型", "当前阶段", "希望工程师解决的问题", "是否已有方案或报价"];
const optionalFields = ["行业类型", "废气来源", "废气成分", "风量", "浓度", "温度", "湿度", "运行时间", "现有治理设备", "排放标准或地区要求", "附件 / 补充说明占位"];

export function generateStaticParams() {
  return engineers.map((engineer) => ({ slug: engineer.slug }));
}

export default async function EngineerRequestPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const engineer = getEngineer(slug);

  if (!engineer) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">对接申请</p>
        <h1 className="text-4xl font-black leading-tight">申请对接：{engineer.displayName}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          第一版只展示申请表和流程，不做真实支付、真实邮件发送、真实分账或附件上传。
        </p>
        <section className="panel mt-8 p-5">
          <h2 className="text-xl font-black">必填简表</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {requiredFields.map((field) => (
              <label className="grid gap-2 text-sm font-bold" key={field}>{field}<input className="rounded-md border border-line bg-paper px-3 py-2 font-normal" placeholder="UI 占位" /></label>
            ))}
          </div>
        </section>
        <section className="panel mt-6 p-5">
          <h2 className="text-xl font-black">选填工况信息</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {optionalFields.map((field) => (
              <label className="grid gap-2 text-sm font-bold" key={field}>{field}<input className="rounded-md border border-line bg-paper px-3 py-2 font-normal" placeholder="UI 占位" /></label>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="btn-secondary" type="button">提交 mock 申请</button>
            <Link className="btn-primary" href={`/checkout?type=engineer&slug=${engineer.slug}`}>
              支付 129 元并进入接单流程
            </Link>
          </div>
        </section>
        <section className="panel mt-6 p-5">
          <h2 className="text-xl font-black">对接流程</h2>
          <ol className="mt-4 grid gap-2 text-sm leading-6 text-muted">
            {["客户选择工程师", "支付 129 元对接费，当前仅占位", "工程师 30 分钟优先接单", "未响应时通知同领域候选工程师", "客户确认是否更换接单工程师", "最长等待 24 小时", "接单后通过三方邮件对接", "完成后进入收益边界说明"].map((step, index) => (
              <li key={step}>{index + 1}. {step}</li>
            ))}
          </ol>
          <div className="mt-5 rounded-md border border-line bg-hint p-4 text-sm leading-6 text-ink">
            129 元为平台协助发起一次工程师项目对接的服务费用。后续深度服务由客户与工程师自行确认范围、费用、周期和责任边界，源解不抽后续工程大单。
          </div>
        </section>
        <div className="mt-8">
          <PlatformBoundaryStatement compact />
        </div>
        <div className="mt-8">
          <BoundaryNote />
        </div>
      </main>
    </>
  );
}

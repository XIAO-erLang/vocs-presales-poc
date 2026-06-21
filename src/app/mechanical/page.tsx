import Link from "next/link";
import { Header } from "@/components/Header";
import { PlatformBoundaryStatement } from "@/components/PlatformBoundaryStatement";
import { SectionTitle } from "@/components/SectionTitle";

const designDirections = [
  "活性炭箱体",
  "喷淋塔",
  "催化燃烧设备外壳",
  "RTO / RCO 设备结构",
  "风管与管道布置",
  "阀门与检修口布置",
  "设备支架",
  "平台爬梯",
  "非标设备结构优化",
  "设备布置草图",
  "三维建模与二维出图"
];

export default function MechanicalPage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">机械设计协作</p>
        <h1 className="text-4xl font-black leading-tight">环保设备与非标结构设计协作预留</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          面向环保设备、非标设备、箱体、风管、支架、平台、设备布置、钣金结构、三维建模、二维图纸等需求，协助客户发起机械设计师对接。
        </p>

        <section className="mt-8">
          <SectionTitle eyebrow="适合的设计方向" title="先把机械设计需求说清楚" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {designDirections.map((item) => (
              <article className="panel p-4" key={item}>
                <p className="font-black">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel mt-8 p-5">
          <h2 className="text-xl font-black">第一版协作方式</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            当前只做展示和申请入口，不接真实接单系统。后续可根据实际需求复用工程师对接订单结构，或新增 mechanical 类型的 mock checkout。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary" href="/intent">
              邮件提交机械设计需求
            </Link>
            <Link className="btn-secondary" href="/cooperate">
              机械设计师合作入口
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-panel border border-line bg-hint p-5 text-sm leading-7 text-ink">
          <p className="mb-2 font-black text-danger">机械设计师服务边界</p>
          <p>
            平台仅协助发起机械设计需求对接，不承诺最终设计成果、制造适配性、强度校核、审图合规或项目验收结果。正式设计范围、交付物、费用、周期和责任由客户与设计师另行确认。
          </p>
        </section>

        <div className="mt-8">
          <PlatformBoundaryStatement compact />
        </div>
      </main>
    </>
  );
}

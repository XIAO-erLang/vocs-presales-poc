import Link from "next/link";
import { Header } from "@/components/Header";
import { PlatformBoundaryStatement } from "@/components/PlatformBoundaryStatement";

const suitable = [
  "熟悉 VOCs / 废气治理 / 臭气治理 / 除尘 / 预处理等方向",
  "能进行前期技术判断",
  "能看懂客户工况",
  "能识别方案风险",
  "能提供基础复核、沟通建议或技术路线判断"
];

const gains = [
  "项目首次对接服务报酬",
  "工具/模板/方案模块内容共建收益",
  "个人专业能力展示",
  "更高质量的结构化客户线索",
  "后续深度服务由客户与工程师自行协商，平台不抽后续大单"
];

export default function EngineerJoinPage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">环保工程师合作</p>
        <h1 className="text-4xl font-black leading-tight">加入源解工程师协作网络</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          源解的目标是帮助工程师减少无效沟通、提高有效客户触达效率，把前期判断、复核经验和标准化资料沉淀为可复用的工程知识资产。
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <InfoPanel title="适合谁" items={suitable} />
          <InfoPanel title="工程师可获得什么" items={gains} />
        </div>

        <section className="mt-8 rounded-panel border border-line bg-hint p-5 text-sm leading-7 text-ink">
          <p className="mb-2 font-black text-danger">工程师服务边界</p>
          <p>
            工程师通过平台参与的初步对接，不等同于完整工程设计、施工图设计、检测验收、达标承诺或项目总包责任。后续正式服务由工程师与客户另行确认合同、范围、费用、周期和责任。
          </p>
        </section>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link className="btn-primary" href="/intent">
            邮件申请加入
          </Link>
          <Link className="btn-secondary" href="/engineers">
            查看工程师对接页
          </Link>
        </div>

        <div className="mt-8">
          <PlatformBoundaryStatement compact />
        </div>
      </main>
    </>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="panel p-5">
      <h2 className="text-xl font-black">{title}</h2>
      <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted">
        {items.map((item) => (
          <li className="flex gap-2" key={item}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

import Link from "next/link";
import { Header } from "@/components/Header";
import { PlatformBoundaryStatement } from "@/components/PlatformBoundaryStatement";
import { SectionTitle } from "@/components/SectionTitle";

const partnerCards = [
  {
    title: "环保工程师",
    href: "/engineers/join",
    description: "适合熟悉 VOCs、废气治理、臭气治理、除尘、预处理等方向，能进行前期技术判断和风险识别的人。",
    gains: ["项目首次对接服务报酬", "工具/模板/方案模块内容共建收益", "个人专业能力展示", "结构化客户线索"]
  },
  {
    title: "机械设计师",
    href: "/mechanical",
    description: "适合参与环保设备、非标结构、箱体、风管、支架、平台、三维建模与二维出图协作。",
    gains: ["结构化设计需求", "环保设备协作入口", "专业能力展示", "后续深度服务自行协商"]
  },
  {
    title: "优质供应商",
    href: "/suppliers/join",
    description: "适合主营产品、适用工况、案例类型和服务边界清晰，愿意接受资料审核的供应商。",
    gains: ["更结构化的项目曝光", "展示产品能力和适用边界", "被客户和工程师在合适场景下看到", "引导客户申请工程师复核"]
  },
  {
    title: "内容共建伙伴",
    href: "/intent",
    description: "适合有环保工程经验、模板资料、计算表格、项目复盘、设备选型资料或培训方法论的人。",
    gains: ["计算工具共建", "标准模板与资料包共建", "案例复盘和方法论文章", "按确认规则参与收益分成"]
  }
];

export default function CooperatePage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">合作入口</p>
        <h1 className="text-4xl font-black leading-tight">加入源解合作网络</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          面向环保工程师、机械设计师、优质供应商与内容共建伙伴的协作入口。
        </p>
        <section className="panel mt-8 p-5">
          <p className="text-sm leading-7 text-muted">
            源解不是传统中介平台，也不是工程总包平台。我们希望把环保工程前期判断、售前沟通、工具模板、工程经验和优质资源沉淀为可复用、可交易、可持续积累的工程知识资产。
          </p>
        </section>

        <section className="mt-10">
          <SectionTitle eyebrow="四类合作方" title="你可以用哪种方式加入？" />
          <div className="grid gap-4 md:grid-cols-2">
            {partnerCards.map((card) => (
              <article className="panel flex h-full flex-col p-5" key={card.title}>
                <h2 className="text-2xl font-black">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted">
                  {card.gains.map((gain) => (
                    <li className="flex gap-2" key={gain}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                      <span>{gain}</span>
                    </li>
                  ))}
                </ul>
                <Link className="btn-secondary mt-6" href={card.href}>
                  查看合作说明
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="panel mt-10 p-5">
          <h2 className="text-xl font-black">内容共建收益边界</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            内容共建伙伴可根据内容贡献类型、销售情况和双方确认规则，参与工具、模板、资料包或方案模块的收益分成。具体收益比例、结算周期、授权范围和署名方式，以双方确认的合作规则为准。
          </p>
        </section>

        <div className="mt-8">
          <PlatformBoundaryStatement />
        </div>
      </main>
    </>
  );
}

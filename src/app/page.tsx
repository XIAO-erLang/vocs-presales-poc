import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { PlatformBoundaryStatement } from "@/components/PlatformBoundaryStatement";
import { PlatformModuleCard } from "@/components/PlatformModuleCard";
import { SectionTitle } from "@/components/SectionTitle";
import { painPoints } from "@/lib/data";
import { platformModules, startPaths } from "@/lib/platform";
import { pricingItems } from "@/lib/pricing";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="container-page grid gap-8 py-10 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
          <div>
            <p className="eyebrow mb-3">环境工程技术支持与资源协同平台</p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-normal sm:text-6xl lg:text-7xl">
              源解
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              从污染源、工况源和需求源出发，协助环保项目参与者完成前期判断、技术路径梳理、工程师对接与供应资源匹配。
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
              源解以 VOCs 废气治理为切入口，提供计算工具、标准模板、方案框架、工程师对接、机械设计协作与供应商资料库，帮助客户、初级环保工程师、售前人员和项目经理更快完成项目前期判断、技术沟通与资源匹配。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="#modules">
                查看六大板块
              </Link>
              <Link className="btn-secondary" href="#audience">
                选择我的入口
              </Link>
              <Link className="btn-secondary" href="/cooperate">
                加入合作网络
              </Link>
            </div>
            <div className="mt-6 max-w-3xl">
              <BoundaryNote compact />
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="mb-5 border-b border-line pb-4">
              <p className="text-sm font-black text-steel">源解服务范围</p>
              <h2 className="mt-2 text-2xl font-black">工具、知识资产与资源协同的轻量闭环</h2>
            </div>
            <div className="grid gap-3">
              {pricingItems.slice(0, 5).map((item) => (
                <div className="rounded-md border border-line bg-field p-4" key={item.name}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-muted">{item.name}</span>
                    <strong className="text-sm text-leaf-dark">{item.price}</strong>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.status}，当前为 mock 支付与服务验证。</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page py-12" id="audience">
          <SectionTitle
            eyebrow="双入口"
            title="先选你现在的角色"
            description="源解同时服务客户侧和从业者侧：一边帮助客户整理需求、匹配资源，一边帮助从业者沉淀工具、模板和经验。"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <AudienceCard
              title="我是客户"
              audience="甲方企业、环保项目负责人、环保公司老板、采购/项目管理人员、想判断方案是否靠谱的人"
              description="我想快速判断项目方向、整理工况资料、了解可选技术路径，并在需要时对接合适的工程师、机械设计师或供应资源。"
              features={["初步方案框架", "工程师对接", "机械设计协作", "供应商资料库", "邮件咨询"]}
              links={[
                { href: "/plans", label: "看方案框架" },
                { href: "/engineers", label: "找工程师" },
                { href: "/mechanical", label: "机械设计" },
                { href: "/suppliers", label: "看供应商" },
                { href: "/intent", label: "邮件咨询" }
              ]}
            />
            <AudienceCard
              title="我是从业者"
              audience="初级环保工程师、环保销售、售前技术支持、项目经理、设备厂家新人、环保专业学生"
              description="我想提高售前沟通、技术判断、资料整理和方案输出效率，减少重复工作，快速获得可复用的工具、模板和方法。"
              features={["计算工具", "标准模板", "工况表单", "方案框架", "客户沟通问题库", "工程案例与资料参考"]}
              links={[
                { href: "/tools", label: "用计算工具" },
                { href: "/templates", label: "看模板" },
                { href: "/plans", label: "做方案框架" },
                { href: "/samples", label: "看资料样张" }
              ]}
            />
          </div>
        </section>

        <section className="container-page py-12" id="modules">
          <SectionTitle
            eyebrow="六大板块"
            title="源解的六个协同入口"
            description="VOCs 废气治理仍然是第一个切入口，后续逐步扩展到更多环境工程前期判断和资源协同场景。"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {platformModules.map((module, index) => (
              <PlatformModuleCard module={module} index={index} key={module.href} />
            ))}
          </div>
        </section>

        <section className="container-page py-12">
          <SectionTitle eyebrow="推荐路径" title="我该从哪里开始？" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {startPaths.map((path) => (
              <Link className="panel block p-5 transition hover:-translate-y-0.5 hover:shadow-soft" href={path.href} key={path.problem}>
                <p className="text-sm leading-6 text-muted">{path.problem}</p>
                <p className="mt-4 text-lg font-black text-leaf-dark">{path.target}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="container-page py-12">
          <PlatformBoundaryStatement />
        </section>

        <section className="container-page py-12">
          <SectionTitle
            eyebrow="原 POC 主线"
            title="VOCs 售前助手仍然保留"
            description="源解从 VOCs 废气治理切入，后续再逐步扩展到臭气、除尘、预处理、机械设计协作、供应商对接等环境工程前期场景。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {painPoints.map((point, index) => (
              <article className="panel p-4" key={point}>
                <span className="mb-4 block text-sm font-black text-amber">痛点 {index + 1}</span>
                <p className="text-sm leading-6 text-ink">{point}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function AudienceCard({
  title,
  audience,
  description,
  features,
  links
}: {
  title: string;
  audience: string;
  description: string;
  features: string[];
  links: { href: string; label: string }[];
}) {
  return (
    <section className="panel flex h-full flex-col p-5 sm:p-6">
      <p className="eyebrow mb-3">{audience}</p>
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {features.map((feature) => (
          <span className="rounded-md border border-line bg-field px-2.5 py-1 text-xs font-bold text-muted" key={feature}>
            {feature}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {links.map((link, index) => (
          <Link className={index === 0 ? "btn-primary" : "btn-secondary"} href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { LogoMark } from "@/components/LogoMark";
import { PlatformBoundaryStatement } from "@/components/PlatformBoundaryStatement";
import { PlatformModuleCard } from "@/components/PlatformModuleCard";
import { SectionTitle } from "@/components/SectionTitle";
import { painPoints } from "@/lib/data";
import { platformModules, startPaths } from "@/lib/platform";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_62%,#F8F8F6_100%)]">
          <div className="container-page grid gap-12 py-20 sm:py-24 lg:min-h-[calc(100vh-65px)] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-28">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <LogoMark className="h-9 w-9 shrink-0 text-logo-green sm:h-10 sm:w-10" />
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-logo-green sm:text-sm">VOCs-focused</p>
              </div>
              <h1 className="max-w-[8ch] text-6xl font-extrabold leading-[1.05] tracking-normal text-ink sm:text-7xl lg:text-[clamp(72px,8vw,112px)]">
                源解环保
              </h1>
              <h2 className="mt-7 max-w-[24ch] text-3xl font-semibold leading-[1.18] tracking-normal text-ink sm:text-4xl lg:text-[40px]">
                环境工程技术支持与资源协同平台
              </h2>
              <p className="mt-6 max-w-[600px] text-base !leading-[1.7] text-muted sm:text-lg lg:text-xl">
                把复杂的 VOCs 工况信息、技术判断和资源对接流程，整理成可沟通、可复用的前期方案框架。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link className="btn-primary" href="#modules">
                  开始使用平台
                </Link>
                <Link className="btn-secondary" href="/templates">
                  浏览资料库
                </Link>
              </div>
              <div className="mt-10 max-w-3xl">
                <BoundaryNote compact />
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-5 shadow-float ring-1 ring-black/[0.04] sm:p-7">
              <div className="mb-7 flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-black text-leaf">平台能力预览</p>
                  <h2 className="mt-2 text-2xl font-black text-ink">从工况到方案框架</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    把前期沟通中散落的信息，整理成可复核、可分工、可沉淀的项目资料。
                  </p>
                </div>
                <span className="hidden rounded-full bg-field px-3 py-1 text-xs font-bold text-logo-green sm:inline-flex">
                  VOCs-focused
                </span>
              </div>
              <div className="grid gap-3">
                {[
                  { step: "01", title: "工况信息整理", desc: "风量、浓度、成分、温度、排放要求" },
                  { step: "02", title: "技术路径判断", desc: "活性炭、喷淋、RCO、RTO 等路线提示" },
                  { step: "03", title: "资源协同入口", desc: "工程师复核、机械设计、供应商资料" }
                ].map((item) => (
                  <div className="rounded-3xl bg-field p-4 transition hover:bg-hover-warm" key={item.step}>
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-xs font-black text-leaf shadow-[0_6px_18px_rgba(46,46,46,0.06)]">
                        {item.step}
                      </span>
                      <div>
                        <strong className="text-sm text-ink">{item.title}</strong>
                        <p className="mt-1 text-sm leading-6 text-muted">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl bg-[#F8F8F6] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-leaf">VOCs-focused</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  先从 VOCs 废气治理切入，再扩展到臭气、除尘、预处理和供应资源协同。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-page py-20 sm:py-24" id="audience">
          <SectionTitle
            eyebrow="双入口"
            title="先选你现在的角色"
            description="源解同时服务客户侧和从业者侧：一边帮助客户整理需求、匹配资源，一边帮助从业者沉淀工具、模板和经验。"
          />
          <div className="grid gap-5 lg:grid-cols-2">
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

        <section className="bg-field py-20 sm:py-24" id="modules">
          <div className="container-page">
            <SectionTitle
              eyebrow="六大板块"
              title="源解的六个协同入口"
              description="VOCs 废气治理仍然是第一个切入口，后续逐步扩展到更多环境工程前期判断和资源协同场景。"
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {platformModules.map((module, index) => (
                <PlatformModuleCard module={module} index={index} key={module.href} />
              ))}
            </div>
          </div>
        </section>

        <section className="container-page py-20 sm:py-24">
          <SectionTitle eyebrow="推荐路径" title="我该从哪里开始？" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {startPaths.map((path) => (
              <Link className="panel block p-6 transition duration-200 hover:-translate-y-1 hover:bg-hover-warm hover:shadow-float" href={path.href} key={path.problem}>
                <p className="text-sm leading-6 text-muted">{path.problem}</p>
                <p className="mt-4 text-lg font-black text-leaf-dark">{path.target}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="container-page py-4">
          <PlatformBoundaryStatement />
        </section>

        <section className="container-page py-20 sm:py-24">
          <SectionTitle
            eyebrow="原 POC 主线"
            title="VOCs 售前助手仍然保留"
            description="源解从 VOCs 废气治理切入，后续再逐步扩展到臭气、除尘、预处理、机械设计协作、供应商对接等环境工程前期场景。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {painPoints.map((point, index) => (
              <article className="panel p-5" key={point}>
                <span className="mb-4 block text-sm font-black text-leaf">痛点 {index + 1}</span>
                <p className="text-sm leading-6 text-ink">{point}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-8 bg-ink py-12 text-white">
          <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <LogoMark className="h-12 w-12 shrink-0 text-white" />
              <div>
                <p className="text-lg font-black">源解环保</p>
                <p className="text-sm text-[#BDBDBD]">SourceLink Env</p>
              </div>
            </div>
            <div className="text-sm leading-6 text-[#BDBDBD]">
              <p>环境工程技术支持与资源协同平台</p>
              <p>用于前期判断、资料整理、工程师对接和供应资源匹配。</p>
            </div>
            <Link className="text-sm font-bold text-white transition hover:text-sand-soft" href="/intent">
              邮件咨询
            </Link>
          </div>
        </footer>
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
    <section className="panel flex h-full flex-col p-6 transition duration-200 hover:-translate-y-1 hover:bg-hover-warm hover:shadow-float sm:p-7">
      <p className="eyebrow mb-3">{audience}</p>
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {features.map((feature) => (
          <span className="rounded-full bg-field px-3 py-1.5 text-xs font-bold text-muted" key={feature}>
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

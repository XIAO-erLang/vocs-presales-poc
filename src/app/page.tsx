import { LogoMark } from "@/components/LogoMark";

const statusItems = [
  "VOCs 工况输入与初筛方案生成正在内测",
  "Workspace UI 收敛版已作为当前基准保留",
  "正式上线前暂不开放公开访问入口"
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="container-page flex min-h-screen items-center py-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-xl border border-[#E8E8E8] bg-[#F6F7F8]">
            <LogoMark className="h-12 w-12 text-logo-green" />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.1em] text-logo-green">SourceLink Env</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-[0.5px] text-[#1F1F1F] sm:text-7xl">
            网站内测中
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            源解环保 VOCs 工程预售平台正在进行 V1 内测与产品闭环验证。当前首页仅作为上线前状态提示，内部测试页面仍可通过直接链接访问。
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
            {statusItems.map((item) => (
              <div className="rounded-xl border border-[#E8E8E8] bg-[#F6F7F8] p-4 text-sm leading-6 text-muted" key={item}>
                {item}
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-6 text-muted">
            如需测试内部功能，请使用已提供的直接测试链接访问对应页面。
          </p>
        </div>
      </section>
    </main>
  );
}

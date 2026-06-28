"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/LogoMark";
import { useSiteLanguage } from "@/components/LanguageProvider";

const navItems = [
  { href: "/", label: { zh: "首页", en: "Home" } },
  { href: "/workspace", label: { zh: "工作台", en: "Workspace" } },
  { href: "/tools", label: { zh: "工具", en: "Tools" } },
  { href: "/templates", label: { zh: "模板", en: "Templates" } },
  { href: "/plans", label: { zh: "方案", en: "Plans" } },
  { href: "/engineers", label: { zh: "工程师", en: "Engineers" } },
  { href: "/suppliers", label: { zh: "供应商", en: "Suppliers" } },
  { href: "/ecosystem", label: { zh: "生态", en: "Ecosystem" } },
  { href: "/knowledge", label: { zh: "知识库", en: "Knowledge" } }
];

export function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useSiteLanguage();

  return (
    <header className="sticky top-0 z-20 border-b border-[#E5E5E5] bg-white/90 backdrop-blur-xl">
      <div className="container-page flex flex-col gap-2 py-2 lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:py-2.5">
        <Link className="flex min-w-0 items-center gap-3" href="/">
          <LogoMark className="h-8 w-8 shrink-0 text-[#B9976B] sm:h-9 sm:w-9" />
          <span className="min-w-0">
            <strong className="block truncate text-base font-black leading-tight text-ink">{t({ zh: "源解环保", en: "SourceLink Env" })}</strong>
            <span className="hidden truncate text-xs font-normal leading-tight text-muted sm:block sm:text-sm">
              {t({ zh: "环境工程 AI 预售平台", en: "AI Presales Platform for Environmental Engineering" })}
            </span>
          </span>
        </Link>
        <div className="flex min-w-0 items-center gap-2">
          <nav className="flex gap-1 overflow-x-auto lg:gap-2" aria-label={t({ zh: "主导航", en: "Primary navigation" })}>
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  className={
                    active
                      ? "shrink-0 rounded-full bg-field px-3 py-1.5 text-sm font-bold text-leaf transition sm:px-3.5 sm:py-2"
                      : "shrink-0 rounded-full px-3 py-1.5 text-sm font-bold text-ink transition hover:bg-field hover:text-leaf sm:px-3.5 sm:py-2"
                  }
                  href={item.href}
                  key={item.href}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>
          <div className="flex shrink-0 rounded-full border border-line bg-field p-1" aria-label={t({ zh: "语言切换", en: "Language switch" })}>
            {(["zh", "en"] as const).map((item) => (
              <button
                className={
                  language === item
                    ? "rounded-full bg-white px-3 py-1.5 text-xs font-bold text-leaf shadow-[0_6px_16px_rgba(46,46,46,0.08)]"
                    : "rounded-full px-3 py-1.5 text-xs font-bold text-muted transition hover:text-ink"
                }
                key={item}
                onClick={() => setLanguage(item)}
                type="button"
              >
                {item === "zh" ? "中文" : "EN"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

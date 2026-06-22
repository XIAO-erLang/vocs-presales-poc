"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/LogoMark";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/workspace", label: "Workspace" },
  { href: "/tools", label: "Tools" },
  { href: "/templates", label: "Templates" },
  { href: "/plans", label: "Plans" },
  { href: "/network", label: "Network" },
  { href: "/library", label: "Library" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-[#E5E5E5] bg-white/90 backdrop-blur-xl">
      <div className="container-page flex flex-col gap-2 py-2 lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:py-2.5">
        <Link className="flex min-w-0 items-center gap-3" href="/">
          <LogoMark className="h-8 w-8 shrink-0 text-logo-green sm:h-9 sm:w-9" />
          <span className="min-w-0">
            <strong className="block truncate text-base font-black leading-tight text-ink">源解环保</strong>
            <span className="hidden truncate text-xs font-normal leading-tight text-muted sm:block sm:text-sm">SourceLink Env</span>
          </span>
        </Link>
        <nav className="flex gap-1 overflow-x-auto lg:gap-2" aria-label="主导航">
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
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

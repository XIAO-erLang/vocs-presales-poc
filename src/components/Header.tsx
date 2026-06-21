import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/tools", label: "工具" },
  { href: "/templates", label: "模板" },
  { href: "/plans", label: "方案框架" },
  { href: "/engineers", label: "工程师" },
  { href: "/mechanical", label: "机械设计" },
  { href: "/suppliers", label: "供应商" },
  { href: "/cooperate", label: "合作入口" },
  { href: "/intent", label: "邮件咨询" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-page flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between">
        <Link className="flex min-w-0 items-center gap-3" href="/">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-leaf-dark text-xs font-black text-white">
            源解
          </span>
          <span className="min-w-0">
            <strong className="block truncate text-base">源解</strong>
            <span className="block truncate text-xs text-muted">环境工程技术支持与资源协同平台</span>
          </span>
        </Link>
        <nav className="flex gap-2 overflow-x-auto" aria-label="主导航">
          {navItems.map((item) => (
            <Link
              className="shrink-0 rounded-md px-3 py-2 text-sm font-bold text-muted transition hover:bg-hint hover:text-leaf-dark"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

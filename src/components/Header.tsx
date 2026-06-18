import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/flow", label: "分流" },
  { href: "/samples", label: "样张" },
  { href: "/intent", label: "留资" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-field/95 backdrop-blur">
      <div className="container-page flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <Link className="flex items-center gap-3" href="/">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-leaf text-xs font-black text-white">
            VOC
          </span>
          <span>
            <strong className="block text-base">VOCs 废气治理售前助手</strong>
            <span className="block text-xs text-muted">轻量网页 POC v0.2</span>
          </span>
        </Link>
        <nav className="flex gap-2 overflow-x-auto" aria-label="主导航">
          {navItems.map((item) => (
            <Link
              className="rounded-md px-3 py-2 text-sm font-bold text-muted transition hover:bg-white hover:text-leaf-dark"
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

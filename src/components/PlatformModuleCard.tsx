import Link from "next/link";
import type { PlatformModule } from "@/lib/platform";

export function PlatformModuleCard({ module, index }: { module: PlatformModule; index: number }) {
  return (
    <article className="panel flex h-full flex-col p-6 transition duration-200 hover:-translate-y-1 hover:bg-hover-warm hover:shadow-float hover:ring-sand-soft">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">{module.eyebrow}</p>
          <h3 className="text-2xl font-black leading-tight text-ink">{module.title}</h3>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-field text-sm font-black text-logo-green shadow-[inset_0_0_0_1px_rgba(46,46,46,0.04)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="text-sm leading-6 text-muted">{module.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {module.audience.map((item) => (
          <span className="rounded-full bg-field px-3 py-1.5 text-xs font-bold text-muted" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-line pt-5">
        <p className="text-xs font-black text-steel">{module.status}</p>
        <ul className="mt-3 grid gap-2 text-sm leading-6">
          {module.features.slice(0, 3).map((feature) => (
            <li className="flex gap-2" key={feature}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link className="btn-secondary mt-5" href={module.href}>
        {module.primaryAction}
      </Link>
    </article>
  );
}

import Link from "next/link";
import type { PlatformModule } from "@/lib/platform";

export function PlatformModuleCard({ module, index }: { module: PlatformModule; index: number }) {
  return (
    <article className="panel flex h-full flex-col p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="eyebrow mb-2">{module.eyebrow}</p>
          <h3 className="text-xl font-black leading-tight">{module.title}</h3>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-field text-sm font-black text-leaf">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="text-sm leading-6 text-muted">{module.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {module.audience.map((item) => (
          <span className="rounded-md border border-line bg-field px-2.5 py-1 text-xs font-bold text-muted" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 border-t border-line pt-4">
        <p className="text-xs font-black text-steel">{module.status}</p>
        <ul className="mt-3 grid gap-2 text-sm leading-6">
          {module.features.slice(0, 3).map((feature) => (
            <li className="flex gap-2" key={feature}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
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

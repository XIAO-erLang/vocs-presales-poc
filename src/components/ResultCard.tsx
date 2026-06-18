import Link from "next/link";
import type { ResultContent } from "@/lib/types";

export function ResultCard({ result }: { result: ResultContent }) {
  return (
    <article className="panel p-5 sm:p-7">
      <p className="eyebrow mb-2">推荐结果</p>
      <h1 className="text-3xl font-black leading-tight tracking-normal sm:text-5xl">{result.title}</h1>
      <p className="mt-4 text-lg text-muted">{result.description}</p>
      <div className="mt-6 rounded-panel border border-line bg-field p-4">
        <strong className="block text-leaf-dark">{result.recommended}</strong>
        <ul className="mt-3 grid gap-2 text-sm text-ink sm:grid-cols-2">
          {result.includes.map((item) => (
            <li className="rounded-md bg-white px-3 py-2" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-5 text-muted">{result.nextStep}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link className="btn-primary" href="/samples">
          查看样张
        </Link>
        <Link className="btn-secondary" href="/intent">
          留下意向
        </Link>
      </div>
    </article>
  );
}

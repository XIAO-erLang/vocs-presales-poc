import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { ResultCard } from "@/components/ResultCard";
import { getResultForRole } from "@/lib/results";

export default function ResultPage({ searchParams }: { searchParams: { role?: string; need?: string; project?: string; action?: string } }) {
  const result = getResultForRole(searchParams.role);

  return (
    <>
      <Header />
      <main className="container-page grid gap-6 py-10 lg:grid-cols-[1fr_360px]">
        <ResultCard result={result} />
        <aside className="grid gap-4 self-start">
          <div className="panel p-5">
            <p className="eyebrow mb-2">你的选择</p>
            <dl className="grid gap-3 text-sm">
              <Info label="身份" value={searchParams.role || "sales"} />
              <Info label="需求" value={searchParams.need || "ask"} />
              <Info label="项目状态" value={searchParams.project || "active"} />
              <Info label="下一步" value={searchParams.action || "sample"} />
            </dl>
          </div>
          <BoundaryNote />
        </aside>
      </main>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-line bg-field p-3">
      <dt className="font-bold text-muted">{label}</dt>
      <dd className="mt-1 font-black text-ink">{value}</dd>
    </div>
  );
}

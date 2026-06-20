import Link from "next/link";
import { notFound } from "next/navigation";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { getSupplier, suppliers } from "@/lib/suppliers";

export function generateStaticParams() {
  return suppliers.map((supplier) => ({ slug: supplier.slug }));
}

export default async function SupplierDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supplier = getSupplier(slug);

  if (!supplier) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">{supplier.type}</p>
        <h1 className="text-4xl font-black leading-tight">{supplier.name}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{supplier.description}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <InfoPanel title="产品 / 服务能力" items={supplier.products} />
          <InfoPanel title="适用行业" items={supplier.industries} />
          <InfoPanel title="适用场景" items={supplier.suitableConditions} />
          <InfoPanel title="需谨慎场景" items={supplier.cautionConditions} />
          <InfoPanel title="代表案例类型" items={supplier.caseTypes} />
          <section className="panel p-5">
            <h2 className="text-lg font-black">平台资料说明</h2>
            <p className="mt-4 text-sm leading-6 text-muted">{supplier.dataStatus}</p>
            <p className="mt-3 text-sm leading-6 text-muted">服务区域：{supplier.serviceArea}</p>
          </section>
        </div>

        <section className="panel mt-8 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black text-steel">下一步操作</p>
              <p className="mt-1 text-sm text-muted">明确设备类型可发起供应商对接，不确定适配性则先申请工程师复核。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/intent">
                发起供应商对接
              </Link>
              <Link className="btn-secondary" href="/engineers">
                申请工程师复核
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-8">
          <BoundaryNote />
        </div>
      </main>
    </>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="panel p-5">
      <h2 className="text-lg font-black">{title}</h2>
      <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

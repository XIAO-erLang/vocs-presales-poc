import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { supplierCategories, suppliers } from "@/lib/suppliers";

export default function SuppliersPage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <SectionTitle
          eyebrow="优质供应商专栏"
          title="先展示资料完整、边界清楚的供应商"
          description="“优质”指资料完整、产品能力清晰、案例信息可核验、服务边界明确，并通过平台初步审核；不代表平台对具体项目效果作出承诺。"
        />
        <div className="mb-6 flex flex-wrap gap-2">
          {supplierCategories.map((category) => (
            <span className="rounded-md border border-line bg-paper px-3 py-2 text-sm font-bold text-muted" key={category}>
              {category}
            </span>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {suppliers.map((supplier) => (
            <article className="panel flex flex-col p-5" key={supplier.slug}>
              <p className="text-sm font-black text-steel">{supplier.type}</p>
              <h2 className="mt-3 text-xl font-black">{supplier.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{supplier.description}</p>
              <ul className="mt-4 grid gap-2 text-sm leading-6">
                <li>主营：{supplier.products.join("、")}</li>
                <li>服务区域：{supplier.serviceArea}</li>
                <li>资料状态：{supplier.dataStatus}</li>
              </ul>
              <div className="mt-auto grid gap-3 pt-5">
                <Link className="btn-secondary" href={`/suppliers/${supplier.slug}`}>
                  查看供应商资料
                </Link>
                <Link className="btn-primary" href="/engineers">
                  不确定是否适合？申请工程师复核
                </Link>
              </div>
            </article>
          ))}
        </div>
        <section className="panel mt-8 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black text-steel">供应商入驻开放中</p>
              <p className="mt-1 text-sm text-muted">如果没有合适供应商，宁可暂时空着，也不随便展示低质量资料。</p>
            </div>
            <Link className="btn-primary" href="/suppliers/join">
              申请进入供应商专栏
            </Link>
          </div>
        </section>
        <div className="mt-8">
          <BoundaryNote />
        </div>
      </main>
    </>
  );
}

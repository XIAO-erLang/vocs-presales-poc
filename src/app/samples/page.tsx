import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { sampleSections } from "@/lib/data";

export default function SamplesPage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <SectionTitle
          eyebrow="样张展示页"
          title="只展示部分内容，不交付完整资料"
          description="样张用于验证用户是否愿意继续了解，不展示完整表格、完整问题库和完整模板正文。"
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {sampleSections.map((section) => (
            <article className="panel p-5" key={section.title}>
              <h2 className="text-xl font-black">{section.title}</h2>
              <ul className="mt-4 grid gap-2 text-sm text-muted">
                {section.items.map((item) => (
                  <li className="rounded-md bg-field p-3" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_340px]">
          <BoundaryNote />
          <Link className="btn-primary" href="/intent">
            想获取资料，留下意向
          </Link>
        </div>
      </main>
    </>
  );
}

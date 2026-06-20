import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { templates } from "@/lib/templates";

export default function TemplatesPage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <SectionTitle
          eyebrow="标准模板"
          title="报价前先把问题问完整"
          description="模板的价值不是下载一个文件，而是帮助用户知道该问什么、哪些信息不能缺、哪些项目不能随便报价。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((template) => (
            <article className="panel flex flex-col p-5" key={template.slug}>
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-black">{template.name}</h2>
                <span className="rounded-md bg-field px-2.5 py-1 text-xs font-bold text-muted">{template.status}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">适合：{template.targetUsers.join("、")}</p>
              <ul className="mt-4 grid gap-2 text-sm leading-6">
                {template.previewItems.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-auto pt-5">
                <p className="mb-3 text-sm font-bold text-leaf-dark">{template.price}</p>
                <Link className="btn-primary w-full" href={`/templates/${template.slug}`}>
                  查看模板
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <BoundaryNote />
        </div>
      </main>
    </>
  );
}

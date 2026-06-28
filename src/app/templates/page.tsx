"use client";

import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { useSiteLanguage } from "@/components/LanguageProvider";

const copy = {
  zh: {
    eyebrow: "标准模板",
    title: "报价前先把问题问完整",
    description: "模板的价值不是下载一个文件，而是帮助用户知道该问什么、哪些信息不能缺、哪些项目不能随便报价。",
    target: "适合：",
    action: "查看模板",
    templates: [
      { slug: "vocs-condition-form", name: "VOCs 工况采集表", status: "示例版", price: "9.9", users: ["销售", "工程师", "客户初筛"], items: ["风量与浓度", "污染物成分", "运行时间"] },
      { slug: "site-checklist", name: "现场勘查清单", status: "示例版", price: "9.9", users: ["现场工程师", "售前支持"], items: ["设备位置", "管道路径", "安全边界"] },
      { slug: "quotation-risk", name: "报价风险提示清单", status: "即将开放", price: "9.9", users: ["销售", "方案负责人"], items: ["资料缺口", "工艺风险", "复核建议"] }
    ]
  },
  en: {
    eyebrow: "Templates",
    title: "Ask the right questions before quoting",
    description: "Templates help users know what to ask, what information cannot be missing, and which projects require review before quotation.",
    target: "For:",
    action: "View Template",
    templates: [
      { slug: "vocs-condition-form", name: "VOCs Condition Form", status: "Demo", price: "9.9", users: ["Sales", "Engineers", "Customer screening"], items: ["Airflow and concentration", "Pollutant components", "Operating hours"] },
      { slug: "site-checklist", name: "Site Check Checklist", status: "Demo", price: "9.9", users: ["Field engineers", "Presales support"], items: ["Equipment location", "Duct route", "Safety boundary"] },
      { slug: "quotation-risk", name: "Quotation Risk Checklist", status: "Coming Soon", price: "9.9", users: ["Sales", "Plan owner"], items: ["Missing information", "Process risk", "Review suggestion"] }
    ]
  }
};

export default function TemplatesPage() {
  const { t } = useSiteLanguage();
  const content = t(copy);

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.templates.map((template) => (
            <article className="panel flex flex-col p-5" key={template.slug}>
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-black">{template.name}</h2>
                <span className="rounded-md bg-field px-2.5 py-1 text-xs font-bold text-muted">{template.status}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">{content.target}{template.users.join(" / ")}</p>
              <ul className="mt-4 grid gap-2 text-sm leading-6">
                {template.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="mt-auto pt-5">
                <p className="mb-3 text-sm font-bold text-leaf-dark">{template.price}</p>
                <Link className="btn-primary w-full" href={`/templates/${template.slug}`}>{content.action}</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8"><BoundaryNote /></div>
      </main>
    </>
  );
}

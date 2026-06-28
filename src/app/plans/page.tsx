"use client";

import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { useSiteLanguage } from "@/components/LanguageProvider";

const copy = {
  zh: {
    eyebrow: "初步方案框架生成",
    title: "生成用于售前沟通的初步方案框架",
    description: "这里生成的是售前沟通框架，不是正式治理方案。复杂项目建议进入工程师复核。",
    formTitle: "工况参数表单入口",
    placeholder: "第一版为 UI 占位",
    action: "生成 mock 方案结果",
    previewTitle: "方案目录预览",
    note: "后续可展示基础版、增强版和人工复核版。当前不接真实支付。",
    fields: ["处理风量", "VOCs 浓度", "主要成分", "运行时间", "现场条件", "排放要求"],
    sections: ["工艺路线建议", "设备选型建议", "风量/浓度逻辑说明", "风险提示", "工程师复核建议"]
  },
  en: {
    eyebrow: "Preliminary Plan Generator",
    title: "Generate a preliminary presales plan framework",
    description: "The generated result is a presales communication framework, not a final treatment design. Complex projects should enter engineer review.",
    formTitle: "Condition Input Entry",
    placeholder: "UI placeholder in V1",
    action: "Generate mock plan result",
    previewTitle: "Plan Outline Preview",
    note: "Later versions can include basic, enhanced, and engineer-reviewed plans. Real payment is not connected yet.",
    fields: ["Airflow", "VOCs concentration", "Main components", "Runtime", "Site conditions", "Emission requirements"],
    sections: ["Process route suggestion", "Equipment selection suggestion", "Airflow/concentration logic", "Risk reminders", "Engineer review suggestion"]
  }
};

export default function PlansPage() {
  const { t } = useSiteLanguage();
  const content = t(copy);

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <section className="panel p-5">
            <h2 className="text-xl font-black">{content.formTitle}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.fields.map((field) => (
                <label className="grid gap-2 text-sm font-bold" key={field}>
                  {field}
                  <input className="rounded-md border border-line bg-paper px-3 py-2 font-normal" placeholder={content.placeholder} />
                </label>
              ))}
            </div>
            <Link className="btn-primary mt-6" href="/plans/result">{content.action}</Link>
          </section>
          <aside className="panel p-5">
            <h2 className="text-xl font-black">{content.previewTitle}</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
              {content.sections.map((section) => <li className="rounded-md border border-line bg-field p-3" key={section}>{section}</li>)}
            </ul>
            <div className="mt-5 rounded-md border border-line p-4 text-sm leading-6 text-muted">{content.note}</div>
          </aside>
        </div>
        <div className="mt-8"><BoundaryNote /></div>
      </main>
    </>
  );
}

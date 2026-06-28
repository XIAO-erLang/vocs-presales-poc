"use client";

import Link from "next/link";
import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { useSiteLanguage } from "@/components/LanguageProvider";

const copy = {
  zh: {
    eyebrow: "计算工具",
    title: "源解常用参数计算工具",
    description: "第一版先提供售前阶段常见参数工具入口，计算结果用于初步判断和沟通，不作为最终工程设计依据。",
    inputLabel: "输入示例：",
    outputLabel: "输出示例：",
    action: "进入工具",
    tools: [
      { slug: "air-volume", name: "风量换算工具", category: "通风参数", status: "示例版", description: "整理支管风量、风口数量和总风量口径。", inputs: ["风口数量", "单个风口风量", "运行工况"], outputs: ["估算总风量", "参数缺失提醒"] },
      { slug: "duct-velocity", name: "管道风速计算工具", category: "通风参数", status: "即将开放", description: "根据风量和管径估算风速，辅助判断管道区间是否合理。", inputs: ["风量", "管径或管道尺寸", "管道长度"], outputs: ["估算风速", "阻力风险提醒"] },
      { slug: "activated-carbon", name: "活性炭用量估算工具", category: "VOCs 预估", status: "示例版", description: "用于售前阶段粗略估算活性炭装填量和更换周期。", inputs: ["风量", "VOCs 浓度", "运行时间"], outputs: ["示例装填量", "更换周期假设"] }
    ]
  },
  en: {
    eyebrow: "Calculation Tools",
    title: "SourceLink Parameter Tools",
    description: "The first version provides common presales calculation entries. Results are for early judgment and communication, not final engineering design.",
    inputLabel: "Input examples:",
    outputLabel: "Output examples:",
    action: "Open Tool",
    tools: [
      { slug: "air-volume", name: "Air Volume Converter", category: "Ventilation", status: "Demo", description: "Organize branch airflow, outlet quantity, and total airflow assumptions.", inputs: ["Outlet count", "Airflow per outlet", "Operating condition"], outputs: ["Estimated total airflow", "Missing parameter reminder"] },
      { slug: "duct-velocity", name: "Duct Velocity Calculator", category: "Ventilation", status: "Coming Soon", description: "Estimate duct velocity from airflow and duct size to support early reasonableness checks.", inputs: ["Airflow", "Duct diameter or size", "Duct length"], outputs: ["Estimated velocity", "Resistance risk reminder"] },
      { slug: "activated-carbon", name: "Activated Carbon Estimate", category: "VOCs Estimate", status: "Demo", description: "Roughly estimate activated carbon loading and replacement assumptions in presales scenarios.", inputs: ["Airflow", "VOCs concentration", "Runtime"], outputs: ["Sample loading", "Replacement cycle assumption"] }
    ]
  }
};

export default function ToolsPage() {
  const { t } = useSiteLanguage();
  const content = t(copy);

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.tools.map((tool) => (
            <article className="panel flex flex-col p-5" key={tool.slug}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-black text-steel">{tool.category}</p>
                  <h2 className="mt-2 text-xl font-black">{tool.name}</h2>
                </div>
                <span className="rounded-md bg-field px-2.5 py-1 text-xs font-bold text-muted">{tool.status}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">{tool.description}</p>
              <div className="mt-4 grid gap-2 text-sm">
                <p><strong>{content.inputLabel}</strong>{tool.inputs.join(" / ")}</p>
                <p><strong>{content.outputLabel}</strong>{tool.outputs.join(" / ")}</p>
              </div>
              <div className="mt-auto pt-5">
                <p className="mb-3 text-sm font-bold text-leaf-dark">9.9</p>
                <Link className="btn-primary w-full" href={`/tools/${tool.slug}`}>{content.action}</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8"><BoundaryNote /></div>
      </main>
    </>
  );
}

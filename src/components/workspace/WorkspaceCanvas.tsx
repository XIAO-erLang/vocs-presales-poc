import type { Project, WorkspaceLanguage, WorkspaceRole, WorkspaceStep } from "@/lib/workspace";
import type { ReactNode } from "react";

export function WorkspaceCanvas({
  project,
  currentStep,
  onCompleteInput,
  onCompleteTools,
  onGeneratePlan,
  onCompleteReview,
  onReset,
  role,
  language
}: {
  project: Project;
  currentStep: WorkspaceStep;
  onCompleteInput: () => void;
  onCompleteTools: () => void;
  onGeneratePlan: () => void;
  onCompleteReview: () => void;
  onReset: () => void;
  role: WorkspaceRole;
  language: WorkspaceLanguage;
}) {
  const copy = language === "cn"
    ? { roleTitle: "角色视图", note: "同一 Project，不同角色看到不同信息层级。" }
    : { roleTitle: "Role View", note: "One Project, different information layers for each role." };

  return (
    <section className="min-h-[calc(100vh-145px)] flex-1 bg-[#FCFCFB] p-4 sm:p-6">
      {currentStep === "input" ? (
        <WorkspaceCard
          eyebrow="Input"
          title="先把项目说清楚"
          description="Input 是 Project 的根。所有工具、模板、方案和复核都围绕这些信息展开。"
          action="Complete Input"
          onAction={onCompleteInput}
          testId="workspace-complete-input"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <InfoField label="行业场景" value={project.inputData.industry} />
            <InfoField label="污染类型" value={project.inputData.pollutant} />
            <InfoField label="初步风量" value={project.inputData.airVolume} />
            <InfoField label="浓度状态" value={project.inputData.concentration} />
          </div>
          <div className="mt-3 rounded-2xl bg-field p-4 text-sm leading-7 text-muted">{project.inputData.notes}</div>
        </WorkspaceCard>
      ) : null}

      {currentStep === "tools" ? (
        <WorkspaceCard
          eyebrow="Tools"
          title="用工具把模糊信息变成可判断结果"
          description="点击右侧工具，结果会回写到 Project。完成工具检查后进入方案生成。"
          action="Complete Tools"
          onAction={onCompleteTools}
          testId="workspace-complete-tools"
        >
          <div className="grid gap-3">
            {project.results.length > 0 ? (
              project.results.map((result) => (
                <article className="grid gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-black/[0.04] md:grid-cols-2" key={result.tool}>
                  <div className="rounded-xl bg-field p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-logo-green">Free result</p>
                    <p className="mt-3 text-sm font-extrabold text-ink">{result.tool}</p>
                    <p className="mt-2 text-lg font-extrabold text-leaf-dark">{result.value}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{result.risk}</p>
                  </div>
                  <div className="rounded-xl bg-[#F8F4EC] p-4 ring-1 ring-sand-soft">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-leaf-dark">Pro enhanced result</p>
                    <p className="mt-3 text-sm font-extrabold text-ink">更高精度计算</p>
                    <p className="mt-2 text-sm leading-6 text-muted">可补充设备选型、成本模型、达标风险矩阵和自动参数敏感性分析。</p>
                  </div>
                </article>
              ))
            ) : (
              <p className="rounded-2xl bg-field p-5 text-sm leading-7 text-muted">还没有工具结果。先从右侧 Tool Panel 选择一个工具。</p>
            )}
          </div>
          <UpgradeInsightCard
            title="Free 不会中断流程"
            description="即使不升级，也可以继续进入 Plan。Pro 只是把基础结果增强为更高精度、更少人工步骤的结果。"
          />
        </WorkspaceCard>
      ) : null}

      {currentStep === "plan" ? (
        <WorkspaceCard
          eyebrow="Plan"
          title="生成一版售前方案框架"
          description="方案不是正式设计，而是用于沟通、复核和下一步分工的结构化草稿。"
          action="Generate Plan"
          onAction={onGeneratePlan}
          testId="workspace-generate-plan"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <PlanPreview project={project} tier="Basic Plan" />
            <AdvancedPlanPreview />
          </div>
          <UpgradeInsightCard
            title="Basic Plan 可以交付沟通"
            description="Advanced Plan 会增加多方案对比、成本模型和排放达标分析，但不会阻断 Basic Plan 的生成。"
          />
        </WorkspaceCard>
      ) : null}

      {currentStep === "review" ? (
        <WorkspaceCard
          eyebrow="Review"
          title="复核风险和交付边界"
          description="Review 阶段检查缺失参数、路线风险和是否需要工程师介入。"
          action="Approve Review"
          onAction={onCompleteReview}
          testId="workspace-approve-review"
        >
          <div className="grid gap-3">
            {["缺少连续浓度数据", "需确认臭气与 VOCs 是否共线处理", "需明确预处理和活性炭更换周期"].map((item) => (
              <div className="rounded-2xl bg-field p-4 text-sm font-bold text-leaf-dark" key={item}>{item}</div>
            ))}
          </div>
          <UpgradeInsightCard
            title="Assisted AI 可减少复核遗漏"
            description="当前 Manual 模式保留人工判断；Assisted AI 可自动整理风险清单和工程师复核建议。"
          />
        </WorkspaceCard>
      ) : null}

      {currentStep === "output" ? (
        <WorkspaceCard
          eyebrow="Output"
          title="输出 Project 交付包"
          description="当前项目已经形成可沟通的输入、工具结果、方案框架和复核提示。"
          action="Start Another Pass"
          onAction={onReset}
          testId="workspace-reset"
        >
          <div className="grid gap-3 md:grid-cols-3">
            {["工况摘要", "方案框架", "复核清单"].map((item) => (
              <div className="rounded-2xl bg-field p-5" key={item}>
                <p className="text-sm font-extrabold text-ink">{item}</p>
                <p className="mt-3 text-xs leading-5 text-muted">Ready for internal communication.</p>
              </div>
            ))}
          </div>
        </WorkspaceCard>
      ) : null}

      <RoleViewPanel language={language} note={copy.note} role={role} title={copy.roleTitle} />
    </section>
  );
}

function WorkspaceCard({
  eyebrow,
  title,
  description,
  action,
  onAction,
  testId,
  children
}: {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  onAction: () => void;
  testId: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl rounded-[28px] bg-white p-6 shadow-soft ring-1 ring-black/[0.04] sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.1em] text-logo-green">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p>
      <div className="mt-8">{children}</div>
      <button className="btn-primary mt-8" data-testid={testId} onClick={onAction} type="button">
        {action}
      </button>
    </div>
  );
}

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-field p-4">
      <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted">{label}</p>
      <p className="mt-2 text-base font-extrabold text-ink">{value}</p>
    </div>
  );
}

function PlanPreview({ project, tier }: { project: Project; tier: string }) {
  return (
    <div className="rounded-2xl bg-field p-5">
      <p className="text-xs font-bold uppercase tracking-[0.1em] text-logo-green">{tier}</p>
      <p className="mt-3 text-lg font-extrabold text-ink">{project.plan.title}</p>
      <p className="mt-3 text-sm leading-7 text-muted">{project.plan.summary}</p>
      <div className="mt-5 grid gap-2">
        {project.plan.sections.map((section) => (
          <p className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-leaf-dark" key={section}>{section}</p>
        ))}
      </div>
    </div>
  );
}

function AdvancedPlanPreview() {
  return (
    <div className="rounded-2xl bg-[#F8F4EC] p-5 ring-1 ring-sand-soft">
      <p className="text-xs font-bold uppercase tracking-[0.1em] text-leaf-dark">Advanced Plan</p>
      <p className="mt-3 text-lg font-extrabold text-ink">Pro 增强方案</p>
      <p className="mt-3 text-sm leading-7 text-muted">在 Basic Plan 基础上补充多方案对比、设备选型计算、成本模型和达标风险分析。</p>
      <div className="mt-5 grid gap-2">
        {["多路线对比", "设备选型建议", "CAPEX / OPEX", "达标风险矩阵", "自动复核建议"].map((section) => (
          <p className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-leaf-dark" key={section}>{section}</p>
        ))}
      </div>
    </div>
  );
}

function UpgradeInsightCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="mt-5 rounded-2xl bg-[#F8F4EC] p-5 ring-1 ring-sand-soft">
      <p className="text-sm font-extrabold text-leaf-dark">{title}</p>
      <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
    </div>
  );
}

function RoleViewPanel({ role, title, note, language }: { role: WorkspaceRole; title: string; note: string; language: WorkspaceLanguage }) {
  const cnContent = {
    customer: ["输入工况", "查看方案", "查看报价口径", "隐藏复杂工程细节"],
    engineer: ["技术参数", "工具计算", "方案结构", "报价工具"],
    supplier: ["需求信息", "技术规格", "设备参数", "供应匹配边界"]
  }[role];
  const enContent = {
    customer: ["Input conditions", "View plan", "View pricing scope", "Hide engineering detail"],
    engineer: ["Technical parameters", "Tool calculations", "Plan structure", "Pricing tools"],
    supplier: ["Demand information", "Technical specs", "Equipment parameters", "Supply boundary"]
  }[role];
  const content = language === "cn" ? cnContent : enContent;

  return (
    <div className="mx-auto mt-5 max-w-4xl rounded-[24px] bg-white p-5 shadow-soft ring-1 ring-black/[0.04]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-extrabold text-ink">{title}</p>
          <p className="mt-1 text-xs leading-5 text-muted">{note}</p>
        </div>
        <span className="rounded-full bg-field px-3 py-1.5 text-xs font-bold uppercase text-leaf-dark">{role}</span>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-4">
        {content.map((item) => (
          <p className="rounded-xl bg-field px-4 py-3 text-xs font-bold text-muted" key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}

import type { Project, WorkspaceStep } from "@/lib/workspace";
import type { ReactNode } from "react";

export function WorkspaceCanvas({
  project,
  currentStep,
  onCompleteInput,
  onCompleteTools,
  onGeneratePlan,
  onCompleteReview,
  onReset
}: {
  project: Project;
  currentStep: WorkspaceStep;
  onCompleteInput: () => void;
  onCompleteTools: () => void;
  onGeneratePlan: () => void;
  onCompleteReview: () => void;
  onReset: () => void;
}) {
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
                <article className="rounded-2xl bg-white p-4 shadow-soft ring-1 ring-black/[0.04]" key={result.tool}>
                  <p className="text-sm font-extrabold text-ink">{result.tool}</p>
                  <p className="mt-2 text-lg font-extrabold text-leaf-dark">{result.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{result.risk}</p>
                </article>
              ))
            ) : (
              <p className="rounded-2xl bg-field p-5 text-sm leading-7 text-muted">还没有工具结果。先从右侧 Tool Panel 选择一个工具。</p>
            )}
          </div>
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
          <PlanPreview project={project} />
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

function PlanPreview({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl bg-field p-5">
      <p className="text-lg font-extrabold text-ink">{project.plan.title}</p>
      <p className="mt-3 text-sm leading-7 text-muted">{project.plan.summary}</p>
      <div className="mt-5 grid gap-2">
        {project.plan.sections.map((section) => (
          <p className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-leaf-dark" key={section}>{section}</p>
        ))}
      </div>
    </div>
  );
}

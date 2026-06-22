import { ToolPanel } from "@/components/workspace/ToolPanel";
import type { Project, WorkspaceLanguage, WorkspaceRole, WorkspaceStep } from "@/lib/workspace";
import { aiModes, upgradePlans, workspaceTools } from "@/lib/workspace";

type WorkspaceTool = (typeof workspaceTools)[number];

const stepAdvice: Record<WorkspaceStep, string[]> = {
  input: ["补齐风量、浓度、成分和排放要求。", "先确认项目边界，再进入工具计算。"],
  tools: ["优先使用 Free Tools 跑通基础判断。", "Pro Tools 可提升选型和成本精度。"],
  plan: ["Basic Plan 可用于售前沟通。", "Advanced Plan 可补充路线对比和风险矩阵。"],
  review: ["复核缺失参数和交付责任边界。", "复杂项目建议进入工程师复核。"],
  output: ["导出前确认项目资料是否可内部流转。", "Studio 可自动生成多版本交付包。"]
};

const stepAdviceEn: Record<WorkspaceStep, string[]> = {
  input: ["Complete air volume, concentration, composition, and emission requirements.", "Confirm project boundaries before tool calculation."],
  tools: ["Use Free Tools first to complete the baseline workflow.", "Pro Tools improve selection accuracy and cost modeling."],
  plan: ["Basic Plan is enough for early communication.", "Advanced Plan adds route comparison and risk matrices."],
  review: ["Review missing parameters and delivery boundaries.", "Complex projects should move to engineer review."],
  output: ["Confirm whether the package can circulate internally.", "Studio can generate multi-version delivery packages."]
};

export function WorkspaceAssistant({
  project,
  currentStep,
  language,
  role,
  onOpenTool
}: {
  project: Project;
  currentStep: WorkspaceStep;
  language: WorkspaceLanguage;
  role: WorkspaceRole;
  onOpenTool: (tool: WorkspaceTool) => void;
}) {
  const mode = aiModes.find((item) => item.id === project.aiMode) ?? aiModes[0];
  const assistantLabel = language === "cn" ? "流程副驾驶" : "Workflow Co-pilot";
  const advice = language === "cn" ? stepAdvice[currentStep] : stepAdviceEn[currentStep];

  return (
    <aside className="border-t border-line bg-white p-4 lg:min-h-[calc(100vh-145px)] lg:w-96 lg:border-l lg:border-t-0">
      <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted">AI Assistant</p>
      <div className="mt-4 rounded-2xl bg-field p-4">
        <p className="text-sm font-extrabold text-ink">{assistantLabel} · {mode.label}</p>
        <p className="mt-2 text-xs leading-5 text-muted">{mode.description}</p>
        <p className="mt-3 text-xs font-bold text-leaf-dark">Role: {role}</p>
      </div>

      <div className="mt-4 rounded-2xl bg-[#F8F4EC] p-4 ring-1 ring-sand-soft">
        <p className="text-sm font-extrabold text-leaf-dark">Upgrade Insight</p>
        <p className="mt-2 text-xs leading-5 text-muted">
          {language === "cn"
            ? "当前 Free 版本可以完整跑通流程。升级不会解锁“流程本身”，只提升精度、自动化和系统级决策能力。"
            : "Free completes the full workflow. Paid layers improve precision, automation, and system-level decisions without blocking progress."}
        </p>
      </div>

      <div className="mt-4 grid gap-2">
        {advice.map((item) => (
          <p className="rounded-xl bg-white px-4 py-3 text-xs font-bold leading-5 text-muted ring-1 ring-black/[0.04]" key={item}>
            {item}
          </p>
        ))}
      </div>

      <ToolPanel onOpenTool={onOpenTool} />

      <div className="mt-5 grid gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted">Pricing UI</p>
          <p className="mt-2 text-xs leading-5 text-muted">
            {language === "cn" ? "并列展示能力层级，不弹窗、不拦截、不阻断免费流程。" : "Parallel capability tiers. No popups, no hard paywall, no workflow interruption."}
          </p>
        </div>
        {upgradePlans.map((plan) => (
          <div className="rounded-2xl bg-white p-4 shadow-soft ring-1 ring-black/[0.04]" key={plan.tier}>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-leaf">{plan.tier}</p>
            <p className="mt-2 text-sm font-extrabold text-ink">{plan.promise}</p>
            <p className="mt-2 text-xs leading-5 text-muted">{plan.detail}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

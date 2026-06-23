import type { WorkspaceStep } from "@/lib/workspace";
import { workspaceSteps } from "@/lib/workspace";

export function StepSidebar({
  currentStep,
  completedSteps,
  onSelectStep
}: {
  currentStep: WorkspaceStep;
  completedSteps: WorkspaceStep[];
  onSelectStep: (step: WorkspaceStep) => void;
}) {
  return (
    <section className="rounded-xl border border-[#E8E8E8] bg-white p-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-logo-green">Step Flow</p>
        <p className="text-xs text-muted">Input → Tools → Plan → Review → Output</p>
      </div>
      <nav className="grid gap-2 md:grid-cols-5">
        {workspaceSteps.map((step, index) => {
          const active = step.id === currentStep;
          const done = completedSteps.includes(step.id);

          return (
            <button
              className={
                active
                  ? "rounded-xl border border-logo-green bg-white p-4 text-left shadow-[0_8px_24px_rgba(122,132,99,0.10)]"
                  : "rounded-xl border border-[#E8E8E8] bg-[#F6F7F8] p-4 text-left opacity-60 transition hover:opacity-100"
              }
              key={step.id}
              onClick={() => onSelectStep(step.id)}
              type="button"
            >
              <span className="flex items-center justify-between gap-3">
                <span className={active ? "text-sm font-semibold text-logo-green" : "text-sm font-semibold text-ink"}>
                  {String(index + 1).padStart(2, "0")} {step.label}
                </span>
                {done ? <span className="text-xs font-bold text-logo-green">Done</span> : null}
              </span>
              <span className="mt-1 block text-xs leading-5 text-muted">{step.description}</span>
            </button>
          );
        })}
      </nav>
    </section>
  );
}

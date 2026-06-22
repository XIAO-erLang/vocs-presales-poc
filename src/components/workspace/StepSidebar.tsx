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
    <aside className="border-b border-line bg-white p-4 lg:min-h-[calc(100vh-145px)] lg:w-64 lg:border-b-0 lg:border-r">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-muted">Flow</p>
      <nav className="grid gap-2">
        {workspaceSteps.map((step, index) => {
          const active = step.id === currentStep;
          const done = completedSteps.includes(step.id);

          return (
            <button
              className={
                active
                  ? "rounded-2xl bg-field p-4 text-left ring-1 ring-sand-soft"
                  : "rounded-2xl p-4 text-left transition hover:bg-field"
              }
              key={step.id}
              onClick={() => onSelectStep(step.id)}
              type="button"
            >
              <span className="flex items-center justify-between gap-3">
                <span className={active ? "text-sm font-extrabold text-leaf-dark" : "text-sm font-extrabold text-ink"}>
                  {String(index + 1).padStart(2, "0")} {step.label}
                </span>
                {done ? <span className="text-xs font-bold text-logo-green">Done</span> : null}
              </span>
              <span className="mt-1 block text-xs leading-5 text-muted">{step.description}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

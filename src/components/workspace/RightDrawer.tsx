import { workspaceTools } from "@/lib/workspace";

type WorkspaceTool = (typeof workspaceTools)[number];

export function RightDrawer({
  tool,
  open,
  onClose,
  onUseResult
}: {
  tool: WorkspaceTool | null;
  open: boolean;
  onClose: () => void;
  onUseResult: (tool: WorkspaceTool) => void;
}) {
  if (!open || !tool) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 bg-ink/10" onClick={onClose}>
      <aside
        className="absolute right-0 top-0 h-full w-full max-w-md border-l border-[#E8E8E8] bg-white p-6 shadow-[0_16px_48px_rgba(31,31,31,0.08)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="mb-8 text-sm font-semibold text-muted transition hover:text-ink" onClick={onClose} type="button">
          Close
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-logo-green">Tool Panel</p>
        <h2 className="mt-3 text-2xl font-semibold text-ink">{tool.name}</h2>
        <p className="mt-4 text-sm leading-7 text-muted">{tool.description}</p>

        <div className="mt-8 grid gap-3">
          <div className="rounded-xl border border-[#E8E8E8] bg-[#F6F7F8] p-5">
            <p className="text-sm font-semibold text-logo-green">Free result</p>
            <p className="mt-3 text-xl font-semibold text-ink">{tool.output}</p>
            <p className="mt-4 text-sm leading-7 text-muted">{tool.risk}</p>
          </div>
          <div className="rounded-xl border border-[#E8E8E8] bg-white p-5">
            <p className="text-sm font-semibold text-logo-green">Pro enhanced result</p>
            <p className="mt-3 text-base font-semibold leading-7 text-ink">{tool.proOutput}</p>
            <p className="mt-4 text-sm leading-7 text-muted">{tool.upgradeInsight}</p>
          </div>
        </div>

        <button className="btn-primary mt-8 w-full" data-testid="workspace-use-tool-result" onClick={() => onUseResult(tool)} type="button">
          Use Result in Project
        </button>
      </aside>
    </div>
  );
}

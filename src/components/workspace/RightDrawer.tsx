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
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-6 shadow-float"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="mb-8 text-sm font-bold text-muted transition hover:text-ink" onClick={onClose} type="button">
          Close
        </button>
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-logo-green">Tool Panel</p>
        <h2 className="mt-3 text-3xl font-extrabold">{tool.name}</h2>
        <p className="mt-4 text-sm leading-7 text-muted">{tool.description}</p>

        <div className="mt-8 rounded-2xl bg-field p-5">
          <p className="text-sm font-bold text-leaf-dark">Mock result</p>
          <p className="mt-3 text-2xl font-extrabold text-ink">{tool.output}</p>
          <p className="mt-4 text-sm leading-7 text-muted">{tool.risk}</p>
        </div>

        <button className="btn-primary mt-8 w-full" data-testid="workspace-use-tool-result" onClick={() => onUseResult(tool)} type="button">
          Use Result in Project
        </button>
      </aside>
    </div>
  );
}

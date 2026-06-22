import { workspaceTools } from "@/lib/workspace";

type WorkspaceTool = (typeof workspaceTools)[number];

export function ToolPanel({ onOpenTool }: { onOpenTool: (tool: WorkspaceTool) => void }) {
  return (
    <aside className="border-t border-line bg-white p-4 lg:min-h-[calc(100vh-145px)] lg:w-80 lg:border-l lg:border-t-0">
      <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted">Tool Panel</p>
      <div className="mt-4 grid gap-3">
        {workspaceTools.map((tool) => (
          <button
            className="rounded-2xl bg-white p-4 text-left shadow-soft ring-1 ring-black/[0.04] transition hover:-translate-y-0.5 hover:bg-hover-warm hover:shadow-float"
            data-testid={`workspace-tool-${tool.id}`}
            key={tool.id}
            onClick={() => onOpenTool(tool)}
            type="button"
          >
            <span className="text-sm font-extrabold text-ink">{tool.name}</span>
            <span className="mt-2 block text-xs leading-5 text-muted">{tool.description}</span>
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-2xl bg-field p-4">
        <p className="text-sm font-bold text-leaf-dark">Project rule</p>
        <p className="mt-2 text-xs leading-5 text-muted">工具结果不单独存在，必须回写到当前 Project，再进入 Plan。</p>
      </div>
    </aside>
  );
}

import { workspaceTools } from "@/lib/workspace";

type WorkspaceTool = (typeof workspaceTools)[number];

export function ToolPanel({ onOpenTool }: { onOpenTool: (tool: WorkspaceTool) => void }) {
  const toolGroups = [
    { tier: "free", label: "Free Tools" },
    { tier: "pro", label: "Pro Tools" },
    { tier: "advanced", label: "Advanced Tools" }
  ] as const;

  return (
    <div className="mt-5">
      <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted">Layered Tools</p>
      <div className="mt-4 grid gap-4">
        {toolGroups.map((group) => (
          <div key={group.tier}>
            <p className="mb-2 text-xs font-extrabold text-leaf-dark">{group.label}</p>
            <div className="grid gap-2">
              {workspaceTools
                .filter((tool) => tool.tier === group.tier)
                .map((tool) => (
                  <button
                    className="rounded-2xl bg-white p-4 text-left shadow-soft ring-1 ring-black/[0.04] transition hover:-translate-y-0.5 hover:bg-hover-warm hover:shadow-float"
                    data-testid={`workspace-tool-${tool.id}`}
                    key={tool.id}
                    onClick={() => onOpenTool(tool)}
                    type="button"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-extrabold text-ink">{tool.name}</span>
                      <span className="rounded-full bg-field px-2 py-1 text-[10px] font-bold uppercase text-muted">{tool.tier}</span>
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-muted">{tool.description}</span>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-2xl bg-field p-4">
        <p className="text-sm font-bold text-leaf-dark">Project rule</p>
        <p className="mt-2 text-xs leading-5 text-muted">工具结果不单独存在，必须回写到当前 Project，再进入 Plan。</p>
      </div>
    </div>
  );
}

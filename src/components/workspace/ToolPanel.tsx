import { workspaceTools } from "@/lib/workspace";

type WorkspaceTool = (typeof workspaceTools)[number];

export function ToolPanel({ onOpenTool }: { onOpenTool: (tool: WorkspaceTool) => void }) {
  const toolGroups = [
    { tier: "free", label: "Free Tools" },
    { tier: "pro", label: "Pro Tools" },
    { tier: "advanced", label: "Advanced Tools" }
  ] as const;

  return (
    <section className="rounded-xl border border-[#E8E8E8] bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-logo-green">Layered Tools</p>
      <p className="mt-2 text-xs leading-5 text-muted">工具作为工作流能力层，只在当前 Project 上下文中产生结果。</p>
      <div className="mt-4 grid gap-4">
        {toolGroups.map((group) => (
          <div key={group.tier}>
            <p className="mb-2 text-xs font-semibold text-muted">{group.label}</p>
            <div className="grid gap-2">
              {workspaceTools
                .filter((tool) => tool.tier === group.tier)
                .map((tool) => (
                  <button
                    className="rounded-xl border border-[#E8E8E8] bg-[#F6F7F8] p-4 text-left transition hover:border-logo-green/50 hover:bg-white"
                    data-testid={`workspace-tool-${tool.id}`}
                    key={tool.id}
                    onClick={() => onOpenTool(tool)}
                    type="button"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-ink">{tool.name}</span>
                      <span className="rounded-full border border-[#E8E8E8] bg-white px-2 py-1 text-[10px] font-semibold uppercase text-muted">{tool.tier}</span>
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-muted">{tool.description}</span>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-[#E8E8E8] bg-[#F6F7F8] p-4">
        <p className="text-sm font-semibold text-ink">Project rule</p>
        <p className="mt-2 text-xs leading-5 text-muted">工具结果不单独存在，必须回写到当前 Project，再进入 Plan。</p>
      </div>
    </section>
  );
}

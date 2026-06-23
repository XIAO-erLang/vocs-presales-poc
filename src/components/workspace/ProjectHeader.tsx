import type { AiMode, Project, WorkspaceLanguage, WorkspaceRole } from "@/lib/workspace";
import { aiModes, workspaceRoles } from "@/lib/workspace";

export function ProjectHeader({
  project,
  language,
  role,
  autoAdvance,
  onLanguageChange,
  onAutoAdvanceChange,
  onModeChange,
  onRoleChange
}: {
  project: Project;
  language: WorkspaceLanguage;
  role: WorkspaceRole;
  autoAdvance: boolean;
  onLanguageChange: (language: WorkspaceLanguage) => void;
  onAutoAdvanceChange: (enabled: boolean) => void;
  onModeChange: (mode: AiMode) => void;
  onRoleChange: (role: WorkspaceRole) => void;
}) {
  return (
    <header className="flex flex-col gap-4 border-b border-[#E8E8E8] bg-white px-5 py-4 xl:flex-row xl:items-center xl:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-logo-green">Workspace / {project.id}</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-normal text-ink sm:text-3xl">{project.name}</h1>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#E8E8E8] bg-[#F6F7F8] px-3 py-1.5 text-xs font-semibold text-muted">Status: {project.status}</span>
          <span className="rounded-full border border-[#E8E8E8] bg-white px-3 py-1.5 text-xs font-semibold text-logo-green">{project.planTier}</span>
        </div>
        <div className="grid gap-2">
          <div className="flex rounded-full border border-[#E8E8E8] bg-[#F6F7F8] p-1">
            {aiModes.map((mode) => (
              <button
                className={
                  project.aiMode === mode.id
                    ? "rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-logo-green"
                    : "rounded-full px-3 py-1.5 text-xs font-semibold text-muted transition hover:text-ink"
                }
                data-testid={`ai-mode-${mode.id}`}
                key={mode.id}
                onClick={() => onModeChange(mode.id)}
                type="button"
              >
                {mode.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {workspaceRoles.map((item) => (
              <button
                className={role === item.id ? "rounded-full bg-logo-green px-3 py-1.5 text-xs font-semibold text-white" : "rounded-full border border-[#E8E8E8] bg-[#F6F7F8] px-3 py-1.5 text-xs font-semibold text-muted"}
                data-testid={`role-${item.id}`}
                key={item.id}
                onClick={() => onRoleChange(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
            <button className="rounded-full border border-[#E8E8E8] bg-[#F6F7F8] px-3 py-1.5 text-xs font-semibold text-muted" onClick={() => onLanguageChange(language === "cn" ? "en" : "cn")} type="button">
              {language === "cn" ? "CN" : "EN"}
            </button>
            <button
              className={autoAdvance ? "rounded-full bg-logo-green px-3 py-1.5 text-xs font-semibold text-white" : "rounded-full border border-[#E8E8E8] bg-[#F6F7F8] px-3 py-1.5 text-xs font-semibold text-muted"}
              data-testid="auto-advance-toggle"
              onClick={() => onAutoAdvanceChange(!autoAdvance)}
              type="button"
            >
              Auto advance: {autoAdvance ? "On" : "Off"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

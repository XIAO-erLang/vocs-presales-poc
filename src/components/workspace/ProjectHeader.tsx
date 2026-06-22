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
    <header className="flex flex-col gap-4 border-b border-line bg-white px-5 py-4 xl:flex-row xl:items-center xl:justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-logo-green">Workspace / {project.id}</p>
        <h1 className="mt-2 text-2xl font-extrabold tracking-normal text-ink sm:text-3xl">{project.name}</h1>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-field px-3 py-1.5 text-xs font-bold text-muted">Status: {project.status}</span>
          <span className="rounded-full bg-[#F4EFE8] px-3 py-1.5 text-xs font-bold text-leaf-dark">{project.planTier}</span>
        </div>
        <div className="grid gap-2">
          <div className="flex rounded-full bg-field p-1">
            {aiModes.map((mode) => (
              <button
                className={
                  project.aiMode === mode.id
                    ? "rounded-full bg-white px-3 py-1.5 text-xs font-bold text-leaf-dark shadow-[0_8px_18px_rgba(46,46,46,0.06)]"
                    : "rounded-full px-3 py-1.5 text-xs font-bold text-muted transition hover:text-ink"
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
                className={role === item.id ? "rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-white" : "rounded-full bg-field px-3 py-1.5 text-xs font-bold text-muted"}
                data-testid={`role-${item.id}`}
                key={item.id}
                onClick={() => onRoleChange(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
            <button className="rounded-full bg-field px-3 py-1.5 text-xs font-bold text-muted" onClick={() => onLanguageChange(language === "cn" ? "en" : "cn")} type="button">
              {language === "cn" ? "CN" : "EN"}
            </button>
            <button
              className={autoAdvance ? "rounded-full bg-logo-green px-3 py-1.5 text-xs font-bold text-white" : "rounded-full bg-field px-3 py-1.5 text-xs font-bold text-muted"}
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

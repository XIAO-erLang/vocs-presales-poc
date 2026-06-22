import type { Project } from "@/lib/workspace";

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="flex flex-col gap-4 border-b border-line bg-white px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-logo-green">Workspace / {project.id}</p>
        <h1 className="mt-2 text-2xl font-extrabold tracking-normal text-ink sm:text-3xl">{project.name}</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-field px-3 py-1.5 text-xs font-bold text-muted">Status: {project.status}</span>
        <span className="rounded-full bg-[#F4EFE8] px-3 py-1.5 text-xs font-bold text-leaf-dark">Project-based Work OS</span>
      </div>
    </header>
  );
}

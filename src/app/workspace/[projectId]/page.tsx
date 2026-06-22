import { Header } from "@/components/Header";
import { WorkspaceShell } from "@/components/workspace/WorkspaceShell";
import { getDemoProject } from "@/lib/workspace";

export default async function ProjectWorkspacePage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const project = getDemoProject(projectId);

  return (
    <>
      <Header />
      <main>
        <WorkspaceShell initialProject={project} />
      </main>
    </>
  );
}

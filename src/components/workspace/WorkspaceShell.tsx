"use client";

import { useMemo, useState } from "react";
import { ProjectHeader } from "@/components/workspace/ProjectHeader";
import { RightDrawer } from "@/components/workspace/RightDrawer";
import { StepSidebar } from "@/components/workspace/StepSidebar";
import { WorkspaceAssistant } from "@/components/workspace/WorkspaceAssistant";
import { WorkspaceCanvas } from "@/components/workspace/WorkspaceCanvas";
import type { AiMode, Project, WorkspaceLanguage, WorkspaceRole, WorkspaceStep } from "@/lib/workspace";
import { workspaceTools } from "@/lib/workspace";

type WorkspaceTool = (typeof workspaceTools)[number];

const nextStepMap: Record<WorkspaceStep, WorkspaceStep> = {
  input: "tools",
  tools: "plan",
  plan: "review",
  review: "output",
  output: "output"
};

export function WorkspaceShell({ initialProject }: { initialProject: Project }) {
  const [project, setProject] = useState<Project>(initialProject);
  const [currentStep, setCurrentStep] = useState<WorkspaceStep>(initialProject.currentStep);
  const [completedSteps, setCompletedSteps] = useState<WorkspaceStep[]>([]);
  const [drawerTool, setDrawerTool] = useState<WorkspaceTool | null>(null);
  const [role, setRole] = useState<WorkspaceRole>("customer");
  const [language, setLanguage] = useState<WorkspaceLanguage>("cn");
  const [autoAdvance, setAutoAdvance] = useState(true);

  const projectWithStep = useMemo(() => ({ ...project, currentStep }), [currentStep, project]);

  function completeStep(step: WorkspaceStep) {
    setCompletedSteps((items) => (items.includes(step) ? items : [...items, step]));
    const nextStep = nextStepMap[step];
    const visibleStep = autoAdvance ? nextStep : step;
    setCurrentStep(visibleStep);
    setProject((item) => ({
      ...item,
      currentStep: visibleStep,
      status: autoAdvance && nextStep === "review" ? "Review" : autoAdvance && nextStep === "output" ? "Ready" : "In Progress"
    }));
  }

  function addToolResult(tool: WorkspaceTool) {
    setProject((item) => ({
      ...item,
      results: item.results.some((result) => result.tool === tool.name)
        ? item.results
        : [...item.results, { tool: tool.name, value: tool.output, risk: tool.risk }]
    }));
    setDrawerTool(null);
  }

  function resetFlow() {
    setCurrentStep("input");
    setCompletedSteps([]);
    setProject({ ...initialProject, results: [] });
  }

  return (
    <div className="min-h-screen bg-[#F6F7F8]">
      <ProjectHeader
        autoAdvance={autoAdvance}
        language={language}
        onAutoAdvanceChange={setAutoAdvance}
        onModeChange={(mode: AiMode) => setProject((item) => ({ ...item, aiMode: mode, planTier: mode === "manual" ? "Free" : mode === "assisted" ? "Pro" : "Studio" }))}
        onLanguageChange={setLanguage}
        onRoleChange={setRole}
        project={projectWithStep}
        role={role}
      />
      <main className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <StepSidebar currentStep={currentStep} completedSteps={completedSteps} onSelectStep={setCurrentStep} />
        <WorkspaceCanvas
          currentStep={currentStep}
          onCompleteInput={() => completeStep("input")}
          onCompleteReview={() => completeStep("review")}
          onCompleteTools={() => completeStep("tools")}
          onGeneratePlan={() => completeStep("plan")}
          onReset={resetFlow}
          project={projectWithStep}
          role={role}
          language={language}
        />
        <WorkspaceAssistant currentStep={currentStep} language={language} onOpenTool={setDrawerTool} project={projectWithStep} role={role} />
      </main>
      <RightDrawer open={Boolean(drawerTool)} onClose={() => setDrawerTool(null)} onUseResult={addToolResult} tool={drawerTool} />
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { ProjectHeader } from "@/components/workspace/ProjectHeader";
import { RightDrawer } from "@/components/workspace/RightDrawer";
import { StepSidebar } from "@/components/workspace/StepSidebar";
import { ToolPanel } from "@/components/workspace/ToolPanel";
import { WorkspaceCanvas } from "@/components/workspace/WorkspaceCanvas";
import type { Project, WorkspaceStep } from "@/lib/workspace";
import { workspaceSteps, workspaceTools } from "@/lib/workspace";

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

  const projectWithStep = useMemo(() => ({ ...project, currentStep }), [currentStep, project]);

  function completeStep(step: WorkspaceStep) {
    setCompletedSteps((items) => (items.includes(step) ? items : [...items, step]));
    const nextStep = nextStepMap[step];
    setCurrentStep(nextStep);
    setProject((item) => ({
      ...item,
      currentStep: nextStep,
      status: nextStep === "review" ? "Review" : nextStep === "output" ? "Ready" : "In Progress"
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
    <div className="min-h-screen bg-white">
      <ProjectHeader project={projectWithStep} />
      <div className="flex flex-col lg:flex-row">
        <StepSidebar currentStep={currentStep} completedSteps={completedSteps} onSelectStep={setCurrentStep} />
        <WorkspaceCanvas
          currentStep={currentStep}
          onCompleteInput={() => completeStep("input")}
          onCompleteReview={() => completeStep("review")}
          onCompleteTools={() => completeStep("tools")}
          onGeneratePlan={() => completeStep("plan")}
          onReset={resetFlow}
          project={projectWithStep}
        />
        <ToolPanel onOpenTool={setDrawerTool} />
      </div>
      <RightDrawer open={Boolean(drawerTool)} onClose={() => setDrawerTool(null)} onUseResult={addToolResult} tool={drawerTool} />
    </div>
  );
}

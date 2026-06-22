export type WorkspaceStep = "input" | "tools" | "plan" | "review" | "output";

export type ProjectStatus = "Draft" | "In Progress" | "Review" | "Ready";

export type Project = {
  id: string;
  name: string;
  status: ProjectStatus;
  currentStep: WorkspaceStep;
  inputData: {
    industry: string;
    pollutant: string;
    airVolume: string;
    concentration: string;
    notes: string;
  };
  results: {
    tool: string;
    value: string;
    risk: string;
  }[];
  plan: {
    title: string;
    summary: string;
    sections: string[];
  };
};

export const workspaceSteps: { id: WorkspaceStep; label: string; description: string }[] = [
  { id: "input", label: "Input", description: "Project context" },
  { id: "tools", label: "Tools", description: "Calculate and check" },
  { id: "plan", label: "Plan", description: "Generate draft" },
  { id: "review", label: "Review", description: "Human check" },
  { id: "output", label: "Output", description: "Deliverable package" }
];

export const demoProject: Project = {
  id: "demo-vocs",
  name: "厨余垃圾站 VOCs 异味治理",
  status: "Draft",
  currentStep: "input",
  inputData: {
    industry: "厨余垃圾转运 / 预处理",
    pollutant: "VOCs + 臭气",
    airVolume: "12,000 m3/h",
    concentration: "资料不完整",
    notes: "已有项目沟通，但风量、浓度、成分和排放要求仍需补齐。"
  },
  results: [],
  plan: {
    title: "VOCs 废气治理初步方案框架",
    summary: "基于当前工况，先形成售前沟通用框架，不替代正式工程设计。",
    sections: ["工况摘要", "缺失参数清单", "可选工艺路线", "报价前风险提示", "下一步复核建议"]
  }
};

export const workspaceTools = [
  {
    id: "air-volume",
    name: "风量核对",
    description: "检查项目风量口径是否满足后续选型前提。",
    output: "12,000 m3/h 待现场核对",
    risk: "需确认收集罩、管路漏风和备用系数。"
  },
  {
    id: "activated-carbon",
    name: "活性炭初算",
    description: "用于判断是否适合作为低浓度末端治理路线。",
    output: "建议作为对比路线",
    risk: "若湿度高或浓度波动大，需要预处理和更换周期复核。"
  },
  {
    id: "route-check",
    name: "工艺路线初筛",
    description: "对喷淋、活性炭、RCO、RTO 做前期适配判断。",
    output: "喷淋预处理 + 吸附路线待复核",
    risk: "当前缺少成分谱和连续运行工况。"
  }
];

export function getDemoProject(projectId: string) {
  return projectId === demoProject.id ? demoProject : { ...demoProject, id: projectId, name: "未命名 VOCs Project" };
}

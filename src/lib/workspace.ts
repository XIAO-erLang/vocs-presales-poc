export type WorkspaceStep = "input" | "tools" | "plan" | "review" | "output";

export type ProjectStatus = "Draft" | "In Progress" | "Review" | "Ready";

export type PlanTier = "Free" | "Pro" | "Studio" | "Enterprise";

export type AiMode = "manual" | "assisted" | "auto";

export type ToolTier = "free" | "pro" | "advanced";

export type WorkspaceRole = "customer" | "engineer" | "supplier";

export type WorkspaceLanguage = "cn" | "en";

export type Project = {
  id: string;
  name: string;
  status: ProjectStatus;
  currentStep: WorkspaceStep;
  planTier: PlanTier;
  aiMode: AiMode;
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
  planTier: "Free",
  aiMode: "manual",
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

export const aiModes: { id: AiMode; label: string; tier: PlanTier; description: string }[] = [
  { id: "manual", label: "Manual", tier: "Free", description: "完整跑通流程，用户手动确认每一步。" },
  { id: "assisted", label: "Assisted AI", tier: "Pro", description: "AI 给出增强计算、风险补充和方案优化建议。" },
  { id: "auto", label: "Auto AI", tier: "Studio", description: "自动组合工具、生成多方案并减少人工步骤。" }
];

export const workspaceRoles: { id: WorkspaceRole; label: string; description: string }[] = [
  { id: "customer", label: "Customer", description: "只看工况、方案和报价口径，不暴露复杂工程细节。" },
  { id: "engineer", label: "Engineer", description: "查看技术参数、工具计算、方案结构和报价边界。" },
  { id: "supplier", label: "Supplier", description: "查看需求信息、技术规格和设备参数，便于供应匹配。" }
];

export const workspaceTools: {
  id: string;
  tier: ToolTier;
  name: string;
  description: string;
  output: string;
  risk: string;
  proOutput: string;
  upgradeInsight: string;
}[] = [
  {
    id: "air-volume",
    tier: "free",
    name: "风量核对",
    description: "检查项目风量口径是否满足后续选型前提。",
    output: "12,000 m3/h 待现场核对",
    risk: "需确认收集罩、管路漏风和备用系数。",
    proOutput: "按收集效率、漏风系数和备用系数生成推荐设计风量区间。",
    upgradeInsight: "Pro 可自动生成风量敏感性区间，减少人工反复核对。"
  },
  {
    id: "voc-estimate",
    tier: "free",
    name: "VOC 基础估算",
    description: "基于已知风量和浓度口径估算污染负荷范围。",
    output: "污染负荷需补充浓度后确认",
    risk: "当前缺少连续浓度和成分谱。",
    proOutput: "结合运行时长、峰值波动和治理效率做负荷区间分析。",
    upgradeInsight: "Pro 可把单点估算升级为区间模型。"
  },
  {
    id: "unit-converter",
    tier: "free",
    name: "单位换算",
    description: "处理 mg/m3、ppm、m3/h 等常见售前口径。",
    output: "已统一为工程沟通口径",
    risk: "成分不同会影响 ppm 与质量浓度换算。",
    proOutput: "自动按物性参数和混合气体组成生成换算说明。",
    upgradeInsight: "Pro 可减少手动查物性和单位口径错误。"
  },
  {
    id: "basic-template",
    tier: "free",
    name: "基础模板生成",
    description: "生成项目沟通所需的基础工况清单。",
    output: "已生成基础工况采集清单",
    risk: "复杂工况仍需工程师补充判断。",
    proOutput: "自动按行业和工艺路线生成定制模板。",
    upgradeInsight: "Pro 可把通用模板升级成项目专用模板。"
  },
  {
    id: "activated-carbon",
    tier: "pro",
    name: "活性炭初算",
    description: "用于判断是否适合作为低浓度末端治理路线。",
    output: "建议作为对比路线",
    risk: "若湿度高或浓度波动大，需要预处理和更换周期复核。",
    proOutput: "生成箱体尺寸、炭层停留时间、更换周期和运行费用估算。",
    upgradeInsight: "Pro 可直接进入设备选型和成本模型。"
  },
  {
    id: "system-design",
    tier: "pro",
    name: "废气系统设计",
    description: "检查收集、管路、预处理和末端治理之间的系统关系。",
    output: "需要补充管路和现场布置",
    risk: "系统阻力、湿度和预处理边界待确认。",
    proOutput: "输出系统边界、关键设备清单和设计风险点。",
    upgradeInsight: "Pro 可把单工具结果串成系统设计草案。"
  },
  {
    id: "cost-model",
    tier: "pro",
    name: "成本模型",
    description: "估算设备、耗材、电耗和维护成本范围。",
    output: "已形成基础成本项",
    risk: "供应商报价与现场施工边界会影响最终成本。",
    proOutput: "生成 CAPEX/OPEX 分项和敏感性因素。",
    upgradeInsight: "Pro 可用成本模型辅助报价前判断。"
  },
  {
    id: "emission-check",
    tier: "pro",
    name: "排放达标分析",
    description: "对排放要求、治理效率和检测风险做前期分析。",
    output: "需确认地方标准和验收口径",
    risk: "不能替代检测验收和达标承诺。",
    proOutput: "按标准、效率和入口波动生成达标风险矩阵。",
    upgradeInsight: "Pro 可提前暴露验收和承诺风险。"
  },
  {
    id: "route-check",
    tier: "advanced",
    name: "工艺路线初筛",
    description: "对喷淋、活性炭、RCO、RTO 做前期适配判断。",
    output: "喷淋预处理 + 吸附路线待复核",
    risk: "当前缺少成分谱和连续运行工况。",
    proOutput: "自动生成 3 套路线对比和适用/谨慎场景。",
    upgradeInsight: "Advanced 可做多方案对比和自动方案组合。"
  },
  {
    id: "system-optimization",
    tier: "advanced",
    name: "系统级优化",
    description: "从效果、成本、施工和运维维度寻找组合优化。",
    output: "建议先补齐关键边界条件",
    risk: "系统优化依赖更完整的项目资料。",
    proOutput: "自动输出系统级优化建议和工程经济模型。",
    upgradeInsight: "Advanced 适合 Studio/Enterprise 的系统级决策。"
  },
  {
    id: "engineering-economics",
    tier: "advanced",
    name: "工程经济模型",
    description: "把一次投入、运行成本、耗材周期和维护频率放到同一决策视图中。",
    output: "当前可先形成基础成本项清单",
    risk: "缺少供应商报价和现场施工边界时，经济模型只能作为前期判断。",
    proOutput: "自动生成 CAPEX/OPEX、敏感因素和回收周期的对比框架。",
    upgradeInsight: "Advanced 可把工程经济判断纳入多方案决策，而不是只看设备价格。"
  },
  {
    id: "auto-plan-composer",
    tier: "advanced",
    name: "自动组合方案",
    description: "根据工况、风险和成本约束自动组合预处理、主体工艺和复核路径。",
    output: "当前先输出人工可读的组合建议",
    risk: "自动组合方案仍需工程师确认边界，不能替代正式工程设计。",
    proOutput: "自动生成多套方案组合、适用条件、排除条件和下一步复核清单。",
    upgradeInsight: "Advanced 适合把 Tools 结果直接推入 Studio 级方案组合。"
  }
];

export const upgradePlans = [
  { tier: "Free", promise: "跑通完整流程", detail: "Manual 模式、基础工具、Basic Plan、人工确认每一步。" },
  { tier: "Pro", promise: "提高精度", detail: "Assisted AI、设备选型、成本模型、Advanced Plan 对比。" },
  { tier: "Studio", promise: "自动化流程", detail: "Auto AI、多工具联动、多方案组合和自动复核建议。" },
  { tier: "Enterprise", promise: "系统级决策", detail: "工程经济模型、团队协作、供应商策略和项目组合管理。" }
];

export function getDemoProject(projectId: string) {
  return projectId === demoProject.id ? demoProject : { ...demoProject, id: projectId, name: "未命名 VOCs Project" };
}

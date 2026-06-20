export type PlatformModule = {
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  status: "POC 已上线" | "骨架已开放" | "待接人工服务" | "内容孵化中";
  primaryAction: string;
  audience: string[];
  features: string[];
  nextBuild: string[];
};

export const platformModules: PlatformModule[] = [
  {
    href: "/tools",
    eyebrow: "板块 01",
    title: "计算工具",
    summary: "把风量、浓度、活性炭、运行费用等售前估算动作做成轻量工具，先服务报价前判断。",
    status: "骨架已开放",
    primaryAction: "查看工具清单",
    audience: ["环保销售", "工程师", "环保公司负责人"],
    features: ["活性炭箱初算", "风量与浓度换算", "运行费用估算", "参数缺失提醒"],
    nextBuild: ["先做活性炭吸附箱初算", "补充 VOCs 与臭气类项目的参数边界", "保留人工复核入口"]
  },
  {
    href: "/templates",
    eyebrow: "板块 02",
    title: "标准模板",
    summary: "沉淀工况采集表、现场勘查清单、客户沟通问题库和初步方案目录。",
    status: "POC 已上线",
    primaryAction: "查看模板目录",
    audience: ["环保销售", "新人售前", "企业甲方"],
    features: ["工况信息采集表", "客户沟通问题库", "现场勘查清单", "风险提示清单"],
    nextBuild: ["把现有样张拆成模板目录", "设计付费前预览范围", "准备可交付 Word 版本"]
  },
  {
    href: "/plans",
    eyebrow: "板块 03",
    title: "初步方案框架生成",
    summary: "把用户输入的行业、废气类型、风量、浓度和约束条件整理成初步方案框架。",
    status: "骨架已开放",
    primaryAction: "生成初步方案",
    audience: ["工程师", "环保销售", "小型环保公司"],
    features: ["工况摘要", "缺失参数清单", "路线初筛", "初步方案大纲"],
    nextBuild: ["先做表单到方案大纲的 mock 流程", "增加高风险工况拦截", "后续再接文档生成"]
  },
  {
    href: "/engineers",
    eyebrow: "板块 04",
    title: "工程师对接",
    summary: "把复杂项目、方案复核、报价复核从自动工具转到人工判断，避免越界承诺。",
    status: "待接人工服务",
    primaryAction: "查看对接方式",
    audience: ["环保公司负责人", "工程师", "企业甲方"],
    features: ["复杂项目复核", "报价风险检查", "技术路线讨论", "交付边界确认"],
    nextBuild: ["设计人工复核分级", "明确交付范围和价格带", "建立咨询记录模板"]
  },
  {
    href: "/suppliers",
    eyebrow: "板块 05",
    title: "优质供应商专栏",
    summary: "未来沉淀设备、材料、检测和施工相关供应商信息，先从内容专栏和筛选标准开始。",
    status: "内容孵化中",
    primaryAction: "查看专栏规划",
    audience: ["环保公司", "工程师", "供应商"],
    features: ["供应商筛选标准", "设备类型专栏", "案例资料索引", "合作边界说明"],
    nextBuild: ["先写筛选标准", "暂不开放广告位", "先用内容验证关注度"]
  }
];

export const platformStats = [
  { label: "现有 POC 路由", value: "5 个", description: "首页、分流、结果、样张、邮件咨询" },
  { label: "新平台板块", value: "5 个", description: "工具、模板、生成、对接、供应商" },
  { label: "当前数据能力", value: "Mock", description: "暂不保存真实线索" }
];

export const validationGoals = [
  "用户是否从单一 VOCs 售前助手，理解为环保售前平台入口。",
  "五大板块中哪一个最容易被点击和咨询。",
  "用户是更想要模板、计算工具，还是人工复核。",
  "供应商专栏是否有内容关注度，不急于商业化。"
];

export const startPaths = [
  { problem: "不知道要问客户哪些参数", target: "标准模板", href: "/templates" },
  { problem: "需要快速算一个参数", target: "计算工具", href: "/tools" },
  { problem: "想生成初步方案框架", target: "初步方案框架生成", href: "/plans" },
  { problem: "有复杂项目或报价不确定", target: "工程师对接", href: "/engineers" },
  { problem: "已经明确设备需求，想找厂家", target: "供应商专栏", href: "/suppliers" }
];

export function getPlatformModule(href: string) {
  return platformModules.find((module) => module.href === href);
}

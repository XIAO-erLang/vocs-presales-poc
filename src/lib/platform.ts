export type PlatformModule = {
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  status: "POC 已上线" | "骨架已开放" | "待接人工服务" | "内容孵化中" | "协作预留";
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
    summary: "面向 VOCs、废气治理与环保设备前期估算，提供可复用的售前计算工具。",
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
    summary: "沉淀工况表、现场勘查清单、报价前风险提示、客户沟通问题库等标准资料。",
    status: "POC 已上线",
    primaryAction: "查看模板目录",
    audience: ["环保销售", "新人售前", "企业甲方"],
    features: ["工况信息采集表", "客户沟通问题库", "现场勘查清单", "风险提示清单"],
    nextBuild: ["把现有样张拆成模板目录", "设计付费前预览范围", "准备可交付 Word 版本"]
  },
  {
    href: "/plans",
    eyebrow: "板块 03",
    title: "初步方案框架",
    summary: "基于项目基础信息，生成用于售前沟通和内部讨论的初步方案框架，不替代正式设计。",
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
    summary: "协助客户将结构化项目信息交给合适工程师，发起一次有效的前期技术对接。",
    status: "待接人工服务",
    primaryAction: "查看对接方式",
    audience: ["环保公司负责人", "工程师", "企业甲方"],
    features: ["复杂项目复核", "报价风险检查", "技术路线讨论", "交付边界确认"],
    nextBuild: ["设计人工复核分级", "明确交付范围和价格带", "建立咨询记录模板"]
  },
  {
    href: "/mechanical",
    eyebrow: "板块 05",
    title: "机械设计协作",
    summary: "面向环保设备、非标结构、风管、支架、平台、箱体等需求，预留机械设计师协作入口。",
    status: "协作预留",
    primaryAction: "查看协作范围",
    audience: ["企业甲方", "项目经理", "设备厂家"],
    features: ["箱体结构", "风管布置", "支架平台", "三维建模与二维出图"],
    nextBuild: ["先做需求展示和申请入口", "明确设计交付边界", "后续再接设计师对接流程"]
  },
  {
    href: "/suppliers",
    eyebrow: "板块 06",
    title: "优质供应商资料库",
    summary: "整理经初步审核的供应商资料，展示其产品能力、适用场景与需谨慎场景，不作效果担保。",
    status: "内容孵化中",
    primaryAction: "查看专栏规划",
    audience: ["环保公司", "工程师", "供应商"],
    features: ["供应商筛选标准", "设备类型专栏", "案例资料索引", "合作边界说明"],
    nextBuild: ["先写筛选标准", "暂不开放广告位", "先用内容验证关注度"]
  }
];

export const platformStats = [
  { label: "现有 POC 路由", value: "5 个", description: "首页、分流、结果、样张、邮件咨询" },
  { label: "源解平台板块", value: "6 个", description: "工具、模板、方案、工程师、机械设计、供应商" },
  { label: "当前数据能力", value: "Mock", description: "暂不保存真实线索" }
];

export const validationGoals = [
  "用户是否从单一 VOCs 售前助手，理解为源解的环境工程技术支持与资源协同入口。",
  "六大板块中哪一个最容易被点击和咨询。",
  "用户是更想要模板、计算工具，还是人工复核。",
  "供应商资料库是否有内容关注度，不急于商业化。"
];

export const startPaths = [
  { problem: "不知道要问客户哪些参数", target: "标准模板", href: "/templates" },
  { problem: "需要快速算一个参数", target: "计算工具", href: "/tools" },
  { problem: "想生成初步方案框架", target: "初步方案框架", href: "/plans" },
  { problem: "有复杂项目或报价不确定", target: "工程师对接", href: "/engineers" },
  { problem: "需要箱体、风管或支架图纸协作", target: "机械设计协作", href: "/mechanical" },
  { problem: "已经明确设备需求，想找厂家", target: "供应商资料库", href: "/suppliers" }
];

export function getPlatformModule(href: string) {
  return platformModules.find((module) => module.href === href);
}

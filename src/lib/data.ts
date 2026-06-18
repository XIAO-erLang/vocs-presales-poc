import type { IntentOption, Need, NextAction, Option, ProjectStatus, Role } from "./types";

export const painPoints = [
  "客户只说“车间味道大”，但说不清成分、风量和浓度。",
  "销售要报价，但不知道该先问哪些参数。",
  "工程师想判断活性炭、喷淋、RCO、RTO 是否合适。",
  "老板想把新人售前沟通标准化。",
  "甲方想知道找环保公司前该准备哪些资料。"
];

export const roleOptions: Option<Role>[] = [
  { value: "sales", label: "环保销售" },
  { value: "owner", label: "环保公司老板/负责人" },
  { value: "engineer", label: "工程师/技术人员" },
  { value: "factory", label: "企业甲方/工厂负责人" },
  { value: "learner", label: "学习了解" }
];

export const needOptions: Option<Need>[] = [
  { value: "ask", label: "不知道怎么问客户参数" },
  { value: "template", label: "想要一套 VOCs 售前资料模板" },
  { value: "process", label: "想判断某个项目适合什么工艺" },
  { value: "draft", label: "想生成一版初步方案草稿" },
  { value: "review", label: "想复核已有方案或报价" }
];

export const projectStatusOptions: Option<ProjectStatus>[] = [
  { value: "active", label: "有，正在沟通" },
  { value: "partial", label: "有，但资料不全" },
  { value: "none", label: "暂时没有，只想准备模板" },
  { value: "unknown", label: "不确定" }
];

export const nextActionOptions: Option<NextAction>[] = [
  { value: "sample", label: "先看样张" },
  { value: "fullPack", label: "获取完整资料包" },
  { value: "submitProject", label: "提交工况做初步判断" },
  { value: "manualReview", label: "找人复核复杂项目" }
];

export const intentOptions: Option<IntentOption>[] = [
  { value: "freeSample", label: "免费样张" },
  { value: "fullPack", label: "完整资料包" },
  { value: "packWithTemplate", label: "资料包 + 初步方案模板" },
  { value: "projectCheck", label: "提交真实项目做初步判断" },
  { value: "manualReview", label: "人工复核已有方案/报价" }
];

export const sampleSections = [
  {
    title: "工况信息采集表示例",
    items: [
      "行业类型、生产产品、当前触发原因",
      "总风量、入口浓度、主要污染物组分",
      "温度、湿度、粉尘、漆雾、油雾、水汽",
      "是否有检测报告、执行标准、安装空间"
    ]
  },
  {
    title: "客户沟通问题库示例",
    items: [
      "客户为什么现在要处理 VOCs？",
      "是否有投诉、整改、扩产或检查压力？",
      "有没有近期检测报告？",
      "预算、工期和停产窗口是否明确？"
    ]
  },
  {
    title: "现场勘查清单示例",
    items: [
      "生产线、产污点、集气罩和排气筒位置",
      "收集系统是否完整，是否存在无组织逸散",
      "设备安装空间、电力条件、检修空间",
      "消防、防爆、危废暂存和噪声限制"
    ]
  },
  {
    title: "初步方案目录示例",
    items: [
      "项目概况、工况信息摘要",
      "已知参数与缺失参数",
      "技术路线初步比较",
      "主要设备模块建议、风险提示、下一步建议"
    ]
  },
  {
    title: "风险提示示例",
    items: [
      "高浓度、易燃易爆、复杂组分项目必须人工复核",
      "没有检测报告且关键参数缺失，不建议直接报价",
      "正式投标、施工、验收和达标承诺不适用本工具",
      "RCO/RTO、催化燃烧、吸附脱附等复杂工艺需专业复核"
    ]
  }
];

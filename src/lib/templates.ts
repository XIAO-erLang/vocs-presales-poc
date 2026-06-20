export type Template = {
  slug: string;
  name: string;
  targetUsers: string[];
  useCases: string[];
  previewItems: string[];
  fullVersionIncludes: string[];
  price: string;
  status: "可预览" | "整理中";
};

export const templates: Template[] = [
  {
    slug: "vocs-condition-form",
    name: "VOCs 工况信息采集表",
    targetUsers: ["环保销售", "工程师", "企业甲方"],
    useCases: ["报价前收集参数", "判断资料是否完整", "减少反复追问"],
    previewItems: ["行业类型", "废气来源", "风量与浓度", "温湿度与颗粒物", "现有治理设备"],
    fullVersionIncludes: ["完整采集表", "填写说明", "缺失参数提醒", "高风险场景提示"],
    price: "19.9 元",
    status: "可预览"
  },
  {
    slug: "site-checklist",
    name: "现场勘查清单",
    targetUsers: ["工程师", "环保公司负责人"],
    useCases: ["现场踏勘", "施工条件确认", "报价风险识别"],
    previewItems: ["产污点", "收集系统", "设备安装空间", "电力条件", "检修空间"],
    fullVersionIncludes: ["勘查清单", "照片记录建议", "风险提示", "复核问题库"],
    price: "29.9 元",
    status: "可预览"
  },
  {
    slug: "quotation-risk",
    name: "报价前风险提示表",
    targetUsers: ["环保销售", "环保公司老板"],
    useCases: ["报价前内部确认", "避免无参数报价", "识别需要工程师介入的项目"],
    previewItems: ["无检测报告风险", "高湿含油风险", "防火防爆风险", "复杂成分风险"],
    fullVersionIncludes: ["风险分类表", "客户沟通话术", "需复核场景", "拒绝直接报价提示"],
    price: "19.9 元",
    status: "整理中"
  },
  {
    slug: "client-question-bank",
    name: "客户沟通问题库",
    targetUsers: ["环保销售", "新人售前"],
    useCases: ["首次电话沟通", "微信收集项目资料", "判断客户真实阶段"],
    previewItems: ["为什么现在处理", "是否有检测报告", "预算和工期", "是否涉及投诉或整改"],
    fullVersionIncludes: ["问题库", "追问逻辑", "不同身份话术", "项目阶段判断"],
    price: "19.9 元",
    status: "可预览"
  },
  {
    slug: "proposal-word-outline",
    name: "初步方案 Word 模板目录",
    targetUsers: ["工程师", "环保销售"],
    useCases: ["生成方案草稿", "统一内部格式", "售前沟通展示"],
    previewItems: ["项目概况", "已知参数", "缺失参数", "工艺路线初筛", "风险提示"],
    fullVersionIncludes: ["完整目录", "章节说明", "示例段落", "边界声明"],
    price: "49 元",
    status: "可预览"
  },
  {
    slug: "factory-self-check",
    name: "企业甲方自查资料清单",
    targetUsers: ["企业甲方", "工厂负责人"],
    useCases: ["找环保公司前准备资料", "避免直接问报价", "梳理内部工况"],
    previewItems: ["生产工序", "废气来源", "排放口", "现有设备", "历史检测数据"],
    fullVersionIncludes: ["自查清单", "资料准备说明", "常见误区", "咨询前准备项"],
    price: "9.9 元",
    status: "整理中"
  }
];

export function getTemplate(slug: string) {
  return templates.find((template) => template.slug === slug);
}

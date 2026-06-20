export type Tool = {
  slug: string;
  name: string;
  category: string;
  description: string;
  useCases: string[];
  inputs: string[];
  outputs: string[];
  price: string;
  status: "示例版" | "即将开放";
};

export const tools: Tool[] = [
  {
    slug: "air-volume",
    name: "风量换算工具",
    category: "通风参数",
    description: "用于把常见风量单位、支管风量和总风量口径整理成售前沟通可用的参数。",
    useCases: ["客户只提供局部风口数据", "销售需要快速确认总风量口径", "方案草稿前统一单位"],
    inputs: ["风口数量", "单个风口风量", "运行工况说明"],
    outputs: ["估算总风量", "参数缺失提醒", "是否需要现场复核"],
    price: "9.9 元 / 次",
    status: "示例版"
  },
  {
    slug: "duct-velocity",
    name: "管道风速计算工具",
    category: "通风参数",
    description: "根据风量和管径估算管道风速，帮助判断收集系统是否存在明显不合理区间。",
    useCases: ["排查风管尺寸是否偏小", "报价前判断管道改造风险", "给客户解释风速与阻力关系"],
    inputs: ["风量", "圆管直径或矩形管尺寸", "管道长度说明"],
    outputs: ["估算风速", "风速区间提示", "阻力风险提醒"],
    price: "9.9 元 / 次",
    status: "即将开放"
  },
  {
    slug: "activated-carbon",
    name: "活性炭用量估算工具",
    category: "VOCs 预估",
    description: "用于售前阶段粗略估算活性炭装填量和更换频率，不作为正式设计依据。",
    useCases: ["低浓度 VOCs 初筛", "客户询问耗材费用", "判断是否需要人工复核"],
    inputs: ["风量", "VOCs 浓度", "运行时间", "湿度和粉尘情况"],
    outputs: ["示例装填量", "更换周期假设", "不适用风险提示"],
    price: "9.9 元 / 次",
    status: "示例版"
  },
  {
    slug: "residence-time",
    name: "停留时间计算工具",
    category: "设备参数",
    description: "用于估算废气在设备或反应段中的停留时间，辅助判断参数是否需要进一步核算。",
    useCases: ["喷淋塔或箱体尺寸初核", "设备选型前沟通", "发现明显偏小的停留时间"],
    inputs: ["处理风量", "有效容积", "设备结构说明"],
    outputs: ["估算停留时间", "适用性提醒", "复核建议"],
    price: "9.9 元 / 次",
    status: "即将开放"
  },
  {
    slug: "spray-liquid-gas-ratio",
    name: "喷淋塔液气比估算工具",
    category: "臭气 / 预处理",
    description: "用于估算喷淋塔液气比范围，帮助售前判断是否需要补充循环水量和药剂信息。",
    useCases: ["臭气项目初步沟通", "喷淋塔报价前参数整理", "判断客户资料是否缺失"],
    inputs: ["风量", "循环液量", "污染物类型", "药剂或吸收液说明"],
    outputs: ["液气比估算", "资料缺失提示", "不适用场景"],
    price: "9.9 元 / 次",
    status: "即将开放"
  },
  {
    slug: "fan-power",
    name: "风机功率估算工具",
    category: "运行费用",
    description: "根据风量、全压和效率假设估算风机功率，用于售前运行费用沟通。",
    useCases: ["估算运行电费", "对比不同工艺阻力", "报价前准备能耗说明"],
    inputs: ["风量", "全压", "风机效率假设", "运行时间"],
    outputs: ["估算功率", "日运行电耗", "费用测算入口"],
    price: "9.9 元 / 次",
    status: "即将开放"
  }
];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

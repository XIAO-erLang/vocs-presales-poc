export type Engineer = {
  slug: string;
  displayName: string;
  specialty: string;
  tags: string[];
  representativeProjects: string[];
  services: string[];
  suitableFor: string[];
  notSuitableFor: string[];
  price: string;
  revenueShare: string;
  status: "示例工程师";
};

export const engineers: Engineer[] = [
  {
    slug: "vocs-review-a",
    displayName: "VOCs 工艺复核工程师 A",
    specialty: "活性炭、RCO/RTO、吸附脱附路线初步复核",
    tags: ["VOCs", "工艺路线", "报价复核"],
    representativeProjects: ["涂装废气", "印刷废气", "化工低浓度 VOCs"],
    services: ["初步路线复核", "缺失参数提醒", "报价风险提示"],
    suitableFor: ["已有检测报告但不确定工艺", "报价前需要确认风险", "客户要求解释路线差异"],
    notSuitableFor: ["正式施工图设计", "达标承诺", "没有任何工况信息的项目"],
    price: "129 元 / 次",
    revenueShare: "工程师可获得项目首次对接服务报酬，具体合作规则以后续确认版本为准。源解不抽后续深度服务大单。",
    status: "示例工程师"
  },
  {
    slug: "odor-control-b",
    displayName: "臭气治理工程师 B",
    specialty: "厨余、污水池、垃圾房和异味治理初步判断",
    tags: ["臭气", "厨余", "污水池"],
    representativeProjects: ["餐厨垃圾站", "污水调节池", "垃圾转运站"],
    services: ["臭气来源梳理", "预处理建议", "资料补充清单"],
    suitableFor: ["不知道废气从哪里下手", "臭气与 VOCs 难区分", "现场收集系统不完整"],
    notSuitableFor: ["嗅辨检测报告出具", "环保验收结论", "政府申报材料"],
    price: "129 元 / 次",
    revenueShare: "工程师可获得项目首次对接服务报酬，具体合作规则以后续确认版本为准。源解不抽后续深度服务大单。",
    status: "示例工程师"
  },
  {
    slug: "pretreatment-c",
    displayName: "除尘与预处理工程师 C",
    specialty: "粉尘、油雾、高湿和预处理段风险判断",
    tags: ["除尘", "油雾", "预处理"],
    representativeProjects: ["打磨粉尘", "餐饮油雾", "高湿废气预处理"],
    services: ["预处理必要性判断", "设备组合提醒", "维护风险提示"],
    suitableFor: ["废气含尘或油雾", "担心活性炭堵塞", "喷淋和过滤段不确定"],
    notSuitableFor: ["粉尘爆炸安全评价", "消防专项设计", "职业卫生评价"],
    price: "129 元 / 次",
    revenueShare: "工程师可获得项目首次对接服务报酬，具体合作规则以后续确认版本为准。源解不抽后续深度服务大单。",
    status: "示例工程师"
  },
  {
    slug: "duct-system-d",
    displayName: "通风管道与系统工程师 D",
    specialty: "集气罩、风管、风机和系统阻力初步复核",
    tags: ["通风系统", "风管", "风机"],
    representativeProjects: ["车间集气改造", "排风系统复核", "管道阻力初算"],
    services: ["收集系统判断", "风量分配提醒", "风机选型沟通"],
    suitableFor: ["现场味道大但收集差", "风量和管径不匹配", "风机功率不确定"],
    notSuitableFor: ["正式暖通施工图", "结构荷载复核", "消防排烟设计"],
    price: "129 元 / 次",
    revenueShare: "工程师可获得项目首次对接服务报酬，具体合作规则以后续确认版本为准。源解不抽后续深度服务大单。",
    status: "示例工程师"
  }
];

export function getEngineer(slug: string) {
  return engineers.find((engineer) => engineer.slug === slug);
}

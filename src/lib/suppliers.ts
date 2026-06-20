export type Supplier = {
  slug: string;
  name: string;
  type: string;
  products: string[];
  industries: string[];
  suitableConditions: string[];
  cautionConditions: string[];
  caseTypes: string[];
  serviceArea: string;
  dataStatus: string;
  description: string;
  status: "示例内容" | "入驻开放中";
};

export const supplierCategories = [
  "VOCs 治理设备供应商",
  "臭气 / 异味治理设备供应商",
  "除尘与预处理设备供应商",
  "材料耗材供应商",
  "安装运维 / 检测服务供应商"
];

export const suppliers: Supplier[] = [
  {
    slug: "vocs-equipment-demo",
    name: "VOCs 设备供应商示例 A",
    type: "VOCs 治理设备供应商",
    products: ["活性炭吸附箱", "催化燃烧设备", "吸附脱附模块"],
    industries: ["涂装", "印刷", "包装", "低浓度有机废气"],
    suitableConditions: ["浓度较低", "风量中等", "有基础检测数据"],
    cautionConditions: ["高湿", "高浓度", "易燃易爆", "含卤素或复杂组分"],
    caseTypes: ["涂装车间", "印刷包装", "小型 VOCs 改造"],
    serviceArea: "华东、华南可沟通",
    dataStatus: "示例资料，入驻开放中",
    description: "用于展示供应商资料卡片结构，不代表平台已经完成真实审核或推荐。",
    status: "示例内容"
  },
  {
    slug: "odor-equipment-demo",
    name: "臭气治理供应商示例 B",
    type: "臭气 / 异味治理设备供应商",
    products: ["喷淋塔", "生物滤池", "活性炭除臭模块"],
    industries: ["厨余垃圾", "污水处理", "垃圾转运", "食品加工"],
    suitableConditions: ["臭气来源明确", "有收集系统", "需要预处理判断"],
    cautionConditions: ["臭气来源不明", "无组织逸散严重", "缺少通风条件"],
    caseTypes: ["餐厨站", "污水池", "垃圾房"],
    serviceArea: "全国项目可初步沟通",
    dataStatus: "示例资料，入驻开放中",
    description: "用于承接臭气类搜索和供应商对接想象，不等同于具体项目适配承诺。",
    status: "示例内容"
  },
  {
    slug: "material-demo",
    name: "材料耗材供应商示例 C",
    type: "材料耗材供应商",
    products: ["活性炭", "过滤棉", "除雾填料", "喷淋填料"],
    industries: ["VOCs", "臭气", "预处理", "运维更换"],
    suitableConditions: ["已有设备", "需要耗材更换", "需要参数表比对"],
    cautionConditions: ["未确认设备尺寸", "废气含水含油严重", "更换周期无记录"],
    caseTypes: ["活性炭更换", "过滤段维护", "喷淋塔填料更换"],
    serviceArea: "按物流和项目区域确认",
    dataStatus: "示例资料，入驻开放中",
    description: "用于展示耗材供应商资料结构，后续需要审核参数、案例和服务边界。",
    status: "示例内容"
  }
];

export function getSupplier(slug: string) {
  return suppliers.find((supplier) => supplier.slug === slug);
}

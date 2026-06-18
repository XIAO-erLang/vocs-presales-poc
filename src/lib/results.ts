import type { ResultContent, Role } from "./types";

export const resultByRole: Record<Role, ResultContent> = {
  sales: {
    title: "推荐《VOCs 售前沟通资料包》",
    description: "适合客户需求模糊、报价前参数问不全、需要快速整理售前沟通框架的环保销售。",
    recommended: "VOCs 售前沟通资料包",
    includes: ["工况采集表", "客户沟通问题库", "现场勘查清单", "初步方案模板目录"],
    nextStep: "先看样张，判断这套资料是否能减少你报价前漏问参数。"
  },
  owner: {
    title: "推荐《内部售前标准化资料包》",
    description: "适合想把销售问参、技术复核、新人培训和模板统一沉淀下来的环保公司负责人。",
    recommended: "内部售前标准化资料包",
    includes: ["新人培训清单", "售前流程", "模板统一", "企业内部定制版本"],
    nextStep: "先看标准化目录，再判断是否需要企业内部版本。"
  },
  engineer: {
    title: "推荐《工况采集与初步方案模板》",
    description: "适合需要把参数采集、路线判断、风险提示和初步方案草稿串起来的技术人员。",
    recommended: "工况采集与初步方案模板",
    includes: ["参数采集", "路线判断", "风险提示", "初步方案 Word 模板"],
    nextStep: "先看样张中的工况表和方案目录，确认颗粒度是否够用。"
  },
  factory: {
    title: "推荐《企业自查资料清单》",
    description: "适合在找环保公司前先准备基础工况信息，避免一上来问报价导致沟通低效的企业甲方。",
    recommended: "企业自查资料清单",
    includes: ["基础工况准备", "现场信息清单", "检测报告提醒", "沟通前风险提示"],
    nextStep: "先看企业自查样张，再决定是否提交工况做初步判断。"
  },
  learner: {
    title: "推荐先看样张和基础资料包目录",
    description: "适合先理解 VOCs 项目前期沟通要问什么、哪些信息缺了不能下结论。",
    recommended: "基础资料包目录",
    includes: ["资料包目录", "工况表示例", "问题库节选", "边界声明"],
    nextStep: "先看样张，确认是否需要完整版资料包。"
  }
};

export function getResultForRole(role?: string): ResultContent {
  if (role && role in resultByRole) {
    return resultByRole[role as Role];
  }
  return resultByRole.sales;
}

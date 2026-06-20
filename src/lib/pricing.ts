export const contactEmail = "laichenger2026@gmail.com";

export const pricingItems = [
  { name: "计算工具单次使用", price: "9.9 元 / 次", status: "即将开放" },
  { name: "计算工具年费", price: "199 元 / 年", status: "即将开放" },
  { name: "标准模板", price: "9.9 元 - 49 元", status: "预览中" },
  { name: "初步方案框架生成", price: "99 元 - 199 元", status: "流程骨架" },
  { name: "工程师对接", price: "129 元 / 次", status: "流程展示" },
  { name: "供应商对接", price: "邮件咨询", status: "待开放" }
];

export const engineerRevenueShare = {
  customerPays: "129 元",
  engineerGets: "29 元",
  platformKeeps: "100 元"
};

export function buildMailto(subject: string, body: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

import { getEngineer } from "@/lib/engineers";
import { getSupplier } from "@/lib/suppliers";
import { getTemplate } from "@/lib/templates";
import { getTool } from "@/lib/tools";
import type { ProductForCheckout, ProductType } from "./types";

export function normalizeCheckoutType(type?: string): ProductType | null {
  if (!type) return null;
  const aliases: Record<string, ProductType> = {
    tool: "tool_once",
    tool_once: "tool_once",
    tool_yearly: "tool_yearly",
    template: "template",
    plan: "plan",
    engineer: "engineer",
    supplier: "supplier_contact",
    supplier_contact: "supplier_contact",
    supplier_yearly: "supplier_yearly"
  };

  return aliases[type] ?? null;
}

export function createMockOrderId(productType: ProductType, productSlug: string) {
  return `mock__${productType}__${productSlug}`;
}

export function parseMockOrderId(orderId: string): { productType: ProductType; productSlug: string } | null {
  if (orderId === "mock-order") {
    return { productType: "template", productSlug: "vocs-condition-form" };
  }

  if (orderId === "mock-engineer-order") {
    return { productType: "engineer", productSlug: "vocs-review-a" };
  }

  const parts = orderId.split("__");
  if (parts.length < 3 || parts[0] !== "mock") return null;

  const productType = normalizeCheckoutType(parts[1]);
  if (!productType) return null;

  return { productType, productSlug: parts.slice(2).join("__") };
}

export function getProductForCheckout(productType: ProductType, slug: string): ProductForCheckout | null {
  if (productType === "tool_once") {
    const tool = getTool(slug);
    if (!tool) return null;
    return {
      productType,
      productSlug: slug,
      productName: `${tool.name} - 单次使用`,
      amount: 990,
      currency: "CNY",
      summary: "用于当前工具的一次售前估算结果查看和记录占位。",
      includes: ["1 次工具使用权", "示例结果区完整展示", "参数缺失与人工复核提醒"]
    };
  }

  if (productType === "tool_yearly") {
    const tool = getTool(slug);
    if (!tool) return null;
    return {
      productType,
      productSlug: slug,
      productName: "计算工具年费会员",
      amount: 19900,
      currency: "CNY",
      summary: "用于后续开放的计算工具年费会员占位。",
      includes: ["一年工具会员", "多工具使用权占位", "后续接登录后绑定账号"]
    };
  }

  if (productType === "template") {
    const template = getTemplate(slug);
    if (!template) return null;
    return {
      productType,
      productSlug: slug,
      productName: template.name,
      amount: getTemplateAmount(slug),
      currency: "CNY",
      summary: "获取标准模板完整版本的交付占位。",
      includes: ["完整模板访问权", "邮件交付模板预览", "附件发送占位"]
    };
  }

  if (productType === "plan") {
    return {
      productType,
      productSlug: slug || "basic-vocs-plan",
      productName: "VOCs 初步方案完整结果",
      amount: 4900,
      currency: "CNY",
      summary: "解锁售前初步方案完整框架和交付占位。",
      includes: ["完整方案目录", "风险提示与缺失参数", "完整方案附件占位"]
    };
  }

  if (productType === "engineer") {
    const engineer = getEngineer(slug);
    if (!engineer) return null;
    return {
      productType,
      productSlug: slug,
      productName: `工程师对接：${engineer.displayName}`,
      amount: 12900,
      currency: "CNY",
      summary: "平台协助发起一次工程师项目对接，不等同于购买完整设计服务。",
      includes: ["30 分钟优先通知所选工程师", "24 小时接单等待流程", "三方邮件对接预览"]
    };
  }

  if (productType === "supplier_contact") {
    const supplier = getSupplier(slug);
    if (!supplier) return null;
    return {
      productType,
      productSlug: slug,
      productName: `供应商对接：${supplier.name}`,
      amount: 0,
      currency: "CNY",
      summary: "供应商付费对接暂未开放，当前仅保留咨询占位。",
      includes: ["邮件咨询入口", "工程师复核建议", "后续付费对接预留"]
    };
  }

  return {
    productType,
    productSlug: slug || "supplier-join",
    productName: "供应商年费入驻申请",
    amount: 0,
    currency: "CNY",
    summary: "供应商必须审核通过后才能入驻，费用审核后另行确认。",
    includes: ["入驻资料提交", "人工审核占位", "审核通过后另行确认费用"]
  };
}

function getTemplateAmount(slug: string) {
  const amountMap: Record<string, number> = {
    "factory-self-check": 990,
    "vocs-condition-form": 1990,
    "quotation-risk": 1990,
    "client-question-bank": 1990,
    "site-checklist": 2990,
    "proposal-word-outline": 4900
  };

  return amountMap[slug] ?? 1990;
}

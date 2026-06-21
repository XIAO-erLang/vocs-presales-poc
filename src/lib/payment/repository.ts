import { getEngineer } from "@/lib/engineers";
import { createMockOrderId, getProductForCheckout, parseMockOrderId } from "./catalog";
import type {
  EngineerOrder,
  EngineerOrderStatus,
  Entitlement,
  Order,
  OrderStatus,
  PaymentSession,
  PaymentSessionStatus,
  ProductForCheckout,
  ProductType
} from "./types";

const mockNow = "2026-06-21T09:00:00.000Z";

export const orderStatusLabels: Record<OrderStatus, string> = {
  pending: "待支付",
  paid: "已支付",
  fulfilled: "已交付 / 已开通权益",
  cancelled: "已取消",
  refunded: "已退款",
  failed: "支付失败"
};

export const engineerStatusLabels: Record<EngineerOrderStatus, string> = {
  engineer_pending: "等待工程师接单",
  engineer_priority_window: "所选工程师优先接单期",
  engineer_candidates_notified: "已通知候选工程师",
  engineer_accepted: "工程师已接单",
  customer_confirming_replacement: "等待客户确认替换",
  connected: "已建立邮件对接",
  completed: "已完成",
  refund_required: "24 小时无人接单，需退款"
};

export function getOrderById(orderId: string, status: OrderStatus = "pending"): Order | null {
  const parsed = parseMockOrderId(orderId);
  if (!parsed) return null;

  const product = getProductForCheckout(parsed.productType, parsed.productSlug);
  if (!product) return null;

  return buildMockOrder(product, orderId, status);
}

export function createOrderFromProduct(productType: ProductType, productSlug: string): Order | null {
  const product = getProductForCheckout(productType, productSlug);
  if (!product) return null;

  return buildMockOrder(product, createMockOrderId(productType, productSlug), "pending");
}

export function getPaymentSessionForOrder(order: Order, status: PaymentSessionStatus = "created"): PaymentSession {
  return {
    id: order.paymentSessionId,
    orderId: order.id,
    provider: order.paymentProvider,
    checkoutUrl: `/payment/mock/${order.id}`,
    status,
    createdAt: order.createdAt
  };
}

export function getEntitlementForOrder(order: Order): Entitlement {
  const validUntil = order.productType === "tool_yearly" ? "2027-06-21T09:00:00.000Z" : null;
  const usageRemaining = order.productType === "tool_once" ? 1 : null;

  return {
    id: `entitlement-${order.id}`,
    customerEmail: order.customerEmail,
    productType: order.productType,
    productSlug: order.productSlug,
    orderId: order.id,
    validUntil,
    usageRemaining,
    createdAt: mockNow
  };
}

export function getEngineerOrderForOrder(order: Order): EngineerOrder | null {
  if (order.productType !== "engineer") return null;

  const engineer = getEngineer(order.productSlug);
  const selectedEngineerName = engineer?.displayName ?? order.productSlug;

  return {
    id: `engineer-${order.id}`,
    orderId: order.id,
    selectedEngineerSlug: order.productSlug,
    candidateEngineerSlugs: ["odor-control-b", "pretreatment-c", "duct-system-d"].filter((slug) => slug !== order.productSlug),
    projectInfo: "示例项目：客户希望复核 VOCs 或异味项目的工艺路线、缺失参数和报价风险。后续接数据库后从申请表同步。",
    priorityExpiresAt: "2026-06-21T09:30:00.000Z",
    acceptDeadlineAt: "2026-06-22T09:00:00.000Z",
    connectEmailPreview: `客户选择 ${selectedEngineerName} 后，平台将生成客户、工程师、平台三方邮件，并附带项目工况摘要。`,
    status: "engineer_priority_window"
  };
}

export function getBoundaryCopy(productType: ProductType) {
  const copies: Record<ProductType, string> = {
    tool_once: "本工具计算结果仅用于售前估算、学习参考和内部沟通，不作为正式设计依据。",
    tool_yearly: "本工具计算结果仅用于售前估算、学习参考和内部沟通，不作为正式设计依据。",
    template: "模板用于前期沟通、资料整理和内部参考，不构成正式工程设计文件。",
    plan: "生成内容为售前初步方案框架，不替代正式工程设计、施工图、检测验收或达标承诺。",
    engineer: "129 元为平台协助发起一次工程师项目对接的服务费用，不等同于购买完整设计服务。后续深度服务由客户与工程师另行确认范围、费用、周期和责任边界。",
    supplier_contact: "供应商资料展示不等同于平台推荐或工程效果承诺，具体项目适配性需结合工况和专业复核判断。",
    supplier_yearly: "供应商入驻展示不等同于平台推荐或工程效果承诺，必须通过人工审核后才能进入专栏。"
  };

  return copies[productType];
}

export function getDeliveryPreview(order: Order) {
  if (order.productType === "template") {
    return {
      title: "模板邮件交付预览",
      rows: [
        ["收件邮箱", order.customerEmail],
        ["模板名称", order.productName],
        ["邮件标题", `【VOCs 售前平台】${order.productName} 完整版本交付`],
        ["邮件正文预览", "你好，已为你开通该模板完整版本访问权。当前版本为 UI mock，附件发送与下载链接将在接入数据库和邮件服务后生效。"],
        ["附件说明", "完整 Word / Excel 模板附件占位"]
      ]
    };
  }

  if (order.productType === "plan") {
    return {
      title: "方案邮件交付预览",
      rows: [
        ["收件邮箱", order.customerEmail],
        ["方案名称", order.productName],
        ["邮件标题", "【VOCs 售前平台】初步方案完整结果交付"],
        ["邮件正文预览", "你好，已为你开通完整初步方案结果。当前内容仅为售前方案框架，不替代正式工程设计。"],
        ["附件说明", "完整方案 Word / PDF 附件占位"]
      ]
    };
  }

  if (order.productType === "engineer") {
    return {
      title: "工程师三方邮件预览",
      rows: [
        ["客户邮箱", order.customerEmail],
        ["工程师邮箱", "engineer-demo@example.com"],
        ["平台邮箱", "laichenger2026@gmail.com"],
        ["项目详细信息", "从工程师申请表同步客户填写的项目地区、废气来源、风量、浓度、现有设备和复核问题。"],
        ["对接边界说明", getBoundaryCopy("engineer")]
      ]
    };
  }

  return {
    title: "权益开通预览",
    rows: [
      ["客户邮箱", order.customerEmail],
      ["开通内容", order.productName],
      ["权益说明", getEntitlementText(order.productType)]
    ]
  };
}

export function formatMoney(amount: number, currency: "CNY") {
  if (amount === 0) return "待确认";
  return `${(amount / 100).toFixed(amount % 100 === 0 ? 0 : 1)} 元 ${currency === "CNY" ? "" : currency}`.trim();
}

export function getEntitlementText(productType: ProductType) {
  const copy: Record<ProductType, string> = {
    tool_once: "增加一次工具使用权。",
    tool_yearly: "开通一年工具会员。",
    template: "开通该模板完整版本访问权。",
    plan: "开通该方案完整结果访问权。",
    engineer: "创建工程师对接订单，进入工程师接单流程。",
    supplier_contact: "供应商付费对接暂未开放，当前保留咨询入口。",
    supplier_yearly: "供应商入驻需人工审核，审核通过后另行确认费用。"
  };

  return copy[productType];
}

function buildMockOrder(product: ProductForCheckout, orderId: string, status: OrderStatus): Order {
  return {
    id: orderId,
    orderNo: `VOCS-${Math.abs(hashCode(orderId)).toString().padStart(6, "0").slice(0, 6)}`,
    productType: product.productType,
    productSlug: product.productSlug,
    productName: product.productName,
    amount: product.amount,
    currency: product.currency,
    customerEmail: "customer@example.com",
    customerName: "mock 客户",
    status,
    paymentProvider: "mock",
    paymentSessionId: `pay-${orderId}`,
    createdAt: mockNow,
    updatedAt: mockNow
  };
}

function hashCode(value: string) {
  return value.split("").reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0), 0);
}

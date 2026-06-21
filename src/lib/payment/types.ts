export type ProductType =
  | "tool_once"
  | "tool_yearly"
  | "template"
  | "plan"
  | "engineer"
  | "supplier_contact"
  | "supplier_yearly";

export type OrderStatus = "pending" | "paid" | "fulfilled" | "cancelled" | "refunded" | "failed";

export type PaymentProvider = "mock" | "stripe" | "wechat_pay" | "alipay";

export type PaymentSessionStatus = "created" | "paid" | "cancelled" | "failed";

export type EngineerOrderStatus =
  | "engineer_pending"
  | "engineer_priority_window"
  | "engineer_candidates_notified"
  | "engineer_accepted"
  | "customer_confirming_replacement"
  | "connected"
  | "completed"
  | "refund_required";

export type ProductForCheckout = {
  productType: ProductType;
  productSlug: string;
  productName: string;
  amount: number;
  currency: "CNY";
  summary: string;
  includes: string[];
};

export type Order = {
  id: string;
  orderNo: string;
  productType: ProductType;
  productSlug: string;
  productName: string;
  amount: number;
  currency: "CNY";
  customerEmail: string;
  customerName: string;
  status: OrderStatus;
  paymentProvider: PaymentProvider;
  paymentSessionId: string;
  createdAt: string;
  updatedAt: string;
};

export type Entitlement = {
  id: string;
  customerEmail: string;
  productType: ProductType;
  productSlug: string;
  orderId: string;
  validUntil: string | null;
  usageRemaining: number | null;
  createdAt: string;
};

export type PaymentSession = {
  id: string;
  orderId: string;
  provider: PaymentProvider;
  checkoutUrl: string;
  status: PaymentSessionStatus;
  createdAt: string;
};

export type EngineerOrder = {
  id: string;
  orderId: string;
  selectedEngineerSlug: string;
  candidateEngineerSlugs: string[];
  projectInfo: string;
  priorityExpiresAt: string;
  acceptDeadlineAt: string;
  connectEmailPreview: string;
  status: EngineerOrderStatus;
};

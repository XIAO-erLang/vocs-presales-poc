import type { Order, PaymentSession } from "./types";

export type PaymentProviderAdapter = {
  createCheckoutSession(order: Order): Promise<PaymentSession>;
};

export class MockPaymentProvider implements PaymentProviderAdapter {
  async createCheckoutSession(order: Order): Promise<PaymentSession> {
    return {
      id: order.paymentSessionId,
      orderId: order.id,
      provider: "mock",
      checkoutUrl: `/payment/mock/${order.id}`,
      status: "created",
      createdAt: order.createdAt
    };
  }
}

export class StripeProvider implements PaymentProviderAdapter {
  async createCheckoutSession(): Promise<PaymentSession> {
    throw new Error("StripeProvider is reserved. Configure STRIPE_SECRET_KEY and webhook verification before enabling it.");
  }
}

export class WeChatPayProvider implements PaymentProviderAdapter {
  async createCheckoutSession(): Promise<PaymentSession> {
    throw new Error("WeChatPayProvider is reserved. Configure merchant credentials, certificates, signing and callbacks first.");
  }
}

export class AlipayProvider implements PaymentProviderAdapter {
  async createCheckoutSession(): Promise<PaymentSession> {
    throw new Error("AlipayProvider is reserved. Configure app keys, gateway and callback verification first.");
  }
}

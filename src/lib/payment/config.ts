import type { PaymentProvider } from "./types";

export const paymentConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  provider: (process.env.PAYMENT_PROVIDER ?? "mock") as PaymentProvider,
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  },
  wechatPay: {
    appId: process.env.WECHAT_PAY_APPID,
    mchId: process.env.WECHAT_PAY_MCH_ID,
    apiKey: process.env.WECHAT_PAY_API_KEY,
    certSerialNo: process.env.WECHAT_PAY_CERT_SERIAL_NO,
    privateKey: process.env.WECHAT_PAY_PRIVATE_KEY
  },
  alipay: {
    appId: process.env.ALIPAY_APP_ID,
    privateKey: process.env.ALIPAY_PRIVATE_KEY,
    publicKey: process.env.ALIPAY_PUBLIC_KEY,
    gatewayUrl: process.env.ALIPAY_GATEWAY_URL
  }
};

export const paymentProviderTodos = [
  "确认收款主体、营业执照、银行账户和税务处理方式。",
  "申请微信支付、支付宝或 Stripe 商户，并取得生产环境参数。",
  "在 Vercel 中配置环境变量，不要把真实密钥写入 Git。",
  "补充 webhook 验签、订单幂等更新、退款和对账流程。"
];

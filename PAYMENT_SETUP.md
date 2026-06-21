# 支付与订单系统配置说明 v0.4

## 当前状态

当前版本使用 `mock` payment，不会向微信支付、支付宝或 Stripe 发起真实扣款。

已完成的骨架：

- 统一产品类型：工具单次、工具年费、模板、方案、工程师对接、供应商对接、供应商入驻。
- 统一订单结构：`Order`、`PaymentSession`、`Entitlement`、`EngineerOrder`。
- 统一路由：`/checkout`、`/checkout/[orderId]`、`/payment/mock/[orderId]`、`/payment/success`、`/payment/cancel`、`/payment/failed`、`/orders/[orderId]`、`/engineers/orders/[orderId]`。
- mock 支付成功后展示权益开通和邮件交付预览。
- 工程师订单展示 30 分钟优先接单、候选工程师、24 小时退款、72 小时完成确认等流程 UI mock。

当前仍是 mock 的部分：

- 不真实创建支付平台订单。
- 不真实保存数据库。
- 不真实发送邮件。
- 不真实上传或下载附件。
- 不真实分账给工程师。
- 不真实处理退款、发票、合同或税务。

## 环境变量

Vercel 需要预留以下环境变量：

```text
NEXT_PUBLIC_SITE_URL
PAYMENT_PROVIDER

STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

WECHAT_PAY_APPID
WECHAT_PAY_MCH_ID
WECHAT_PAY_API_KEY
WECHAT_PAY_CERT_SERIAL_NO
WECHAT_PAY_PRIVATE_KEY

ALIPAY_APP_ID
ALIPAY_PRIVATE_KEY
ALIPAY_PUBLIC_KEY
ALIPAY_GATEWAY_URL
```

第一阶段建议：

```text
NEXT_PUBLIC_SITE_URL=https://vocs-presales-poc.vercel.app
PAYMENT_PROVIDER=mock
```

不要把真实密钥写入 Git。真实密钥只放到 Vercel Environment Variables 或本地 `.env.local`。

## 如何切换真实支付 Provider

代码预留位置：

- 支付配置：`src/lib/payment/config.ts`
- Provider 占位：`src/lib/payment/providers.ts`
- 订单模型：`src/lib/payment/types.ts`
- mock repository：`src/lib/payment/repository.ts`

后续切换步骤：

1. 选择真实 provider：`stripe`、`wechat_pay` 或 `alipay`。
2. 在 Vercel 配置对应环境变量。
3. 将 `PAYMENT_PROVIDER=mock` 改为真实 provider。
4. 实现 provider 的 `createCheckoutSession`。
5. 新增 webhook route，完成验签、订单状态更新、权益开通。
6. 将 mock repository 替换为 Supabase repository。

## Webhook 回调地址建议

后续真实支付建议预留：

```text
https://vocs-presales-poc.vercel.app/api/payment/webhook/stripe
https://vocs-presales-poc.vercel.app/api/payment/webhook/wechat
https://vocs-presales-poc.vercel.app/api/payment/webhook/alipay
```

当前版本还没有新增 webhook route，因为没有真实商户参数和验签逻辑。

## 微信支付需要准备

1. 收款主体和营业执照。
2. 微信支付商户号。
3. AppID 或小程序/公众号关联信息。
4. API v3 密钥。
5. 商户证书序列号。
6. 商户私钥。
7. 支付回调域名和备案/业务合规确认。

## 支付宝需要准备

1. 支付宝开放平台应用。
2. App ID。
3. 应用私钥。
4. 支付宝公钥。
5. 网关地址。
6. 回调地址配置。
7. 签名方式和应用上线审核。

## Stripe 需要准备

1. Stripe 账号和收款主体。
2. `STRIPE_SECRET_KEY`。
3. `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`。
4. `STRIPE_WEBHOOK_SECRET`。
5. 支持的币种、税务、退款和收据设置。

## 后续接数据库后才能真实生效的功能

- 真实订单创建、查询和状态流转。
- 客户邮箱、名称和购买记录保存。
- 支付成功后的权益绑定。
- 工具使用次数扣减。
- 模板和方案的下载权限控制。
- 工程师接单、替换、超时退款状态更新。
- 邮件发送记录。
- 退款、对账、发票和分账。

## 需要你配合的清单

1. 确定收款主体：个人、个体工商户、公司或其他主体。
2. 申请微信支付商户。
3. 申请支付宝商户。
4. 确认是否需要 Stripe。
5. 提供支付商户参数，并只配置到环境变量。
6. 配置 Vercel 环境变量。
7. 确认退款规则，尤其是工程师 24 小时无人接单场景。
8. 确认发票、合同、税务和收入归属处理方式。
9. 确认工程师分账是否先人工结算。

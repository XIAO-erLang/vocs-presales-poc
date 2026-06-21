import Link from "next/link";
import { Header } from "@/components/Header";
import { DeliveryPreview } from "@/components/payment/DeliveryPreview";
import { OrderSummary } from "@/components/payment/OrderSummary";
import { PlatformBoundaryStatement } from "@/components/PlatformBoundaryStatement";
import { getDeliveryPreview, getEntitlementForOrder, getOrderById } from "@/lib/payment/repository";

type PaymentResultSearchParams = Promise<{ orderId?: string }>;

export default async function PaymentSuccessPage({ searchParams }: { searchParams: PaymentResultSearchParams }) {
  const query = await searchParams;
  const order = getOrderById(query.orderId ?? "mock-order", "fulfilled");
  const entitlement = order ? getEntitlementForOrder(order) : null;
  const delivery = order ? getDeliveryPreview(order) : null;

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">支付成功</p>
        <h1 className="text-4xl font-black leading-tight">权益已 mock 开通</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          当前为源解模拟支付成功页。真实支付上线后，成功状态应由 webhook 验签后写入数据库，再触发权益和交付。
        </p>

        {order && entitlement && delivery ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
            <div className="grid gap-6">
              <OrderSummary order={order} />
              <DeliveryPreview title={delivery.title} rows={delivery.rows} />
              <PlatformBoundaryStatement compact />
            </div>
            <aside className="grid gap-4">
              <section className="panel p-5">
                <h2 className="text-lg font-black">权益记录</h2>
                <div className="mt-4 grid gap-2 text-sm leading-6 text-muted">
                  <p>ID：{entitlement.id}</p>
                  <p>使用次数：{entitlement.usageRemaining ?? "不限制 / 不适用"}</p>
                  <p>有效期：{entitlement.validUntil ?? "永久或按交付内容"}</p>
                </div>
              </section>
              <Link className="btn-primary" href={`/orders/${order.id}?status=fulfilled`}>
                查看订单详情
              </Link>
              {order.productType === "engineer" ? (
                <Link className="btn-secondary" href={`/engineers/orders/${order.id}`}>
                  查看工程师接单流程
                </Link>
              ) : null}
            </aside>
          </div>
        ) : (
          <section className="panel mt-8 p-5">
            <h2 className="text-xl font-black">未找到 mock 订单</h2>
            <Link className="btn-primary mt-5" href="/checkout?type=template&slug=vocs-condition-form">
              创建一个模板订单
            </Link>
          </section>
        )}
      </main>
    </>
  );
}

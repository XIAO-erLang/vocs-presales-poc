import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { DeliveryPreview } from "@/components/payment/DeliveryPreview";
import { OrderSummary } from "@/components/payment/OrderSummary";
import { PaymentBoundary } from "@/components/payment/PaymentBoundary";
import { getDeliveryPreview, getEntitlementForOrder, getOrderById } from "@/lib/payment/repository";
import type { OrderStatus } from "@/lib/payment/types";

type OrderPageSearchParams = Promise<{ status?: OrderStatus }>;

export default async function OrderDetailPage({
  params,
  searchParams
}: {
  params: Promise<{ orderId: string }>;
  searchParams: OrderPageSearchParams;
}) {
  const { orderId } = await params;
  const query = await searchParams;
  const order = getOrderById(orderId, query.status ?? (orderId === "mock-order" ? "fulfilled" : "pending"));

  if (!order) {
    notFound();
  }

  const entitlement = getEntitlementForOrder(order);
  const delivery = getDeliveryPreview(order);

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <Link className="text-sm font-bold text-leaf-dark hover:text-danger" href="/">
          返回首页
        </Link>
        <p className="eyebrow mt-6 mb-3">订单详情</p>
        <h1 className="text-4xl font-black leading-tight">订单状态与交付状态</h1>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="grid gap-6">
            <OrderSummary order={order} />
            <DeliveryPreview title={delivery.title} rows={delivery.rows} />
          </div>
          <aside className="grid gap-4">
            <section className="panel p-5">
              <h2 className="text-lg font-black">权益状态</h2>
              <div className="mt-4 grid gap-2 text-sm leading-6 text-muted">
                <p>权益 ID：{entitlement.id}</p>
                <p>产品类型：{entitlement.productType}</p>
                <p>剩余次数：{entitlement.usageRemaining ?? "不适用"}</p>
                <p>有效期：{entitlement.validUntil ?? "按交付内容"}</p>
              </div>
              {order.productType === "engineer" ? (
                <Link className="btn-primary mt-5 w-full" href={`/engineers/orders/${order.id}`}>
                  查看工程师接单流程
                </Link>
              ) : (
                <Link className="btn-primary mt-5 w-full" href="/intent">
                  邮件咨询交付问题
                </Link>
              )}
            </section>
            <PaymentBoundary productType={order.productType} />
          </aside>
        </div>
      </main>
    </>
  );
}

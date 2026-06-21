import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { OrderSummary } from "@/components/payment/OrderSummary";
import { PaymentBoundary } from "@/components/payment/PaymentBoundary";
import { getOrderById } from "@/lib/payment/repository";

export default async function MockPaymentPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  const order = getOrderById(orderId, "pending");

  if (!order) {
    notFound();
  }

  const encodedOrderId = encodeURIComponent(order.id);

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <Link className="text-sm font-bold text-leaf-dark hover:text-danger" href={`/checkout/${order.id}`}>
          返回订单确认
        </Link>
        <p className="eyebrow mt-6 mb-3">Mock Payment</p>
        <h1 className="text-4xl font-black leading-tight">模拟支付结果</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          这里用于验证支付后的状态流转、权益开通和交付页面。当前不会向任何真实支付平台发起扣款。
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <OrderSummary order={order} />
          <aside className="grid gap-4">
            <section className="panel p-5">
              <h2 className="text-lg font-black">选择模拟结果</h2>
              <div className="mt-5 grid gap-3">
                <Link className="btn-primary w-full" href={`/payment/success?orderId=${encodedOrderId}`}>
                  模拟支付成功
                </Link>
                <Link className="btn-secondary w-full" href={`/payment/failed?orderId=${encodedOrderId}`}>
                  模拟支付失败
                </Link>
                <Link className="btn-secondary w-full" href={`/payment/cancel?orderId=${encodedOrderId}`}>
                  取消支付
                </Link>
              </div>
            </section>
            <PaymentBoundary productType={order.productType} />
          </aside>
        </div>
      </main>
    </>
  );
}

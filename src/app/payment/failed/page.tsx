import Link from "next/link";
import { Header } from "@/components/Header";
import { OrderSummary } from "@/components/payment/OrderSummary";
import { getOrderById } from "@/lib/payment/repository";

type PaymentResultSearchParams = Promise<{ orderId?: string }>;

export default async function PaymentFailedPage({ searchParams }: { searchParams: PaymentResultSearchParams }) {
  const query = await searchParams;
  const order = getOrderById(query.orderId ?? "mock-order", "failed");

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">支付失败</p>
        <h1 className="text-4xl font-black leading-tight">支付未完成</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          当前为失败状态页占位。真实支付上线后，这里会展示支付平台返回原因和重新支付入口。
        </p>
        {order ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
            <OrderSummary order={order} />
            <aside className="panel p-5">
              <h2 className="text-lg font-black">下一步</h2>
              <Link className="btn-primary mt-5 w-full" href={`/payment/mock/${order.id}`}>
                再试一次 mock 支付
              </Link>
              <Link className="btn-secondary mt-3 w-full" href={`/orders/${order.id}?status=failed`}>
                查看订单状态
              </Link>
            </aside>
          </div>
        ) : null}
      </main>
    </>
  );
}

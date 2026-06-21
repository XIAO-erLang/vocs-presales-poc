import Link from "next/link";
import { Header } from "@/components/Header";
import { OrderSummary } from "@/components/payment/OrderSummary";
import { getOrderById } from "@/lib/payment/repository";

type PaymentResultSearchParams = Promise<{ orderId?: string }>;

export default async function PaymentCancelPage({ searchParams }: { searchParams: PaymentResultSearchParams }) {
  const query = await searchParams;
  const order = getOrderById(query.orderId ?? "mock-order", "cancelled");

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">支付取消</p>
        <h1 className="text-4xl font-black leading-tight">订单已取消支付</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">你可以返回订单确认页重新发起 mock 支付。</p>
        {order ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
            <OrderSummary order={order} />
            <aside className="panel p-5">
              <h2 className="text-lg font-black">下一步</h2>
              <Link className="btn-primary mt-5 w-full" href={`/checkout/${order.id}`}>
                重新支付
              </Link>
              <Link className="btn-secondary mt-3 w-full" href="/">
                返回首页
              </Link>
            </aside>
          </div>
        ) : null}
      </main>
    </>
  );
}

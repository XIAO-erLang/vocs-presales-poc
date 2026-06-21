import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { OrderSummary } from "@/components/payment/OrderSummary";
import { PaymentBoundary } from "@/components/payment/PaymentBoundary";
import { PlatformBoundaryStatement } from "@/components/PlatformBoundaryStatement";
import { getPaymentSessionForOrder, getOrderById } from "@/lib/payment/repository";

export default async function CheckoutOrderPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  const order = getOrderById(orderId, "pending");

  if (!order) {
    notFound();
  }

  const session = getPaymentSessionForOrder(order);

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <Link className="text-sm font-bold text-leaf-dark hover:text-danger" href="/checkout">
          返回 checkout
        </Link>
        <p className="eyebrow mt-6 mb-3">订单确认</p>
        <h1 className="text-4xl font-black leading-tight">确认购买内容</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          这里展示源解未来真实支付前的订单确认页。当前邮箱和称呼为 UI mock，后续接登录或 Supabase 后会真实保存。
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-6">
            <OrderSummary order={order} />
            <section className="panel p-5">
              <h2 className="text-xl font-black">客户信息</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">
                  姓名或称呼
                  <input className="rounded-md border border-line bg-paper px-3 py-2 font-normal" defaultValue={order.customerName} />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  接收邮箱
                  <input className="rounded-md border border-line bg-paper px-3 py-2 font-normal" defaultValue={order.customerEmail} />
                </label>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                第一版不会真实保存表单。真实上线时，这里会创建订单、绑定客户邮箱并进入真实 payment session。
              </p>
              <p className="mt-3 rounded-md border border-line bg-hint p-3 text-sm leading-6 text-ink">
                订单对应的是效率服务费或工程知识资产费。后续深度服务、正式图纸、现场服务、施工调试等由客户与服务方另行确认。
              </p>
            </section>
          </div>
          <aside className="grid gap-4">
            <section className="panel p-5">
              <h2 className="text-lg font-black">支付会话</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Provider：{session.provider}</p>
              <p className="text-sm leading-6 text-muted">Session：{session.id}</p>
              <Link className="btn-primary mt-5 w-full" href={session.checkoutUrl}>
                进入模拟支付
              </Link>
            </section>
            <PaymentBoundary productType={order.productType} />
            <PlatformBoundaryStatement compact />
          </aside>
        </div>
      </main>
    </>
  );
}

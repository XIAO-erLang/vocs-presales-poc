import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { DeliveryPreview } from "@/components/payment/DeliveryPreview";
import { OrderSummary } from "@/components/payment/OrderSummary";
import { engineerStatusLabels, getDeliveryPreview, getEngineerOrderForOrder, getOrderById } from "@/lib/payment/repository";

const flowSteps = [
  "客户选择某位工程师并支付 129 元。",
  "系统优先通知该工程师，该工程师拥有 30 分钟优先接单权。",
  "30 分钟未接单时，系统通知同领域候选工程师。",
  "如候选工程师愿意接单，客户确认是否改由其中一位接单。",
  "客户不愿替换时，可继续等待原工程师，最长等待 24 小时。",
  "24 小时内仍无人接单，进入退款处理状态。",
  "工程师接单后，系统通过邮件建立客户、工程师、平台三方对接。",
  "客户确认完成，或对接后 72 小时内无异议，订单完成。",
  "有效对接完成后，工程师获得 29 元，平台保留 100 元。"
];

export default async function EngineerOrderPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  const order = getOrderById(orderId, "fulfilled");
  const engineerOrder = order ? getEngineerOrderForOrder(order) : null;
  const delivery = order ? getDeliveryPreview(order) : null;

  if (!order || !engineerOrder || !delivery) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <Link className="text-sm font-bold text-leaf-dark hover:text-danger" href={`/orders/${order.id}?status=fulfilled`}>
          返回订单详情
        </Link>
        <p className="eyebrow mt-6 mb-3">工程师对接订单</p>
        <h1 className="text-4xl font-black leading-tight">工程师接单流程 mock</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          当前页面用于验证工程师对接订单状态、候选工程师替换确认和三方邮件对接预览，不做真实邮件或分账。
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="grid gap-6">
            <OrderSummary order={order} />
            <section className="panel p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-black">当前接单状态</h2>
                  <p className="mt-2 text-sm text-muted">{engineerStatusLabels[engineerOrder.status]}</p>
                </div>
                <span className="rounded-md border border-line bg-hint px-3 py-2 text-sm font-black text-danger">
                  30 分钟优先期
                </span>
              </div>
              <div className="mt-5 grid gap-3 text-sm leading-6 sm:grid-cols-2">
                <p className="rounded-md border border-line bg-field p-3">优先截止：{engineerOrder.priorityExpiresAt}</p>
                <p className="rounded-md border border-line bg-field p-3">接单截止：{engineerOrder.acceptDeadlineAt}</p>
              </div>
              <div className="mt-5 rounded-md border border-line bg-hint p-4 text-sm leading-6 text-ink">
                你选择的工程师暂未响应时，以下同领域工程师愿意对接，是否改由其中一位接单？当前为确认替换 UI mock。
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <button className="btn-primary" type="button">确认替换为候选工程师</button>
                <button className="btn-secondary" type="button">继续等待原工程师</button>
              </div>
            </section>
            <DeliveryPreview title={delivery.title} rows={delivery.rows} />
          </div>
          <aside className="panel p-5">
            <h2 className="text-xl font-black">流程节点</h2>
            <ol className="mt-4 grid gap-3 text-sm leading-6 text-muted">
              {flowSteps.map((step, index) => (
                <li className="rounded-md border border-line bg-field p-3" key={step}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </main>
    </>
  );
}

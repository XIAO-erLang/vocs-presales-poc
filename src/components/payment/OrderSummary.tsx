import { formatMoney, orderStatusLabels } from "@/lib/payment/repository";
import type { Order } from "@/lib/payment/types";

export function OrderSummary({ order }: { order: Order }) {
  return (
    <section className="panel p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="eyebrow mb-2">订单摘要</p>
          <h2 className="text-2xl font-black">{order.productName}</h2>
          <p className="mt-2 text-sm text-muted">订单号：{order.orderNo}</p>
        </div>
        <span className="rounded-md border border-line bg-hint px-3 py-2 text-sm font-black text-danger">
          {orderStatusLabels[order.status]}
        </span>
      </div>
      <div className="mt-5 grid gap-3 text-sm leading-6 sm:grid-cols-2">
        <Info label="金额" value={formatMoney(order.amount, order.currency)} />
        <Info label="支付方式" value={order.paymentProvider === "mock" ? "Mock Payment" : order.paymentProvider} />
        <Info label="客户邮箱" value={order.customerEmail} />
        <Info label="订单状态" value={orderStatusLabels[order.status]} />
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-line bg-field p-3">
      <p className="text-xs font-black text-muted">{label}</p>
      <p className="mt-1 font-bold text-ink">{value}</p>
    </div>
  );
}

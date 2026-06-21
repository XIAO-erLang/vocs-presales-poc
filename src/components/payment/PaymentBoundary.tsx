import { getBoundaryCopy } from "@/lib/payment/repository";
import type { ProductType } from "@/lib/payment/types";

export function PaymentBoundary({ productType }: { productType: ProductType }) {
  return (
    <section className="rounded-panel border border-line bg-hint p-4 text-sm leading-6 text-ink">
      <p className="mb-1 font-black text-danger">支付与服务边界</p>
      <p>{getBoundaryCopy(productType)}</p>
    </section>
  );
}

import Link from "next/link";
import { Header } from "@/components/Header";
import { PaymentBoundary } from "@/components/payment/PaymentBoundary";
import { createMockOrderId, getProductForCheckout, normalizeCheckoutType } from "@/lib/payment/catalog";
import { formatMoney } from "@/lib/payment/repository";

type CheckoutSearchParams = Promise<{ type?: string; slug?: string }>;

export default async function CheckoutCreatePage({ searchParams }: { searchParams: CheckoutSearchParams }) {
  const query = await searchParams;
  const productType = normalizeCheckoutType(query.type);
  const slug = query.slug ?? "";
  const product = productType ? getProductForCheckout(productType, slug) : null;

  return (
    <>
      <Header />
      <main className="container-page py-10">
        <Link className="text-sm font-bold text-leaf-dark hover:text-danger" href="/">
          返回平台首页
        </Link>
        <p className="eyebrow mt-6 mb-3">统一 checkout</p>
        <h1 className="text-4xl font-black leading-tight">创建 mock 订单</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          当前使用统一订单入口，根据 query 参数识别购买对象。第一阶段只创建 mock 订单，不接真实支付商户。
        </p>

        {product ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
            <section className="panel p-5">
              <h2 className="text-2xl font-black">{product.productName}</h2>
              <p className="mt-3 text-muted">{product.summary}</p>
              <p className="mt-5 text-3xl font-black text-danger">{formatMoney(product.amount, product.currency)}</p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted">
                {product.includes.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link className="btn-primary mt-6" href={`/checkout/${createMockOrderId(product.productType, product.productSlug)}`}>
                创建并确认订单
              </Link>
            </section>
            <div className="grid gap-4">
              <section className="panel p-5">
                <h2 className="text-lg font-black">当前识别结果</h2>
                <div className="mt-4 grid gap-2 text-sm leading-6 text-muted">
                  <p>type：{query.type}</p>
                  <p>slug：{slug}</p>
                  <p>统一产品类型：{product.productType}</p>
                </div>
              </section>
              <PaymentBoundary productType={product.productType} />
            </div>
          </div>
        ) : (
          <section className="panel mt-8 p-5">
            <h2 className="text-xl font-black">缺少或无法识别购买对象</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              请从工具、模板、方案或工程师页面进入，或使用类似
              <span className="font-bold text-ink"> /checkout?type=template&amp;slug=vocs-condition-form </span>
              的链接。
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/tools/activated-carbon">
                去工具详情
              </Link>
              <Link className="btn-secondary" href="/templates/vocs-condition-form">
                去模板详情
              </Link>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

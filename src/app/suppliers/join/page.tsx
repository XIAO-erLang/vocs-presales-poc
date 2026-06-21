import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { PlatformBoundaryStatement } from "@/components/PlatformBoundaryStatement";
import { buildMailto, contactEmail } from "@/lib/pricing";

const mailBody = `你好，我想申请进入源解优质供应商资料库。

公司名称：
主营产品 / 服务：
适用行业：
适用工况：
服务区域：
是否有产品样本 / 参数表：
是否有案例资料：
联系人：
联系方式：
补充说明：`;

export default function SupplierJoinPage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <p className="eyebrow mb-3">供应商资料库入驻申请</p>
        <h1 className="text-4xl font-black leading-tight">申请进入源解优质供应商资料库</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          源解供应商资料库不是广告位，不是谁付费谁展示。平台仅展示通过初步审核的供应商资料，重点检查资料完整性、产品能力、案例信息和服务边界。
        </p>
        <section className="panel mt-8 p-5">
          <h2 className="text-xl font-black">年费入驻说明</h2>
          <div className="mt-4 rounded-md border border-line bg-hint p-4 text-sm leading-6 text-ink">
            供应商年费入驻必须先通过人工审核，审核通过后另行确认展示范围、费用、周期和责任边界。当前不显示固定年费，也不接自动支付。
          </div>
          <div className="mt-4 grid gap-2 text-sm leading-6 text-muted">
            {["主营产品/服务是否清晰", "适用行业和适用工况是否清晰", "不适用/需谨慎场景是否说明", "是否有代表案例类型", "服务区域是否明确", "资料是否完整", "是否存在夸大宣传或不当承诺"].map((item) => (
              <p key={item}>- {item}</p>
            ))}
          </div>
        </section>
        <section className="panel mt-6 p-5">
          <h2 className="text-xl font-black">需要提交的资料</h2>
          <pre className="mt-4 whitespace-pre-wrap rounded-md border border-line bg-field p-4 text-sm leading-7 text-muted">{mailBody}</pre>
          <a className="btn-primary mt-5" href={buildMailto("源解供应商资料库入驻申请", mailBody)}>
            发送入驻申请邮件
          </a>
          <p className="mt-3 text-sm text-muted">收件邮箱：{contactEmail}</p>
        </section>
        <div className="mt-8">
          <PlatformBoundaryStatement compact />
        </div>
        <div className="mt-8">
          <BoundaryNote />
        </div>
      </main>
    </>
  );
}

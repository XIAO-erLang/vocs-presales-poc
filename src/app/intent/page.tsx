import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { buildMailto, contactEmail } from "@/lib/pricing";

const consultTemplate = `你好，我想了解源解的环境工程资料、工具、方案框架或项目对接服务。

我的身份：
当前需求：
是否有真实项目：
项目简述：
希望获取：
联系方式：`;

export default function IntentPage() {
  return (
    <>
      <Header />
      <main className="container-page py-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section>
            <p className="eyebrow mb-3">邮件咨询</p>
            <h1 className="text-4xl font-black leading-tight">免费邮件初筛</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              你可以先通过邮件说明项目情况。我会根据你提供的信息，判断是否适合发送样张、资料包，或是否需要进入真实项目初步判断、工程师对接、供应商对接等服务。
            </p>
            <div className="mt-6">
              <BoundaryNote />
            </div>
          </section>

          <section className="panel p-5">
            <h2 className="text-xl font-black">邮件正文模板</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              免费邮件初筛不包含完整技术方案、详细工艺路线判断、报价复核、工程设计、施工图、验收检测或达标承诺。
            </p>
            <pre className="mt-4 whitespace-pre-wrap rounded-md border border-line bg-field p-4 text-sm leading-7 text-muted">{consultTemplate}</pre>
            <a className="btn-primary mt-5 w-full" href={buildMailto("源解服务免费初筛", consultTemplate)}>
              发邮件进行免费初筛
            </a>
            <p className="mt-3 text-center text-sm text-muted">收件邮箱：{contactEmail}</p>
          </section>
        </div>
      </main>
    </>
  );
}

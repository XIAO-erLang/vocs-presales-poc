import { BoundaryNote } from "@/components/BoundaryNote";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { SectionTitle } from "@/components/SectionTitle";

export default function IntentPage() {
  return (
    <>
      <Header />
      <main className="container-page grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            eyebrow="留资/付费意向"
            title="先确认需求，再决定是否交付"
            description="第一版不接支付，只验证用户是否愿意留下联系方式、获取资料包、提交真实项目或表达人工复核意向。"
          />
          <BoundaryNote />
        </div>
        <LeadForm />
      </main>
    </>
  );
}

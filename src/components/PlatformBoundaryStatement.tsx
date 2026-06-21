export function PlatformBoundaryStatement({ compact = false }: { compact?: boolean }) {
  return (
    <section className="rounded-panel border border-line bg-hint p-5 text-sm leading-7 text-ink">
      <p className="mb-2 font-black text-danger">平台边界说明</p>
      <div className={compact ? "grid gap-2" : "grid gap-3"}>
        <p>
          源解赚的是“效率服务费”和“工程知识资产费”，不抽客户与工程师、机械设计师或供应商之间后续深度服务的大单金额。
        </p>
        {!compact ? (
          <>
            <p>
              平台提供项目信息整理、前期判断辅助、工具模板、方案框架、工程师匹配、机械设计协作入口、供应商资料整理和首次对接协助。
            </p>
            <p>
              平台不参与客户与工程师、机械设计师或供应商之间后续深度服务的具体报价、合同履行、项目实施和工程责任。
            </p>
            <p>
              后续如需正式方案、图纸、计算书、现场服务、施工、调试、检测或长期顾问服务，由客户与对应服务方另行确认服务范围、费用、周期、交付物和责任边界。
            </p>
            <p>
              正式经营主体上线后，平台可按规则提供订单记录和相应服务发票，便于企业客户内部报销和资料留档。
            </p>
          </>
        ) : null}
      </div>
    </section>
  );
}

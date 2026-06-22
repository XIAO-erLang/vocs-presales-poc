export function BoundaryNote({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-field p-4 text-sm leading-6 text-muted ring-1 ring-black/[0.04]">
      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-xs font-black text-leaf shadow-[0_8px_20px_rgba(46,46,46,0.06)]">
        i
      </span>
      <div>
        <strong className="mb-1 block text-leaf-dark">边界提示</strong>
        <p className={compact ? "mb-0" : ""}>
          本平台内容仅用于售前初步判断、学习参考和内部沟通，不替代正式工程设计、施工图、检测验收或达标承诺。具体项目需结合现场工况、检测数据、法规标准和专业人员复核。
        </p>
      </div>
    </div>
  );
}

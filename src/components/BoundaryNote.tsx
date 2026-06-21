export function BoundaryNote({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-panel border border-line bg-hint p-4 text-sm leading-6 text-ink">
      <strong className="mb-1 block text-danger">边界提示</strong>
      <p className={compact ? "mb-0" : ""}>
        本平台内容仅用于售前初步判断、学习参考和内部沟通，不替代正式工程设计、施工图、检测验收或达标承诺。具体项目需结合现场工况、检测数据、法规标准和专业人员复核。
      </p>
    </div>
  );
}

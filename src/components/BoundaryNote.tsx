export function BoundaryNote({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-panel border border-amber/30 bg-amber/10 p-4 text-sm leading-6 text-ink">
      <strong className="mb-1 block text-amber">边界提示</strong>
      <p className={compact ? "mb-0" : ""}>
        本工具仅用于售前初步判断、学习参考和内部沟通，不替代正式工程设计、施工图、验收检测或达标承诺。
      </p>
    </div>
  );
}

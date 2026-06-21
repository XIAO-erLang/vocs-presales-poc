export function DeliveryPreview({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <section className="panel p-5">
      <h2 className="text-xl font-black">{title}</h2>
      <div className="mt-4 grid gap-3">
        {rows.map(([label, value]) => (
          <div className="rounded-md border border-line bg-field p-3 text-sm leading-6" key={label}>
            <p className="font-black text-muted">{label}</p>
            <p className="mt-1 text-ink">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

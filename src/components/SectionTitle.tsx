export function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6 max-w-3xl">
      <p className="eyebrow mb-2">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight tracking-normal sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-muted">{description}</p> : null}
    </div>
  );
}

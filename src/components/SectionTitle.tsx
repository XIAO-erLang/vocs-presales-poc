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
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight tracking-normal text-ink sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}

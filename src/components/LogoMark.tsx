export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1000 1000" aria-hidden="true">
      <circle cx="500" cy="500" r="303" fill="none" stroke="currentColor" strokeWidth="44" />
      <path d="M350 458 L350 350 L458 350" fill="none" stroke="currentColor" strokeWidth="44" strokeLinecap="butt" strokeLinejoin="miter" />
      <path d="M542 350 L650 350 L650 458" fill="none" stroke="currentColor" strokeWidth="44" strokeLinecap="butt" strokeLinejoin="miter" />
      <path d="M650 542 L650 650 L542 650" fill="none" stroke="currentColor" strokeWidth="44" strokeLinecap="butt" strokeLinejoin="miter" />
      <path d="M458 650 L350 650 L350 542" fill="none" stroke="currentColor" strokeWidth="44" strokeLinecap="butt" strokeLinejoin="miter" />
    </svg>
  );
}

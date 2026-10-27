export function StarLogo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 8l3.5 10.5H38l-8.5 6.5 3.5 10.5L24 29l-9 6.5 3.5-10.5L10 18.5h10.5L24 8z"
        fill="currentColor"
      />
    </svg>
  );
}

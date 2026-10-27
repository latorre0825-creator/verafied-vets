const APP_STORE = process.env.NEXT_PUBLIC_APP_STORE_URL;
const PLAY_STORE = process.env.NEXT_PUBLIC_PLAY_STORE_URL;

const base =
  "inline-flex flex-col rounded-xl px-6 py-3.5 text-left leading-tight shadow-lg shadow-black/20";

function StoreButton({ href, small, name }: { href?: string; small: string; name: string }) {
  const inner = (
    <>
      <span className="text-[10px] font-normal uppercase tracking-wider text-navy-500">
        {href ? small : "Coming soon"}
      </span>
      <span className="text-base font-bold">{name}</span>
    </>
  );
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-not-allowed bg-white/80 text-navy-900`}
      >
        {inner}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-white text-navy-900 transition hover:bg-navy-50`}
    >
      {inner}
    </a>
  );
}

export function DownloadButtons() {
  return (
    <>
      <StoreButton href={APP_STORE} small="Download on the" name="App Store" />
      <StoreButton href={PLAY_STORE} small="Get it on" name="Google Play" />
    </>
  );
}

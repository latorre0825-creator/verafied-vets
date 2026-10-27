import { StarLogo } from "./components/StarLogo";
import { VeraChat } from "./components/VeraChat";
import { AskVeraButton } from "./components/AskVeraButton";
import { DownloadButtons } from "./components/DownloadButtons";
import { BenefitsScreener } from "./components/BenefitsScreener";
import { DD214Help } from "./components/DD214Help";
import { ConditionTracker } from "./components/ConditionTracker";
import { ScamShield } from "./components/ScamShield";
import { GetHelpNow } from "./components/GetHelpNow";
import { RatingsBenefitsTracker } from "./components/RatingsBenefitsTracker";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-navy-900">
      <header className="border-b border-navy-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-brass-400">
              <StarLogo className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold">VeRaFIED Vets</p>
              <p className="text-[11px] uppercase tracking-widest text-navy-500">By VeRaFIED Studio</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#tools" className="hover:text-navy-950">Tools</a>
            <a href="#story" className="hover:text-navy-950">Our Story</a>
            <a href="#merch" className="hover:text-navy-950">Merch</a>
            <a href="#download" className="rounded-full bg-navy-800 px-4 py-2 text-white">Download</a>
          </nav>
        </div>
      </header>

      <section id="top" className="bg-navy-900 text-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brass-400/30 bg-brass-400/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brass-200">
            A VeRaFIED Studio app · Veterans helping veterans
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            You earned it.<br />
            <span className="text-brass-300">Getting it should be free.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-100">
            VeRaFIED Vets helps you find your VA benefits, organize your evidence, and connect with free accredited help. No fees. No ads. No selling your data.
          </p>
          <p className="mt-4 text-sm italic text-navy-200">“You served. We have got your back.”</p>
          <div id="download" className="mt-9 flex flex-wrap gap-3">
            <DownloadButtons />
            <AskVeraButton />
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-navy-200">
            <span>Free forever</span>
            <span>No ads</span>
            <span>Notes stay on your device</span>
            <span>Not affiliated with the VA</span>
          </div>
        </div>
      </section>

      <section id="story" className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brass-600">Our Story</p>
          <h2 className="mt-3 text-2xl font-bold text-navy-950">Luis and Tiffaney · VeRaFIED Studio</h2>
          <p className="mt-5 text-navy-700">
            We are a veteran couple in Lehigh Acres, Florida. We have been homeless, evicted, and for the last three weeks we have had no money and no food. Sergio, our chameleon, is in intensive care. We still have nothing.
          </p>
          <p className="mt-4 text-navy-700">
            We built these free tools anyway. Paid companies promise ratings and take money. We will not do that. Only the VA decides. The tools stay free and private. If they help one veteran, it is enough.
          </p>
        </div>
      </section>

      <section id="tools" className="bg-navy-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brass-600">Try it now</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">Use the tools right here</h2>
            <p className="mt-4 text-navy-600">Free, private, and ready. Everything stays on your device.</p>
          </div>
          <div className="mt-12 space-y-6">
            <RatingsBenefitsTracker />
            <div className="grid gap-6 md:grid-cols-2">
              <BenefitsScreener />
              <DD214Help />
              <ConditionTracker />
              <ScamShield />
            </div>
          </div>
          <div className="mt-8">
            <GetHelpNow />
          </div>
        </div>
      </section>

      <section id="support" className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brass-600">Optional</p>
          <h2 className="mt-3 text-2xl font-bold text-navy-950">Support the free work</h2>
          <p className="mt-4 text-navy-600">
            Most veterans using this have no extra money. That is fine. If you have a few dollars and want to help Luis and Tiffaney keep building free tools for other veterans, you can. No pressure. The tools stay free either way.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="mailto:tiffaneylatorre@gmail.com?subject=VeRaFIED%20Vets%20support" className="rounded-lg border border-navy-300 px-5 py-2.5 text-sm font-medium text-navy-800 hover:bg-navy-50">
              Email us
            </a>
            <span className="rounded-lg bg-navy-100 px-5 py-2.5 text-sm text-navy-600">
              Cash App / PayPal / Venmo links coming soon
            </span>
          </div>
          <p className="mt-4 text-xs text-navy-500">
            VeRaFIED Studio · Luis & Tiffaney · Not affiliated with the VA
          </p>
        </div>
      </section>

      <section id="merch" className="bg-navy-50 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brass-600">Optional</p>
          <h2 className="mt-3 text-2xl font-bold text-navy-950">VeRaFIED Merch</h2>
          <p className="mt-4 text-navy-600">
            Simple chameleon stickers and shirts. A few dollars if you want them. The free tools stay free either way.
          </p>
          <div className="mt-6 space-y-3 text-left text-sm text-navy-700">
            <p><strong>Chameleon Sticker Pack</strong> — Three designs: chameleon, “Love is the only key,” and “You earned it.”</p>
            <p><strong>“You earned it” Tee</strong> — Chameleon + the line. Printed when you order.</p>
          </div>
          <div className="mt-6">
            <span className="rounded-lg bg-navy-100 px-5 py-2.5 text-sm text-navy-600">
              Links coming soon (Printful / Printify)
            </span>
          </div>
          <p className="mt-4 text-xs text-navy-500">
            VeRaFIED Studio · Luis & Tiffaney
          </p>
        </div>
      </section>

      <footer className="bg-navy-950 text-navy-200 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm">
          <p>Contact: {CONTACT_EMAIL || "tiffaneylatorre@gmail.com"}</p>
          <p className="mt-4 text-xs">© {new Date().getFullYear()} VeRaFIED Studio. Free forever · No ads · Not affiliated with the VA</p>
          <p className="mt-2"><a href="/privacy" className="hover:underline">Privacy</a> · <a href="/support" className="hover:underline">Support</a></p>
        </div>
      </footer>
      <VeraChat />
    </main>
  );
}

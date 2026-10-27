import { StarLogo } from "./components/StarLogo";
import { VeraChat } from "./components/VeraChat";
import { AskVeraButton } from "./components/AskVeraButton";
import { DownloadButtons } from "./components/DownloadButtons";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
import type { ReactNode } from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-navy-900">
      <header className="border-b border-navy-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-brass-400">
              <StarLogo className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold">VeRaFIED Vets</p>
              <p className="text-[11px] uppercase tracking-widest text-navy-500">By VeRaFIED Studio</p>
            </div>
          </div>
          <a href="#download" className="rounded-full bg-navy-800 px-4 py-2 text-sm font-medium text-white">Download</a>
        </div>
      </header>

      <section className="bg-navy-900 text-white py-20">
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
            <span>Works offline</span>
            <span>Not affiliated with the VA</span>
          </div>
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

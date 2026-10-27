import { StarLogo } from "./components/StarLogo";
import { VeraChat } from "./components/VeraChat";
import { AskVeraButton } from "./components/AskVeraButton";
import { DownloadButtons } from "./components/DownloadButtons";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
import type { ReactNode } from "react";

const features = [
  {
    num: "01",
    title: "See what you may qualify for",
    body: "Answer five questions and get a plain-language list.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 14v10l7 4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Fix the paperwork",
    body: "Store your DD214 or learn how to get a free copy.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8h16l8 8v24H12z" />
        <path d="M28 8v8h8" />
        <path d="M18 26h12M18 32h12" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-navy-900">
      <h1 className="text-4xl font-bold p-10">VeRaFIED Vets — Landing page loading. Full content coming.</h1>
      <p className="px-10">Contact: {CONTACT_EMAIL || "tiffaneylatorre@gmail.com"}</p>
      <DownloadButtons />
      <VeraChat />
    </main>
  );
}

import type { Metadata } from "next";
import { StarLogo } from "../components/StarLogo";

const CONTACT = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com";

export const metadata: Metadata = {
  title: "Support — VeRaFIED Vets",
  description: "Get help with VeRaFIED Vets. We are veterans helping veterans.",
};

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-8 flex items-center gap-3">
        <StarLogo className="h-8 w-8 text-gold-500" />
        <span className="text-lg font-bold">VeRaFIED Vets</span>
      </div>
      <h1 className="mb-4 text-3xl font-bold">Support</h1>
      <p className="mb-6 text-navy-500">
        We are veterans helping veterans. If something is not working, or you need help understanding the app, email us.
      </p>
      <p className="mb-8">
        <a href={`mailto:${CONTACT}`} className="text-gold-500 underline">
          {CONTACT}
        </a>
      </p>
      <h2 className="mb-2 text-xl font-semibold">Crisis resources</h2>
      <ul className="space-y-2 text-sm">
        <li>Veterans Crisis Line: call 988 then press 1, or text 838255</li>
        <li>Homeless veterans: 1-877-424-3838</li>
        <li>VA benefits: 1-800-827-1000</li>
      </ul>
      <p className="mt-8 text-xs text-navy-500">
        VeRaFIED Vets is not affiliated with the Department of Veterans Affairs.
      </p>
    </main>
  );
}

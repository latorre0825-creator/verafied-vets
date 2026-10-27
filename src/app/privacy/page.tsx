import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy | VeRaFIED Vets",
  description:
    "VeRaFIED Vets is free, has no ads, and never sells your data. Not affiliated with the VA.",
};

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 text-navy-800">
        <Link href="/" className="text-sm font-medium text-navy-500 hover:text-navy-900">
          ← VeRaFIED Vets
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-navy-950">Privacy</h1>
        <p className="mt-2 text-sm text-navy-500">A VeRaFIED Studio app: veterans helping veterans. Last updated: May 2026.</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy-950">The short version</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>VeRaFIED Vets is free. There are no ads and no fees.</li>
              <li>We never sell your data.</li>
              <li>Your notes stay on your device.</li>
              <li>We are not affiliated with the Department of Veterans Affairs. The VA makes all final decisions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-950">This website</h2>
            <p className="mt-3">
              This website does not use advertising trackers. The Vera preview on the home page
              runs in your browser and shows sample answers. What you type into it is not sent to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-950">The app</h2>
            <p className="mt-3">
              Your notes, your condition list, and anything you store in the app, including your
              DD214, stay on your device. We do not sell your information to anyone, and we do not
              show ads.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-950">Vera, our AI helper</h2>
            <p className="mt-3">
              Vera is an AI helper. She is not a lawyer, a doctor, or the VA. Please do not share
              more personal information with Vera than you need to.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-950">Questions</h2>
            <p className="mt-3">
              {CONTACT_EMAIL ? (
                <>
                  Write to us at{" "}
                  <a className="font-medium text-navy-900 underline" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                  .
                </>
              ) : (
                "Contact VeRaFIED Studio through the details on our home page."
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-950">If you need help right now</h2>
            <p className="mt-3">
              Veterans Crisis Line: dial 988, then press 1. Homeless Veterans Hotline:
              1-877-424-3838.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

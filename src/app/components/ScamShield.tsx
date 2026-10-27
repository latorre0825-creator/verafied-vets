"use client";

const redFlags = [
  "Anyone who charges you to file your first VA claim.",
  "Anyone who promises you a specific rating or percentage.",
  "Anyone who asks you to exaggerate symptoms or lie.",
  "Anyone who says they are \u201cthe only one\u201d who can help you.",
  "Unsolicited calls or texts offering to \u201cspeed up\u201d your claim for a fee.",
];

export function ScamShield() {
  return (
    <div className="rounded-2xl border border-navy-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-navy-950">Scam Shield</h3>
      <p className="mt-1 text-sm text-navy-600">Walk away if you see any of these:</p>
      <ul className="mt-4 space-y-2">
        {redFlags.map((flag) => (
          <li key={flag} className="flex gap-2 text-sm text-navy-700">
            <span className="text-red-600">⚠</span>
            {flag}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-navy-500">
        Free, accredited help is available through VSOs. You never have to pay to file a claim.
      </p>
    </div>
  );
}

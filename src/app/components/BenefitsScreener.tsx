"use client";

import { useState } from "react";

const questions = [
  {
    id: "discharge",
    q: "What was your discharge status?",
    options: ["Honorable", "General under honorable", "Other than honorable", "Not sure"],
  },
  {
    id: "service",
    q: "Did you serve on active duty?",
    options: ["Yes, active duty", "Reserves or National Guard", "Not sure"],
  },
  {
    id: "health",
    q: "Do you have any health problems that started or got worse during or after service?",
    options: ["Yes", "Maybe / not sure", "No"],
  },
  {
    id: "homeless",
    q: "Are you currently homeless or at risk of losing housing?",
    options: ["Yes", "At risk", "No"],
  },
  {
    id: "help",
    q: "Have you ever filed a VA claim before?",
    options: ["Yes", "No", "Not sure"],
  },
];

export function BenefitsScreener() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function answer(option: string) {
    const q = questions[step];
    const next = { ...answers, [q.id]: option };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  if (done) {
    const mayQualify = [
      "Disability compensation (if you have service-connected conditions)",
      "Health care through the VA",
      "Education benefits (GI Bill or similar, depending on service)",
      "Pension or other income support (if eligible)",
    ];
    if (answers.homeless === "Yes" || answers.homeless === "At risk") {
      mayQualify.push("Homeless veterans programs and emergency housing help");
    }
    return (
      <div className="rounded-2xl border border-navy-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold text-navy-950">You may want to look into:</h3>
        <ul className="mt-4 space-y-2 text-sm text-navy-700">
          {mayQualify.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-brass-500">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-navy-500">
          This is not a decision. Only the VA can decide what you qualify for. An accredited VSO can help you for free.
        </p>
        <button
          onClick={reset}
          className="mt-4 rounded-lg bg-navy-800 px-4 py-2 text-sm font-medium text-white hover:bg-navy-700"
        >
          Start over
        </button>
      </div>
    );
  }

  const q = questions[step];
  return (
    <div className="rounded-2xl border border-navy-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-widest text-brass-600">
        Question {step + 1} of {questions.length}
      </p>
      <h3 className="mt-2 text-lg font-bold text-navy-950">{q.q}</h3>
      <div className="mt-4 space-y-2">
        {q.options.map((opt) => (
          <button
            key={opt}
            onClick={() => answer(opt)}
            className="block w-full rounded-lg border border-navy-200 px-4 py-3 text-left text-sm font-medium text-navy-900 transition hover:border-brass-400 hover:bg-brass-50"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

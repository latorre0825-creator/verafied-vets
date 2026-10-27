"use client";

import { useEffect, useState } from "react";

type Condition = { name: string; evidence: string };

export function ConditionTracker() {
  const [conditions, setConditions] = useState<Condition[]>([]);
  const [name, setName] = useState("");
  const [evidence, setEvidence] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("verafied-conditions");
    if (saved) setConditions(JSON.parse(saved));
  }, []);

  function save(next: Condition[]) {
    setConditions(next);
    localStorage.setItem("verafied-conditions", JSON.stringify(next));
  }

  function add() {
    if (!name.trim()) return;
    save([...conditions, { name: name.trim(), evidence: evidence.trim() || "None yet" }]);
    setName("");
    setEvidence("");
  }

  function remove(i: number) {
    save(conditions.filter((_, idx) => idx !== i));
  }

  return (
    <div className="rounded-2xl border border-navy-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-navy-950">Condition Tracker</h3>
      <p className="mt-1 text-xs text-navy-500">Saved only on this device. Never sent to us.</p>

      <div className="mt-4 space-y-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Condition (e.g. knee pain, PTSD, hearing loss)"
          className="w-full rounded-lg border border-navy-200 px-3 py-2 text-sm"
        />
        <input
          value={evidence}
          onChange={(e) => setEvidence(e.target.value)}
          placeholder="Evidence you have (optional)"
          className="w-full rounded-lg border border-navy-200 px-3 py-2 text-sm"
        />
        <button
          onClick={add}
          className="rounded-lg bg-navy-800 px-4 py-2 text-sm font-medium text-white hover:bg-navy-700"
        >
          Add condition
        </button>
      </div>

      {conditions.length > 0 && (
        <ul className="mt-4 space-y-2">
          {conditions.map((c, i) => (
            <li key={i} className="flex items-start justify-between rounded-lg bg-navy-50 p-3 text-sm">
              <div>
                <p className="font-medium text-navy-900">{c.name}</p>
                <p className="text-navy-600">Evidence: {c.evidence}</p>
              </div>
              <button onClick={() => remove(i)} className="text-xs text-red-600 hover:underline">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

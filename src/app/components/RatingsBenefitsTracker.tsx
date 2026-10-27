"use client";

import { useEffect, useState } from "react";

type Item = {
  id: string;
  condition: string;
  claimed: string;
  awarded: string;
  status: "Preparing" | "Filed" | "Decided" | "Appealing" | "Other";
  evidence: string;
  notes: string;
};

const statuses: Item["status"][] = ["Preparing", "Filed", "Decided", "Appealing", "Other"];

export function RatingsBenefitsTracker() {
  const [items, setItems] = useState<Item[]>([]);
  const [condition, setCondition] = useState("");
  const [claimed, setClaimed] = useState("");
  const [awarded, setAwarded] = useState("");
  const [status, setStatus] = useState<Item["status"]>("Preparing");
  const [evidence, setEvidence] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("verafied-ratings-tracker");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        // ignore bad data
      }
    }
  }, []);

  function save(next: Item[]) {
    setItems(next);
    localStorage.setItem("verafied-ratings-tracker", JSON.stringify(next));
  }

  function add() {
    if (!condition.trim()) return;
    const item: Item = {
      id: Date.now().toString(),
      condition: condition.trim(),
      claimed: claimed.trim(),
      awarded: awarded.trim(),
      status,
      evidence: evidence.trim(),
      notes: notes.trim(),
    };
    save([item, ...items]);
    setCondition("");
    setClaimed("");
    setAwarded("");
    setStatus("Preparing");
    setEvidence("");
    setNotes("");
  }

  function remove(id: string) {
    save(items.filter((i) => i.id !== id));
  }

  return (
    <div className="rounded-2xl border border-navy-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-navy-950">Ratings & Benefits Tracker</h3>
      <p className="mt-1 text-xs text-navy-500">
        Track your own conditions and what the VA has decided. Saved only on this device. This does not get you a rating. Only the VA decides ratings and benefits.
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <input
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="Condition (e.g. knee pain, PTSD)"
          className="rounded-lg border border-navy-200 px-3 py-2 text-sm sm:col-span-2"
        />
        <input
          value={claimed}
          onChange={(e) => setClaimed(e.target.value)}
          placeholder="What you claimed (optional, e.g. 30%)"
          className="rounded-lg border border-navy-200 px-3 py-2 text-sm"
        />
        <input
          value={awarded}
          onChange={(e) => setAwarded(e.target.value)}
          placeholder="What the VA awarded (optional)"
          className="rounded-lg border border-navy-200 px-3 py-2 text-sm"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Item["status"])}
          className="rounded-lg border border-navy-200 px-3 py-2 text-sm"
        >
          {statuses.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <input
          value={evidence}
          onChange={(e) => setEvidence(e.target.value)}
          placeholder="Evidence you have"
          className="rounded-lg border border-navy-200 px-3 py-2 text-sm"
        />
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes (dates, doctor names, etc.)"
          className="rounded-lg border border-navy-200 px-3 py-2 text-sm sm:col-span-2"
          rows={2}
        />
      </div>
      <button
        onClick={add}
        className="mt-3 rounded-lg bg-navy-800 px-4 py-2 text-sm font-medium text-white hover:bg-navy-700"
      >
        Add to tracker
      </button>

      {items.length > 0 && (
        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item.id} className="rounded-lg border border-navy-100 bg-navy-50 p-4 text-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-navy-950">{item.condition}</p>
                  <p className="mt-1 text-navy-600">
                    Status: <span className="font-medium">{item.status}</span>
                  </p>
                  {item.claimed && <p className="text-navy-600">Claimed: {item.claimed}</p>}
                  {item.awarded && <p className="text-navy-600">Awarded by VA: {item.awarded}</p>}
                  {item.evidence && <p className="text-navy-600">Evidence: {item.evidence}</p>}
                  {item.notes && <p className="mt-1 text-navy-700">{item.notes}</p>}
                </div>
                <button
                  onClick={() => remove(item.id)}
                  className="text-xs text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-4 text-xs text-navy-500">
        This tracker is for your personal notes only. It does not file claims, access the VA, or decide ratings. Free accredited VSO help is available. The VA makes all final decisions.
      </p>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { StarLogo } from "./StarLogo";

type Msg = { from: "vera" | "user"; text: string };

const canned: { q: string; a: string }[] = [
  {
    q: "How do I get a free copy of my DD214?",
    a: "Your DD214 is free from the National Archives (archives.gov/veterans) or by mail with Standard Form 180. An accredited VSO can also request it for free. I cannot get it for you, and I cannot get you a VA rating. Only the VA decides ratings.",
  },
  {
    q: "What benefits might I qualify for?",
    a: "I cannot tell you what you qualify for or get you a rating. Only the VA can decide that. The Benefits Screener on this page gives a plain-language list of things you may want to look into. An accredited VSO can help you prepare for free. The VA makes all final decisions.",
  },
  {
    q: "Can you help me get a VA rating?",
    a: "No. I cannot get you a VA rating, promise a percentage, or file a claim. Only the Department of Veterans Affairs decides ratings and benefits. I can point you to free tools and accredited VSOs who help for free. I am not a lawyer, doctor, or the VA.",
  },
  {
    q: "Am I being scammed?",
    a: "Walk away from anyone who charges you to file your first claim, promises you a specific rating or percentage, or asks you to exaggerate. I cannot get you a rating. Check the Scam Shield tool. Free, accredited VSO help is available. The VA makes all decisions.",
  },
  {
    q: "Where can I get free human help?",
    a: "Accredited Veterans Service Officers (VSOs) help veterans prepare and file for free. They are recognized by the VA. I cannot get you a rating or file anything for you. Search for a local VSO. Only the VA decides ratings and benefits.",
  },
];

const intro: Msg[] = [
  {
    from: "vera",
    text: "I give plain-language answers about VA benefits and point you to free help. I cannot get you a VA rating, promise any percentage, or file a claim. Only the VA decides ratings. I am not a lawyer, doctor, or the VA.",
  },
];

export function VeraChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(intro);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");

    const lower = trimmed.toLowerCase();
    const match = canned.find((c) =>
      lower.split(/\s+/).some((w) => w.length > 3 && c.q.toLowerCase().includes(w))
    );

    setTimeout(
      () => {
        setMessages((m) => [
          ...m,
          {
            from: "vera",
            text:
              match?.a ??
              "I cannot get you a VA rating or promise any percentage. Only the VA decides ratings and benefits. I can point you to the free tools on this page or to an accredited VSO who helps for free. I am not a lawyer, doctor, or the VA.",
          },
        ]);
      },
      400 + Math.random() * 300,
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brass-400 text-navy-900 shadow-lg shadow-navy-900/30 transition hover:scale-105 hover:bg-brass-300"
        aria-label={open ? "Close Vera chat" : "Ask Vera"}
      >
        {open ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <span className="text-sm font-bold">Vera</span>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-40 flex max-h-[70vh] w-[calc(100vw-3rem)] max-w-md flex-col overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-2xl shadow-navy-900/25">
          <header className="flex items-center gap-3 bg-navy-800 px-4 py-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brass-400 text-navy-900">
              <StarLogo className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Ask Vera</p>
              <p className="text-xs text-navy-200">Cannot get a rating · Free · Not the VA</p>
            </div>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto bg-navy-50/50 px-4 py-4">
            <div className="space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.from === "user" ? "bg-navy-800 text-white" : "bg-white text-navy-900 shadow-sm ring-1 ring-navy-100"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {messages.length <= 1 && (
              <div className="mt-4 space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-navy-500">Try asking:</p>
                {canned.map((c) => (
                  <button
                    key={c.q}
                    type="button"
                    onClick={() => send(c.q)}
                    className="block w-full rounded-lg border border-navy-200 bg-white px-3 py-2 text-left text-sm text-navy-800 transition hover:border-brass-400 hover:bg-brass-50"
                  >
                    {c.q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-navy-200 bg-white p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              className="flex-1 rounded-lg border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900 outline-none placeholder:text-navy-400 focus:border-brass-400"
            />
            <button type="submit" className="rounded-lg bg-navy-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-700">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

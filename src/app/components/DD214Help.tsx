"use client";

export function DD214Help() {
  return (
    <div className="rounded-2xl border border-navy-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-navy-950">Get a free copy of your DD214</h3>
      <p className="mt-2 text-sm text-navy-600">
        Your DD214 is free. Never pay anyone to get it.
      </p>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-navy-700">
        <li>
          Go to{" "}
          <a
            href="https://www.archives.gov/veterans/military-service-records"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brass-600 underline"
          >
            archives.gov/veterans
          </a>{" "}
          and request it online.
        </li>
        <li>Or mail Standard Form 180 to the National Archives.</li>
        <li>An accredited VSO can also request it for you at no cost.</li>
      </ol>
      <p className="mt-4 text-xs text-navy-500">
        Once you have it, keep a copy on your device. We never store it on our servers.
      </p>
    </div>
  );
}

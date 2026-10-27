export function GetHelpNow() {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
      <h3 className="text-lg font-bold text-red-900">Get Help Now</h3>
      <div className="mt-4 space-y-3">
        <a
          href="tel:988"
          className="block rounded-lg bg-red-600 px-4 py-3 text-center text-sm font-bold text-white hover:bg-red-700"
        >
          Veterans Crisis Line — Call 988, then press 1
        </a>
        <a
          href="sms:838255"
          className="block rounded-lg border border-red-600 bg-white px-4 py-3 text-center text-sm font-bold text-red-700 hover:bg-red-50"
        >
          Text 838255
        </a>
        <a
          href="tel:18774243838"
          className="block rounded-lg bg-navy-800 px-4 py-3 text-center text-sm font-bold text-white hover:bg-navy-700"
        >
          Homeless Veterans Hotline — 1-877-424-3838
        </a>
        <a
          href="tel:18008271000"
          className="block rounded-lg border border-navy-300 bg-white px-4 py-3 text-center text-sm font-bold text-navy-900 hover:bg-navy-50"
        >
          VA Benefits — 1-800-827-1000
        </a>
      </div>
      <p className="mt-3 text-xs text-navy-600">
        These numbers can change. Confirm with the VA if needed. Not affiliated with the VA.
      </p>
    </div>
  );
}

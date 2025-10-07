-export default function BioLinks() {
  return (
    <main className="mx-auto max-w-md p-6 text-center space-y-4">
      <h1 className="text-2xl font-bold">Tech24 Kenya</h1>
      <p className="text-sm text-slate-600">
        Launch your business site in 48 hours 🚀
      </p>

      <div className="space-y-3 mt-6">
        {/* Café demo */}
        <a
          href="https://cafe.tech24.co.ke"
          className="block rounded-xl bg-orange-600 text-white py-3 font-medium hover:bg-orange-700"
        >
          ☕ DineEasy Café Demo
        </a>

        {/* Salon */}
        <a
          href="https://salon.tech24.co.ke"
          className="block rounded-xl bg-pink-600 text-white py-3 font-medium hover:bg-pink-700"
        >
          💇‍♀️ Salon Demo
        </a>

        {/* Shop */}
        <a
          href="https://shop.tech24.co.ke"
          className="block rounded-xl bg-green-600 text-white py-3 font-medium hover:bg-green-700"
        >
          🛍️ Shop Demo
        </a>

        {/* Event */}
        <a
          href="https://event.tech24.co.ke"
          className="block rounded-xl bg-purple-600 text-white py-3 font-medium hover:bg-purple-700"
        >
          🎉 Event Planning Demo
        </a>

        {/* My BNB Manager */}
        <a
          href="https://bnb.tech24.co.ke"
          className="block rounded-xl bg-cyan-600 text-white py-3 font-medium hover:bg-cyan-700"
        >
          🏠 My BNB Manager Demo
        </a>

        {/* Law Firm */}
        <a
          href="https://law.tech24.co.ke"
          className="block rounded-xl bg-slate-800 text-white py-3 font-medium hover:bg-slate-900"
        >
          ⚖️ Law Firm Demo
        </a>

        {/* Real Estate */}
        <a
          href="https://realestate.tech24.co.ke"
          className="block rounded-xl bg-amber-600 text-white py-3 font-medium hover:bg-amber-700"
        >
          🏡 Real Estate Demo
        </a>

        {/* Main site + WhatsApp */}
        <a
          href="https://tech24.co.ke"
          className="block rounded-xl bg-blue-600 text-white py-3 font-medium hover:bg-blue-700"
        >
          🌐 Visit Tech24.co.ke
        </a>

        <a
          href="https://wa.me/254748699460"
          className="block rounded-xl border border-slate-300 py-3 hover:bg-slate-50"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    </main>
  );
}

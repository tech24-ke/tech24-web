export default function BioLinks() {
  return (
    <main className="mx-auto max-w-md p-6 text-center space-y-4">
      <h1 className="text-2xl font-bold">Tech24 Kenya</h1>
      <p className="text-sm text-slate-600">
        Launch your business site in 48 hours 🚀
      </p>

      <div className="space-y-3 mt-6">
        {/* Existing café demo */}
        <a
          href="https://cafe.tech24.co.ke"
          className="block rounded-xl bg-orange-600 text-white py-3 font-medium hover:bg-orange-700"
        >
          ☕ DineEasy Café Demo
        </a>

        {/* New demos */}
        <a
          href="https://salon.tech24.co.ke"
          className="block rounded-xl bg-pink-600 text-white py-3 font-medium hover:bg-pink-700"
        >
          💇‍♀️ Salon Demo
        </a>

        <a
          href="https://shop.tech24.co.ke"
          className="block rounded-xl bg-green-600 text-white py-3 font-medium hover:bg-green-700"
        >
          🛍️ Shop Demo
        </a>

        <a
          href="https://event.tech24.co.ke"
          className="block rounded-xl bg-purple-600 text-white py-3 font-medium hover:bg-purple-700"
        >
          🎉 Event Planning Demo
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

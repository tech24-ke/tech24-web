import Link from "next/link";

const services = [
  { title: "Business Card Sites", desc: "Clean one-pagers hosted on Vercel." },
  { title: "Full Websites", desc: "3–5 pages, SEO basics, analytics." },
  { title: "Simple Apps", desc: "Booking, menus, events, portfolios." },
  { title: "Brand & Design", desc: "Logos, color systems, assets." },
  { title: "Care & Support", desc: "Updates, backups, uptime checks." },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl border" />
            <span className="font-semibold">Tech24</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services">Services</a>
            <a href="#templates">Templates</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="px-3 py-1.5 rounded-lg border">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Always-On Digital Power for Kenyan Business
          </h1>
          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            We build fast websites and simple apps—hosted on Vercel, integrated
            with Kenya-friendly tools, and delivered quickly.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-black text-white">
              Launch from KSh 4,999
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl border">Talk to us</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border p-6 hover:shadow-sm transition">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section id="templates" className="py-16 border-t">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Ready-to-ship Templates</h2>
            <span className="text-sm text-slate-500">5 available now · more coming</span>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: "Landing Default", url: "https://landing-default.tech24.co.ke" },
              { name: "Portfolio Site", url: "https://portfolio.tech24.co.ke" },
              { name: "Restaurant Site", url: "https://restaurant.tech24.co.ke" },
            ].map((t) => (
              <a
                key={t.name}
                className="rounded-2xl border p-6 hover:shadow-sm transition"
                href={t.url}
                target="_blank"
              >
                <div className="h-32 rounded-xl bg-slate-100 border mb-4" />
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-slate-500">Live demo</div>
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-3">
            Want something different? We tailor a template to your brand and content in days.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 border-t bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Transparent pricing</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border bg-white p-6">
              <div className="text-sm font-semibold text-slate-500">Promo</div>
              <div className="mt-2 text-3xl font-bold">KSh 4,999</div>
              <div className="text-sm text-slate-500">One-page business card site</div>
              <ul className="mt-4 text-sm space-y-2">
                <li>• Template setup & branding</li>
                <li>• 1 revision round</li>
                <li>• Free SSL, deployed on Vercel</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <div className="text-sm font-semibold text-slate-500">Standard</div>
              <div className="mt-2 text-3xl font-bold">KSh 14,999</div>
              <div className="text-sm text-slate-500">3–5 pages + basic SEO</div>
              <ul className="mt-4 text-sm space-y-2">
                <li>• Home, About, Services, Contact</li>
                <li>• WhatsApp & Maps integration</li>
                <li>• Google Analytics + SEO basics</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <div className="text-sm font-semibold text-slate-500">App Starter</div>
              <div className="mt-2 text-3xl font-bold">From KSh 29,999</div>
              <div className="text-sm text-slate-500">Simple booking / menu / events</div>
              <ul className="mt-4 text-sm space-y-2">
                <li>• Choose a Tech24 template</li>
                <li>• Basic admin + email/WhatsApp</li>
                <li>• Optional MPesa integration</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            *Domain & email optional add-ons. You already own tech24.co.ke—great.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 border-t">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Ready to build?</h2>
          <p className="text-slate-600 mt-3">Tell us what you need and we’ll reply within 24 hours.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a className="px-5 py-3 rounded-xl border" href="mailto:hello@tech24.co.ke">
              Email hello@tech24.co.ke
            </a>
            <Link
              className="px-5 py-3 rounded-xl bg-black text-white"
              href="https://wa.me/2547XXXXXXXX"
              target="_blank"
            >
              WhatsApp us
            </Link>
          </div>
          <p className="text-xs text-slate-500 mt-3">Prefer a call? +254 7xx xxx xxx</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <span>© {year} Tech24 — Nairobi, Kenya</span>
          <span>Built on Vercel</span>
        </div>
      </footer>
    </main>
  );
}

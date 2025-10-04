// src/app/page.tsx
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2 font-extrabold">
            <span className="inline-block h-6 w-6 rounded-full bg-indigo-600" />
            <span>Tech24</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#services" className="text-slate-700 hover:text-slate-900">Services</a>
            <a href="#templates" className="text-slate-700 hover:text-slate-900">Templates</a>
            <a href="#pricing" className="text-slate-700 hover:text-slate-900">Pricing</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 md:inline-flex"
          >
            Talk to us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_-20%,#818cf826,transparent_70%)]" />
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Always-On Digital Power for <span className="text-indigo-600">Kenyan</span> Business
            </h1>
            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              We build fast websites and simple apps—hosted on Vercel, integrated with
              Kenya-friendly tools, and delivered quickly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-sm hover:bg-indigo-700"
              >
                Launch from KSh 4,999
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-50"
              >
                Book a call
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <span>⚡ Hosted on Vercel</span>
              <span>•</span>
              <span>🛠️ Local integrations (M-Pesa, WhatsApp)</span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 p-6 text-white">
              <div className="text-lg font-semibold">Live Preview</div>
              <p className="mt-1 text-sm opacity-90">
                Clean, responsive, lightning-fast pages that convert.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-lg bg-white/15 p-3">SEO basics</div>
                <div className="rounded-lg bg-white/15 p-3">Analytics</div>
                <div className="rounded-lg bg-white/15 p-3">Forms</div>
                <div className="rounded-lg bg-white/15 p-3">Blog</div>
                <div className="rounded-lg bg-white/15 p-3">WhatsApp CTA</div>
                <div className="rounded-lg bg-white/15 p-3">M-Pesa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">What we do</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Pick a starting point—everything is customisable and can grow with your business.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Business Card Sites",
              desc: "Clean one-pagers hosted on Vercel.",
              items: ["Hero + About + Contact", "WhatsApp CTA", "SEO basics"],
            },
            {
              title: "Full Websites",
              desc: "3–5 pages, SEO basics, analytics.",
              items: ["Home, Services, About, Contact", "Blog/News", "Forms to email/WhatsApp"],
            },
            {
              title: "Simple Apps",
              desc: "Booking, menus, events, portfolios.",
              items: ["Auth (optional)", "Dashboards", "Payments via M-Pesa"],
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="mt-1 text-slate-600">{c.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Templates</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Start from a proven layout, then we tailor it to your brand.
            </p>
          </div>
          <a href="#contact" className="hidden rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 md:inline-flex">
            See demos
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { name: "One-Pager", tag: "Launch fast", color: "from-sky-500 to-cyan-500" },
            { name: "Service Site", tag: "Best seller", color: "from-indigo-500 to-violet-600" },
            { name: "Portfolio", tag: "Clean & visual", color: "from-rose-500 to-orange-500" },
          ].map((t) => (
            <div key={t.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className={`aspect-[16/10] w-full bg-gradient-to-br ${t.color}`} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{t.name}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {t.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Mobile-first, blazing fast, and SEO-ready.
                </p>
                <div className="mt-4 flex gap-2">
                  <a href="#contact" className="inline-flex items-center rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-700">
                    Preview
                  </a>
                  <a href="#pricing" className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50">
                    Get this
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-slate-50 p-8 md:p-12">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Why Tech24</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Performance first",
                desc: "Next.js + Vercel for instant load times and great Lighthouse scores.",
              },
              {
                title: "Local payments",
                desc: "M-Pesa checkout and STK push where it makes sense.",
              },
              {
                title: "Own your data",
                desc: "Analytics, leads and content stay with you—export anytime.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 h-8 w-8 rounded-lg bg-indigo-600" />
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Pricing</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Transparent packages. Pay once to launch, optional monthly care plan.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Launch",
              price: "KSh 4,999",
              blurb: "One-pager, perfect for starters.",
              features: ["Hero + About + Contact", "WhatsApp CTA", "Basic SEO"],
              cta: "Get started",
              highlight: false,
            },
            {
              name: "Business",
              price: "KSh 19,999",
              blurb: "Full site (3–5 pages).",
              features: ["Pages & Blog", "Forms → Email/WhatsApp", "Analytics & SEO"],
              cta: "Launch Business",
              highlight: true,
            },
            {
              name: "App Lite",
              price: "KSh 39,999",
              blurb: "Simple app or booking.",
              features: ["Auth (optional)", "Dashboards", "M-Pesa ready"],
              cta: "Start App",
              highlight: false,
            },
          ].map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 shadow-sm ${
                p.highlight ? "border-indigo-300 ring-1 ring-indigo-200" : "border-slate-200"
              }`}
            >
              <h3 className="text-lg font-bold">{p.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
              <p className="mt-1 text-sm text-slate-600">{p.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ${
                  p.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-slate-300 text-slate-800 hover:bg-slate-50"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-slate-500">
          Need hosting & updates? Care plan from KSh 1,499/month.
        </p>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Loved by small teams</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              "“Fast delivery and clean design. Our WhatsApp leads doubled.”",
              "“Payment links + blog in one week. Exactly what we needed.”",
              "“They handled SEO and analytics—now we can focus on sales.”",
            ].map((q, i) => (
              <blockquote key={i} className="rounded-2xl bg-slate-50 p-6 text-slate-700">
                {q}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">FAQ</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            ["How fast can we launch?", "Most one-pagers go live within 3–7 days once content is ready."],
            ["Do you write copy?", "Yes—light copy help is included. We can also translate to Swahili if needed."],
            ["What about domain & email?", "We connect your domain and set up professional email routing if required."],
            ["Can we grow later?", "Absolutely. Add pages, a blog, or simple app features as you scale."],
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold">{q}</div>
              <div className="mt-1 text-sm text-slate-600">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Let’s launch your site</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Tell us about your business and preferred template. We’ll reply the same day.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/254700000000?text=Hi%20Tech24%2C%20I%27d%20like%20to%20launch%20a%20website."
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white hover:bg-emerald-600"
            >
              WhatsApp us
            </a>
            <a
              href="mailto:hello@tech24.co.ke?subject=New%20site%20request"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10"
            >
              hello@tech24.co.ke
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Tech24</span>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-slate-700">Services</a>
            <a href="#templates" className="hover:text-slate-700">Templates</a>
            <a href="#pricing" className="hover:text-slate-700">Pricing</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

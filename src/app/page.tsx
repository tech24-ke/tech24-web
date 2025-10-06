"use client";

import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import TemplateShowcase from "@/components/TemplateShowcase";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* JSON-LD for SEO */}
      <Script id="ld-localbusiness" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Tech24.co.ke",
          description:
            "Web design, M-Pesa integration, WhatsApp CTA, and social media setup for Kenyan businesses.",
          url: "https://tech24.co.ke",
          telephone: "+254748699460",
          areaServed: "KE",
          sameAs: ["https://instagram.com/tech24ke"],
        })}
      </Script>

      {/* WhatsApp round-robin (Joy ↔ Terry). Override with data-wa when needed */}
      <Script id="wa-round-robin" strategy="afterInteractive">
        {`
(function(){
  const reps = [
    { name: 'Joy',   wa: '32465603546'  },
    { name: 'Terry', wa: '254748699460' }
  ];
  const KEY='wa_rr_index_v1', BRAND='Tech24';
  function nextRep(){ const i=parseInt(localStorage.getItem(KEY)||'0',10); localStorage.setItem(KEY,String(i+1)); return reps[i%reps.length]; }
  function buildMsg(custom){
    const utm=[...new URLSearchParams(location.search).entries()].map(([k,v])=>k+'='+v).join('&');
    const base=(custom&&custom.trim())?custom.trim():\`Hi \${BRAND}! I'm on "\${document.title}" | URL: \${location.href}\`;
    return encodeURIComponent([base, utm?('UTM: '+utm):null].filter(Boolean).join(' | '));
  }
  function wire(a){
    const override=a.getAttribute('data-wa');
    const rep=override?{wa:override}:nextRep();
    a.href='https://wa.me/'+rep.wa+'?text='+buildMsg(a.getAttribute('data-msg')||'');
    a.title='Chat on WhatsApp';
  }
  function init(){ document.querySelectorAll('a.wa-rr').forEach(a=>{ wire(a); a.addEventListener('click',()=>wire(a),{passive:true}); }); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
        `}
      </Script>

      {/* PAGE WRAPPER: safe viewport height + column; footer uses mt-auto */}
      <div className="min-h-[100svh] flex flex-col overflow-x-hidden">

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="#home" className="flex items-center gap-2">
                <img src="/logo.png" alt="Tech24 logo" className="h-8 w-8 rounded-lg object-contain" />
                <span className="font-semibold text-slate-900">Tech24.co.ke</span>
              </a>
              <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                <a href="#services" className="hover:text-blue-700">Services</a>
                <a href="#mpesa" className="hover:text-blue-700">M-Pesa</a>
                <a href="#whatsapp" className="hover:text-blue-700">WhatsApp CTA</a>
                <a href="#pricing" className="hover:text-blue-700">Packages</a>
                <a href="#contact" className="hover:text-blue-700">Contact</a>
                <a
                  href="#"
                  data-msg="Hi Tech24! I saw your website and need more info."
                  className="wa-rr inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:bg-blue-700"
                >
                  WhatsApp
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main>
          {/* Hero */}
          <section id="home" className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
              <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                    Digital Made Simple for Kenyan Businesses
                  </h1>
                  <p className="mt-5 text-lg text-slate-700">
                    We build fast, modern websites with <span className="font-semibold">M-Pesa</span> and{" "}
                    <span className="font-semibold">WhatsApp</span> built-in. Start small, scale anytime.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#pricing" className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:bg-blue-700">
                      See Packages
                    </a>
                    <a
                      href="#"
                      data-msg="Hi Tech24! I want a website quote."
                      className="wa-rr inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold hover:border-blue-300 hover:text-blue-700"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                  <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Live in 48 hours
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> .co.ke domains
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-orange-500" /> Secure hosting
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl bg-white/85 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur md:p-8">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <Card title="M-Pesa Checkout" desc="Add Paybill/Till or STK Push to your site or app." />
                      <Card title="WhatsApp CTA" desc="Turn visitors into chats, not missed forms." />
                      <Card title="Social Launch" desc="Setup FB/IG/TikTok + link-in-bio page." />
                      <Card title="Fast Delivery" desc="Most projects go live within 48 hours." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Templates Showcase */}
          <TemplateShowcase />

          {/* Services */}
          <section id="services" className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Header
                title="Our Services"
                subtitle="Websites, e-commerce, branding, and social setup — we handle everything end-to-end."
              />
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Service title="Business Websites" desc="Clean, mobile-friendly pages that convert visitors into customers." />
                <Service title="E-Commerce with M-Pesa" desc="WooCommerce/Shopify or custom shops with instant M-Pesa confirmation." />
                <Service title="Web Apps & Dashboards" desc="Custom tools and portals for operations, orders, and reporting." />
                <Service title="Branding & Logos" desc="Simple, memorable identities with social-ready assets." />
                <Service title="Social Media & WhatsApp" desc="WhatsApp CTA buttons, share links, and page setup." />
                <Service title="Domain & Hosting" desc="We register, configure, secure, and maintain your domain." />
              </div>
            </div>
          </section>

          {/* M-Pesa */}
          <section id="mpesa" className="bg-slate-50 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-start gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-extrabold md:text-4xl">M-Pesa Integrations — Simple, Local, Reliable</h2>
                  <p className="mt-4 text-slate-700">
                    Let customers pay you instantly from their phones. We connect your website or app to Safaricom’s Daraja API,
                    Paybill/Till, or ready-made plugins.
                  </p>
                  <ul className="mt-6 space-y-3 text-slate-700">
                    <Bullet color="bg-emerald-500" title="Online Shop:" body="“Pay via M-Pesa” at checkout with auto confirmation." />
                    <Bullet color="bg-emerald-500" title="Service Booking:" body="Clients pay a deposit before confirming an appointment." />
                    <Bullet color="bg-emerald-500" title="Donations/Fundraisers:" body="Accept contributions via Paybill or Till." />
                    <Bullet color="bg-emerald-500" title="In-App Payments:" body="Launch STK Push directly from mobile or web apps." />
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#contact" className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:bg-emerald-700">
                      Ask about M-Pesa
                    </a>
                    <a href="#pricing" className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold hover:border-emerald-300 hover:text-emerald-700">
                      See packages
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:p-8">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 font-bold text-emerald-700">M</div>
                    <div>
                      <p className="font-semibold">How it works (STK Push)</p>
                      <p className="text-sm text-slate-600">Customer enters phone → receives M-Pesa prompt → confirms → your site updates instantly.</p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
                    <li>Customer taps <span className="font-medium">Pay via M-Pesa</span> on checkout.</li>
                    <li>We send an <span className="font-medium">STK Push</span> to their phone.</li>
                    <li>They confirm with PIN. Payment is recorded immediately.</li>
                    <li>Your dashboard shows the order as <span className="font-medium">Paid</span>.</li>
                  </ol>
                  <p className="mt-4 text-xs text-slate-500">Supports Paybill/Till, C2B/B2C flows, and order reconciliation.</p>
                </div>
              </div>
            </div>
          </section>

          {/* WhatsApp CTA */}
          <section id="whatsapp" className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-extrabold md:text-4xl">WhatsApp CTA — Turn Visitors Into Chats</h2>
                <p className="mt-4 text-slate-700">
                  In Kenya, business happens on WhatsApp. We add a <span className="font-semibold">Call-to-Action (CTA)</span> button
                  that opens a chat with your pre-filled message — faster than forms and email.
                </p>
                <ul className="mt-6 space-y-3 text-slate-700">
                  <Bullet color="bg-blue-600" title="Chat Now:" body="A floating or header button that opens a chat instantly." />
                  <Bullet color="bg-blue-600" title="Send Order Photo:" body="Boutiques let buyers send a picture and size." />
                  <Bullet color="bg-blue-600" title="Request a Quote:" body="Trades/services capture qualified leads fast." />
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#"
                    data-msg="Hi Tech24! I saw your WhatsApp CTA section and want to try it."
                    className="wa-rr inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:bg-blue-700"
                  >
                    Try the CTA
                  </a>
                  <a href="#pricing" className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold hover:border-blue-300 hover:text-blue-700">
                    See packages
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Packages */}
          <section id="pricing" className="bg-slate-50 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Header title="Our Packages" subtitle="Start small, grow fast. Transparent pricing, no hidden fees." />

              <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PricingCard
                  badge="Promo Offer"
                  title="Starter Site"
                  price="KES 4,999"
                  items={[
                    "1-page landing",
                    "WhatsApp CTA",
                    "Professional email redirect (receive-only)",
                    "Optional 2-way mailbox +1,500 KES/year",
                    "Secure hosting",
                    "Mobile-friendly",
                  ]}
                  ctaMsg="I want the Starter Site package (KES 4,999)."
                  ctaText="Get Starter"
                />
                <PricingCard
                  title="Social Launch"
                  price="KES 5,999"
                  items={[
                    "FB/IG/TikTok setup",
                    "Bio link page",
                    "WhatsApp CTA",
                    "Basic brand kit",
                  ]}
                  ctaMsg="I want the Social Launch package (KES 5,999)."
                  ctaText="Start Social"
                />
                <PricingCard
                  featured
                  badge="Most Popular"
                  title="Combo: Starter + Social"
                  price="KES 8,999"
                  sub="(save 2,000)"
                  items={[
                    "Website + bio link page",
                    "FB/IG/TikTok setup",
                    "WhatsApp CTA everywhere",
                    "Domain setup & SSL",
                  ]}
                  ctaMsg="I want the Combo Starter + Social package (KES 8,999)."
                  ctaText="Get the Combo"
                />
                <PricingCard
                  title="Pro Business"
                  price="KES 9,999"
                  items={["Up to 5 pages", "M-Pesa button", "SEO setup", "Analytics"]}
                  ctaMsg="I want the Pro Business package (KES 9,999)."
                  ctaText="Go Pro"
                />
                <PricingCard
                  title="E-Commerce"
                  price="From KES 14,999"
                  items={["Woo/Shopify or custom", "M-Pesa checkout", "WhatsApp chat", "Admin panel"]}
                  ctaMsg="I need an E-Commerce quote."
                  ctaText="Request Quote"
                />
              </div>

              <p className="mt-8 text-center text-sm text-slate-600">
                💡 <span className="font-semibold">Annual domain renewal (your internet name):</span> from KES 1,500/year.{" "}
                Professional email redirect (receive-only) included — upgrade to a <span className="font-semibold">two-way professional mailbox</span> for +1,500 KES/year.
              </p>

              <div className="mt-6 mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-6 text-center shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
                <h4 className="text-lg font-semibold text-slate-900">Professional Email with Zoho Mail</h4>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  Get your own branded email address like <span className="font-medium">info@yourdomain.co.ke</span> — powered by Zoho Mail. 
                  Access it directly from your Gmail app via IMAP or webmail. Send and receive messages using your business identity, not a generic Gmail.
                </p>
                <p className="mt-3 text-sm text-slate-500">Included as redirect in Starter plan • One full mailbox +1,500 KES / year</p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Header
                title="Why Choose Tech24"
                subtitle="Local understanding + global quality. Built for Kenya from day one."
              />
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Why title="Kenya-First" body="M-Pesa, WhatsApp, .co.ke domains — everything your customers expect." />
                <Why title="Fast Delivery" body="Most sites go live within 48 hours — move quickly and test the market." />
                <Why title="Scale Anytime" body="Start with a promo, upgrade to Pro or E-Commerce when you’re ready." />
                <Why title="Transparent Pricing" body="No surprise fees. Clear quotes and simple maintenance." />
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="bg-slate-900 py-16 text-slate-100 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-extrabold md:text-4xl">Let’s build something great</h2>
                <p className="mt-3 text-slate-300">Tell us what you need — we’ll reply on WhatsApp with a simple quote.</p>
                <div className="mt-8 space-y-4 text-lg">
                  <a
                    href="#"
                    data-wa="254748699460"
                    data-msg="Hi Tech24! I want a website quote."
                    className="wa-rr inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
                  >
                    WhatsApp: 0748 699 460
                  </a>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800">@</span>
                    <a href="mailto:hello@tech24.co.ke" className="hover:underline">hello@tech24.co.ke</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800">IG</span>
                    <a href="https://instagram.com/tech24kenya" target="_blank" rel="noopener" className="hover:underline">@tech24kenya</a>
                  </div>
                  <p className="pt-2 text-xs text-slate-400">Clicking WhatsApp opens a chat with a pre-filled message.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER — pinned using mt-auto inside the flex column */}
        <footer className="mt-auto border-t border-slate-200/70">
          <div className="mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
            <p className="text-sm text-slate-600">© <span>{year}</span> Tech24.co.ke. All rights reserved.</p>
            <nav className="flex items-center gap-4 text-sm">
              <a href="#services" className="hover:text-blue-700">Services</a>
              <a href="#mpesa" className="hover:text-blue-700">M-Pesa</a>
              <a href="#whatsapp" className="hover:text-blue-700">WhatsApp</a>
              <a href="#pricing" className="hover:text-blue-700">Packages</a>
              <a href="#contact" className="hover:text-blue-700">Contact</a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}

/* helpers */
function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
      <p className="mt-3 text-slate-600">{subtitle}</p>
    </div>
  );
}
function Service({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}
function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-slate-600">{desc}</p>
    </div>
  );
}
function Bullet({ color, title, body }: { color: string; title: string; body: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className={`mt-1 h-2.5 w-2.5 rounded-full ${color}`} />
      <span><span className="font-semibold">{title}</span> {body}</span>
    </li>
  );
}
function Why({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-2 text-slate-600">{body}</p>
    </div>
  );
}

/** PRICING CARD — CTA FIXED TO BOTTOM (relative container + absolute CTA) */
function PricingCard({
  badge,
  featured,
  title,
  price,
  sub,
  items,
  ctaMsg,
  ctaText,
}: {
  badge?: string;
  featured?: boolean;
  title: string;
  price: string;
  sub?: string;
  items: string[];
  ctaMsg: string;
  ctaText: string;
}) {
  return (
    <div
      className={`relative h-full rounded-2xl bg-white p-6 pb-24 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${
        featured ? "border-2 border-blue-600" : "border border-slate-200"
      }`}
    >
      {badge && (
        <span
          className={`absolute -top-3 left-4 rounded-full ${
            featured ? "bg-blue-600" : "bg-orange-600"
          } px-3 py-1 text-xs font-bold uppercase tracking-wide text-white`}
        >
          {badge}
        </span>
      )}

      <h3 className="mt-3 text-xl font-bold">{title}</h3>
      <p className="mt-1 text-slate-600">
        {title === "Starter Site"
          ? "Small businesses & individuals"
          : title === "Social Launch"
          ? "Start on Facebook, Instagram & TikTok"
          : title.includes("Combo")
          ? "Complete online presence"
          : title === "Pro Business"
          ? "SMEs & shops ready to grow"
          : "Full online shop"}
      </p>

      <p className="mt-4 text-3xl font-extrabold">
        {price}{" "}
        {sub ? <span className="text-base font-semibold text-slate-500">{sub}</span> : null}
      </p>

      <ul className="mt-4 space-y-2 text-sm">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      {/* CTA pinned to bottom of the card */}
      <div className="absolute inset-x-6 bottom-6">
        <a
          href="#"
          data-msg={ctaMsg}
          className="wa-rr inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}

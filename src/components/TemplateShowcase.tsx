// src/components/TemplateShowcase.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Template = {
  key: string;
  name: string;
  tagline: string;
  demoUrl: string;
  thumb: string; // path under /public/templates/
  badge?: string;
};

const TEMPLATES: Template[] = [
  {
    key: "cafe",
    name: "Café / Restaurant",
    tagline: "Menu, delivery CTAs, hours & map",
    demoUrl: "https://cafe.tech24.co.ke",
    thumb: "/templates/cafe.jpg",
    badge: "New",
  },
  {
    key: "salon",
    name: "Salon / Beauty",
    tagline: "Services grid, booking CTA",
    demoUrl: "https://salon.tech24.co.ke",
    thumb: "/templates/salon.jpg",
  },
  {
    key: "food",
    name: "Fast Food",
    tagline: "Quick order links, hero promo",
    demoUrl: "https://food.tech24.co.ke",
    thumb: "/templates/food.jpg",
  },
  {
    key: "homes",
    name: "Real Estate",
    tagline: "Listings cards + map links",
    demoUrl: "https://homes.tech24.co.ke",
    thumb: "/templates/homes.jpg",
    badge: "Coming soon",
  },
];

export default function TemplateShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Ready-made templates
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Pick a design, we customize it in 48 hours. Perfect for SMEs in Kenya.
          </p>
        </div>
        <Link
          href="#pricing"
          className="hidden rounded-xl bg-blue-600 px-4 py-2 text-white md:inline-block"
        >
          See Pricing
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEMPLATES.map((t) => (
          <article
            key={t.key}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            {/* fix: prevent text bleed and match card radius */}
            <div className="relative h-40 w-full overflow-hidden rounded-t-2xl bg-slate-100">
              <Image
                src={t.thumb}
                alt={`${t.name} preview`}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                className="object-cover transition duration-300 group-hover:scale-105"
                priority={t.key === "cafe"}
              />
              {t.badge && (
                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
                  {t.badge}
                </span>
              )}
            </div>

            <div className="space-y-3 p-4">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-slate-600">{t.tagline}</p>

              <div className="flex gap-2 pt-1">
                <a
                  href={t.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-center text-sm font-medium hover:bg-slate-50"
                >
                  Live Demo
                </a>
                <Link
                  href={`/start?template=${t.key}`}
                  className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
                >
                  Use this
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

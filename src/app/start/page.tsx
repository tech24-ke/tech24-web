// app/start/page.tsx
import Link from "next/link";

const LABELS: Record<string, string> = {
  cafe: "Café / Restaurant",
  salon: "Salon / Beauty",
  shop: "Shop / Retail",
  event: "Event Planning",
};

export default function StartPage({
  searchParams,
}: {
  searchParams: { template?: string };
}) {
  const tplKey = (searchParams?.template || "").toLowerCase().trim();
  const label = LABELS[tplKey];

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold">Get started</h1>

      {!label ? (
        <p className="mt-4 text-slate-600">
          No template selected. Please choose one below.
        </p>
      ) : (
        <>
          <p className="mt-4 text-slate-700">
            You selected <span className="font-semibold">{label}</span>. We’ll
            customize colors, logo, text, and WhatsApp CTA for your business.
          </p>

          <div className="mt-8 grid gap-3">
            {/* Continue on WhatsApp via your round-robin hook */}
            <a
              href="#"
              className="wa-rr inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              data-msg={`Hi Tech24! I want to use the "${label}" template. Please contact me.`}
            >
              Continue on WhatsApp
            </a>

            <Link
              href="/#templates"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
            >
              Back to templates
            </Link>
          </div>
        </>
      )}

      <div className="mt-10 text-sm text-slate-500">
        Tip: If you don’t see your niche, go back and pick any template—tell us
        what you need on WhatsApp and we’ll adapt it.
      </div>
    </main>
  );
}

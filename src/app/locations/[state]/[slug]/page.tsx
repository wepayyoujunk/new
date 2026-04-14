import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PHONE, PHONE_HREF, SMS_HREF } from "@/data/content";
import { STATES, getStateBySlug } from "@/data/cities";
import { SERVICES } from "@/data/services";
import { getOfficeByState } from "@/data/offices";
import { OfficeBlock } from "@/components/OfficeBlock";
import { CtaButtons } from "@/components/CtaButtons";

function isGuideSlug(slug: string) {
  return slug.includes("junk-removal-in-") && slug.endsWith("-guide-tips-and-costs");
}

export function generateStaticParams() {
  return STATES.map((s) => ({
    state: s.slug,
    slug: `junk-removal-in-${s.slug}-guide-tips-and-costs`,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; slug: string }> }): Promise<Metadata> {
  const { state: stateSlug, slug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state || !isGuideSlug(slug)) return {};
  return {
    title: `Junk Removal in ${state.name} — Complete Guide, Tips & Costs`,
    description: `Everything ${state.name} residents need to know about junk removal. Local tips, pricing, what items earn you credit, seasonal advice, and how to save money in ${state.abbreviation}.`,
    alternates: { canonical: `/locations/${stateSlug}/${slug}` },
  };
}

export default async function StateGuidePage({ params }: { params: Promise<{ state: string; slug: string }> }) {
  const { state: stateSlug, slug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state || !isGuideSlug(slug)) notFound();

  const office = getOfficeByState(stateSlug);
  const topCities = state.cities.slice(0, 12);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">Expert Junk Removal Guide for {state.abbreviation} Residents</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">
            Junk Removal in {state.name}<br /><span className="gradient-text">Guide, Tips &amp; Costs</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Everything {state.name} residents need to know about junk removal — local pricing, what items earn you credit, how to prepare, and when to book.
          </p>
          <CtaButtons variant="dark" />
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">What {state.name} Residents Need to Know About Junk Removal</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">The Complete Guide to Junk Removal in {state.name}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
            From <Link href={`/locations/${stateSlug}`} className="text-teal-700 font-semibold hover:underline">{state.cities.length} cities served</Link> to <Link href="/pricing" className="text-teal-700 font-semibold hover:underline">transparent pricing</Link> to <Link href="/services" className="text-teal-700 font-semibold hover:underline">34 service types</Link> — here&apos;s how junk removal works in {state.abbreviation} and how to get the best deal.
          </p>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-relaxed text-slate-700">
            <p>{state.name} is a unique market for junk removal. The types of homes, the items people accumulate, the local regulations, the climate — they all affect how junk removal works in your area. This guide covers everything specific to {state.abbreviation}: what items earn the most credit locally, how to prepare for a cleanout, the best times to book, and how our pricing compares to every other option in the state.</p>
            <p>Here&apos;s the industry secret every {state.name} resident should know: <strong>every junk removal company in {state.abbreviation} has been charging you for the service AND keeping 35%+ of your items to resell for profit.</strong> Your working appliances, quality furniture, and power tools get hauled away, resold, and you never see a dime. We Pay You Junk Removal is the only company in {state.name} that credits you 50% (when applicable) of resale value. Starting at $100/hr with dump fees included (an industry first).</p>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Items Worth Money in {state.name}</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">What Earns You Credit in {state.name} — Top Resale Items</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
            {state.name} homes have specific items that hold value. Here&apos;s what our <Link href={`/locations/${stateSlug}`} className="text-teal-700 font-semibold hover:underline">{state.abbreviation} crews</Link> see most often and what they&apos;re worth on the <Link href="/pricing" className="text-teal-700 font-semibold hover:underline">local resale market</Link>.
          </p>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-relaxed text-slate-700">
            <p><strong>Furniture ($50–$2,000+):</strong> Solid wood dining sets, dressers, desks, leather sofas. Brand names like Pottery Barn, West Elm, Restoration Hardware command premiums in {state.name}. Even mid-range pieces in good condition have local buyers. <Link href="/services/furniture-removal" className="text-teal-700 font-semibold hover:underline">Furniture removal</Link> is our most-requested service in {state.abbreviation}.</p>
            <p><strong>Appliances ($75–$600+):</strong> Working refrigerators, washers, dryers, ovens. Stainless steel and newer models bring higher prices. {state.name} landlords and flippers are always buying. <Link href="/services/appliance-removal" className="text-teal-700 font-semibold hover:underline">Appliance removal</Link> frequently covers the entire bill.</p>
            <p><strong>Tools ($25–$500+):</strong> DeWalt, Milwaukee, Makita power tools hold 40–70% of retail for years. {state.name} garages are full of value most homeowners don&apos;t realize they have.</p>
            <p><strong>Electronics, exercise equipment, musical instruments, outdoor gear</strong> — all have active resale markets in {state.abbreviation}. Our crews know what sells locally and appraise accordingly.</p>
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">How to Prepare for Junk Removal in {state.abbreviation}</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">Preparing for Your {state.name} Junk Removal — Save Time and Money</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
            A little prep saves you money. Since you&apos;re paying <Link href="/pricing" className="text-teal-700 font-semibold hover:underline">by the hour</Link>, faster loading means a lower bill. Here&apos;s how {state.name} customers get the best results.
          </p>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-relaxed text-slate-700">
            <p><strong>Decide what goes before we arrive.</strong> Walk through each space and make clear decisions. The less time our crew spends waiting for you to decide, the lower your bill.</p>
            <p><strong>Clear access paths.</strong> Move vehicles, open gates, unlock doors. Every minute spent navigating obstacles is a minute on the clock.</p>
            <p><strong>Consolidate small items</strong> into bags or boxes. Loose items take longer to load individually.</p>
            <p><strong>Separate valuable items.</strong> Group brand-name furniture, working appliances, and electronics together. This speeds up the appraisal process and maximizes your credits.</p>
            <p><strong>Book smart.</strong> Tuesday–Thursday are typically less busy in {state.name}. Spring is peak season — book a few days ahead March–June. <Link href="/book-junk-removal-service-today" className="text-teal-700 font-semibold hover:underline">Book now</Link> for the best availability.</p>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Junk Removal Pricing in {state.name}</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">How Much Does Junk Removal Cost in {state.name}?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
            Same rate across all {state.cities.length} cities in {state.abbreviation}. See our full <Link href="/pricing" className="text-teal-700 font-semibold hover:underline">pricing page</Link> with estimated costs for all <Link href="/services" className="text-teal-700 font-semibold hover:underline">34 services</Link>.
          </p>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-relaxed text-slate-700">
            <p><strong>1 Person Crew:</strong> $100/hr — ideal for single items and small cleanouts.</p>
            <p><strong>2 Person Crew:</strong> $250/hr — most popular for full <Link href="/services/garage-cleanouts" className="text-teal-700 font-semibold hover:underline">garage cleanouts</Link>, <Link href="/services/estate-cleanouts" className="text-teal-700 font-semibold hover:underline">estate clearing</Link>, and heavy items.</p>
            <p><strong>Emergency Same-Day:</strong> $200/person/hr — guaranteed 2-hour arrival for last-minute deadlines.</p>
            <p>All rates include dump fees (an industry first) and 50% Resale Credit (when applicable) on items with value. 1 hour minimum. No hidden fees, no contracts.</p>
          </div>
        </div>
      </section>

      {/* City guides */}
      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">City-Specific Junk Removal Guides in {state.abbreviation}</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">{state.name} City Guides — Local Tips for Your Area</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
            Every city is different. Click your city for local junk removal tips, pricing, and what items are worth the most in your area.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {topCities.map((city) => (
              <Link key={city.slug} href={`/locations/${stateSlug}/${city.slug}/junk-removal-in-${city.slug}-guide-tips-and-costs`}
                className="group rounded-xl border border-slate-200 bg-white p-3 text-center transition-all hover:border-teal-400 hover:shadow-md">
                <p className="font-bold text-slate-900 text-sm group-hover:text-teal-700">{city.name}</p>
                <p className="mt-0.5 text-xs text-teal-600">Guide &amp; Tips</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href={`/locations/${stateSlug}`} className="text-teal-700 font-semibold text-sm hover:underline font-cta">
              All {state.cities.length} Cities in {state.name} →
            </Link>
          </div>
        </div>
      </section>

      {office && <OfficeBlock office={office} />}

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 py-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">Book Junk Removal in {state.name} Today</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-white sm:text-4xl font-heading">Ready to Get Started in {state.name}?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/70">
            Starting at $100/hr. Dump fees included (an industry first). 50% Resale Credit (when applicable). Same-day available.
          </p>
          <CtaButtons variant="dark" />
        </div>
      </section>
    </>
  );
}

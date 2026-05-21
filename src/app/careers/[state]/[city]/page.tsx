import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopCitiesPerState, getCityBySlug } from "@/data/cities";
import { SERVICES } from "@/data/services";
import { getOfficeByState } from "@/data/offices";
import { OfficeBlock } from "@/components/OfficeBlock";
import { JobApplicationForm } from "@/components/JobApplicationForm";

export const dynamicParams = true;

export function generateStaticParams() {
  return getTopCitiesPerState(1).map(({ state, city }) => ({ state: state.slug, city: city.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; city: string }> }): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const result = getCityBySlug(stateSlug, citySlug);
  if (!result) return {};
  return {
    title: `Junk Removal Contractor Jobs in ${result.city.name}, ${result.state.abbreviation} — 1099, Paid in 30 Minutes`,
    description: `Run junk removal jobs in ${result.city.name}, ${result.state.abbreviation} as a 1099 contractor. $100/hr per man + 50% resale share, paid within 30 minutes of job completion. Truck or trailer required. Pilot operators get first dibs on franchise territory.`,
    alternates: { canonical: `/careers/${stateSlug}/${citySlug}` },
  };
}

export default async function CityJobsPage({ params }: { params: Promise<{ state: string; city: string }> }) {
  const { state: stateSlug, city: citySlug } = await params;
  const result = getCityBySlug(stateSlug, citySlug);
  if (!result) notFound();

  const { state, city } = result;
  const office = getOfficeByState(stateSlug);
  const nearbyCities = state.cities.filter((c) => c.slug !== citySlug).slice(0, 8);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">Now Hiring 1099 Contractors in {city.name}, {state.abbreviation} — Franchise Track</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">
            Junk Removal Contractor Jobs in <span className="gradient-text">{city.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
            Own a truck or trailer in {city.name}? We hand you the customers. You run the job, keep $100/hr per man, plus 50% of items we resell — and your labor share hits your bank account within 30 minutes of job completion. The {city.name} contractors who run jobs at a high standard during the pilot phase get first dibs on the {city.name} franchise territory when we open the model.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/apply-for-junk-removal-job"><span className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-teal-700 shadow-lg transition-colors hover:bg-teal-50 font-cta">Apply for {city.name} Slot</span></Link>
            <Link href="#city-work"><span className="inline-block rounded-lg border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 font-cta">How a {city.name} Day Runs</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16" id="city-work">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Owner-Operator Junk Removal in {city.name}, {state.abbreviation}</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">What Running Jobs in {city.name} Looks Like</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">
            Our {city.name} contractors handle <Link href={`/locations/${stateSlug}/${citySlug}`} className="text-teal-700 font-semibold hover:underline">all {SERVICES.length} junk removal services</Link> — from <Link href="/services/furniture-removal" className="text-teal-700 font-semibold hover:underline">furniture pickup</Link> to <Link href="/services/estate-cleanouts" className="text-teal-700 font-semibold hover:underline">full estate cleanouts</Link>. See <Link href="/pricing" className="text-teal-700 font-semibold hover:underline">how our $200/hr customer pricing works</Link> and <Link href="/about" className="text-teal-700 font-semibold hover:underline">why we&apos;re different</Link>.
          </p>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-slate-700">
            <p>As a {city.name} contractor, you run jobs directly for local homeowners, businesses, property managers, and estate executors. You load items, identify resale value, present appraisals to customers in real time, and deliver an experience that gets 5-star reviews. Local knowledge — {city.name} neighborhoods, dump sites, recycling centers, the local resale market — makes every job faster and every appraisal more accurate. The {city.name} operators who develop that local expertise the fastest are the ones we want as franchise owners when we open the model.</p>
            <p>The job is physical — lifting, carrying, loading, driving across {city.name} and the surrounding metro. It is also a thinking job. You learn to tell the difference between a $50 IKEA bookshelf and a $500 Pottery Barn one. You learn which appliances hold value in {city.name} and which electronics have active resale markets in {state.abbreviation}. You learn which neighborhoods reliably generate high-resale loads versus pure-volume hauls. That appraisal skill is what makes this role fundamentally different from every other hauling gig in {city.name}, and it&apos;s what drives the resale share that turns a good operator into a top earner.</p>
            <p>You&apos;re paid $100/hr per man, with your labor share landing in your bank account within 30 minutes of job completion. Items we resell from your loads — half the proceeds come back to you, paying as items move (usually inside 30 days). You pick your jobs from the queue — the ones that fit your schedule, your truck or trailer, and your route through {city.name}.</p>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">How the Pay Works in {city.name}</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">$100/hr + 50% Resale, Paid in 30 Minutes</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">We charge customers $200/hr per man. You keep $100/hr per man for labor. The platform takes the other $100/hr to cover customer acquisition, dispatch, the booking system, customer support, insurance overhead, and the resale supply chain. On top of the hourly, every item from your {city.name} loads that resells nets you 50% of the profit.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">The hourly</h3>
              <p className="mt-3 text-sm text-slate-600">$100 per man-hour worked in {city.name}. When you close out a job in the app, the customer&apos;s card is charged automatically, the platform takes its share, and your labor cut is pushed to your linked bank account or debit card within 30 minutes. No invoicing, no chasing payment, no net-30 wait.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">The resale share</h3>
              <p className="mt-3 text-sm text-slate-600">Every item from your {city.name} loads with resale value goes to the partner network. When it sells, the net (sale price minus listing fees, shipping, storage) is split 50/50 between you and the company. Resale share lands in your account as items move — most inside 30 days.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">No invoice chase</h3>
              <p className="mt-3 text-sm text-slate-600">The platform handles every payment. Customer&apos;s card is captured at booking and charged automatically at job completion. If a customer disputes, the platform handles the dispute — not you. You still get paid your hourly out of platform reserves while it&apos;s investigated.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">The Resale Side — Where {city.name} Top Operators Get Rich</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">Resale Value Is the Difference Between $5K and $25K a Month</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">Most {city.name} loads contain $100–$500 of resaleable value. Estate cleanouts and office cleanouts in {city.name} routinely contain $2,000–$10,000+. Your hourly pays the bills — your resale share is what compounds.</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
            <p><strong>What counts as resaleable:</strong> Furniture in usable condition (solid wood, leather, name brands like Pottery Barn, West Elm, Restoration Hardware, Ethan Allen — they hold 30–60% of retail value). Working appliances (fridges, washers, dryers, ovens, dishwashers — {city.name} landlords and flippers buy these constantly, especially stainless steel). Electronics under five years old (TVs, gaming consoles, computers, monitors, audio gear — Apple holds value exceptionally well). Power tools (DeWalt, Milwaukee, Makita, Ridgid — 40–70% of retail). Exercise equipment (Pelotons, Bowflexes, Concept2 rowers). Musical instruments. Outdoor furniture and grills. Bicycles. Antiques. Collectibles. Anything with a brand name and an active {state.abbreviation} buyer.</p>
            <p><strong>How the on-site appraisal works:</strong> You log the item in the app with a photo. The app pulls live comparable sales data from eBay, Facebook Marketplace, and Mercari — what the same item sold for in the last 30, 60, and 90 days. You see a suggested appraisal range, you confirm, the customer sees the same data and approves their 50% credit. Sub-30 seconds per item. The customer watches their bill go down live as you work. They love it. Your ticket size goes up.</p>
            <p><strong>What resale earnings look like per job in {city.name}:</strong> A small apartment cleanout might have $200 resale net = $100 in your pocket on a 90-minute job. A typical {city.name} residential cleanout: $400–$800 resale net = $200–$400 to you. A high-end {city.name} home or estate cleanout: $2,000–$8,000+ resale net = $1,000–$4,000+ to you on a single job. Office cleanouts with name-brand chairs, standing desks, and IT gear can exceed $10,000 resale net. The Herman Miller chairs from a 30-person {city.name} office: $9,000–$15,000 retail, $4,500–$7,500 resale, $2,250–$3,750 to you on top of your hourly.</p>
            <p><strong>The compounding effect:</strong> The longer you run jobs in {city.name}, the better you get at spotting value. The top operators develop an eye for sleeper items — a vintage stereo receiver that looks like garbage but resells for $300, a dusty mid-century chair worth $1,500, a tool box with $400 of Snap-On hand tools. That skill compounds. Your resale checks grow month over month. After six months, top {city.name} operators are earning more from resale than from hourly. These are the operators we want as {city.name} franchise owners.</p>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Franchise Track in {city.name}</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">{city.name} Pilot Operators Become {city.name} Franchise Owners</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">We are the first junk removal company that pays customers back for the resale value of their items. That model is patentable, defensible, and once it&apos;s proven at scale it becomes a franchise that sells for real territory fees. The 1099 pilot is the proving ground — and the {city.name} pilot operators are the ones we want as the {city.name} franchise owner.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">First right of refusal on {city.name} territory</h3>
              <p className="mt-3 text-sm text-slate-600">Contractors who run {city.name} jobs at a high standard during the pilot — 4.8+ star average, on-time arrivals, accurate appraisals, no major customer complaints, steady volume — get a private invitation to convert the {city.name} operating area into an exclusive franchise territory. Exclusivity, full appraisal training, the booking inflow, brand rights, the resale supply chain, and operating support. Pilot operators get grandfathered pricing on franchise terms.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">The {city.name} system already works</h3>
              <p className="mt-3 text-sm text-slate-600">Dispatch, customer acquisition (SEO across {city.name} and the rest of {state.name}, paid ads, the booking platform), the appraisal pipeline, the resale partner network, payments, customer support, insurance — operational and serving paying customers right now. You are not co-founding anything. You are stepping into a working system that already books {city.name} jobs daily.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Requirements for {city.name} Contractor Jobs</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">What We&apos;re Looking For in {city.name}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">
            Owner-operator role. You bring the equipment, we bring the customers, the appraisal training, the payment infrastructure, and the resale pipeline. See our <Link href="/careers" className="text-teal-700 font-semibold hover:underline">main careers page</Link> for full details on the pay structure and franchise track.
          </p>
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Pickup truck OR trailer (trailer is the minimum; pickup with trailer is ideal; box truck is best)",
                "Valid driver's license and clean driving record (MVR check required)",
                "Proof of vehicle insurance with adequate liability coverage",
                "Ability to lift 50+ lbs repeatedly across a full workday",
                "Smartphone with reliable data plan for accepting jobs, GPS, and on-site appraisals",
                "Pass background check (felonies for theft, fraud, or violence are disqualifying)",
                "Available weekends (busiest days in {city.name} — at least one weekend day per week)",
                "1099 — you handle your own taxes, fuel, vehicle maintenance, and dump fees",
                "Willing to learn the appraisal system to a high standard within the first 30 days",
                "Comfortable interacting with {city.name} customers in their homes and explaining the resale credit process",
              ].map((req) => (
                <div key={req} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-teal-600 mt-0.5 shrink-0">✓</span>
                  <span>{req.replace("{city.name}", city.name)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">A Day in the Life — {city.name}</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">How a {city.name} Work Day Runs</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">No central dispatch yard, no morning roll-call. Jobs come to your phone, you decide which to take, you handle them with your own truck or trailer on your own {city.name} route.</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
            <p><strong>Jobs come to you:</strong> When a {city.name} customer books, the job hits your app within seconds. Address, items, photos if uploaded, estimated hours, expected payout, customer&apos;s preferred time window. Accept or pass — passed jobs flow to the next available {city.name} contractor.</p>
            <p><strong>Run the job:</strong> Show up on time, walk the cleanout with the customer, agree on what&apos;s going, what&apos;s staying, what has resale potential. Load the truck. As you find items with resale value, you scan, the app pulls comp data, you confirm the appraisal, the customer&apos;s 50% credit posts to their invoice in real time. Their bill goes down as you work.</p>
            <p><strong>Dump or resale routing:</strong> Non-value items go to the {city.name} dump or transfer station — those fees come out of your hourly (which is why we built the buffer into the rate). Items with resale value get routed to the partner network. The app tells you exactly where to drop each one.</p>
            <p><strong>Mark complete, get paid:</strong> Job done, you mark it complete in the app. Customer&apos;s card is charged automatically. Within 30 minutes, your hourly share lands in your bank account. Resale share starts moving when items sell — usually inside 30 days.</p>
            <p><strong>Repeat or call it a day:</strong> Open your app, see what else is in the {city.name} queue. Take it or close out. Average solo operator runs 2–4 jobs per work day. Two-man crew can do 4–6. Top {city.name} operators chain 6–8 on a hot day.</p>
          </div>
        </div>
      </section>

      {office && <OfficeBlock office={office} cityName={city.name} />}

      {nearbyCities.length > 0 && (
        <section className="bg-section-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Also Hiring Near {city.name}</p>
            <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">Junk Removal Jobs Near {city.name}, {state.abbreviation}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
              We&apos;re hiring contractors across {state.name}. See <Link href={`/careers/${stateSlug}`} className="text-teal-700 font-semibold hover:underline">all {state.name} positions</Link>.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {nearbyCities.map((c) => (
                <Link key={c.slug} href={`/careers/${stateSlug}/${c.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-3 text-center transition-all hover:border-teal-400 hover:shadow-md">
                  <p className="font-bold text-slate-900 text-sm group-hover:text-teal-700">{c.name}</p>
                  <p className="mt-0.5 text-xs text-teal-600">Now hiring</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Apply for Junk Removal Contractor Position in {city.name}</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 font-heading">Apply Now — {city.name}, {state.abbreviation}</h2>
              <p className="mt-4 text-base text-slate-600">Fill out the form. We&apos;ll get back to you within 48 hours. {city.name} pilot operators get first dibs on the {city.name} franchise territory.</p>
              <div className="mt-6 space-y-3">
                <div className="rounded-lg bg-white border border-slate-200 p-4">
                  <p className="text-2xl font-bold text-teal-700 font-heading">$100/hr per man</p>
                  <p className="text-sm text-slate-600">Paid within 30 minutes of job completion</p>
                </div>
                <div className="rounded-lg bg-white border border-slate-200 p-4">
                  <p className="text-2xl font-bold text-teal-700 font-heading">50% of resale</p>
                  <p className="text-sm text-slate-600">Items we resell from your loads — pays as items move</p>
                </div>
                <div className="rounded-lg bg-white border border-slate-200 p-4">
                  <p className="text-2xl font-bold text-teal-700 font-heading">Franchise track</p>
                  <p className="text-sm text-slate-600">Pilot operators get first dibs on {city.name} territory</p>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p>✓ Truck or trailer (trailer minimum)</p>
                  <p>✓ Valid driver&apos;s license &amp; clean record</p>
                  <p>✓ Vehicle insurance</p>
                  <p>✓ Smartphone with data plan</p>
                  <p>✓ Pass background check</p>
                  <p>✓ 18+ years old</p>
                </div>
              </div>
            </div>
            <div>
              <JobApplicationForm city={city.name} state={state.abbreviation} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

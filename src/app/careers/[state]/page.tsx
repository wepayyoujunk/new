import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STATES, getStateBySlug } from "@/data/cities";
import { getOfficeByState } from "@/data/offices";
import { OfficeBlock } from "@/components/OfficeBlock";
import { CtaButtons } from "@/components/CtaButtons";
import { JobApplicationForm } from "@/components/JobApplicationForm";

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) return {};
  return {
    title: `Junk Removal Contractor Jobs in ${state.name} — 1099 Owner-Operators, Truck or Trailer, Paid in 30 Minutes`,
    description: `Run junk removal jobs in ${state.name} as a 1099 contractor. $100/hr per man + 50% of items we resell, paid within 30 minutes of job completion. ${state.cities.length} active cities. Pilot operators get first dibs on franchise territory.`,
    alternates: { canonical: `/careers/${stateSlug}` },
  };
}

export default async function StateJobsPage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) notFound();
  const office = getOfficeByState(stateSlug);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">Now Hiring 1099 Contractors in {state.cities.length} {state.abbreviation} Cities — Franchise Track</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">
            Junk Removal Contractor Jobs in <span className="gradient-text">{state.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
            Have a truck or trailer in {state.name}? We hand you the customers. You run the job, keep $100/hr per man, plus 50% of items we resell — and your labor share hits your bank account within 30 minutes of job completion. Pilot operators get first dibs on a franchise territory once we open the franchise model in {state.abbreviation}.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/apply-for-junk-removal-job"><span className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-teal-700 shadow-lg transition-colors hover:bg-teal-50 font-cta">Apply for {state.name} Slot</span></Link>
            <Link href="#why-state"><span className="inline-block rounded-lg border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 font-cta">How the Pay Works</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16" id="why-state">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Owner-Operator Junk Removal in {state.abbreviation}</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">Why Run Jobs With Us in {state.name}?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">
            We&apos;re not a typical hauling company. We send you booked, paid jobs in your {state.abbreviation} territory — you bring the truck or trailer and run them on your schedule. The customer pays through the app. Your hourly share hits your bank account within 30 minutes. Your resale share follows as items move. Learn about our <Link href="/pricing" className="text-teal-700 font-semibold hover:underline">$200/hr customer pricing model</Link>, explore <Link href="/services" className="text-teal-700 font-semibold hover:underline">all 34 services</Link> you&apos;ll deliver, and see our <Link href={`/locations/${stateSlug}`} className="text-teal-700 font-semibold hover:underline">{state.name} office</Link>.
          </p>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-slate-700">
            <p>Running jobs in {state.name} as a 1099 owner-operator means independence with a back office. You decide which jobs to take, when to work, and how to route your day. We handle the customer acquisition (SEO across {state.cities.length} {state.abbreviation} cities, paid ads, the booking platform), the payment processing, the on-site appraisal tooling, and the resale logistics — you just show up, run the job well, and the system pushes money to your account.</p>
            <p>{state.cities.length} cities are active in {state.name} and the network is growing. More contractors means more booking volume routed locally — busy markets mean steady work for the operators who consistently show up and run jobs at a high standard. Top contractors in {state.name} are already running 4–6 jobs per work day with consistent resale upside.</p>
            <p>This is the pilot phase of a franchise model. The contractors who run jobs in {state.name} during the pilot — clean work, accurate appraisals, on-time arrivals, high customer ratings — get first right of refusal on franchise territories in their metro area once we open the franchise model. You will not be bidding against strangers for a {state.abbreviation} territory. You will have already earned it by running real jobs.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "$100/hr per man", desc: "Paid within 30 minutes of job completion. Bring a helper, they get $100/hr too." },
              { title: "50% of resale net", desc: "Items you bring in that we resell — half is yours. Pays as items sell, usually inside 30 days." },
              { title: "Your schedule", desc: "Accept the jobs that fit. Pass the rest. No quotas, no shifts, no morning roll-call." },
              { title: "Pre-booked customers", desc: "Customer has already paid the deposit. Address, items, hours — all in the app before you accept." },
              { title: "Run multiple jobs/day", desc: `Most ${state.abbreviation} contractors run 2–4 jobs per day. Top operators chain 6+.` },
              { title: "Franchise track", desc: `Pilot operators in ${state.name} get first dibs on exclusive franchise territories when we open the model.` },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-400 hover:shadow-md">
                <h3 className="text-base font-bold text-slate-900 font-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">How the Pay Works in {state.abbreviation}</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">$100/hr Labor + 50% Resale — Paid in 30 Minutes</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">We charge the customer $200/hr per man. You keep $100/hr per man for labor. The platform takes the other $100/hr to cover dispatch, customer acquisition, the booking system, customer support, insurance overhead, and the resale supply chain that creates the 50% resale credit customers get. On top of the hourly, every item from your load that resells nets you 50% of the profit. That part pays as items move — usually within 30 days.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">The hourly</h3>
              <p className="mt-3 text-sm text-slate-600">$100 per man-hour worked. When you close out the job in the app, the customer&apos;s card is charged automatically, the platform takes its share, and your labor cut is pushed to your linked bank account or debit card within 30 minutes. No invoicing the customer, no chasing payment, no net-30 wait.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">The resale share</h3>
              <p className="mt-3 text-sm text-slate-600">Every item from your load with resale value goes to the partner network. When it sells, the net (sale price minus listing fees, shipping, storage) is split 50/50 between you and the company. Resale share lands in your account as items move — most inside 30 days, some same-week.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">No invoice chase</h3>
              <p className="mt-3 text-sm text-slate-600">The platform handles every payment. Customer&apos;s card is captured at booking and charged at job completion. If a customer disputes, the platform handles the dispute — not you. You still get paid your hourly out of platform reserves while it&apos;s being worked out.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">The Resale Side — Where Top {state.abbreviation} Operators Get Rich</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">Resale Value Is the Difference Between $5K/Month and $25K/Month</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">In {state.name}, the operators who treat the resale share as a real revenue stream are out-earning the operators who just chase hourly volume. Here&apos;s what counts, how the split works, and what the numbers actually look like.</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
            <p><strong>What counts as resaleable in {state.name}:</strong> Furniture in usable condition (solid wood, leather, name brands like Pottery Barn, West Elm, Restoration Hardware, Ethan Allen, Crate &amp; Barrel hold 30–60% of retail value for years). Working appliances (fridges, washers, dryers, ovens, dishwashers — landlords and flippers buy these constantly, especially stainless steel). Electronics under five years old (flat-screen TVs, gaming consoles, computers, monitors, audio gear — Apple products hold value exceptionally well). Power tools (DeWalt, Milwaukee, Makita, Ridgid — 40–70% of retail). Exercise equipment (Pelotons, Bowflexes, Concept2 rowers, full home gyms). Musical instruments. Outdoor furniture and grills. Bicycles. Antiques. Collectibles. Anything with a brand name and a working buyer in the {state.name} market.</p>
            <p><strong>How the on-site appraisal works:</strong> You log the item in the app with a quick photo. The app pulls live comparable sales data from eBay, Facebook Marketplace, and Mercari — what the same item sold for in the last 30, 60, and 90 days. You see a suggested appraisal range, you confirm, the customer sees the same data and approves their 50% credit. The whole process takes under 30 seconds per item. The customer watches their bill go down in real time as you work. They love it. Your average ticket size goes up.</p>
            <p><strong>What resale earnings look like per job in {state.abbreviation}:</strong> A small apartment cleanout might have $200 in resale net = $100 in your pocket on a 90-minute job. A typical {state.name} residential cleanout: $400–$800 resale net = $200–$400 to you. A high-end home or estate cleanout in a strong {state.abbreviation} market: $2,000–$8,000+ resale net = $1,000–$4,000+ to you on a single job. Office cleanouts with name-brand chairs, standing desks, and IT gear can exceed $10,000 resale net. The Herman Miller chairs from a 30-person {state.name} office: $9,000–$15,000 retail, $4,500–$7,500 resale, $2,250–$3,750 to you on top of your hourly.</p>
            <p><strong>Why this beats traditional junk removal:</strong> Old-school haulers make money on volume — fill trucks, dump everything, charge by cubic yard. The math is brutal: dump fees eat the margin, the customer feels gouged, growth requires more trucks. Our model flips it. Every load has hidden value. The operator who is best at spotting it makes the most money. There is no cap on the resale share.</p>
            <p><strong>The compounding effect:</strong> The longer you run jobs in {state.name}, the better you get at spotting value. Top operators develop an eye for sleeper items — a vintage stereo receiver that looks like garbage but resells for $300, a dusty mid-century chair worth $1,500, a tool box that contains $400 of Snap-On hand tools. That skill compounds. Your resale checks grow month over month. After six months, top operators are earning more from resale than hourly. After twelve months, the resale share alone can match a full-time salary.</p>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Why the Franchise Track Matters</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">{state.name} Pilot Operators Become {state.abbreviation} Franchise Owners</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">We are not the eight thousandth junk removal company. We are the first one that pays customers back for the resale value of their items, and that model is the kind of thing that becomes a national franchise. The 1099 pilot is how we prove it at scale before we open territories.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">First right of refusal on {state.abbreviation} territories</h3>
              <p className="mt-3 text-sm text-slate-600">Contractors who run {state.name} jobs at a high standard during the pilot — 4.8+ star average, on-time arrivals, accurate appraisals, no major customer complaints, steady volume — get a private invitation to convert their operating area into an exclusive franchise territory. The territory includes exclusivity (no other We Pay You Junk Removal operator in your zone), full appraisal training, the booking inflow, brand rights, the resale supply chain, and operating support. Pilot operators get grandfathered pricing on franchise terms.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">The system already works in {state.abbreviation}</h3>
              <p className="mt-3 text-sm text-slate-600">Dispatch, customer acquisition (SEO across {state.cities.length} {state.name} cities, paid ads, the booking platform), the appraisal pipeline, the resale partner network, payments, customer support, insurance — operational and serving paying customers right now. You are not co-founding anything. You are stepping into a working system that already books jobs daily and deciding whether you want a franchise in your city before someone else does.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Hiring in {state.cities.length} {state.name} Cities</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">Cities Hiring in {state.name}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">Click your city to see the local listing and apply. Every {state.name} city has open contractor slots and is currently routing booked customer jobs.</p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {state.cities.map((city) => (
              <Link key={city.slug} href={`/careers/${stateSlug}/${city.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-3 text-center transition-all hover:border-teal-400 hover:shadow-md">
                <p className="font-bold text-slate-900 text-sm group-hover:text-teal-700">{city.name}</p>
                <p className="mt-0.5 text-xs text-teal-600">Now hiring</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Junk Removal Contractor Requirements in {state.abbreviation}</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">Requirements — What You Need to Apply</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">
            Owner-operator role. You bring the truck or trailer, we bring the customers, the appraisal training, the payment infrastructure, and the resale pipeline. See our <Link href="/about" className="text-teal-700 font-semibold hover:underline">company values</Link> and <Link href="/services" className="text-teal-700 font-semibold hover:underline">the services you&apos;ll deliver in {state.name}</Link>.
          </p>
          <div className="mx-auto mt-8 max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { req: "Truck OR trailer", detail: "Trailer is the minimum — pickup with trailer is ideal, box truck is best" },
              { req: "Valid driver's license", detail: "Clean driving record required — we run an MVR check" },
              { req: "Vehicle insurance", detail: "Proof of liability coverage required at sign-up" },
              { req: "Lift 50+ lbs repeatedly", detail: "Physical job — every day, every load" },
              { req: "Smartphone with data plan", detail: "Accepting jobs, GPS, and on-site appraisals" },
              { req: "Pass background check", detail: "Felonies for theft, fraud, or violence are disqualifying" },
              { req: "Available weekends", detail: `Busiest days in ${state.abbreviation} — at least one weekend day per week` },
              { req: "18+ years old", detail: "Must be legally eligible to work in the US" },
            ].map((item) => (
              <div key={item.req} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-teal-600 mt-0.5 shrink-0">✓</span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.req}</p>
                  <p className="text-xs text-slate-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Realistic Earnings in {state.abbreviation}</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">What {state.name} Contractors Actually Take Home</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">Numbers below reflect real operator data from active markets. Your earnings depend on hours, vehicle, market density, and how good you get at the resale side.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Part-time solo</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 font-heading">$3,500–$6,000/mo</h3>
              <p className="mt-3 text-sm text-slate-600">15–20 hours/week, mostly weekends. Solo operator with pickup + trailer. 2–3 jobs per work day in {state.abbreviation}. Hourly plus average resale share.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 ring-2 ring-teal-600">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Full-time solo or 2-man</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 font-heading">$8,000–$14,000/mo</h3>
              <p className="mt-3 text-sm text-slate-600">35–45 hours/week. Solo with a strong appraisal eye or 2-man crew. 3–5 jobs per work day. Resale share starts compounding around month 3.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Top-tier {state.abbreviation} operator</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 font-heading">$15,000–$30,000+/mo</h3>
              <p className="mt-3 text-sm text-slate-600">Multi-truck, multi-crew, dialed in on resale. Chasing estate and office cleanouts. Franchise-track candidates. Resale share matches or exceeds hourly.</p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-500">Earnings are gross 1099 income before your business expenses (fuel, dump fees, vehicle maintenance, insurance, taxes). Numbers reflect real operator data from active markets. We will not promise you what you&apos;ll make in {state.name} — we will tell you exactly what the math looks like and let you decide.</p>
        </div>
      </section>

      {office && <OfficeBlock office={office} />}

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Apply for Junk Removal Contractor Position in {state.name}</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 font-heading">Apply Now — {state.name}</h2>
              <p className="mt-4 text-base text-slate-600">
                Fill out the form. We&apos;ll get back to you within 48 hours. Bring your truck/trailer info, your insurance, and a clean driving record. Pilot operators get first dibs on {state.abbreviation} franchise territories.
              </p>
              <div className="mt-6 space-y-4">
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
                  <p className="text-sm text-slate-600">Pilot operators get first dibs on {state.abbreviation} territory</p>
                </div>
              </div>
            </div>
            <div>
              <JobApplicationForm state={state.name} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

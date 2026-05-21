import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/CtaButtons";
import { CITY_COUNT, STATE_COUNT } from "@/data/content";

export const metadata: Metadata = {
  title: "Junk Removal Contractor Jobs — 1099 Owner-Operators With a Truck or Trailer | Paid in 30 Minutes",
  description: "Run junk removal jobs as a 1099 contractor with your own truck or trailer. $100/hr per man + 50% of items we resell, paid within 30 minutes of job completion. Pilot operators get first dibs on our franchise rollout. 900+ cities, all 50 states.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">1099 Contractor Pilot — Franchise Track</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">Junk Removal <span className="gradient-text">Contractor Jobs</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">$100/hr per man + 50% of items we resell. Paid within 30 minutes of job completion. We&apos;re building a national network of independent contractors in {CITY_COUNT} cities across all {STATE_COUNT} states. The first wave of contractors becomes the first wave of franchise owners. If you have a truck or trailer and want to run jobs on your own schedule, this is the pilot.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/apply-for-junk-removal-job"><span className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-teal-700 shadow-lg transition-colors hover:bg-teal-50 font-cta">Apply Now — Open Application Form</span></Link>
            <Link href="#how-pay-works"><span className="inline-block rounded-lg border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 font-cta">How the Pay Works</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16" id="how-pay-works">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">$100/hr Per Man + 50% Resale Share — Paid in 30 Minutes</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">The Pay, Without the Bullshit</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">We charge customers $200/hr per man. We pay you $100/hr per man on every hour you work — your labor money hits your account within 30 minutes of job completion, not at the end of the week, not on the 15th, not after net-30. The other half covers truck fuel for the company-routed leg, the customer&apos;s 50% resale credit, dispatch software, advertising, customer support, insurance overhead, and the platform that keeps your phone ringing with paying customers. On top of the hourly, you get 50% of whatever the company nets when an item from your load resells. That part pays as items move — usually within 30 days. No invoicing, no chasing customers, no waiting on accounts payable. The platform charges the customer&apos;s card at the end of the job, takes its cut, and pushes your half to your bank account before you&apos;ve packed up your tools.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">$100/hr per man</h3>
              <p className="mt-2 text-sm text-slate-600">You&apos;re paid $100 per man-hour worked. Bring a helper, they&apos;re also paid $100/hr through your account — you decide whether to W-2 them, 1099 them, or split cash. Solo operator on a 2-hour job nets $200 in labor. Two-man crew on a 3-hour job nets $600 in labor before resale share.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">50% of resale net</h3>
              <p className="mt-2 text-sm text-slate-600">Every item you pull from a load that has resale value goes to our resale partner. When it sells, the net (sale price minus listing fees and shipping) is split 50/50 between you and the company. A $600 fridge that resells for $400 net puts $200 in your pocket on top of your hourly.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">Paid in 30 minutes</h3>
              <p className="mt-2 text-sm text-slate-600">The customer&apos;s card is charged when you mark the job complete in the app. The platform pulls its share, your hourly payout lands in your linked bank account or debit card within 30 minutes. Resale share pays as items sell. No invoice chase, no net-30, no waiting on a paycheck cycle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Why This Pilot Matters</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">You&apos;re Not Just Running Jobs — You&apos;re Helping Stress-Test the Franchise Model</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">We are not the eight thousandth junk removal company. We are the first one that pays customers back for the resale value of their items. That model is patentable, defensible, and — once we prove it at scale — a franchise that will sell for territory fees in every metro in America. The 1099 contractor program is the proving ground.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">Pilot operators get first dibs on franchise territories</h3>
              <p className="mt-3 text-sm text-slate-600">Contractors who run jobs at a high standard during the pilot phase — clean cab, on-time arrivals, accurate appraisals, no customer complaints, consistent volume — get first right of refusal to convert to a franchise owner in their territory. The territory comes with exclusivity (no other We Pay You Junk Removal contractor in your zone), the full appraisal training, the booking inflow, brand rights, the resale supply chain, and operating support. You will not have to pay a six-figure franchise fee to a stranger — you will have already earned the spot by running jobs and proving you can carry the brand.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">The system is already built</h3>
              <p className="mt-3 text-sm text-slate-600">Dispatch, customer acquisition (SEO across {CITY_COUNT}+ cities, paid ads, the booking platform), the appraisal pipeline, the resale partner network, payments, customer support, insurance — all of it is operational and serving paying customers right now. You are not co-founding anything. You are stepping into a working system that already books jobs daily. Your job is to run those jobs well, learn the appraisal side cold, and decide whether you want a franchise in your city before someone else does.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">Resale is where the real margin lives</h3>
              <p className="mt-3 text-sm text-slate-600">Old-school junk removal makes money on volume — fill trucks, dump everything, charge by cubic yard. The math is brutal: dump fees eat the margin, the customer feels gouged, and the only way to grow is to hire more trucks. Our model flips that. Every load contains items with real resale value — furniture, appliances, tools, electronics, exercise equipment, musical instruments, sports gear — and the operator who is best at spotting and pricing those items makes the most money. The hourly is the floor. The resale share is the ceiling, and there is no cap on it.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">Why we&apos;re launching as 1099 first</h3>
              <p className="mt-3 text-sm text-slate-600">A contractor program lets us test the model in dozens of markets simultaneously without building out a corporate fleet, hiring W-2 crews, or signing on franchisees who have not yet proven they can run a job. Every contractor in the pilot is a live data point — what works in Phoenix is not what works in Boston, and we&apos;re learning that in parallel. The pilot also lets you test us. You run jobs, see the booking inflow, see the resale checks land, and decide on your own timeline whether you want to convert to a franchise owner with an exclusive territory. No commitment, no buy-in, no risk other than your time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">The Resale Side, Explained Properly</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">The Resale Share Is Where Top Operators Actually Get Rich</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">Most loads have $100–$500 of resaleable value buried in them. Estate cleanouts and office cleanouts can easily contain $2,000–$10,000+. Your hourly pays the bills — the resale share is what compounds.</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
            <p><strong>What counts as a resaleable item:</strong> Furniture in usable condition (solid wood, leather, name brands like Pottery Barn, West Elm, Restoration Hardware, Ethan Allen, Crate &amp; Barrel — these hold 30–60% of retail value for years). Working appliances (fridges, washers, dryers, ovens, dishwashers — landlords and flippers buy these constantly, especially stainless steel). Electronics under five years old (flat-screen TVs, gaming consoles, computers, monitors, audio gear — Apple products hold value exceptionally well). Power tools (DeWalt, Milwaukee, Makita, Ridgid hold 40–70% of retail). Exercise equipment (Pelotons, Bowflexes, Concept2 rowers, full home gyms — Pelotons routinely resell for $500+). Musical instruments. Outdoor furniture and grills. Bicycles. Antiques. Collectibles. Anything with a brand name and a working buyer.</p>
            <p><strong>How the split actually works:</strong> You log the item in the app on-site with a quick photo and your appraisal. The customer sees the appraisal in real time and approves it (their 50% credit comes off their bill immediately). The item goes to the resale partner — could be a partnered consignment shop, a peer-to-peer marketplace listing handled by the resale team, or a direct sale to a known buyer in their network. The sale price minus listing fees, shipping, and storage gets netted. That net is split 50/50 between you and the company. You see every transaction in your dashboard — item, listing date, sale price, fees deducted, your half, and when it deposits to your bank.</p>
            <p><strong>Realistic resale earnings per job:</strong> A small apartment cleanout might have a $200 resale net — that&apos;s an extra $100 in your pocket on a 90-minute job. A typical residential cleanout: $400–$800 resale net = $200–$400 to you. A high-end home or estate cleanout: $2,000–$8,000+ resale net = $1,000–$4,000+ to you on a single job. An office cleanout with name-brand chairs, standing desks, and IT gear can easily exceed $10,000 resale net. The Herman Miller chairs alone in a 30-person office: $9,000–$15,000 retail, $4,500–$7,500 resale, $2,250–$3,750 to you on top of your hourly.</p>
            <p><strong>Why customers love this and competitors hate it:</strong> Customers stop seeing junk removal as a sunk cost and start seeing it as a way to recover some of what they paid for the stuff originally. They tell their friends. They book us again. Our reviews are stacked with people saying things like &quot;the crew gave me $340 in credits on my own cleanout&quot; — that copy sells more jobs than any ad we could buy. Competitors cannot match it without rebuilding their entire pricing model and resale supply chain, which most are not capable of doing.</p>
            <p><strong>The training:</strong> You will not be guessing at appraisals. We give you a market-comp tool inside the app — type the brand and model, and you see live comparable sales data from eBay, Facebook Marketplace, and Mercari. You see what the same item sold for in the last 30, 60, and 90 days. The app suggests an appraisal range. You confirm. Customer sees the same data. It is fast (sub-30 seconds per item), transparent, and impossible to argue with.</p>
            <p><strong>The compounding effect:</strong> The longer you run jobs, the better you get at spotting value. The best contractors develop an eye for sleeper items — a vintage stereo receiver that looks like garbage but resells for $300, a dusty mid-century chair worth $1,500, a box of old tools that contains a $400 Snap-On wrench set. That skill compounds. Your resale checks grow month over month. After six months, top operators are earning more from their resale share than their hourly. After twelve months, the resale share alone can match a full-time salary.</p>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">What You Need to Apply</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">Requirements</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">This is an owner-operator role. You bring the equipment, we bring the customers, the appraisal training, the payments infrastructure, and the resale pipeline.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "Pickup truck OR trailer (trailer is the minimum — pickup + trailer is better; box truck is best)",
              "Valid driver's license and clean driving record (we run an MVR check)",
              "Proof of vehicle insurance with adequate liability coverage",
              "Ability to lift 50+ lbs repeatedly throughout a workday",
              "Smartphone with reliable data plan for accepting jobs, GPS, and on-site appraisals",
              "Pass a background check (felonies involving theft, fraud, or violence are disqualifying)",
              "Available at least one weekend day per week — that's when the volume hits",
              "1099 — you handle your own taxes, fuel, vehicle maintenance, and dump fees",
              "Comfortable interacting with customers on their property and explaining the resale credit process",
              "Willing to learn the appraisal system to a high standard within the first 30 days",
            ].map((req) => (
              <div key={req} className="flex items-start gap-3">
                <span className="text-teal-600 mt-0.5">✓</span>
                <span className="text-sm text-slate-700">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">How a Day Actually Runs</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">A Day in the Life</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">No central dispatch yard, no morning roll-call, no boss telling you where to go. Jobs come to your phone, you decide which to take, and you handle them with your own truck or trailer on the schedule you set.</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
            <p><strong>Jobs come to you:</strong> When a customer in your area books, the job hits your app within seconds of their confirmation. You see the address, the items they listed, photos if they uploaded any, the estimated hours, the expected payout (hourly minimum plus a resale-potential estimate), and the customer&apos;s preferred time window. Accept it or pass — passed jobs flow to the next available contractor.</p>
            <p><strong>Confirm and route:</strong> Once you accept, the customer gets an automated text with your ETA and a photo of you and your truck (we pull that from your profile — keeps it personal and safe for the customer). The app routes you to the address. You can chain multiple jobs back-to-back in the same area to maximize your hourly utilization.</p>
            <p><strong>Run the job:</strong> Show up on time, walk through the cleanout with the customer, agree on what&apos;s going, what&apos;s staying, and what items have resale potential. Load the truck or trailer. As you encounter items with resale value, you scan or photograph them, the app pulls comparable sales data, you confirm the appraisal, and the customer&apos;s 50% credit posts to their invoice in real time. They watch their bill go down as you work.</p>
            <p><strong>Dump or resale routing:</strong> Non-value items go to the local dump or transfer station — those fees come out of your hourly (which is why we built that buffer into the rate). Items with resale value get routed to the partner network — the app tells you exactly where to drop each one based on category, value, and your route. Some items go to a local consignment partner, some to a regional warehouse, some get listed online by our resale team.</p>
            <p><strong>Mark complete, get paid:</strong> When the job is done, you mark it complete in the app. The customer&apos;s card is charged automatically. Within 30 minutes, your hourly share lands in your linked bank account or debit card. The customer gets a receipt that shows hours worked, resale credits applied, and net paid. Your resale share starts moving when items sell — usually inside 30 days.</p>
            <p><strong>Repeat or call it a day:</strong> Open your app, see what else is in the queue. Take it or close out. Average solo operator runs 2–4 jobs per work day. Two-man crew can do 4–6. Top operators chain 6–8 in a single day when volume is hot — weekends, end of month, late spring.</p>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Realistic Earnings Math</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">What You Actually Take Home</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600">Numbers below are real averages from active operator data — your mileage will vary based on market, hours, vehicle, and how good you get at spotting resale value.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Part-time solo</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 font-heading">$3,500–$6,000/mo</h3>
              <p className="mt-3 text-sm text-slate-600">15–20 hours/week, mostly weekends. Solo operator with a pickup + trailer. 2–3 jobs per work day. Includes hourly + average resale share. Less than a full-time gig at McDonald&apos;s in hours, more than most full-time jobs in pay.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 ring-2 ring-teal-600">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Full-time solo or 2-man</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 font-heading">$8,000–$14,000/mo</h3>
              <p className="mt-3 text-sm text-slate-600">35–45 hours/week. Solo with a strong appraisal eye, or a 2-man crew. 3–5 jobs per work day. The resale share starts compounding around month 3 once you&apos;ve built your eye for value.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Top-tier operator</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 font-heading">$15,000–$30,000+/mo</h3>
              <p className="mt-3 text-sm text-slate-600">Multi-truck, multi-crew, dialed-in on the appraisal side, chasing estate and office cleanouts. These are the operators on the franchise track. Resale share routinely matches or exceeds hourly. These are also the ones we want as franchisees first.</p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-500">Earnings are gross 1099 income before your business expenses (fuel, dump fees, vehicle costs, insurance, taxes). Numbers reflect real operator data from active markets. We will not promise you what you&apos;ll make — we will tell you exactly what the math looks like and let you decide.</p>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Common Questions</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">FAQ</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700">
            <div>
              <p className="font-bold text-slate-900">Is this really paid in 30 minutes?</p>
              <p className="mt-2">Yes. The customer&apos;s card is charged automatically when you mark the job complete in the app. The platform takes its cut, your hourly share is pushed to your linked debit card or bank account within 30 minutes. We use the same instant-payout infrastructure that rideshare and delivery platforms use. The resale share is the only piece that pays on a different timeline — it pays as items move, usually inside 30 days.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">What if a customer disputes the bill or refuses to pay?</p>
              <p className="mt-2">The customer&apos;s card is captured at booking and pre-authorized for an estimated amount. If a real dispute happens, the platform handles it — not you. You still get paid your hourly out of platform reserves while the dispute is investigated. We almost never see disputes because the customer watches the resale credits roll in live and signs the final invoice on your phone before you leave the property.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">Do I have to use a specific truck?</p>
              <p className="mt-2">No. A pickup with a trailer is the minimum. A flatbed trailer (16+ feet) works. A box truck is ideal. We&apos;ll ask about your vehicle in the application and tell you which job sizes you&apos;re a good fit for in your area.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">How does the franchise track actually work?</p>
              <p className="mt-2">Run jobs as a 1099 contractor at a high standard for 90+ days. Maintain a 4.8+ star average from customers, on-time arrival, accurate appraisals, no major incidents. When you hit those thresholds, you get a private invitation to convert your operating area into an exclusive franchise territory. Franchise terms (territory size, fee, royalty structure, support package) are still being finalized as the pilot runs — pilot operators get first right of refusal and grandfathered pricing.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">Can I bring a helper?</p>
              <p className="mt-2">Yes — encouraged. Two-man crews finish jobs faster and earn more per work day. You bill the customer at $400/hr (two men) and you collect $200/hr in labor. How you split that with your helper is up to you — most operators 1099 them and pay them $20–$30/hr cash, keeping the spread. Larger jobs require two men so you&apos;ll need a helper to be available for those bookings.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">What does the company actually do?</p>
              <p className="mt-2">Generate the customers (SEO across {CITY_COUNT}+ cities, paid advertising, the booking platform, the brand). Train you on appraisal and customer handling. Provide the app, dispatch, GPS, on-site comp data, the resale partner network. Handle payments, refunds, disputes, customer support, accounting reconciliation. Maintain insurance for the platform. Maintain the warranty and guarantee infrastructure that makes customers comfortable letting strangers into their house.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">What if I run jobs poorly?</p>
              <p className="mt-2">You get deactivated. The franchise track is for operators who carry the brand at a high standard. Low ratings, late arrivals, customer complaints, dishonest appraisals — those will get you off the platform fast. We are protecting the brand for the operators who are doing it right.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">Where are you hiring?</p>
              <p className="mt-2">Every city we serve — {CITY_COUNT}+ cities across all {STATE_COUNT} states. Browse <Link href="/locations" className="text-teal-700 font-semibold hover:underline">open locations</Link> to see what&apos;s live in your area, or just apply and we&apos;ll match you to the closest active market.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 py-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">Apply for a Junk Removal Contractor Position</p>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl font-heading">Ready to Run Your Own Jobs?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">Fill out the application. We&apos;ll get back to you within 48 hours. Pilot operators get first dibs on franchise territories. Browse open <Link href="/locations" className="text-teal-200 underline">locations</Link> or check out the <Link href="/services" className="text-teal-200 underline">full service list</Link>.</p>
          <div className="mt-8">
            <Link href="/apply-for-junk-removal-job"><span className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-teal-700 shadow-lg transition-colors hover:bg-teal-50 font-cta">Apply Now — Open Application Form</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

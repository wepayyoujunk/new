import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/CtaButtons";
import { PricingCalculator } from "@/components/PricingCalculator";
import { ValuationHint } from "@/components/ValuationHint";
import { PHONE, PHONE_HREF, SMS_HREF, PRICING, CITY_COUNT } from "@/data/content";

export const metadata: Metadata = {
  title: "Junk Removal Pricing — $200/hr Per Man Flat Rate, Dump Fees Included, 50% Resale Credit (when applicable)",
  description: "Junk removal pricing explained. $200/hr per man flat rate with 1 hour minimum. Dump fees included (an industry first). We credit you 50% (when applicable) of resale value on items worth something. No hidden fees, no contracts.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">The Only Junk Removal Company That Pays You Back</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">
            Junk Removal Pricing<br /><span className="gradient-text">$200/hr Per Man — That&apos;s It</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            One rate. Everything included. Your valuable items earn you money back. Here&apos;s exactly how it works — no fine print, no gotchas.
          </p>
          <CtaButtons variant="dark" />
        </div>
      </section>

      {/* ===== PRICING CALCULATOR ===== */}
      <section className="bg-section-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <PricingCalculator />
          <ValuationHint className="mt-4" />
        </div>
      </section>

      {/* ===== THE RATE ===== */}
      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Flat Rate, Dump Fees Included, No Tiers</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">$200/hr Per Man, 1 Hour Minimum, Everything Included</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">One rate, every day, every job. Dump fees baked in. 50% Resale Credit (when applicable) on every item worth something. See all <Link href="/services" className="text-teal-700 font-semibold hover:underline">34 services</Link> covered at this rate.</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-1 max-w-md mx-auto">
            {Object.entries(PRICING).map(([key, tier]) => (
              <div key={key} className="rounded-xl border-2 border-accent bg-white p-6 text-center shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 font-heading">{tier.label}</h3>
                <p className="mt-2 text-5xl font-bold text-teal-700 font-heading">{tier.price}</p>
                <p className="mt-1 text-sm text-slate-500">{tier.unit}</p>
                <ul className="mt-6 space-y-2 text-sm text-left">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-teal-600 mt-0.5">✓</span>
                      <span className="text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book-junk-removal-service-today" className="mt-6 inline-block w-full rounded-lg bg-accent py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark font-cta">
                  Book Now &amp; Save $10
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-5 text-base leading-relaxed text-slate-700">
            <p>Our pricing is straightforward. $200 per hour per man, with a 1 hour minimum, dump fees included. Not $200 plus a fuel surcharge. Not $200 plus dump fees. Not $200 base with a $50 &quot;heavy item fee&quot; when we pick up your fridge. The crew pulls up, works the job, and the clock runs from the moment they start loading until they finish the walkthrough. If it takes 47 minutes with one man, you pay the 1 hour minimum of $200. If it takes 2 hours with two men, you pay $800 before any resale credits come off the top.</p>
            <p>You watch the clock. There&apos;s nothing to estimate, nothing to dispute, nothing to game. Time is time. Crew size is whatever the job requires. Items with resale value come right off your bill at 50% of appraised value — and if those credits exceed what you owe, we cut you a check.</p>
          </div>
        </div>
      </section>

      {/* ===== THE CREDIT ===== */}
      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">How the 50% Resale Credit (when applicable) Reduces Your Bill</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">50% Resale Credit (when applicable) — Your Stuff Has Value and You Deserve a Cut</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">Every other junk company takes your items and resells the good ones for profit. We split the value with you — 50/50. Here&apos;s how the appraisal works, what items qualify, and why this saves you money on every <Link href="/services" className="text-teal-700 font-semibold hover:underline">service we offer</Link>.</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
            <p>As our crew loads your items, they&apos;re trained to spot value. Not just the obvious stuff — yes, your <Link href="/services/furniture-removal" className="text-teal-700 font-semibold hover:underline">Pottery Barn dining table</Link> has value. But so does that DeWalt drill in the junk drawer, the working <Link href="/services/appliance-removal" className="text-teal-700 font-semibold hover:underline">dishwasher</Link> you&apos;re replacing, and the <Link href="/services/exercise-equipment-removal" className="text-teal-700 font-semibold hover:underline">Bowflex</Link> in the corner of the basement. Our crew knows what sells in your local market because they live here and do this every day.</p>
            <p>When they find something with value, they appraise it right there — not in a warehouse later, not behind closed doors. You see the item, you see the comparable sales data, you see the appraised value, and you approve the credit before it goes on your invoice. 50% of the appraised value comes off your bill. A $400 leather sofa = $200 credit. A $300 working fridge = $150 credit. A $200 set of power tools = $100 credit. Credits stack — the more valuable stuff in your cleanout, the less you pay.</p>
            <p>If your credits add up to more than the hours your crew worked, we don&apos;t just zero out the bill. We hand you a check or send you a digital payment — right there, same day. This happens more than you&apos;d think, especially on <Link href="/services/estate-cleanouts" className="text-teal-700 font-semibold hover:underline">estate cleanouts</Link> and <Link href="/services/office-cleanouts" className="text-teal-700 font-semibold hover:underline">office cleanouts</Link> where the density of valuable items is high.</p>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">What You Pay and How It Adds Up</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">How the Math Works on a Real Job</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">A simple walk-through of what your bill looks like — labor time, dump fees included, and the 50% Resale Credit (when applicable) coming off the top before you pay.</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
            <p><strong>Step 1 — Time:</strong> The clock starts when the crew begins loading. $200 per man, per hour. One man on a small job is $200/hr. Two men on a bigger job is $400/hr. We bill in 15-minute increments after the first hour minimum.</p>
            <p><strong>Step 2 — Dump fees:</strong> Already included in the hourly rate. Nothing extra at the transfer station. Nothing extra for heavy items. Nothing extra for stairs, long carries, or distance to the dump.</p>
            <p><strong>Step 3 — Appraisal:</strong> Anything with resale value gets appraised on the spot. You see the item, you see the value, you approve the credit. 50% of appraised value comes off your bill.</p>
            <p><strong>Step 4 — Final bill:</strong> Hours × $200 per man − resale credits = what you pay. If credits exceed the bill, we pay you the difference. That&apos;s the whole math.</p>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DON'T TAKE ===== */}
      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Hazardous Materials and Items We Cannot Remove</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">What&apos;s Not Included — Items We Can&apos;t Haul</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">We take almost everything, but federal and state regulations prohibit us from handling certain hazardous materials. Here&apos;s what we can&apos;t remove — and where to take it instead. For everything else, <Link href="/services" className="text-teal-700 font-semibold hover:underline">we&apos;ve got you covered</Link>.</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-red-200 bg-white p-6">
              <h3 className="text-lg font-bold text-red-600 font-heading">We Cannot Remove</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span><div><strong>Hazardous chemicals &amp; solvents</strong> — paint thinner, acetone, acids, pesticides, pool chemicals</div></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span><div><strong>Asbestos-containing materials</strong> — requires licensed abatement contractor</div></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span><div><strong>Wet paint &amp; lacquers</strong> — dried/solidified paint cans are OK</div></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span><div><strong>Biological &amp; medical waste</strong> — blood, needles, pharmaceuticals, biohazard materials</div></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span><div><strong>Oil drums &amp; fuel tanks</strong> — above-ground and underground storage tanks</div></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span><div><strong>Full propane tanks</strong> — empty tanks are OK</div></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span><div><strong>Ammunition &amp; explosives</strong> — fireworks, flares, gunpowder</div></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span><div><strong>Compressed gas cylinders</strong> — oxygen, acetylene, nitrogen (empty tanks OK)</div></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✕</span><div><strong>Radioactive materials</strong> — smoke detectors in small quantities are OK</div></li>
              </ul>
            </div>
            <div className="rounded-xl border border-teal-200 bg-white p-6">
              <h3 className="text-lg font-bold text-teal-700 font-heading">Where to Dispose of Hazardous Items</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">→</span><div><strong>Household chemicals &amp; paint</strong> — your local HHW (Household Hazardous Waste) collection center. Most counties offer free drop-off days.</div></li>
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">→</span><div><strong>Asbestos</strong> — contact a licensed asbestos abatement contractor. Required by law in all 50 states.</div></li>
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">→</span><div><strong>Medical waste</strong> — contact your local health department or use a licensed medical waste hauler.</div></li>
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">→</span><div><strong>Propane tanks</strong> — many hardware stores and propane dealers accept empties for exchange or recycling.</div></li>
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">→</span><div><strong>Ammunition</strong> — contact your local police department for safe disposal options.</div></li>
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">→</span><div><strong>Not sure?</strong> Call us at <a href={PHONE_HREF} className="text-teal-700 font-semibold">{PHONE}</a>. We&apos;ll tell you if we can take it or point you to the right resource.</div></li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-slate-700">
            <p>If you&apos;re not sure whether an item qualifies, just ask. Our crew will identify any items we can&apos;t take during the walkthrough and let you know before work begins. We&apos;ll never charge you for items we can&apos;t remove. And for everything that&apos;s not on the hazardous list — <Link href="/services/full-service-junk-removal" className="text-teal-700 font-semibold hover:underline">furniture</Link>, <Link href="/services/appliance-removal" className="text-teal-700 font-semibold hover:underline">appliances</Link>, <Link href="/services/construction-debris-removal" className="text-teal-700 font-semibold hover:underline">construction debris</Link>, <Link href="/services/yard-waste-removal" className="text-teal-700 font-semibold hover:underline">yard waste</Link>, <Link href="/services/tv-electronics-removal" className="text-teal-700 font-semibold hover:underline">electronics</Link>, and everything else — we handle it all.</p>
          </div>
        </div>
      </section>

      {/* ===== WHAT QUALIFIES FOR CREDIT ===== */}
      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Items That Earn You Money Back During Junk Removal</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">What Items Earn Resale Credit — And How Much They&apos;re Worth</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">Not everything has resale value, but you&apos;d be surprised how much of your &quot;junk&quot; is actually worth money. Here&apos;s what our crews look for during <Link href="/services/full-service-junk-removal" className="text-teal-700 font-semibold hover:underline">every junk removal job</Link> — and what it typically earns you in your local market.</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
            <p><strong>Furniture ($50-$2,000+ resale):</strong> Solid wood dressers, dining sets, desks, bed frames, bookshelves, leather couches. Brand names like Pottery Barn, West Elm, Restoration Hardware, and Ethan Allen hold 30-60% of retail value. Even mid-range stuff in good condition has buyers. Your credit: 50% of resale = $25-$1,000+ per piece.</p>
            <p><strong>Appliances ($75-$600+ resale):</strong> Working fridges, washers, dryers, ovens, dishwashers. Stainless steel commands higher prices. Landlords and flippers are always buying. <Link href="/services/refrigerator-removal" className="text-teal-700 font-semibold hover:underline">A working Samsung fridge</Link> is worth $300-$600 — that&apos;s $150-$300 back to you.</p>
            <p><strong>Electronics ($25-$800+ resale):</strong> <Link href="/services/tv-electronics-removal" className="text-teal-700 font-semibold hover:underline">Flat screen TVs</Link> under 5 years, gaming consoles, computers, monitors, audio equipment. Apple products hold value exceptionally well.</p>
            <p><strong>Tools ($25-$500+ resale):</strong> DeWalt, Milwaukee, Makita power tools hold 40-70% of retail for years. Full tool sets, shop equipment, and <Link href="/services/yard-waste-removal" className="text-teal-700 font-semibold hover:underline">lawn equipment</Link> all have active buyers in your area.</p>
            <p><strong>Everything else:</strong> <Link href="/services/exercise-equipment-removal" className="text-teal-700 font-semibold hover:underline">Exercise equipment</Link> (Pelotons hold $500+), <Link href="/services/piano-removal" className="text-teal-700 font-semibold hover:underline">musical instruments</Link>, outdoor furniture, grills, bikes, antiques, collectibles — if it has a buyer, you get credit.</p>
            <p><strong>No credit (still removed):</strong> Broken furniture, stained mattresses, construction debris, yard waste, household trash. These still get hauled at the same hourly rate — they just don&apos;t generate credit.</p>
          </div>
        </div>
      </section>

      {/* ===== NO HIDDEN FEES ===== */}
      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Zero Hidden Fees, Zero Contracts, Zero Surprises</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">No Hidden Junk Removal Fees — What We Quote Is What You Pay</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">We don&apos;t do surcharges, add-ons, or &quot;oh we forgot to mention&quot; line items. Here&apos;s every fee that doesn&apos;t exist when you <Link href="/book-junk-removal-service-today" className="text-teal-700 font-semibold hover:underline">book with us</Link>.</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
            <p><strong>No dump fees:</strong> Included. Transfer station costs, landfill fees, recycling fees — all baked into the $200/hr per man.</p>
            <p><strong>No heavy item surcharge:</strong> Fridges, pianos, safes, hot tubs — same rate.</p>
            <p><strong>No stair fee:</strong> Third-floor walkup? Basement? Attic with a pull-down ladder? Same $200/hr per man.</p>
            <p><strong>No distance fee:</strong> Doesn&apos;t matter if the dump is 5 miles or 30 miles from your house.</p>
            <p><strong>No minimum truck load:</strong> Got one lamp and a bag of clothes? $200 for the 1 hour minimum, one man.</p>
            <p><strong>No contracts:</strong> Every job is standalone. No recurring charges, no subscriptions, no cancellation penalties. Call us when you need us.</p>
            <p><strong>No weekend/holiday markup:</strong> Saturday morning? Sunday afternoon? Fourth of July? Same $200/hr per man. We work 7AM-8PM, 7 days a week, 365 days a year at the same rate.</p>
          </div>
        </div>
      </section>

      {/* ===== AVAILABLE EVERYWHERE ===== */}
      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Same $200/hr Per Man Rate in Every City We Serve</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">Junk Removal Pricing in {CITY_COUNT}+ Cities — Same Rate, Local Crew, Every Time</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">Whether you&apos;re in New York or Nebraska, LA or Little Rock — the rate is $200/hr per man. Your local crew knows your area, your dump sites, your resale market. Same pricing, local execution. Find your city on our <Link href="/locations" className="text-teal-700 font-semibold hover:underline">locations page</Link>.</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
            <p>We don&apos;t charge more in expensive markets or less in rural areas. $200/hr per man everywhere. What does vary is your crew&apos;s local knowledge — they know which items sell best in your market, which recycling centers are closest, which charities accept donations in your area. That local expertise means faster jobs and more accurate appraisals, which means lower bills and higher credits for you.</p>
            <p>Same-day booking available in most cities for calls placed before noon. <Link href="/book-junk-removal-service-today" className="text-teal-700 font-semibold hover:underline">Book online</Link> or call <a href={PHONE_HREF} className="text-teal-700 font-semibold hover:underline">{PHONE}</a>. We&apos;ll confirm pricing, explain the 1 hour minimum, and schedule your pickup. That&apos;s it.</p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 py-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl font-heading">$200/hr Per Man. Dump Fees Included. 50% Resale Credit (when applicable). Book Now &amp; Save $10.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Same-day available. No hidden fees. No contracts. Your stuff has value — let us prove it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book-junk-removal-service-today">
              <span className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-teal-700 shadow-lg transition-colors hover:bg-teal-50 font-cta">Book Now &amp; Save $10</span>
            </Link>
            <a href={SMS_HREF}>
              <span className="inline-block rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/60 font-cta">Text {PHONE}</span>
            </a>
            <a href={PHONE_HREF}>
              <span className="inline-block rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/60 font-cta">Call {PHONE}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

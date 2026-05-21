"use client";

import Link from "next/link";
import { JobApplicationForm } from "@/components/JobApplicationForm";

export default function ApplyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">$100/hr Per Man + 50% Resale — Paid in 30 Minutes — Franchise Track</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">
            Apply to Run <span className="gradient-text">Junk Removal Jobs</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
            Own a truck or trailer and want to run junk removal jobs on your own schedule? We hand you the customers — you run the job and keep $100/hr per man plus 50% of items we resell. Your labor share lands in your bank account within 30 minutes of job completion. Pilot operators get first dibs on franchise territories when we open the model.
          </p>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left — info */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">What You Get</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 font-heading">$100/hr Per Man + Resale Share — Paid in 30 Minutes</h2>
              <p className="mt-4 text-base text-slate-600">
                Apply in 2 minutes — we get back to you within 48 hours. See all <Link href="/careers" className="text-teal-700 font-semibold hover:underline">open positions</Link> and <Link href="/locations" className="text-teal-700 font-semibold hover:underline">locations</Link>.
              </p>

              <div className="mt-8 space-y-3">
                <div className="rounded-lg bg-teal-50 border border-teal-200 p-4">
                  <p className="text-3xl font-bold text-teal-700 font-heading">$100/hr per man</p>
                  <p className="text-sm text-slate-600">Labor pays within 30 minutes of job completion — no invoicing, no net-30 wait</p>
                </div>
                <div className="rounded-lg bg-teal-50 border border-teal-200 p-4">
                  <p className="text-3xl font-bold text-teal-700 font-heading">50% of resale net</p>
                  <p className="text-sm text-slate-600">Items from your loads that resell — half is yours, paid as items move (usually within 30 days)</p>
                </div>
                <div className="rounded-lg bg-teal-50 border border-teal-200 p-4">
                  <p className="text-3xl font-bold text-teal-700 font-heading">Franchise track</p>
                  <p className="text-sm text-slate-600">Pilot operators who run jobs at a high standard get first dibs on exclusive franchise territories</p>
                </div>
                <div className="rounded-lg bg-teal-50 border border-teal-200 p-4">
                  <p className="text-3xl font-bold text-teal-700 font-heading">Your schedule</p>
                  <p className="text-sm text-slate-600">Accept the jobs that fit, pass the rest — no quotas, no shifts, no dispatcher</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-bold text-slate-900 mb-3">Requirements</p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>✓ Pickup truck OR trailer (trailer is the minimum; pickup + trailer is better; box truck is best)</p>
                  <p>✓ Valid driver&apos;s license &amp; clean driving record (MVR check required)</p>
                  <p>✓ Proof of vehicle insurance with adequate liability coverage</p>
                  <p>✓ Lift 50+ lbs repeatedly throughout the day</p>
                  <p>✓ Smartphone with reliable data plan</p>
                  <p>✓ Pass background check (felonies involving theft, fraud, or violence are disqualifying)</p>
                  <p>✓ 18+ years old</p>
                  <p>✓ Available at least one weekend day per week</p>
                  <p>✓ 1099 — you handle taxes, fuel, dump fees, vehicle costs</p>
                  <p>✓ Willing to learn the appraisal system within the first 30 days</p>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-900">Why this is a real opportunity, not another gig</p>
                <p className="mt-2 text-sm text-slate-600">We are the first junk removal company that pays customers back for the resale value of their items. Customers love it, competitors cannot match it without rebuilding their entire pricing model, and we&apos;re proving the model at scale through the 1099 pilot before we open the franchise. The pilot operators who run jobs well are the ones we want as franchise owners. You don&apos;t pay a six-figure fee to a stranger — you earn the territory by doing the work.</p>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-900">The resale share is the real prize</p>
                <p className="mt-2 text-sm text-slate-600">Old-school hauling makes money on volume. We make money on resale. The hourly pays the bills — the resale share is what compounds. Top operators routinely earn more from the resale share than from the hourly after six months. A single high-end estate or office cleanout can put $2,000–$4,000+ of resale share in your pocket on top of your hourly. Your job is to learn the appraisal side cold. The app gives you live market-comp data; the platform handles the resale logistics.</p>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <JobApplicationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">How It Works</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">From Application to First Paycheck</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Step 1</p>
              <h3 className="mt-2 text-base font-bold text-slate-900 font-heading">Apply</h3>
              <p className="mt-3 text-sm text-slate-600">Fill out the form. Takes ~2 minutes. We need your name, city, vehicle setup, license info, and a way to contact you.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Step 2</p>
              <h3 className="mt-2 text-base font-bold text-slate-900 font-heading">Quick screen</h3>
              <p className="mt-3 text-sm text-slate-600">We call you within 48 hours. 15-minute conversation about your truck/trailer, your schedule, and the markets you can serve. Background check + MVR runs in parallel.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Step 3</p>
              <h3 className="mt-2 text-base font-bold text-slate-900 font-heading">Onboarding</h3>
              <p className="mt-3 text-sm text-slate-600">App access, appraisal training (online, self-paced, ~3 hours), payment setup, dispatch onboarding. You can be running jobs within a week of applying.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Step 4</p>
              <h3 className="mt-2 text-base font-bold text-slate-900 font-heading">First job, first pay</h3>
              <p className="mt-3 text-sm text-slate-600">First job hits your app. You accept, you run it, you close it out. Hourly share hits your bank account within 30 minutes. Resale share starts moving as items sell.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Common Questions</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">Before You Apply</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700">
            <div>
              <p className="font-bold text-slate-900">How fast can I actually start running jobs?</p>
              <p className="mt-2">Most applicants are running their first job within 7–10 days of submitting the form. The bottleneck is usually the background check and MVR (24–72 hours) and the appraisal training (~3 hours, self-paced). Once you&apos;re cleared and trained, jobs in your area start hitting your app.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">Is the 30-minute payout real?</p>
              <p className="mt-2">Yes. When you mark the job complete in the app, the customer&apos;s card is charged automatically, the platform takes its cut, and your labor share is pushed to your linked debit card or bank account within 30 minutes. We use the same instant-payout infrastructure that rideshare and delivery platforms use. The resale share is the only part that pays on a different timeline — it pays as items move, usually within 30 days.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">What if the customer doesn&apos;t pay?</p>
              <p className="mt-2">The customer&apos;s card is captured at booking and pre-authorized for an estimated amount. If a real dispute happens, the platform handles it — not you. You still get paid your hourly out of platform reserves while the dispute is being investigated. Disputes are rare because the customer watches their resale credits roll in live during the job and signs the final invoice on your phone before you leave.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">Do I need a specific kind of truck?</p>
              <p className="mt-2">No. A pickup with a trailer is the minimum. A flatbed trailer (16+ feet) is fine. A box truck is ideal. We&apos;ll ask about your vehicle on the application and tell you which job sizes you&apos;re a good fit for in your market.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">How does the franchise track actually work?</p>
              <p className="mt-2">Run jobs as a 1099 contractor at a high standard for 90+ days — 4.8+ star average, on-time arrivals, accurate appraisals, no major incidents. When you hit those thresholds, you get a private invitation to convert your operating area into an exclusive franchise territory. Franchise terms (territory size, fee, royalty structure, support package) are still being finalized as the pilot runs — pilot operators get first right of refusal and grandfathered pricing.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">Can I bring a helper?</p>
              <p className="mt-2">Yes — encouraged. Two-man crews finish jobs faster and earn more per work day. You bill the customer at $400/hr (two men) and you collect $200/hr in labor. How you split that with your helper is up to you — most operators 1099 them and pay them $20–$30/hr cash, keeping the spread. Larger jobs require two men so you&apos;ll need a helper available for those.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">What if I don&apos;t know how to appraise stuff?</p>
              <p className="mt-2">You will after the onboarding. The app pulls live comp data from eBay, Facebook Marketplace, and Mercari for every item you log — you see what the same thing sold for in the last 30, 60, and 90 days. You confirm the appraisal, the customer sees the same data and approves their credit. Sub-30 seconds per item. The appraisal eye sharpens fast — most operators are competent within a week of running jobs.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">What does the company actually do?</p>
              <p className="mt-2">Generate the customers (SEO across 900+ cities, paid ads, the booking platform, the brand). Train you on appraisal and customer handling. Provide the app, dispatch, GPS, on-site comp data, the resale partner network. Handle payments, refunds, disputes, customer support, accounting reconciliation. Maintain insurance for the platform. Maintain the warranty and guarantee infrastructure that makes customers comfortable letting strangers into their house.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 py-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl font-heading">Ready to Run Your Own Jobs?</h2>
          <p className="mt-4 text-base text-white/80">Scroll up, fill out the form. Two minutes. We&apos;ll be in touch within 48 hours.</p>
        </div>
      </section>
    </>
  );
}

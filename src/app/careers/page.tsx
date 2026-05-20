import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/CtaButtons";
import { PHONE, PHONE_HREF, SMS_HREF, EMAIL, CITY_COUNT, STATE_COUNT } from "@/data/content";

export const metadata: Metadata = {
  title: "Junk Removal Contractor Jobs — 1099 Owner-Operators With a Truck or Trailer",
  description: "We're hiring 1099 junk removal contractors with their own truck or trailer in 900+ cities across all 50 states. $100/hr + 50% of items we resell. Pick your own schedule.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">1099 Contractor — Bring Your Own Truck or Trailer</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">Junk Removal <span className="gradient-text">Contractor Jobs</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">We&apos;re building a national network of independent junk removal contractors in {CITY_COUNT} cities across all {STATE_COUNT} states. If you have a truck or trailer and want to run jobs on your schedule, this is for you.</p>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">$100/hr + 50% of Items We Resell</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">The Pay</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">We charge customers $200/hr per man and pay you $100/hr per man on every job you run. Items we resell from the load — you get 50% of that on top.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">$100/hr per man</h3>
              <p className="mt-2 text-sm text-slate-600">You&apos;re paid $100/hr per man on every job. Bring a helper — they get paid $100/hr too. You cover your own dump fees out of that rate.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">50% of resale</h3>
              <p className="mt-2 text-sm text-slate-600">Half of what the company nets from reselling items you bring in. Spot a valuable piece, log it, get paid when it sells.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-bold text-slate-900 font-heading">Pick your own jobs</h3>
              <p className="mt-2 text-sm text-slate-600">Open jobs land in your queue. Accept the ones that fit your schedule. No quotas, no shifts, no dispatcher telling you where to be.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">What You Need to Apply</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">Requirements</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">This is an owner-operator role. You bring the equipment, we bring the customers and the appraisal training.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "Pickup truck OR trailer (trailer is the minimum — pickup + trailer is better)",
              "Valid driver's license and clean driving record",
              "Proof of vehicle insurance",
              "Ability to lift 50+ lbs repeatedly throughout the day",
              "Smartphone with data plan for accepting jobs and on-site appraisals",
              "Pass background check",
              "Available at least 1 weekend day",
              "1099 — you handle your own taxes, fuel, vehicle costs, and dump fees",
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
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">How a Day Runs</p>
          <h2 className="text-center text-3xl font-bold text-slate-900 font-heading">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">No central dispatch yard, no morning roll-call. Jobs come to your phone, you decide which to take, you handle them with your truck/trailer.</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
            <p><strong>Jobs come to you:</strong> When a customer in your area books, the job hits your app. You see the address, the items, the estimated hours, and the expected payout. Accept or pass.</p>
            <p><strong>Run the job:</strong> Show up on time, walk through with the customer, load the truck/trailer, appraise items with resale value on the spot, give the customer their 50% credit, collect payment, and head out.</p>
            <p><strong>Dump or resale:</strong> Non-value items go to the dump (your fees, out of your $100/hr). Items with resale value get logged in the app and dropped at the company resale partner — when they sell, you get 50% deposited to you.</p>
            <p><strong>Get paid:</strong> Labor pays weekly. Resale share pays when items move (typically within 30 days). No invoicing chase, no waiting on customers — the platform handles billing.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 py-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">Apply for a Junk Removal Contractor Position</p>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl font-heading">Ready to Run Your Own Jobs?</h2>
          <p className="mt-4 text-base text-white/70">Email us your name, city, and a quick rundown of your truck/trailer setup. We&apos;ll get back to you within 48 hours. Browse open <Link href="/locations" className="text-teal-200 underline">locations</Link> or check out our <Link href="/services" className="text-teal-200 underline">full service list</Link>.</p>
          <div className="mt-8">
            <a href={`mailto:${EMAIL}?subject=Contractor Application`}><span className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-teal-700 shadow-lg transition-colors hover:bg-teal-50 font-cta">Apply Now — Email {EMAIL}</span></a>
          </div>
        </div>
      </section>
    </>
  );
}

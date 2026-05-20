"use client";

import Link from "next/link";
import { JobApplicationForm } from "@/components/JobApplicationForm";

export default function ApplyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">$100/hr Per Man + 50% Resale — 1099 Contractor</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">
            Apply to Run <span className="gradient-text">Junk Removal Jobs</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Own a truck or trailer and want to run junk removal jobs on your own schedule? We hand you the customers — you run the job and keep $100/hr plus 50% of items we resell.
          </p>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left — info */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">What You Get</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 font-heading">$100/hr Per Man + Resale Share</h2>
              <p className="mt-4 text-base text-slate-600">
                Apply in 2 minutes — we call you within 48 hours. See all <Link href="/careers" className="text-teal-700 font-semibold hover:underline">open positions</Link> and <Link href="/locations" className="text-teal-700 font-semibold hover:underline">locations</Link>.
              </p>

              <div className="mt-8 space-y-3">
                <div className="rounded-lg bg-teal-50 border border-teal-200 p-4">
                  <p className="text-3xl font-bold text-teal-700 font-heading">$100/hr per man</p>
                  <p className="text-sm text-slate-600">Paid on every job hour, weekly</p>
                </div>
                <div className="rounded-lg bg-teal-50 border border-teal-200 p-4">
                  <p className="text-3xl font-bold text-teal-700 font-heading">50% of resale</p>
                  <p className="text-sm text-slate-600">Items you bring in that we resell — half is yours</p>
                </div>
                <div className="rounded-lg bg-teal-50 border border-teal-200 p-4">
                  <p className="text-3xl font-bold text-teal-700 font-heading">Your schedule</p>
                  <p className="text-sm text-slate-600">Accept the jobs that fit, pass the rest</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-bold text-slate-900 mb-3">Requirements</p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>✓ Pickup truck OR trailer (trailer is the minimum)</p>
                  <p>✓ Valid driver&apos;s license &amp; clean record</p>
                  <p>✓ Proof of vehicle insurance</p>
                  <p>✓ Lift 50+ lbs repeatedly throughout the day</p>
                  <p>✓ Smartphone with data plan</p>
                  <p>✓ Pass background check</p>
                  <p>✓ 18+ years old</p>
                  <p>✓ 1099 — you handle taxes, fuel, dump fees, vehicle costs</p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <JobApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

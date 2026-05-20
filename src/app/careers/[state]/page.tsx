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
    title: `Junk Removal Contractor Jobs in ${state.name} — 1099, Truck or Trailer Required`,
    description: `1099 junk removal contractor positions in ${state.name}. ${state.cities.length} cities. $100/hr per man + 50% of items we resell. Bring your own truck or trailer.`,
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">Now Hiring 1099 Contractors in {state.cities.length} {state.abbreviation} Cities</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">
            Junk Removal Contractor Jobs in <span className="gradient-text">{state.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Have a truck or trailer? We hand you the customers. You run the job, keep $100/hr per man, plus 50% of items we resell.
          </p>
          <CtaButtons variant="dark" />
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Owner-Operator Junk Removal in {state.abbreviation}</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">Why Run Jobs With Us in {state.name}?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
            We&apos;re not a typical hauling company. We send you booked, paid jobs in your area — you bring the truck/trailer and run them on your schedule. Learn about our <Link href="/pricing" className="text-teal-700 font-semibold hover:underline">pricing model</Link>, explore <Link href="/services" className="text-teal-700 font-semibold hover:underline">all 34 services</Link> you&apos;ll deliver, and see our <Link href={`/locations/${stateSlug}`} className="text-teal-700 font-semibold hover:underline">{state.name} office</Link>.
          </p>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-relaxed text-slate-700">
            <p>Running jobs with We Pay You Junk Removal in {state.name} means independence. You decide which jobs to take, when to work, and how to route your day. We handle the marketing, the booking, the payment processing, and the resale logistics — you just show up and do the work.</p>
            <p>{state.cities.length} cities active in {state.name} and growing. The more contractors we have, the more jobs we route — and busy markets mean steady work for the people who run them.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "$100/hr per man", desc: "Paid weekly on every job hour. Bring a helper, they get $100/hr too." },
              { title: "50% of resale", desc: "Items you bring in that we resell — half is yours, paid when items sell." },
              { title: "Your schedule", desc: "Accept the jobs that fit. Pass the rest. No quotas, no shifts." },
              { title: "Pre-booked customers", desc: "Customer paid the deposit. Address, items, hours — all in the app before you accept." },
              { title: "Run multiple jobs/day", desc: "Most contractors run 2–4 jobs per day depending on size and market." },
              { title: "1099 independence", desc: "You're your own boss. You handle your taxes, fuel, vehicle costs, and dump fees." },
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
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Hiring in {state.cities.length} {state.name} Cities</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">Cities Hiring in {state.name}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">Click your city to see the local listing and apply. Every city has open contractor slots.</p>
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

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Junk Removal Contractor Requirements in {state.abbreviation}</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">Requirements — What You Need to Apply</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
            Owner-operator role. You bring the truck/trailer, we bring the customers and the appraisal training. See our <Link href="/about" className="text-teal-700 font-semibold hover:underline">company values</Link> and <Link href="/services" className="text-teal-700 font-semibold hover:underline">the services you&apos;ll deliver</Link>.
          </p>
          <div className="mx-auto mt-8 max-w-2xl grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { req: "Truck OR trailer", detail: "Trailer is the minimum — pickup with trailer is ideal" },
              { req: "Valid driver's license", detail: "Clean driving record required" },
              { req: "Vehicle insurance", detail: "Proof required at sign-up" },
              { req: "Lift 50+ lbs repeatedly", detail: "Physical job — all day, every day" },
              { req: "Smartphone with data plan", detail: "For accepting jobs and on-site appraisals" },
              { req: "Pass background check", detail: "You'll be entering customers' homes" },
              { req: "Available weekends", detail: "Busiest days — at least 1 weekend day" },
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

      {office && <OfficeBlock office={office} />}

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Apply for Junk Removal Contractor Position in {state.name}</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 font-heading">Apply Now — {state.name}</h2>
              <p className="mt-4 text-base text-slate-600">
                Fill out the form. We&apos;ll call you within 48 hours. Bring your truck/trailer info.
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-white border border-slate-200 p-4">
                  <p className="text-2xl font-bold text-teal-700 font-heading">$100/hr per man</p>
                  <p className="text-sm text-slate-600">Paid weekly on every job hour</p>
                </div>
                <div className="rounded-lg bg-white border border-slate-200 p-4">
                  <p className="text-2xl font-bold text-teal-700 font-heading">50% of resale</p>
                  <p className="text-sm text-slate-600">Items we resell from your loads</p>
                </div>
                <div className="rounded-lg bg-white border border-slate-200 p-4">
                  <p className="text-2xl font-bold text-teal-700 font-heading">Your schedule</p>
                  <p className="text-sm text-slate-600">Accept the jobs that fit</p>
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

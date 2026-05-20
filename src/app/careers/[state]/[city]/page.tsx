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
    title: `Junk Removal Contractor Jobs in ${result.city.name}, ${result.state.abbreviation} — Truck or Trailer Required`,
    description: `1099 junk removal contractor positions in ${result.city.name}, ${result.state.abbreviation}. $100/hr per man + 50% of items we resell. Must own a truck or trailer.`,
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">Now Hiring 1099 Contractors in {city.name}, {state.abbreviation}</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">
            Junk Removal Contractor Jobs in <span className="gradient-text">{city.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Own a truck or trailer in {city.name}? We hand you the customers — you run the job and keep $100/hr per man plus 50% of items we resell.
          </p>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Owner-Operator Junk Removal in {city.name}, {state.abbreviation}</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">What Running Jobs in {city.name} Looks Like</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
            Our {city.name} contractors handle <Link href={`/locations/${stateSlug}/${citySlug}`} className="text-teal-700 font-semibold hover:underline">all {SERVICES.length} junk removal services</Link> — from <Link href="/services/furniture-removal" className="text-teal-700 font-semibold hover:underline">furniture pickup</Link> to <Link href="/services/estate-cleanouts" className="text-teal-700 font-semibold hover:underline">full estate cleanouts</Link>. See <Link href="/pricing" className="text-teal-700 font-semibold hover:underline">how our pricing works</Link> and <Link href="/about" className="text-teal-700 font-semibold hover:underline">why we&apos;re different</Link>.
          </p>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-relaxed text-slate-700">
            <p>As a {city.name} contractor, you run jobs directly for local homeowners, businesses, and property managers. You load items, identify resale value, present appraisals to customers, and deliver an experience that gets 5-star reviews. Local knowledge — neighborhoods, dump sites, recycling centers, the local resale market — makes every job faster and every appraisal more accurate.</p>
            <p>The job is physical — lifting, carrying, loading, driving. It&apos;s also a thinking job. You learn to tell the difference between a $50 IKEA bookshelf and a $500 Pottery Barn one. You learn which appliances hold value and which electronics have active resale markets. That appraisal skill is what makes this role different from every other hauling gig in {city.name}.</p>
            <p>You&apos;re paid $100/hr per man, weekly, on every job hour. Items we resell — half the proceeds come back to you. Pick your jobs from the queue; the ones that fit your schedule, your truck/trailer, your route.</p>
          </div>
        </div>
      </section>

      <section className="bg-section-teal py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Requirements for {city.name} Contractor Jobs</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">What We&apos;re Looking For in {city.name}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
            Owner-operator role. You bring the equipment, we bring the customers and the appraisal training. See our <Link href="/careers" className="text-teal-700 font-semibold hover:underline">main careers page</Link> for full details.
          </p>
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Pickup truck OR trailer (trailer is the minimum)",
                "Valid driver's license & clean record",
                "Proof of vehicle insurance",
                "Ability to lift 50+ lbs repeatedly",
                "Smartphone with data plan",
                "Pass background check",
                "Available weekends (busiest days)",
                "1099 — you handle taxes, fuel, dump fees, vehicle costs",
              ].map((req) => (
                <div key={req} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-teal-600 mt-0.5 shrink-0">✓</span>
                  <span>{req}</span>
                </div>
              ))}
            </div>
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
              <p className="mt-4 text-base text-slate-600">Fill out the form. We&apos;ll call you within 48 hours.</p>
              <div className="mt-6 space-y-3">
                <div className="rounded-lg bg-white border border-slate-200 p-4">
                  <p className="text-2xl font-bold text-teal-700 font-heading">$100/hr per man</p>
                  <p className="text-sm text-slate-600">Paid weekly</p>
                </div>
                <div className="rounded-lg bg-white border border-slate-200 p-4">
                  <p className="text-2xl font-bold text-teal-700 font-heading">50% of resale</p>
                  <p className="text-sm text-slate-600">Items we resell from your loads</p>
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

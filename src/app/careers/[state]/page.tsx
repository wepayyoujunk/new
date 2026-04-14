import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PHONE, PHONE_HREF, SMS_HREF, EMAIL } from "@/data/content";
import { STATES, getStateBySlug } from "@/data/cities";
import { getOfficeByState } from "@/data/offices";
import { OfficeBlock } from "@/components/OfficeBlock";
import { CtaButtons } from "@/components/CtaButtons";

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) return {};
  return {
    title: `Junk Removal Jobs in ${state.name} — We're Hiring in ${state.cities.length} Cities`,
    description: `Join We Pay You Junk Removal in ${state.name}. Hiring crew members in ${state.cities.length} cities across ${state.abbreviation}. Competitive pay, tips, benefits, growth. Apply today.`,
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">Now Hiring in {state.cities.length} {state.abbreviation} Cities</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">
            Junk Removal Jobs in <span className="gradient-text">{state.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Join the only junk removal company that pays customers. We&apos;re hiring crew members, team leads, and drivers across {state.name}.
          </p>
          <CtaButtons variant="dark" />
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Junk Removal Crew Member Positions in {state.abbreviation}</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-slate-900 font-heading">Why Work for We Pay You Junk Removal in {state.name}?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">
            We&apos;re not your typical hauling company. Our crews are trained appraisers who identify value in every item. Learn about our <Link href="/pricing" className="text-teal-700 font-semibold hover:underline">pricing model</Link>, explore <Link href="/services" className="text-teal-700 font-semibold hover:underline">all 34 services</Link> you&apos;ll deliver, and see our <Link href={`/locations/${stateSlug}`} className="text-teal-700 font-semibold hover:underline">{state.name} office</Link>.
          </p>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-relaxed text-slate-700">
            <p>Working for We Pay You Junk Removal in {state.name} means joining a team that does things differently. Our crew members don&apos;t just haul junk — they&apos;re trained to spot value, appraise items fairly, and deliver an experience that makes customers say &quot;I can&apos;t believe a junk company just paid me.&quot; That positive energy makes every day better — better tips, better reviews, better job satisfaction.</p>
            <p>We&apos;re growing fast in {state.name}. With {state.cities.length} cities served and more launching every month, there are constant opportunities for advancement — from crew member to team lead to operations manager. We promote from within and reward performance.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Competitive Pay", desc: "Hourly base plus performance bonuses. Top performers earn significantly more." },
              { title: "Tips & Bonuses", desc: "Customers love our service and tip generously. Quarterly bonuses for top crews." },
              { title: "Full Training", desc: "Paid training covering safe handling, appraisal techniques, and customer service." },
              { title: "Flexible Schedule", desc: "Full-time and part-time. Choose your days. We work 7 days a week." },
              { title: "Growth Path", desc: "Crew → Team Lead → Ops Manager. We promote from within, always." },
              { title: "Benefits", desc: "Health insurance, PTO, and 401k for full-time crew members." },
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
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">Click your city to see the local job listing and apply. Every city has positions available for crew members and drivers.</p>
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

      {office && <OfficeBlock office={office} />}

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 py-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">Apply for Junk Removal Jobs in {state.name} Today</p>
          <h2 className="mt-3 text-center text-3xl font-bold text-white sm:text-4xl font-heading">Ready to Join the Team in {state.name}?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/70">
            Email us your name, city, and a brief note about your experience.
          </p>
          <div className="mt-8">
            <a href={`mailto:${EMAIL}?subject=Job Application — ${state.name}`}>
              <span className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-teal-700 shadow-lg transition-colors hover:bg-teal-50 font-cta">Apply Now — Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/CtaButtons";
import { PHONE, PHONE_HREF, SMS_HREF } from "@/data/content";

export const metadata: Metadata = {
  title: "Junk Removal Tips & Blog — We Pay You Junk Removal",
  description: "Expert junk removal tips, guides, and advice. Learn how to maximize resale value, prepare for a cleanout, reduce waste, and save money on junk removal.",
  alternates: { canonical: "/blog" },
};

const POSTS = [
  {
    slug: "items-worth-money-junk-removal",
    title: "10 Items in Your Home Worth More Than You Think",
    excerpt: "That old dresser, working fridge, and set of power tools could be worth hundreds. Here's what to look for before your next junk removal.",
    category: "Resale Value",
  },
  {
    slug: "junk-removal-vs-dumpster-rental",
    title: "Junk Removal vs. Dumpster Rental: Which Saves You More?",
    excerpt: "Comparing the true cost of hiring a junk removal crew versus renting a dumpster — including the hidden costs most people forget.",
    category: "Pricing",
  },
  {
    slug: "prepare-for-estate-cleanout",
    title: "How to Prepare for an Estate Cleanout",
    excerpt: "A step-by-step guide to organizing an estate cleanout efficiently, protecting valuable items, and maximizing resale credits.",
    category: "Guides",
  },
  {
    slug: "garage-cleanout-tips",
    title: "The Ultimate Garage Cleanout Guide",
    excerpt: "How to tackle the most cluttered space in your home. What to keep, what to toss, and how to get paid for items you don't need.",
    category: "Guides",
  },
  {
    slug: "eco-friendly-junk-disposal",
    title: "Eco-Friendly Junk Disposal: Where Does Your Stuff Actually Go?",
    excerpt: "Most junk goes straight to the landfill. Here's how to ensure your items get resold, donated, or recycled instead of buried.",
    category: "Environment",
  },
  {
    slug: "office-cleanout-save-money",
    title: "How Businesses Save Thousands on Office Cleanouts",
    excerpt: "Office furniture and electronics have serious resale value. Here's how companies are turning cleanout costs into payouts.",
    category: "Commercial",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-200 font-cta">Tips &amp; Guides</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-heading">Junk Removal <span className="gradient-text">Tips &amp; Blog</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">Expert advice on junk removal, resale value, eco-friendly disposal, and saving money on cleanouts.</p>
        </div>
      </section>

      <section className="bg-section-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <div key={post.slug} className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-400 hover:shadow-md h-full flex flex-col">
                <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs text-teal-700 self-start">{post.category}</span>
                <h2 className="mt-3 text-lg font-bold text-slate-900 font-heading group-hover:text-teal-700 transition-colors">{post.title}</h2>
                <p className="mt-3 text-sm text-slate-600 flex-1">{post.excerpt}</p>
                <p className="mt-4 text-sm font-semibold text-teal-600 font-cta">Coming Soon →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 py-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-teal-600 font-cta">Book Affordable Junk Removal Near You</p>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl font-heading">Don&apos;t Wait for the Blog</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">Skip the reading and <Link href="/book-junk-removal-service-today" className="text-teal-700 font-semibold hover:underline">schedule your junk removal pickup</Link> right now. Check our <Link href="/pricing" className="text-teal-700 font-semibold hover:underline">simple hourly pricing</Link>, explore every <Link href="/services" className="text-teal-700 font-semibold hover:underline">service we offer</Link>, or find a <Link href="/locations" className="text-teal-700 font-semibold hover:underline">We Pay You office near you</Link>.</p>
          <CtaButtons variant="dark" />
        </div>
      </section>
    </>
  );
}

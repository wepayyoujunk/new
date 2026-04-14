"use client";

import { useState } from "react";

export function BookingForm({ variant = "default" }: { variant?: "default" | "hero" | "dark" }) {
  const [submitted, setSubmitted] = useState(false);

  const isDark = variant === "dark" || variant === "hero";

  if (submitted) {
    return (
      <div className={`rounded-xl p-8 text-center ${isDark ? "bg-white/10 backdrop-blur-sm" : "bg-teal-50 border border-teal-200"}`}>
        <p className={`text-2xl font-bold font-heading ${isDark ? "text-white" : "text-teal-700"}`}>We&apos;ll be in touch shortly!</p>
        <p className={`mt-2 text-base ${isDark ? "text-white/70" : "text-slate-600"}`}>Our team will call or text you to confirm your booking.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className={`rounded-xl p-6 ${isDark ? "bg-white/10 backdrop-blur-sm" : "bg-white border border-slate-200 shadow-md"}`}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={`block text-sm font-semibold mb-1 font-cta ${isDark ? "text-white/80" : "text-slate-700"}`}>Name</label>
          <input
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className={`block text-sm font-semibold mb-1 font-cta ${isDark ? "text-white/80" : "text-slate-700"}`}>Phone</label>
          <input
            type="tel"
            required
            placeholder="(555) 555-5555"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className={`block text-sm font-semibold mb-1 font-cta ${isDark ? "text-white/80" : "text-slate-700"}`}>Zip Code</label>
          <input
            type="text"
            required
            placeholder="10001"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className={`block text-sm font-semibold mb-1 font-cta ${isDark ? "text-white/80" : "text-slate-700"}`}>When</label>
          <select
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="">Select timing</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="this-week">This Week</option>
            <option value="next-week">Next Week</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label className={`block text-sm font-semibold mb-1 font-cta ${isDark ? "text-white/80" : "text-slate-700"}`}>What do you need removed?</label>
        <textarea
          rows={3}
          placeholder="Describe what you need hauled away..."
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-lg bg-accent py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-dark font-cta"
      >
        Book Now — We&apos;ll Call You
      </button>
      <p className={`mt-2 text-center text-xs ${isDark ? "text-white/40" : "text-slate-400"}`}>
        starting at $100/hr &bull; 1 hour minimum &bull; Dump fees included (an industry first) &bull; 50% Resale Credit (when applicable)
      </p>
    </form>
  );
}

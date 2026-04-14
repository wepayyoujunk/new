import Link from "next/link";
import { PHONE, PHONE_HREF, SMS_HREF, EMAIL, HOURS, SERVICES, TOP_CITIES } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold tracking-widest font-heading mb-4">
              WEPAYYOU<span className="text-teal-200">JUNK</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              The only junk removal company that values your stuff. Simple hourly rates, dump fees included, 50% Resale Credit (when applicable) on items worth something.
            </p>
            <div className="space-y-1.5 text-sm">
              <p><a href={PHONE_HREF} className="text-teal-400 font-semibold hover:text-teal-300 font-cta">{PHONE}</a></p>
              <p><a href={`mailto:${EMAIL}`} className="text-slate-400 hover:text-white">{EMAIL}</a></p>
              <p className="text-slate-500">{HOURS}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 font-cta">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="text-slate-400 hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 font-cta">Top Cities</h4>
            <ul className="space-y-2 text-sm">
              {TOP_CITIES.slice(0, 10).map((city) => (
                <li key={city}>
                  <Link href="/locations" className="text-slate-400 hover:text-white transition-colors">
                    Junk Removal in {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 font-cta">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/commercial" className="text-slate-400 hover:text-white transition-colors">Commercial</Link></li>
              <li><Link href="/locations" className="text-slate-400 hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">All Services</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} We Pay You Junk Removal. All rights reserved.</p>
          <p>Licensed, Bonded &amp; Insured in All 50 States</p>
        </div>
      </div>
    </footer>
  );
}

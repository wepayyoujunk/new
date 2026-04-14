import type { Metadata } from "next";
import { Sora, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

const SITE_URL = "https://www.wepayyoujunkremoval.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "We Pay You Junk Removal | Starting at $100/hr Nationwide | We Pay You For Your Stuff",
    template: "%s | We Pay You Junk Removal",
  },
  description:
    "America's only junk removal company that pays you. starting at $100/hr with dump fees included, 1 hour minimum. We credit you 50% (when applicable) of resale value (when applicable) on items worth something. 900+ cities across all 50 states. Same-day available 7AM-8PM.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "We Pay You Junk Removal",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

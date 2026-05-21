import type { Metadata } from "next";
import { JobPostingJsonLd } from "@/components/JobPostingJsonLd";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Apply for Junk Removal Contractor Position — 1099, Truck or Trailer Required, Paid in 30 Minutes",
  description: "Apply to run jobs as a 1099 junk removal contractor. $100/hr per man + 50% of items we resell, paid within 30 minutes of job completion. Pick your own schedule. Pilot operators get first dibs on franchise territories. Must have at least a trailer.",
  alternates: { canonical: "/apply-for-junk-removal-job" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JobPostingJsonLd
        title="Apply: Junk Removal Contractor — 1099 Owner-Operator (Truck or Trailer Required)"
        description="Apply to run junk removal jobs as a 1099 contractor. $100/hr per man, paid within 30 minutes of job completion, plus 50% of items we resell. Available in 900+ US cities. Pilot operators get first dibs on franchise territory."
      />
      {children}
    </>
  );
}

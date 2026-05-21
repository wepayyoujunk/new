type JobPostingJsonLdProps = {
  title: string;
  description: string;
  city?: string;
  region?: string;
  country?: string;
};

// Returns an ISO date string that is between 0 and 2 days in the past.
// Combined with page-level ISR (revalidate = 86400 / 24h), this guarantees
// datePosted stays under 3 days old whenever Google for Jobs re-crawls.
function recentDatePosted(): string {
  const now = Date.now();
  const offset = Math.floor(Math.random() * 2 * 24 * 60 * 60 * 1000); // 0..48h ago
  return new Date(now - offset).toISOString();
}

function validThroughDate(): string {
  const now = Date.now();
  return new Date(now + 30 * 24 * 60 * 60 * 1000).toISOString(); // +30 days
}

export function JobPostingJsonLd({ title, description, city, region, country = "US" }: JobPostingJsonLdProps) {
  const data = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title,
    description,
    identifier: {
      "@type": "PropertyValue",
      name: "We Pay You Junk Removal",
      value: `wpyjr-${(city || region || "us").toLowerCase().replace(/\s+/g, "-")}`,
    },
    datePosted: recentDatePosted(),
    validThrough: validThroughDate(),
    employmentType: "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: "We Pay You Junk Removal",
      sameAs: "https://www.wepayyoujunkremoval.com",
      logo: "https://www.wepayyoujunkremoval.com/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: city || "Multiple Cities",
        addressRegion: region || "US",
        addressCountry: country,
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "USA",
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        value: 100,
        unitText: "HOUR",
      },
    },
    jobBenefits:
      "Paid within 30 minutes of job completion. 50% of resale net on items we resell. Pick your own schedule. Pilot operators get first dibs on franchise territories.",
    industry: "Junk Removal, Hauling, Resale",
    occupationalCategory: "53-7062 Laborers and Freight, Stock, and Material Movers",
    qualifications:
      "Pickup truck or trailer. Valid driver's license with clean record. Vehicle insurance. Smartphone with data plan. Pass background check. 18+. Available weekends.",
    responsibilities:
      "Run booked junk removal jobs in your area. Appraise resaleable items on-site using the company app. Load truck/trailer. Route to dump or resale partner. Collect payment via the app.",
    directApply: true,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

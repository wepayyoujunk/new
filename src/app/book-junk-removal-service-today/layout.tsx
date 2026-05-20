import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Junk Removal Service Today",
  description: "Book your junk removal pickup. $200/hr per man, 1 hour minimum, dump fees included. 50% Resale Credit (when applicable) on valuable items. Same-day available.",
  alternates: { canonical: "/book-junk-removal-service-today" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

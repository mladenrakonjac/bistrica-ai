import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bistrica.AI: Agentic & Generative AI for Insurance",
  description:
    "Bistrica.AI helps European insurance organisations deploy production-grade Agentic AI: claim automation, OCR pipelines, fraud detection, and regulatory compliance.",
  keywords: [
    "agentic AI insurance",
    "generative AI insurance Europe",
    "claim processing automation",
    "OCR insurance documents",
    "AI insurance pipeline",
    "insurance AI consulting",
  ],
  openGraph: {
    title: "Bistrica.AI: Agentic & Generative AI for Insurance",
    description:
      "Production-grade AI solutions for European insurance organisations: claim automation, OCR, fraud detection.",
    siteName: "Bistrica.AI",
    locale: "en_EU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bistrica.AI: Agentic & Generative AI for Insurance",
    description:
      "Production-grade AI solutions for European insurance organisations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bistrica.AI",
  url: "https://bistricaai.vercel.app",
  description:
    "Bistrica.AI helps European insurance organisations deploy production-grade Agentic AI: claim automation, OCR pipelines, fraud detection, and regulatory compliance.",
  areaServed: { "@type": "Place", name: "European Union" },
  knowsAbout: [
    "Agentic AI",
    "Generative AI",
    "Insurance Technology",
    "Machine Learning",
    "GDPR",
    "Solvency II",
    "EU AI Act",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Agentic AI Solutions for Insurance",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Claim Processing Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Document Intelligence and OCR" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fraud Detection" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Underwriting and Risk Pipelines" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Regulatory Compliance Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer-Facing AI Agents" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Skip to main content — EU accessibility requirement (EN 301 549) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

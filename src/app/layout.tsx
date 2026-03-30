import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bistrica.AI — Agentic & Generative AI for Insurance",
  description:
    "Bistrica.AI helps European insurance organisations deploy production-grade Agentic AI — from claim automation and OCR pipelines to fraud detection and regulatory compliance.",
  keywords: [
    "agentic AI insurance",
    "generative AI insurance Europe",
    "claim processing automation",
    "OCR insurance documents",
    "AI insurance pipeline",
    "insurance AI consulting",
  ],
  openGraph: {
    title: "Bistrica.AI — Agentic & Generative AI for Insurance",
    description:
      "Production-grade AI solutions for European insurance organisations — claim automation, OCR, fraud detection.",
    siteName: "Bistrica.AI",
    locale: "en_EU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bistrica.AI — Agentic & Generative AI for Insurance",
    description:
      "Production-grade AI solutions for European insurance organisations.",
  },
  robots: {
    index: true,
    follow: true,
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

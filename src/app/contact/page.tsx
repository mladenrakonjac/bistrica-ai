import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch | Bistrica.AI",
  description:
    "Tell us about your infrastructure, data platform, and AI goals. We review every submission and follow up with a concrete technical perspective.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-background">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-6 border-primary/30 text-primary bg-primary/5 font-semibold tracking-wide text-xs px-3 py-1.5"
          >
            Qualification Form
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground leading-tight mb-4">
            Tell us about your
            <br />
            <span className="gradient-heading">organisation & stack</span>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
            We don&apos;t do generic sales calls. Fill in this form and we&apos;ll
            review your infrastructure, use case context, and AI maturity,
            then come back with a specific, relevant perspective.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

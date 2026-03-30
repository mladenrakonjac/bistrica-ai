import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch — Bistrica.AI",
  description:
    "Tell us about your infrastructure, data platform, and AI goals. We review every submission and follow up with a concrete technical perspective.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium mb-6">
            Qualification Form
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Tell us about your
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              organisation & stack
            </span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
            We don&apos;t do generic sales calls. Fill in this form and we&apos;ll review
            your infrastructure, use case context, and AI maturity — then come
            back with a specific, relevant perspective.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "60%", label: "reduction in claim processing time" },
  { value: "94%", label: "document extraction accuracy" },
  { value: "3×",  label: "faster underwriter decisions" },
  { value: "€M+", label: "fraud losses prevented annually" },
];

const useCases = [
  {
    icon: "🗂️",
    title: "Claim Processing",
    description: "Autonomous agents triage, validate, and route claims with human escalation only when needed. Reduce manual touchpoints by over 70%.",
    tag: "Core Use Case",
  },
  {
    icon: "📄",
    title: "Document Intelligence & OCR",
    description: "Extract structured data from policies, invoices, medical records, and damage reports — across any format, any language.",
    tag: "High ROI",
  },
  {
    icon: "🔍",
    title: "Fraud Detection",
    description: "Graph-based AI agents identify suspicious claim patterns and cross-reference entities in real time before payouts are authorised.",
    tag: "Risk Reduction",
  },
  {
    icon: "📊",
    title: "Underwriting Pipelines",
    description: "Automate risk scoring, policy comparison, and data enrichment pipelines — giving underwriters AI-assisted decisions in seconds.",
    tag: "Efficiency",
  },
  {
    icon: "⚖️",
    title: "Regulatory Compliance",
    description: "AI-assisted GDPR, Solvency II, and IDD compliance checks — automated reporting and audit trail generation.",
    tag: "Governance",
  },
  {
    icon: "💬",
    title: "Customer Experience Agents",
    description: "Intelligent self-service agents handle claims status, policy queries, and first-notice-of-loss — 24/7, in any European language.",
    tag: "CX",
  },
];

const differentiators = [
  { title: "Insurance-Domain Expertise", body: "Every solution is designed around insurance workflows, data structures, and regulatory requirements." },
  { title: "Cloud-Agnostic Architecture", body: "Azure, AWS, GCP — Databricks, Snowflake, Fabric. We build around your existing stack, not the other way round." },
  { title: "Production-First", body: "We skip the pilot treadmill. Agents go live with observability, guardrails, and human-in-the-loop built in from day one." },
  { title: "European Mindset", body: "GDPR, Solvency II, IDD — EU constraints are first-class requirements, not afterthoughts." },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-4xl">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 font-semibold hover:bg-primary/10">
              Agentic AI for European Insurance
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-deep-navy leading-[1.05] tracking-tight mb-6">
              Transform Insurance
              <br />
              <span className="bg-gradient-to-r from-deep-navy via-royal-blue to-sky-blue bg-clip-text text-transparent">
                with Agentic AI
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              Bistrica.AI deploys production-grade AI agents for claims automation,
              document intelligence, fraud detection, and underwriting — purpose-built
              for European insurers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-xl font-semibold px-7 bg-deep-navy hover:bg-royal-blue shadow-md">
                <Link href="/contact">
                  Start the Conversation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold px-7">
                <Link href="/use-cases">Explore Use Cases</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            {stats.map((s) => (
              <Card key={s.label}>
                <CardContent className="p-5">
                  <p className="text-3xl sm:text-4xl font-black text-deep-navy mb-1">{s.value}</p>
                  <p className="text-muted-foreground text-sm leading-snug">{s.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">What We Build</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
              AI solutions built for insurance
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From document processing to autonomous claim agents — covering the full spectrum of AI-powered insurance operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc) => (
              <Card key={uc.title} className="hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <span className="text-2xl">{uc.icon}</span>
                    <Badge variant="secondary" className="text-xs">{uc.tag}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">{uc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{uc.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="ghost" className="text-primary font-medium">
              <Link href="/use-cases">
                View all use cases
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Bistrica ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Why Bistrica.AI</p>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-6 leading-tight">
                Designed for the complexity of European insurance
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Insurance is one of the most data-intensive, regulated, and risk-sensitive industries in Europe.
                Generic AI consulting doesn&apos;t cut it. We bring deep domain expertise, a production-first approach,
                and an architecture that works within your existing cloud and data infrastructure.
              </p>
              <Button asChild className="rounded-xl font-semibold bg-deep-navy hover:bg-royal-blue">
                <Link href="/contact">
                  Tell us about your use case
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {differentiators.map((d) => (
                <Card key={d.title}>
                  <CardContent className="p-5">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-deep-navy to-sky-blue mb-4 rounded-full" />
                    <h3 className="text-foreground font-semibold text-sm mb-2">{d.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{d.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden bg-deep-navy">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/30 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Ready to bring AI agents into
            <br />your insurance operations?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Fill in our qualification form — we&apos;ll review your stack and use case, then schedule a focused technical call.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-xl font-bold px-8 bg-white text-deep-navy hover:bg-sky-blue/10 hover:text-white shadow-xl">
            <Link href="/contact">
              Start the process
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

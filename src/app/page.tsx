import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "60%", label: "reduction in claim processing time" },
  { value: "94%", label: "document extraction accuracy" },
  { value: "3×", label: "faster underwriter decisions" },
  { value: "€M+", label: "fraud losses prevented annually" },
];

const useCases = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    title: "Claim Processing",
    description: "Autonomous agents triage, validate, and route claims with human escalation only when needed. Reduce manual touchpoints by over 70%.",
    tag: "Core Use Case",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Document Intelligence & OCR",
    description: "Extract structured data from policies, invoices, medical records, and damage reports — across any format, any language.",
    tag: "High ROI",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Fraud Detection",
    description: "Graph-based AI agents identify suspicious claim patterns and cross-reference entities in real time before payouts are authorised.",
    tag: "Risk Reduction",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: "Underwriting Pipelines",
    description: "Automate risk scoring, policy comparison, and data enrichment pipelines — giving underwriters AI-assisted decisions in seconds.",
    tag: "Efficiency",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Regulatory Compliance",
    description: "AI-assisted GDPR, Solvency II, and IDD compliance checks — automated reporting and audit trail generation across the policy lifecycle.",
    tag: "Governance",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Customer Experience Agents",
    description: "Intelligent self-service agents handle claims status, policy queries, and first-notice-of-loss — 24/7, in any European language.",
    tag: "CX",
  },
];

const differentiators = [
  {
    title: "Insurance-Domain Expertise",
    body: "Every solution is designed around insurance workflows, data structures, and regulatory requirements. No generic AI templates.",
  },
  {
    title: "Cloud-Agnostic Architecture",
    body: "Azure, AWS, GCP — Databricks, Snowflake, Fabric. We build around your existing stack, not the other way round.",
  },
  {
    title: "Production-First",
    body: "We skip the pilot treadmill. Agents go live with observability, guardrails, and human-in-the-loop built in from day one.",
  },
  {
    title: "European Mindset",
    body: "GDPR, Solvency II, IDD — EU constraints are first-class requirements, not afterthoughts.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-off-white">
        <div className="absolute inset-0 dot-grid" />
        {/* Subtle gradient blobs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-blue/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-blue/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-8 bg-sky-blue/15 text-royal-blue border-sky-blue/30 font-medium px-3 py-1.5 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-royal-blue mr-2 animate-pulse inline-block" />
              Agentic AI for European Insurance
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-deep-navy leading-[1.05] tracking-tight mb-6">
              Transform Insurance
              <br />
              <span className="bg-gradient-to-r from-deep-navy via-royal-blue to-sky-blue bg-clip-text text-transparent">
                with Agentic AI
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-deep-navy/60 leading-relaxed max-w-2xl mb-10">
              Bistrica.AI deploys production-grade AI agents for claims
              automation, document intelligence, fraud detection, and
              underwriting — purpose-built for European insurers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-deep-navy hover:bg-royal-blue text-white font-semibold rounded-xl px-7 shadow-md shadow-deep-navy/20 transition-all duration-200">
                <Link href="/contact">
                  Start the Conversation
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl px-7 border-border text-deep-navy hover:bg-deep-navy/5 font-semibold">
                <Link href="/use-cases">Explore Use Cases</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-border bg-white shadow-sm">
                <CardContent className="p-5">
                  <div className="text-3xl sm:text-4xl font-black text-deep-navy mb-1">
                    {stat.value}
                  </div>
                  <div className="text-deep-navy/55 text-sm leading-snug">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-royal-blue text-sm font-semibold uppercase tracking-widest mb-3">
              What We Build
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-deep-navy mb-4">
              AI solutions built for insurance
            </h2>
            <p className="text-deep-navy/60 text-lg max-w-2xl mx-auto">
              From document processing to autonomous claim agents — we cover the
              full spectrum of AI-powered insurance operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc) => (
              <Card key={uc.title} className="border-border hover:border-royal-blue/30 hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 bg-sky-blue/15 rounded-xl flex items-center justify-center text-royal-blue group-hover:bg-royal-blue/15 transition-colors">
                      {uc.icon}
                    </div>
                    <Badge variant="secondary" className="bg-sky-blue/10 text-royal-blue border-sky-blue/20 text-xs">
                      {uc.tag}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-deep-navy font-bold text-base mb-2">{uc.title}</h3>
                  <p className="text-deep-navy/60 text-sm leading-relaxed">{uc.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="ghost" className="text-royal-blue hover:text-deep-navy hover:bg-sky-blue/10 font-medium">
              <Link href="/use-cases">
                View all use cases
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Bistrica */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-royal-blue text-sm font-semibold uppercase tracking-widest mb-3">
                Why Bistrica.AI
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-deep-navy mb-6 leading-tight">
                Designed for the complexity of European insurance
              </h2>
              <p className="text-deep-navy/60 text-lg leading-relaxed mb-8">
                Insurance is one of the most data-intensive, regulated, and
                risk-sensitive industries in Europe. Generic AI consulting
                doesn&apos;t cut it. We bring deep domain expertise, a
                production-first approach, and an architecture that works within
                your existing cloud and data infrastructure.
              </p>
              <Button asChild className="bg-deep-navy hover:bg-royal-blue text-white rounded-xl font-semibold">
                <Link href="/contact">
                  Tell us about your use case
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((d) => (
                <Card key={d.title} className="border-border bg-white shadow-sm">
                  <CardContent className="p-5">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-deep-navy to-sky-blue mb-4 rounded-full" />
                    <h3 className="text-deep-navy font-semibold text-sm mb-2">{d.title}</h3>
                    <p className="text-deep-navy/60 text-sm leading-relaxed">{d.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden bg-deep-navy">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Ready to bring AI agents into
            <br />your insurance operations?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Fill in our qualification form — we&apos;ll review your stack and use
            case, then schedule a focused technical call.
          </p>
          <Button asChild size="lg" className="bg-white text-deep-navy hover:bg-sky-blue/20 hover:text-white font-bold rounded-xl px-8 shadow-xl transition-all duration-200">
            <Link href="/contact">
              Start the process
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

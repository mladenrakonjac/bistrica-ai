import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "60%", label: "Claim processing time reduction" },
  { value: "94%", label: "Document extraction accuracy" },
  { value: "3×",  label: "Faster underwriter decisions" },
  { value: "€M+", label: "Fraud losses prevented annually" },
];

const useCases = [
  {
    title: "Claim Processing Automation",
    description: "Autonomous agents triage, validate, and route claims end-to-end. Human escalation triggers only on confidence threshold exceptions.",
    tag: "High Impact",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Document Intelligence & OCR",
    description: "Extract structured fields from policies, damage reports, medical records, and invoices — any format, any European language.",
    tag: "High ROI",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
        <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
  {
    title: "Fraud Detection",
    description: "Graph-based agents cross-reference entities, flag duplicate submissions, and score anomaly risk in real time — before payout authorisation.",
    tag: "Risk Reduction",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Underwriting Pipelines",
    description: "Automated data enrichment, risk scoring, and policy comparison — giving underwriters AI-assisted decisions in seconds, not days.",
    tag: "Efficiency",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: "Regulatory Compliance",
    description: "Automated GDPR, Solvency II, and IDD compliance checks with audit-trail generation — embedded into existing policy workflows.",
    tag: "Governance",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Customer-Facing AI Agents",
    description: "24/7 self-service for claims status, policy queries, and FNOL — in any EU language, with seamless handoff when human touch is needed.",
    tag: "CX",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
      </svg>
    ),
  },
];

const differentiators = [
  {
    number: "01",
    title: "Insurance Domain Depth",
    body: "Every solution is built around insurance data structures, workflow logic, and regulatory obligations — not adapted from a horizontal AI template.",
  },
  {
    number: "02",
    title: "Cloud & Stack Agnostic",
    body: "Azure, AWS, GCP. Databricks, Snowflake, Fabric. We fit the architecture around your existing infrastructure — no forced migrations.",
  },
  {
    number: "03",
    title: "Production, Not Pilots",
    body: "We skip the demo treadmill. Agents ship with observability, guardrails, and human-in-the-loop wired in from day one.",
  },
  {
    number: "04",
    title: "European Regulatory Mindset",
    body: "GDPR, Solvency II, IDD — compliance requirements are first-class constraints, not project afterthoughts.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─────────── Hero ─────────── */}
      <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky-blue/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-royal-blue/6 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-8 border-primary/30 text-primary bg-primary/5 font-semibold tracking-wide text-xs px-3 py-1.5"
            >
              Agentic & Generative AI · European Insurance
            </Badge>

            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-black text-deep-navy leading-[1.04] tracking-tight mb-6 text-balance">
              Insurance AI
              <br />
              <span className="gradient-heading">that ships to production</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
              Bistrica.AI builds production-grade Agentic AI for European
              insurers — claims automation, document intelligence, fraud
              detection, and underwriting pipelines.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl font-semibold px-7 shadow-sm">
                <Link href="/contact">
                  Start the conversation
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold px-7">
                <Link href="/use-cases">Explore use cases</Link>
              </Button>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-16 max-w-3xl">
            {stats.map((s) => (
              <Card key={s.label} className="border-border/60 shadow-none bg-white/70 backdrop-blur-sm">
                <CardContent className="px-5 py-4">
                  <p className="text-2xl sm:text-3xl font-black text-deep-navy tracking-tight mb-0.5">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">{s.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Use Cases ─────────── */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Solutions</p>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground">Built for insurance operations</h2>
            </div>
            <Button asChild variant="ghost" size="sm" className="text-primary shrink-0 font-semibold">
              <Link href="/use-cases">
                All use cases
                <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc) => (
              <Card
                key={uc.title}
                className="border-border/60 bg-white hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      {uc.icon}
                    </div>
                    <Badge variant="secondary" className="text-[11px] font-semibold">
                      {uc.tag}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-[15px] text-foreground mb-2 leading-snug">
                    {uc.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {uc.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Differentiators ─────────── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Why us</p>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-6">
                Designed for the complexity of European insurance
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Generic AI consulting produces pilots that never reach
                production. We bring insurance domain expertise, a
                production-first delivery approach, and architecture that fits
                your existing cloud and data infrastructure.
              </p>
              <Button asChild className="rounded-xl font-semibold">
                <Link href="/contact">
                  Tell us about your use case
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Button>
            </div>

            <div className="space-y-px">
              {differentiators.map((d, i) => (
                <div key={d.number}>
                  <div className="flex gap-5 py-5">
                    <span className="text-xs font-black text-primary/40 mt-0.5 w-6 shrink-0 tabular-nums">
                      {d.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-[15px] text-foreground mb-1">{d.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
                    </div>
                  </div>
                  {i < differentiators.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="relative py-24 overflow-hidden bg-deep-navy">
        <div className="absolute inset-0 dot-grid opacity-[0.12] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-royal-blue/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-sky-blue/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 text-balance leading-tight">
            Ready to move AI agents
            <br />into your operations?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Complete our qualification form and we&apos;ll review your stack,
            use case, and readiness — then schedule a focused technical call.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-xl font-bold px-8 bg-white text-deep-navy hover:bg-sky-blue hover:text-white shadow-xl transition-colors duration-200"
          >
            <Link href="/contact">
              Begin qualification
              <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

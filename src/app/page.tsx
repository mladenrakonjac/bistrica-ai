import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Files,
  ShieldAlert,
  BarChart3,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
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
    description:
      "Autonomous agents triage, validate, and route claims end-to-end. Human escalation triggers only on confidence threshold exceptions.",
    tag: "High Impact",
    icon: FileText,
  },
  {
    title: "Document Intelligence & OCR",
    description:
      "Extract structured fields from policies, damage reports, medical records, and invoices — any format, any European language.",
    tag: "High ROI",
    icon: Files,
  },
  {
    title: "Fraud Detection",
    description:
      "Graph-based agents cross-reference entities, flag duplicate submissions, and score anomaly risk in real time — before payout authorisation.",
    tag: "Risk Reduction",
    icon: ShieldAlert,
  },
  {
    title: "Underwriting Pipelines",
    description:
      "Automated data enrichment, risk scoring, and policy comparison — giving underwriters AI-assisted decisions in seconds, not days.",
    tag: "Efficiency",
    icon: BarChart3,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Automated GDPR, Solvency II, and IDD compliance checks with audit-trail generation — embedded into existing policy workflows.",
    tag: "Governance",
    icon: ShieldCheck,
  },
  {
    title: "Customer-Facing AI Agents",
    description:
      "24/7 self-service for claims status, policy queries, and FNOL — in any EU language, with seamless handoff when human touch is needed.",
    tag: "CX",
    icon: MessageCircle,
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
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-primary/6 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-8 font-semibold tracking-wide text-xs px-3 py-1.5">
              Agentic & Generative AI · European Insurance
            </Badge>

            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-black text-foreground leading-[1.04] tracking-tight mb-6 text-balance">
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
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold px-7">
                <Link href="/use-cases">Explore use cases</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-16 max-w-3xl">
            {stats.map((s) => (
              <Card key={s.label} className="bg-white/70 backdrop-blur-sm">
                <CardContent className="px-5 py-4">
                  <p className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mb-0.5">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">{s.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                Solutions
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground">
                Built for insurance operations
              </h2>
            </div>
            <Button asChild variant="ghost" size="sm" className="text-primary shrink-0 font-semibold">
              <Link href="/use-cases">
                All use cases
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map(({ title, description, tag, icon: Icon }) => (
              <Card
                key={title}
                className="bg-white hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="secondary" className="text-[11px] font-semibold">
                      {tag}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-[15px] text-foreground mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiators ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Why us
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-6">
                Designed for the complexity of European insurance
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Generic AI consulting produces pilots that never reach production.
                We bring insurance domain expertise, a production-first delivery
                approach, and architecture that fits your existing cloud and data
                infrastructure.
              </p>
              <Button asChild className="rounded-xl font-semibold">
                <Link href="/contact">
                  Tell us about your use case
                  <ArrowRight className="w-4 h-4" />
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

      {/* ── CTA ── */}
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
            Complete our qualification form and we&apos;ll review your stack, use
            case, and readiness — then schedule a focused technical call.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-xl font-bold px-8 bg-white text-deep-navy hover:bg-accent hover:text-white shadow-xl transition-colors duration-200"
          >
            <Link href="/contact">
              Begin qualification
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

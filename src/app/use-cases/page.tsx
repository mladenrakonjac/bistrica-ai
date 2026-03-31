import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Use Cases | Bistrica.AI",
  description:
    "Discover how Agentic AI transforms insurance operations: claim processing, OCR, fraud detection, underwriting, and more.",
};

const useCases = [
  {
    id: "claims",
    tag: "Core Use Case",
    title: "Automated Claim Processing",
    headline: "From first notice to settlement, autonomously",
    description:
      "Traditional claim processing is slow, expensive, and inconsistent. Agentic AI orchestrates the full workflow: validates the policy, extracts data from submitted documents, cross-references coverage terms, calculates payout eligibility, and escalates to a human only when the case falls outside confidence thresholds.",
    outcomes: [
      "60–70% reduction in average claim handling time",
      "Consistent application of policy terms across all claim types",
      "Automated audit trail for every decision step",
      "Configurable human-in-the-loop for complex or high-value claims",
    ],
    stack: ["LLM agents", "Document extraction", "Rules engine", "Workflow orchestration"],
  },
  {
    id: "ocr",
    tag: "Document Intelligence",
    title: "OCR & Document Extraction",
    headline: "Structure any insurance document, at scale",
    description:
      "Policies, damage reports, medical records, invoices, ID documents: insurance generates massive volumes of unstructured data. Our document intelligence pipeline uses vision-language models to extract structured data from any format, in any European language, with confidence scoring and validation against business rules.",
    outcomes: [
      "94%+ extraction accuracy across document types",
      "Multi-language support: DE, FR, IT, ES, PL, and more",
      "Structured output directly into your data platform",
      "Human review queue for low-confidence extractions",
    ],
    stack: ["Vision-language models", "Multi-modal extraction", "Schema validation", "Structured storage"],
  },
  {
    id: "fraud",
    tag: "Risk Reduction",
    title: "Fraud Detection",
    headline: "Identify suspicious patterns before payout",
    description:
      "AI agents operating on graph-structured data identify entity relationships, cross-reference claim history, detect duplicate submissions, and flag anomalies in real time, before authorisation. Unlike rule-based systems, agentic fraud detection adapts to new patterns without manual rule updates.",
    outcomes: [
      "Real-time fraud scoring at claim intake",
      "Graph-based entity resolution across claims and policies",
      "Anomaly detection tuned to your claims distribution",
      "Explainable outputs for regulatory and legal defensibility",
    ],
    stack: ["Graph analytics", "Anomaly detection models", "Entity resolution", "Streaming pipelines"],
  },
  {
    id: "underwriting",
    tag: "Underwriting",
    title: "Underwriting & Risk Pipelines",
    headline: "AI-assisted decisions in seconds, not days",
    description:
      "AI pipelines automate data enrichment, compute risk scores, generate policy comparison summaries, and surface recommendations to underwriters, dramatically reducing the time from application to quote while improving consistency.",
    outcomes: [
      "Automated data enrichment from internal and external sources",
      "Standardised risk scoring across product lines",
      "AI-generated underwriting summaries for complex cases",
      "Full traceability: every score, every data source",
    ],
    stack: ["Data enrichment pipelines", "Scoring models", "LLM summarisation", "Policy management APIs"],
  },
  {
    id: "compliance",
    tag: "Governance",
    title: "Regulatory Compliance Automation",
    headline: "GDPR, Solvency II, IDD and EU AI Act: automated and auditable",
    description:
      "AI agents perform ongoing compliance checks against GDPR data handling requirements, Solvency II reporting obligations, IDD documentation standards, and EU AI Act high-risk AI system obligations, generating audit-ready reports and flagging deviations before they become regulatory findings.",
    outcomes: [
      "Automated compliance checks embedded in existing workflows",
      "GDPR-aware data handling throughout the pipeline",
      "Solvency II data quality and reporting automation",
      "EU AI Act high-risk AI system documentation and logging",
      "Audit trail generation for regulatory submissions",
    ],
    stack: ["Policy-as-code", "Compliance rule engine", "Automated reporting", "Data lineage tracking"],
  },
  {
    id: "customer",
    tag: "Customer Experience",
    title: "Customer-Facing AI Agents",
    headline: "24/7 service across all European languages",
    description:
      "Intelligent agents handle claims status, coverage queries, policy changes, and first notice of loss at scale, in any EU language, routing to human agents only when genuinely needed.",
    outcomes: [
      "First-notice-of-loss capture without human involvement",
      "Multi-language support across all EU member languages",
      "Claims status and policy query resolution fully automated",
      "Seamless handoff to human agents with full context",
    ],
    stack: ["Conversational AI", "Multi-language models", "CRM integration", "Escalation workflows"],
  },
];

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-background overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 font-semibold tracking-wide text-xs px-3 py-1.5 animate-fade-in">
            Insurance AI Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-5 animate-fade-in-up [animation-delay:80ms]">
            AI use cases built for
            <br />
            <span className="gradient-heading">insurance operations</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Every use case here has been designed around real insurance workflows, not adapted from a generic AI template.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {useCases.map((uc, i) => (
            <Card key={uc.id} className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary">{uc.tag}</Badge>
                      <span className="text-muted-foreground/50 text-sm font-medium tabular-nums">
                        0{i + 1}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
                      {uc.title}
                    </h2>
                    <p className="text-primary font-medium mb-5">{uc.headline}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {uc.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-foreground font-semibold text-sm mb-3">Outcomes</h3>
                      <ul className="space-y-2">
                        {uc.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-3 text-muted-foreground text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-foreground font-semibold text-sm mb-3">Technology Components</h3>
                      <div className="flex flex-wrap gap-2">
                        {uc.stack.map((item) => (
                          <Badge key={item} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Have a specific use case in mind?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Tell us about your infrastructure, your data, and your challenge. We&apos;ll come back with a concrete approach.
          </p>
          <Button asChild size="lg" className="rounded-xl font-semibold px-8">
            <Link href="/contact">
              Start the qualification
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

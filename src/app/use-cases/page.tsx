import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases — Bistrica.AI",
  description:
    "Discover how Agentic AI transforms insurance operations — claim processing, OCR, fraud detection, underwriting, and more.",
};

const useCases = [
  {
    id: "claims",
    tag: "Core Use Case",
    title: "Automated Claim Processing",
    headline: "From first notice to settlement — autonomously",
    description:
      "Traditional claim processing is slow, expensive, and inconsistent. Agentic AI changes this fundamentally. Instead of routing through multiple departments, an agent orchestrates the full workflow: validates the policy, extracts data from submitted documents, cross-references coverage terms, calculates payout eligibility, and routes to a human only when the case falls outside confidence thresholds.",
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
    headline: "Structure any insurance document — at scale",
    description:
      "Policies, damage reports, medical records, invoices, ID documents, certificates of coverage — insurance generates massive amounts of unstructured data. Our document intelligence pipeline uses vision-language models to extract structured data from any format, in any European language, with confidence scoring and validation against business rules.",
    outcomes: [
      "94%+ extraction accuracy across document types",
      "Multi-language support — DE, FR, IT, ES, PL, and more",
      "Structured output directly into your data platform",
      "Human review queue for low-confidence extractions",
    ],
    stack: ["Vision-language models", "Multi-modal extraction", "Schema validation", "Delta tables / structured storage"],
  },
  {
    id: "fraud",
    tag: "Risk Reduction",
    title: "Fraud Detection",
    headline: "Identify suspicious patterns before payout",
    description:
      "Insurance fraud costs European insurers billions annually. AI agents operating on graph-structured data can identify entity relationships, cross-reference claim history, detect duplicate submissions, and flag statistical anomalies in real time — before authorisation. Unlike rule-based systems, agentic fraud detection adapts to new patterns without manual rule updates.",
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
      "Underwriting decisions require synthesising data from many sources — credit, property, health, weather, claims history. AI pipelines automate data enrichment, compute risk scores, generate policy comparison summaries, and surface recommendations to underwriters — dramatically reducing the time from application to quote while improving consistency.",
    outcomes: [
      "Automated data enrichment from internal and external sources",
      "Standardised risk scoring across product lines",
      "AI-generated underwriting summaries for complex cases",
      "Full traceability — every score, every data source",
    ],
    stack: ["Data enrichment pipelines", "Scoring models", "LLM summarisation", "Policy management API integration"],
  },
  {
    id: "compliance",
    tag: "Governance",
    title: "Regulatory Compliance Automation",
    headline: "GDPR, Solvency II, IDD — automated and auditable",
    description:
      "European insurance is subject to an ever-increasing compliance burden. AI agents can perform ongoing compliance checks against GDPR data handling requirements, Solvency II reporting obligations, and IDD documentation standards — generating audit-ready reports and flagging deviations before they become regulatory findings.",
    outcomes: [
      "Automated compliance checks embedded in existing workflows",
      "GDPR-aware data handling throughout the pipeline",
      "Solvency II data quality and reporting automation",
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
      "Policyholders expect fast, accurate answers — on claims status, coverage queries, policy changes, and first notice of loss. Intelligent agents handle these interactions at scale, in any language, routing to human agents only when genuinely needed. The result: lower operational cost, faster resolution, and better customer satisfaction.",
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium mb-6">
            Insurance AI Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            AI use cases built for
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              insurance operations
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Every use case here has been designed around real insurance
            workflows — not adapted from a generic AI template. We focus on
            production impact, not demo impressiveness.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {useCases.map((uc, i) => (
            <div
              key={uc.id}
              className="bg-navy-800 border border-white/5 rounded-3xl p-8 lg:p-10 hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full">
                      {uc.tag}
                    </span>
                    <span className="text-slate-600 text-sm">0{i + 1}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    {uc.title}
                  </h2>
                  <p className="text-blue-400 font-medium mb-5">{uc.headline}</p>
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                    {uc.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-3">
                      Outcomes
                    </h3>
                    <ul className="space-y-2">
                      {uc.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-3 text-slate-300 text-sm"
                        >
                          <svg
                            className="w-4 h-4 text-green-400 mt-0.5 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-sm mb-3">
                      Technology Components
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {uc.stack.map((item) => (
                        <span
                          key={item}
                          className="text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Have a specific use case in mind?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Tell us about your infrastructure, your data, and your challenge —
            we&apos;ll come back with a concrete approach.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 text-base"
          >
            Start the qualification
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Agentic Lifecycle — Bistrica.AI",
  description: "How we design, build, deploy, and govern production Agentic AI systems for European insurance organisations.",
};

const phases = [
  {
    number: "01",
    name: "Discover & Define",
    color: "bg-deep-navy",
    duration: "Weeks 1–2",
    description: "Before writing a single line of code, we map your existing landscape. This phase ensures the agent we build solves the right problem — not the most technically interesting one.",
    activities: [
      "Stakeholder interviews — claims, underwriting, IT, compliance",
      "As-is workflow mapping and pain point quantification",
      "Data availability and quality assessment",
      "Define scope: which decisions get automated, which stay human",
      "Regulatory and compliance requirements scoping",
      "ROI framing and success metrics definition",
    ],
    outputs: [
      "Use case brief with business justification",
      "Data landscape map",
      "Agent scope document (in-scope vs. escalation triggers)",
      "Compliance checklist",
    ],
  },
  {
    number: "02",
    name: "Architect & Design",
    color: "bg-royal-blue",
    duration: "Weeks 2–4",
    description: "We design the agent architecture to fit your existing cloud, data, and model infrastructure — not the other way around. No vendor lock-in, no big-bang migrations.",
    activities: [
      "Agent topology design — single agent vs. multi-agent orchestration",
      "Tool and API integration mapping (policy systems, CRM, data platforms)",
      "LLM selection and evaluation for the specific task",
      "Data pipeline design (ingestion, transformation, retrieval)",
      "Human-in-the-loop design — escalation rules and review interfaces",
      "Observability and guardrail architecture",
    ],
    outputs: [
      "Architecture decision record (ADR)",
      "Agent interaction diagram",
      "Data flow specification",
      "Technology stack confirmation",
    ],
  },
  {
    number: "03",
    name: "Build & Evaluate",
    color: "bg-sky-blue",
    duration: "Weeks 4–10",
    description: "Iterative agent development with continuous evaluation against real insurance data. We measure accuracy, reliability, and edge-case handling — not just happy-path demos.",
    activities: [
      "Agent development with your framework of choice (LangGraph, AutoGen, custom)",
      "Prompt engineering and iterative refinement against domain data",
      "Evaluation harness setup — automated test suites for agent behaviour",
      "Integration build — connecting agents to your existing systems",
      "Failure mode testing — adversarial inputs, data gaps, edge cases",
      "Performance benchmarking against your defined success metrics",
    ],
    outputs: [
      "Functional agent with integration connectors",
      "Evaluation report — accuracy, coverage, failure modes",
      "Test suite for regression testing",
      "Integration documentation",
    ],
  },
  {
    number: "04",
    name: "Deploy & Govern",
    color: "bg-royal-blue",
    duration: "Weeks 10–14",
    description: "Production deployment is not the end — it's the start of a governed, monitored system. We ensure your agent operates safely within your infrastructure, with full observability.",
    activities: [
      "Staged rollout — shadow mode → limited production → full deployment",
      "Observability configuration (LLM traces, latency, error rates, drift)",
      "Guardrail implementation — input/output validation, confidence thresholds",
      "Human review workflow integration",
      "Runbook creation for operational teams",
      "Compliance documentation for audit readiness",
    ],
    outputs: [
      "Production-deployed agent on your infrastructure",
      "Observability dashboard",
      "Operational runbook",
      "Compliance and audit documentation",
    ],
  },
  {
    number: "05",
    name: "Monitor & Improve",
    color: "bg-deep-navy",
    duration: "Ongoing",
    description: "Agentic systems degrade over time as data distributions shift and business rules change. Continuous monitoring and improvement cycles keep the agent performing at production quality.",
    activities: [
      "Continuous performance monitoring against baseline metrics",
      "Data drift detection and model freshness assessment",
      "Human feedback loop integration — reviewing escalated cases",
      "Periodic evaluation against new test cases",
      "Prompt and instruction updates as business rules evolve",
      "Cost optimisation — token efficiency, caching, model routing",
    ],
    outputs: [
      "Monthly performance reports",
      "Improvement recommendations",
      "Updated agent versions with regression tests",
      "Cost and efficiency reports",
    ],
  },
];

const principles = [
  { title: "Human-in-the-Loop by Design", body: "Every agent has explicit boundaries for autonomous action and escalation. Autonomous does not mean unaccountable." },
  { title: "Fit-to-Stack, Not Rip-and-Replace", body: "We architect around your existing cloud, data platform, and model infrastructure. No forced migrations, no proprietary lock-in." },
  { title: "Evaluation Before Deployment", body: "Agents are evaluated against real insurance data and adversarial scenarios before they touch production." },
  { title: "Observability as a First-Class Requirement", body: "Every agent ships with traces, metrics, and alerting. You know what the agent is doing, why, and when it's drifting." },
  { title: "Regulatory Defensibility", body: "Every decision is logged, explainable, and traceable — meeting GDPR, Solvency II, and IDD documentation requirements." },
  { title: "Iterative, Not Waterfall", body: "We deliver working agents in iterations. You see running software within weeks, not slide decks after 6 months." },
];

export default function AgenticLifecyclePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-off-white overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-6 bg-sky-blue/15 text-royal-blue border-sky-blue/30">
            Our Methodology
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-deep-navy leading-tight mb-5">
            The Agentic AI
            <br />
            <span className="bg-gradient-to-r from-deep-navy via-royal-blue to-sky-blue bg-clip-text text-transparent">
              Delivery Lifecycle
            </span>
          </h1>
          <p className="text-deep-navy/60 text-lg max-w-2xl leading-relaxed">
            A structured, repeatable process for taking Agentic AI from business problem to production — without the typical AI project pitfalls.
          </p>
        </div>
      </section>

      {/* Timeline visual */}
      <section className="py-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between relative py-6">
            <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-deep-navy via-royal-blue via-sky-blue via-royal-blue to-deep-navy opacity-20" />
            {phases.map((phase) => (
              <div key={phase.number} className="relative flex flex-col items-center gap-2 z-10">
                <div className={`w-11 h-11 rounded-2xl ${phase.color} flex items-center justify-center shadow-md`}>
                  <span className="text-white font-black text-sm">{phase.number}</span>
                </div>
                <span className="text-deep-navy/60 text-xs font-medium text-center whitespace-nowrap">{phase.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {phases.map((phase) => (
            <Card key={phase.number} className="border-border hover:border-royal-blue/30 hover:shadow-sm transition-all duration-200">
              <CardContent className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-11 h-11 rounded-2xl ${phase.color} flex items-center justify-center shadow-md`}>
                        <span className="text-white font-black text-sm">{phase.number}</span>
                      </div>
                      <div>
                        <p className="text-deep-navy/40 text-xs font-medium mb-0.5">{phase.duration}</p>
                        <h2 className="text-deep-navy font-black text-xl">{phase.name}</h2>
                      </div>
                    </div>
                    <p className="text-deep-navy/60 text-sm leading-relaxed">{phase.description}</p>
                  </div>

                  <div>
                    <h3 className="text-deep-navy font-semibold text-sm mb-3">Key Activities</h3>
                    <ul className="space-y-2">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2 text-deep-navy/60 text-xs leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-royal-blue mt-1.5 shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-deep-navy font-semibold text-sm mb-3">Deliverables</h3>
                    <ul className="space-y-2">
                      {phase.outputs.map((output) => (
                        <li key={output} className="flex items-start gap-2 text-deep-navy/70 text-xs leading-relaxed">
                          <svg className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-royal-blue text-sm font-semibold uppercase tracking-widest mb-3">Our Principles</p>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-navy">How we think about Agentic AI</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p) => (
              <Card key={p.title} className="border-border bg-white">
                <CardContent className="p-6">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-deep-navy to-sky-blue mb-4 rounded-full" />
                  <h3 className="text-deep-navy font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-deep-navy/60 text-sm leading-relaxed">{p.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-deep-navy mb-4">
            Want to start the lifecycle for your use case?
          </h2>
          <p className="text-deep-navy/60 text-lg mb-8">
            Tell us about your organisation, your infrastructure, and where you are in your AI journey.
          </p>
          <Button asChild size="lg" className="bg-deep-navy hover:bg-royal-blue text-white rounded-xl font-semibold px-8">
            <Link href="/contact">
              Begin the qualification
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

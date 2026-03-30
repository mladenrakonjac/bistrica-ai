import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Agentic Lifecycle — Bistrica.AI",
  description:
    "How we design, build, deploy, and govern production Agentic AI systems for European insurance organisations.",
};

const phases = [
  {
    number: "01",
    name: "Discover & Define",
    colorClass: "bg-foreground",
    duration: "Weeks 1–2",
    description:
      "Before writing a single line of code, we map your existing landscape. This phase ensures the agent we build solves the right problem — not the most technically interesting one.",
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
    colorClass: "bg-primary",
    duration: "Weeks 2–4",
    description:
      "We design the agent architecture to fit your existing cloud, data, and model infrastructure — not the other way around. No vendor lock-in, no big-bang migrations.",
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
    colorClass: "bg-accent",
    duration: "Weeks 4–10",
    description:
      "Iterative agent development with continuous evaluation against real insurance data. We measure accuracy, reliability, and edge-case handling — not just happy-path demos.",
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
    colorClass: "bg-primary",
    duration: "Weeks 10–14",
    description:
      "Production deployment is not the end — it's the start of a governed, monitored system. We ensure your agent operates safely within your infrastructure, with full observability.",
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
    colorClass: "bg-foreground",
    duration: "Ongoing",
    description:
      "Agentic systems degrade over time as data distributions shift and business rules change. Continuous monitoring and improvement cycles keep the agent performing at production quality.",
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
  { title: "Fit-to-Stack, Not Rip-and-Replace", body: "We architect around your existing cloud, data platform, and model infrastructure. No forced migrations, no lock-in." },
  { title: "Evaluation Before Deployment", body: "Agents are evaluated against real insurance data and adversarial scenarios before they touch production." },
  { title: "Observability as a First-Class Requirement", body: "Every agent ships with traces, metrics, and alerting. You know what the agent is doing, why, and when it's drifting." },
  { title: "Regulatory Defensibility", body: "Every decision is logged, explainable, and traceable — meeting GDPR, Solvency II, and IDD documentation requirements." },
  { title: "Iterative, Not Waterfall", body: "We deliver working agents in iterations. You see running software within weeks, not slide decks after 6 months." },
];

export default function AgenticLifecyclePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-background overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 font-semibold tracking-wide text-xs px-3 py-1.5 animate-fade-in">
            Our Methodology
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-5 animate-fade-in-up [animation-delay:80ms]">
            The Agentic AI
            <br />
            <span className="gradient-heading">Delivery Lifecycle</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            A structured, repeatable process for taking Agentic AI from business
            problem to production — without the typical AI project pitfalls.
          </p>
        </div>
      </section>

      {/* Timeline strip */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between relative py-6">
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-px bg-border" />
            {phases.map((phase) => (
              <div key={phase.number} className="relative flex flex-col items-center gap-2 z-10">
                <div className={`w-10 h-10 rounded-xl ${phase.colorClass} flex items-center justify-center shadow-sm`}>
                  <span className="text-white font-black text-sm">{phase.number}</span>
                </div>
                <span className="text-muted-foreground text-xs font-medium text-center whitespace-nowrap">
                  {phase.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase cards */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {phases.map((phase) => (
            <Card key={phase.number} className="hover:shadow-sm transition-shadow duration-200">
              <CardContent className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${phase.colorClass} flex items-center justify-center shadow-sm shrink-0`}>
                        <span className="text-white font-black text-sm">{phase.number}</span>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs font-medium">{phase.duration}</p>
                        <h2 className="text-foreground font-black text-xl">{phase.name}</h2>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                  </div>

                  <div>
                    <h3 className="text-foreground font-semibold text-sm mb-3">Key Activities</h3>
                    <ul className="space-y-2">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-foreground font-semibold text-sm mb-3">Deliverables</h3>
                    <ul className="space-y-2">
                      {phase.outputs.map((output) => (
                        <li key={output} className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Our Principles</p>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">How we think about Agentic AI</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p) => (
              <Card key={p.title}>
                <CardContent className="p-6">
                  <Separator className="mb-4 w-8" />
                  <h3 className="text-foreground font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Want to start the lifecycle for your use case?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Tell us about your organisation, infrastructure, and where you are in your AI journey.
          </p>
          <Button asChild size="lg" className="rounded-xl font-semibold px-8">
            <Link href="/contact">
              Begin the qualification
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

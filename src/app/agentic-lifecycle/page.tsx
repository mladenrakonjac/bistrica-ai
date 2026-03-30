import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic Lifecycle — Bistrica.AI",
  description:
    "How we design, build, deploy, and govern production Agentic AI systems for European insurance organisations.",
};

const phases = [
  {
    number: "01",
    name: "Discover & Define",
    color: "from-blue-500 to-blue-600",
    accent: "blue",
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
    color: "from-cyan-500 to-cyan-600",
    accent: "cyan",
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
    color: "from-teal-500 to-teal-600",
    accent: "teal",
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
    color: "from-violet-500 to-violet-600",
    accent: "violet",
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
    color: "from-orange-500 to-orange-600",
    accent: "orange",
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
  {
    title: "Human-in-the-Loop by Design",
    body: "Every agent we build has explicit boundaries for what it handles autonomously and when it escalates. Autonomous does not mean unaccountable.",
  },
  {
    title: "Fit-to-Stack, Not Rip-and-Replace",
    body: "We architect around your existing cloud provider, data platform, and model infrastructure. No forced migrations, no proprietary lock-in.",
  },
  {
    title: "Evaluation Before Deployment",
    body: "Agents are evaluated against real insurance data and adversarial scenarios before they touch production. Impressive demos are not enough.",
  },
  {
    title: "Observability as a First-Class Requirement",
    body: "Every agent ships with traces, metrics, and alerting. You know exactly what the agent is doing, why, and when it's drifting.",
  },
  {
    title: "Regulatory Defensibility",
    body: "Every decision made by an agent is logged, explainable, and traceable — meeting the documentation requirements of GDPR, Solvency II, and IDD.",
  },
  {
    title: "Iterative, Not Waterfall",
    body: "We deliver working agents in iterations, not 6-month projects. You see running software within weeks, not slide decks.",
  },
];

export default function AgenticLifecyclePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium mb-6">
            Our Methodology
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            The Agentic AI
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Delivery Lifecycle
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A structured, repeatable process for taking Agentic AI from
            business problem to production system — without the typical AI
            project pitfalls.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline visual */}
          <div className="hidden lg:flex items-center justify-between mb-16 relative">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-orange-500/50" />
            {phases.map((phase) => (
              <div key={phase.number} className="relative flex flex-col items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg z-10`}>
                  <span className="text-white font-black text-sm">{phase.number}</span>
                </div>
                <span className="text-slate-400 text-xs font-medium text-center whitespace-nowrap">{phase.name}</span>
              </div>
            ))}
          </div>

          {/* Phase details */}
          <div className="space-y-6">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="bg-navy-800 border border-white/5 rounded-3xl p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-black text-sm">{phase.number}</span>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs font-medium mb-0.5">{phase.duration}</p>
                        <h2 className="text-white font-black text-xl">{phase.name}</h2>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{phase.description}</p>
                  </div>

                  <div className="lg:col-span-1">
                    <h3 className="text-white font-semibold text-sm mb-3">Key Activities</h3>
                    <ul className="space-y-2">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-1">
                    <h3 className="text-white font-semibold text-sm mb-3">Deliverables</h3>
                    <ul className="space-y-2">
                      {phase.outputs.map((output) => (
                        <li key={output} className="flex items-start gap-2 text-slate-300 text-xs leading-relaxed">
                          <svg className="w-3.5 h-3.5 text-green-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-navy-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-electric-cyan text-sm font-semibold uppercase tracking-widest mb-3">
              Our Principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              How we think about Agentic AI
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p) => (
              <div key={p.title} className="bg-navy-800 border border-white/5 rounded-2xl p-6">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 rounded-full" />
                <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Want to start the lifecycle for your use case?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Tell us about your organisation, your infrastructure, and where you
            are in your AI journey. We&apos;ll identify where to start.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 text-base"
          >
            Begin the qualification
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

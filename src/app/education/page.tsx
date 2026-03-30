import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education — Bistrica.AI",
  description:
    "Learn the foundations of Agentic AI, LLMs, and AI pipelines — focused on insurance applications and European regulatory context.",
};

const articles = [
  {
    category: "Foundations",
    title: "What is an AI Agent — and how is it different from a chatbot?",
    description:
      "The word 'agent' gets used loosely. This article draws a precise distinction between a prompted LLM, a RAG system, and a true agentic system — and explains why the distinction matters for insurance deployments.",
    readTime: "8 min",
    tags: ["Agents", "LLMs", "Foundations"],
  },
  {
    category: "Architecture",
    title: "Single-agent vs. multi-agent architectures in insurance",
    description:
      "Should your claim processing system use one agent or many? We walk through the trade-offs — latency, reliability, observability, cost — using concrete insurance workflow examples.",
    readTime: "11 min",
    tags: ["Architecture", "Multi-agent", "Claims"],
  },
  {
    category: "Technology",
    title: "RAG vs. fine-tuning for insurance document understanding",
    description:
      "When should you retrieve from a knowledge base, and when should you fine-tune a model? We compare these approaches on policy document comprehension, claims extraction, and regulatory Q&A tasks.",
    readTime: "10 min",
    tags: ["RAG", "Fine-tuning", "Documents"],
  },
  {
    category: "Data",
    title: "Designing data pipelines for Agentic AI — with Databricks and Snowflake",
    description:
      "Agents are only as good as the data they can access. This guide covers pipeline design patterns — from raw document ingestion to structured retrieval — for the most common insurance data platforms.",
    readTime: "14 min",
    tags: ["Databricks", "Snowflake", "Pipelines"],
  },
  {
    category: "Evaluation",
    title: "How to evaluate an AI agent before you deploy it",
    description:
      "LLM-as-judge, human evaluation, automated test suites — what actually works for evaluating agent reliability in insurance contexts? A practical guide with examples.",
    readTime: "12 min",
    tags: ["Evaluation", "Testing", "Production"],
  },
  {
    category: "Observability",
    title: "Observability for Agentic systems — what to monitor and why",
    description:
      "Traces, latency, token cost, output quality, drift — what does a production-ready observability setup look like for an insurance AI agent? This article covers tooling and metrics that matter.",
    readTime: "9 min",
    tags: ["Observability", "Monitoring", "Production"],
  },
  {
    category: "Compliance",
    title: "GDPR and AI agents — what every European insurer needs to know",
    description:
      "AI agents that process personal data in insurance contexts face specific GDPR obligations: data minimisation, right to explanation, automated decision constraints. A practical compliance primer.",
    readTime: "13 min",
    tags: ["GDPR", "Compliance", "Europe"],
  },
  {
    category: "Frameworks",
    title: "LangGraph vs. AutoGen vs. custom orchestration — choosing a framework",
    description:
      "The agent framework landscape is crowded. We compare the leading options on the criteria that matter for insurance: reliability, debuggability, integration flexibility, and operational complexity.",
    readTime: "10 min",
    tags: ["LangGraph", "AutoGen", "Frameworks"],
  },
  {
    category: "Strategy",
    title: "Where to start with Agentic AI in insurance — a prioritisation framework",
    description:
      "Not every use case is equal. This article gives you a repeatable framework for prioritising AI investments — based on data availability, process structure, ROI, and regulatory risk.",
    readTime: "7 min",
    tags: ["Strategy", "ROI", "Prioritisation"],
  },
];

const concepts = [
  {
    term: "Agentic AI",
    definition:
      "AI systems that autonomously plan, decide, and act across multiple steps — using tools, APIs, and memory — to complete complex tasks with minimal human intervention.",
  },
  {
    term: "Retrieval-Augmented Generation (RAG)",
    definition:
      "A pattern where an LLM retrieves relevant documents or data at query time before generating a response — enabling up-to-date, grounded answers without retraining.",
  },
  {
    term: "Multi-agent orchestration",
    definition:
      "A system where multiple specialised agents collaborate on a task — one agent may extract data, another validate it, another route the decision — coordinated by an orchestrator.",
  },
  {
    term: "Human-in-the-loop (HITL)",
    definition:
      "A design pattern where the AI agent escalates specific decisions to a human reviewer — typically based on confidence thresholds, case complexity, or policy requirements.",
  },
  {
    term: "LLM Observability",
    definition:
      "The practice of tracing, logging, and monitoring LLM calls within an agent — capturing inputs, outputs, latency, token cost, and model behaviour to detect drift and failures.",
  },
  {
    term: "Guardrails",
    definition:
      "Input and output validation layers that ensure an agent operates within defined boundaries — preventing hallucination propagation, PII leakage, and out-of-scope actions.",
  },
  {
    term: "Tool use / Function calling",
    definition:
      "The ability of an LLM to invoke external tools — APIs, databases, calculators, search — enabling agents to act on the real world, not just generate text.",
  },
  {
    term: "Data drift",
    definition:
      "The phenomenon where the distribution of data an agent encounters in production differs from the data it was developed on — causing degraded performance over time.",
  },
];

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium mb-6">
            Knowledge Base
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Learn Agentic AI
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              for Insurance
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Practical education for insurance professionals and technology teams
            — from foundational concepts to production architecture decisions.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Articles & Guides</h2>
            <span className="text-slate-500 text-sm">{articles.length} articles</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
              <div
                key={article.title}
                className="group bg-navy-800 border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">{article.readTime} read</span>
                </div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-blue-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-500 bg-white/3 border border-white/5 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-16 bg-navy-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-electric-cyan text-sm font-semibold uppercase tracking-widest mb-3">
              Glossary
            </p>
            <h2 className="text-3xl font-black text-white">
              Key concepts explained
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {concepts.map((c) => (
              <div
                key={c.term}
                className="bg-navy-800 border border-white/5 rounded-xl p-5"
              >
                <h3 className="text-white font-bold text-sm mb-1.5">{c.term}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                role: "Insurance Executives",
                description:
                  "Understand where AI can create measurable value in your operations — and how to evaluate vendor claims critically.",
                topics: ["ROI frameworks", "Prioritisation", "Risk management", "Governance"],
              },
              {
                role: "Technology Leaders",
                description:
                  "Make informed architecture decisions — model selection, framework choice, integration patterns, observability.",
                topics: ["Architecture", "Frameworks", "Observability", "Evaluation"],
              },
              {
                role: "Business Analysts & Operations",
                description:
                  "Understand how AI agents interact with existing workflows — and how to design human-in-the-loop processes effectively.",
                topics: ["Workflow design", "HITL", "Process mapping", "Change management"],
              },
            ].map((profile) => (
              <div key={profile.role} className="bg-navy-800 border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-2">{profile.role}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{profile.description}</p>
                <div className="flex flex-wrap gap-2">
                  {profile.topics.map((topic) => (
                    <span key={topic} className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to move from education to execution?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Tell us about your organisation and we&apos;ll advise on where to
            start with Agentic AI in your specific insurance context.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 text-base"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

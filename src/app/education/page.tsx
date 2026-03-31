import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Education | Bistrica.AI",
  description:
    "Learn the foundations of Agentic AI, LLMs, and AI pipelines, focused on insurance applications and European regulatory context.",
};

const articles = [
  { category: "Foundations", title: "What is an AI Agent, and how is it different from a chatbot?", description: "The word 'agent' gets used loosely. This article draws a precise distinction between a prompted LLM, a RAG system, and a true agentic system, and explains why the distinction matters for insurance deployments.", readTime: "8 min", tags: ["Agents", "LLMs", "Foundations"] },
  { category: "Architecture", title: "Single-agent vs. multi-agent architectures in insurance", description: "Should your claim processing system use one agent or many? We walk through the trade-offs: latency, reliability, observability, cost, using concrete insurance workflow examples.", readTime: "11 min", tags: ["Architecture", "Multi-agent", "Claims"] },
  { category: "Technology", title: "RAG vs. fine-tuning for insurance document understanding", description: "When should you retrieve from a knowledge base, and when should you fine-tune a model? We compare these approaches on policy document comprehension, claims extraction, and regulatory Q&A tasks.", readTime: "10 min", tags: ["RAG", "Fine-tuning", "Documents"] },
  { category: "Data", title: "Designing data pipelines for Agentic AI with Databricks and Snowflake", description: "Agents are only as good as the data they can access. This guide covers pipeline design patterns from raw document ingestion to structured retrieval for the most common insurance data platforms.", readTime: "14 min", tags: ["Databricks", "Snowflake", "Pipelines"] },
  { category: "Evaluation", title: "How to evaluate an AI agent before you deploy it", description: "LLM-as-judge, human evaluation, automated test suites: what actually works for evaluating agent reliability in insurance contexts? A practical guide with examples.", readTime: "12 min", tags: ["Evaluation", "Testing", "Production"] },
  { category: "Observability", title: "Observability for Agentic systems: what to monitor and why", description: "Traces, latency, token cost, output quality, drift: what does a production-ready observability setup look like for an insurance AI agent?", readTime: "9 min", tags: ["Observability", "Monitoring", "Production"] },
  { category: "Compliance", title: "GDPR and AI agents: what every European insurer needs to know", description: "AI agents that process personal data in insurance contexts face specific GDPR obligations: data minimisation, right to explanation, automated decision constraints.", readTime: "13 min", tags: ["GDPR", "Compliance", "Europe"] },
  { category: "Frameworks", title: "LangGraph vs. AutoGen vs. custom orchestration: choosing a framework", description: "The agent framework landscape is crowded. We compare the leading options on reliability, debuggability, integration flexibility, and operational complexity.", readTime: "10 min", tags: ["LangGraph", "AutoGen", "Frameworks"] },
  { category: "Strategy", title: "Where to start with Agentic AI in insurance: a prioritisation framework", description: "Not every use case is equal. This article gives you a repeatable framework for prioritising AI investments based on data availability, process structure, ROI, and regulatory risk.", readTime: "7 min", tags: ["Strategy", "ROI", "Prioritisation"] },
];

const concepts = [
  { term: "Agentic AI", definition: "AI systems that autonomously plan, decide, and act across multiple steps, using tools, APIs, and memory, to complete complex tasks with minimal human intervention." },
  { term: "Retrieval-Augmented Generation (RAG)", definition: "A pattern where an LLM retrieves relevant documents or data at query time before generating a response, enabling up-to-date, grounded answers without retraining." },
  { term: "Multi-agent orchestration", definition: "A system where multiple specialised agents collaborate on a task, coordinated by an orchestrator, each handling a specific aspect of the workflow." },
  { term: "Human-in-the-Loop (HITL)", definition: "A design pattern where the AI agent escalates specific decisions to a human reviewer, based on confidence thresholds, case complexity, or policy requirements." },
  { term: "LLM Observability", definition: "The practice of tracing, logging, and monitoring LLM calls within an agent, capturing inputs, outputs, latency, token cost, and model behaviour to detect drift and failures." },
  { term: "Guardrails", definition: "Input and output validation layers that ensure an agent operates within defined boundaries, preventing hallucination propagation, PII leakage, and out-of-scope actions." },
  { term: "Tool use / Function calling", definition: "The ability of an LLM to invoke external tools such as APIs, databases, calculators, and search, enabling agents to act on the real world, not just generate text." },
  { term: "Data drift", definition: "The phenomenon where the distribution of data an agent encounters in production differs from development data, causing degraded performance over time." },
  { term: "EU AI Act (High-Risk AI)", definition: "EU Regulation 2024/1689 classifies AI systems used in insurance credit scoring, claims, and underwriting as high-risk (Annex III). Full obligations apply from August 2026, including mandatory risk management systems, data governance, human oversight, transparency, and conformity assessments." },
];

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-background overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 font-semibold tracking-wide text-xs px-3 py-1.5 animate-fade-in">
            Knowledge Base
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-5 animate-fade-in-up [animation-delay:80ms]">
            Learn Agentic AI
            <br />
            <span className="gradient-heading">for Insurance</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Practical education for insurance professionals and technology teams
            from foundational concepts to production architecture decisions.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-foreground">Articles & Guides</h2>
              <p className="text-muted-foreground text-sm mt-1">Publishing {new Date().getFullYear()}: topics covered below</p>
            </div>
            <Badge variant="secondary" className="text-xs font-semibold">Coming soon</Badge>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <Card
                key={article.title}
                className="transition-colors duration-150 opacity-90"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                    <span className="text-muted-foreground text-xs">{article.readTime} read</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-foreground font-bold text-base mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Glossary</p>
            <h2 className="text-3xl font-black text-foreground">Key concepts explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {concepts.map((c) => (
              <Card key={c.term}>
                <CardContent className="p-5">
                  <h3 className="text-foreground font-bold text-sm mb-1.5">{c.term}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audience profiles */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-4">
            {[
              { role: "Insurance Executives", description: "Understand where AI creates measurable value, and how to evaluate vendor claims critically.", topics: ["ROI frameworks", "Prioritisation", "Risk management", "Governance"] },
              { role: "Technology Leaders", description: "Make informed architecture decisions: model selection, framework choice, integration patterns, observability.", topics: ["Architecture", "Frameworks", "Observability", "Evaluation"] },
              { role: "Business Analysts & Operations", description: "Understand how AI agents interact with existing workflows and design effective human-in-the-loop processes.", topics: ["Workflow design", "HITL", "Process mapping", "Change management"] },
            ].map((profile) => (
              <Card key={profile.role}>
                <CardContent className="p-6">
                  <h3 className="text-foreground font-bold text-lg mb-2">{profile.role}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{profile.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">{topic}</Badge>
                    ))}
                  </div>
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
            Ready to move from education to execution?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Tell us about your organisation and we&apos;ll advise on where to start with Agentic AI in your specific insurance context.
          </p>
          <Button asChild size="lg" className="rounded-xl font-semibold px-8">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

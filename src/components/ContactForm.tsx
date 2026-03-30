"use client";

import { useState } from "react";

type FormData = {
  // Contact
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  country: string;
  role: string;
  // Infrastructure
  cloudProvider: string[];
  cloudProviderOther: string;
  dataPlatform: string[];
  dataPlatformOther: string;
  dataLocation: string;
  dataLocationDetail: string;
  // AI Maturity
  hasAgenticExperience: string;
  agenticUseCaseDescription: string;
  aiModelsUsed: string[];
  aiModelsOther: string;
  // Frameworks & Tooling
  orchestrationFrameworks: string[];
  orchestrationOther: string;
  observabilityTools: string[];
  observabilityOther: string;
  infraDeployment: string[];
  infraDeploymentOther: string;
  // Use Case
  primaryUseCase: string;
  useCaseDescription: string;
  timeline: string;
  // Additional
  additionalContext: string;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  country: "",
  role: "",
  cloudProvider: [],
  cloudProviderOther: "",
  dataPlatform: [],
  dataPlatformOther: "",
  dataLocation: "",
  dataLocationDetail: "",
  hasAgenticExperience: "",
  agenticUseCaseDescription: "",
  aiModelsUsed: [],
  aiModelsOther: "",
  orchestrationFrameworks: [],
  orchestrationOther: "",
  observabilityTools: [],
  observabilityOther: "",
  infraDeployment: [],
  infraDeploymentOther: "",
  primaryUseCase: "",
  useCaseDescription: "",
  timeline: "",
  additionalContext: "",
};

function CheckboxGroup({
  options,
  selected,
  onChange,
  otherValue,
  onOtherChange,
  otherPlaceholder,
}: {
  options: string[];
  selected: string[];
  onChange: (val: string[]) => void;
  otherValue?: string;
  onOtherChange?: (val: string) => void;
  otherPlaceholder?: string;
}) {
  const toggle = (opt: string) => {
    if (selected.includes(opt)) {
      onChange(selected.filter((s) => s !== opt));
    } else {
      onChange([...selected, opt]);
    }
  };

  return (
    <div className="space-y-2">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div
            className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
              selected.includes(opt)
                ? "bg-blue-600 border-blue-600"
                : "border-white/20 group-hover:border-white/40"
            }`}
            onClick={() => toggle(opt)}
          >
            {selected.includes(opt) && (
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )}
          </div>
          <span
            className="text-slate-300 text-sm"
            onClick={() => toggle(opt)}
          >
            {opt}
          </span>
        </label>
      ))}
      {onOtherChange && (
        <div className="flex items-center gap-3">
          <div
            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
              otherValue ? "bg-blue-600 border-blue-600" : "border-white/20"
            }`}
          />
          <input
            type="text"
            value={otherValue || ""}
            onChange={(e) => onOtherChange(e.target.value)}
            placeholder={otherPlaceholder || "Other (specify)"}
            className="flex-1 bg-transparent border-b border-white/10 text-slate-300 text-sm placeholder-slate-600 py-1 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      )}
    </div>
  );
}

function FormSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-navy-800 border border-white/5 rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
          <span className="text-blue-400 text-xs font-bold">{number}</span>
        </div>
        <h2 className="text-white font-bold text-lg">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Field({ label, required, children, hint }: { label: string; required?: boolean; children: React.ReactNode; hint?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">
        {label}
        {required && <span className="text-blue-400 ml-1">*</span>}
      </label>
      {hint && <p className="text-slate-500 text-xs mb-2">{hint}</p>}
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-navy-900/50 border border-white/10 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors";

const selectClass =
  "w-full bg-navy-900/50 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const set = (key: keyof FormData, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-navy-800 border border-green-500/20 rounded-3xl p-12 text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-white mb-3">Submission received</h2>
        <p className="text-slate-400 leading-relaxed max-w-md mx-auto">
          Thank you. We&apos;ve received your qualification form and will review your
          infrastructure and use case context. Expect to hear from us within 2
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Section 1: Contact */}
      <FormSection number="01" title="Your Contact Details">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="First name" required>
            <input
              type="text"
              value={form.firstName}
              onChange={(e) => set("firstName", e.target.value)}
              placeholder="Jane"
              required
              className={inputClass}
            />
          </Field>
          <Field label="Last name" required>
            <input
              type="text"
              value={form.lastName}
              onChange={(e) => set("lastName", e.target.value)}
              placeholder="Smith"
              required
              className={inputClass}
            />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <Field label="Work email" required>
            <input
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="jane@company.com"
              required
              className={inputClass}
            />
          </Field>
          <Field label="Company / Organisation" required>
            <input
              type="text"
              value={form.company}
              onChange={(e) => set("company", e.target.value)}
              placeholder="Allianz, AXA, Lloyd's..."
              required
              className={inputClass}
            />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <Field label="Country (headquarters)" required>
            <select
              value={form.country}
              onChange={(e) => set("country", e.target.value)}
              required
              className={selectClass}
            >
              <option value="">Select country</option>
              {[
                "Austria", "Belgium", "Croatia", "Czech Republic", "Denmark",
                "Finland", "France", "Germany", "Greece", "Hungary",
                "Ireland", "Italy", "Luxembourg", "Netherlands", "Norway",
                "Poland", "Portugal", "Romania", "Slovakia", "Slovenia",
                "Spain", "Sweden", "Switzerland", "United Kingdom",
                "Other European country", "Outside Europe",
              ].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Your role" required>
            <select
              value={form.role}
              onChange={(e) => set("role", e.target.value)}
              required
              className={selectClass}
            >
              <option value="">Select your role</option>
              {[
                "C-Suite / Executive",
                "Chief Technology Officer",
                "Chief Data Officer",
                "VP / Director of Technology",
                "VP / Director of Operations",
                "Data Engineering Lead",
                "AI / ML Engineering Lead",
                "Enterprise Architect",
                "Business Analyst",
                "Product Manager",
                "Consultant / Advisor",
                "Other",
              ].map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </Field>
        </div>
      </FormSection>

      {/* Section 2: Cloud & Data Platform */}
      <FormSection number="02" title="Cloud & Data Infrastructure">
        <div className="space-y-6">
          <Field label="Cloud provider(s) in use" required hint="Select all that apply">
            <CheckboxGroup
              options={["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "On-premises / Private cloud", "Hybrid"]}
              selected={form.cloudProvider}
              onChange={(v) => set("cloudProvider", v)}
              otherValue={form.cloudProviderOther}
              onOtherChange={(v) => set("cloudProviderOther", v)}
              otherPlaceholder="Other cloud provider"
            />
          </Field>

          <Field label="Data platform(s)" required hint="Select all that apply">
            <CheckboxGroup
              options={["Databricks", "Snowflake", "Microsoft Fabric", "Azure Synapse", "BigQuery", "Redshift", "Apache Spark (self-managed)", "dbt Cloud"]}
              selected={form.dataPlatform}
              onChange={(v) => set("dataPlatform", v)}
              otherValue={form.dataPlatformOther}
              onOtherChange={(v) => set("dataPlatformOther", v)}
              otherPlaceholder="Other data platform"
            />
          </Field>

          <Field label="Where does your primary data reside?" required>
            <select
              value={form.dataLocation}
              onChange={(e) => set("dataLocation", e.target.value)}
              required
              className={selectClass}
            >
              <option value="">Select data residency</option>
              <option value="eu-single">Single EU region (specify)</option>
              <option value="eu-multi">Multiple EU regions</option>
              <option value="eu-uk">EU + UK</option>
              <option value="onprem">On-premises (EU)</option>
              <option value="hybrid">Hybrid cloud + on-premises</option>
              <option value="noneu">Outside EU</option>
            </select>
          </Field>

          {form.dataLocation && (
            <Field label="Data residency detail">
              <input
                type="text"
                value={form.dataLocationDetail}
                onChange={(e) => set("dataLocationDetail", e.target.value)}
                placeholder="e.g. Azure West Europe + Germany North"
                className={inputClass}
              />
            </Field>
          )}
        </div>
      </FormSection>

      {/* Section 3: AI Maturity */}
      <FormSection number="03" title="AI & Agentic Maturity">
        <div className="space-y-6">
          <Field label="Have you previously developed or deployed Agentic AI use cases?" required>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "no", label: "No" },
                { value: "poc", label: "PoC / Pilot only" },
                { value: "yes", label: "Yes, in production" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => set("hasAgenticExperience", opt.value)}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                    form.hasAgenticExperience === opt.value
                      ? "bg-blue-600/20 border-blue-500 text-blue-300"
                      : "border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-300"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </Field>

          {(form.hasAgenticExperience === "poc" || form.hasAgenticExperience === "yes") && (
            <Field label="Briefly describe the use case(s)">
              <textarea
                value={form.agenticUseCaseDescription}
                onChange={(e) => set("agenticUseCaseDescription", e.target.value)}
                placeholder="e.g. We built a RAG system for policy Q&A using Azure OpenAI, deployed as a PoC with ~50 internal users..."
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </Field>
          )}

          <Field label="AI / LLM models used or being evaluated" hint="Select all that apply">
            <CheckboxGroup
              options={[
                "OpenAI GPT-4o / GPT-4",
                "Azure OpenAI Service",
                "Anthropic Claude",
                "Google Gemini",
                "Meta Llama (open source)",
                "Mistral",
                "Amazon Bedrock models",
                "No AI models yet",
              ]}
              selected={form.aiModelsUsed}
              onChange={(v) => set("aiModelsUsed", v)}
              otherValue={form.aiModelsOther}
              onOtherChange={(v) => set("aiModelsOther", v)}
              otherPlaceholder="Other model(s)"
            />
          </Field>
        </div>
      </FormSection>

      {/* Section 4: Frameworks & Tooling */}
      <FormSection number="04" title="Frameworks, Observability & Deployment">
        <div className="space-y-6">
          <Field label="Orchestration / agent frameworks in use or evaluation" hint="Select all that apply">
            <CheckboxGroup
              options={[
                "LangChain",
                "LangGraph",
                "AutoGen (Microsoft)",
                "CrewAI",
                "Semantic Kernel",
                "Haystack",
                "Custom / proprietary",
                "None yet",
              ]}
              selected={form.orchestrationFrameworks}
              onChange={(v) => set("orchestrationFrameworks", v)}
              otherValue={form.orchestrationOther}
              onOtherChange={(v) => set("orchestrationOther", v)}
              otherPlaceholder="Other framework(s)"
            />
          </Field>

          <Field label="Observability & monitoring tools" hint="Select all that apply">
            <CheckboxGroup
              options={[
                "LangSmith",
                "LangFuse",
                "Arize AI",
                "Weights & Biases",
                "MLflow",
                "Datadog",
                "Azure Monitor / Application Insights",
                "AWS CloudWatch",
                "OpenTelemetry (custom)",
                "None yet",
              ]}
              selected={form.observabilityTools}
              onChange={(v) => set("observabilityTools", v)}
              otherValue={form.observabilityOther}
              onOtherChange={(v) => set("observabilityOther", v)}
              otherPlaceholder="Other observability tool(s)"
            />
          </Field>

          <Field label="Infrastructure / deployment tooling" hint="Select all that apply">
            <CheckboxGroup
              options={[
                "Terraform",
                "Bicep / ARM (Azure)",
                "AWS CloudFormation / CDK",
                "Pulumi",
                "Kubernetes / AKS / EKS / GKE",
                "Azure Container Apps",
                "Azure Functions / AWS Lambda",
                "GitHub Actions CI/CD",
                "Azure DevOps",
                "Docker Compose",
              ]}
              selected={form.infraDeployment}
              onChange={(v) => set("infraDeployment", v)}
              otherValue={form.infraDeploymentOther}
              onOtherChange={(v) => set("infraDeploymentOther", v)}
              otherPlaceholder="Other deployment tooling"
            />
          </Field>
        </div>
      </FormSection>

      {/* Section 5: Use Case */}
      <FormSection number="05" title="Your Primary Use Case">
        <div className="space-y-6">
          <Field label="Primary use case you want to address" required>
            <select
              value={form.primaryUseCase}
              onChange={(e) => set("primaryUseCase", e.target.value)}
              required
              className={selectClass}
            >
              <option value="">Select use case</option>
              {[
                "Claim processing automation",
                "Document extraction / OCR",
                "Fraud detection",
                "Underwriting automation",
                "Customer-facing AI agent",
                "Regulatory compliance automation",
                "Policy analysis & comparison",
                "Risk assessment pipelines",
                "Internal knowledge management",
                "Multiple / exploring options",
                "Other",
              ].map((uc) => (
                <option key={uc} value={uc}>{uc}</option>
              ))}
            </select>
          </Field>

          <Field label="Describe the use case and the problem you're trying to solve" required>
            <textarea
              value={form.useCaseDescription}
              onChange={(e) => set("useCaseDescription", e.target.value)}
              placeholder="e.g. We process ~5,000 motor claims per month. Currently each takes 3–5 days. We want to automate the initial triage and data extraction phase to get this to same-day settlement for straightforward claims..."
              rows={5}
              required
              className={`${inputClass} resize-none`}
            />
          </Field>

          <Field label="Expected timeline to get started" required>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "now", label: "Immediately" },
                { value: "q", label: "This quarter" },
                { value: "h2", label: "Next 6 months" },
                { value: "exploring", label: "Exploring" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => set("timeline", opt.value)}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                    form.timeline === opt.value
                      ? "bg-blue-600/20 border-blue-500 text-blue-300"
                      : "border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-300"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Anything else we should know?">
            <textarea
              value={form.additionalContext}
              onChange={(e) => set("additionalContext", e.target.value)}
              placeholder="Budget constraints, specific regulatory concerns, existing vendor relationships, team size, etc."
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </Field>
        </div>
      </FormSection>

      {/* Submit */}
      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-4 text-red-300 text-sm">
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-200 text-base flex items-center justify-center gap-3"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            Submit qualification form
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-slate-600 text-xs">
        Your information is processed in accordance with GDPR. We will never
        sell or share your details with third parties.
      </p>
    </form>
  );
}

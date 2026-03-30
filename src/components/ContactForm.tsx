"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  country: string;
  role: string;
  cloudProvider: string[];
  cloudProviderOther: string;
  dataPlatform: string[];
  dataPlatformOther: string;
  dataLocation: string;
  dataLocationDetail: string;
  hasAgenticExperience: string;
  agenticUseCaseDescription: string;
  aiModelsUsed: string[];
  aiModelsOther: string;
  orchestrationFrameworks: string[];
  orchestrationOther: string;
  observabilityTools: string[];
  observabilityOther: string;
  infraDeployment: string[];
  infraDeploymentOther: string;
  primaryUseCase: string;
  useCaseDescription: string;
  timeline: string;
  additionalContext: string;
};

const initialForm: FormData = {
  firstName: "", lastName: "", email: "", company: "", country: "", role: "",
  cloudProvider: [], cloudProviderOther: "",
  dataPlatform: [], dataPlatformOther: "",
  dataLocation: "", dataLocationDetail: "",
  hasAgenticExperience: "", agenticUseCaseDescription: "",
  aiModelsUsed: [], aiModelsOther: "",
  orchestrationFrameworks: [], orchestrationOther: "",
  observabilityTools: [], observabilityOther: "",
  infraDeployment: [], infraDeploymentOther: "",
  primaryUseCase: "", useCaseDescription: "", timeline: "", additionalContext: "",
};

function CheckboxGroup({ options, selected, onChange, otherValue, onOtherChange, otherPlaceholder }: {
  options: string[];
  selected: string[];
  onChange: (val: string[]) => void;
  otherValue?: string;
  onOtherChange?: (val: string) => void;
  otherPlaceholder?: string;
}) {
  const toggle = (opt: string) =>
    onChange(selected.includes(opt) ? selected.filter((s) => s !== opt) : [...selected, opt]);

  return (
    <div className="space-y-2.5">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-3 cursor-pointer group" onClick={() => toggle(opt)}>
          <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors shrink-0 ${selected.includes(opt) ? "bg-royal-blue border-royal-blue" : "border-border group-hover:border-royal-blue/50"}`}>
            {selected.includes(opt) && (
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )}
          </div>
          <span className="text-deep-navy/80 text-sm">{opt}</span>
        </label>
      ))}
      {onOtherChange && (
        <div className="flex items-center gap-3">
          <div className={`w-4 h-4 rounded border-2 shrink-0 ${otherValue ? "bg-royal-blue border-royal-blue" : "border-border"}`} />
          <Input
            value={otherValue || ""}
            onChange={(e) => onOtherChange(e.target.value)}
            placeholder={otherPlaceholder || "Other (specify)"}
            className="h-8 text-sm border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-royal-blue px-0"
          />
        </div>
      )}
    </div>
  );
}

function FormSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <Card className="border-border shadow-sm">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-deep-navy flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">{number}</span>
          </div>
          <h2 className="text-deep-navy font-bold text-lg">{title}</h2>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}

function ToggleGroup({ options, value, onChange }: { options: { value: string; label: string }[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-150 ${
            value === opt.value
              ? "bg-deep-navy border-deep-navy text-white"
              : "border-border text-deep-navy/60 hover:border-royal-blue/40 hover:text-deep-navy"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

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
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-deep-navy mb-3">Submission received</h2>
          <p className="text-deep-navy/60 leading-relaxed max-w-md mx-auto">
            Thank you. We&apos;ve received your qualification form and will review your infrastructure and use case context. Expect to hear from us within 2 business days.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Section 1: Contact */}
      <FormSection number="01" title="Your Contact Details">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name <span className="text-royal-blue">*</span></Label>
            <Input id="firstName" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} placeholder="Jane" required className="border-border focus-visible:ring-royal-blue" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name <span className="text-royal-blue">*</span></Label>
            <Input id="lastName" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} placeholder="Smith" required className="border-border focus-visible:ring-royal-blue" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Work email <span className="text-royal-blue">*</span></Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@company.com" required className="border-border focus-visible:ring-royal-blue" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company / Organisation <span className="text-royal-blue">*</span></Label>
            <Input id="company" value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Allianz, AXA, Lloyd's..." required className="border-border focus-visible:ring-royal-blue" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <Label>Country (headquarters) <span className="text-royal-blue">*</span></Label>
            <Select value={form.country} onValueChange={(v) => set("country", v)} required>
              <SelectTrigger className="border-border focus:ring-royal-blue">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {["Austria","Belgium","Croatia","Czech Republic","Denmark","Finland","France","Germany","Greece","Hungary","Ireland","Italy","Luxembourg","Netherlands","Norway","Poland","Portugal","Romania","Slovakia","Slovenia","Spain","Sweden","Switzerland","United Kingdom","Other European country","Outside Europe"].map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Your role <span className="text-royal-blue">*</span></Label>
            <Select value={form.role} onValueChange={(v) => set("role", v)} required>
              <SelectTrigger className="border-border focus:ring-royal-blue">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                {["C-Suite / Executive","Chief Technology Officer","Chief Data Officer","VP / Director of Technology","VP / Director of Operations","Data Engineering Lead","AI / ML Engineering Lead","Enterprise Architect","Business Analyst","Product Manager","Consultant / Advisor","Other"].map((r) => (
                  <SelectItem key={r} value={r}>{r}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </FormSection>

      {/* Section 2: Cloud & Data */}
      <FormSection number="02" title="Cloud & Data Infrastructure">
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>Cloud provider(s) in use <span className="text-royal-blue">*</span></Label>
            <p className="text-deep-navy/40 text-xs">Select all that apply</p>
            <CheckboxGroup
              options={["Microsoft Azure","Amazon Web Services (AWS)","Google Cloud Platform (GCP)","On-premises / Private cloud","Hybrid"]}
              selected={form.cloudProvider}
              onChange={(v) => set("cloudProvider", v)}
              otherValue={form.cloudProviderOther}
              onOtherChange={(v) => set("cloudProviderOther", v)}
              otherPlaceholder="Other cloud provider"
            />
          </div>
          <div className="space-y-3">
            <Label>Data platform(s) <span className="text-royal-blue">*</span></Label>
            <p className="text-deep-navy/40 text-xs">Select all that apply</p>
            <CheckboxGroup
              options={["Databricks","Snowflake","Microsoft Fabric","Azure Synapse","BigQuery","Redshift","Apache Spark (self-managed)","dbt Cloud"]}
              selected={form.dataPlatform}
              onChange={(v) => set("dataPlatform", v)}
              otherValue={form.dataPlatformOther}
              onOtherChange={(v) => set("dataPlatformOther", v)}
              otherPlaceholder="Other data platform"
            />
          </div>
          <div className="space-y-2">
            <Label>Where does your primary data reside? <span className="text-royal-blue">*</span></Label>
            <Select value={form.dataLocation} onValueChange={(v) => set("dataLocation", v)} required>
              <SelectTrigger className="border-border focus:ring-royal-blue">
                <SelectValue placeholder="Select data residency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eu-single">Single EU region</SelectItem>
                <SelectItem value="eu-multi">Multiple EU regions</SelectItem>
                <SelectItem value="eu-uk">EU + UK</SelectItem>
                <SelectItem value="onprem">On-premises (EU)</SelectItem>
                <SelectItem value="hybrid">Hybrid cloud + on-premises</SelectItem>
                <SelectItem value="noneu">Outside EU</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {form.dataLocation && (
            <div className="space-y-2">
              <Label htmlFor="dataLocationDetail">Data residency detail</Label>
              <Input id="dataLocationDetail" value={form.dataLocationDetail} onChange={(e) => set("dataLocationDetail", e.target.value)} placeholder="e.g. Azure West Europe + Germany North" className="border-border focus-visible:ring-royal-blue" />
            </div>
          )}
        </div>
      </FormSection>

      {/* Section 3: AI Maturity */}
      <FormSection number="03" title="AI & Agentic Maturity">
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>Have you previously developed or deployed Agentic AI use cases? <span className="text-royal-blue">*</span></Label>
            <ToggleGroup
              options={[{ value: "no", label: "No" }, { value: "poc", label: "PoC / Pilot only" }, { value: "yes", label: "Yes, in production" }]}
              value={form.hasAgenticExperience}
              onChange={(v) => set("hasAgenticExperience", v)}
            />
          </div>
          {(form.hasAgenticExperience === "poc" || form.hasAgenticExperience === "yes") && (
            <div className="space-y-2">
              <Label htmlFor="agenticDesc">Briefly describe the use case(s)</Label>
              <Textarea id="agenticDesc" value={form.agenticUseCaseDescription} onChange={(e) => set("agenticUseCaseDescription", e.target.value)} placeholder="e.g. We built a RAG system for policy Q&A using Azure OpenAI, deployed as a PoC with ~50 internal users..." rows={3} className="border-border focus-visible:ring-royal-blue resize-none" />
            </div>
          )}
          <div className="space-y-3">
            <Label>AI / LLM models used or being evaluated</Label>
            <p className="text-deep-navy/40 text-xs">Select all that apply</p>
            <CheckboxGroup
              options={["OpenAI GPT-4o / GPT-4","Azure OpenAI Service","Anthropic Claude","Google Gemini","Meta Llama (open source)","Mistral","Amazon Bedrock models","No AI models yet"]}
              selected={form.aiModelsUsed}
              onChange={(v) => set("aiModelsUsed", v)}
              otherValue={form.aiModelsOther}
              onOtherChange={(v) => set("aiModelsOther", v)}
              otherPlaceholder="Other model(s)"
            />
          </div>
        </div>
      </FormSection>

      {/* Section 4: Frameworks */}
      <FormSection number="04" title="Frameworks, Observability & Deployment">
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>Orchestration / agent frameworks</Label>
            <p className="text-deep-navy/40 text-xs">Select all that apply</p>
            <CheckboxGroup
              options={["LangChain","LangGraph","AutoGen (Microsoft)","CrewAI","Semantic Kernel","Haystack","Custom / proprietary","None yet"]}
              selected={form.orchestrationFrameworks}
              onChange={(v) => set("orchestrationFrameworks", v)}
              otherValue={form.orchestrationOther}
              onOtherChange={(v) => set("orchestrationOther", v)}
              otherPlaceholder="Other framework(s)"
            />
          </div>
          <div className="space-y-3">
            <Label>Observability & monitoring tools</Label>
            <p className="text-deep-navy/40 text-xs">Select all that apply</p>
            <CheckboxGroup
              options={["LangSmith","LangFuse","Arize AI","Weights & Biases","MLflow","Datadog","Azure Monitor / Application Insights","AWS CloudWatch","OpenTelemetry (custom)","None yet"]}
              selected={form.observabilityTools}
              onChange={(v) => set("observabilityTools", v)}
              otherValue={form.observabilityOther}
              onOtherChange={(v) => set("observabilityOther", v)}
              otherPlaceholder="Other observability tool(s)"
            />
          </div>
          <div className="space-y-3">
            <Label>Infrastructure / deployment tooling</Label>
            <p className="text-deep-navy/40 text-xs">Select all that apply</p>
            <CheckboxGroup
              options={["Terraform","Bicep / ARM (Azure)","AWS CloudFormation / CDK","Pulumi","Kubernetes / AKS / EKS / GKE","Azure Container Apps","Azure Functions / AWS Lambda","GitHub Actions CI/CD","Azure DevOps","Docker Compose"]}
              selected={form.infraDeployment}
              onChange={(v) => set("infraDeployment", v)}
              otherValue={form.infraDeploymentOther}
              onOtherChange={(v) => set("infraDeploymentOther", v)}
              otherPlaceholder="Other deployment tooling"
            />
          </div>
        </div>
      </FormSection>

      {/* Section 5: Use Case */}
      <FormSection number="05" title="Your Primary Use Case">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Primary use case <span className="text-royal-blue">*</span></Label>
            <Select value={form.primaryUseCase} onValueChange={(v) => set("primaryUseCase", v)} required>
              <SelectTrigger className="border-border focus:ring-royal-blue">
                <SelectValue placeholder="Select use case" />
              </SelectTrigger>
              <SelectContent>
                {["Claim processing automation","Document extraction / OCR","Fraud detection","Underwriting automation","Customer-facing AI agent","Regulatory compliance automation","Policy analysis & comparison","Risk assessment pipelines","Internal knowledge management","Multiple / exploring options","Other"].map((uc) => (
                  <SelectItem key={uc} value={uc}>{uc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ucDescription">Describe the use case and the problem you&apos;re trying to solve <span className="text-royal-blue">*</span></Label>
            <Textarea id="ucDescription" value={form.useCaseDescription} onChange={(e) => set("useCaseDescription", e.target.value)} placeholder="e.g. We process ~5,000 motor claims per month. Currently each takes 3–5 days. We want to automate the initial triage and data extraction phase to get this to same-day settlement for straightforward claims..." rows={5} required className="border-border focus-visible:ring-royal-blue resize-none" />
          </div>
          <div className="space-y-3">
            <Label>Expected timeline to get started <span className="text-royal-blue">*</span></Label>
            <ToggleGroup
              options={[{ value: "now", label: "Immediately" }, { value: "q", label: "This quarter" }, { value: "h2", label: "Next 6 months" }, { value: "exploring", label: "Exploring" }]}
              value={form.timeline}
              onChange={(v) => set("timeline", v)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="additionalContext">Anything else we should know?</Label>
            <Textarea id="additionalContext" value={form.additionalContext} onChange={(e) => set("additionalContext", e.target.value)} placeholder="Budget constraints, specific regulatory concerns, existing vendor relationships, team size, etc." rows={3} className="border-border focus-visible:ring-royal-blue resize-none" />
          </div>
        </div>
      </FormSection>

      {/* Error */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-red-600 text-sm">
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      )}

      {/* Submit */}
      <Button type="submit" disabled={status === "loading"} size="lg" className="w-full bg-deep-navy hover:bg-royal-blue text-white font-bold rounded-xl transition-all duration-200 py-6 text-base">
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            Submit qualification form
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </>
        )}
      </Button>

      <p className="text-center text-deep-navy/35 text-xs">
        Your information is processed in accordance with GDPR. We will never sell or share your details with third parties.
      </p>
    </form>
  );
}

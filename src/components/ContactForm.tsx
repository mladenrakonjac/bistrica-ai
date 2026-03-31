"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
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

// ── Sub-components ──────────────────────────────────────────────────────────

function CheckboxGroup({
  options,
  selected,
  onChange,
  otherValue,
  onOtherChange,
  otherPlaceholder = "Other (specify)",
}: {
  options: string[];
  selected: string[];
  onChange: (val: string[]) => void;
  otherValue?: string;
  onOtherChange?: (val: string) => void;
  otherPlaceholder?: string;
}) {
  const toggle = (opt: string) =>
    onChange(
      selected.includes(opt)
        ? selected.filter((s) => s !== opt)
        : [...selected, opt]
    );

  return (
    <div className="space-y-3">
      {options.map((opt) => (
        <div key={opt} className="flex items-center gap-3">
          <Checkbox
            id={opt}
            checked={selected.includes(opt)}
            onCheckedChange={() => toggle(opt)}
          />
          <Label htmlFor={opt} className="font-normal cursor-pointer">
            {opt}
          </Label>
        </div>
      ))}
      {onOtherChange !== undefined && (
        <div className="flex items-center gap-3">
          <Checkbox
            id={`other-${otherPlaceholder}`}
            checked={!!otherValue}
            onCheckedChange={(checked) => { if (!checked) onOtherChange(""); }}
          />
          <Input
            value={otherValue ?? ""}
            onChange={(e) => onOtherChange(e.target.value)}
            placeholder={otherPlaceholder}
            className="h-8 text-sm"
          />
        </div>
      )}
    </div>
  );
}

function FormSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <Badge className="w-7 h-7 rounded-md p-0 flex items-center justify-center text-xs font-bold shrink-0">
            {number}
          </Badge>
          <h2 className="font-bold text-lg text-foreground">{title}</h2>
        </div>
        <Separator className="mb-6" />
        {children}
      </CardContent>
    </Card>
  );
}

function ToggleGroup({ options, value, onChange }: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <Button
          key={opt.value}
          type="button"
          variant={value === opt.value ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(opt.value)}
          className="rounded-lg"
        >
          {opt.label}
        </Button>
      ))}
    </div>
  );
}

function Field({ label, required, hint, children }: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="font-semibold">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </Label>
      {hint && <p className="text-xs text-muted-foreground -mt-1">{hint}</p>}
      {children}
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────

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
      <Card>
        <CardContent className="p-12 text-center">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Check className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-2xl font-black text-foreground mb-3">Submission received</h2>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
            Thank you. We&apos;ve received your qualification form and will review your
            infrastructure and use case context. Expect to hear from us within 2 business days.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* 01 — Contact */}
      <FormSection number="01" title="Your Contact Details">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="First name" required>
            <Input value={form.firstName} onChange={(e) => set("firstName", e.target.value)} placeholder="Jane" required />
          </Field>
          <Field label="Last name" required>
            <Input value={form.lastName} onChange={(e) => set("lastName", e.target.value)} placeholder="Smith" required />
          </Field>
          <Field label="Work email" required>
            <Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@company.com" required />
          </Field>
          <Field label="Company / Organisation" required>
            <Input value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Allianz, AXA, Lloyd's..." required />
          </Field>
          <Field label="Country (headquarters)" required>
            <Select value={form.country} onValueChange={(v) => set("country", v)} required>
              <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
              <SelectContent>
                {["Austria","Belgium","Croatia","Czech Republic","Denmark","Finland","France","Germany","Greece","Hungary","Ireland","Italy","Luxembourg","Netherlands","Norway","Poland","Portugal","Romania","Slovakia","Slovenia","Spain","Sweden","Switzerland","United Kingdom","Other European country","Outside Europe"].map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label="Your role" required>
            <Select value={form.role} onValueChange={(v) => set("role", v)} required>
              <SelectTrigger><SelectValue placeholder="Select your role" /></SelectTrigger>
              <SelectContent>
                {["C-Suite / Executive","Chief Technology Officer","Chief Data Officer","VP / Director of Technology","VP / Director of Operations","Data Engineering Lead","AI / ML Engineering Lead","Enterprise Architect","Business Analyst","Product Manager","Consultant / Advisor","Other"].map((r) => (
                  <SelectItem key={r} value={r}>{r}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>
      </FormSection>

      {/* 02 — Infrastructure */}
      <FormSection number="02" title="Cloud & Data Infrastructure">
        <div className="space-y-6">
          <Field label="Cloud provider(s) in use" required hint="Select all that apply">
            <CheckboxGroup
              options={["Microsoft Azure","Amazon Web Services (AWS)","Google Cloud Platform (GCP)","On-premises / Private cloud","Hybrid"]}
              selected={form.cloudProvider} onChange={(v) => set("cloudProvider", v)}
              otherValue={form.cloudProviderOther} onOtherChange={(v) => set("cloudProviderOther", v)}
              otherPlaceholder="Other cloud provider"
            />
          </Field>
          <Separator />
          <Field label="Data platform(s)" required hint="Select all that apply">
            <CheckboxGroup
              options={["Databricks","Snowflake","Microsoft Fabric","Azure Synapse","BigQuery","Redshift","Apache Spark (self-managed)","dbt Cloud"]}
              selected={form.dataPlatform} onChange={(v) => set("dataPlatform", v)}
              otherValue={form.dataPlatformOther} onOtherChange={(v) => set("dataPlatformOther", v)}
              otherPlaceholder="Other data platform"
            />
          </Field>
          <Separator />
          <Field label="Where does your primary data reside?" required>
            <Select value={form.dataLocation} onValueChange={(v) => set("dataLocation", v)} required>
              <SelectTrigger><SelectValue placeholder="Select data residency" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="eu-single">Single EU region</SelectItem>
                <SelectItem value="eu-multi">Multiple EU regions</SelectItem>
                <SelectItem value="eu-uk">EU + UK</SelectItem>
                <SelectItem value="onprem">On-premises (EU)</SelectItem>
                <SelectItem value="hybrid">Hybrid cloud + on-premises</SelectItem>
                <SelectItem value="noneu">Outside EU</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          {form.dataLocation && (
            <Field label="Data residency detail">
              <Input value={form.dataLocationDetail} onChange={(e) => set("dataLocationDetail", e.target.value)} placeholder="e.g. Azure West Europe + Germany North" />
            </Field>
          )}
        </div>
      </FormSection>

      {/* 03 — AI Maturity */}
      <FormSection number="03" title="AI & Agentic Maturity">
        <div className="space-y-6">
          <Field label="Have you previously deployed Agentic AI use cases?" required>
            <ToggleGroup
              options={[{ value: "no", label: "No" }, { value: "poc", label: "PoC / Pilot only" }, { value: "yes", label: "Yes, in production" }]}
              value={form.hasAgenticExperience} onChange={(v) => set("hasAgenticExperience", v)}
            />
          </Field>
          {(form.hasAgenticExperience === "poc" || form.hasAgenticExperience === "yes") && (
            <Field label="Briefly describe the use case(s)">
              <Textarea value={form.agenticUseCaseDescription} onChange={(e) => set("agenticUseCaseDescription", e.target.value)} placeholder="e.g. We built a RAG system for policy Q&A using Azure OpenAI..." rows={3} />
            </Field>
          )}
          <Separator />
          <Field label="AI / LLM models used or being evaluated" hint="Select all that apply">
            <CheckboxGroup
              options={["Azure OpenAI Service (GPT-4o / o-series)","Anthropic Claude (via API or AWS Bedrock)","Google Gemini (via Vertex AI or API)","Meta Llama (open source / self-hosted)","Mistral","Amazon Bedrock (managed models)","On-premises / air-gapped models","No AI models yet"]}
              selected={form.aiModelsUsed} onChange={(v) => set("aiModelsUsed", v)}
              otherValue={form.aiModelsOther} onOtherChange={(v) => set("aiModelsOther", v)}
              otherPlaceholder="Other model(s)"
            />
          </Field>
        </div>
      </FormSection>

      {/* 04 — Frameworks */}
      <FormSection number="04" title="Frameworks, Observability & Deployment">
        <div className="space-y-6">
          <Field label="Orchestration / agent frameworks" hint="Select all that apply">
            <CheckboxGroup
              options={["LangChain","LangGraph","AutoGen (Microsoft)","CrewAI","Semantic Kernel","Haystack","Custom / proprietary","None yet"]}
              selected={form.orchestrationFrameworks} onChange={(v) => set("orchestrationFrameworks", v)}
              otherValue={form.orchestrationOther} onOtherChange={(v) => set("orchestrationOther", v)}
              otherPlaceholder="Other framework(s)"
            />
          </Field>
          <Separator />
          <Field label="Observability & monitoring tools" hint="Select all that apply">
            <CheckboxGroup
              options={["LangSmith","LangFuse","Arize AI","Weights & Biases","MLflow","Datadog","Azure Monitor / Application Insights","AWS CloudWatch","OpenTelemetry (custom)","None yet"]}
              selected={form.observabilityTools} onChange={(v) => set("observabilityTools", v)}
              otherValue={form.observabilityOther} onOtherChange={(v) => set("observabilityOther", v)}
              otherPlaceholder="Other observability tool(s)"
            />
          </Field>
          <Separator />
          <Field label="Infrastructure / deployment tooling" hint="Select all that apply">
            <CheckboxGroup
              options={["Terraform","Bicep / ARM (Azure)","AWS CloudFormation / CDK","Pulumi","Kubernetes / AKS / EKS / GKE","Azure Container Apps","Azure Functions / AWS Lambda","GitHub Actions CI/CD","Azure DevOps","Docker Compose"]}
              selected={form.infraDeployment} onChange={(v) => set("infraDeployment", v)}
              otherValue={form.infraDeploymentOther} onOtherChange={(v) => set("infraDeploymentOther", v)}
              otherPlaceholder="Other deployment tooling"
            />
          </Field>
        </div>
      </FormSection>

      {/* 05 — Use Case */}
      <FormSection number="05" title="Your Primary Use Case">
        <div className="space-y-6">
          <Field label="Primary use case" required>
            <Select value={form.primaryUseCase} onValueChange={(v) => set("primaryUseCase", v)} required>
              <SelectTrigger><SelectValue placeholder="Select use case" /></SelectTrigger>
              <SelectContent>
                {["Claim processing automation","Document extraction / OCR","Fraud detection","Underwriting automation","Customer-facing AI agent","Regulatory compliance automation","Policy analysis & comparison","Risk assessment pipelines","Internal knowledge management","Multiple / exploring options","Other"].map((uc) => (
                  <SelectItem key={uc} value={uc}>{uc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label="Describe the use case and the problem you're trying to solve" required>
            <Textarea value={form.useCaseDescription} onChange={(e) => set("useCaseDescription", e.target.value)} placeholder="e.g. We process ~5,000 motor claims per month. Currently each takes 3–5 days. We want to automate the initial triage and data extraction phase..." rows={5} required />
          </Field>
          <Field label="Expected timeline to get started" required>
            <ToggleGroup
              options={[{ value: "now", label: "Immediately" }, { value: "q", label: "This quarter" }, { value: "h2", label: "Next 6 months" }, { value: "exploring", label: "Exploring" }]}
              value={form.timeline} onChange={(v) => set("timeline", v)}
            />
          </Field>
          <Separator />
          <Field label="Anything else we should know?">
            <Textarea value={form.additionalContext} onChange={(e) => set("additionalContext", e.target.value)} placeholder="Budget constraints, regulatory concerns, existing vendor relationships, team size, etc." rows={3} />
          </Field>
        </div>
      </FormSection>

      {/* Error */}
      {status === "error" && (
        <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}

      {/* Submit */}
      <Button type="submit" disabled={status === "loading"} size="lg" className="w-full rounded-xl font-bold py-6 text-base">
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit qualification form
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Your information is processed in accordance with GDPR. We will never sell or share your details.
      </p>
    </form>
  );
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function formatList(items: string[], other?: string): string {
  const all = [...(items || [])];
  if (other && other.trim()) all.push(`Other: ${other.trim()}`);
  if (all.length === 0) return "—";
  return all.join(", ");
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 16px;background:#0F2040;color:#94A3B8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;width:220px;vertical-align:top;border-bottom:1px solid #1e3a5f;">${label}</td>
      <td style="padding:10px 16px;color:#E2E8F0;font-size:14px;vertical-align:top;border-bottom:1px solid #1e3a5f;">${value || "—"}</td>
    </tr>
  `;
}

function section(title: string, rows: string): string {
  return `
    <tr>
      <td colspan="2" style="padding:20px 16px 8px;background:#050B18;color:#60A5FA;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;border-bottom:2px solid #1e3a5f;">${title}</td>
    </tr>
    ${rows}
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      company,
      country,
      role,
      cloudProvider,
      cloudProviderOther,
      dataPlatform,
      dataPlatformOther,
      dataLocation,
      dataLocationDetail,
      hasAgenticExperience,
      agenticUseCaseDescription,
      aiModelsUsed,
      aiModelsOther,
      orchestrationFrameworks,
      orchestrationOther,
      observabilityTools,
      observabilityOther,
      infraDeployment,
      infraDeploymentOther,
      primaryUseCase,
      useCaseDescription,
      timeline,
      additionalContext,
    } = body;

    const agenticLabel: Record<string, string> = {
      no: "No prior Agentic experience",
      poc: "PoC / Pilot only",
      yes: "Yes — in production",
    };

    const timelineLabel: Record<string, string> = {
      now: "Immediately",
      q: "This quarter",
      h2: "Next 6 months",
      exploring: "Exploring / no fixed timeline",
    };

    const dataLocationLabel: Record<string, string> = {
      "eu-single": "Single EU region",
      "eu-multi": "Multiple EU regions",
      "eu-uk": "EU + UK",
      onprem: "On-premises (EU)",
      hybrid: "Hybrid cloud + on-premises",
      noneu: "Outside EU",
    };

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#050B18;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:680px;margin:0 auto;padding:32px 16px;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#162B55,#0F2040);border:1px solid #1e3a5f;border-radius:16px 16px 0 0;padding:28px 32px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
        <div style="width:36px;height:36px;background:linear-gradient(135deg,#2563EB,#06B6D4);border-radius:8px;display:flex;align-items:center;justify-content:center;">
          <span style="color:white;font-weight:900;font-size:16px;">B</span>
        </div>
        <span style="color:white;font-weight:700;font-size:18px;">Bistrica<span style="color:#60A5FA;">.AI</span></span>
      </div>
      <h1 style="color:white;font-size:22px;font-weight:800;margin:16px 0 4px;">New Qualification Submission</h1>
      <p style="color:#94A3B8;font-size:13px;margin:0;">${new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} · ${company} · ${country}</p>
    </div>

    <!-- Table -->
    <table style="width:100%;border-collapse:collapse;background:#0A1628;border:1px solid #1e3a5f;border-top:none;border-radius:0 0 16px 16px;overflow:hidden;">
      ${section("Contact", `
        ${row("Name", `${firstName} ${lastName}`)}
        ${row("Email", `<a href="mailto:${email}" style="color:#60A5FA;text-decoration:none;">${email}</a>`)}
        ${row("Company", company)}
        ${row("Country", country)}
        ${row("Role", role)}
      `)}
      ${section("Infrastructure", `
        ${row("Cloud Provider(s)", formatList(cloudProvider, cloudProviderOther))}
        ${row("Data Platform(s)", formatList(dataPlatform, dataPlatformOther))}
        ${row("Data Residency", `${dataLocationLabel[dataLocation] || dataLocation}${dataLocationDetail ? ` — ${dataLocationDetail}` : ""}`)}
      `)}
      ${section("AI Maturity", `
        ${row("Agentic Experience", agenticLabel[hasAgenticExperience] || hasAgenticExperience)}
        ${agenticUseCaseDescription ? row("Use Case Description", agenticUseCaseDescription) : ""}
        ${row("AI Models", formatList(aiModelsUsed, aiModelsOther))}
      `)}
      ${section("Frameworks & Tooling", `
        ${row("Orchestration Frameworks", formatList(orchestrationFrameworks, orchestrationOther))}
        ${row("Observability Tools", formatList(observabilityTools, observabilityOther))}
        ${row("Infra / Deployment", formatList(infraDeployment, infraDeploymentOther))}
      `)}
      ${section("Use Case", `
        ${row("Primary Use Case", primaryUseCase)}
        ${row("Timeline", timelineLabel[timeline] || timeline)}
        ${row("Description", `<div style="white-space:pre-wrap;">${useCaseDescription}</div>`)}
        ${additionalContext ? row("Additional Context", `<div style="white-space:pre-wrap;">${additionalContext}</div>`) : ""}
      `)}
    </table>

    <!-- Footer -->
    <div style="text-align:center;padding:20px;">
      <p style="color:#334155;font-size:11px;margin:0;">Bistrica.AI Qualification System · <a href="mailto:${email}" style="color:#475569;text-decoration:none;">Reply directly to ${email}</a></p>
    </div>
  </div>
</body>
</html>
    `;

    const { error } = await resend.emails.send({
      from: "Bistrica.AI <onboarding@resend.dev>",
      to: "mladenbp@gmail.com",
      reply_to: email,
      subject: `[Bistrica.AI] New qualification: ${company} — ${primaryUseCase}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email delivery failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

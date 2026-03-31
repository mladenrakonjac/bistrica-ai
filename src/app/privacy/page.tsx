import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy | Bistrica.AI",
  description: "How Bistrica.AI collects, processes, and protects personal data in accordance with GDPR.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Who we are",
    body: "Bistrica.AI is a professional services company specialising in Agentic and Generative AI solutions for European insurance organisations. References to \"we\", \"us\", or \"our\" in this policy refer to Bistrica.AI.",
  },
  {
    title: "What data we collect",
    body: "When you submit our qualification form, we collect the information you provide: name, work email address, company name, country, role, and details about your technical infrastructure and intended use case. We do not collect any data passively (no cookies, no tracking pixels, no analytics).",
  },
  {
    title: "How we use your data",
    body: "We use the information you submit solely to review your qualification and respond to your enquiry. We do not use your data for marketing, do not add you to mailing lists, and do not perform automated decision-making based on your submission.",
  },
  {
    title: "Legal basis for processing",
    body: "We process your personal data on the basis of your explicit consent (Article 6(1)(a) GDPR), which you give by submitting the qualification form, and on the basis of legitimate interest (Article 6(1)(f) GDPR) in responding to professional business enquiries.",
  },
  {
    title: "Data retention",
    body: "We retain your submitted information for a maximum of 12 months from receipt, or until you request deletion. After this period, your data is permanently deleted from our systems.",
  },
  {
    title: "Data sharing",
    body: "We do not sell, rent, or share your personal data with third parties for commercial purposes. We use Resend (resend.com) to deliver email notifications of your submission. Resend processes email content solely for delivery and does not retain message content beyond standard email infrastructure logs.",
  },
  {
    title: "Your rights under GDPR",
    body: "You have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data; withdraw consent at any time; lodge a complaint with your national data protection authority. To exercise any of these rights, contact us at the email address below.",
  },
  {
    title: "Data transfers",
    body: "We do not transfer your personal data outside the European Economic Area. Our email delivery provider operates within EEA data centres.",
  },
  {
    title: "Contact",
    body: "For any privacy-related queries or to exercise your rights, contact us at: privacy@bistrica.ai",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-background overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 font-semibold tracking-wide text-xs px-3 py-1.5">
            Legal
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {sections.map((s, i) => (
            <Card key={s.title}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-black text-primary/40 tabular-nums mt-0.5 w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-bold text-foreground mb-2">{s.title}</h2>
                    <Separator className="mb-3 w-8" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

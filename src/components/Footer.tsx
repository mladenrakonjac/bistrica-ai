import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand col */}
          <div className="md:col-span-4">
            <Logo size="md" />
            <p className="text-muted-foreground text-sm leading-relaxed mt-4 max-w-xs">
              Helping European insurance organisations deploy production-grade
              Agentic AI — from strategy to live systems.
            </p>
            <Badge
              variant="outline"
              className="mt-5 text-xs font-medium gap-1.5"
            >
              {/* CSS circle using ring/primary token */}
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              GDPR-aware · Europe-first
            </Badge>
          </div>

          {/* Solutions */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
              Solutions
            </p>
            <ul className="space-y-3">
              {[
                ["Use Cases", "/use-cases"],
                ["Agentic Lifecycle", "/agentic-lifecycle"],
                ["Education", "/education"],
                ["Get in Touch", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance Focus */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
              Insurance Focus
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Claim Processing",
                "Document OCR",
                "Fraud Detection",
                "Underwriting",
                "Risk Assessment",
                "Compliance",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Bistrica.AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-muted-foreground/60 text-xs hover:text-primary transition-colors duration-150">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground/30 text-xs">·</span>
            <p className="text-muted-foreground/50 text-xs">
              Built for European insurance · GDPR compliant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

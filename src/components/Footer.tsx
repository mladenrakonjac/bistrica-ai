import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo size="md" />
            <p className="text-deep-navy/60 text-sm leading-relaxed max-w-xs mt-4">
              Helping European insurance organisations unlock the full potential
              of Agentic and Generative AI — from strategy to production.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-deep-navy/40 bg-deep-navy/5 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                GDPR-aware · Europe-first
              </span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-deep-navy font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-2">
              {[
                ["Use Cases", "/use-cases"],
                ["Agentic Lifecycle", "/agentic-lifecycle"],
                ["Education", "/education"],
                ["Get in Touch", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-deep-navy/60 text-sm hover:text-royal-blue transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance Focus */}
          <div>
            <h4 className="text-deep-navy font-semibold text-sm mb-4">Insurance Focus</h4>
            <ul className="space-y-2 text-deep-navy/60 text-sm">
              {["Claim Processing", "Document OCR", "Fraud Detection", "Policy Analysis", "Risk Assessment", "Regulatory Compliance"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-sky-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-deep-navy/40 text-sm">
            &copy; {new Date().getFullYear()} Bistrica.AI. All rights reserved.
          </p>
          <p className="text-deep-navy/30 text-xs">
            Built for European insurance · GDPR compliant
          </p>
        </div>
      </div>
    </footer>
  );
}

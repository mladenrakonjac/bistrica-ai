import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 bg-blue-600 rounded-md rotate-6" />
                <div className="absolute inset-0 bg-cyan-500 rounded-md -rotate-3 opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black text-xs z-10">B</span>
                </div>
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                Bistrica<span className="text-blue-400">.AI</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Helping European insurance organisations unlock the full potential
              of Agentic and Generative AI — from strategy to production.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                GDPR-aware. Europe-first.
              </span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">
              Solutions
            </h4>
            <ul className="space-y-2">
              {[
                ["Use Cases", "/use-cases"],
                ["Agentic Lifecycle", "/agentic-lifecycle"],
                ["Education", "/education"],
                ["Get in Touch", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 text-sm hover:text-slate-200 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">
              Insurance Focus
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {[
                "Claim Processing",
                "Document OCR",
                "Fraud Detection",
                "Policy Analysis",
                "Risk Assessment",
                "Regulatory Compliance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Bistrica.AI. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built for European insurance · GDPR compliant
          </p>
        </div>
      </div>
    </footer>
  );
}

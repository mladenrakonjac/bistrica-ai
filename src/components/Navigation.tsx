"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/use-cases", label: "Use Cases" },
  { href: "/agentic-lifecycle", label: "Agentic Lifecycle" },
  { href: "/education", label: "Education" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo size="md" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-royal-blue bg-sky-blue/10"
                    : "text-deep-navy/70 hover:text-deep-navy hover:bg-deep-navy/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-3">
              <Button asChild size="sm" className="bg-deep-navy hover:bg-royal-blue text-white font-semibold rounded-xl px-5">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-deep-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-1 bg-white/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-royal-blue bg-sky-blue/10"
                    : "text-deep-navy/70 hover:text-deep-navy hover:bg-deep-navy/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button asChild className="w-full bg-deep-navy hover:bg-royal-blue text-white rounded-xl">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

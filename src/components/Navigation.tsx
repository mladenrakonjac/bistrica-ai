"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Logo size="md" />

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                pathname === l.href
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-3 pl-3 border-l border-border">
            <Button asChild size="sm" className="rounded-lg font-semibold">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile toggle — shadcn Button with lucide icon */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                pathname === l.href
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Separator className="my-3" />
          <Button asChild className="w-full rounded-lg font-semibold">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

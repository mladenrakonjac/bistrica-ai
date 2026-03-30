import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="relative text-center max-w-xl mx-auto px-4 sm:px-6">
        <Badge variant="outline" className="mb-6 font-semibold tracking-wide text-xs px-3 py-1.5">
          404
        </Badge>
        <h1 className="text-5xl sm:text-6xl font-black text-foreground mb-4 leading-tight">
          Page not found
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" className="rounded-xl font-semibold px-7">
            <Link href="/">
              Back to home
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold px-7">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

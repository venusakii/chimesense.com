import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated circuit background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 50%, var(--primary) 2px, transparent 2px),
            radial-gradient(circle at 80% 30%, var(--primary) 2px, transparent 2px),
            radial-gradient(circle at 50% 80%, var(--primary) 2px, transparent 2px)
          `,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-balance">About ChimeSense</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe safety should be seamless — technology that protects, not distracts. ChimeSense was founded on
            the principle that smart home security should be intelligent, intuitive, and accessible to everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2">
              <div className="text-4xl font-mono font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Homes Protected</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-mono font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Reliability</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-mono font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
          </div>

          <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary bg-transparent">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

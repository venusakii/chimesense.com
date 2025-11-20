"use client"

import { Card } from "@/components/ui/card"

const devices = [
  {
    name: "Matte Silver",
    color: "#C0C0C0",
    image: "/matte-silver-smart-doorbell-minimalist-sleek.jpg",
  },
  {
    name: "Jet Black",
    color: "#1a1a1a",
    image: "/jet-black-smart-doorbell-modern-premium.jpg",
  },
  {
    name: "Champagne Gold",
    color: "#D4AF37",
    image: "/champagne-gold-smart-doorbell-luxury-elegant.jpg",
  },
]

export function DevicesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4 text-balance">Designed for Every Door</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the perfect finish to match your home's aesthetic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {devices.map((device) => (
            <Card
              key={device.name}
              className="group bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <img
                  src={device.image || "/placeholder.svg"}
                  alt={device.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Glowing ring effect on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-32 h-32 rounded-full border-4 border-primary animate-glow-pulse"></div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-mono text-xl font-semibold mb-2">{device.name}</h3>
                <div className="flex items-center justify-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full border border-primary/30"
                    style={{ backgroundColor: device.color }}
                  ></div>
                  <span className="text-sm text-muted-foreground">Available Now</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

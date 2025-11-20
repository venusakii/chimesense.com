"use client"

import { Brain, Video, Cloud, Battery } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "AI Motion Detection",
    description: "Advanced algorithms distinguish between people, packages, and pets",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Video,
    title: "HD Night Vision",
    description: "Crystal clear footage in complete darkness with infrared technology",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Secure encrypted storage with instant access from anywhere",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Battery,
    title: "Long-Life Battery",
    description: "Up to 12 months of battery life on a single charge",
    color: "from-green-500/20 to-green-500/5",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4 text-balance">Key Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cutting-edge technology designed for modern homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 p-6"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-mono text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

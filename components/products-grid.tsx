"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const products = [
  {
    slug: "chimesense-lite",
    name: "ChimeSense Lite",
    price: "$79.99",
    rating: 4.5,
    reviews: 1243,
    image: "/smart-doorbell-lite-version-compact-white.jpg",
    features: ["HD Video", "Battery Powered", "Basic AI"],
    badge: "Best Value",
  },
  {
    slug: "chimesense-360",
    name: "ChimeSense 360",
    price: "$129.99",
    rating: 4.8,
    reviews: 2156,
    image: "/smart-doorbell-360-degree-camera-premium-black.jpg",
    features: ["360° View", "Wired/Wireless", "Advanced AI"],
    badge: "Most Popular",
  },
  {
    slug: "chimesense-vision-pro",
    name: "ChimeSense Vision Pro",
    price: "$199.99",
    rating: 4.9,
    reviews: 987,
    image: "/premium-smart-doorbell-vision-pro-sleek-metal.jpg",
    features: ["4K Video", "Dual Power", "AI Pro"],
    badge: "Pro Choice",
  },
]

export function ProductsGrid() {
  const router = useRouter()

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4 text-balance">Top Picks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find the perfect smart doorbell for your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card
              key={product.slug}
              className="group bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover ring effect */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-32 h-32 rounded-full border-4 border-primary/50 animate-glow-pulse"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-mono text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span key={feature} className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Filters hint */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-primary/30 hover:border-primary bg-transparent">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const allProducts = [
  {
    slug: "ring-battery-doorbell",
    name: "Ring Battery Doorbell",
    price: 49.99,
    rating: 4.6,
    reviews: 33010,
    image: "https://m.media-amazon.com/images/I/61Vb7V1XNfL._SX679_.jpg",
    resolution: "HD",
    powerType: "Battery",
    aiFeatures: "Smart Alerts",
    badge: "Best Seller",
    description: "Head-to-Toe Video with smart alerts for people and packages",
  },
  {
    slug: "kmouants-adjustable-doorbell",
    name: "KMOUANTS Adjustable Doorbell Mount",
    price: 0,
    rating: 0,
    reviews: 0,
    image: "https://m.media-amazon.com/images/I/71gD0vP+VkL._AC_SX679_.jpg",
    resolution: null,
    powerType: null,
    aiFeatures: null,
    badge: null,
    description: "Adjustable mount for flexible Ring Doorbell positioning",
  },
  {
    slug: "google-nest-doorbell",
    name: "Google Nest Doorbell Wired 3rd Gen",
    price: 0,
    rating: 0,
    reviews: 0,
    image: "https://m.media-amazon.com/images/I/51ZIXRqFEgL._AC_SX679_.jpg",
    resolution: "1080p",
    powerType: "Wired",
    aiFeatures: "Intelligent",
    badge: null,
    description: "Wired smart doorbell with HDR video and intelligent alerts",
  },
  {
    slug: "elago-google-doorbell-mount",
    name: "elago Mount Compatible with Google Nest Doorbell",
    price: 10.79,
    rating: 4.4,
    reviews: 156,
    image: "https://m.media-amazon.com/images/I/51Bb1-9PClL._AC_SX679_.jpg",
    resolution: null,
    powerType: null,
    aiFeatures: null,
    badge: null,
    description: "Adjustable wall mount for secure Google Nest Doorbell installation",
  },
  {
    slug: "corinthian-bells-windchime",
    name: "Corinthian Bells 44-inch Windchime Copper",
    price: 162.90,
    rating: 4.9,
    reviews: 2644,
    image: "https://m.media-amazon.com/images/I/71wLwNI6i-L._AC_SX679_.jpg",
    resolution: null,
    powerType: null,
    aiFeatures: null,
    badge: "Best Seller",
    description: "Handcrafted USA-made windchime with rich pentatonic tones",
  },
  {
    slug: "astarin-bell-wind-chimes",
    name: "ASTARIN Bell Wind Chimes Temple Wind Bell Red Copper",
    price: 23.99,
    rating: 4.5,
    reviews: 3522,
    image: "https://m.media-amazon.com/images/I/616v+c7J-gL._AC_SX679_.jpg",
    resolution: null,
    powerType: null,
    aiFeatures: null,
    badge: null,
    description: "Melodious temple wind bells for Feng Shui harmony",
  },
  {
    slug: "meinl-sonic-energy-chimes",
    name: "Meinl Sonic Energy Chimes Mahogany",
    price: 0,
    rating: 0,
    reviews: 0,
    image: "https://m.media-amazon.com/images/I/81KznfB327L._AC_SY879_.jpg",
    resolution: null,
    powerType: null,
    aiFeatures: null,
    badge: null,
    description: "Mahogany chimes for meditation and sound therapy",
  },
  {
    slug: "blink-video-doorbell",
    name: "Blink Video Doorbell Certified Refurbished",
    price: 44.99,
    rating: 0,
    reviews: 0,
    image: "https://m.media-amazon.com/images/I/21-6fE2hx7L.jpg",
    resolution: "1080p",
    powerType: "Battery/Wired",
    aiFeatures: "Basic",
    badge: "Refurbished",
    description: "Affordable HD video doorbell with two-way audio",
  },
  {
    slug: "remo-remobell-doorbell",
    name: "Remo RemoBell Video Doorbell Enabled Refurbished",
    price: 0,
    rating: 0,
    reviews: 0,
    image: "https://m.media-amazon.com/images/I/31bEib+SuaL._AC_.jpg",
    resolution: "1080p",
    powerType: "Battery",
    aiFeatures: "Basic",
    badge: "Refurbished",
    description: "Smart video doorbell with motion detection and app control",
  },
]

export default function ProductsPage() {
  const [selectedResolution, setSelectedResolution] = useState("all")
  const [selectedPower, setSelectedPower] = useState("all")
  const [selectedAI, setSelectedAI] = useState("all")

  const filteredProducts = allProducts.filter((product) => {
    if (selectedResolution !== "all" && product.resolution !== selectedResolution) return false
    if (selectedPower !== "all" && product.powerType !== selectedPower) return false
    if (selectedAI !== "all" && product.aiFeatures !== selectedAI) return false
    return true
  })

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-mono text-4xl md:text-6xl font-bold mb-4 text-balance">Our Smart Doorbells</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find the perfect doorbell for your home with advanced features and intelligent design
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="bg-card border border-primary/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-primary" />
                <h3 className="font-mono text-lg font-semibold">Filters</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Resolution</label>
                  <Select value={selectedResolution} onValueChange={setSelectedResolution}>
                    <SelectTrigger className="bg-background border-primary/20">
                      <SelectValue placeholder="All Resolutions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Resolutions</SelectItem>
                      <SelectItem value="1080p">1080p</SelectItem>
                      <SelectItem value="2K">2K</SelectItem>
                      <SelectItem value="4K">4K</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Power Type</label>
                  <Select value={selectedPower} onValueChange={setSelectedPower}>
                    <SelectTrigger className="bg-background border-primary/20">
                      <SelectValue placeholder="All Power Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Power Types</SelectItem>
                      <SelectItem value="Battery">Battery</SelectItem>
                      <SelectItem value="Wired">Wired</SelectItem>
                      <SelectItem value="Wired/Battery">Wired/Battery</SelectItem>
                      <SelectItem value="Dual Power">Dual Power</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">AI Features</label>
                  <Select value={selectedAI} onValueChange={setSelectedAI}>
                    <SelectTrigger className="bg-background border-primary/20">
                      <SelectValue placeholder="All AI Features" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All AI Features</SelectItem>
                      <SelectItem value="Basic">Basic</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Pro">Pro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
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
                <Link href={`/products/${product.slug}`}>
                  <div className="relative aspect-square overflow-hidden bg-secondary/30 cursor-pointer">
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
                </Link>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-mono text-xl font-semibold mb-2 hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
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
                    <span className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground">
                      {product.resolution}
                    </span>
                    <span className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground">
                      {product.powerType}
                    </span>
                    <span className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground">
                      AI {product.aiFeatures}
                    </span>
                  </div>

                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href={`/products/${product.slug}`}>View Details</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-4">No products match your filters</p>
              <Button
                onClick={() => {
                  setSelectedResolution("all")
                  setSelectedPower("all")
                  setSelectedAI("all")
                }}
                variant="outline"
                className="border-primary/30 hover:border-primary"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

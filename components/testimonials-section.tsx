import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Hannah W.",
    location: "San Francisco, CA",
    avatar: "/professional-woman-smiling-avatar.png",
    quote: "I see every delivery, even when I'm 5,000 miles away. Game changer for frequent travelers.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    location: "Austin, TX",
    avatar: "/professional-man-smiling-avatar.jpg",
    quote: "The AI detection is incredibly accurate. No more false alerts from passing cars or shadows.",
    rating: 5,
  },
  {
    name: "Leila Green",
    location: "Seattle, WA",
    avatar: "/professional-woman-confident-avatar.jpg",
    quote: "Installation took 15 minutes. The night vision quality is better than my security camera.",
    rating: 5,
  },
  {
    name: "Noah R.",
    location: "Boston, MA",
    avatar: "/young-professional-man-avatar.png",
    quote: "Best home tech purchase I've made. The two-way audio is crystal clear.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4 text-balance">Trusted by Smart Home Owners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers protecting their homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-primary/20 p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

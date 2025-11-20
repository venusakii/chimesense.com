import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Shield, Zap, Heart, Award } from "lucide-react"

export const metadata = {
  title: "About ChimeSense - Our Mission & Vision",
  description: "Learn about ChimeSense and our commitment to making smart home security accessible to everyone",
}

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize your safety with enterprise-grade encryption and reliable hardware",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing boundaries with AI and smart technology advancements",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Designed with real users in mind, making security simple and accessible",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Premium materials and rigorous testing ensure long-lasting performance",
    },
  ]

  const timeline = [
    {
      year: "2020",
      title: "Founded",
      description: "ChimeSense was born from a vision to make smart home security accessible to everyone",
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Launched ChimeSense Lite, our first smart doorbell with AI detection",
    },
    {
      year: "2022",
      title: "10,000 Homes",
      description: "Reached 10,000 homes protected with our smart doorbell technology",
    },
    {
      year: "2023",
      title: "Vision Pro Launch",
      description: "Introduced 4K technology and professional AI features",
    },
    {
      year: "2024",
      title: "50,000+ Customers",
      description: "Expanded globally and reached 50,000+ satisfied customers",
    },
  ]

  const team = [
    {
      name: "Alexandra Mitchell",
      role: "CEO & Founder",
      image: "/professional-woman-ceo-smiling-confident-portrait.jpg",
    },
    {
      name: "David Park",
      role: "CTO",
      image: "/professional-asian-man-cto-tech-leader-portrait.jpg",
    },
    {
      name: "Emma Thompson",
      role: "Head of Design",
      image: "/professional-woman-designer-creative-leader-portra.jpg",
    },
    {
      name: "James Anderson",
      role: "VP of Engineering",
      image: "/professional-man-engineer-vp-technology-portrait.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto text-center">
            <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6 text-balance">
              Intelligence at Your Doorstep
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe safety should be seamless — technology that protects, not distracts. ChimeSense was founded on
              the principle that smart home security should be intelligent, intuitive, and accessible to everyone.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 mb-20 bg-secondary/30 py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-mono font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Homes Protected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-mono font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Reliability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-mono font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-mono font-bold text-primary mb-2">4.8</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title} className="bg-card border-primary/20 p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-mono text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-4 mb-20 bg-secondary/30 py-16">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a small startup to a trusted name in smart home security
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <Card className="bg-card border-primary/20 p-6">
                        <div className="font-mono text-2xl font-bold text-primary mb-2">{item.year}</div>
                        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </Card>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:block w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 flex-shrink-0"></div>

                    {/* Spacer */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The passionate people behind ChimeSense</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="bg-card border-primary/20 overflow-hidden group">
                  <div className="aspect-square overflow-hidden bg-secondary/30">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-mono text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-4">
          <div className="container mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 p-12 text-center">
              <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                To empower every home with intelligent security solutions that provide peace of mind through
                cutting-edge technology, exceptional design, and unwavering commitment to privacy and reliability.
              </p>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

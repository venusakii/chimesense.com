import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { HeroSection } from "@/components/hero-section"
import { DevicesSection } from "@/components/devices-section"
import { FeaturesSection } from "@/components/features-section"
import { VideoSection } from "@/components/video-section"
import { ProductsGrid } from "@/components/products-grid"
import { TestimonialsSection } from "@/components/testimonials-section"
import { HowItWorks } from "@/components/how-it-works"
import { AboutPreview } from "@/components/about-preview"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <DevicesSection />
        <FeaturesSection />
        <VideoSection />
        <ProductsGrid />
        <TestimonialsSection />
        <HowItWorks />
        <AboutPreview />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

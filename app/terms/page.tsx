import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Terms of Service - ChimeSense",
  description: "ChimeSense terms of service and conditions of use",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <Card className="bg-card border-primary/20 p-8 space-y-8">
            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using ChimeSense products and services, you agree to be bound by these Terms of Service
                and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                ChimeSense grants you a personal, non-transferable license to use our products and services for their
                intended purpose. This license shall automatically terminate if you violate any of these restrictions.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">3. Product Warranty</h2>
              <p className="text-muted-foreground leading-relaxed">
                All ChimeSense products come with a 2-year limited warranty against manufacturing defects. This warranty
                does not cover damage from misuse, accidents, or normal wear and tear.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">4. Subscription Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cloud storage subscriptions renew automatically unless cancelled. You may cancel at any time through
                your account settings. Refunds are not available for partial billing periods.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">5. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You are responsible for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Maintaining the security of your account credentials</li>
                <li>Ensuring your use complies with local privacy and recording laws</li>
                <li>Proper installation and maintenance of your device</li>
                <li>Notifying others who may be recorded by your device</li>
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                ChimeSense shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use or inability to use our products or services.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via
                email or through the app.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at legal@chimesense.com
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

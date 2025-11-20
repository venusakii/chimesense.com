import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy - ChimeSense",
  description: "ChimeSense privacy policy and data protection practices",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <Card className="bg-card border-primary/20 p-8 space-y-8">
            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ChimeSense collects information that you provide directly to us when you create an account, register
                your device, or communicate with our support team. This includes your name, email address, and device
                information.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We also collect video and audio recordings from your doorbell when motion is detected or the doorbell
                button is pressed, in accordance with your settings.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you notifications about activity at your door</li>
                <li>Process your transactions and subscriptions</li>
                <li>Respond to your comments and questions</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">3. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                All video data is encrypted end-to-end using industry-standard encryption protocols. We implement
                appropriate technical and organizational measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">4. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Video recordings are stored according to your subscription plan (7 days free, up to 60 days for
                premium). Account information is retained as long as your account is active. You can delete recordings
                at any time through the app.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access, update, or delete your personal information</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@chimesense.com
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

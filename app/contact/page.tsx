"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "support@chimesense.com",
      description: "Get a response within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "1-800-CHIME-SENSE",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      detail: "Chat with our team",
      description: "Available 24/7 for urgent issues",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "San Francisco, CA",
      description: "By appointment only",
    },
  ]

  const faqs = [
    {
      question: "How do I install my ChimeSense doorbell?",
      answer:
        "Installation is simple and takes about 15 minutes. Each doorbell comes with detailed instructions and all necessary hardware. You can also watch our step-by-step video guide in the app.",
    },
    {
      question: "What is the warranty coverage?",
      answer:
        "All ChimeSense products come with a 2-year limited warranty covering manufacturing defects. Extended warranty options are available at checkout.",
    },
    {
      question: "Do I need a subscription?",
      answer:
        "Basic features work without a subscription. Cloud storage requires a subscription starting at $3.99/month, with 7 days of storage included free for the first year.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. All video is encrypted end-to-end and stored on secure servers. We never share your data with third parties and comply with all privacy regulations.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6 text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions? We're here to help. Reach out to our support team.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <Card
                  key={method.title}
                  className="bg-card border-primary/20 p-6 text-center hover:border-primary/50 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-mono text-lg font-semibold mb-2">{method.title}</h3>
                  <div className="text-primary font-semibold mb-1">{method.detail}</div>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </Card>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <Card className="bg-card border-primary/20 p-8">
              <h2 className="font-mono text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-primary/20 focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-primary/20 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-background border-primary/20 focus:border-primary"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background border-primary/20 focus:border-primary min-h-[150px]"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 ring-glow"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h2 className="font-mono text-2xl font-bold">Frequently Asked Questions</h2>
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card border-primary/20 p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Support */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 p-12 text-center">
            <h2 className="font-mono text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              For urgent technical support or product issues, our team is available 24/7 via live chat
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Live Chat
            </Button>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

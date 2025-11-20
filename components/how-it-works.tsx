export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Install",
      description: "Mount your doorbell in minutes with included hardware",
    },
    {
      number: "02",
      title: "Connect App",
      description: "Download the ChimeSense app and pair your device",
    },
    {
      number: "03",
      title: "Get Smart Alerts",
      description: "Receive instant notifications with AI-powered detection",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get started in three simple steps
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary"></div>

            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Step number */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center">
                      <span className="font-mono text-5xl font-bold text-primary">{step.number}</span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-glow-pulse"></div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-mono text-2xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function VideoSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background with subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-balance">The Future of Home Entry</h2>

          <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
            <div className="aspect-video bg-secondary/50 flex items-center justify-center">
              <img
                src="/modern-smart-home-front-door-with-doorbell-glowing.jpg"
                alt="Smart doorbell in action"
                className="w-full h-full object-cover"
              />
              {/* Video overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-8">
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-mono font-semibold text-white text-balance">
                    Instant notifications. Two-way talk. Total peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-mono font-bold text-primary mb-2">1080p</div>
              <div className="text-sm text-muted-foreground">HD Video Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-mono font-bold text-primary mb-2">160°</div>
              <div className="text-sm text-muted-foreground">Wide Angle View</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-mono font-bold text-primary mb-2">0.3s</div>
              <div className="text-sm text-muted-foreground">Alert Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

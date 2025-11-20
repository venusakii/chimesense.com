import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
              </div>
              <span className="font-mono text-lg font-bold">ChimeSense</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Intelligence at Your Doorstep. Smart security you can trust.
            </p>
          </div>

          {/* Product Links */}
          

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 ChimeSense.com. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            Participant in the Amazon Associates Program. As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>

      {/* Cookie Banner would go here */}
    </footer>
  )
}

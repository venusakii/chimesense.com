"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center animate-glow-pulse">
                <div className="w-6 h-6 rounded-full bg-primary"></div>
              </div>
            </div>
            <span className="font-mono text-xl font-bold text-foreground tracking-wider">ChimeSense</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            
            
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-primary/20">
              <nav className="flex flex-col gap-6 mt-8">
                <Link href="/" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="outline" className="border-primary/30 hover:border-primary bg-transparent">
                    Compare Models
                  </Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Shop Now</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"

const navLinks = [
  { name: "How It Works", href: "#three-step-plan" },
  { name: "Results", href: "#proven-results" },
  { name: "Guarantees", href: "#guarantees" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="mx-auto max-w-7xl px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-supply-chain-guru/icon-transparent.png"
              alt="Supply Chain Guru"
              width={400}
              height={400}
              className="h-16 w-auto"
            />
            <Image
              src="/logo-supply-chain-guru/logo-horizontal-text.png"
              alt="Supply Chain Guru"
              width={200}
              height={200}
              className="h-7 w-auto -ml-1 mt-1"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}

            {/* Primary CTA Button */}
            <CalendlyButton
              size="sm"
              className="group rounded-full bg-orange-500 px-6 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Book Free Audit
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </CalendlyButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                {link.name}
              </button>
            ))}
            <CalendlyButton
              size="sm"
              className="w-full mt-4 rounded-full bg-orange-500 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Book Free Audit
              <ArrowRight className="ml-1 h-4 w-4" />
            </CalendlyButton>
          </div>
        )}
      </nav>
    </header>
  )
}

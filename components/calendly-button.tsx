"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface CalendlyButtonProps {
  url?: string
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  prefill?: {
    name?: string
    email?: string
    customAnswers?: Record<string, string>
  }
}

export function CalendlyButton({
  url,
  children,
  className,
  size = "lg",
  variant = "default",
  prefill,
}: CalendlyButtonProps) {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false)

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')

    if (existingScript) {
      setIsCalendlyLoaded(true)
      return
    }

    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => {
      setIsCalendlyLoaded(true)
    }
    document.body.appendChild(script)

    // Also load the CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)
  }, [])

  const openCalendly = () => {
    // Use provided URL or fall back to environment variable
    const calendlyUrl = url || process.env.NEXT_PUBLIC_CALENDLY_URL

    if (!calendlyUrl) {
      console.error("Calendly URL is not configured. Please set NEXT_PUBLIC_CALENDLY_URL in .env.local")
      alert("Calendly is not configured. Please contact support.")
      return
    }

    if (typeof window !== "undefined" && (window as any).Calendly) {
      const options: any = {
        url: calendlyUrl,
      }

      if (prefill) {
        options.prefill = prefill
      }

      ;(window as any).Calendly.initPopupWidget(options)
    } else {
      console.error("Calendly script not loaded yet")
      alert("Calendly is loading, please try again in a moment.")
    }
  }

  return (
    <Button size={size} variant={variant} className={className} onClick={openCalendly}>
      {children}
    </Button>
  )
}

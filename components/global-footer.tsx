"use client"

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

export function GlobalFooter() {
  const pathname = usePathname()
  
  // Do not show the ETAT footer (and its nav) on Vasthra routes
  if (pathname.startsWith("/vastra")) {
    return null
  }

  return <Footer />
}

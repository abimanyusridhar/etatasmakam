import type { Metadata } from "next"
import { VastraHeader } from "@/components/vastra/header"
import { VastraHero } from "@/components/vastra/hero"
import { VastraServices } from "@/components/vastra/services"
import { VastraAbout } from "@/components/vastra/about"
import { VastraPricing } from "@/components/vastra/pricing"
import { VastraOrder } from "@/components/vastra/order"

export const metadata: Metadata = {
  title: "Vasthra | Premium Laundry Service",
  description: "Vasthra connects you with trusted local laundry shops — easy pickup, transparent pricing, and on-time delivery.",
}

export default function VastraPage() {
  return (
    <div className="min-h-screen bg-stone relative overflow-x-hidden vastra-theme">
      <VastraHeader />
      <main className="relative z-10">
        <VastraHero />
        <VastraServices />
        <VastraAbout />
        <VastraPricing />
        <VastraOrder />
      </main>
    </div>
  )
}

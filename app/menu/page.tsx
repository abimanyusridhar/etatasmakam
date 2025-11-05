import { Header } from "@/components/header"
import { MenuSection } from "@/components/menu-section"
import Link from "next/link"

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Menu Header */}
      <section className="bg-primary border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-accent mb-4">Our Menu</h1>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Carefully crafted dishes prepared with the finest ingredients to satisfy your cravings for authentic Indian
            cuisine.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MenuSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-accent mb-6">Ready to Order?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Order Online
            </Link>
            <Link
              href="https://www.swiggy.com"
              className="border-2 border-accent text-accent px-8 py-3 rounded font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-200"
            >
              Coming Soon on Swiggy
            </Link>
            <Link
              href="https://www.zomato.com"
              className="border-2 border-accent text-accent px-8 py-3 rounded font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-200"
            >
              Coming Soon on Zomato
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

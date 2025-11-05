"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const features = [
    {
      icon: "/icons/heritage.png",
      title: "Authentic Heritage",
      description: "Preserving the authentic flavors of traditional Karnataka cuisine since 2023"
    },
    {
      icon: "/icons/chef.png",
      title: "Master Chefs",
      description: "Our expert chefs bring decades of culinary expertise to every dish"
    },
    {
      icon: "/icons/quality.png",
      title: "Quality First",
      description: "Using premium ingredients and traditional cooking methods"
    },
    {
      icon: "/icons/satisfaction.png",
      title: "Customer Satisfaction",
      description: "Committed to exceeding expectations in taste and service"
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden" id="about">
      <div className="sacred-overlay absolute inset-0 opacity-80" />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-divine-red/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blessed-yellow/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-golden-beige/5 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blessed-yellow text-lg font-medium inline-block mb-3 bg-golden-beige/10 px-4 py-1 rounded-full">
            Our Legacy
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold golden-text mb-6 leading-tight">
            A Royal Culinary Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-divine-red via-golden-beige to-blessed-yellow mx-auto mb-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-right">
            <div className="space-y-6 text-sacred-white/90">
              <p className="text-lg leading-relaxed border-l-4 border-golden-beige pl-6">
                Welcome to ETAT ASMAKAM, where culinary excellence meets royal hospitality.
                Established in 2023, we have quickly become synonymous with authentic Karnataka cuisine,
                particularly known for our exceptional rice baths and signature biryanis.
              </p>
              <p className="text-lg leading-relaxed">
                Our journey began with a simple yet powerful vision: to preserve and present the
                rich culinary heritage of Karnataka while ensuring both quality and quantity exceed
                expectations. Every dish that leaves our kitchen carries the warmth of tradition
                and the mark of excellence.
              </p>
              <p className="text-lg leading-relaxed">
                At ETAT ASMAKAM, we believe dining is not just about food—it's about creating
                memorable experiences. Our commitment to authenticity is reflected in our
                cooking methods, where age-old recipes meet premium ingredients to create
                dishes that delight both the palate and the soul.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="royal-card p-6 rounded-xl hover-lift group transition-all duration-300"
                >
                  <div className="mb-4 inline-block bg-gradient-to-br from-golden-beige/30 to-stone-brown/30 p-3 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <div className="relative w-8 h-8">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        fill
                        className="object-contain brightness-125 contrast-125"
                        sizes="(max-width: 32px) 100vw, 32px"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold golden-text mb-3 group-hover:text-blessed-yellow transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sacred-white/90 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="luxury-gradient text-stone-rich px-8 py-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm text-lg font-semibold w-full sm:w-auto">
                Discover More
              </Button>
              <Button className="royal-gradient text-sacred-white px-8 py-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm text-lg font-semibold border border-golden-beige/20 w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-8">
            {/* Main Image Card */}
            <div className="royal-card p-5 rounded-2xl hover-lift group">
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/about-image.jpg"
                  alt="ETAT ASMAKAM Restaurant Interior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-brown/80 via-transparent to-transparent" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Founded", value: "2023", icon: "/icons/founded.png" },
                  { label: "Signature Dishes", value: "20+", icon: "/icons/dishes.png" },
                  { label: "Happy Customers", value: "1000+", icon: "/icons/customers.png" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 royal-card rounded-xl group/stat hover:scale-105 transition-all duration-300">
                    <div className="mb-2 group-hover/stat:scale-110 transition-transform duration-300 bg-gradient-to-br from-golden-beige/30 to-stone-brown/30 p-2 rounded-lg mx-auto w-10 h-10 flex items-center justify-center">
                      <div className="relative w-6 h-6">
                        <Image
                          src={stat.icon}
                          alt={stat.label}
                          fill
                          className="object-contain brightness-125 contrast-125"
                          sizes="(max-width: 24px) 100vw, 24px"
                        />
                      </div>
                    </div>
                    <div className="text-2xl font-bold golden-text mb-1 group-hover/stat:text-blessed-yellow transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-blessed-yellow text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification Badge */}
            <div className="flex items-center justify-center gap-6 p-6 royal-card rounded-xl hover-lift group">
              <div className="group-hover:rotate-12 transition-transform duration-300 bg-gradient-to-br from-golden-beige/30 to-stone-brown/30 p-3 rounded-lg">
                <div className="relative w-10 h-10">
                  <Image
                    src="/icons/certificate.png"
                    alt="Certification Badge"
                    fill
                    className="object-contain brightness-125 contrast-125"
                    sizes="(max-width: 40px) 100vw, 40px"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold golden-text mb-1 group-hover:text-blessed-yellow transition-colors">
                  Certified Excellence
                </h4>
                <p className="text-sacred-white/80">
                  FSSAI Certified & Quality Assured Establishment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

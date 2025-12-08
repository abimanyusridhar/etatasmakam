"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, Star, ShieldCheck, TrendingUp } from "lucide-react"

export function About() {
  const kpiMetrics = [
    {
      label: "Since",
      value: "2023",
      unit: "",
      icon: TrendingUp,
      color: "from-blessing-green/20 to-blessing-green/10",
      borderColor: "border-blessing-green/40",
      accentColor: "text-blessing-green",
    },
    {
      label: "Signature Dishes",
      value: "20+",
      unit: "",
      icon: Award,
      color: "from-blessed-yellow/20 to-blessed-yellow/10",
      borderColor: "border-blessed-yellow/40",
      accentColor: "text-blessed-yellow",
    },
    {
      label: "Star Rating",
      value: "4.8",
      unit: "/5",
      icon: Star,
      color: "from-divine-red/20 to-divine-red/10",
      borderColor: "border-divine-red/40",
      accentColor: "text-divine-red",
    },
  ]

  const reviewPlatforms = [
    { name: "Google Reviews", href: "https://google.com", logo: "G" },
    { name: "Zomato", href: "https://zomato.com", logo: "Z" },
    { name: "Swiggy", href: "https://swiggy.com", logo: "S" },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-stone-brown/30 to-stone-brown/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blessed-yellow mb-4">
            About ETAT ASMAKAM
          </h2>
          <p className="text-sacred-white/80 text-base sm:text-lg">
            Bringing authentic Karnataka flavors to your table since 2023
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left: About Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-golden-beige">
                Our Story
              </h3>
              <p className="text-sacred-white/80 leading-relaxed">
                Founded in 2023, ETAT ASMAKAM is a celebration of authentic Karnataka cuisine. Our mission is to preserve the rich culinary heritage of Karnataka while using the freshest ingredients and time-honored cooking techniques.
              </p>
              <p className="text-sacred-white/80 leading-relaxed">
                Every biryani, every curry, and every side dish is prepared with passion and precision. We believe in quality over quantity, authenticity over trends, and customer satisfaction above all.
              </p>
            </div>

            {/* Trust Badges Section */}
            <div className="space-y-4 pt-4 border-t border-golden-beige/20">
              <h4 className="text-golden-beige font-semibold text-sm uppercase tracking-widest">
                Certifications & Trust
              </h4>
              
              <div className="flex flex-wrap gap-4">
                {/* FSSAI Badge */}
                <Link
                  href="/quality-assurance"
                  className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-blessing-green/15 border border-blessing-green/40 hover:border-blessing-green/60 transition-all duration-300 hover:bg-blessing-green/20"
                >
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <div className="absolute inset-0 bg-blessing-green/30 rounded-lg flex items-center justify-center">
                      <ShieldCheck size={24} className="text-blessing-green" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-blessing-green text-sm">FSSAI Certified</p>
                    <p className="text-sacred-white/70 text-xs">Verified & Trusted</p>
                  </div>
                </Link>

                {/* ISO/Quality Badge Placeholder */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-golden-beige/15 border border-golden-beige/40">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <div className="absolute inset-0 bg-golden-beige/30 rounded-lg flex items-center justify-center">
                      <Award size={24} className="text-golden-beige" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-golden-beige text-sm">Quality Assured</p>
                    <p className="text-sacred-white/70 text-xs">100% Fresh Ingredients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: About Image */}
          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-golden-beige/30">
            <Image
              src="/about-restaurant.jpg"
              alt="ETAT ASMAKAM Restaurant"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-brown/60 to-transparent"></div>
          </div>
        </div>

        {/* KPI Cards Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-golden-beige mb-8 text-center">
            By The Numbers
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {kpiMetrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${metric.color} border ${metric.borderColor} rounded-2xl overflow-hidden hover:border-blessed-yellow/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blessed-yellow/20 p-8`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blessed-yellow/5 to-divine-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative space-y-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl ${metric.color} border ${metric.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={32} className={metric.accentColor} />
                    </div>

                    {/* Metric Value */}
                    <div>
                      <p className="text-sacred-white/70 font-medium text-sm uppercase tracking-widest mb-2">
                        {metric.label}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-5xl sm:text-6xl font-bold ${metric.accentColor}`}>
                          {metric.value}
                        </span>
                        {metric.unit && (
                          <span className={`text-2xl font-bold ${metric.accentColor}/70`}>
                            {metric.unit}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Verified Reviews Section */}
        <div className="bg-gradient-to-r from-golden-beige/10 to-blessed-yellow/10 border border-golden-beige/30 rounded-2xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left: Review Stats */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-golden-beige">
                Trusted by Our Community
              </h3>
              
              <div className="space-y-4">
                {/* Star Rating Display */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={24}
                          className="fill-divine-red text-divine-red"
                        />
                      ))}
                    </div>
                    <span className="text-3xl font-bold text-divine-red">4.8</span>
                    <span className="text-sacred-white/70">/5</span>
                  </div>
                  <p className="text-sacred-white/80 font-medium">
                    Based on 125+ Verified Reviews
                  </p>
                </div>

                {/* Review Highlights */}
                <div className="space-y-2 pt-4 border-t border-golden-beige/20">
                  <p className="flex items-center gap-2 text-sacred-white/80 text-sm">
                    <span className="w-2 h-2 bg-blessing-green rounded-full"></span>
                    "Authentic flavors, fresh ingredients"
                  </p>
                  <p className="flex items-center gap-2 text-sacred-white/80 text-sm">
                    <span className="w-2 h-2 bg-blessing-green rounded-full"></span>
                    "Best biryani in the city"
                  </p>
                  <p className="flex items-center gap-2 text-sacred-white/80 text-sm">
                    <span className="w-2 h-2 bg-blessing-green rounded-full"></span>
                    "Professional service & delivery"
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Review Platforms */}
            <div className="space-y-4">
              <h4 className="text-golden-beige font-semibold text-sm uppercase tracking-widest">
                Check Reviews On
              </h4>
              
              <div className="space-y-3">
                {reviewPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-4 py-4 rounded-lg bg-stone-brown/60 border border-golden-beige/20 hover:border-blessed-yellow/60 hover:bg-stone-brown/80 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blessed-yellow/20 border border-blessed-yellow/40 flex items-center justify-center font-bold text-blessed-yellow text-sm group-hover:scale-110 transition-transform duration-300">
                        {platform.logo}
                      </div>
                      <span className="text-sacred-white/80 font-medium group-hover:text-blessed-yellow transition-colors duration-300">
                        {platform.name}
                      </span>
                    </div>
                    <span className="text-blessed-yellow group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>
                ))}
              </div>

              <p className="text-sacred-white/60 text-xs pt-4 border-t border-golden-beige/20">
                All reviews are from verified customers who have ordered from us
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sacred-white/80 mb-6">
            Ready to experience authentic Karnataka cuisine?
          </p>
          <Link
            href="/order"
            className="inline-block luxury-gradient px-8 py-4 rounded-lg text-stone-brown font-semibold text-base hover:shadow-lg hover:shadow-blessed-yellow/40 transition-all duration-300 transform hover:scale-105"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  )
}

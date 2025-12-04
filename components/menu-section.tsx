"use client"

import Image from "next/image"

export function MenuSection() {
  type MenuItem = {
    name: string;
    price: string;
    isVeg: boolean;
    basePrice?: boolean;
    extra?: string;
    extraInfo?: string;
  }

  type MenuCategory = {
    name: string;
    icon: string;
    items: MenuItem[];
    specialty?: boolean;
    description?: string;
    priceNote?: string;
    dosaNote?: string;
  }

  const menuCategories: MenuCategory[] = [
    {
      name: "Royal Rice Baths",
      icon: "/icons/rice-bath.png",
      items: [
        { name: "Our special rice bath nati style donne biriyani rice", price: "₹50", isVeg: true },
        { name: "Tomato rice bath", price: "₹50", isVeg: true },
        { name: "Pudhina rice bath", price: "₹50", isVeg: true },
        { name: "Vangi rice bath", price: "₹50", isVeg: true },
        { name: "Alu rice bath", price: "₹50", isVeg: true },
        { name: "Ghee rice bath", price: "₹50", isVeg: true },
        { name: "Veg pulao rice bath", price: "₹50", isVeg: true },
        { name: "Soya rice bath", price: "₹80", isVeg: true },
        { name: "Mushroom biriyani", price: "₹100", isVeg: true },
      ],
      specialty: true,
      description: "Our signature rice preparations, crafted with finest ingredients",
      priceNote: "Base price ₹50 • Soya & Mushroom variants priced separately"
    },
    {
      name: "Divine Idlis",
      icon: "/icons/idli.png",
      items: [
        { name: "Idli", price: "₹40", isVeg: true },
        { name: "Rava Idli", price: "₹45", isVeg: true }
      ],
      description: "Soft, fluffy steamed delights served with authentic chutneys",
    },
    {
      name: "Artisan Dosas",
      icon: "/icons/dosa.png",
      dosaNote: "All Dosas are Authentic Mulbagal Style",
      items: [
        { name: "Plain Dosa", price: "₹40", isVeg: true, basePrice: true },
        { name: "Masala Dosa", price: "₹50", isVeg: true, basePrice: true },
        { name: "Onion Dosa", price: "₹50", isVeg: true, basePrice: true },
        { name: "Ragi Dosa", price: "₹50", isVeg: true, basePrice: true },
        { name: "Beetroot Dosa", price: "₹50", isVeg: true, basePrice: true },
        { name: "Ghee Rava Dosa", price: "₹60", isVeg: true, extra: "+₹20 extra", extraInfo: "Ghee add-on" },
        { name: "Butter Dosa", price: "₹60", isVeg: true, extra: "+₹20 extra", extraInfo: "Butter add-on" },
        { name: "Cheese Dosa", price: "₹70", isVeg: true, extra: "+₹20 extra", extraInfo: "Cheese add-on" },
        { name: "Ghee Paneer Dosa", price: "₹70", isVeg: true, extra: "+₹20 extra", extraInfo: "Ghee & Paneer add-ons" },
        { name: "Set Dosa", price: "₹45", isVeg: true, basePrice: true },
      ],
      description: "Crispy, golden-brown creations",
      priceNote: "Plain Dosa ₹40 • Masala & others ₹50 • Add-ons: +₹20 (Ghee, Cheese, Paneer)"
    },
    {
      name: "Royal Specials",
      icon: "/icons/special.png",
      items: [
        { name: "Bisibele Bath", price: "₹50", isVeg: true },
        { name: "Khara Bath", price: "₹50", isVeg: true },
        { name: "Kesari Bath", price: "₹50", isVeg: true },
        { name: "Halwa", price: "₹50", isVeg: true },
        { name: "Pongal", price: "₹80", isVeg: true },
        { name: "Uddin Vada", price: "₹30", isVeg: true },
        { name: "Masala Vada", price: "₹35", isVeg: true, extra: "+₹5", extraInfo: "Masala add-on" },
        { name: "Maddur Vada", price: "₹30", isVeg: true, extra: "+₹15 extra", extraInfo: "Special add-on" },
        { name: "Curd Vada", price: "₹40", isVeg: true },
        { name: "Mushroom Kabab", price: "₹200", isVeg: true },
      ],
      description: "Unique delicacies for the distinguished palate",
      priceNote: "Masala Vada: ₹30 base + ₹5 masala = ₹35 • Maddur Vada: ₹30 + ₹15 special = ₹45"
    },
  ]

  return (
    <section id="menu" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-stone-brown/98 sacred-overlay" />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 bg-gradient-to-br from-golden-beige/30 to-blessed-yellow/20 p-4 sm:p-6 rounded-2xl animate-float shadow-2xl border border-golden-beige/30">
            <div className="relative w-14 sm:w-16 h-14 sm:h-16">
              <div className="absolute inset-0 bg-gradient-to-br from-blessed-yellow/20 to-divine-red/20 rounded-full blur-lg animate-pulse"></div>
              <Image
                src="/icons/crown.png"
                alt="Royal Crown"
                fill
                className="object-contain brightness-150 contrast-125 drop-shadow-xl hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in bg-gradient-to-r from-golden-beige via-blessed-yellow to-divine-red bg-clip-text text-transparent">
            Our Royal Selection
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blessed-yellow opacity-90 max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in [animation-delay:200ms]">
            A curated collection of authentic delicacies, each prepared with royal heritage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 max-w-7xl mx-auto">
          {menuCategories.map((category, index) => (
            <div
              key={category.name}
              className="royal-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover-lift group animate-fade-in backdrop-blur-lg border border-golden-beige/40 bg-gradient-to-br from-stone-brown/90 to-black/80"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-6">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-blessed-yellow/40 to-divine-red/40 rounded-2xl blur-lg transform group-hover:scale-125 transition-transform duration-700"></div>
                      <div className="bg-gradient-to-br from-blessed-yellow/30 to-divine-red/30 p-3 sm:p-5 rounded-xl sm:rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative">
                        <div className="relative w-12 sm:w-16 h-12 sm:h-16">
                          <Image
                            src={category.icon}
                            alt={category.name}
                            fill
                            className="object-contain brightness-150 contrast-125 drop-shadow-2xl animate-float"
                            sizes="(max-width: 64px) 100vw, 64px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-blessed-yellow">
                        {category.name}
                      </h3>
                      <p className="text-sacred-white/90 text-xs sm:text-sm mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  {/* Specialty Badge */}
                  {category.specialty && (
                    <div className="bg-gradient-to-r from-blessed-yellow to-divine-red px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-stone-brown text-xs sm:text-sm font-semibold shadow-lg flex items-center gap-2 flex-shrink-0">
                      <span className="tracking-wide">⭐ SPECIALTY</span>
                    </div>
                  )}
                </div>

                {/* Price Note */}
                {category.priceNote && (
                  <div className="bg-gradient-to-br from-divine-red/15 to-blessed-yellow/15 border border-blessed-yellow/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                    <p className="text-blessed-yellow text-xs font-semibold uppercase tracking-wide mb-1">💰 Pricing</p>
                    <p className="text-sacred-white/85 text-xs sm:text-sm leading-relaxed">
                      {category.priceNote}
                    </p>
                  </div>
                )}

                {/* Enhanced dosa note */}
                {category.dosaNote && (
                  <div className="flex items-center gap-2 sm:gap-3 text-blessed-yellow text-xs sm:text-sm font-medium bg-gradient-to-br from-golden-beige/20 to-blessed-yellow/10 px-3 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-golden-beige/30">
                    <span>✓</span>
                    <p className="leading-snug">{category.dosaNote}</p>
                  </div>
                )}
              </div>

              {/* Menu Items */}
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 group/item ${
                      item.name === "Our special rice bath nati style dinne biriyani rice"
                        ? "bg-gradient-to-br from-blessed-yellow/20 to-divine-red/20 border-golden-beige shadow-lg"
                        : "bg-stone-brown/40 border-golden-beige/20 hover:border-blessed-yellow hover:bg-stone-brown/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 sm:gap-4">
                      <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                        {item.isVeg && (
                          <div className="w-3 h-3 sm:w-4 sm:h-4 border border-green-500 p-0.5 flex-shrink-0 mt-0.5">
                            <div className="w-full h-full bg-green-500 rounded-full"></div>
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <span className={`block truncate text-xs sm:text-sm ${
                            item.name === "Our special rice bath nati style dinne biriyani rice"
                              ? "text-blessed-yellow font-medium"
                              : "text-sacred-white/90"
                          }`}>
                            {item.name}
                          </span>
                          {item.extraInfo && (
                            <p className="text-blessed-yellow/70 text-xs mt-0.5 italic">
                              {item.extraInfo}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-blessed-yellow font-semibold text-xs sm:text-sm block whitespace-nowrap">
                          {item.price}
                        </span>
                        {item.extra && (
                          <span className="text-divine-red text-xs font-bold uppercase tracking-wide mt-0.5 block">
                            {item.extra}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Legend */}
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
          <div className="royal-card p-4 sm:p-6 rounded-lg sm:rounded-2xl border border-golden-beige/40 backdrop-blur-lg">
            <h3 className="text-lg sm:text-xl font-bold golden-text mb-4">📋 Pricing Guide</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-blessed-yellow font-bold mt-0.5">•</span>
                  <div>
                    <p className="text-sacred-white/90 font-semibold text-sm">Base Prices</p>
                    <p className="text-sacred-white/70 text-xs">Rice Baths (₹50), Plain Dosa (₹40)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-blessed-yellow font-bold mt-0.5">•</span>
                  <div>
                    <p className="text-sacred-white/90 font-semibold text-sm">Extra Charges</p>
                    <p className="text-sacred-white/70 text-xs">Ghee, Cheese, Paneer (+₹20)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-blessed-yellow font-bold mt-0.5">•</span>
                  <div>
                    <p className="text-sacred-white/90 font-semibold text-sm">Special Add-ons</p>
                    <p className="text-sacred-white/70 text-xs">Masala (+₹5), Maddur (+₹15)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-blessed-yellow font-bold mt-0.5">•</span>
                  <div>
                    <p className="text-sacred-white/90 font-semibold text-sm">Premium Items</p>
                    <p className="text-sacred-white/70 text-xs">Mushroom (₹100), Soya (₹80)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-20 right-0 w-[32rem] h-[32rem] bg-divine-red/15 blur-[150px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-20 left-0 w-[32rem] h-[32rem] bg-blessed-yellow/15 blur-[150px] rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-golden-beige/15 to-transparent opacity-50" />
    </section>
  )
}

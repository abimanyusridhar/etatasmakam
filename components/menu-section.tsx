"use client"

import Image from "next/image"

export function MenuSection() {
  const menuCategories = [
    {
      name: "Royal Rice Baths",
      icon: "/icons/rice-bath.png",
      items: [
        { name: "Our special rice bath nati style donne biriyani rice", price: "₹180", isVeg: true },
        { name: "Tomato rice bath", price: "₹120", isVeg: true },
        { name: "Pudhina rice bath", price: "₹130", isVeg: true },
        { name: "Vangi rice bath", price: "₹140", isVeg: true },
        { name: "Alu rice bath", price: "₹120", isVeg: true },
        { name: "Ghee rice bath", price: "₹150", isVeg: true },
        { name: "Veg pulao rice bath", price: "₹160", isVeg: true },
        { name: "Mushroom biriyani", price: "₹180", isVeg: true },
      ],
      specialty: true,
      description: "Our signature rice preparations, crafted with finest ingredients",
    },
    {
      name: "Divine Idlis",
      icon: "/icons/idli.png",
      items: [
        { name: "Idli", price: "₹40", isVeg: true },
        { name: "Rava Idli", price: "₹50", isVeg: true }
      ],
      description: "Soft, fluffy steamed delights served with authentic chutneys",
    },
    {
      name: "Artisan Dosas",
      icon: "/icons/dosa.png",
      dosaNote: "All Dosas are Authentic Mulbagil Style",
      items: [
        { name: "Ghee Plain", price: "₹70", isVeg: true },
        { name: "Ghee Masala", price: "₹90", isVeg: true },

        { name: "Butter", price: "₹90", isVeg: true },
        { name: "Cheese", price: "₹120", isVeg: true },
        { name: "Ghee Paneer", price: "₹130", isVeg: true },
        { name: "Ghee Rava", price: "₹110", isVeg: true },
        { name: "Onion dosa", price: "₹90", isVeg: true },
        { name: "Ragi dosa", price: "₹100", isVeg: true },
        { name: "Betroot dosa", price: "₹100", isVeg: true },
        { name: "Set dosa", price: "₹80", isVeg: true },
      ],
      description: "Crispy, golden-brown creations",
    },
    {
      name: "Royal Specials",
      icon: "/icons/special.png",
      items: [
        { name: "Bisibele bath", price: "₹150", isVeg: true },
        { name: "Khara bath", price: "₹140", isVeg: true },
        { name: "Kesari bath", price: "₹100", isVeg: true },
        { name: "Halwa", price: "₹120", isVeg: true },
        { name: "Pongal", price: "₹80", isVeg: true },
        { name: "Curd vada", price: "₹80", isVeg: true },
        { name: "Masala vada", price: "₹90", isVeg: true },
        { name: "Maddur vada", price: "₹100", isVeg: true },
        { name: "Mushroom kabab", price: "₹200", isVeg: true },
      ],
      description: "Unique delicacies for the distinguished palate",
    },
  ]

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-stone-brown/98 sacred-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section with enhanced crown icon */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-gradient-to-br from-golden-beige/30 to-blessed-yellow/20 p-6 rounded-2xl animate-float shadow-2xl border border-golden-beige/30">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-gradient-to-br from-blessed-yellow/20 to-divine-red/20 rounded-full blur-lg animate-pulse"></div>
              <Image
                src="/icons/crown.png"
                alt="Royal Crown"
                fill
                className="object-contain brightness-150 contrast-125 drop-shadow-xl hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-golden-beige via-blessed-yellow to-divine-red bg-clip-text text-transparent">
            Our Royal Selection
          </h2>
          <p className="text-xl text-blessed-yellow opacity-90 max-w-3xl mx-auto mb-12 animate-fade-in [animation-delay:200ms]">
            A curated collection of authentic delicacies, each prepared with royal heritage and tradition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {menuCategories.map((category, index) => (
            <div
              key={category.name}
              className="royal-card p-6 md:p-8 rounded-2xl hover-lift group animate-fade-in backdrop-blur-lg border border-golden-beige/40 bg-gradient-to-br from-stone-brown/90 to-black/80"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 space-y-4">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-6">
                    {/* Enhanced icon container */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blessed-yellow/40 to-divine-red/40 rounded-2xl blur-lg transform group-hover:scale-125 transition-transform duration-700"></div>
                      <div className="bg-gradient-to-br from-blessed-yellow/30 to-divine-red/30 p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative">
                        <div className="relative w-16 h-16 transform group-hover:-rotate-6 transition-transform duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-blessed-yellow/20 to-divine-red/20 rounded-full animate-pulse-slow"></div>
                          <Image
                            src={category.icon}
                            alt={category.name}
                            fill
                            className="object-contain brightness-150 contrast-125 drop-shadow-2xl filter hover:brightness-175 transition-all duration-300 animate-float"
                            sizes="(max-width: 64px) 100vw, 64px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-blessed-yellow/10 to-divine-red/10 rounded-full animate-ripple"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blessed-yellow">
                        {category.name}
                      </h3>
                      <p className="text-sacred-white/90 text-sm mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  {/* Enhanced specialty badge */}
                  {category.specialty && (
                    <div className="bg-gradient-to-r from-blessed-yellow to-divine-red px-5 py-2.5 rounded-full text-stone-brown text-sm font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 ml-auto group-hover:scale-105">
                      <div className="relative w-7 h-7">
                        <div className="absolute inset-0 bg-stone-brown/20 rounded-full animate-pulse"></div>
                        <Image
                          src="/icons/star.png"
                          alt="Specialty"
                          fill
                          className="object-contain brightness-125 contrast-125 drop-shadow-lg animate-spin-slow"
                          sizes="(max-width: 28px) 100vw, 28px"
                        />
                      </div>
                      <span className="tracking-wide">SPECIALTY</span>
                    </div>
                  )}
                </div>

                {/* Enhanced dosa note */}
                {category.dosaNote && (
                  <div className="flex items-center gap-3 text-blessed-yellow text-sm font-medium bg-gradient-to-br from-golden-beige/20 to-blessed-yellow/10 px-5 py-4 rounded-xl border border-golden-beige/30 hover:border-blessed-yellow/50 transition-all duration-300 group-hover:scale-102">
                    <div className="relative w-10 h-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-blessed-yellow/20 to-divine-red/20 rounded-full blur-md"></div>
                      <Image
                        src="/icons/authentic.png"
                        alt="Authentic"
                        fill
                        className="object-contain brightness-150 contrast-125 drop-shadow-xl animate-float"
                        sizes="(max-width: 40px) 100vw, 40px"
                      />
                    </div>
                    <p className="leading-snug">{category.dosaNote}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-3">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative p-4 rounded-xl border transition-all duration-300 group/item ${
                      item.name === "Our special rice bath nati style dinne biriyani rice"
                        ? "bg-gradient-to-br from-blessed-yellow/20 to-divine-red/20 border-golden-beige shadow-lg"
                        : "bg-stone-brown/40 border-golden-beige/20 hover:border-blessed-yellow hover:bg-stone-brown/60 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        {item.isVeg && (
                          <div className="w-4 h-4 border border-green-500 p-0.5 flex-shrink-0">
                            <div className="w-full h-full bg-green-500 rounded-full"></div>
                          </div>
                        )}
                        <span className={`${
                          item.name === "Our special rice bath nati style dinne biriyani rice"
                            ? "text-blessed-yellow font-medium"
                            : "text-sacred-white/90 group-hover/item:text-blessed-yellow"
                          } transition-colors text-sm md:text-base`}
                        >
                          {item.name}
                        </span>
                      </div>
                      <span className="text-blessed-yellow font-medium text-sm md:text-base whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.name === "Our special rice bath nati style dinne biriyani rice" && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-divine-red to-blessed-yellow rounded-full animate-ping" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-20 right-0 w-[32rem] h-[32rem] bg-divine-red/15 blur-[150px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-20 left-0 w-[32rem] h-[32rem] bg-blessed-yellow/15 blur-[150px] rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-golden-beige/15 to-transparent opacity-50" />
    </section>
  )
}

"use client"

import Image from "next/image"

export function MenuSection() {
  const menuCategories = [
    {
      name: "Royal Rice Baths",
      icon: "/icons/rice-bath.png",
      items: [
        "Our special rice bath nati style dinne biriyani rice",
        "Tomato rice bath",
        "Pudhina rice bath",
        "Vangi rice bath",
        "Alu rice bath",
        "Ghee rice bath",
        "Veg pulao rice bath",
        "Mushroom biriyani",
      ],
      specialty: true,
      description: "Our signature rice preparations, crafted with finest ingredients",
    },
    {
      name: "Divine Idlis",
      icon: "/icons/idli.png",
      items: ["Idli", "Rava Idli"],
      description: "Soft, fluffy steamed delights",
    },
    {
      name: "Artisan Dosas",
      icon: "/icons/dosa.png",
      dosaNote: "All Dosas are Authentic Mulbagil Style",
      items: [
        "Plain",
        "Masala",
        "Ghee plain",
        "Ghee masala",
        "Butter",
        "Cheese",
        "Paneer",
        "Rava",
        "Onion dosa",
        "Ragi dosa",
        "Betroot dosa",
        "Set dosa",
      ],
      description: "Crispy, golden-brown creations",
    },
    {
      name: "Royal Specials",
      icon: "/icons/special.png",
      items: [
        "Bisibele bath",
        "Khara bath",
        "Kesari bath",
        "Halwa",
        "Curd vada",
        "Masala vada",
        "Maddur vada",
        "Mushroom kabab",
      ],
      description: "Unique delicacies for the distinguished palate",
    },
  ]

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-stone-brown/98 sacred-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-gradient-to-br from-golden-beige/30 to-blessed-yellow/20 p-4 rounded-xl animate-bounce shadow-xl">
            <Image
              src="/icons/crown.png"
              alt="Royal Crown"
              width={40}
              height={40}
              className="object-contain brightness-150 contrast-125"
            />
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
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blessed-yellow/20 to-divine-red/20 p-4 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                      <div className="relative w-12 h-12">
                        <Image
                          src={category.icon}
                          alt={category.name}
                          fill
                          className="object-contain brightness-150 contrast-125 drop-shadow-lg"
                          sizes="(max-width: 48px) 100vw, 48px"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-golden-beige to-blessed-yellow bg-clip-text text-transparent group-hover:from-blessed-yellow group-hover:to-divine-red transition-all duration-300">
                        {category.name}
                      </h3>
                      <p className="text-sacred-white/90 text-sm mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  {category.specialty && (
                    <div className="bg-gradient-to-r from-blessed-yellow to-divine-red px-4 py-2 rounded-full text-stone-brown text-sm font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 ml-auto">
                      <div className="relative w-6 h-6">
                        <Image
                          src="/icons/star.png"
                          alt="Specialty"
                          fill
                          className="object-contain brightness-125 contrast-125"
                          sizes="(max-width: 24px) 100vw, 24px"
                        />
                      </div>
                      <span>SPECIALTY</span>
                    </div>
                  )}
                </div>

                {category.dosaNote && (
                  <div className="flex items-center gap-2 text-blessed-yellow text-sm font-medium bg-gradient-to-br from-golden-beige/20 to-blessed-yellow/10 px-4 py-3 rounded-lg border border-golden-beige/30">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/icons/authentic.png"
                        alt="Authentic"
                        fill
                        className="object-contain brightness-125 contrast-125"
                        sizes="(max-width: 32px) 100vw, 32px"
                      />
                    </div>
                    <p>{category.dosaNote}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative p-3 md:p-4 rounded-xl border transition-all duration-300 group/item ${
                      item === "Our special rice bath nati style dinne biriyani rice"
                        ? "bg-gradient-to-br from-blessed-yellow/20 to-divine-red/20 border-golden-beige shadow-lg"
                        : "bg-stone-brown/40 border-golden-beige/20 hover:border-blessed-yellow hover:bg-stone-brown/60 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {item === "Our special rice bath nati style dinne biriyani rice" ? (
                        <>
                          <div className="relative w-4 h-4">
                            <Image
                              src="/icons/star.png"
                              alt="Special Item"
                              fill
                              className="object-contain brightness-150 contrast-125 drop-shadow-lg"
                              sizes="(max-width: 16px) 100vw, 16px"
                            />
                          </div>
                          <span className="text-blessed-yellow font-medium text-sm md:text-base">{item}</span>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-divine-red to-blessed-yellow rounded-full animate-ping" />
                        </>
                      ) : (
                        <span className="text-sacred-white/90 group-hover/item:text-blessed-yellow transition-colors text-sm md:text-base">
                          {item}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-divine-red/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blessed-yellow/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-golden-beige/10 to-transparent opacity-40" />
    </section>
  )
}

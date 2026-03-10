"use client"

export function VastraServices() {
  const handleNavigation = (target: string) => {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const services = [
    {
      title: "Doorstep Pickup",
      description: "Schedule any time slot. Agent arrives on time. Clothes counted and verified. Receipt via WhatsApp.",
      icon: "🚚",
      features: [
        "Flexible Slots",
        "On-time Agent",
        "Verified Counting",
        "Digital Receipt"
      ],
      cta: "Book Pickup →",
      target: "#order"
    },
    {
      title: "Wash and Iron",
      description: "Machine and hand wash options. Detergent and softener included. Steam iron and fold. Garment-safe.",
      icon: "👕",
      features: [
        "Premium Wash",
        "Fabric Softener",
        "Steam Ironing",
        "Garment Safe"
      ],
      cta: "See Pricing →",
      target: "#pricing"
    },
    {
      title: "Dry Cleaning",
      description: "Suits, sarees, sherwanis handled delicately. Expert stain treatment included. Premium packaging.",
      icon: "👔",
      features: [
        "Delicate Care",
        "Stain Treatment",
        "Suit & Saree",
        "Premium Packing"
      ],
      cta: "See Pricing →",
      target: "#pricing"
    },
    {
      title: "Home Delivery",
      description: "Delivered fresh and folded. Follow up your order details via WhatsApp. On-time guarantee. No extra delivery charge.",
      icon: "🎁",
      features: [
        "Freshly Folded",
        "WhatsApp Follow-ups",
        "On-time Guarantee",
        "Free Delivery"
      ],
      cta: "Order Now →",
      target: "#order"
    }
  ]

  return (
    <section id="services" className="py-16 sm:py-24 relative overflow-hidden bg-stone-brown/95">
      <div className="absolute inset-0 bg-stone-brown-mid/50 sacred-overlay" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-overline tracking-[0.2em] mb-4 block">✦ What We Offer</span>
          <h2 className="text-4xl sm:text-5xl font-bold golden-text mb-4 sm:mb-6 animate-fade-in">
            Our Services
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-golden-beige to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-blessed-yellow opacity-90 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms] px-2">
            Everything your laundry needs — pickup, wash, iron, dry clean and delivery, all handled for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card hover:bg-stone-brown-raised/60 hover:border-golden-beige/50 transition-all duration-300 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover-lift group animate-fade-in backdrop-blur-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <div className="bg-golden-beige/5 p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 w-fit text-4xl shadow-[inset_0_0_20px_rgba(200,151,58,0.1)] border border-golden-beige/10">
                    {service.icon}
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold golden-text group-hover:text-blessed-yellow transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sacred-white/80 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-2 mt-4 text-sacred-white/70">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm bg-stone-brown-warm/30 px-3 py-2 rounded-lg group-hover:bg-stone-brown-warm/60 transition-all duration-300 border border-transparent group-hover:border-golden-beige/10"
                      >
                        <span className="text-golden-beige text-[10px]">✦</span>
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleNavigation(service.target)}
                    className="mt-6 flex items-center gap-2 text-golden-beige font-semibold text-sm hover:text-blessed-yellow transition-colors group-hover:translate-x-1 duration-300"
                  >
                    {service.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

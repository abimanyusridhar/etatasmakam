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
              className="relative group h-full rounded-[1.5rem] animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-golden-beige/20 via-transparent to-transparent rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-sm"></div>
              <div className="relative h-full bg-stone-brown-mid/80 backdrop-blur-2xl border border-golden-beige/15 group-hover:border-golden-beige/40 transition-all duration-500 p-6 sm:p-8 rounded-[1.5rem] group-hover:-translate-y-2 shadow-2xl overflow-hidden flex flex-col sm:flex-row gap-6">
                
                {/* Background decorative glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-golden-beige/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-golden-beige/10 transition-colors duration-700"></div>

                <div className="flex-shrink-0 w-full sm:w-auto relative z-10">
                  <div className="relative group/icon inline-block">
                    <div className="absolute inset-0 bg-gradient-to-tr from-golden-beige to-blessed-yellow blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
                    <div className="relative bg-stone-brown-raised/90 backdrop-blur-sm border-t border-l border-golden-beige/30 shadow-[0_8px_16px_rgba(0,0,0,0.4)] group-hover/icon:shadow-[0_15px_30px_rgba(200,151,58,0.2)] p-4 sm:p-5 rounded-2xl group-hover/icon:scale-110 group-hover/icon:-rotate-6 transition-all duration-500 w-fit text-4xl flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 flex-1 relative z-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold golden-text group-hover:text-blessed-yellow transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sacred-white/70 text-sm sm:text-base leading-relaxed mt-2 group-hover:text-sacred-white/90 transition-colors duration-300">
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

                  </div>

                  <button
                    onClick={() => handleNavigation(service.target)}
                    className="mt-6 font-bold text-sm text-stone-brown bg-gradient-to-r from-golden-beige to-blessed-yellow px-6 py-2.5 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(200,151,58,0.4)] transition-all duration-300 transform group-hover:-translate-y-1 self-start w-fit flex items-center gap-2"
                  >
                    <span>{service.cta.replace('→', '').trim()}</span>
                    <span className="text-stone-brown group-hover:translate-x-1 transition-transform duration-300">→</span>
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

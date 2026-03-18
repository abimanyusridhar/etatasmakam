"use client"

export function VastraPricing() {
  const plans = [
    {
      title: "Ironing",
      desc: "Crisp and wrinkle-free",
      emoji: "👔",
      popular: true,
      items: [
        { name: "Shirt / T-Shirt", price: "₹15" },
        { name: "Pant / Jeans", price: "₹15" },
        { name: "Saree", price: "₹70" },
      ],
      note: "Professional ironing for daily wear"
    },
    {
      title: "Wash + Iron",
      desc: "Washed, ironed and folded",
      emoji: "✨",
      popular: false,
      items: [
        { name: "Shirt / T-Shirt", price: "₹66" },
        { name: "Pant / Jeans", price: "₹66" },
      ],
      note: "Best value — fully ready to wear"
    },
    {
      title: "Dry Clean",
      desc: "Premium care for delicates",
      emoji: "🌟",
      popular: false,
      items: [
        { name: "All Items", price: "Depends on stains" }
      ],
      note: "Final cost confirmed before processing"
    }
  ]

  return (
    <section id="pricing" className="py-16 sm:py-24 relative bg-stone-brown-mid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-overline tracking-[0.2em] mb-4 block">✦ Transparent Rates</span>
          <h2 className="text-4xl sm:text-5xl font-bold golden-text mb-4 sm:mb-6 heading-cinzel">
            Our Pricing
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-golden-beige to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-sacred-white/80 max-w-2xl mx-auto animate-fade-in px-2">
            No hidden charges. You get a full cost breakdown on WhatsApp before we start processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative group h-full ${plan.popular ? 'z-10' : 'z-0'}`}>
              {plan.popular && (
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blessed-yellow/40 via-golden-beige/20 to-transparent rounded-[1.1rem] blur-sm opacity-50 group-hover:opacity-100 group-hover:blur-md transition-all duration-700 pointer-events-none"></div>
              )}
              <div
                className={`relative w-full h-full p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col backdrop-blur-xl border border-golden-beige/20 shadow-2xl overflow-hidden ${
                  plan.popular ? 'bg-gradient-to-b from-stone-brown-raised to-stone-brown-mid border-golden-beige/50 shadow-[0_20px_40px_rgba(200,151,58,0.2)]' : 'bg-stone-brown-mid/60'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blessed-yellow/10 blur-[40px] pointer-events-none"></div>
                )}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blessed-yellow to-golden-beige text-stone-brown font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Popular Choice
                </div>
              )}

              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl">{plan.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-blessed-yellow">{plan.title}</h3>
                  <p className="text-sm text-sacred-white/60">{plan.desc}</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-sm border-b border-sacred-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-sacred-white/80">{item.name}</span>
                    <span className="font-semibold text-golden-beige">{item.price}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 mt-auto border-t border-sacred-white/10 text-center">
                <p className="text-xs italic text-sacred-white/40">{plan.note}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

export function VastraPricing() {
  const plans = [
    {
      title: "Regular Wash",
      desc: "Clean and fresh",
      emoji: "👕",
      popular: false,
      items: [
        { name: "T-Shirt / Shirt", price: "₹30" },
        { name: "Pant / Jeans", price: "₹40" },
        { name: "Saree", price: "₹60" },
        { name: "Kurta / Kurti", price: "₹35" },
        { name: "Bedsheet (single)", price: "₹50" },
        { name: "Towel", price: "₹25" }
      ],
      note: "Wash only. Drying included."
    },
    {
      title: "Wash + Iron",
      desc: "Washed, ironed and folded",
      emoji: "✨",
      popular: true,
      items: [
        { name: "T-Shirt / Shirt", price: "₹50" },
        { name: "Pant / Jeans", price: "₹60" },
        { name: "Saree", price: "₹90" },
        { name: "Kurta / Kurti", price: "₹55" },
        { name: "Bedsheet (single)", price: "₹70" },
        { name: "Towel", price: "₹40" }
      ],
      note: "Best value — fully ready to wear"
    },
    {
      title: "Dry Clean",
      desc: "Premium care for delicates",
      emoji: "👔",
      popular: false,
      items: [
        { name: "Suit / Blazer", price: "₹200" },
        { name: "Sherwani", price: "₹300" },
        { name: "Lehenga", price: "₹400" },
        { name: "Curtains (pair)", price: "₹250" },
        { name: "Woolen items", price: "₹150" },
        { name: "Silk Saree", price: "₹150" }
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
            <div
              key={idx}
              className={`glass-card p-8 rounded-2xl relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(200,151,58,0.15)] flex flex-col ${
                plan.popular ? 'border-golden-beige bg-gradient-to-b from-stone-brown-raised/90 to-stone-brown-mid/90' : 'border-golden-beige/20'
              }`}
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}

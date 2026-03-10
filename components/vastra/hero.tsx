"use client"

export function VastraHero() {
  const handleScroll = (target: string) => {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 bg-stone overflow-hidden">
      {/* Overlay with refined gradients */}
      <div className="absolute inset-0 hero-strong-overlay sacred-overlay" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Decorative gradient elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-divine-red/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blessed-yellow/5 blur-[120px] rounded-full animate-pulse" />

      {/* Content */}
      <div className="relative container mx-auto px-3 sm:px-4 py-16 sm:py-20 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 lg:gap-8">
        <div className="flex-1 w-full max-w-4xl lg:text-left text-center z-10 animate-slide-up">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="inline-block text-blessed-yellow text-xs sm:text-sm font-bold bg-golden-beige/15 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-widest border border-golden-beige/30">
                 ✦ Premium Laundry Service
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 golden-text-animated leading-tight">
                Fresh Clothes,<br/><em className="text-golden-beige not-italic">At Your Door.</em>
              </h1>
              <div className="h-1 sm:h-1.5 w-16 sm:w-20 bg-gradient-to-r from-divine-red via-golden-beige to-blessed-yellow rounded-full lg:mx-0 mx-auto" />
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-sacred-white/85 opacity-90 max-w-2xl leading-relaxed animate-fade-in [animation-delay:400ms] lg:mx-0 mx-auto">
              Vasthra provides you the pickup and drop services for laundry. No more worries of losing clothes and no more frustration for laundry, Vasthra gets you encrypted from start to end. Follow up your order details via WhatsApp.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in [animation-delay:500ms]">
              <span className="badge badge-gold">🚚 Same Day Pickup</span>
              <span className="badge badge-subtle">💬 WhatsApp Updates</span>
              <span className="badge badge-subtle">📍 Location Based</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4 sm:pt-6 animate-fade-in [animation-delay:600ms]">
              <button
                onClick={() => handleScroll("#order")}
                className="luxury-gradient text-stone-brown font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover-lift sacred-glow text-sm sm:text-lg w-full sm:w-auto transition-all duration-300 shadow-lg"
              >
                 📦 Book a Pickup
              </button>
              <a
                href="tel:7259322466"
                className="btn-outline font-bold text-sm sm:text-lg w-full sm:w-auto transition-all duration-300 text-center"
              >
                📞 Call Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Visual Stats Section */}
        <div className="flex-1 w-full max-w-md relative z-10 animate-fade-in [animation-delay:800ms] lg:flex justify-center hidden">
          <div className="royal-card p-8 rounded-3xl backdrop-blur-lg flex flex-col items-center gap-6 w-full border-golden-beige/40">
            <div className="w-48 h-48 border decoration-slice border-golden-beige/30 rounded-full flex items-center justify-center bg-gradient-radial from-golden-beige/10 to-transparent relative shadow-[0_0_40px_rgba(200,151,58,0.15)] overflow-hidden">
               <div className="absolute inset-[-10px] border border-golden-beige/20 rounded-full animate-spin-slow"></div>
               <img 
                 src="/vasthra-bg.jpeg" 
                 alt="Vasthra Logo Symbol"
                 className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(200,151,58,0.5)] z-10"
               />
            </div>

            <div className="grid grid-cols-3 gap-2 w-full mt-4 bg-stone-brown-raised/50 border border-golden-beige/20 rounded-2xl overflow-hidden p-2">
              <div className="text-center border-r border-golden-beige/20 px-2">
                <div className="text-xl font-bold golden-text heading-cinzel">Fast</div>
                <div className="text-xs text-sacred-white/60 mt-1 uppercase tracking-wider">Pickup</div>
              </div>
              <div className="text-center border-r border-golden-beige/20 px-2">
                <div className="text-xl font-bold golden-text heading-cinzel">₹30+</div>
                <div className="text-xs text-sacred-white/60 mt-1 uppercase tracking-wider">Starting</div>
              </div>
              <div className="text-center px-2">
                <div className="text-xl font-bold golden-text heading-cinzel">24/7</div>
                <div className="text-xs text-sacred-white/60 mt-1 uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

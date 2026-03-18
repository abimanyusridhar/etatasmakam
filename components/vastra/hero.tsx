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
                href="https://wa.me/917204758766?text=Hi%20Vasthra,%20I%20would%20like%20to%20schedule%20a%20pickup!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-blessing-green/80 text-blessing-green font-bold text-sm sm:text-lg px-6 py-3 rounded-lg hover:bg-blessing-green/10 transition-all duration-300 w-full sm:w-auto hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> 
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Visual Stats Section */}
        <div className="flex-1 w-full max-w-md relative z-10 animate-fade-in [animation-delay:800ms] lg:flex justify-center hidden">
          <div className="royal-card p-1 sm:p-2 rounded-[2.5rem] bg-gradient-to-b from-golden-beige/20 to-transparent backdrop-blur-xl flex flex-col items-center w-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-t-golden-beige/40">
            <div className="bg-stone-brown-mid/90 rounded-[2.2rem] w-full p-8 flex flex-col items-center gap-8 shadow-inner">
              <div className="relative w-48 h-48 flex items-center justify-center group">
                 <div className="absolute inset-0 bg-gradient-radial from-golden-beige/20 to-transparent blur-[40px] opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                 <img 
                   src="/vasthra-bg.jpeg" 
                   alt="Vasthra Logo Symbol"
                   className="w-40 h-40 object-contain drop-shadow-[0_0_20px_rgba(200,151,58,0.4)] z-10 hover:scale-110 transition-transform duration-700 rounded-[2rem]"
                 />
              </div>

              <div className="grid grid-cols-3 gap-2 w-full mt-2 bg-stone-brown-raised/60 border border-golden-beige/30 rounded-2xl overflow-hidden p-3 shadow-lg">
                <div className="text-center border-r border-golden-beige/20 px-2 group hover:bg-golden-beige/5 transition-colors duration-300 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold golden-text heading-cinzel">Fast</div>
                  <div className="text-[10px] sm:text-xs text-sacred-white/70 mt-1 uppercase tracking-wider font-semibold">Pickup</div>
                </div>
                <div className="text-center border-r border-golden-beige/20 px-2 group hover:bg-golden-beige/5 transition-colors duration-300 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold golden-text heading-cinzel">₹15+</div>
                  <div className="text-[10px] sm:text-xs text-sacred-white/70 mt-1 uppercase tracking-wider font-semibold">Starting</div>
                </div>
                <div className="text-center px-2 group hover:bg-golden-beige/5 transition-colors duration-300 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold golden-text heading-cinzel">24/7</div>
                  <div className="text-[10px] sm:text-xs text-sacred-white/70 mt-1 uppercase tracking-wider font-semibold">WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

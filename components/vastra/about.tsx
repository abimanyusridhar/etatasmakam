"use client"

export function VastraAbout() {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden hidden lg:block bg-stone-brown">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 lg:max-w-xl animate-fade-in">
            <span className="text-overline tracking-[0.2em] mb-4 block">✦ Our Story</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-sacred-white heading-cinzel leading-tight">
              A Cleaner Solution,<br/><span className="golden-text">Born from Need.</span>
            </h2>
            
            <p className="text-blessed-yellow/90 font-semibold mb-6 text-lg">
              From a simple idea to a city-wide laundry platform.
            </p>
            
            <div className="space-y-4 text-sacred-white/80 mb-8 leading-relaxed">
              <p>
                We started Vasthra to bridge the gap between people who need reliable laundry services and the trusted local laundry shops in Bengaluru. 
              </p>
              <p>
                Vasthra acts as your dedicated interface providing pickup and drop services for laundry. We connect you to the best laundry experts in your neighborhood. No more worries of losing clothes and no more frustration for laundry—giving you an encrypted, transparent experience from start to end with easy follow-ups via WhatsApp.
              </p>
            </div>
            
            <ul className="space-y-3">
              {[
                "Pickup and delivery from your doorstep",
                "Transparent per-cloth pricing, no surprises",
                "WhatsApp updates at every stage",
                "Trusted local laundry partner shops"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-sacred-white/90">
                  <span className="text-golden-beige mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full lg:max-w-md animate-fade-in [animation-delay:200ms]">
            <div className="royal-card p-8 sm:p-10 rounded-3xl border border-golden-beige/30 shadow-[0_10px_40px_rgba(200,151,58,0.1)]">
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { n: "Fast", l: "Turnaround" },
                  { n: "Local", l: "Partners" },
                  { n: "100%", l: "Transparent" },
                  { n: "24/7", l: "WhatsApp" }
                ].map((stat, i) => (
                  <div key={i} className="bg-stone-brown-raised/40 border border-golden-beige/15 rounded-2xl p-4 text-center hover:border-golden-beige/30 transition-colors">
                    <div className="text-2xl sm:text-3xl font-bold golden-text heading-cinzel mb-1">{stat.n}</div>
                    <div className="text-xs uppercase tracking-wider text-sacred-white/60">{stat.l}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-br from-stone-brown-raised to-stone-brown p-6 rounded-2xl border border-golden-beige/20 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-golden-beige/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-4xl mb-3 relative z-10 transition-transform group-hover:scale-110">🎉</div>
                <div className="text-blessed-yellow font-bold text-lg mb-1 relative z-10">Bengaluru's Laundry Partner</div>
                <div className="text-sacred-white/60 text-sm relative z-10">Serving your neighbourhood</div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

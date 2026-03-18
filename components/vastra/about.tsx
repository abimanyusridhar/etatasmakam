"use client"

export function VastraAbout() {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-stone-brown/90 backdrop-blur-sm">
      <div className="absolute inset-0 bg-stone-brown-mid/30 sacred-overlay pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
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
          
          <div className="flex-1 w-full lg:max-w-[500px] animate-fade-in [animation-delay:200ms] relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-br from-blessed-yellow/30 via-golden-beige/10 to-transparent rounded-[2.1rem] blur opacity-30 group-hover:opacity-60 transition duration-700 pointer-events-none"></div>
            <div className="relative royal-card p-6 sm:p-10 rounded-[2rem] border border-golden-beige/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl bg-stone-brown-mid/80 group-hover:border-golden-beige/40 transition-all duration-500 hover:-translate-y-2">
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { n: "Fast", l: "Turnaround" },
                  { n: "Local", l: "Partners" },
                  { n: "100%", l: "Transparent" },
                  { n: "24/7", l: "WhatsApp" }
                ].map((stat, i) => (
                  <div key={i} className="bg-stone-brown-raised/50 border border-golden-beige/10 rounded-2xl p-5 text-center hover:border-golden-beige/50 hover:bg-stone-brown-highlight/40 hover:shadow-[0_0_20px_rgba(200,151,58,0.15)] transition-all duration-300 group/stat cursor-default">
                    <div className="text-2xl sm:text-3xl font-bold golden-text heading-cinzel mb-1 group-hover/stat:text-blessed-yellow transition-colors">{stat.n}</div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-sacred-white/70 font-semibold">{stat.l}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-stone-brown-raised/80 to-stone-brown-mid/90 p-6 rounded-2xl border border-golden-beige/20 text-center relative overflow-hidden group/badge hover:border-golden-beige/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-radial from-golden-beige/10 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="text-3xl sm:text-4xl mb-3 relative z-10 transition-transform duration-500 group-hover/badge:scale-125 group-hover/badge:-rotate-12">🌟</div>
                <div className="text-blessed-yellow font-bold sm:text-lg mb-1 relative z-10 drop-shadow-md">Bengaluru's Laundry Partner</div>
                <div className="text-sacred-white/70 text-xs sm:text-sm relative z-10 font-medium">Serving your neighbourhood</div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

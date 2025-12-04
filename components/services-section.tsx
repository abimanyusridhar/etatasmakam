"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function ServicesSection() {
  const router = useRouter();

  const handleNavigation = (cta: string) => {
    switch (cta) {
      case "View Menu":
        router.push("/menu");
        break;
      case "Book Catering":
      case "Pickup Now":
        // Smooth scroll to footer for contact information
        document.getElementById('footer')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        break;
      case "Order 24/7":
        router.push("/#order");
        break;
      default:
        break;
    }
  };

  const services = [
    {
      title: "Offline Cart Pickup",
      description: "Quick and convenient offline cart pickups — grab your freshly prepared meals while they stay hot and delicious.",
      icon: "/icons/cart.png",
      features: [
        "Easy Pickup",
        "Fresh Preparation",
        "Secure Packaging",
        "No-fuss Collection"
      ],
      cta: "Pickup Now"
    },
    {
      title: "24/7 Online Delivery",
      description: "Order anytime — we deliver round-the-clock so you can satisfy midnight veg cravings with reliable, fast delivery.",
      icon: "/icons/delivery.png",
      features: [
        "Round-the-clock Service",
        "Live Tracking",
        "Hot & Fresh Delivery",
        "Secure Payment"
      ],
      cta: "Order 24/7"
    },
    {
      title: "Private Party Catering",
      description: "Tailored catering for private parties and events — premium presentation and consistent taste for gatherings of any size.",
      icon: "/icons/catering.png",
      features: [
        "Custom Menus",
        "Professional Staff",
        "On-time Setup",
        "Event Support"
      ],
      cta: "Book Catering"
    },
    {
      title: "Pure Veg • Premium & Affordable",
      description: "100% pure vegetarian menu crafted with premium ingredients — top-notch quality at affordable prices.",
      icon: "/icons/veg.png",
      features: [
        "100% Pure Veg",
        "Premium Ingredients",
        "Affordable Pricing",
        "Consistent Quality"
      ],
      cta: "View Menu"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-stone-brown/95 sacred-overlay" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold golden-text mb-4 sm:mb-6 animate-fade-in">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blessed-yellow opacity-90 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms] px-2">
            Experience ETAT ASMAKAM's authentic Karnataka cuisine through convenient offline cart pickups, 24/7 online delivery, and tailored private party catering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="royal-card p-4 sm:p-8 rounded-xl sm:rounded-2xl hover-lift group animate-fade-in backdrop-blur-lg border border-golden-beige/30"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <div className="bg-golden-beige/10 p-3 sm:p-4 rounded-lg sm:rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 w-fit">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={44}
                      height={44}
                      className="object-contain sm:w-12 sm:h-12"
                    />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 flex-1">
                  <h3 className="text-lg sm:text-2xl font-bold golden-text group-hover:text-blessed-yellow transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sacred-white/90 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-3 sm:mt-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 text-blessed-yellow text-xs sm:text-sm bg-golden-beige/5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg group-hover:bg-golden-beige/10 transition-all duration-300"
                      >
                        <span className="text-xs">✦</span>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleNavigation(service.cta)}
                    className="mt-4 sm:mt-6 w-full luxury-gradient text-stone-brown font-semibold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base hover:opacity-90 transition-opacity duration-300 group-hover:sacred-glow"
                  >
                    {service.cta}
                  </button>
                </div>
              </div>

              {/* Decorative gradient line */}
              <div className="mt-6 h-1 w-full bg-gradient-to-r from-divine-red via-golden-beige to-blessed-yellow opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="royal-card inline-block px-4 sm:px-8 py-4 sm:py-6 rounded-lg sm:rounded-2xl backdrop-blur-lg border border-golden-beige/30">
            <p className="text-base sm:text-xl text-sacred-white mb-3 sm:mb-4">Ready to order?</p>
            <a
              href="tel:7259322466"
              className="luxury-gradient px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-stone-brown font-semibold hover-lift sacred-glow inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>📞</span> Call / Order (24x7)
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-divine-red/5 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blessed-yellow/5 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-golden-beige/5 to-transparent opacity-30" />
    </section>
  );
}

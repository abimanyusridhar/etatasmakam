import Link from "next/link"
import Image from "next/image"

export default function Order() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-stone-brown/95 sacred-overlay" />

      <div className="relative z-10 royal-card p-12 rounded-2xl text-center max-w-2xl mx-4">
        <div className="mb-6 inline-block animate-bounce">
          <Image
            src="/chef-hat.png"
            alt="Chef Hat"
            width={64}
            height={64}
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold golden-text mb-6">
          Online Ordering Coming Soon!
        </h1>
        <p className="text-xl text-blessed-yellow opacity-90 mb-8">
          We&apos;re cooking up something special! Our online ordering system will be ready to serve you soon.
        </p>
        <div className="space-y-4">
          <p className="text-sacred-white/90">
            Meanwhile, you can place your order by calling us at:
          </p>
          <a
            href="tel:7259322466"
            className="text-2xl text-blessed-yellow font-semibold hover:text-divine-red transition-colors duration-300 block"
          >
            <span className="inline-flex items-center justify-center">
              <Image
                src="/phone-icon.png"
                alt="Phone"
                width={24}
                height={24}
                className="mr-2"
              />
              7259322466
            </span>
          </a>
          <a
            href="tel:8951603763"
            className="text-2xl text-blessed-yellow font-semibold hover:text-divine-red transition-colors duration-300 block"
          >
            <span className="inline-flex items-center justify-center">
              <Image
                src="/phone-icon.png"
                alt="Phone"
                width={24}
                height={24}
                className="mr-2"
              />
              8951603763
            </span>
          </a>
        </div>
        <Link
          href="/"
          className="luxury-gradient px-8 py-4 rounded-lg text-stone-brown font-semibold hover-lift sacred-glow inline-block mt-8"
        >
          Return to Home
        </Link>
      </div>

      <div className="absolute top-20 right-0 w-72 h-72 bg-divine-red/5 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blessed-yellow/5 blur-[100px] rounded-full animate-pulse" />
    </div>
  )
}

"use client"
import { useState } from "react"

export function VastraOrder() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    location: "",
    service: "",
    count: "",
    datetime: "",
    details: ""
  })
  const [locStatus, setLocStatus] = useState("Tap to auto-detect location")
  const [lat, setLat] = useState<string | null>(null)
  const [lng, setLng] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [summary, setSummary] = useState("")

  const getLoc = () => {
    setLocStatus("Detecting location...")
    if (!navigator.geolocation) {
      setLocStatus("Not supported. Enter manually.")
      return
    }
    navigator.geolocation.getCurrentPosition(
      (p) => {
        const la = p.coords.latitude.toFixed(5)
        const lo = p.coords.longitude.toFixed(5)
        setLat(la)
        setLng(lo)
        setLocStatus("Location detected! ✅")
        
        if (!formData.address) {
          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${la}&lon=${lo}&format=json`)
            .then((r) => r.json())
            .then((d) => {
              if (d.display_name) {
                setFormData(prev => ({ ...prev, address: d.display_name.split(",").slice(0, 4).join(", ") }))
              }
            }).catch(() => {})
        }
      },
      () => setLocStatus("Access denied. Enter manually.")
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const placeOrder = () => {
    const { name, phone, address, service, count, datetime, details } = formData
    if (!name || !phone || !address || !service || !count) {
      alert("Please fill all required fields marked with *")
      return
    }
    const ft = datetime ? new Date(datetime).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }) : "As soon as possible"
    const loc = lat ? `https://maps.google.com/?q=${lat},${lng}` : address
    
    const msg = `New Vasthra Order\n\nName: ${name}\nPhone: ${phone}\nLocation: ${loc}\nService: ${service}\nClothes Count: ${count} items\nPickup Time: ${ft}\nDetails: ${details || "Not specified"}\n\nSent via Vasthra website`
    
    setSummary(`Name: ${name} | Service: ${service} | Clothes: ${count} | Pickup: ${ft}`)
    setShowModal(true)
    
    setTimeout(() => {
      window.open(`https://wa.me/918095588946?text=${encodeURIComponent(msg)}`, "_blank")
    }, 1000)
  }

  const closeModal = () => {
    setShowModal(false)
    setFormData({
      name: "", phone: "", address: "", location: "", service: "", count: "", datetime: "", details: ""
    })
    setLat(null)
    setLng(null)
    setLocStatus("Tap to auto-detect location")
  }

  const now = new Date()
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
  const minDate = now.toISOString().slice(0, 16)

  return (
    <section id="order" className="py-16 sm:py-24 relative overflow-hidden bg-stone-brown/95">
      <div className="absolute inset-0 bg-stone-brown-mid/50 sacred-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-overline tracking-[0.2em] mb-4 block">✦ Book Now</span>
          <h2 className="text-4xl sm:text-5xl font-bold golden-text mb-4 sm:mb-6 heading-cinzel leading-tight">
            Place Your Order
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-golden-beige to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-sacred-white/80 max-w-2xl mx-auto">
            Fill in the form. We will send a WhatsApp confirmation with pickup time, cost, and cloth count.
          </p>
        </div>

        <div className="royal-card p-6 sm:p-10 rounded-3xl border-golden-beige/30 shadow-[0_15px_40px_rgba(200,151,58,0.1)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="input-label">Your Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-royal" placeholder="Ravi Kumar" />
            </div>
            <div>
              <label className="input-label">Mobile Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input-royal" placeholder="+91 98765 43210" />
            </div>
          </div>

          <div className="mb-6">
            <label className="input-label">Address / Locality *</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="input-royal" placeholder="Flat 203, MG Road, Bengaluru" />
          </div>

          <div className="mb-6">
            <label className="input-label">Your Location (Optional)</label>
            <button onClick={getLoc} className="w-full flex items-center justify-center gap-2 bg-stone-brown-raised/50 border border-dashed border-golden-beige/50 hover:bg-golden-beige/10 hover:border-golden-beige text-sacred-white font-medium py-3 px-4 rounded-xl transition-all duration-300">
              📍 Use My Current Location
            </button>
            <div className={`text-xs mt-2 ${locStatus.includes("✅") ? "text-blessing-green" : "text-sacred-white/50"}`}>
              {locStatus}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="input-label">Service Type *</label>
              <select name="service" value={formData.service} onChange={handleChange} className="input-royal appearance-none bg-stone-brown text-sacred-white">
                <option value="" className="text-stone-brown">Select service...</option>
                <option value="Regular Wash">Regular Wash</option>
                <option value="Wash + Iron">Wash + Iron</option>
                <option value="Dry Clean">Dry Clean</option>
                <option value="Iron Only">Iron Only</option>
              </select>
            </div>
            <div>
              <label className="input-label">Number of Clothes *</label>
              <input type="number" name="count" value={formData.count} onChange={handleChange} className="input-royal" placeholder="e.g. 12" min="1" />
            </div>
          </div>

          <div className="mb-6">
             <label className="input-label">Preferred Pickup Time *</label>
             <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleChange} min={minDate} className="input-royal" />
          </div>

          <div className="mb-8">
            <label className="input-label">Clothes Details (Optional)</label>
            <textarea name="details" value={formData.details} onChange={handleChange} className="input-royal min-h-[100px] resize-y" placeholder="e.g. 4 shirts, 2 pants, 1 saree, 2 bedsheets..."></textarea>
          </div>

          <button onClick={placeOrder} className="w-full luxury-gradient font-bold text-stone-brown py-4 rounded-xl hover:shadow-[0_0_20px_rgba(200,151,58,0.4)] transition-all duration-300 transform hover:-translate-y-1 sm:text-lg flex justify-center items-center gap-2">
            📦 Confirm Order via WhatsApp
          </button>
          
          <div className="mt-6 text-center text-sm text-sacred-white/60">
            Or call us directly: <a href="tel:7259322466" className="text-blessed-yellow font-bold hover:underline">📞 +91 72593 22466</a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-stone-brown/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="royal-card bg-stone-brown p-8 md:p-10 rounded-3xl max-w-md w-full text-center border-golden-beige shadow-2xl relative overflow-hidden animate-slide-up">
            <div className="absolute top-0 right-0 w-32 h-32 bg-golden-beige/10 blur-[50px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-divine-red/10 blur-[50px] rounded-full"></div>

            <div className="text-5xl mb-4 relative z-10">✅</div>
            <h3 className="text-2xl font-bold golden-text mb-2 heading-cinzel relative z-10">Order Placed!</h3>
            <p className="text-sacred-white/80 text-sm mb-6 relative z-10">
              Your booking is being sent via WhatsApp. Follow up your order details via WhatsApp.
            </p>

            <div className="bg-stone-brown-raised/50 border border-golden-beige/20 rounded-xl p-4 text-left mb-6 text-sm text-sacred-white/80 space-y-2 relative z-10">
               {summary.split(" | ").map((s, i) => (
                 <div key={i}>{s}</div>
               ))}
            </div>

            <button onClick={closeModal} className="luxury-gradient font-bold text-stone-brown py-2.5 px-8 rounded-full hover:shadow-[0_0_15px_rgba(200,151,58,0.3)] transition-all duration-300 relative z-10 inline-block w-full">
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

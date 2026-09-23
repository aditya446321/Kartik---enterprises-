import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Phone, Mail, MapPin, MessageSquare, Check, Clock, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  selectedServicePreset?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServicePreset = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    service: selectedServicePreset || '',
    message: '',
  });

  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!/^\d{10}$/.test(formData.mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!formData.service) {
      setError('Please select a system / service');
      return;
    }

    const text = `*New Measurement Request - Kartik Enterprises*
👤 Name: ${formData.name}
📱 Mobile: ${formData.mobile}
🛠️ Service: ${formData.service}
💬 Note: ${formData.message || 'No additional note'}
📍 Location: Mumbai / MMR`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/919004019066?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-[#0B0F1A] py-16 lg:py-24 text-white relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Studio Info Card */}
          <div className="lg:col-span-5 rounded-3xl bg-white/[0.04] border border-white/10 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.06] p-1.5 border border-white/10 flex items-center justify-center">
                  <img
                    src="/images/logo.png"
                    alt="Kartik Enterprises Logo"
                    className="w-full h-full object-contain block"
                    draggable={false}
                  />
                </div>
                <div>
                  <h3 className="font-black text-lg text-white leading-tight">KARTIK ENTERPRISES</h3>
                  <div className="text-[10px] tracking-[0.2em] font-bold text-[#FFD60A] uppercase mt-0.5">
                    MUMBAI LUXURY SAFETY STUDIO
                  </div>
                </div>
              </div>

              <h4 className="mt-8 text-2xl sm:text-3xl font-black text-white leading-tight">
                Let’s make your high-rise invisible-safe.
              </h4>
              
              <p className="mt-3 text-xs sm:text-sm text-white/60 leading-relaxed">
                Local Mumbai workshop & certified fabrication team. Fast site visit, laser measurement, and seamless installation in 24 hours.
              </p>

              <div className="mt-8 space-y-3">
                <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFD60A] text-black flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase">SERVICE REGIONS</div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                      Mumbai, Thane, Navi Mumbai & Pune
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+919004019066"
                  className="rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 p-4 flex items-center gap-3 transition-all block"
                >
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase">DIRECT CALL / WHATSAPP</div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-0.5">+91 90040 19066</div>
                  </div>
                </a>

                <a
                  href="mailto:kartikenterprises135@gmail.com"
                  className="rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 p-4 flex items-center gap-3 transition-all block"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase">OFFICIAL EMAIL</div>
                    <div className="text-xs font-medium text-white/90 mt-0.5 truncate">kartikenterprises135@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FFD60A]" /> Mon - Sun: 8 AM - 9 PM
              </span>
              <span>100% Free Consultation</span>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 rounded-3xl bg-white text-black p-7 sm:p-10 border border-black/10 relative overflow-hidden shadow-2xl">
            <h4 className="text-2xl font-black text-black tracking-tight">
              Book Free Site Visit & Measurement
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-black/60">
              We respond in under 10 minutes on WhatsApp with direct pricing and schedule slots.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-black/50 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aditya Verma"
                    className="w-full rounded-xl bg-black/[0.04] border border-black/10 px-4 py-3 text-xs sm:text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-black/50 mb-1.5">
                    Mobile Number (10 Digits) *
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mobile: e.target.value.replace(/\D/g, '').slice(0, 10),
                      })
                    }
                    placeholder="90040 19066"
                    className="w-full rounded-xl bg-black/[0.04] border border-black/10 px-4 py-3 text-xs sm:text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-black/50 mb-1.5">
                  Choose System / Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-xl bg-black/[0.04] border border-black/10 px-4 py-3 text-xs sm:text-sm text-black focus:outline-none focus:border-black transition"
                >
                  <option value="">Select a solution...</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} ({p.categoryLabel})
                    </option>
                  ))}
                  <option value="Complete Home Package (Grills + Nets + Blinds)">
                    Complete Home Package (Grills + Nets + Blinds)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-black/50 mb-1.5">
                  Balcony / Window Details (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Floor number, approximate balcony length, or tower name in Mumbai..."
                  className="w-full rounded-xl bg-black/[0.04] border border-black/10 px-4 py-3 text-xs sm:text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition resize-none"
                />
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-bold">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-[#111317] hover:bg-black text-white py-4 font-black text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#FFD60A]" />
                <span>Confirm on WhatsApp →</span>
              </button>

              <div className="flex items-center justify-center gap-3 text-[11px] text-black/40 font-medium pt-1">
                <span>✓ Direct to Owner</span>
                <span>•</span>
                <span>✓ No Sales Spam</span>
                <span>•</span>
                <span>✓ 100% Free Visit</span>
              </div>
            </form>

            {submitted && (
              <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#FFD60A] text-black flex items-center justify-center text-3xl font-black mb-3">
                  ✓
                </div>
                <h4 className="text-xl font-black text-black">Opening WhatsApp...</h4>
                <p className="mt-1 text-xs text-black/60">
                  Sending your measurement details directly to Kartik Enterprises.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

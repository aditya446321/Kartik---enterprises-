import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ShowcaseSection } from './components/ShowcaseSection';
import { CostEstimator } from './components/CostEstimator';
import { ComparisonSection } from './components/ComparisonSection';
import { InstallationsGallery } from './components/InstallationsGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { Product, PRODUCTS } from './data/products';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Check, 
  X,
  Maximize2
} from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ img: string; label: string } | null>(null);
  const [servicePreset, setServicePreset] = useState<string>('');

  useEffect(() => {
    // Set document title & favicon
    document.title = 'Kartik Enterprises - Luxury Invisible Grills & Mosquito Nets Mumbai';
    
    // Ensure favicon is logo
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = '/images/logo.png';

    // Scroll spy
    const handleScroll = () => {
      const sections = ['home', 'services', 'calculator', 'gallery', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
      if (window.scrollY < 80) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectForQuote = (productTitle: string) => {
    setServicePreset(productTitle);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#FCFCF9] text-[#111317] antialiased overflow-x-hidden selection:bg-[#FFD60A] selection:text-black">
      
      {/* Top Header */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="relative bg-white pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="mx-auto max-w-[1320px] px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/10 text-[11px] tracking-[0.14em] font-semibold text-black/70">
                <span className="w-2 h-2 rounded-full bg-[#FFB700] animate-pulse" />
                <span>MUMBAI • LUXURY HIGH-RISE SAFETY STUDIO</span>
              </div>

              <h1 className="mt-6 font-black leading-[0.92] tracking-tight text-[40px] sm:text-[54px] lg:text-[70px] text-black">
                SAFETY THAT <br />
                <span className="text-[#FFB700]">DOESN&apos;T BLOCK</span> <br />
                YOUR SEA VIEW.
              </h1>

              <p className="mt-5 max-w-[540px] text-[15px] sm:text-[17px] leading-[1.6] text-black/60 font-medium">
                Premium invisible grills, pleated mosquito nets, and architectural blinds engineered for Mumbai towers. Minimal frames, certified 400kg pull load, and zero compromise on breeze and skyline.
              </p>

              {/* Action CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="rounded-full bg-[#111317] hover:bg-black text-white px-7 py-4 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
                >
                  <span>Book Free Laser Measurement</span>
                  <ArrowRight className="w-4 h-4 text-[#FFD60A]" />
                </button>
                <button
                  onClick={() => handleNavigate('services')}
                  className="rounded-full bg-white border border-black/15 px-6 py-4 font-bold text-xs sm:text-sm hover:bg-black/[0.04] transition-all"
                >
                  Explore 11 Systems
                </button>
              </div>

              {/* Trust stats */}
              <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-[500px]">
                {[
                  { k: '15+', v: 'Years in Mumbai' },
                  { k: '1,500+', v: 'Homes Secured' },
                  { k: '4.9★', v: 'Customer Rating' },
                ].map((stat) => (
                  <div
                    key={stat.k}
                    className="rounded-2xl bg-[#F7F7F3] border border-black/[0.06] p-3.5 sm:p-4 text-left"
                  >
                    <div className="font-black text-xl sm:text-2xl leading-none text-black">
                      {stat.k}
                    </div>
                    <div className="mt-1 text-[11px] sm:text-[12px] text-black/60 leading-tight font-medium">
                      {stat.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Showcase Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-black/10 bg-[#F5F5F0] aspect-[4/3] sm:aspect-[1/1] shadow-2xl group">
                <img
                  src="/images/gallery-bandra.jpg"
                  alt="Sea face invisible grill Bandra West"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur text-[#FFD60A] text-[10px] font-black tracking-wider uppercase border border-white/10">
                    Bandra West • 24th Floor
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-semibold text-white/70 uppercase tracking-widest">
                    Actual Mumbai Installation
                  </div>
                  <div className="text-sm font-black mt-0.5">
                    100% Unobstructed Arabian Sea Horizon
                  </div>
                </div>
              </div>

              {/* Dual mini installation thumbnails */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div
                  onClick={() => setLightboxImage({ img: '/images/gallery-vikhroli.jpg', label: 'Pleated Net Balcony Deck - Vikhroli' })}
                  className="rounded-2xl overflow-hidden border border-black/10 aspect-[4/3] relative cursor-pointer group"
                >
                  <img
                    src="/images/gallery-vikhroli.jpg"
                    alt="Pleated mosquito net deck"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/70 px-2 py-0.5 rounded">
                    Vikhroli Deck
                  </div>
                </div>
                <div
                  onClick={() => setLightboxImage({ img: '/images/gallery-highrise.jpg', label: 'Invisible Grill High-Rise - Powai' })}
                  className="rounded-2xl overflow-hidden border border-black/10 aspect-[4/3] relative cursor-pointer group"
                >
                  <img
                    src="/images/gallery-highrise.jpg"
                    alt="Invisible grill city view"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/70 px-2 py-0.5 rounded">
                    Powai High-Rise
                  </div>
                </div>
              </div>

              {/* Verified badge floating card */}
              <div className="absolute -bottom-3 -left-3 sm:-left-6 bg-white border border-black/10 rounded-2xl px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFD60A] text-black flex items-center justify-center font-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] tracking-wider font-extrabold text-black/50 uppercase">
                    316 MARINE STEEL
                  </div>
                  <div className="text-xs font-black text-black">
                    400kg Pull Strength Certified
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Marquee ticker bar */}
      <div className="border-y border-black/[0.06] bg-[#F9F9F6] py-3.5 overflow-hidden">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8 flex flex-wrap items-center justify-center lg:justify-between gap-3 text-[11px] tracking-[0.18em] font-semibold text-black/60">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB700]" />
            INVISIBLE GRILLS • PLEATED NETS • ZEBRA BLINDS • ROLLER BLINDS • BIRD NETS • ACCORDION DOORS
          </span>
          <span className="hidden lg:inline-flex items-center gap-2 font-bold text-black/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            SERVICING ALL MUMBAI • THANE • NAVI MUMBAI • PUNE
          </span>
        </div>
      </div>

      {/* Showcase Section (Addresses the user's request: no more boring vertical scrolling!) */}
      <ShowcaseSection
        onSelectProduct={(prod) => setModalProduct(prod)}
        onSelectForQuote={handleSelectForQuote}
      />

      {/* Instant Balcony Budget Estimator */}
      <div id="calculator">
        <CostEstimator />
      </div>

      {/* Comparison: Invisible Grill vs Old Iron Grills */}
      <ComparisonSection />

      {/* Real Mumbai Completed Installations Gallery */}
      <InstallationsGallery
        onSelectProject={(img, label) => setLightboxImage({ img, label })}
      />

      {/* Contact & Free Measurement Booking Form */}
      <ContactSection selectedServicePreset={servicePreset} />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Detail Modal */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onSelectForQuote={handleSelectForQuote}
        />
      )}

      {/* Gallery Image Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setLightboxImage(null)} />
          <div className="relative max-w-4xl max-h-[90vh] bg-black rounded-3xl overflow-hidden border border-white/20 z-10 flex flex-col">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="overflow-hidden max-h-[78vh] flex items-center justify-center">
              <img
                src={lightboxImage.img}
                alt={lightboxImage.label}
                className="w-full h-full object-contain max-h-[78vh]"
              />
            </div>
            <div className="p-4 bg-[#111317] border-t border-white/10 flex items-center justify-between text-white">
              <span className="font-bold text-sm">{lightboxImage.label}</span>
              <a
                href={`https://wa.me/919004019066?text=${encodeURIComponent(`Hi Kartik Enterprises, I saw this project photo (${lightboxImage.label}) and want a quote for my flat.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#25D366] text-black font-bold text-xs flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Enquire This Design
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Floating Sticky Contact Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0B0F1A]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 flex items-center gap-2">
        <a
          href="tel:+919004019066"
          className="flex-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-3 px-3 flex items-center justify-center gap-1.5 border border-white/15"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFD60A]" />
          <span>Call 90040 19066</span>
        </a>
        <a
          href="https://wa.me/919004019066?text=Hi%20Kartik%20Enterprises,%20I%20am%20looking%20for%20invisible%20grills%20/%20nets%20for%20my%20balcony."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-[#25D366] text-black font-black text-xs py-3 px-3 flex items-center justify-center gap-1.5 shadow-lg"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Quote</span>
        </a>
      </div>

    </div>
  );
}
export default App;

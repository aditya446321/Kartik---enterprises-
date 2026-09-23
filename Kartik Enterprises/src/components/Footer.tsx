import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#070A12] border-t border-white/10 text-white/60 py-12 lg:py-16">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] p-1 border border-white/10 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Kartik Enterprises"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-black text-white text-base tracking-tight leading-tight">
                  KARTIK ENTERPRISES
                </div>
                <div className="text-[10px] tracking-[0.2em] font-bold text-[#FFD60A] uppercase mt-0.5">
                  LUXURY SAFETY STUDIO • MUMBAI
                </div>
              </div>
            </button>

            <p className="text-xs text-white/50 leading-relaxed max-w-sm">
              Specialized high-rise safety and interior solutions across Mumbai. We manufacture, customize, and install invisible safety grills, pleated mosquito nets, and architectural window blinds.
            </p>

            <div className="flex items-center gap-2 text-xs text-white/80">
              <ShieldCheck className="w-4 h-4 text-[#FFD60A]" />
              <span>15+ Years Mumbai Expertise • 1,500+ Homes</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Explore
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  All 11 Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-white transition-colors"
                >
                  Budget Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Mumbai Installations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Book Measurement
                </button>
              </li>
            </ul>
          </div>

          {/* Key Solutions */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Solutions
            </h5>
            <ul className="space-y-2.5 text-xs text-white/50">
              <li>Invisible Grills (316 Grade)</li>
              <li>Pleated Mosquito Nets</li>
              <li>Designer Zebra Blinds</li>
              <li>Garware Bird Protection Nets</li>
              <li>Wood Venetian Blinds</li>
              <li>Accordion & Folding Doors</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Connect
            </h5>
            <div className="space-y-3 text-xs">
              <a
                href="tel:+919004019066"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFD60A]" />
                <span>+91 90040 19066</span>
              </a>
              <a
                href="mailto:kartikenterprises135@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#FFD60A] shrink-0" />
                <span>kartikenterprises135@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/50">
                <MapPin className="w-3.5 h-3.5 text-[#FFD60A] shrink-0" />
                <span>Mumbai • Thane • Navi Mumbai • Pune</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} Kartik Enterprises. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFD60A]" />
            <span>Crafted for Mumbai High-Rises & Luxury Homes</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

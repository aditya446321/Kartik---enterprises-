import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'SOLUTIONS & GALLERY', id: 'services' },
    { label: 'CALCULATOR', id: 'calculator' },
    { label: 'INSTALLATIONS', id: 'gallery' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#0B0F1A]/95 backdrop-blur-md border-b border-white/10 transition-all py-3.5">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-xl bg-white/[0.04] p-1 border border-white/10 group-hover:border-[#FFD60A]/40 transition-all">
            <img
              src="/images/logo.png"
              alt="Kartik Enterprises Logo - KE"
              className="w-full h-full object-contain block drop-shadow-md"
              draggable={false}
            />
          </div>
          <div className="leading-none flex flex-col justify-center">
            <div className="font-black tracking-tight text-[17px] text-white flex items-center gap-1.5">
              <span>KARTIK</span>
              <span className="text-[#FFD60A] text-xs font-black tracking-wider bg-white/10 px-1.5 py-0.5 rounded">MUMBAI</span>
            </div>
            <div className="font-bold tracking-[0.2em] text-[9.5px] text-white/50 mt-1 uppercase">
              ENTERPRISES • LUXURY SAFETY
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 text-xs font-bold tracking-wider transition-all rounded-full ${
                activeSection === item.id
                  ? 'text-black bg-[#FFD60A] shadow-md'
                  : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919004019066"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white bg-white/[0.06] hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#FFD60A]" />
            <span>+91 90040 19066</span>
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#FFD60A] hover:bg-[#ffe142] text-black px-5 py-2 text-xs font-black tracking-wider transition-all shadow-md hover:scale-105"
          >
            <span>FREE MEASUREMENT</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F1A] border-b border-white/10 p-5 flex flex-col gap-2 animate-fadeIn shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 font-bold tracking-wider text-xs text-white hover:bg-white/10 flex items-center justify-between"
            >
              <span>{item.label}</span>
              {activeSection === item.id && <span className="w-2 h-2 rounded-full bg-[#FFD60A]" />}
            </button>
          ))}
          
          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href="tel:+919004019066"
              className="rounded-xl bg-white/10 text-white py-3 text-center font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919004019066"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#25D366] text-black py-3 text-center font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Product } from '../data/products';
import { X, CheckCircle2, Phone, MessageSquare, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectForQuote: (productTitle: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onSelectForQuote }) => {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = `Hi Kartik Enterprises, I am interested in *${product.title}* for my Mumbai home. Please share pricing and arrange a free measurement visit.`;
    window.open(`https://wa.me/919004019066?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#11141C] text-white rounded-3xl border border-white/15 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="relative md:w-1/2 h-64 md:h-auto min-h-[280px] bg-black overflow-hidden flex items-center justify-center">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-[#FFD60A] text-black font-extrabold text-[10px] tracking-wider uppercase">
              {product.badge}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 md:hidden">
            <div className="text-[11px] font-semibold text-white/70 uppercase tracking-widest">{product.categoryLabel}</div>
            <h3 className="text-xl font-black text-white">{product.title}</h3>
          </div>
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="hidden md:flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FFD60A]/15 text-[#FFD60A] font-bold text-[10px] tracking-wider uppercase border border-[#FFD60A]/30">
                {product.categoryLabel}
              </span>
              <span className="text-[11px] text-white/50 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#FFD60A]" /> Mumbai • Thane • Pune
              </span>
            </div>

            <h3 className="hidden md:block text-2xl font-black text-white tracking-tight leading-tight">
              {product.title}
            </h3>

            <p className="mt-2 text-sm text-[#FFD60A] font-medium leading-relaxed">
              {product.tagline}
            </p>

            <p className="mt-3 text-xs sm:text-[13px] text-white/70 leading-relaxed border-t border-white/10 pt-3">
              {product.desc}
            </p>

            {/* Key Specifications */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#FFD60A]" /> Engineered Specifications
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD60A] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal for note */}
            <div className="mt-4 p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/75 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#FFD60A] shrink-0" />
              <div>
                <span className="font-bold text-white">Ideal For: </span>
                <span>{product.idealFor}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleWhatsApp}
              className="flex-1 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs sm:text-sm py-3 px-4 flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#25D366]/20"
            >
              <MessageSquare className="w-4 h-4" />
              Quote on WhatsApp
            </button>
            <a
              href="tel:+919004019066"
              className="rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm py-3 px-5 flex items-center justify-center gap-2 transition-all border border-white/15"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Owner
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  Maximize2, 
  Phone, 
  MessageSquare, 
  LayoutGrid, 
  Layers, 
  ArrowRight,
  Shield,
  Eye
} from 'lucide-react';

interface ShowcaseSectionProps {
  onSelectProduct: (product: Product) => void;
  onSelectForQuote: (productTitle: string) => void;
}

type CategoryFilter = 'all' | 'safety' | 'mosquito' | 'blinds' | 'doors-windows';

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  onSelectProduct,
  onSelectForQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [activeProductId, setActiveProductId] = useState<string>('invisible');
  const [viewMode, setViewMode] = useState<'stage' | 'bento'>('stage');
  
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const activeProduct = PRODUCTS.find((p) => p.id === activeProductId) || filteredProducts[0] || PRODUCTS[0];

  const handleCategoryChange = (category: CategoryFilter) => {
    setSelectedCategory(category);
    const inCategory = PRODUCTS.filter((p) => category === 'all' || p.category === category);
    if (inCategory.length > 0) {
      setActiveProductId(inCategory[0].id);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleWhatsAppQuote = (product: Product) => {
    const text = `Hi Kartik Enterprises, I want a quote for *${product.title}* for my apartment in Mumbai. Please share rate per sq.ft and schedule measurement.`;
    window.open(`https://wa.me/919004019066?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="bg-[#0B0F1A] text-white py-16 lg:py-24 border-y border-white/10 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD60A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-bold tracking-[0.16em] text-[#FFD60A]">
              <Sparkles className="w-3.5 h-3.5" /> 11 ARCHITECTURAL SAFETY & DESIGN SYSTEMS
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-white">
              No More Vertical Clutter. <br />
              <span className="text-[#FFD60A]">Explore In High-Rise Luxury.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl">
              Switch categories or flip through our interactive visual showcase. Minimal frames, certified high tensile load, and factory direct installation in 24 hours.
            </p>
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center gap-3">
            <div className="bg-white/[0.06] p-1 rounded-full border border-white/10 flex items-center">
              <button
                onClick={() => setViewMode('stage')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  viewMode === 'stage'
                    ? 'bg-[#FFD60A] text-black shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Showcase Slider</span>
              </button>
              <button
                onClick={() => setViewMode('bento')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  viewMode === 'bento'
                    ? 'bg-[#FFD60A] text-black shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Bento Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills (Filters without vertical pile-up) */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All 11 Solutions', count: 11 },
            { id: 'safety', label: 'Invisible Grills & Bird Net', count: 2 },
            { id: 'mosquito', label: 'Pleated & Mosquito Mesh', count: 3 },
            { id: 'blinds', label: 'Designer Luxury Blinds', count: 4 },
            { id: 'doors-windows', label: 'Doors & Windows', count: 2 },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id as CategoryFilter)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-2 border ${
                selectedCategory === cat.id
                  ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                  : 'bg-white/[0.04] text-white/70 border-white/10 hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                  selectedCategory === cat.id ? 'bg-black text-white' : 'bg-white/10 text-white/60'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* VIEW MODE 1: INTERACTIVE SHOWCASE STAGE */}
        {viewMode === 'stage' && (
          <div className="mt-8">
            {/* Main Stage Featured Card */}
            <div className="rounded-3xl bg-white/[0.03] border border-white/15 p-6 lg:p-8 backdrop-blur-sm grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
              
              {/* Product Big Visual */}
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-black/60 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group border border-white/10">
                <img
                  src={activeProduct.img}
                  alt={activeProduct.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FFD60A] text-black font-black text-[11px] tracking-wider shadow-lg">
                    {activeProduct.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur text-white font-semibold text-[11px] border border-white/20">
                    {activeProduct.categoryLabel}
                  </span>
                </div>

                {/* Quick zoom button */}
                <button
                  onClick={() => onSelectProduct(activeProduct)}
                  className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-black/80 hover:bg-black text-white text-xs font-bold flex items-center gap-2 border border-white/20 backdrop-blur transition-all hover:scale-105"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#FFD60A]" />
                  <span>Full View & Specs</span>
                </button>
              </div>

              {/* Product Specs & CTAs */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-[11px] font-bold text-[#FFD60A] tracking-widest uppercase">
                    KARTIK HIGH-RISE SYSTEMS
                  </div>
                  <h3 className="mt-1 text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                    {activeProduct.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/90 font-medium leading-relaxed">
                    {activeProduct.tagline}
                  </p>
                  <p className="mt-3 text-xs sm:text-[13px] text-white/60 leading-relaxed border-t border-white/10 pt-3">
                    {activeProduct.desc}
                  </p>

                  {/* Bullet Specs */}
                  <div className="mt-5 space-y-2">
                    {activeProduct.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-white/85">
                        <CheckCircle2 className="w-4 h-4 text-[#FFD60A] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal for chip */}
                  <div className="mt-5 p-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-white/70">
                    <span className="font-bold text-white">Best Suited For: </span>
                    <span>{activeProduct.idealFor}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleWhatsAppQuote(activeProduct)}
                    className="flex-1 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs sm:text-sm py-3 px-5 flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#25D366]/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Price Estimate
                  </button>
                  <button
                    onClick={() => onSelectProduct(activeProduct)}
                    className="rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm py-3 px-5 flex items-center justify-center gap-2 transition-all border border-white/15"
                  >
                    <Eye className="w-4 h-4 text-[#FFD60A]" />
                    Inspect Details
                  </button>
                </div>
              </div>
            </div>

            {/* Horizontal Interactive Carousel Ribbon */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold text-white/50 tracking-wider uppercase">
                  Tap to preview any product ({filteredProducts.length} items)
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scrollCarousel('left')}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollCarousel('right')}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Ribbon */}
              <div
                ref={carouselRef}
                className="flex gap-3 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
              >
                {filteredProducts.map((prod) => {
                  const isCurrent = prod.id === activeProductId;
                  return (
                    <div
                      key={prod.id}
                      onClick={() => setActiveProductId(prod.id)}
                      className={`shrink-0 w-64 sm:w-72 p-3 rounded-2xl cursor-pointer transition-all snap-start border ${
                        isCurrent
                          ? 'bg-white/15 border-[#FFD60A] shadow-[0_0_20px_rgba(255,214,10,0.25)] scale-[1.02]'
                          : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      <div className="relative h-36 rounded-xl overflow-hidden bg-black/40">
                        <img
                          src={prod.img}
                          alt={prod.title}
                          className="w-full h-full object-cover"
                        />
                        {isCurrent && (
                          <div className="absolute inset-0 bg-[#FFD60A]/10 border-2 border-[#FFD60A] rounded-xl pointer-events-none" />
                        )}
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/70 text-[9px] font-extrabold text-[#FFD60A] tracking-wider">
                          {prod.badge}
                        </span>
                      </div>
                      <div className="mt-2.5">
                        <h4 className={`text-xs font-black truncate ${isCurrent ? 'text-[#FFD60A]' : 'text-white'}`}>
                          {prod.title}
                        </h4>
                        <p className="text-[11px] text-white/50 truncate mt-0.5">
                          {prod.tagline}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: CURATED BENTO GRID */}
        {viewMode === 'bento' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod, index) => {
              const isFeatured = index === 0 && selectedCategory === 'all';
              return (
                <div
                  key={prod.id}
                  className={`rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col group hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] ${
                    isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Card Image */}
                  <div
                    className={`relative overflow-hidden bg-black/40 ${
                      isFeatured ? 'h-64 sm:h-80' : 'h-52'
                    }`}
                  >
                    <img
                      src={prod.img}
                      alt={prod.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-[#FFD60A] text-black font-extrabold text-[10px] tracking-wider uppercase">
                        {prod.badge}
                      </span>
                    </div>

                    {/* Quick view button overlay */}
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black text-white text-[11px] font-bold border border-white/20 backdrop-blur flex items-center gap-1.5 transition-all"
                    >
                      <Maximize2 className="w-3 h-3 text-[#FFD60A]" />
                      <span>Quick View</span>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-[#FFD60A]">
                        {prod.categoryLabel}
                      </div>
                      <h3 className="mt-1 text-lg sm:text-xl font-black text-white tracking-tight">
                        {prod.title}
                      </h3>
                      <p className="mt-2 text-xs text-white/60 leading-relaxed line-clamp-2">
                        {prod.desc}
                      </p>

                      {/* Specs pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {prod.specs.slice(0, 2).map((sp, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] text-white/80"
                          >
                            ✓ {sp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <button
                        onClick={() => handleWhatsAppQuote(prod)}
                        className="flex-1 rounded-full bg-white text-black hover:bg-[#FFD60A] text-xs font-bold py-2.5 px-4 flex items-center justify-center gap-1.5 transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Enquire on WhatsApp</span>
                      </button>
                      <a
                        href="tel:+919004019066"
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/10 transition-all shrink-0"
                        title="Call +91 90040 19066"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

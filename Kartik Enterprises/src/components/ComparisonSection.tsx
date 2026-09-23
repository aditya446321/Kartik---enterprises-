import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck, Sparkles } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24 text-black border-y border-black/[0.06]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-[11px] font-bold tracking-widest text-black/60 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB700]" /> Architectural Standard
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight">
            Traditional Grills vs. <br />
            <span className="text-[#FFB700]">Kartik Invisible Grills</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-black/60">
            Why leading societies and luxury developers across Bandra, Worli, and Powai insist on invisible architectural systems.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Old Traditional Iron Grills */}
          <div className="rounded-3xl bg-[#F7F7F3] border border-black/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-black/10">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-red-600 uppercase">Obsolete Solution</span>
                  <h3 className="text-xl font-black text-black">Old Iron & Box Grills</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <ShieldAlert className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  'Cages the balcony and blocks 40-60% of open sea & city view',
                  'Heavy rust & paint peeling every monsoon season in Mumbai humidity',
                  'Fire & safety hazard — impossible to exit during emergency escapes',
                  'Heavy drilling & structural load on high-rise parapet walls',
                  'Banned by modern Mumbai luxury societies & architectural guidelines',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-black/70">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10 text-xs text-black/40 italic">
              Heavy maintenance & recurring paint costs every year.
            </div>
          </div>

          {/* Kartik Invisible Grill */}
          <div className="rounded-3xl bg-[#0B0F1A] text-white border border-[#FFD60A]/40 p-6 sm:p-8 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD60A]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#FFD60A] uppercase">The Modern Standard</span>
                  <h3 className="text-xl font-black text-white">Kartik Invisible Grills</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FFD60A] flex items-center justify-center text-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  '100% panoramic view — practically invisible from 3-4 meters away',
                  '316 Marine Grade SS with anti-rust nylon coating for coastal air',
                  'Certified 400+ kg tensile pull strength per cable (child & pet safe)',
                  'Emergency cut capability with wire cutters in under 20 seconds',
                  '100% Society approved across all Mumbai & Thane high-rises',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                    <Check className="w-4 h-4 text-[#FFD60A] shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#FFD60A] font-bold">10-Year Anti-Rust Warranty</span>
              <a
                href="tel:+919004019066"
                className="px-4 py-2 rounded-full bg-white text-black hover:bg-[#FFD60A] text-xs font-bold transition-all"
              >
                Book Inspection →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Calculator, MessageSquare, ShieldCheck, Ruler, ArrowRight, Check } from 'lucide-react';

interface SystemOption {
  id: string;
  name: string;
  minRate: number;
  maxRate: number;
  unit: string;
  note: string;
}

const SYSTEMS: SystemOption[] = [
  {
    id: 'invisible-grill',
    name: 'Invisible Grill (316 Marine SS)',
    minRate: 110,
    maxRate: 145,
    unit: 'sq.ft',
    note: 'Includes 316 grade SS cables, high-tensile anchors & 24hr install',
  },
  {
    id: 'pleated-net',
    name: 'Pleated Mosquito Net (German Mesh)',
    minRate: 180,
    maxRate: 230,
    unit: 'sq.ft',
    note: 'Low-profile barrier-free track, dust-proof zig-zag mesh',
  },
  {
    id: 'zebra-blinds',
    name: 'Zebra Blinds (Day/Night)',
    minRate: 120,
    maxRate: 175,
    unit: 'sq.ft',
    note: 'Light filtering + blackout dual stripe control',
  },
  {
    id: 'bird-net',
    name: 'Bird Protection Net (Garware UV)',
    minRate: 25,
    maxRate: 40,
    unit: 'sq.ft',
    note: 'High-density pigeon barrier with SS hooks',
  },
  {
    id: 'roller-blinds',
    name: 'Roller Blinds (Heat-Block)',
    minRate: 95,
    maxRate: 140,
    unit: 'sq.ft',
    note: 'Blackout / translucent sun control',
  },
];

export const CostEstimator: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<string>('invisible-grill');
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(6);
  const [balconyType, setBalconyType] = useState<string>('Master Balcony');

  const currentSystem = SYSTEMS.find((s) => s.id === selectedSystem) || SYSTEMS[0];
  const sqft = width * height;
  const minCost = sqft * currentSystem.minRate;
  const maxCost = sqft * currentSystem.maxRate;

  const handleSendEstimate = () => {
    const text = `*Kartik Enterprises - Instant Balcony Estimate Request*
📍 Location Type: ${balconyType}
🛠️ Product: ${currentSystem.name}
📐 Dimensions: ${width} ft (Width) x ${height} ft (Height) = ${sqft} sq.ft
💰 Approx Estimate Range: ₹${minCost.toLocaleString('en-IN')} - ₹${maxCost.toLocaleString('en-IN')}
Please confirm date for free laser measurement.`;

    window.open(`https://wa.me/919004019066?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="bg-[#111317] py-16 lg:py-20 text-white relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-bold tracking-widest text-[#FFD60A] uppercase">
            <Calculator className="w-3.5 h-3.5" /> Direct Mumbai Factory Rates
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-white">
            Instant Balcony Budget Estimator
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Select your product and approx balcony dimensions for a fast transparent estimate. Laser measurement and site visit are 100% free across Mumbai & Thane.
          </p>
        </div>

        {/* Interactive Estimator Box */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-white/[0.04] border border-white/10 p-6 sm:p-10 backdrop-blur-sm grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* System Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
                Select Safety or Interior System
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SYSTEMS.map((sys) => (
                  <button
                    key={sys.id}
                    onClick={() => setSelectedSystem(sys.id)}
                    className={`p-3 rounded-xl text-left border text-xs font-bold transition-all flex items-center justify-between ${
                      selectedSystem === sys.id
                        ? 'bg-white text-black border-white shadow-md'
                        : 'bg-white/[0.03] text-white/70 border-white/10 hover:bg-white/[0.07] hover:text-white'
                    }`}
                  >
                    <span className="truncate">{sys.name}</span>
                    {selectedSystem === sys.id && <Check className="w-3.5 h-3.5 text-black shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders: Width & Height */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-white/60">Width (Feet):</span>
                  <span className="text-[#FFD60A] text-sm font-black">{width} ft</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="40"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FFD60A]"
                />
                <div className="flex justify-between text-[10px] text-white/30 mt-1">
                  <span>3 ft</span>
                  <span>40 ft</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-white/60">Height (Feet):</span>
                  <span className="text-[#FFD60A] text-sm font-black">{height} ft</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="15"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FFD60A]"
                />
                <div className="flex justify-between text-[10px] text-white/30 mt-1">
                  <span>2 ft</span>
                  <span>15 ft</span>
                </div>
              </div>
            </div>

            {/* Area Preset Tags */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">
                Quick Presets
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Compact Balcony (8x5 ft)', w: 8, h: 5 },
                  { label: 'Standard Deck (12x6 ft)', w: 12, h: 6 },
                  { label: 'Large Sea-Face Deck (18x8 ft)', w: 18, h: 8 },
                  { label: 'French Window (6x6 ft)', w: 6, h: 6 },
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setWidth(preset.w);
                      setHeight(preset.h);
                      setBalconyType(preset.label.split(' (')[0]);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-white/70 text-[11px] font-medium border border-white/10 transition-all"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full">
            <div>
              <div className="text-[11px] font-bold text-[#FFD60A] uppercase tracking-widest flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5" /> Total Calculated Area
              </div>
              <div className="mt-1 text-4xl sm:text-5xl font-black text-white">
                {sqft} <span className="text-lg font-normal text-white/50">sq.ft</span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-xs text-white/50">Estimated Investment Range:</div>
                <div className="mt-1 text-2xl sm:text-3xl font-black text-[#FFD60A]">
                  ₹{minCost.toLocaleString('en-IN')} - ₹{maxCost.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-white/40 mt-1">
                  Rate approx ₹{currentSystem.minRate} - ₹{currentSystem.maxRate} / sq.ft
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] text-white/70 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-[#FFD60A] inline mr-1.5" />
                {currentSystem.note}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={handleSendEstimate}
                className="w-full rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs sm:text-sm py-3.5 px-4 flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#25D366]/20"
              >
                <MessageSquare className="w-4 h-4" />
                Send This Size To WhatsApp →
              </button>
              <div className="text-center text-[10px] text-white/40 mt-2">
                100% Free Site Visit • 10-Minute Response Time
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

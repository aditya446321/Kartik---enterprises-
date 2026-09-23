import React from 'react';
import { INSTALLATIONS, InstallationProject } from '../data/products';
import { MapPin, Shield, Maximize2, MessageSquare, Sparkles } from 'lucide-react';

interface InstallationsGalleryProps {
  onSelectProject: (img: string, label: string) => void;
}

export const InstallationsGallery: React.FC<InstallationsGalleryProps> = ({ onSelectProject }) => {
  const handleWhatsApp = (project: InstallationProject) => {
    const text = `Hi Kartik Enterprises, I saw your installation project *${project.label}* at ${project.location}. I want similar safety installation for my Mumbai apartment.`;
    window.open(`https://wa.me/919004019066?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="gallery" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/[0.08]">
          <div>
            <div className="text-[11px] tracking-[0.2em] font-bold text-black/40 uppercase">
              ACTUAL MUMBAI RESIDENCES
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
              Installed Across Mumbai High-Rises
            </h2>
            <p className="mt-2 text-sm text-black/55 max-w-xl">
              From sea-facing towers in Bandra West to luxury balcony decks in Vikhroli and high-rise apartments in Powai.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F7F7F3] border border-black/10 text-xs font-bold text-black/70">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB700]" /> 1,500+ Mumbai Homes Secured
            </span>
          </div>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSTALLATIONS.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-3xl overflow-hidden bg-[#F7F7F3] border border-black/10 hover:border-black/25 transition-all duration-300 group flex flex-col hover:shadow-xl"
            >
              {/* Image with zoom overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                <img
                  src={project.img}
                  alt={project.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Tag pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur text-[#FFD60A] font-extrabold text-[10px] tracking-wider border border-white/10 uppercase">
                    {project.tag}
                  </span>
                </div>

                {/* Inspect button */}
                <button
                  onClick={() => onSelectProject(project.img, project.label)}
                  className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                  title="View full photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Card Meta */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-black/50 font-bold uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FFB700]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-lg font-black text-black tracking-tight">
                    {project.label}
                  </h3>
                  <p className="mt-2 text-xs text-black/60 leading-relaxed">
                    {project.specs}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                  <button
                    onClick={() => handleWhatsApp(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-[#FFB700] transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Get Similar Setup</span>
                  </button>
                  <span className="text-[11px] font-semibold text-black/40">Verified Site</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

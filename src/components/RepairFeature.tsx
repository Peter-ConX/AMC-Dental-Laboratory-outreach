import React from 'react';
import { Zap, Phone, Camera, CheckCircle2 } from 'lucide-react';
import { amcConfig } from '../data/config';

export const RepairFeature: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-8 py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-br from-brand-graphite to-brand-charcoal text-white p-8 sm:p-12 lg:p-14 shadow-xl border border-stone-800 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* Configurable Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold tracking-wider uppercase w-fit">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                <span>{amcConfig.features.sameDayBadgeText}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Need a Denture Repaired?
              </h2>

              <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Broken or damaged dentures can be frustrating. AMC Dental Laboratory provides denture repair services for a range of common problems.
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-400 pt-1">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Clean Midline Breaks</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Missing or Snapped Teeth</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Cracked Base Plates</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Loose Metal Clasps</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Emergency Same-Day Repairs</span>
              </div>
            </div>

            {/* Action Buttons Column */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              <a
                href={`tel:${amcConfig.contact.telephoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-teal hover:bg-teal-600 text-white font-bold text-base px-6 py-4 rounded-xl shadow-lg transition-all duration-200 text-center"
              >
                <Phone className="w-5 h-5" />
                <span>Call About a Repair</span>
              </a>

              <a
                href={`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${encodeURIComponent('Hi Mark, I have a broken denture that needs repair. Can I send a photo?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-stone-200 border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 text-center"
              >
                <Camera className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Photo of Damage</span>
              </a>

              <p className="text-[11px] text-stone-400 text-center italic mt-1">
                *{amcConfig.features.sameDayDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

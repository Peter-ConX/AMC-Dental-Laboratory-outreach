import React from 'react';
import { PhoneCall, Search, Wrench, CheckCircle2 } from 'lucide-react';
import { amcConfig } from '../data/config';

export const Process: React.FC = () => {
  return (
    <section id="process-section" className="w-full px-4 sm:px-8 py-16 sm:py-24 bg-brand-ivory border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sandstone text-stone-800 text-xs font-bold tracking-widest uppercase mb-3">
            <span>LABORATORY WORKFLOW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-charcoal tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
            Our straightforward four-step process for getting your denture repaired or appliance prepared.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Step 1 */}
          <div className="relative bg-white p-6 sm:p-7 rounded-2xl border border-brand-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 rounded-xl bg-stone-900 text-white font-mono font-bold text-lg flex items-center justify-center shadow-sm">
                  01
                </span>
                <span className="text-xs font-bold tracking-wider text-stone-400 uppercase font-mono">PHASE 1</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">CONTACT</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Tell AMC what you need help with. Telephone Mark Culling on {amcConfig.contact.telephone} or message via WhatsApp with photos of the break.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-brand-teal">
              <PhoneCall className="w-4 h-4" />
              <span>Direct Technician Triage</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white p-6 sm:p-7 rounded-2xl border border-brand-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 rounded-xl bg-brand-teal text-white font-mono font-bold text-lg flex items-center justify-center shadow-sm">
                  02
                </span>
                <span className="text-xs font-bold tracking-wider text-stone-400 uppercase font-mono">PHASE 2</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">ASSESSMENT</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                The dental appliance is assessed to determine the appropriate next step. We inspect alignment, fracture lines, and structural base integrity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-brand-teal">
              <Search className="w-4 h-4" />
              <span>Physical Inspection at Bench</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white p-6 sm:p-7 rounded-2xl border border-brand-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 rounded-xl bg-stone-900 text-white font-mono font-bold text-lg flex items-center justify-center shadow-sm">
                  03
                </span>
                <span className="text-xs font-bold tracking-wider text-stone-400 uppercase font-mono">PHASE 3</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">CRAFTSMANSHIP</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                The required repair or appliance work is carried out using high-impact laboratory acrylic, precision alignment moulds, and meticulous polishing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-brand-teal">
              <Wrench className="w-4 h-4" />
              <span>40+ Years Bench Craft</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative bg-white p-6 sm:p-7 rounded-2xl border border-brand-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 rounded-xl bg-stone-900 text-white font-mono font-bold text-lg flex items-center justify-center shadow-sm">
                  04
                </span>
                <span className="text-xs font-bold tracking-wider text-stone-400 uppercase font-mono">PHASE 4</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">COLLECTION</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                The completed work is prepared for collection or the next stage of the process, complete with proper handling and maintenance advice.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-brand-teal">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ready for Confident Wear</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

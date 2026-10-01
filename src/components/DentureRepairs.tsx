import React from 'react';
import { Phone, Mail, AlertTriangle, Layers, Wrench, Shield, PlusCircle, CheckCircle2 } from 'lucide-react';
import { amcConfig } from '../data/config';

export const DentureRepairs: React.FC = () => {
  return (
    <section id="denture-repair-section" className="w-full px-4 sm:px-8 py-16 sm:py-24 bg-brand-charcoal text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-sandstone border border-white/15 text-xs font-bold tracking-widest uppercase w-fit">
              <span>SPECIALIST DENTURE WORKSHOP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Broken Denture? <br />
              <span className="text-teal-400">Let's Talk.</span>
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-normal">
              Tell us what has happened and we'll help you understand the next step.
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Accidents happen — dentures slip in the sink, snap during eating, or lose teeth unexpectedly. Rather than attempting risky superglue fixes (which damage dental acrylic and can prevent proper professional repair), contact AMC Dental Laboratory. Mark Culling will assess the damage and explain your options clearly.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${amcConfig.contact.telephoneRaw}`}
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-teal-600 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call {amcConfig.contact.telephone}</span>
              </a>

              <a
                href="#contact-section"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all"
              >
                <Mail className="w-5 h-5 text-teal-400" />
                <span>Request Information</span>
              </a>
            </div>
          </div>

          {/* Right Column: 5 Common Breakage Examples */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Example 1 */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-2.5 text-teal-400 mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  <h3 className="font-bold text-sm text-white">Broken Denture</h3>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Full midline breaks across palate or lower ridge caused by impacts, drops, or bite pressure.
                </p>
              </div>

              {/* Example 2 */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-2.5 text-teal-400 mb-2">
                  <Layers className="w-5 h-5" />
                  <h3 className="font-bold text-sm text-white">Cracked Denture</h3>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Hairline stress fractures that require reinforcing and fusing before complete breakage occurs.
                </p>
              </div>

              {/* Example 3 */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-2.5 text-teal-400 mb-2">
                  <Wrench className="w-5 h-5" />
                  <h3 className="font-bold text-sm text-white">Missing Tooth</h3>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Detached or snapped artificial teeth replaced with shade-matched acrylic teeth aligned to your bite.
                </p>
              </div>

              {/* Example 4 */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-2.5 text-teal-400 mb-2">
                  <Shield className="w-5 h-5" />
                  <h3 className="font-bold text-sm text-white">Loose Component</h3>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Damaged retention clasps or cracked acrylic around existing natural tooth abutments.
                </p>
              </div>

              {/* Example 5 (Wide) */}
              <div className="sm:col-span-2 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-2.5 text-teal-400 mb-2">
                  <PlusCircle className="w-5 h-5" />
                  <h3 className="font-bold text-sm text-white">Partial Denture Repair &amp; Additions</h3>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Specialized repair of chrome-cobalt frameworks or acrylic partials, including adding new teeth following recent natural extractions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

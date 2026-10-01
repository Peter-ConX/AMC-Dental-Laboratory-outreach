import React from 'react';
import { UserCheck, Hammer, CheckCircle2, ArrowRight, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { amcConfig } from '../data/config';

export const About: React.FC = () => {
  return (
    <section id="about-section" className="w-full px-4 sm:px-8 py-16 sm:py-24 bg-brand-ivory border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase (Macro Lab Craft + Mark Culling Profile) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative">
              {/* Primary Laboratory Craft Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-brand-border bg-stone-100">
                <img
                  src="assets/images/macro-craftsmanship.jpg"
                  alt="Technician hands polishing and adjusting an acrylic denture on a precision articulator cast with fine dental laboratory tools"
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Mark Culling Verified Profile Card */}
              <div className="sm:absolute -bottom-8 -right-4 sm:max-w-xs mt-4 sm:mt-0 bg-white p-4 rounded-xl shadow-xl border border-brand-border flex items-center gap-3.5 z-20">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-teal flex-shrink-0 shadow-sm">
                  <img
                    src="assets/images/mark-culling.png"
                    alt="Mark Culling - Senior Dental Technician & Owner at AMC Dental Laboratory Scarborough"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-emerald-800 font-bold text-xs">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Mark Culling</span>
                  </div>
                  <p className="text-[11px] font-semibold text-stone-700 leading-tight">
                    Dental Technician &amp; Owner
                  </p>
                  <p className="text-[10px] text-stone-500 font-mono mt-0.5">
                    40+ Years Denture Specialism
                  </p>
                </div>
              </div>
            </div>

            {/* Bench Work Caption Pill */}
            <div className="p-4 rounded-xl bg-brand-sandstone border border-brand-border flex items-center justify-between sm:mt-6">
              <div className="flex items-center gap-3">
                <Hammer className="w-5 h-5 text-brand-teal" />
                <p className="text-xs sm:text-sm font-semibold text-stone-900">
                  Precision Hand Finishing &amp; Articulation
                </p>
              </div>
              <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest font-bold">BENCH WORK</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 text-stone-800 text-xs font-bold tracking-widest uppercase w-fit">
              <span>ABOUT AMC DENTAL LABORATORY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-charcoal tracking-tight leading-tight">
              Experience You Can Trust. <br />
              <span className="text-brand-teal text-xl sm:text-2xl lg:text-3xl font-semibold">Over Four Decades of Denture Repair Experience.</span>
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
              AMC Dental Laboratory is a local dental laboratory in Scarborough with a long-standing focus on denture repairs and dental appliances.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Led by Senior Dental Technician <strong>Mark Culling</strong>, our laboratory operates at 20 Ramshill Road in Scarborough. Unlike a commercial dental clinic chain or an automated postal depot, AMC functions as a specialist craft workshop. We work directly with local patients needing fast, reliable repairs and with dental practices requiring high-standard prosthetic solutions.
            </p>

            {/* Verified Services Checklist */}
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-teal" /> Same-day denture repairs</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-teal" /> Replacement dentures</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-teal" /> Custom bite &amp; night guards</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-teal" /> Multi-layer sports guards</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-teal" /> Laboratory whitening trays</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-teal" /> Denture tooth additions</span>
            </div>

            {/* Key Craft Values Box */}
            <div className="p-5 sm:p-6 rounded-xl bg-white border-l-4 border-brand-teal border-y border-r border-brand-border shadow-sm">
              <p className="text-stone-800 text-sm sm:text-base font-medium italic leading-relaxed">
                "Precision craftsmanship for comfortable, confident smiles. We take a direct, practical approach to helping local Scarborough customers understand their repair and appliance options."
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${amcConfig.contact.telephoneRaw}`}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-brand-charcoal hover:text-brand-teal group transition-colors"
              >
                <span>Speak Directly to Mark Culling</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

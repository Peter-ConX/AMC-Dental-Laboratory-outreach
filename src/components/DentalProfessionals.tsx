import React from 'react';
import { Handshake, Briefcase, Wrench, Layers, Phone } from 'lucide-react';
import { amcConfig } from '../data/config';

export const DentalProfessionals: React.FC = () => {
  return (
    <section id="b2b-section" className="w-full px-4 sm:px-8 py-16 sm:py-24 bg-brand-charcoal text-white border-t border-stone-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* B2B Image Column */}
        <div className="lg:col-span-6 order-2 lg:order-1 relative">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-stone-900">
            <img
              src="assets/images/b2b-models.jpg"
              alt="Row of precision dental stone cast models and articulators neatly arranged on an organized dental laboratory bench"
              className="w-full h-[360px] sm:h-[440px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3 text-stone-300">
              <Handshake className="w-5 h-5 text-teal-400" />
              <p className="text-xs sm:text-sm font-medium">
                Clinical Prescription &amp; Referral Partnership
              </p>
            </div>
            <span className="text-xs font-mono text-stone-400">B2B LAB SERVICES</span>
          </div>
        </div>

        {/* B2B Text Column */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-sandstone border border-white/15 text-xs font-bold tracking-widest uppercase w-fit">
            <span>FOR DENTAL CLINICIANS &amp; PRACTICES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Working With Dental Professionals
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-normal">
            AMC Dental Laboratory can also support dental professionals requiring laboratory services and dental appliances.
          </p>

          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            We partner with local dental practices across Scarborough and North Yorkshire, providing dependable technical support, reliable turnaround, and meticulous craftsmanship across:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-teal-400 mb-1">
                <Briefcase className="w-4 h-4" />
                <p className="font-bold text-sm text-white">Denture Work</p>
              </div>
              <p className="text-xs text-stone-400">Full &amp; partial prosthetics, custom trays, wax bite blocks &amp; try-ins.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-teal-400 mb-1">
                <Layers className="w-4 h-4" />
                <p className="font-bold text-sm text-white">Dental Appliances</p>
              </div>
              <p className="text-xs text-stone-400">Night guards, retainers, whitening trays, and custom sports shields.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-teal-400 mb-1">
                <Wrench className="w-4 h-4" />
                <p className="font-bold text-sm text-white">Laboratory Repairs</p>
              </div>
              <p className="text-xs text-stone-400">Urgent patient fracture repairs, tooth additions, and relining.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-teal-400 mb-1">
                <Handshake className="w-4 h-4" />
                <p className="font-bold text-sm text-white">Technical Support</p>
              </div>
              <p className="text-xs text-stone-400">Direct case collaboration with Senior Technician Mark Culling.</p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={`tel:${amcConfig.contact.telephoneRaw}`}
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-teal-600 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>Talk to the Laboratory</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

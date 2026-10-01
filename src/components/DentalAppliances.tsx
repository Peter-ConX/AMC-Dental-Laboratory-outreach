import React from 'react';
import { Shield, Moon, ShieldAlert, Sparkles, Phone, CheckCircle2 } from 'lucide-react';
import { amcConfig } from '../data/config';

export const DentalAppliances: React.FC = () => {
  return (
    <section id="appliances-section" className="w-full px-4 sm:px-8 py-16 sm:py-24 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text Column */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sandstone text-stone-800 text-xs font-bold tracking-widest uppercase w-fit">
            <span>DENTAL APPLIANCE FABRICATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-charcoal tracking-tight">
            Protection Designed Around Your Needs
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
            Custom-made mouth guards, night splints, sports guards, and laboratory whitening trays crafted to exact plaster impressions for comfortable fit and reliable oral protection.
          </p>

          <div className="flex flex-col gap-3.5 mt-2">
            {/* Appliance 1 */}
            <div className="p-4 rounded-xl bg-brand-ivory border border-brand-border flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-teal-50 text-brand-teal flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-stone-900">Custom Mouth Guards &amp; Bite Guards</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-0.5">
                  Form-fitted guards designed to shield dentition and existing restorations against involuntary daily pressure or clenching.
                </p>
              </div>
            </div>

            {/* Appliance 2 */}
            <div className="p-4 rounded-xl bg-brand-ivory border border-brand-border flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-teal-50 text-brand-teal flex-shrink-0">
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-stone-900">Night Guards (Bruxism Splints)</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-0.5">
                  Clear thermoformed occlusal night guards providing a resilient protective barrier against nighttime grinding, protecting enamel and easing jaw tension.
                </p>
              </div>
            </div>

            {/* Appliance 3 */}
            <div className="p-4 rounded-xl bg-brand-ivory border border-brand-border flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-teal-50 text-brand-teal flex-shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-stone-900">Sports Guards (Gum Shields)</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-0.5">
                  Multi-laminated impact-absorbing guards for rugby, hockey, football, and martial arts. Superior retention and breathing comfort compared to boil-and-bite kits.
                </p>
              </div>
            </div>

            {/* Appliance 4: Whitening Trays */}
            <div className="p-4 rounded-xl bg-brand-ivory border border-brand-border flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-teal-50 text-brand-teal flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-stone-900">Laboratory Whitening Trays</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-0.5">
                  Scalloped, reservoir-equipped custom thermoformed bleaching trays ensuring optimal gel retention and gum margin comfort.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={`tel:${amcConfig.contact.telephoneRaw}`}
              className="inline-flex items-center gap-2 bg-brand-charcoal text-white hover:bg-brand-teal text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Enquire About Custom Appliances: {amcConfig.contact.telephone}</span>
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-brand-border bg-stone-100">
            <img
              src="assets/images/dental-appliances.jpg"
              alt="Custom sports mouth guard and clear thermoformed night guard splint on plaster dental cast models on a slate stone surface"
              className="w-full h-[400px] sm:h-[480px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-4 p-4 rounded-xl bg-brand-sandstone border border-brand-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-teal" />
              <p className="text-xs sm:text-sm font-semibold text-stone-900">
                Precision Laboratory Thermoforming &amp; Lamination
              </p>
            </div>
            <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest font-bold">CUSTOM FIT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

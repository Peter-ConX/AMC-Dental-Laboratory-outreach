import React from 'react';
import { Phone, MessageSquare, ArrowDown, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { amcConfig } from '../data/config';

export const Hero: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-8 py-8 sm:py-16 lg:py-20 bg-brand-ivory relative overflow-hidden">
      {/* Subtle background radial dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#121820_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Hero Text Column */}
        <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sandstone border border-brand-border/80 w-fit">
            <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
            <span className="text-xs font-bold text-stone-700 uppercase tracking-widest">
              AMC DENTAL LABORATORY · SCARBOROUGH
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-brand-charcoal tracking-tight leading-[1.12]">
            Expert Denture Care, <br className="hidden sm:inline" />
            <span className="text-brand-teal font-extrabold">Crafted With Experience.</span>
          </h1>

          {/* Supporting Subheadline & Copy */}
          <p className="text-base sm:text-lg text-stone-700 max-w-xl leading-relaxed font-normal">
            Specialist denture repairs and dental appliance services from an experienced local dental laboratory in Scarborough.
          </p>

          <p className="text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed">
            From denture repairs and replacements to carefully made dental appliances, AMC Dental Laboratory provides practical, professional solutions for patients and dental professionals.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            {/* Call The Lab */}
            <a
              href={`tel:${amcConfig.contact.telephoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-charcoal text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:bg-brand-teal hover:shadow-lg transition-all duration-200"
            >
              <Phone className="w-5 h-5 text-brand-sandstone" />
              <span>Call {amcConfig.contact.telephone}</span>
            </a>

            {/* WhatsApp Us */}
            <a
              href={`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${encodeURIComponent(amcConfig.contact.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-md hover:bg-emerald-800 transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            {/* Explore Services */}
            <a
              href="#services-section"
              className="inline-flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all"
            >
              <span>Explore Services</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          {/* Subtle Availability Indicator */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-3 text-xs sm:text-sm text-stone-600 border-t border-brand-border/60">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-teal" />
              <span className="font-medium text-stone-800">{amcConfig.contact.serviceArea}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-teal" />
              <span>40+ years denture repair experience</span>
            </div>
          </div>
        </div>

        {/* Hero Image Column */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-border bg-stone-200">
            <img
              src="assets/images/hero-technician.jpg"
              alt="Experienced dental technician meticulously working on an acrylic denture restoration at a dental laboratory bench with precision tools and articulators"
              className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover"
              loading="eager"
            />

            {/* Editorial Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-brand-charcoal/90 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/10 text-white flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-brand-teal text-white flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base text-white leading-tight">Authentic Dental Laboratory Bench</p>
                  <p className="text-xs text-stone-300 mt-0.5">Specialist craftsmanship &amp; precision restoration</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-white/10 text-stone-200 border border-white/15 hidden sm:inline-block">
                SCARBOROUGH, UK
              </span>
            </div>
          </div>

          <div className="hidden sm:block absolute -top-3 -right-3 w-28 h-28 bg-brand-sandstone/60 -z-10 rounded-2xl border border-brand-border"></div>
        </div>
      </div>
    </section>
  );
};

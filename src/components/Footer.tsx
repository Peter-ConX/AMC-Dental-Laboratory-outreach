import React from 'react';
import { Phone, MessageSquare, MapPin, SlidersHorizontal, Sparkles } from 'lucide-react';
import { amcConfig } from '../data/config';

interface FooterProps {
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConfig }) => {
  return (
    <footer className="w-full bg-brand-charcoal text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Summary */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-teal text-white flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-brand-sandstone" />
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">AMC DENTAL LABORATORY</p>
                <p className="text-[11px] font-mono text-stone-400 uppercase tracking-widest">SCARBOROUGH</p>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Specialist denture repairs and dental laboratory services in Scarborough. Senior Dental Technician Mark Culling provides precision craftsmanship for comfortable, confident smiles.
            </p>
            <div className="text-xs text-stone-500 font-mono">
              40+ Years Denture Repair Specialism
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Navigation</h4>
            <ul className="flex flex-col gap-2 text-sm text-stone-400">
              <li><a href="#about-section" className="hover:text-white transition-colors">About Mark Culling &amp; AMC</a></li>
              <li><a href="#services-section" className="hover:text-white transition-colors">Laboratory Services</a></li>
              <li><a href="#denture-repair-section" className="hover:text-white transition-colors">Denture Repairs</a></li>
              <li><a href="#before-after-section" className="hover:text-white transition-colors">Demonstration Case</a></li>
              <li><a href="#process-section" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#appliances-section" className="hover:text-white transition-colors">Dental Appliances</a></li>
              <li><a href="#b2b-section" className="hover:text-white transition-colors">Dental Professionals</a></li>
              <li><a href="#faq-section" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#location-section" className="hover:text-white transition-colors">Location &amp; Hours</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Contact Laboratory</h4>
            <address className="not-italic text-sm text-stone-400 space-y-2">
              <p className="text-white font-medium">
                AMC Dental Laboratory<br />
                20 Ramshill Road<br />
                Scarborough<br />
                YO11 2QE
              </p>
              <p className="pt-1">
                <span className="text-xs font-mono text-stone-500 block">TELEPHONE</span>
                <a href={`tel:${amcConfig.contact.telephoneRaw}`} className="text-white hover:text-teal-400 font-bold text-base transition-colors flex items-center gap-1.5 mt-0.5">
                  <Phone className="w-4 h-4 text-brand-teal" />
                  <span>{amcConfig.contact.telephone}</span>
                </a>
              </p>
              <p>
                <span className="text-xs font-mono text-stone-500 block">WHATSAPP</span>
                <a
                  href={`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${encodeURIComponent(amcConfig.contact.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{amcConfig.contact.whatsapp}</span>
                </a>
              </p>
            </address>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Workshop Hours</h4>
            <div className="text-xs text-stone-400 space-y-1.5 font-mono">
              <div className="flex justify-between"><span>Mon – Fri:</span><span className="text-white">08:30 – 17:30</span></div>
              <div className="flex justify-between"><span>Saturday:</span><span className="text-white">09:00 – 13:00</span></div>
              <div className="flex justify-between"><span>Sunday:</span><span className="text-stone-500">Closed</span></div>
            </div>
            <div className="mt-2 pt-2 border-t border-stone-800 text-[11px] text-stone-500">
              Same-day repairs subject to workload and arrival time. Telephone in advance.
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 AMC Dental Laboratory. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-stone-400">Scarborough, North Yorkshire</span>
            <span>•</span>
            <button
              onClick={onOpenConfig}
              type="button"
              className="text-teal-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>View Business Config Schema</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

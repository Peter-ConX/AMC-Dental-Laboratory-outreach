import React from 'react';
import { Phone, MessageSquare, Navigation, Mail } from 'lucide-react';
import { amcConfig } from '../data/config';

export const MobileBottomBar: React.FC = () => {
  return (
    <div
      id="mobile-bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-brand-border p-2 shadow-2xl"
    >
      <div className="grid grid-cols-4 gap-1.5">
        {/* Call */}
        <a
          href={`tel:${amcConfig.contact.telephoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-brand-charcoal text-white hover:bg-brand-teal transition-colors text-center"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">CALL</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${encodeURIComponent(amcConfig.contact.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition-colors text-center"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">WHATSAPP</span>
        </a>

        {/* Directions */}
        <a
          href={amcConfig.contact.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors text-center"
        >
          <Navigation className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">DIRECTIONS</span>
        </a>

        {/* Enquire */}
        <a
          href="#contact-section"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-teal-50 text-brand-teal border border-teal-200 hover:bg-teal-100 transition-colors text-center"
        >
          <Mail className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">ENQUIRE</span>
        </a>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { amcConfig } from '../data/config';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Expandable / Dismissible Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl border border-stone-200 text-xs text-stone-800 animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>
            Chat directly with <strong>Mark Culling</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 ml-1 p-0.5 rounded focus:outline-none"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${encodeURIComponent(amcConfig.contact.whatsappDefaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mark Culling on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_8px_25px_rgba(5,150,105,0.4)] hover:shadow-[0_12px_30px_rgba(5,150,105,0.5)] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"></span>

        <MessageSquare className="w-7 h-7 relative z-10 transition-transform group-hover:scale-110" />

        {/* Badge Notification dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full z-20"></span>
      </a>
    </div>
  );
};

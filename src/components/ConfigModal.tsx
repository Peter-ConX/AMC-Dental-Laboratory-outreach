import React from 'react';
import { X, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { amcConfig } from '../data/config';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-brand-charcoal/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base">AMC Business Configuration Data</h3>
              <p className="text-xs text-stone-500">Centralized editable architecture for owner &amp; outreach</p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1 bg-stone-900 text-stone-200 font-mono text-xs">
          <pre className="whitespace-pre-wrap">{JSON.stringify(amcConfig, null, 2)}</pre>
        </div>

        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Mark Culling &amp; laboratory details verified</span>
          </div>
          <span className="font-bold text-teal-800">Production Ready</span>
        </div>
      </div>
    </div>
  );
};

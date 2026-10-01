import React, { useState } from 'react';
import { ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { amcConfig } from '../data/config';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="w-full px-4 sm:px-8 py-16 sm:py-24 bg-brand-ivory border-t border-brand-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sandstone text-stone-800 text-xs font-bold tracking-widest uppercase mb-3">
            <span>FREQUENT QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-charcoal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
            Straightforward answers regarding repairs, appliance fabrication, turnaround, and laboratory procedures.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="flex flex-col gap-3.5">
          {amcConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-stone-200/90 rounded-xl overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-4.5 flex items-center justify-between text-left gap-4 hover:bg-stone-50/80 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-stone-900 text-base sm:text-lg flex items-center gap-3">
                    <span className="font-mono text-xs text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-100/60 font-semibold">
                      Q{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-600 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-teal-50 text-teal-800' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Assistance Box */}
        <div className="mt-10 p-6 rounded-2xl bg-brand-sandstone border border-brand-border text-center">
          <h3 className="text-base font-bold text-stone-900 mb-1">Have a specific question not covered here?</h3>
          <p className="text-sm text-stone-600 mb-4">Mark Culling is always pleased to answer queries about broken plates, additions, or appliance fit.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${amcConfig.contact.telephoneRaw}`}
              className="inline-flex items-center gap-2 bg-brand-charcoal text-white hover:bg-brand-teal px-4 py-2.5 rounded-lg text-xs font-bold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {amcConfig.contact.telephone}</span>
            </a>
            <a
              href={`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${encodeURIComponent(amcConfig.contact.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700 text-white hover:bg-emerald-800 px-4 py-2.5 rounded-lg text-xs font-bold transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

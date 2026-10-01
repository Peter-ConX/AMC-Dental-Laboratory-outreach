import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { amcConfig } from '../data/config';

interface NavbarProps {
  isOpenNow: boolean;
  statusText: string;
}

export const Navbar: React.FC<NavbarProps> = ({ isOpenNow, statusText }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border/70 transition-all duration-300 ${
          isScrolled ? 'shadow-md py-0' : 'py-0'
        }`}
      >
        {/* Top Micro Announcement Bar */}
        <div className="bg-brand-charcoal text-stone-300 text-xs py-1.5 px-4 sm:px-8 border-b border-white/5">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-brand-sandstone font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="hidden sm:inline">Scarborough Dental Laboratory</span>
                <span className="sm:hidden">Scarborough Lab</span>
              </span>
              <span className="hidden md:inline text-stone-500">•</span>
              <span className="hidden md:inline text-stone-400">40+ Years of Denture Repair Experience</span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              {/* Live Open Status Pill */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{statusText}</span>
              </div>

              <span className="text-stone-600 hidden sm:inline">|</span>

              {/* Direct Phone in Top Bar */}
              <a
                href={`tel:${amcConfig.contact.telephoneRaw}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-stone-200 hover:text-white font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-tealLight" />
                <span>{amcConfig.contact.telephone}</span>
              </a>

              {/* Direct WhatsApp in Top Bar */}
              <a
                href={`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${encodeURIComponent(amcConfig.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Header Inner */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4 transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo / Brand Name */}
          <a href="#" className="group flex items-center gap-3.5 focus:outline-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-brand-charcoal text-white flex items-center justify-center shadow-sm group-hover:bg-brand-teal transition-colors flex-shrink-0">
              <Sparkles className="w-5 h-5 text-brand-sandstone" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-brand-charcoal group-hover:text-brand-teal transition-colors leading-tight">
                AMC DENTAL LABORATORY
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-stone-500 uppercase tracking-widest leading-none mt-0.5">
                Denture Specialist · Scarborough
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-stone-700" aria-label="Main Navigation">
            <a href="#about-section" className="hover:text-brand-teal transition-colors py-1">About</a>
            <a href="#services-section" className="hover:text-brand-teal transition-colors py-1">Services</a>
            <a href="#denture-repair-section" className="hover:text-brand-teal transition-colors py-1 flex items-center gap-1.5 text-stone-900 font-bold">
              <span>Denture Repairs</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            </a>
            <a href="#before-after-section" className="hover:text-brand-teal transition-colors py-1">Results</a>
            <a href="#process-section" className="hover:text-brand-teal transition-colors py-1">Our Process</a>
            <a href="#appliances-section" className="hover:text-brand-teal transition-colors py-1">Appliances</a>
            <a href="#faq-section" className="hover:text-brand-teal transition-colors py-1">FAQs</a>
            <a href="#location-section" className="hover:text-brand-teal transition-colors py-1">Contact</a>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${amcConfig.contact.telephoneRaw}`}
              className="inline-flex items-center gap-2 bg-brand-charcoal text-white hover:bg-brand-teal font-semibold text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-brand-tealLight" />
              <span>Call {amcConfig.contact.telephone}</span>
            </a>

            <a
              href={`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${encodeURIComponent(amcConfig.contact.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700 text-white hover:bg-emerald-800 font-semibold text-sm px-3.5 py-2.5 rounded-lg shadow-sm transition-all duration-200"
              title="Message Mark Culling on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button & Quick Call */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${amcConfig.contact.telephoneRaw}`}
              className="p-2 rounded-lg bg-brand-charcoal text-white hover:bg-brand-teal transition-colors"
              aria-label="Call AMC Dental Laboratory"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${encodeURIComponent(amcConfig.contact.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
              aria-label="WhatsApp AMC Dental Laboratory"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="p-2 rounded-lg bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors focus:outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm z-50 transition-opacity"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-stone-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-brand-charcoal text-white flex items-center justify-center font-bold text-xs">
                AMC
              </div>
              <span className="font-bold text-stone-900 text-sm">Dental Laboratory</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              type="button"
              className="p-2 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 py-6" aria-label="Mobile Navigation Drawer">
            <a
              href="#about-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-stone-800 font-semibold hover:bg-stone-100 transition-colors"
            >
              About Mark Culling &amp; AMC
            </a>
            <a
              href="#services-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-stone-800 font-semibold hover:bg-stone-100 transition-colors"
            >
              Laboratory Services
            </a>
            <a
              href="#denture-repair-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-teal-800 font-bold bg-teal-50/70 border border-teal-100/60"
            >
              Denture Repairs
            </a>
            <a
              href="#before-after-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-stone-800 font-semibold hover:bg-stone-100 transition-colors"
            >
              Repair Demonstration
            </a>
            <a
              href="#process-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-stone-800 font-semibold hover:bg-stone-100 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#appliances-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-stone-800 font-semibold hover:bg-stone-100 transition-colors"
            >
              Dental Appliances
            </a>
            <a
              href="#b2b-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-stone-800 font-semibold hover:bg-stone-100 transition-colors"
            >
              For Dental Professionals
            </a>
            <a
              href="#faq-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-stone-800 font-semibold hover:bg-stone-100 transition-colors"
            >
              Frequently Asked Questions
            </a>
            <a
              href="#location-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-stone-800 font-semibold hover:bg-stone-100 transition-colors"
            >
              Location &amp; Hours
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-stone-200 flex flex-col gap-3">
          <div className="text-xs text-stone-500 mb-1">
            <p className="font-medium text-stone-800">20 Ramshill Road, Scarborough</p>
            <p>Mon-Fri 08:30–17:30 · Sat 09:00–13:00</p>
          </div>
          <a
            href={`tel:${amcConfig.contact.telephoneRaw}`}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-charcoal text-white font-semibold text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call {amcConfig.contact.telephone}</span>
          </a>
          <a
            href={`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${encodeURIComponent(amcConfig.contact.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 text-white font-semibold text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Mark Culling</span>
          </a>
        </div>
      </aside>
    </>
  );
};

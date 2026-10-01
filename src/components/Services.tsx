import React, { useState } from 'react';
import {
  Wrench,
  Smile,
  RefreshCw,
  PlusCircle,
  Crown,
  Shield,
  Moon,
  ShieldAlert,
  Heart,
  Zap,
  Settings,
  Timer,
  ArrowRight,
  Phone,
  HelpCircle
} from 'lucide-react';
import { amcConfig, ServiceItem } from '../data/config';

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'repairs' | 'dentures' | 'appliances'>('all');

  const filteredServices = activeFilter === 'all'
    ? amcConfig.services.filter(s => s.enabled)
    : amcConfig.services.filter(s => s.enabled && s.category === activeFilter);

  const getServiceIcon = (id: string) => {
    const className = "w-5 h-5";
    switch (id) {
      case 'denture-repairs':
        return <Wrench className={className} />;
      case 'dentures':
        return <Smile className={className} />;
      case 'denture-replacement':
        return <RefreshCw className={className} />;
      case 'adding-teeth':
        return <PlusCircle className={className} />;
      case 'dental-crowns':
        return <Crown className={className} />;
      case 'mouth-guards':
        return <Shield className={className} />;
      case 'night-guards':
        return <Moon className={className} />;
      case 'sports-guards':
        return <ShieldAlert className={className} />;
      case 'dental-comfort-bases':
        return <Heart className={className} />;
      case 'emergency-repairs':
        return <Zap className={className} />;
      case 'partial-repairs':
        return <Settings className={className} />;
      case 'same-day-services':
        return <Timer className={className} />;
      default:
        return <Wrench className={className} />;
    }
  };

  return (
    <section id="services-section" className="w-full px-4 sm:px-8 py-16 sm:py-24 bg-brand-sandstone/40 border-t border-brand-border">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold tracking-widest uppercase mb-3">
              <span>LABORATORY WORKBENCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-charcoal tracking-tight">
              Dental Laboratory Services
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
              Every service is carried out with specialist care. Filter by category or call our laboratory to confirm current turnaround and specific appliance requirements.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/80 rounded-xl border border-stone-300/70" role="tablist">
            <button
              onClick={() => setActiveFilter('all')}
              type="button"
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-100'
              }`}
            >
              All Services ({amcConfig.services.filter(s => s.enabled).length})
            </button>
            <button
              onClick={() => setActiveFilter('repairs')}
              type="button"
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'repairs'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-100'
              }`}
            >
              Repairs &amp; Emergency
            </button>
            <button
              onClick={() => setActiveFilter('dentures')}
              type="button"
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'dentures'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-100'
              }`}
            >
              Denture Care
            </button>
            <button
              onClick={() => setActiveFilter('appliances')}
              type="button"
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'appliances'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-100'
              }`}
            >
              Dental Appliances
            </button>
          </div>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const actionHref = service.action === 'call' ? `tel:${amcConfig.contact.telephoneRaw}` : "#contact-section";

            return (
              <article
                key={service.id}
                className="group relative bg-white rounded-xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-teal-700/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="font-mono text-xs font-semibold text-teal-800 tracking-wider px-2 py-0.5 rounded bg-teal-50 border border-teal-100">
                      {service.number}
                    </span>
                    {service.badge ? (
                      <span className={`text-[11px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full ${
                        service.badge.includes('Emergency') || service.badge.includes('Requested')
                          ? 'bg-amber-100 text-amber-900 border border-amber-200'
                          : 'bg-stone-100 text-stone-700 border border-stone-200'
                      }`}>
                        {service.badge}
                      </span>
                    ) : (
                      <span className="text-[11px] text-stone-400 uppercase tracking-wider">{service.categoryLabel}</span>
                    )}
                  </div>

                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-stone-100 group-hover:bg-teal-800 group-hover:text-white text-teal-800 flex items-center justify-center flex-shrink-0 transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    <h3 className="text-lg font-semibold text-stone-900 group-hover:text-teal-900 transition-colors leading-snug">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                  <span className="text-xs text-stone-500 font-medium">
                    {service.action === 'call' ? 'Direct phone triage' : 'Enquiry or walk-in'}
                  </span>
                  <a
                    href={actionHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Assistance Callout */}
        <div className="mt-4 p-5 sm:p-6 rounded-xl bg-white border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-teal-50 text-brand-teal flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-sm text-stone-900">Not sure which service or repair your appliance needs?</p>
              <p className="text-xs text-stone-500">Bring it into our Ramshill Road laboratory or telephone Mark Culling for practical advice.</p>
            </div>
          </div>
          <a
            href={`tel:${amcConfig.contact.telephoneRaw}`}
            className="inline-flex items-center gap-2 text-xs font-bold bg-brand-charcoal text-white hover:bg-brand-teal px-4 py-2.5 rounded-lg transition-colors flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Ask a Technician: {amcConfig.contact.telephone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

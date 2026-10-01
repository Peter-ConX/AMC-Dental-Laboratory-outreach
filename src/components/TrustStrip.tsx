import React from 'react';
import { Award, MapPin, Wrench, Headphones } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="w-full bg-brand-sandstone/70 border-y border-brand-border py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Item 1 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-brand-border/80 shadow-sm">
            <div className="p-2.5 rounded-lg bg-stone-100 text-brand-teal flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-0.5">40+ Years Experience</h2>
              <p className="text-xs text-stone-600 leading-snug font-medium">Decades of specialized focus in denture repairs &amp; appliance craft.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-brand-border/80 shadow-sm">
            <div className="p-2.5 rounded-lg bg-stone-100 text-brand-teal flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-0.5">Local Scarborough Lab</h2>
              <p className="text-xs text-stone-600 leading-snug font-medium">20 Ramshill Road workshop serving our local community directly.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-brand-border/80 shadow-sm">
            <div className="p-2.5 rounded-lg bg-stone-100 text-brand-teal flex-shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-0.5">Denture &amp; Appliance Craft</h2>
              <p className="text-xs text-stone-600 leading-snug font-medium">Specialist bench solutions: repairs, additions, night &amp; sports guards.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-brand-border/80 shadow-sm">
            <div className="p-2.5 rounded-lg bg-stone-100 text-brand-teal flex-shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-0.5">Call for Direct Advice</h2>
              <p className="text-xs text-stone-600 leading-snug font-medium">Speak directly to Mark Culling on 01733 300704 or WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

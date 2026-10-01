import React from 'react';
import { Award, Crosshair, MapPin, UserCheck } from 'lucide-react';

export const WhyAMC: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-8 py-16 sm:py-24 bg-brand-sandstone/50 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold tracking-widest uppercase mb-3">
            <span>CORE VALUES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-charcoal tracking-tight">
            Why Choose AMC Dental Laboratory?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
            Built around four decades of dedicated service to patients and dental practices in Scarborough.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Pillar 1 */}
          <div className="p-7 rounded-2xl bg-white border border-brand-border shadow-sm flex flex-col justify-between hover:border-teal-700/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-brand-teal uppercase tracking-widest">PILLAR 01</span>
              <h3 className="text-lg font-bold text-stone-900 mt-2 mb-3">EXPERIENCE</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                More than four decades of experience in denture repairs. We understand the physical strains placed on dental appliances and know how to achieve lasting restorations.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-2xl bg-white border border-brand-border shadow-sm flex flex-col justify-between hover:border-teal-700/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-4">
                <Crosshair className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-brand-teal uppercase tracking-widest">PILLAR 02</span>
              <h3 className="text-lg font-bold text-stone-900 mt-2 mb-3">PRECISION</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Careful laboratory craftsmanship focused on the details. From precise bite articulation to smooth, tissue-friendly acrylic finishes, quality is never rushed.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-2xl bg-white border border-brand-border shadow-sm flex flex-col justify-between hover:border-teal-700/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-brand-teal uppercase tracking-widest">PILLAR 03</span>
              <h3 className="text-lg font-bold text-stone-900 mt-2 mb-3">LOCAL</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                A Scarborough-based laboratory serving local customers on Ramshill Road. Accessible, friendly, and deeply rooted in our coastal North Yorkshire community.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-7 rounded-2xl bg-white border border-brand-border shadow-sm flex flex-col justify-between hover:border-teal-700/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-brand-teal uppercase tracking-widest">PILLAR 04</span>
              <h3 className="text-lg font-bold text-stone-900 mt-2 mb-3">PERSONAL</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                A direct, practical approach to helping customers understand their options. You speak directly with Mark Culling, the technician performing the work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

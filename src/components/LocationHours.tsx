import React from 'react';
import { Clock, MapPin, ExternalLink, Phone, Navigation, Calendar } from 'lucide-react';
import { amcConfig } from '../data/config';

interface LocationHoursProps {
  isOpenNow: boolean;
  statusText: string;
}

export const LocationHours: React.FC<LocationHoursProps> = ({ isOpenNow, statusText }) => {
  const todayDayName = new Date().toLocaleDateString('en-GB', { weekday: 'long', timeZone: 'Europe/London' });

  return (
    <section id="location-section" className="w-full px-4 sm:px-8 py-16 sm:py-24 bg-brand-sandstone/30 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold tracking-widest uppercase mb-3">
            <span>SCARBOROUGH WORKSHOP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-charcoal tracking-tight">
            Find AMC Dental Laboratory
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
            Conveniently situated on Ramshill Road in Scarborough, North Yorkshire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Opening Hours Table & Contact Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-border shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-brand-teal" />
                  <h3 className="font-bold text-base text-stone-900">Opening Hours</h3>
                </div>
                {/* Dynamic Status Badge */}
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                  isOpenNow
                    ? 'bg-emerald-500/15 text-emerald-800 border border-emerald-500/25'
                    : 'bg-amber-500/15 text-amber-900 border border-amber-500/25'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-600 animate-pulse' : 'bg-amber-600'}`}></span>
                  <span>{statusText}</span>
                </span>
              </div>

              {/* Schedule Table */}
              <table className="w-full text-xs sm:text-sm">
                <tbody>
                  {amcConfig.openingHours.map((row) => {
                    const isToday = row.day.toLowerCase() === todayDayName.toLowerCase();

                    return (
                      <tr
                        key={row.day}
                        className={`border-b border-stone-200/70 transition-colors ${
                          isToday ? 'bg-teal-50/80 font-semibold text-slate-900' : 'text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        <td className="py-2.5 px-3 flex items-center gap-2">
                          <span>{row.day}</span>
                          {isToday && (
                            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-teal-800 text-white">
                              Today
                            </span>
                          )}
                        </td>
                        <td className={`py-2.5 px-3 text-right ${row.isClosed ? 'text-stone-400 italic' : ''}`}>
                          {row.display}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>Direct Technician Service</span>
                <span className="text-brand-teal font-semibold">Walk-ins welcome</span>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-border shadow-sm">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-stone-900">AMC Dental Laboratory</h3>
                  <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                    {amcConfig.contact.postalAddress.line1}<br />
                    {amcConfig.contact.postalAddress.town}<br />
                    {amcConfig.contact.postalAddress.postcode}<br />
                    {amcConfig.contact.postalAddress.country}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <a
                  href={`tel:${amcConfig.contact.telephoneRaw}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-brand-charcoal text-white font-semibold text-xs hover:bg-brand-teal transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{amcConfig.contact.telephone}</span>
                </a>
                <a
                  href={amcConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-stone-100 text-stone-800 hover:bg-stone-200 font-semibold text-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Stylized Map Canvas */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-brand-border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-base text-stone-900">Laboratory Location Map</h3>
                <p className="text-xs text-stone-500">Ramshill Road, South Cliff area of Scarborough</p>
              </div>
              <a
                href={amcConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-teal hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Stylized Map */}
            <div className="relative rounded-xl overflow-hidden bg-stone-100 aspect-[16/10] border border-stone-200 flex items-center justify-center">
              <svg className="w-full h-full text-stone-300" viewBox="0 0 600 375" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M480 0 C450 100, 520 220, 470 375 L600 375 L600 0 Z" fill="#e8f3f4" />
                <text x="520" y="180" fill="#4d8c89" fontSize="12" fontWeight="600" letterSpacing="1">NORTH SEA</text>
                <text x="500" y="200" fill="#75a8a6" fontSize="10">South Bay, Scarborough</text>

                <line x1="280" y1="0" x2="340" y2="375" stroke="#d5d0c5" strokeWidth="12" strokeLinecap="round" />
                <line x1="280" y1="0" x2="340" y2="375" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
                
                <line x1="40" y1="140" x2="520" y2="90" stroke="#d5d0c5" strokeWidth="8" />
                <line x1="40" y1="140" x2="520" y2="90" stroke="#ffffff" strokeWidth="5" />

                <line x1="20" y1="260" x2="480" y2="240" stroke="#d5d0c5" strokeWidth="7" />
                <line x1="20" y1="260" x2="480" y2="240" stroke="#ffffff" strokeWidth="4" />

                <line x1="120" y1="0" x2="160" y2="375" stroke="#e0dbd0" strokeWidth="5" />

                <text x="325" y="60" fill="#6b7280" fontSize="10" fontWeight="600" transform="rotate(78 325 60)">RAMSHILL ROAD (A165)</text>
                <text x="140" y="110" fill="#6b7280" fontSize="9" transform="rotate(-6 140 110)">Valley Road</text>
                <text x="100" y="275" fill="#6b7280" fontSize="9">Westbourne Grove</text>
                <text x="210" y="340" fill="#9ca3af" fontSize="9">South Cliff</text>

                <g transform="translate(305, 175)">
                  <circle cx="0" cy="0" r="18" fill="#246663" fillOpacity="0.2">
                    <animate attributeName="r" values="14;24;14" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" values="0.3;0.05;0.3" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="8" fill="#246663" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
                </g>
              </svg>

              <div className="absolute bottom-5 left-5 bg-brand-charcoal text-white p-3.5 rounded-xl shadow-xl border border-white/10 max-w-[280px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <p className="font-bold text-xs text-white">20 Ramshill Road</p>
                </div>
                <p className="text-[11px] text-stone-300">Scarborough, YO11 2QE</p>
                <p className="text-[10px] text-stone-400 mt-1">Ground level laboratory · Mark Culling</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-stone-100">
              <span className="text-xs text-stone-600">Free advice on access, parking, or public transit routes.</span>
              <a
                href={amcConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-brand-teal text-white hover:bg-teal-700 text-xs font-bold px-4 py-2 rounded-lg transition-colors flex-shrink-0"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving / Walking Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

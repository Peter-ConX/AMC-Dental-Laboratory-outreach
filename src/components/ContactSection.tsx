import React, { useState } from 'react';
import { Phone, MessageSquare, Send, Info, CheckCircle2, MapPin, ArrowRight } from 'lucide-react';
import { amcConfig } from '../data/config';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [whatsappHref, setWhatsappHref] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.service) return;

    setSubmitted(true);
    const waText = encodeURIComponent(
      `Hi Mark Culling, my name is ${formData.fullName} (${formData.phone}).\nI need help with: ${formData.service}.\nDetails: ${formData.message || 'Please call me back.'}`
    );
    setWhatsappHref(`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${waText}`);
  };

  return (
    <section id="contact-section" className="w-full px-4 sm:px-8 py-16 sm:py-24 bg-brand-graphite text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Pitch & Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-sandstone border border-white/15 text-xs font-bold tracking-widest uppercase w-fit">
              <span>GET IN TOUCH DIRECTLY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Need Help With a Denture?
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-normal">
              Speak directly with Mark Culling at AMC Dental Laboratory about your repair or dental appliance enquiry.
            </p>

            <p className="text-stone-400 text-sm leading-relaxed">
              We know how urgent a broken denture can be. Whether you are dealing with a fractured plate, a detached tooth, or wish to discuss a custom guard, our technicians are here to help.
            </p>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-3.5 pt-2">
              <a
                href={`tel:${amcConfig.contact.telephoneRaw}`}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400/50 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">Telephone Laboratory</span>
                    <span className="font-bold text-base text-white group-hover:text-teal-300 transition-colors">
                      {amcConfig.contact.telephone}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href={`https://wa.me/${amcConfig.contact.whatsappRaw}?text=${encodeURIComponent(amcConfig.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-emerald-300 uppercase tracking-wider block">WhatsApp Direct Chat</span>
                    <span className="font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
                      {amcConfig.contact.whatsapp}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-400 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <span>{amcConfig.contact.postalAddress.formatted}, United Kingdom</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white text-stone-900 rounded-2xl p-7 sm:p-9 shadow-2xl border border-stone-200">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-charcoal mb-1">
              Send a General Enquiry
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mb-6">
              Fill in your details below and Mark Culling will respond promptly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-base">Enquiry Received</h4>
                    <p className="text-xs sm:text-sm mt-0.5">
                      Thank you, {formData.fullName}. Mark Culling at AMC Dental Laboratory will contact you shortly on {formData.phone}.
                    </p>
                  </div>
                </div>

                {whatsappHref && (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-4 py-3 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send These Details to Mark via WhatsApp</span>
                  </a>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone-number" className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone-number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 07123 456789"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email-address" className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email-address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service-select" className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                    What Can We Help With? <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="service-select"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none bg-white transition-colors"
                  >
                    <option value="" disabled>Please select an option...</option>
                    <option value="Denture Repair">Denture Repair (Broken / Cracked / Snapped)</option>
                    <option value="New Denture">New Denture</option>
                    <option value="Replacement Denture">Replacement Denture</option>
                    <option value="Adding Teeth to Existing Denture">Adding Teeth to Existing Denture</option>
                    <option value="Bite Guard / Mouth Guard">Bite Guard / Mouth Guard</option>
                    <option value="Night Guard">Night Guard (Grinding / Bruxism)</option>
                    <option value="Sports Guard">Sports Guard</option>
                    <option value="Whitening Trays">Laboratory Whitening Trays</option>
                    <option value="Other">Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="enquiry-message" className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                    Brief Message
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the break or what you require..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors"
                  />
                </div>

                {/* Medical Disclaimer */}
                <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-stone-600 text-xs leading-relaxed flex items-start gap-2">
                  <Info className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Privacy Note:</strong> Please do not include sensitive medical information or patient-identifiable clinical records in this general enquiry form.
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-teal text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { amcConfig } from './data/config';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { RepairFeature } from './components/RepairFeature';
import { About } from './components/About';
import { Services } from './components/Services';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { DentureRepairs } from './components/DentureRepairs';
import { Process } from './components/Process';
import { WhyAMC } from './components/WhyAMC';
import { DentalAppliances } from './components/DentalAppliances';
import { DentalProfessionals } from './components/DentalProfessionals';
import { FAQ } from './components/FAQ';
import { LocationHours } from './components/LocationHours';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ConfigModal } from './components/ConfigModal';

export const App: React.FC = () => {
  const [configModalOpen, setConfigModalOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [statusText, setStatusText] = useState('Checking hours...');

  useEffect(() => {
    // UK Time Calculation
    const now = new Date();
    const ukDayName = now.toLocaleDateString('en-GB', { weekday: 'long', timeZone: 'Europe/London' });
    const timeParts = now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour12: false }).split(':');
    const currentHour = parseInt(timeParts[0], 10);
    const currentMin = parseInt(timeParts[1], 10);
    const currentTimeMinutes = currentHour * 60 + currentMin;

    const todayConfig = amcConfig.openingHours.find(h => h.day.toLowerCase() === ukDayName.toLowerCase()) || {
      isClosed: true,
      display: 'Closed',
      open: null,
      close: null,
      day: ukDayName
    };

    if (!todayConfig.isClosed && todayConfig.open && todayConfig.close) {
      const [openH, openM] = todayConfig.open.split(':').map(Number);
      const [closeH, closeM] = todayConfig.close.split(':').map(Number);
      const openMinutes = openH * 60 + openM;
      const closeMinutes = closeH * 60 + closeM;

      if (currentTimeMinutes >= openMinutes && currentTimeMinutes < closeMinutes) {
        setIsOpenNow(true);
        setStatusText(`Open Now · Closes ${todayConfig.close}`);
      } else if (currentTimeMinutes < openMinutes) {
        setIsOpenNow(false);
        setStatusText(`Closed · Opens today ${todayConfig.open}`);
      } else {
        setIsOpenNow(false);
        setStatusText('Closed for Today');
      }
    } else {
      setIsOpenNow(false);
      setStatusText('Closed Today (Sunday)');
    }
  }, []);

  return (
    <div className="bg-brand-ivory text-brand-charcoal font-sans antialiased selection:bg-brand-teal selection:text-white pb-20 lg:pb-0">
      {/* 01. Sticky Navigation */}
      <Navbar isOpenNow={isOpenNow} statusText={statusText} />

      <main className="w-full pt-28 sm:pt-32">
        {/* 02. Hero Section */}
        <Hero />

        {/* 03. Trust Strip */}
        <TrustStrip />

        {/* 04. Featured Denture Repair CTA */}
        <RepairFeature />

        {/* 05. About Section featuring Mark Culling */}
        <About />

        {/* 06. Services Section */}
        <Services />

        {/* 07. Before / After Interactive Slider */}
        <BeforeAfterSlider />

        {/* 08. Dark Denture Repair Section */}
        <DentureRepairs />

        {/* 09. Our Process Timeline */}
        <Process />

        {/* 10. Why AMC 4 Pillars */}
        <WhyAMC />

        {/* 11. Dental Appliances Section */}
        <DentalAppliances />

        {/* 12. Working with Dental Professionals (B2B) */}
        <DentalProfessionals />

        {/* 13. Frequently Asked Questions */}
        <FAQ />

        {/* 14. Location & Opening Hours */}
        <LocationHours isOpenNow={isOpenNow} statusText={statusText} />

        {/* 15. Final Call To Action & Contact Form */}
        <ContactSection />
      </main>

      {/* 16. Footer */}
      <Footer onOpenConfig={() => setConfigModalOpen(true)} />

      {/* 17. Mobile-First Sticky Bottom Action Bar */}
      <MobileBottomBar />

      {/* 18. Config Modal Inspector */}
      <ConfigModal isOpen={configModalOpen} onClose={() => setConfigModalOpen(false)} />
    </div>
  );
};
export default App;

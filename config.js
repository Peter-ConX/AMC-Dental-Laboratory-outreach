/**
 * AMC DENTAL LABORATORY - Centralized Configuration Data
 * 
 * IMPORTANT FOR CLIENT / OWNER:
 * This file contains all business data, contact numbers, opening hours,
 * services, and feature toggles. You can easily modify any value below
 * before publishing without editing HTML or templates.
 */

const amcConfig = {
  // Core Brand Information
  brand: {
    name: "AMC Dental Laboratory",
    shortName: "AMC Dental Lab",
    tagline: "Precision craftsmanship for comfortable, confident smiles.",
    experienceHeadline: "40+ Years of Denture Repair Experience",
    experienceYears: "40+",
    foundedNote: "Over four decades of dedicated laboratory craftsmanship in Scarborough.",
    regNote: "Registered UK Dental Laboratory · Operating in Scarborough, North Yorkshire"
  },

  // Primary Contact Channels
  contact: {
    telephone: "01733 300704",
    telephoneRaw: "01733300704", // for tel: links
    whatsapp: "+44 7449 644917",
    whatsappRaw: "447449644917", // for wa.me links
    whatsappDefaultMessage: "Hello AMC Dental Laboratory, I would like to enquire about a denture repair / dental appliance.",
    email: "enquiries@amcdentallab.co.uk", // Editable placeholder
    postalAddress: {
      line1: "20 Ramshill Road",
      town: "Scarborough",
      county: "North Yorkshire",
      postcode: "YO11 2QE",
      country: "United Kingdom",
      formatted: "20 Ramshill Road, Scarborough, YO11 2QE"
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=AMC+Dental+Laboratory+20+Ramshill+Road+Scarborough+YO11+2QE",
    serviceArea: "Serving Scarborough & surrounding North Yorkshire areas"
  },

  // Public Opening Hours
  // Configured in 24h format for live status calculation (UK local time)
  openingHours: [
    { day: "Monday", open: "08:30", close: "17:30", display: "08:30 – 17:30", isClosed: false },
    { day: "Tuesday", open: "08:30", close: "17:30", display: "08:30 – 17:30", isClosed: false },
    { day: "Wednesday", open: "08:30", close: "17:30", display: "08:30 – 17:30", isClosed: false },
    { day: "Thursday", open: "08:30", close: "17:30", display: "08:30 – 17:30", isClosed: false },
    { day: "Friday", open: "08:30", close: "17:30", display: "08:30 – 17:30", isClosed: false },
    { day: "Saturday", open: "09:00", close: "13:00", display: "09:00 – 13:00", isClosed: false },
    { day: "Sunday", open: null, close: null, display: "Closed", isClosed: true }
  ],

  // Feature Flags & Badges
  features: {
    sameDayRepairAvailable: true,
    sameDayBadgeText: "SAME-DAY REPAIR AVAILABLE",
    sameDayDisclaimer: "Subject to laboratory assessment, severity of damage, and morning arrival.",
    enableOnlineEnquiryForm: true,
    enableWhatsAppDirectChat: true,
    enableBeforeAfterSlider: true
  },

  // Trust Strip Highlights
  trustStrip: [
    {
      icon: "workspace_premium",
      title: "40+ YEARS EXPERIENCE",
      subtitle: "Long-standing focus on denture repairs"
    },
    {
      icon: "location_on",
      title: "LOCAL SCARBOROUGH LAB",
      subtitle: "20 Ramshill Road, YO11 2QE"
    },
    {
      icon: "precision_manufacturing",
      title: "DENTURE & APPLIANCE CRAFT",
      subtitle: "Custom-made laboratory solutions"
    },
    {
      icon: "support_agent",
      title: "CALL FOR ADVICE",
      subtitle: "Direct technician telephone triage"
    }
  ],

  // 12 Laboratory Services
  // Each service can be toggled enabled: true/false by the owner
  services: [
    {
      id: "denture-repairs",
      number: "01",
      name: "Denture Repairs",
      category: "repairs",
      categoryLabel: "Denture Care & Repairs",
      badge: "Most Requested",
      description: "Fast, reliable laboratory repairs for fractured, cracked, or split acrylic dentures. Re-aligned and reinforced by experienced technicians.",
      enabled: true,
      ctaText: "Call About a Repair",
      action: "call"
    },
    {
      id: "dentures",
      number: "02",
      name: "Dentures",
      category: "dentures",
      categoryLabel: "Denture Services",
      badge: "Laboratory Craft",
      description: "Meticulously crafted complete acrylic dental prosthetics designed for optimal anatomical retention, natural appearance, and everyday comfort.",
      enabled: true,
      ctaText: "Discuss New Dentures",
      action: "call"
    },
    {
      id: "denture-replacement",
      number: "03",
      name: "Denture Replacement",
      category: "dentures",
      categoryLabel: "Denture Services",
      badge: null,
      description: "Laboratory duplication and modern replacement of worn, stained, or ill-fitting existing dentures using high-impact dental acrylics.",
      enabled: true,
      ctaText: "Enquire on Replacements",
      action: "enquire"
    },
    {
      id: "adding-teeth",
      number: "04",
      name: "Adding Teeth to Existing Dentures",
      category: "repairs",
      categoryLabel: "Denture Care & Repairs",
      badge: "Fast Turnaround",
      description: "Laboratory addition of extra prosthetic teeth or retention clasps to your existing partial denture following natural tooth extractions.",
      enabled: true,
      ctaText: "Ask About Additions",
      action: "call"
    },
    {
      id: "dental-crowns",
      number: "05",
      name: "Dental Crowns",
      category: "clinical",
      categoryLabel: "Clinical Lab Services",
      badge: "For Clinicians",
      description: "Precision-milled and layered crown restorations crafted to prescription specifications for local dental practices and clinical partners.",
      enabled: true,
      ctaText: "Clinical Lab Enquiries",
      action: "enquire"
    },
    {
      id: "mouth-guards",
      number: "06",
      name: "Mouth Guards",
      category: "appliances",
      categoryLabel: "Dental Appliances",
      badge: "Protective",
      description: "Custom-formed oral guards providing essential structural protection against trauma, daytime clenching, and physical wear.",
      enabled: true,
      ctaText: "Order Custom Guard",
      action: "enquire"
    },
    {
      id: "night-guards",
      number: "07",
      name: "Night Guards",
      category: "appliances",
      categoryLabel: "Dental Appliances",
      badge: "Comfort Fit",
      description: "Durable, clear thermoformed occlusal night guards designed to protect natural teeth and dental restorations from nighttime bruxism and grinding.",
      enabled: true,
      ctaText: "Ask About Night Guards",
      action: "enquire"
    },
    {
      id: "sports-guards",
      number: "08",
      name: "Sports Guards",
      category: "appliances",
      categoryLabel: "Dental Appliances",
      badge: "Heavy Duty",
      description: "Multi-laminated impact-absorbing gum shields crafted from player dental impressions for rugby, hockey, martial arts, and contact sports.",
      enabled: true,
      ctaText: "Get a Sports Guard",
      action: "enquire"
    },
    {
      id: "dental-comfort-bases",
      number: "09",
      name: "Dental Comfort Bases",
      category: "dentures",
      categoryLabel: "Denture Services",
      badge: "Sensitive Gums",
      description: "Application of permanent resilient soft silicone liners to denture fitting surfaces, delivering cushioned relief for thin or resorbed ridges.",
      enabled: true,
      ctaText: "Discuss Soft Liners",
      action: "call"
    },
    {
      id: "emergency-repairs",
      number: "10",
      name: "Emergency Denture Repairs",
      category: "repairs",
      categoryLabel: "Denture Care & Repairs",
      badge: "Urgent Attention",
      description: "Priority drop-in repair attention for sudden unexpected fractures before important events, meals, or social commitments.",
      enabled: true,
      ctaText: "Emergency Call: 01733 300704",
      action: "call"
    },
    {
      id: "partial-repairs",
      number: "11",
      name: "Partial Denture Repairs",
      category: "repairs",
      categoryLabel: "Denture Care & Repairs",
      badge: null,
      description: "Expert restoration of acrylic bases and cobalt-chromium clasps, retentive rests, and individual tooth anchors on partial dentures.",
      enabled: true,
      ctaText: "Repair Partial Denture",
      action: "call"
    },
    {
      id: "same-day-services",
      number: "12",
      name: "Same-Day Denture Services",
      category: "repairs",
      categoryLabel: "Denture Care & Repairs",
      badge: "Subject to Booking",
      description: "Expedited repair service where you drop off your damaged denture and collect it restored the same day. Please telephone first for availability.",
      enabled: true,
      ctaText: "Check Today's Availability",
      action: "call"
    }
  ],

  // 4 Core Why AMC Pillars
  whyChooseUs: [
    {
      number: "01",
      title: "EXPERIENCE",
      headline: "Over 40 Years of Repair Specialism",
      description: "More than four decades of continuous hands-on experience in denture repairs and acrylic appliance work. We have encountered and successfully repaired virtually every form of denture failure."
    },
    {
      number: "02",
      title: "PRECISION",
      headline: "Careful Laboratory Craftsmanship",
      description: "Every repair, addition, and appliance receives dedicated bench attention. We use premium cross-linked polymers and precision articulation instruments for a secure, comfortable fit."
    },
    {
      number: "03",
      title: "LOCAL",
      headline: "Scarborough-Based Workshop",
      description: "Conveniently located on Ramshill Road in Scarborough. You deal directly with an experienced local laboratory, eliminating postal delays and middleman markups."
    },
    {
      number: "04",
      title: "PERSONAL",
      headline: "Direct, Practical Guidance",
      description: "A friendly, unhurried, no-nonsense conversation. Tell us what has happened to your appliance, and we will explain your exact repair or replacement options clearly."
    }
  ],

  // 4-Step Process Timeline
  processSteps: [
    {
      step: "01",
      title: "CONTACT",
      subtitle: "Speak directly with the lab",
      description: "Call us on 01733 300704 or send photos via WhatsApp (+44 7449 644917). Describe the damage or what appliance you require."
    },
    {
      step: "02",
      title: "ASSESSMENT",
      subtitle: "Hands-on evaluation",
      description: "Bring your appliance to our Ramshill Road laboratory. A technician inspects the break, alignment, and material condition to determine the ideal repair method."
    },
    {
      step: "03",
      title: "CRAFTSMANSHIP",
      subtitle: "Precision bench work",
      description: "The appliance is repaired using high-impact dental acrylic, reinforced joins, or tooth additions, then re-polished to a clean laboratory standard."
    },
    {
      step: "04",
      title: "COLLECTION",
      subtitle: "Ready for confident wear",
      description: "Your restored appliance is ready for collection or next steps. We provide clear guidance on proper care and handling."
    }
  ],

  // Common Denture Failure Types (for Denture Repair Section)
  repairProblems: [
    {
      icon: "broken_image",
      title: "Broken Denture Base",
      description: "Full fracture through the midline of upper or lower plates due to drop impact or bite stress."
    },
    {
      icon: "texture",
      title: "Cracked or Weakened Plate",
      description: "Hairline stress fractures that require stabilizing before complete snapping occurs."
    },
    {
      icon: "grain",
      title: "Missing or Chipped Tooth",
      description: "Detached acrylic tooth replaced or matched to your existing shade and denture mould."
    },
    {
      icon: "link_off",
      title: "Loose Clasp or Component",
      description: "Adjusting or replacing broken metal retention clasps on cobalt chrome or acrylic partials."
    },
    {
      icon: "extension",
      title: "Partial Denture Additions",
      description: "Adding one or more new teeth following recent natural tooth extractions."
    },
    {
      icon: "speed",
      title: "Emergency Breakages",
      description: "Same-day priority turnaround when you need your denture back without delay."
    }
  ],

  // FAQs
  faqs: [
    {
      question: "Can AMC Dental Laboratory repair broken dentures?",
      answer: "Yes. Denture repair is one of our primary specialisms with over 40 years of dedicated experience. We repair cracked plates, clean breaks, snapped sections, and replace lost or fractured denture teeth using high-impact laboratory-grade acrylics."
    },
    {
      question: "Do you offer same-day denture repairs?",
      answer: "Same-day repairs are frequently available depending on our laboratory workload, the nature of the break, and the time the denture is brought in. We recommend telephoning us on 01733 300704 or messaging on WhatsApp before coming in so we can advise on current turnaround."
    },
    {
      question: "Can you add a tooth to an existing denture?",
      answer: "In most cases, yes. If you have recently had a natural tooth extracted or need an addition to a partial denture, we can add a matching acrylic tooth and appropriate retention to your existing plate, provided the base is structurally sound."
    },
    {
      question: "Do you make replacement dentures?",
      answer: "Yes, we produce replacement and spare dentures. Whether your current denture is worn, uncomfortable, or you simply need a backup set, our laboratory crafts custom acrylic dentures designed for comfort and natural appearance."
    },
    {
      question: "Do you provide mouth guards?",
      answer: "Yes, we manufacture custom-fit mouth guards tailored from precise dental impressions. Custom laboratory mouth guards offer superior fit, comfort, and retention compared to over-the-counter boil-and-bite alternatives."
    },
    {
      question: "Do you provide sports guards?",
      answer: "Yes, we craft multi-laminated sports guards engineered for shock absorption in contact sports such as rugby, hockey, football, and martial arts. Custom colours and thicknesses are available."
    },
    {
      question: "How do I contact the laboratory?",
      answer: "You can telephone the laboratory directly on 01733 300704, send a WhatsApp message to +44 7449 644917, or visit us in person at 20 Ramshill Road, Scarborough, YO11 2QE during our listed opening hours."
    },
    {
      question: "Where is AMC Dental Laboratory located?",
      answer: "We are conveniently located at 20 Ramshill Road, Scarborough, YO11 2QE, North Yorkshire. We serve customers throughout Scarborough and surrounding coastal and North Yorkshire communities."
    }
  ],

  // Social Links (Editable / Optional)
  social: {
    facebook: "", // Insert verified URL when supplied: e.g. "https://facebook.com/amcdentallab"
    instagram: "", // Insert verified URL when supplied
    googleBusiness: "https://www.google.com/maps/search/?api=1&query=AMC+Dental+Laboratory+20+Ramshill+Road+Scarborough+YO11+2QE"
  },

  // SEO & Metadata
  seo: {
    title: "AMC Dental Laboratory | Denture Repairs & Dental Appliances in Scarborough",
    description: "Specialist dental laboratory in Scarborough with 40+ years experience in denture repairs, replacement dentures, mouth guards, night guards and dental appliances. Call 01733 300704 or WhatsApp.",
    keywords: "AMC Dental Laboratory, Dental laboratory Scarborough, Denture repair Scarborough, Denture repairs Scarborough, Denture laboratory Scarborough, Dentures Scarborough, Emergency denture repair Scarborough, Same day denture repair Scarborough, Dental technician Scarborough, sports guards Scarborough",
    canonicalUrl: "https://amcdentallab.co.uk/",
    ogImage: "assets/images/hero-technician.jpg"
  }
};

// Export for module systems or attach to window for static HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = amcConfig;
}
if (typeof window !== "undefined") {
  window.amcConfig = amcConfig;
}

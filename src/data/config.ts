/**
 * AMC DENTAL LABORATORY - Centralized Configuration Data
 * 
 * Verified Real Business Details:
 * - Business: AMC Dental Laboratory
 * - Senior Dental Technician / Owner: Mark Culling
 * - Address: 20 Ramshill Road, Scarborough, YO11 2QE, United Kingdom
 * - Telephone: 01733 300704
 * - WhatsApp: +44 7449 644917 (wa.me/447449644917)
 * - Experience: Over 40 years in denture repairs & custom dental appliances
 */

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  category: 'repairs' | 'dentures' | 'appliances' | 'clinical';
  categoryLabel: string;
  badge?: string | null;
  description: string;
  enabled: boolean;
  ctaText: string;
  action: 'call' | 'enquire';
  iconName: string;
}

export interface OpeningHourDay {
  day: string;
  open: string | null;
  close: string | null;
  display: string;
  isClosed: boolean;
}

export const amcConfig = {
  brand: {
    name: "AMC Dental Laboratory",
    shortName: "AMC Dental Lab",
    tagline: "Precision craftsmanship for comfortable, confident smiles.",
    experienceHeadline: "40+ Years of Denture Repair Experience",
    experienceYears: "40+",
    foundedNote: "Over four decades of dedicated laboratory craftsmanship in Scarborough.",
    regNote: "Registered UK Dental Laboratory · Operating at 20 Ramshill Rd, Scarborough, YO11 2QE",
    technician: {
      name: "Mark Culling",
      role: "Senior Dental Technician & Laboratory Owner",
      experience: "Over 40 years specialized experience in denture repairs and dental appliances",
      bio: "Mark Culling brings over four decades of dedicated hands-on bench experience to AMC Dental Laboratory. Specializing in emergency denture repairs, custom acrylic dentures, bite guards, sports guards, whitening trays, and dental appliance fabrication, Mark works directly with patients and dental practices across Scarborough and North Yorkshire to deliver fast, reliable, tissue-friendly dental craftsmanship.",
      image: "assets/images/mark-culling.png"
    }
  },

  contact: {
    telephone: "01733 300704",
    telephoneRaw: "01733300704",
    whatsapp: "+44 7449 644917",
    whatsappRaw: "447449644917",
    whatsappDefaultMessage: "Hello Mark, I would like to enquire about a denture repair / dental appliance at AMC Dental Laboratory.",
    email: "enquiries@amcdentallab.co.uk",
    postalAddress: {
      line1: "20 Ramshill Road",
      town: "Scarborough",
      county: "North Yorkshire",
      postcode: "YO11 2QE",
      country: "United Kingdom",
      formatted: "20 Ramshill Road, Scarborough, YO11 2QE"
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=AMC+Dental+Laboratory+20+Ramshill+Road+Scarborough+YO11+2QE",
    serviceArea: "Serving Scarborough, Filey, Whitby & surrounding North Yorkshire areas"
  },

  openingHours: [
    { day: "Monday", open: "08:30", close: "17:30", display: "08:30 – 17:30", isClosed: false },
    { day: "Tuesday", open: "08:30", close: "17:30", display: "08:30 – 17:30", isClosed: false },
    { day: "Wednesday", open: "08:30", close: "17:30", display: "08:30 – 17:30", isClosed: false },
    { day: "Thursday", open: "08:30", close: "17:30", display: "08:30 – 17:30", isClosed: false },
    { day: "Friday", open: "08:30", close: "17:30", display: "08:30 – 17:30", isClosed: false },
    { day: "Saturday", open: "09:00", close: "13:00", display: "09:00 – 13:00", isClosed: false },
    { day: "Sunday", open: null, close: null, display: "Closed", isClosed: true }
  ] as OpeningHourDay[],

  features: {
    sameDayRepairAvailable: true,
    sameDayBadgeText: "SAME-DAY REPAIR AVAILABLE",
    sameDayDisclaimer: "Subject to laboratory inspection, severity of breakage, and morning drop-off.",
    enableOnlineEnquiryForm: true,
    enableWhatsAppDirectChat: true,
    enableBeforeAfterSlider: true
  },

  services: [
    {
      id: "denture-repairs",
      number: "01",
      name: "Denture Repairs",
      category: "repairs",
      categoryLabel: "Denture Care & Repairs",
      badge: "Most Requested",
      description: "Fast, reliable laboratory repairs for fractured, cracked, or snapped acrylic dentures. Re-aligned and reinforced by Mark Culling with over 40 years experience.",
      enabled: true,
      ctaText: "Call About a Repair",
      action: "call",
      iconName: "Wrench"
    },
    {
      id: "dentures",
      number: "02",
      name: "Dentures",
      category: "dentures",
      categoryLabel: "Denture Services",
      badge: "Laboratory Craft",
      description: "Meticulously crafted complete upper and lower acrylic dental prosthetics designed for optimal anatomical retention, natural appearance, and everyday comfort.",
      enabled: true,
      ctaText: "Discuss New Dentures",
      action: "call",
      iconName: "Smile"
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
      action: "enquire",
      iconName: "RefreshCw"
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
      action: "call",
      iconName: "PlusCircle"
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
      action: "enquire",
      iconName: "Crown"
    },
    {
      id: "mouth-guards",
      number: "06",
      name: "Mouth Guards & Bite Guards",
      category: "appliances",
      categoryLabel: "Dental Appliances",
      badge: "Protective",
      description: "Custom-formed oral guards and bite appliances providing essential structural protection against trauma, daytime clenching, and physical wear.",
      enabled: true,
      ctaText: "Order Custom Guard",
      action: "enquire",
      iconName: "Shield"
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
      action: "enquire",
      iconName: "Moon"
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
      action: "enquire",
      iconName: "ShieldAlert"
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
      action: "call",
      iconName: "Heart"
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
      action: "call",
      iconName: "Zap"
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
      action: "call",
      iconName: "Settings"
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
      action: "call",
      iconName: "Timer"
    }
  ] as ServiceItem[],

  faqs: [
    {
      question: "Can AMC Dental Laboratory repair broken dentures?",
      answer: "Yes. Denture repair is our primary specialism. Mark Culling has more than 40 years of dedicated experience repairing cracked plates, clean breaks, snapped sections, and replacing lost or chipped teeth using high-impact laboratory-grade acrylics."
    },
    {
      question: "Do you offer same-day denture repairs?",
      answer: "Yes, same-day repairs are frequently available depending on laboratory workload, the nature of the break, and the time the denture is brought in. We recommend telephoning us on 01733 300704 or messaging Mark via WhatsApp on +44 7449 644917 before coming in so we can advise on current turnaround."
    },
    {
      question: "Can you add a tooth to an existing denture?",
      answer: "In most cases, yes. If you have recently had a natural tooth extracted or need an addition to a partial denture, we can add a matching acrylic tooth and appropriate retention clasp to your existing plate, provided the base is structurally sound."
    },
    {
      question: "Do you make replacement dentures?",
      answer: "Yes, we produce replacement and spare dentures. Whether your current denture is worn, uncomfortable, or you simply need a backup set, our laboratory crafts custom acrylic dentures designed for comfort and natural appearance."
    },
    {
      question: "Do you provide mouth guards?",
      answer: "Yes, we manufacture custom-fit mouth guards and bite guards tailored from dental impressions. Custom laboratory mouth guards offer superior fit, comfort, and retention compared to over-the-counter boil-and-bite alternatives."
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
      answer: "We are located at 20 Ramshill Road, Scarborough, YO11 2QE, North Yorkshire. We serve customers throughout Scarborough and surrounding coastal and North Yorkshire communities."
    }
  ]
};

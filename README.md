# AMC Dental Laboratory — Official Website Redesign Proposal

A bespoke, production-quality, mobile-first website preview engineered specifically for **AMC Dental Laboratory** (20 Ramshill Road, Scarborough, YO11 2QE).

Built around the core brand idea:
> *"Precision craftsmanship for comfortable, confident smiles."*

---

## 🌟 Strategic Positioning & Differences from Generic Dental Clinics

Unlike typical dental clinic templates that focus on cosmetic procedures or Harley Street aesthetics, this website is tailored specifically to a **Dental Laboratory & Denture Specialist**:

- **Real Laboratory Imagery**: Features skilled technicians at workbench stations, articulators, dental stone casts, acrylic finishing, and custom appliances.
- **40+ Years Denture Repair Specialism**: Anchors the laboratory's four decades of hands-on repair experience without exaggerated or fabricated claims.
- **Direct Phone & WhatsApp Access**: Primary conversion paths focus on immediate assistance for customers with broken dentures (`01733 300704` and WhatsApp `+44 7449 644917`).
- **Interactive Before/After Slider**: Touch- and mouse-enabled comparison illustrating laboratory-grade acrylic fusion and polishing.
- **Local Scarborough Focus**: Clear local references, opening hours with live UK "Open Now" / "Closed" status calculation, and map directions to 20 Ramshill Road.

---

## 📂 Project Architecture

```
AMC Dental Laboratory/
├── index.html            # Semantic, accessible HTML5 production website
├── config.js             # Centralized business configuration (editable)
├── app.js                # Dynamic hydration, opening hours logic, slider, accordion, forms
├── style.css             # Tailored micro-interactions, dental arch styles, print rules
├── package.json          # Local server scripts and metadata
├── robots.txt            # Search engine directives
├── sitemap.xml           # XML sitemap for SEO
└── assets/
    └── images/
        ├── hero-technician.jpg        # Technician crafting denture at workbench
        ├── macro-craftsmanship.jpg    # Macro finishing on dental articulator
        ├── dental-appliances.jpg      # Custom sports guard & night splint
        ├── repair-before.jpg          # Fractured acrylic denture before repair
        ├── repair-after.jpg           # Restored and polished denture after repair
        └── b2b-models.jpg             # Precision models for clinician partnerships
```

---

## ⚙️ How to Update Business Information (`config.js`)

All business data is intentionally separated from presentation in `config.js`. The laboratory owner or webmaster can edit:

1. **Telephone & WhatsApp**:
   ```javascript
   contact: {
     telephone: "01733 300704",
     whatsapp: "+44 7449 644917",
     ...
   }
   ```
2. **Address & Location**:
   ```javascript
   postalAddress: {
     line1: "20 Ramshill Road",
     town: "Scarborough",
     postcode: "YO11 2QE"
   }
   ```
3. **Opening Hours**:
   Adjust times in 24h format for Monday–Sunday. The site automatically recalculates the live "Open Now" / "Closed" pill based on UK time.
4. **Service Toggles**:
   Enable or disable any of the 12 services simply by changing `enabled: true` or `enabled: false`.

---

## 🚀 How to Preview

### Option 1: Direct File Opening
Simply double-click `index.html` to open it in any modern browser (Chrome, Edge, Safari, Firefox). All image assets and stylesheets load locally.

### Option 2: Local Static Server
If Node.js is installed:
```bash
npm start
```
Or with any static file server:
```bash
npx serve . -l 3000
```
Then visit `http://localhost:3000`.

---

## 📱 Mobile-First Features

- **Sticky Mobile Bottom Action Bar**: Instant thumb-reach access to **CALL**, **WHATSAPP**, **DIRECTIONS**, and **ENQUIRE**.
- **Collapsible Navigation Drawer**: Accessible with Escape-key dismiss and background lock.
- **Large Tap Targets**: Dial actions and WhatsApp links meet WCAG AAA touch target guidelines.
- **Zero Horizontal Scrolling**: Calibrated for screen widths from 320px up to 4K displays.

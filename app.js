/**
 * AMC DENTAL LABORATORY - Application Logic & Interactivity
 * 
 * Features:
 * - Dynamic data hydration from config.js
 * - Real-time UK opening hours status indicator (Open Now / Closed)
 * - Interactive Before/After drag slider
 * - Dynamic service category filtering
 * - Accessible FAQ accordion
 * - Contact form validation & WhatsApp bridge
 * - Mobile drawer & sticky bottom navigation bar
 * - Interactive Live Config Inspector for client preview
 */

(function () {
  "use strict";

  // Ensure config is loaded
  const config = window.amcConfig || {};

  // DOM Content Loaded Handler
  document.addEventListener("DOMContentLoaded", () => {
    initStructuredData();
    initOpeningHoursStatus();
    initNavbarScroll();
    initMobileNav();
    initServicesFilter();
    initBeforeAfterSlider();
    initFaqAccordion();
    initContactForm();
    initConfigModal();
    initSmoothScroll();
  });

  /**
   * 1. INJECT LOCALBUSINESS JSON-LD SCHEMA
   */
  function initStructuredData() {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "DentalLaboratory",
      "name": config.brand?.name || "AMC Dental Laboratory",
      "description": config.seo?.description,
      "url": config.seo?.canonicalUrl || "https://amcdentallab.co.uk",
      "telephone": config.contact?.telephone || "01733 300704",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": config.contact?.postalAddress?.line1 || "20 Ramshill Road",
        "addressLocality": config.contact?.postalAddress?.town || "Scarborough",
        "addressRegion": config.contact?.postalAddress?.county || "North Yorkshire",
        "postalCode": config.contact?.postalAddress?.postcode || "YO11 2QE",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 54.2755,
        "longitude": -0.4005
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "17:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Scarborough, North Yorkshire"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Denture Repairs and Dental Appliances",
        "itemListElement": (config.services || []).map(s => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": s.name,
            "description": s.description
          }
        }))
      }
    };
    script.textContent = JSON.stringify(schemaData, null, 2);
    document.head.appendChild(script);
  }

  /**
   * 2. LIVE OPENING HOURS STATUS (Calculated against UK time)
   */
  function initOpeningHoursStatus() {
    const statusBadges = document.querySelectorAll("[data-open-status]");
    const todayHoursContainers = document.querySelectorAll("[data-today-hours]");
    const hoursTable = document.getElementById("opening-hours-rows");

    // UK Time Calculation
    const now = new Date();
    // Format to UK local time string to get day and current HH:MM
    const ukTimeStr = now.toLocaleString("en-GB", { timeZone: "Europe/London" });
    const ukDayName = now.toLocaleDateString("en-GB", { weekday: "long", timeZone: "Europe/London" });
    
    // Extract current UK hours and minutes
    const timeParts = now.toLocaleTimeString("en-GB", { timeZone: "Europe/London", hour12: false }).split(":");
    const currentHour = parseInt(timeParts[0], 10);
    const currentMin = parseInt(timeParts[1], 10);
    const currentTimeMinutes = currentHour * 60 + currentMin;

    const todayConfig = (config.openingHours || []).find(h => h.day.toLowerCase() === ukDayName.toLowerCase()) || {
      isClosed: true,
      display: "Closed"
    };

    let isOpenNow = false;
    let statusText = "Closed Now";
    let statusSubtext = "";

    if (!todayConfig.isClosed && todayConfig.open && todayConfig.close) {
      const [openH, openM] = todayConfig.open.split(":").map(Number);
      const [closeH, closeM] = todayConfig.close.split(":").map(Number);
      const openMinutes = openH * 60 + openM;
      const closeMinutes = closeH * 60 + closeM;

      if (currentTimeMinutes >= openMinutes && currentTimeMinutes < closeMinutes) {
        isOpenNow = true;
        statusText = "Open Now";
        statusSubtext = `Closes at ${todayConfig.close}`;
      } else if (currentTimeMinutes < openMinutes) {
        statusText = "Closed Now";
        statusSubtext = `Opens today at ${todayConfig.open}`;
      } else {
        statusText = "Closed for Today";
        statusSubtext = "Reopens tomorrow 08:30";
      }
    } else {
      statusText = "Closed Today (Sunday)";
      statusSubtext = "Reopens Monday 08:30";
    }

    // Update status badge UI
    statusBadges.forEach(badge => {
      badge.innerHTML = `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
          isOpenNow 
            ? "bg-emerald-500/15 text-emerald-800 border border-emerald-500/25" 
            : "bg-amber-500/15 text-amber-900 border border-amber-500/25"
        }">
          <span class="w-2 h-2 rounded-full ${isOpenNow ? "bg-emerald-600 animate-pulse" : "bg-amber-600"}"></span>
          <span>${statusText}</span>
          ${statusSubtext ? `<span class="opacity-75 hidden sm:inline">· ${statusSubtext}</span>` : ""}
        </span>
      `;
    });

    todayHoursContainers.forEach(container => {
      container.textContent = todayConfig.display ? `Today (${ukDayName}): ${todayConfig.display}` : "";
    });

    // Populate or highlight opening hours table
    if (hoursTable) {
      hoursTable.innerHTML = "";
      (config.openingHours || []).forEach(row => {
        const isToday = row.day.toLowerCase() === ukDayName.toLowerCase();
        const tr = document.createElement("tr");
        tr.className = `border-b border-stone-200/70 transition-colors ${
          isToday ? "bg-teal-50/80 font-semibold text-slate-900" : "text-stone-700 hover:bg-stone-50"
        }`;
        tr.innerHTML = `
          <td class="py-2.5 px-3 flex items-center gap-2">
            <span>${row.day}</span>
            ${isToday ? `<span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-teal-800 text-white">Today</span>` : ""}
          </td>
          <td class="py-2.5 px-3 text-right ${row.isClosed ? 'text-stone-400 italic' : ''}">
            ${row.display}
          </td>
        `;
        hoursTable.appendChild(tr);
      });
    }
  }

  /**
   * 3. NAVBAR SCROLL & STICKY EFFECTS
   */
  function initNavbarScroll() {
    const header = document.getElementById("main-header");
    if (!header) return;

    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > 40) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  /**
   * 4. MOBILE NAVIGATION DRAWER
   */
  function initMobileNav() {
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const closeBtn = document.getElementById("mobile-menu-close");
    const drawer = document.getElementById("mobile-drawer");
    const overlay = document.getElementById("mobile-overlay");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    if (!menuToggle || !drawer || !overlay) return;

    const openDrawer = () => {
      drawer.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
      setTimeout(() => overlay.classList.add("opacity-100"), 10);
      document.body.style.overflow = "hidden";
      menuToggle.setAttribute("aria-expanded", "true");
    };

    const closeDrawer = () => {
      drawer.classList.add("translate-x-full");
      overlay.classList.remove("opacity-100");
      setTimeout(() => overlay.classList.add("hidden"), 300);
      document.body.style.overflow = "";
      menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeDrawer();
      });
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !drawer.classList.contains("translate-x-full")) {
        closeDrawer();
      }
    });
  }

  /**
   * 5. BEFORE / AFTER INTERACTIVE SLIDER
   */
  function initBeforeAfterSlider() {
    const container = document.getElementById("before-after-container");
    const handle = document.getElementById("before-after-handle");
    const afterImageWrapper = document.getElementById("after-image-wrapper");
    const rangeInput = document.getElementById("before-after-range");

    if (!container || !handle || !afterImageWrapper) return;

    let isDragging = false;

    const setSliderPosition = (percent) => {
      const clamped = Math.max(0, Math.min(100, percent));
      handle.style.left = `${clamped}%`;
      // The wrapper of the "after" image will be clipped or width-controlled
      afterImageWrapper.style.width = `${clamped}%`;
      if (rangeInput) rangeInput.value = clamped;
    };

    // Calculate position from mouse or touch event
    const handleMove = (clientX) => {
      const rect = container.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const percent = (offsetX / rect.width) * 100;
      setSliderPosition(percent);
    };

    // Pointer events for smooth drag
    container.addEventListener("pointerdown", (e) => {
      isDragging = true;
      handleMove(e.clientX);
      container.setPointerCapture(e.pointerId);
    });

    container.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    });

    const stopDragging = (e) => {
      if (isDragging) {
        isDragging = false;
        try {
          container.releasePointerCapture(e.pointerId);
        } catch (err) {}
      }
    };

    container.addEventListener("pointerup", stopDragging);
    container.addEventListener("pointercancel", stopDragging);

    // Range input fallback for accessible keyboard navigation
    if (rangeInput) {
      rangeInput.addEventListener("input", (e) => {
        setSliderPosition(parseFloat(e.target.value));
      });
    }

    // Keyboard support on handle directly
    handle.setAttribute("tabindex", "0");
    handle.setAttribute("role", "slider");
    handle.setAttribute("aria-label", "Denture repair comparison slider");
    handle.setAttribute("aria-valuemin", "0");
    handle.setAttribute("aria-valuemax", "100");
    handle.setAttribute("aria-valuenow", "50");

    handle.addEventListener("keydown", (e) => {
      let currentVal = parseFloat(rangeInput?.value || 50);
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault();
        setSliderPosition(currentVal - 5);
        handle.setAttribute("aria-valuenow", String(Math.max(0, currentVal - 5)));
      } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();
        setSliderPosition(currentVal + 5);
        handle.setAttribute("aria-valuenow", String(Math.min(100, currentVal + 5)));
      }
    });

    // Default to 50%
    setSliderPosition(50);
  }

  /**
   * 6. SERVICES FILTERING & DYNAMIC RENDERING
   */
  function initServicesFilter() {
    const grid = document.getElementById("services-grid");
    const filterButtons = document.querySelectorAll("[data-service-filter]");
    if (!grid) return;

    const renderServices = (category = "all") => {
      grid.innerHTML = "";
      const services = config.services || [];
      const filtered = category === "all" 
        ? services.filter(s => s.enabled)
        : services.filter(s => s.enabled && s.category === category);

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full p-8 text-center bg-white rounded-xl border border-stone-200 text-stone-500">
            No services found in this category. Contact our laboratory for custom requests.
          </div>
        `;
        return;
      }

      filtered.forEach((service, index) => {
        const card = document.createElement("article");
        card.className = "group relative bg-white rounded-xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-teal-700/40 transition-all duration-300 flex flex-col justify-between";
        card.setAttribute("data-category", service.category);

        const iconName = getServiceIcon(service.id);
        const actionHref = service.action === "call" ? `tel:${config.contact?.telephoneRaw || '01733300704'}` : "#contact-section";

        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between gap-3 mb-4">
              <span class="font-mono text-xs font-semibold text-teal-800 tracking-wider px-2 py-0.5 rounded bg-teal-50 border border-teal-100">
                ${service.number}
              </span>
              ${service.badge ? `
                <span class="text-[11px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full ${
                  service.badge.includes('Emergency') || service.badge.includes('Requested')
                    ? 'bg-amber-100 text-amber-900 border border-amber-200'
                    : 'bg-stone-100 text-stone-700 border border-stone-200'
                }">
                  ${service.badge}
                </span>
              ` : `
                <span class="text-[11px] text-stone-400 uppercase tracking-wider">${service.categoryLabel}</span>
              `}
            </div>
            
            <div class="flex items-start gap-3.5 mb-3">
              <div class="w-10 h-10 rounded-lg bg-stone-100 group-hover:bg-teal-800 group-hover:text-white text-teal-800 flex items-center justify-center flex-shrink-0 transition-colors">
                <span class="material-symbols-outlined text-[22px]">${iconName}</span>
              </div>
              <h3 class="font-headline-sm text-lg font-semibold text-stone-900 group-hover:text-teal-900 transition-colors leading-snug">
                ${service.name}
              </h3>
            </div>

            <p class="text-sm text-stone-600 leading-relaxed mb-6 font-normal">
              ${service.description}
            </p>
          </div>

          <div class="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
            <span class="text-xs text-stone-500 font-medium">${service.action === 'call' ? 'Direct phone triage' : 'Enquiry or walk-in'}</span>
            <a href="${actionHref}" class="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 group-hover:translate-x-0.5 transition-transform">
              <span>${service.ctaText}</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        `;
        grid.appendChild(card);
      });
    };

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => {
          b.classList.remove("bg-slate-900", "text-white", "shadow-sm");
          b.classList.add("bg-white", "text-stone-700", "hover:bg-stone-100");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("bg-slate-900", "text-white", "shadow-sm");
        btn.classList.remove("bg-white", "text-stone-700", "hover:bg-stone-100");
        btn.setAttribute("aria-selected", "true");

        const category = btn.getAttribute("data-service-filter");
        renderServices(category);
      });
    });

    // Initial render
    renderServices("all");
  }

  function getServiceIcon(id) {
    const iconMap = {
      "denture-repairs": "healing",
      "dentures": "dentistry",
      "denture-replacement": "autorenew",
      "adding-teeth": "add_circle_outline",
      "dental-crowns": "crown",
      "mouth-guards": "shield",
      "night-guards": "bedtime",
      "sports-guards": "sports_rugby",
      "dental-comfort-bases": "spa",
      "emergency-repairs": "bolt",
      "partial-repairs": "build_circle",
      "same-day-services": "timer"
    };
    return iconMap[id] || "precision_manufacturing";
  }

  /**
   * 7. ACCESSIBLE FAQ ACCORDION
   */
  function initFaqAccordion() {
    const container = document.getElementById("faq-accordion");
    if (!container) return;

    const faqs = config.faqs || [];
    container.innerHTML = "";

    faqs.forEach((faq, index) => {
      const item = document.createElement("div");
      item.className = "border border-stone-200/90 rounded-xl overflow-hidden bg-white shadow-sm transition-all";
      const id = `faq-${index}`;

      item.innerHTML = `
        <button type="button" 
                class="faq-toggle w-full px-5 py-4 sm:px-6 sm:py-4.5 flex items-center justify-between text-left gap-4 hover:bg-stone-50/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700" 
                aria-expanded="${index === 0 ? 'true' : 'false'}" 
                aria-controls="${id}-answer">
          <span class="font-semibold text-stone-900 text-base sm:text-lg flex items-center gap-3">
            <span class="font-mono text-xs text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-100/60 font-semibold">Q${index + 1}</span>
            <span>${faq.question}</span>
          </span>
          <span class="faq-icon w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-600 transition-transform duration-200">
            <span class="material-symbols-outlined text-[20px] transition-transform ${index === 0 ? 'rotate-180' : ''}">expand_more</span>
          </span>
        </button>
        <div id="${id}-answer" class="faq-content px-5 pb-5 sm:px-6 sm:pb-6 text-stone-600 text-sm sm:text-base leading-relaxed ${index === 0 ? '' : 'hidden'} border-t border-stone-100 pt-3">
          <p>${faq.answer}</p>
        </div>
      `;

      const button = item.querySelector(".faq-toggle");
      const content = item.querySelector(".faq-content");
      const icon = item.querySelector(".faq-icon span");

      button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
          button.setAttribute("aria-expanded", "false");
          content.classList.add("hidden");
          icon.classList.remove("rotate-180");
        } else {
          button.setAttribute("aria-expanded", "true");
          content.classList.remove("hidden");
          icon.classList.add("rotate-180");
        }
      });

      container.appendChild(item);
    });
  }

  /**
   * 8. CONTACT FORM WITH REALTIME VALIDATION & WHATSAPP BRIDGE
   */
  function initContactForm() {
    const form = document.getElementById("amc-contact-form");
    const feedback = document.getElementById("form-feedback");
    const whatsappDirectBtn = document.getElementById("whatsapp-form-forward");

    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = form.querySelector("#full-name")?.value.trim();
      const phone = form.querySelector("#phone-number")?.value.trim();
      const email = form.querySelector("#email-address")?.value.trim();
      const service = form.querySelector("#service-select")?.value;
      const message = form.querySelector("#enquiry-message")?.value.trim();

      if (!fullName || !phone || !service) {
        showFeedback("Please provide your name, phone number, and select what you need help with.", "error");
        return;
      }

      // Simulate successful local submission
      showFeedback(`Thank you, ${fullName}. Your enquiry regarding "${service}" has been received. AMC Dental Laboratory will contact you shortly on ${phone}.`, "success");

      // Set up the WhatsApp button with prefilled content
      if (whatsappDirectBtn) {
        const waText = encodeURIComponent(
          `Hi AMC Dental Laboratory, my name is ${fullName} (${phone}).\nI need help with: ${service}.\nDetails: ${message || "Please call me back."}`
        );
        whatsappDirectBtn.href = `https://wa.me/${config.contact?.whatsappRaw || '447449644917'}?text=${waText}`;
        whatsappDirectBtn.classList.remove("hidden");
      }

      form.reset();
    });

    function showFeedback(msg, type) {
      if (!feedback) return;
      feedback.textContent = msg;
      feedback.classList.remove("hidden", "bg-emerald-50", "text-emerald-900", "border-emerald-200", "bg-rose-50", "text-rose-900", "border-rose-200");
      if (type === "success") {
        feedback.classList.add("bg-emerald-50", "text-emerald-900", "border", "border-emerald-200", "p-4", "rounded-xl");
      } else {
        feedback.classList.add("bg-rose-50", "text-rose-900", "border", "border-rose-200", "p-4", "rounded-xl");
      }
      feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  /**
   * 9. CONFIGURATION PREVIEW MODAL
   * Allows outreach reviewer / owner to see the data structure
   */
  function initConfigModal() {
    const modal = document.getElementById("config-modal");
    const openBtn = document.getElementById("open-config-btn");
    const closeBtn = document.getElementById("close-config-btn");
    const codeView = document.getElementById("config-code-view");

    if (!modal || !openBtn || !closeBtn || !codeView) return;

    openBtn.addEventListener("click", () => {
      codeView.textContent = JSON.stringify(config, null, 2);
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    });

    const closeModal = () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  /**
   * 10. SMOOTH SCROLLING WITH OFFSET
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href === "#" || !href.startsWith("#")) return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = document.getElementById("main-header")?.offsetHeight || 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    });
  }
})();

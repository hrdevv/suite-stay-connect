/**
 * Business configuration — single source of truth.
 *
 * All operator-facing details (name, contact, pricing, SEO strings) live here
 * so a future deploy or rebrand only edits this file.
 */

export const business = {
  name: "Lifters' Apartments",
  legalName: "Lifters' Apartments",
  parent: "Lifter's Touch Empowerment Foundation",
  tagline: "Coastal-inspired short stays in Lagos",

  location: {
    address: "7, Amikanle Road, off AIT Road, Kola Alagbado, Lagos State",
    city: "Lagos",
    country: "Nigeria",
    mapsQuery: "Amikanle Road, Kola Alagbado, Lagos, Nigeria",
    get mapsEmbedUrl() {
      return `https://www.google.com/maps?q=${encodeURIComponent(this.mapsQuery)}&output=embed`;
    },
    get mapsLink() {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.mapsQuery)}`;
    },
  },

  contact: {
    phoneDisplay: "+234 812 111 3281",
    phoneTel: "+2348121113281",
    whatsapp: "2348121113281",
    email: "info@suites.lifterscenter.org",
    hours: "24/7 Front Desk Support",
  },

  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },

  pricing: {
    currency: "NGN",
    locale: "en-NG",
    standardRoom: 99999,
    executiveSuite: 119999,
  },

  seo: {
    title: "Lifters' Apartments — Coastal Luxury Short Stays in Lagos",
    description:
      "Fully furnished coastal-luxury short-stay apartments and executive suites in Lagos. 24/7 front-desk, banquet hall, and corporate housing. Every stay funds community empowerment.",
  },

  inquiryTypes: [
    "Short-Stay Apartment",
    "Banquet Hall",
    "Corporate Housing",
    "Other Inquiry",
  ] as const,
} as const;

export type Business = typeof business;

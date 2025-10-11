export const site = {
  brand: "LensCraft Studio",
  metaTitle: "LensCraft Studio — Photography in Nairobi, Kenya",
  metaDescription:
    "Professional photography studio in Nairobi offering portraits, events, products, and lifestyle shoots. Same-day selects, creative editing, and flexible on-location sessions.",
  baseUrl: "https://photo.tech24.co.ke",
  themeColor: "#111827",

  contact: {
    phone: "+254 748 699 460",
    whatsapp: "+254748699460",
    email: "hello@tech24.co.ke",
    address: "Nairobi, Kenya",
  },

  social: {
    instagram: "https://instagram.com/tech24.co.ke",
    facebook: "https://facebook.com/tech24.co.ke",
    tiktok: "https://tiktok.com/@tech24.co.ke",
    twitter: "https://x.com/tech24_co_ke",
  },

  hero: {
    title: "Crisp Stories. Real Moments.",
    subtitle:
      "Portraits, events, products & lifestyle — captured with precision and personality. Studio or on-location shoots in Nairobi.",
    ctaPrimary: {
      label: "Chat on WhatsApp",
      href: "https://wa.me/254748699460?text=Hi%20LensCraft%20Studio%20—%20I’d%20like%20a%20photo%20session",
    },
    ctaSecondary: {
      label: "View Portfolio",
      href: "#portfolio",
    },
    image: "/templates/photography-hero.jpg",
  },

  sections: [
    {
      id: "services",
      title: "Our Services",
      items: [
        { title: "Portraits", desc: "Studio or outdoor sessions that bring out your best look." },
        { title: "Events", desc: "Weddings, birthdays, conferences — captured with emotion and clarity." },
        { title: "Product", desc: "E-commerce & brand shoots with perfect lighting and focus." },
        { title: "Lifestyle", desc: "Natural everyday photography with storytelling flair." },
      ],
    },
    {
      id: "why",
      title: "Why Choose LensCraft",
      items: [
        { title: "True-to-Life Colors", desc: "Professional color grading and consistent editing." },
        { title: "Fast Delivery", desc: "Receive your selects within 24–48 hours." },
        { title: "Flexible Locations", desc: "Studio, home, or outdoor — we come to you." },
      ],
    },
  ],
};
export default site;

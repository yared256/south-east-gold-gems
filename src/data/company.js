// Single source of truth for company info. Edit here; the whole site updates.
const phone = "+251911548600";
export const company = {
  legalName: "South East International Gold and Gemstone Exporter PLC",
  shortName: "South East Gold & Gems",
  tagline: "Trusted Ethiopian gold and gemstone exports for international buyers and partners.",
  years: "25+",
  address: "Airport Road, Dembel Square, Addis Ababa, Ethiopia",
  phoneDisplay: "+251 911 548 600",
  phone,
  email: null,   // null shows "Coming Soon"
  website: null, // null shows "Coming Soon"
  logo: "/logo.svg",
  markets: ["Germany", "USA", "UAE", "India", "Europe", "International Markets"],
  whatsappMessage: "Hello South East Gold & Gems, I am interested in your gold and gemstone products.",
  ceo: { name: "Abdulahe Mohammed", title: "Visionary CEO", photo: null, email: null,
    quote: "With more than 25 years of experience, Abdulahe Mohammed has built long-term relationships across Ethiopia's minerals sector and helped connect trusted Ethiopian resources with global buyers." },
  licenses: [
    { name: "Ministry of Mines" }, { name: "Export License" }, { name: "Business Registration" },
    { name: "Relevant Government Institutions" }, { name: "Other Certifications" }
  ],
};
export const whatsappLink = (msg = company.whatsappMessage) =>
  `https://wa.me/${company.phone.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

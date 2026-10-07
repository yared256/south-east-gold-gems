// Single source of truth for company info. Edit here; the whole site updates.
const phone = "+251911548600";
export const company = {
  legalName: "South East International Gold and Gemstone Exporter PLC",
  shortName: "South East Gold & Gems",
  tagline: "Connecting Ethiopian gold and gemstones with international markets.",
  years: "25+",
  address: "Airport Road, Dembel Square, Addis Ababa, Ethiopia",
  phoneDisplay: "+251 911 548 600",
  phone,
  email: null,   // null shows "Coming Soon"
  website: null, // null shows "Coming Soon"
  logo: null,    // e.g. "/logo.svg" or "/logo.png"; null shows placeholder
  markets: ["Germany", "USA", "India", "International Markets"],
  whatsappMessage: "Hello South East Gold & Gems, I am interested in your gold and gemstone products.",
  ceo: { name: "Abdulahe Mohammed", title: "Visionary CEO", photo: null, email: null,
    quote: "With more than 25 years of experience, Abdulahe Mohammed has dedicated his career to the development of Ethiopia's gold and gemstone export sector, building long-term relationships and contributing to the country's growing connection with international mineral markets." },
  licenses: [ // add { name, number, file } when real documents exist
    { name: "Ministry of Mines" }, { name: "Export License" }, { name: "Business Registration" },
    { name: "Relevant Government Institutions" }, { name: "Other Certifications" } ],
};
export const whatsappLink = (msg = company.whatsappMessage) =>
  `https://wa.me/${company.phone.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

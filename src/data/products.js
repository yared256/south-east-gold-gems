// Add a product by adding one object. Routes, cards, menu and footer update automatically.
// Set `image` to a real photo path to replace the placeholder.
const p = (slug, name, hue, short) => ({ slug, name, hue, short, image: null,
  intro: `${name} sourced and exported by South East Gold & Gems.`,
  description: "Product description to be provided by the company.",
  origin: "Origin information to be provided.", quality: "Quality information to be provided.",
  availability: "Availability to be confirmed on inquiry." });
export const products = [
  p("gold","Gold",42,"Ethiopian gold for international buyers."),
  p("diamond","Diamond",200,"Diamonds for the export market."),
  p("emerald","Emerald",150,"Green beryl, a coveted Ethiopian gemstone."),
  p("sapphire","Sapphire",220,"Blue corundum for fine gem trade."),
  p("ruby","Ruby",350,"Red corundum for discerning buyers."),
  p("peridot","Peridot",85,"Olive-green gemstone with natural clarity."),
  p("garnet","Garnet",5,"Deep red gemstones in varied shades."),
  p("topaz","Topaz",30,"Versatile gemstone in many colors."),
  p("agate","Agate",25,"Banded stones with natural patterns."),
];
export const gallery = ["Gold","Gemstones","Emerald","Sapphire","Ruby","Export & Trade","Company","Leadership"]
  .map((cat, i) => ({ id: i, category: cat, alt: `${cat} placeholder`, src: null, hue: [42,200,150,220,350,210,205,215][i] }));

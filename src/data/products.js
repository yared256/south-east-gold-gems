// Add a product by adding one object. Routes, cards, menu and footer update automatically.
const imageDetails = {
  gold: {
    alt: "Gold ingots on a white background",
    credit: "Szaaman, public domain",
    source: "https://commons.wikimedia.org/wiki/File:Gold_Ingots_on_white_background.jpg",
  },
  diamond: {
    alt: "Loose round brilliant-cut diamond",
    credit: "PetraGems, CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Round_Brilliant_Cut_Diamond.jpg",
  },
  emerald: {
    alt: "Cut emerald gemstone",
    credit: "Gemsonline image source",
    source: "https://ik.imagekit.io/gemsonline/wp-content/uploads/2025/01/Emrald_gemstone-1.jpg",
  },
  sapphire: {
    alt: "Four loose faceted blue sapphires",
    credit: "W.carter, CC BY 4.0 (synthetic sapphires)",
    source: "https://commons.wikimedia.org/wiki/File:Four_man-made_faceted_blue_sapphires_2.jpg",
  },
  ruby: {
    alt: "A collection of loose faceted rubies",
    credit: "Sasaki kijinuko, CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Gemstone_Rubies.jpg",
  },
  peridot: {
    alt: "Loose faceted peridot gemstone",
    credit: "Adam Stejskal / Eminerals.cz, CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Peridot_with_ludwigite_inclusion_-_faceted_gemstone_peridot_from_Pakistan.jpg",
  },
  garnet: {
    alt: "Four loose round faceted garnet gemstones",
    credit: "W.carter, CC BY 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Four_round_faceted_garnet_gemstones_2.jpg",
  },
  topaz: {
    alt: "Loose round-cut blue topaz",
    credit: "Humanfeather / Michelle Jo, CC BY 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Round_cut_blue_topaz.JPG",
  },
  agate: {
    alt: "Four polished moss agate cabochons",
    credit: "W.carter, CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Four_moss_agate_cabochons.jpg",
  },
};

const p = (slug, name, category, hue, short, image, intro, description, origin, quality, availability) => ({
  slug,
  name,
  category,
  hue,
  short,
  image,
  imageAlt: imageDetails[slug].alt,
  imageCredit: imageDetails[slug],
  intro,
  description,
  origin,
  quality,
  availability,
});

export const products = [
  p(
    "gold",
    "Gold",
    "Gold",
    42,
    "Premium Ethiopian gold for trusted international supply.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Gold_Ingots_on_white_background.jpg/1280px-Gold_Ingots_on_white_background.jpg",
    "High-quality Ethiopian gold prepared for international buyers seeking reliable export partnerships.",
    "We source and prepare gold with a strong focus on consistency, premium quality, and international trade readiness for global buyers.",
    "Ethiopia",
    "Carefully selected and processed to meet international trading standards.",
    "Available in custom lots with buyer-specific packaging and shipment planning."
  ),
  p(
    "diamond",
    "Diamond",
    "Gemstone",
    200,
    "Sparkling stones selected for premium gem markets.",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Round_Brilliant_Cut_Diamond.jpg",
    "Diamonds supplied for markets that value brilliance, clarity, and dependable sourcing.",
    "Our diamond offerings are presented for buyers looking for elegant, high-value stones for export and trade partnerships.",
    "Global gem sourcing channels",
    "Selected for clarity, surface quality, and export-ready presentation.",
    "Inventory and buyer requirements are reviewed for each order."
  ),
  p(
    "emerald",
    "Emerald",
    "Gemstone",
    150,
    "Rich green emeralds with vibrant natural character.",
    "https://ik.imagekit.io/gemsonline/wp-content/uploads/2025/01/Emrald_gemstone-1.jpg",
    "Green beryl with strong market appeal for gemstone traders, jewelry makers, and collectors.",
    "Emeralds are presented with emphasis on color depth, crystal quality, and market-ready characteristics suited to export buyers.",
    "Ethiopian gemstone sources",
    "Assessed for color, clarity, and cut potential.",
    "Available for qualified buyers and custom order quantities."
  ),
  p(
    "sapphire",
    "Sapphire",
    "Gemstone",
    220,
    "Blue corundum with a premium jewel-toned look.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Four_man-made_faceted_blue_sapphires_2.jpg/1280px-Four_man-made_faceted_blue_sapphires_2.jpg",
    "Sapphire stones selected for buyers seeking richly colored blue gems with strong trade appeal.",
    "We work with gemstone buyers who value consistent material quality and presentation in the international market.",
    "Ethiopian gem fields",
    "Chosen for vibrant color, purity, and market suitability.",
    "Export availability depends on lot size and buyer specifications."
  ),
  p(
    "ruby",
    "Ruby",
    "Gemstone",
    350,
    "Fine red corundum for collectors and luxury buyers.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Gemstone_Rubies.jpg/1280px-Gemstone_Rubies.jpg",
    "Ruby offerings selected for their rich red tones and the confidence of dependable supply.",
    "Ruby is presented to international buyers seeking polished, high-value gemstone material with strong visual appeal.",
    "Ethiopian mineral resources",
    "Evaluated for color saturation and gemstone quality.",
    "Available on inquiry for qualified exporter and trading partners."
  ),
  p(
    "peridot",
    "Peridot",
    "Gemstone",
    85,
    "Fresh green gemstones with a natural, luminous finish.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Peridot_with_ludwigite_inclusion_-_faceted_gemstone_peridot_from_Pakistan.jpg/1280px-Peridot_with_ludwigite_inclusion_-_faceted_gemstone_peridot_from_Pakistan.jpg",
    "Peridot brings a distinctive olive-green charm prized in jewelry and mineral collections.",
    "This gemstone is presented for clients looking for unique color, natural beauty, and export-ready quality.",
    "Ethiopian gemstone fields",
    "Reviewed for brightness, tonal quality, and natural clarity.",
    "Offered in lots suited to both wholesale and curated retail buyers."
  ),
  p(
    "garnet",
    "Garnet",
    "Gemstone",
    5,
    "Deep red gemstones with rich, earthy beauty.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Four_round_faceted_garnet_gemstones_2.jpg/1280px-Four_round_faceted_garnet_gemstones_2.jpg",
    "Garnet offers warm, deep hues that appeal to jewelry makers and international gemstone buyers.",
    "Our garnet selection emphasizes visual depth, natural character, and consistent presentation for export markets.",
    "Ethiopian supply channels",
    "Selected for tone consistency and attractive natural variation.",
    "Available on request depending on specification and lot size."
  ),
  p(
    "topaz",
    "Topaz",
    "Gemstone",
    30,
    "Versatile gemstone material in luminous natural tones.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Round_cut_blue_topaz.JPG/960px-Round_cut_blue_topaz.JPG",
    "Topaz combines elegance and versatility, making it valuable for both jewelry and export markets.",
    "Our selection is positioned for buyers seeking authentic gemstone material with distinct color variation and commercial appeal.",
    "Ethiopian mining and gemstone networks",
    "Assessed for brilliance, clarity, and marketability.",
    "Custom availability is confirmed based on buyer specifications."
  ),
  p(
    "agate",
    "Agate",
    "Gemstone",
    25,
    "Banded stones with fascinating natural patterns.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Four_moss_agate_cabochons.jpg/1280px-Four_moss_agate_cabochons.jpg",
    "Agate offers distinctive banded patterns and earthy tones favored by mineral buyers and designers.",
    "We present agate for markets that value natural texture, visual interest, and export-ready gemstone supply.",
    "Ethiopian mineral sources",
    "Selected for pattern variation, finish quality, and commercial appeal.",
    "Available in assorted lots or buyer-defined specifications."
  ),
];

export const gallery = [
  ...products.map((product, id) => ({
    id,
    category: product.name,
    alt: product.imageAlt,
    src: product.image,
    hue: product.hue,
    imageCredit: product.imageCredit,
  })),
  {
    id: products.length,
    category: "Export & Trade",
    alt: "International export and trade",
    src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
    hue: 210,
  },
  {
    id: products.length + 1,
    category: "Company",
    alt: "Company office",
    src: "https://images.unsplash.com/photo-1555529669-26f0aaea7b4d?auto=format&fit=crop&w=1200&q=80",
    hue: 205,
  },
  {
    id: products.length + 2,
    category: "Leadership",
    alt: "Company leadership team",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    hue: 215,
  },
];

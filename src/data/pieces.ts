export type Piece = {
  slug: string;
  title: string;
  era: string;
  material: string;
  price: string;
  category: string;
  sold: boolean;
  images: string[]; // first image is the primary/cover photo
  note: string;
};

export const categories = [
  "All",
  "Furniture",
  "Textiles",
  "Ceramics",
  "Lighting",
  "Objects",
];

export const pieces: Piece[] = [
  {
    slug: "bessarabian-kilim",
    title: "Bessarabian kilim",
    era: "Early 20th century",
    material: "260 × 310cm, hand-woven wool",
    price: "$2,500",
    category: "Textiles",
    sold: false,
    images: ["/collection/kilim.webp"],
    note: "Excellent condition for its age. Colours have softened to a dust-rose and ochre that photographs slightly warmer than in person.",
  },
  {
    slug: "chinese-blue-white-ginger-jar",
    title: "Chinese blue & white ginger jar",
    era: "19th century, Kangxi-style",
    material: "Porcelain, fitted lid",
    price: "$500",
    category: "Ceramics",
    sold: false,
    images: ["/collection/ginger-jar.webp"],
    note: "Found at a Sydney estate sale, provenance unclear beyond the last owner. No chips, one hairline glaze crackle to the base.",
  },
  {
    slug: "octagonal-chinoiserie-mirror",
    title: "Octagonal chinoiserie mirror",
    era: "Japonisme revival, early 20th c.",
    material: "130 × 100cm, hand-decorated gilt frame",
    price: "$3,000",
    category: "Objects",
    sold: false,
    images: ["/collection/mirror-chinoiserie.webp"],
    note: "Birds and foliage decoration to the frame, hand-painted. Mirror plate has light foxing at the edges, original to the piece.",
  },
  {
    slug: "chinese-red-lacquer-cabinet",
    title: "Chinese red lacquer cabinet",
    era: "Mid-20th century",
    material: "Lacquered hardwood, brass fittings",
    price: "$2,000",
    category: "Furniture",
    sold: false,
    images: ["/collection/cabinet-red-lacquer.webp"],
    note: "Hand-painted landscape scenes to both doors, original circular brass lock plate. Currently doing double duty as a bar cabinet.",
  },
  {
    slug: "giltwood-bamboo-mirror",
    title: "Giltwood bamboo-form mirror",
    era: "20th century",
    material: "Carved giltwood, faux-bamboo moulding",
    price: "$550",
    category: "Objects",
    sold: false,
    images: ["/collection/mirror-bamboo.webp"],
    note: "Light gilt wear at the high points of the moulding, which we think only helps it. Hangs either orientation.",
  },
  {
    slug: "ceramic-pineapple-lamp",
    title: "Mid-century table lamp by Bondia Manises, Spain",
    era: "Mid-20th century, Bondia Manises",
    material: "Glazed ceramic, linen shade",
    price: "$1,500",
    category: "Lighting",
    sold: false,
    images: ["/collection/lamp-pineapple.webp"],
    note: "Rewired and tested. The shade is original — a little sun-warmed at one edge, barely visible once lit.",
  },
  {
    slug: "oak-dining-chairs-set-of-six",
    title: "Set of six oak dining chairs",
    era: "Mid-20th century",
    material: "Solid oak, striped upholstery",
    price: "$1,400",
    category: "Furniture",
    sold: false,
    images: ["/collection/dining-chairs.webp"],
    note: "Sold as a set of six. Upholstery is a later reupholster in good condition; frames are original and sturdy.",
  },
  {
    slug: "octagonal-bamboo-mirror",
    title: "Octagonal bamboo mirror",
    era: "20th century",
    material: "Bamboo frame",
    price: "$500",
    category: "Objects",
    sold: true,
    images: ["/collection/mirror-octagon-bamboo.webp"],
    note: "Simple and unfussy — pairs well with almost anything. One small age crack to the frame, stable and not worsening.",
  },
];

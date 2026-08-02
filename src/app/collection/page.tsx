import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Furniture", "Textiles", "Ceramics", "Lighting", "Objects"];

const pieces = [
  {
    title: "Bessarabian kilim",
    era: "Early 20th century",
    material: "260 × 310cm, hand-woven wool",
    price: "$2,600",
    category: "Textiles",
    image: "/collection/kilim.webp",
    note: "Excellent condition for its age. Colours have softened to a dust-rose and ochre that photographs slightly warmer than in person.",
  },
  {
    title: "Chinese blue & white ginger jar",
    era: "19th century, Kangxi-style",
    material: "Porcelain, fitted lid",
    price: "$980",
    category: "Ceramics",
    image: "/collection/ginger-jar.webp",
    note: "Found at a Sydney estate sale, provenance unclear beyond the last owner. No chips, one hairline glaze crackle to the base.",
  },
  {
    title: "Octagonal chinoiserie mirror",
    era: "Japonisme revival, early 20th c.",
    material: "130 × 100cm, hand-decorated gilt frame",
    price: "$3,400",
    category: "Objects",
    image: "/collection/mirror-chinoiserie.webp",
    note: "Birds and foliage decoration to the frame, hand-painted. Mirror plate has light foxing at the edges, original to the piece.",
  },
  {
    title: "Chinese red lacquer cabinet",
    era: "Mid-20th century",
    material: "Lacquered hardwood, brass fittings",
    price: "$3,800",
    category: "Furniture",
    image: "/collection/cabinet-red-lacquer.webp",
    note: "Hand-painted landscape scenes to both doors, original circular brass lock plate. Currently doing double duty as a bar cabinet.",
  },
  {
    title: "Giltwood bamboo-form mirror",
    era: "20th century",
    material: "Carved giltwood, faux-bamboo moulding",
    price: "$890",
    category: "Objects",
    image: "/collection/mirror-bamboo.webp",
    note: "Light gilt wear at the high points of the moulding, which we think only helps it. Hangs either orientation.",
  },
  {
    title: "Ceramic pineapple table lamp",
    era: "20th century",
    material: "Glazed ceramic, linen shade",
    price: "$620",
    category: "Lighting",
    image: "/collection/lamp-pineapple.webp",
    note: "Rewired and tested. The shade is original — a little sun-warmed at one edge, barely visible once lit.",
  },
  {
    title: "Set of six oak dining chairs",
    era: "Mid-20th century",
    material: "Solid oak, striped upholstery",
    price: "$2,100",
    category: "Furniture",
    image: "/collection/dining-chairs.webp",
    note: "Sold as a set of six. Upholstery is a later reupholster in good condition; frames are original and sturdy.",
  },
  {
    title: "Octagonal bamboo mirror",
    era: "20th century",
    material: "Bamboo frame",
    price: "$450",
    category: "Objects",
    image: "/collection/mirror-octagon-bamboo.webp",
    note: "Simple and unfussy — pairs well with almost anything. One small age crack to the frame, stable and not worsening.",
  },
];

export default function Collection() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:px-10 md:pt-20">
        <p className="eyebrow text-bronze">The Collection</p>
        <h1 className="font-display mt-3 max-w-2xl text-4xl md:text-5xl">
          Pieces currently passing through the showroom
        </h1>
        <p className="mt-5 max-w-xl text-ink-soft">
          Everything here is genuinely in use in Elizabeth Bay until it
          finds its next home — nothing is held in a warehouse waiting to
          be photographed. Ask about condition, dimensions, or provenance;
          we know each piece by hand.
        </p>
      </section>

      <nav
        aria-label="Filter by category"
        className="sticky top-[73px] z-40 border-y border-line/70 bg-plaster/95 backdrop-blur"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-6 py-4 md:px-10">
          {categories.map((c) => (
            <span
              key={c}
              className={`eyebrow cursor-default ${
                c === "All" ? "text-bronze" : "text-ink-soft"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-6xl divide-y divide-line/70 px-6 md:px-10">
        {pieces.map((p, i) => (
          <article
            key={p.title}
            className="grid gap-6 py-14 md:grid-cols-2 md:items-center md:gap-16 md:py-20"
          >
            <div
              className={`relative aspect-[4/5] w-full overflow-hidden border border-line/70 bg-paper ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <p className="eyebrow text-bronze">{p.category}</p>
              <h2 className="font-display mt-2 text-3xl md:text-4xl">
                {p.title}
              </h2>
              <p className="mt-1 text-ink-soft">{p.era}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
                {p.note}
              </p>
              <div className="mt-6 flex items-center gap-6">
                <span className="font-mono text-lg text-bronze">
                  {p.price}
                </span>
                <span className="text-sm text-ink-soft">{p.material}</span>
              </div>
              <Link
                href="/contact"
                className="eyebrow mt-6 inline-block underline decoration-line underline-offset-4 hover:text-bronze"
              >
                Ask About This Piece →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <p className="font-display text-2xl italic text-ink-soft md:text-3xl">
          Looking for something specific?
        </p>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          We source on request — tell us what you&rsquo;re after and we&rsquo;ll
          keep an eye out.
        </p>
        <Link
          href="/contact"
          className="eyebrow mt-6 inline-block rounded-full bg-ink px-6 py-3 text-plaster transition-colors hover:bg-bronze"
        >
          Send a Sourcing Request
        </Link>
      </section>
    </>
  );
}

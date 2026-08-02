import Link from "next/link";

const categories = ["All", "Furniture", "Textiles", "Ceramics", "Lighting", "Objects"];

const pieces = [
  {
    title: "French armoire",
    era: "c. 1860, Normandy",
    material: "Walnut, original iron fittings, key present",
    price: "$4,200",
    category: "Furniture",
    note: "Two doors have the original glass; the third was replaced sometime mid-century and shows a faint waver we've left alone.",
  },
  {
    title: "Chinese blue & white ginger jar",
    era: "19th century, Kangxi-style",
    material: "Porcelain, fitted wooden lid",
    price: "$980",
    category: "Ceramics",
    note: "Found at a Sydney estate sale, provenance unclear beyond the last owner. No chips, one hairline glaze crackle to the base.",
  },
  {
    title: "Bessarabian kilim",
    era: "Early 20th century",
    material: "260 × 310cm, hand-woven wool",
    price: "$2,600",
    category: "Textiles",
    note: "Excellent condition for its age. Colours have softened to a dust-rose and ochre that photographs slightly warmer than in person.",
  },
  {
    title: "Octagonal chinoiserie mirror",
    era: "Japonisme revival, early 20th c.",
    material: "130 × 100cm, hand-decorated gilt frame",
    price: "$3,400",
    category: "Objects",
    note: "Birds and foliage decoration to the frame, hand-painted. Mirror plate has light foxing at the edges, original to the piece.",
  },
  {
    title: "Colonial watercolour, W.H. Raworth",
    era: "19th century",
    material: "Framed, glazed",
    price: "$1,650",
    category: "Objects",
    note: "A harbourside scene, signed lower right. Frame is a later, sympathetic replacement.",
  },
  {
    title: "Chinese hardwood drum stool",
    era: "Openwork barrel form",
    material: "Carved hardwood",
    price: "$1,100",
    category: "Furniture",
    note: "Sturdy enough for daily use — this one currently lives by our fireplace, which is the point.",
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
              className={`aspect-[4/5] w-full border border-line/70 bg-paper ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
              aria-hidden
            />
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

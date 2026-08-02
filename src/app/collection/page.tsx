"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, pieces } from "@/data/pieces";

const filterOptions = [...categories, "Sold"];

export default function Collection() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? pieces
      : active === "Sold"
      ? pieces.filter((p) => p.sold)
      : pieces.filter((p) => p.category === active && !p.sold);

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
          {filterOptions.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`eyebrow transition-colors hover:text-bronze ${
                active === c ? "text-bronze" : "text-ink-soft"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </nav>

      {visible.length === 0 ? (
        <section className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10">
          <p className="text-ink-soft">
            Nothing in this category right now — check back soon, or ask us
            to keep an eye out.
          </p>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl divide-y divide-line/70 px-6 md:px-10">
          {visible.map((p, i) => (
            <article
              key={p.slug}
              className="grid gap-6 py-14 md:grid-cols-2 md:items-center md:gap-16 md:py-20"
            >
              <Link
                href={`/collection/${p.slug}`}
                className={`relative aspect-[4/5] w-full overflow-hidden border border-line/70 bg-paper ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className={`object-cover ${p.sold ? "grayscale" : ""}`}
                />
                {p.sold && (
                  <span className="eyebrow absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-plaster">
                    Sold
                  </span>
                )}
              </Link>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="eyebrow text-bronze">{p.category}</p>
                <h2 className="font-display mt-2 text-3xl md:text-4xl">
                  <Link href={`/collection/${p.slug}`} className="hover:text-bronze">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-1 text-ink-soft">{p.era}</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
                  {p.note}
                </p>
                <div className="mt-6 flex items-center gap-6">
                  <span
                    className={`font-mono text-lg ${
                      p.sold ? "text-ink-soft line-through" : "text-bronze"
                    }`}
                  >
                    {p.price}
                  </span>
                  <span className="text-sm text-ink-soft">{p.material}</span>
                </div>
                <Link
                  href={`/collection/${p.slug}`}
                  className="eyebrow mt-6 inline-block underline decoration-line underline-offset-4 hover:text-bronze"
                >
                  {p.sold ? "View Piece →" : "View & Enquire →"}
                </Link>
              </div>
            </article>
          ))}
        </section>
      )}

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

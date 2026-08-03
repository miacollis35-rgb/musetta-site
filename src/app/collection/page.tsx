"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, pieces, type Piece } from "@/data/pieces";

const filterOptions = [...categories, "Sold"];

export default function Collection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? pieces
      : active === "Sold"
      ? pieces.filter((p) => p.sold)
      : pieces.filter((p) => p.category === active && !p.sold);

  // Sold pieces always sink to the bottom of whatever's currently shown,
  // without disturbing the order otherwise.
  const visible = [...filtered].sort(
    (a, b) => Number(a.sold) - Number(b.sold)
  );

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:px-10 md:pt-20">
        <p className="eyebrow text-bronze">The Collection</p>
        <h1 className="font-display mt-3 max-w-2xl text-4xl md:text-5xl">
          Pieces currently passing through the showroom
        </h1>
        <p className="mt-5 max-w-xl text-ink-soft">
          Everything here is genuinely in use in Elizabeth Bay until it
          finds its next home. Ask about condition, dimensions, or
          provenance — we know each piece by hand.
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
        <section className="mx-auto max-w-6xl px-6 md:px-10">
          {visible.map((p, i) => (
            <PieceRow key={p.slug} piece={p} index={i} />
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

      <section className="border-t border-line/60 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <p className="font-display text-2xl italic text-ink-soft md:text-3xl">
            Saw a piece that isn&rsquo;t listed yet?
          </p>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            Some things in the room haven&rsquo;t made it onto the site yet.
            Send us an enquiry and we&rsquo;ll let you know if it&rsquo;s
            available.
          </p>
          <Link
            href="/contact"
            className="eyebrow mt-6 inline-block rounded-full border border-ink px-6 py-3 transition-colors hover:border-bronze hover:text-bronze"
          >
            Send an Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}

function PieceRow({ piece: p, index: i }: { piece: Piece; index: number }) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = p.images.length > 1;

  function next(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((n) => (n + 1) % p.images.length);
  }

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setImgIndex((n) => (n - 1 + p.images.length) % p.images.length);
  }

  return (
    <article
      className={`grid gap-6 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24 ${
        i > 0 ? "border-t border-line/60" : ""
      }`}
    >
      <Link
        href={`/collection/${p.slug}`}
        className={`group relative block aspect-[4/5] w-full overflow-hidden ${
          i % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <Image
          src={p.images[imgIndex]}
          alt={p.title}
          fill
          sizes="(min-width: 768px) 45vw, 90vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            p.sold ? "grayscale" : ""
          }`}
        />
        {p.sold && (
          <span className="eyebrow absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-plaster">
            Sold
          </span>
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-paper backdrop-blur-sm transition-colors duration-200 hover:bg-ink/60"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-paper backdrop-blur-sm transition-colors duration-200 hover:bg-ink/60"
            >
              <ArrowIcon direction="right" />
            </button>
            <span className="eyebrow absolute bottom-4 right-4 rounded-full bg-ink/40 px-3 py-1 text-paper backdrop-blur-sm">
              {imgIndex + 1} / {p.images.length}
            </span>
          </>
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
          {p.sold ? (
            <span className="eyebrow text-ink-soft">Sold</span>
          ) : (
            <span className="font-mono text-lg text-bronze">{p.price}</span>
          )}
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
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={direction === "left" ? "" : "rotate-180"}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

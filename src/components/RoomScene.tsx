"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pieces } from "@/data/pieces";

// Every hotspot below points at a real, currently-listed piece — pulled
// directly from the same data that drives the Collection page. Nothing
// here is staged or invented; these are simply two pieces from the
// catalogue that happen to appear in this particular corner of the room.
const hotspotSlugs: { slug: string; top: string; left: string }[] = [
  { slug: "octagonal-bamboo-mirror", top: "23%", left: "21%" },
  { slug: "ceramic-pineapple-lamp", top: "49%", left: "50%" },
];

export default function RoomScene() {
  const [active, setActive] = useState<string | null>(null);

  const hotspots = hotspotSlugs
    .map((h) => {
      const piece = pieces.find((p) => p.slug === h.slug);
      return piece ? { ...h, piece } : null;
    })
    .filter((h): h is { slug: string; top: string; left: string; piece: (typeof pieces)[number] } => h !== null);

  const activePiece = hotspots.find((h) => h.slug === active)?.piece;

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="relative aspect-[3/4] w-full overflow-hidden md:aspect-[4/5]">
        <Image
          src="/collection/mirror-octagon-bamboo.webp"
          alt="A corner of the Musetta showroom, with the octagonal bamboo mirror and the Bondia table lamp"
          fill
          sizes="(min-width: 768px) 800px, 100vw"
          className="object-cover"
        />

        {hotspots.map((h) => (
          <button
            key={h.slug}
            type="button"
            onClick={() => setActive(active === h.slug ? null : h.slug)}
            onMouseEnter={() => setActive(h.slug)}
            style={{ top: h.top, left: h.left }}
            className="group absolute -translate-x-1/2 -translate-y-1/2 p-3"
            aria-expanded={active === h.slug}
            aria-label={`${h.piece.title}, ${h.piece.sold ? "sold" : h.piece.price}`}
          >
            <span className="block h-2.5 w-2.5 rounded-full bg-paper ring-1 ring-ink/40 transition-transform duration-300 group-hover:scale-150" />
          </button>
        ))}
      </div>

      {/* Detail card */}
      <div className="mt-6 min-h-[6.5rem] border-t border-line/70 pt-6">
        {activePiece ? (
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <h3 className="font-display text-2xl">{activePiece.title}</h3>
              <p className="mt-1 max-w-md text-sm text-ink-soft">
                {activePiece.era}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-4">
              {activePiece.sold ? (
                <span className="eyebrow text-ink-soft">Sold</span>
              ) : (
                <span className="font-mono text-lg text-bronze">
                  {activePiece.price}
                </span>
              )}
              <Link
                href={`/collection/${activePiece.slug}`}
                className="eyebrow underline decoration-line underline-offset-4 hover:text-bronze"
              >
                View Piece →
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-sm text-ink-soft">
            The marked points are real pieces from the current collection,
            shown exactly where they sit in the room. Hover or tap a mark
            to see what it is.
          </p>
        )}
      </div>
    </div>
  );
}

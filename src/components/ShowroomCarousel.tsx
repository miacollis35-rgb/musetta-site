"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pieces } from "@/data/pieces";

type Hotspot = { slug: string; top: string; left: string };
type Scene = { id: string; image: string; alt: string; hotspots: Hotspot[] };

// Every hotspot points at a real, currently-listed piece — pulled from
// the same data that drives the Collection page. Nothing here is
// staged or invented.
const scenes: Scene[] = [
  {
    id: "chinoiserie-chairs",
    image: "/showroom/interior-chinoiserie-chairs.webp",
    alt: "The octagonal chinoiserie mirror and oak dining chairs in the Musetta showroom",
    hotspots: [
      { slug: "octagonal-chinoiserie-mirror", top: "22%", left: "50%" },
      { slug: "oak-dining-chairs-set-of-six", top: "68%", left: "50%" },
    ],
  },
{
    id: "bamboo-lamp",
    image: "/collection/mirror-octagon-bamboo.webp",
    alt: "The octagonal bamboo mirror and Bondia table lamp in the Musetta showroom",
    hotspots: [
      { slug: "octagonal-bamboo-mirror", top: "23%", left: "21%" },
      { slug: "ceramic-pineapple-lamp", top: "49%", left: "50%" },
    ],
  },
  {
    id: "lounge-harbour-view",
    image: "/showroom/lounge-harbour-view.jpg",
    alt: "The lounge seating and gilt mirror with a harbour view in the Musetta showroom",
    hotspots: [],
  },
  {
    id: "colour-block-corner",
    image: "/showroom/colour-block-corner.jpg",
    alt: "Colour-field paintings and a dot painting in a corner of the Musetta showroom",
    hotspots: [],
  },
  {
    id: "gilt-mirror-evening",
    image: "/showroom/gilt-mirror-evening.jpg",
    alt: "The gilt mirror and framed still life at golden hour in the Musetta showroom",
    hotspots: [],
  },
  {
    id: "mirror-harbour-reflection",
    image: "/showroom/mirror-harbour-reflection.jpg",
    alt: "The gilt mirror reflecting the harbour balcony in the Musetta showroom",
    hotspots: [],
  },
  {
    id: "abstracts-harbour-corner",
    image: "/showroom/abstracts-harbour-corner.jpg",
    alt: "Abstract paintings and framed prints with a harbour view in the Musetta showroom",
    hotspots: [],
  },
];

type Tooltip = { slug: string; x: number; y: number; pinned: boolean };

export default function ShowroomCarousel() {
  const [slide, setSlide] = useState(0);
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scene = scenes[slide];

  function goTo(i: number) {
    setSlide((i + scenes.length) % scenes.length);
    setTooltip(null);
  }

  function posFromEvent(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function handleEnter(e: React.MouseEvent, slug: string) {
    const { x, y } = posFromEvent(e);
    setTooltip((t) => (t?.pinned ? t : { slug, x, y, pinned: false }));
  }

  function handleMove(e: React.MouseEvent, slug: string) {
    const { x, y } = posFromEvent(e);
    setTooltip((t) => (t?.pinned ? t : { slug, x, y, pinned: false }));
  }

  function handleLeave() {
    setTooltip((t) => (t?.pinned ? t : null));
  }

  function handleClick(e: React.MouseEvent, slug: string) {
    e.stopPropagation();
    const { x, y } = posFromEvent(e);
    setTooltip((t) =>
      t?.slug === slug && t.pinned ? null : { slug, x, y, pinned: true }
    );
  }

  const tooltipPiece = tooltip ? pieces.find((p) => p.slug === tooltip.slug) : null;

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div
        ref={containerRef}
        className="relative aspect-[3/4] w-full overflow-hidden md:aspect-[4/5]"
        onClick={() => setTooltip((t) => (t?.pinned ? null : t))}
      >
        <Image
          key={scene.id}
          src={scene.image}
          alt={scene.alt}
          fill
          sizes="(min-width: 768px) 800px, 100vw"
          priority
          className="object-contain"
        />

        {scene.hotspots.map((h) => {
          const piece = pieces.find((p) => p.slug === h.slug);
          if (!piece) return null;
          return (
            <button
              key={h.slug}
              type="button"
              style={{ top: h.top, left: h.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 p-3"
              onMouseEnter={(e) => handleEnter(e, h.slug)}
              onMouseMove={(e) => handleMove(e, h.slug)}
              onMouseLeave={handleLeave}
              onClick={(e) => handleClick(e, h.slug)}
              aria-label={`${piece.title}, ${piece.sold ? "sold" : piece.price}`}
            >
              <span className="block h-2.5 w-2.5 rounded-full bg-paper ring-1 ring-ink/40 transition-transform duration-300 hover:scale-150" />
            </button>
          );
        })}

        {/* Tooltip that follows the cursor */}
        {tooltipPiece && tooltip && (
          <div
            className="pointer-events-none absolute z-20 w-56 -translate-x-1/2 rounded-sm bg-ink/90 px-4 py-3 text-paper shadow-lg"
            style={{
              left: Math.min(Math.max(tooltip.x, 112), (containerRef.current?.clientWidth ?? 400) - 112),
              top: Math.min(tooltip.y + 20, (containerRef.current?.clientHeight ?? 400) - 90),
            }}
          >
            <p className="font-display text-base leading-tight">{tooltipPiece.title}</p>
            <div className="mt-1.5 flex items-center justify-between gap-3">
              {tooltipPiece.sold ? (
                <span className="eyebrow text-paper/70">Sold</span>
              ) : (
                <span className="font-mono text-sm text-rose">{tooltipPiece.price}</span>
              )}
              <Link
                href={`/collection/${tooltipPiece.slug}`}
                className="eyebrow pointer-events-auto underline decoration-paper/40 underline-offset-4 hover:text-rose"
              >
                View Piece →
              </Link>
            </div>
          </div>
        )}

        {/* Carousel navigation */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goTo(slide - 1);
          }}
          aria-label="Previous room"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-paper backdrop-blur-sm transition-colors hover:bg-ink/60"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goTo(slide + 1);
          }}
          aria-label="Next room"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-paper backdrop-blur-sm transition-colors hover:bg-ink/60"
        >
          <ArrowIcon direction="right" />
        </button>

        <span className="eyebrow absolute bottom-4 right-4 rounded-full bg-ink/40 px-3 py-1 text-paper backdrop-blur-sm">
          {slide + 1} / {scenes.length}
        </span>
      </div>

      {/* Dots to jump between rooms */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {scenes.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show room ${i + 1}`}
            aria-pressed={i === slide}
            className={`h-1.5 rounded-full transition-all ${
              i === slide ? "w-6 bg-bronze" : "w-1.5 bg-line hover:bg-ink-soft"
            }`}
          />
        ))}
      </div>

      <p className="mt-4 text-center text-sm text-ink-soft">
        The marked points are real pieces from the current collection, shown
        exactly where they sit in the room. Hover or tap a mark to see what
        it is.
      </p>
    </div>
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

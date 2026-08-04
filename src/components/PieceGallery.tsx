"use client";
import { useState } from "react";
import Image from "next/image";
export default function PieceGallery({
  images,
  title,
  sold,
}: {
  images: string[];
  title: string;
  sold: boolean;
}) {
  const [active, setActive] = useState(0);
  const hasMultiple = images.length > 1;
  function next() {
    setActive((i) => (i + 1) % images.length);
  }
  function prev() {
    setActive((i) => (i - 1 + images.length) % images.length);
  }
  return (
    <div>
      <div
        className="group relative aspect-[4/5] w-full overflow-hidden bg-paper"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") next();
          if (e.key === "ArrowLeft") prev();
        }}
        tabIndex={hasMultiple ? 0 : undefined}
      >
        <Image
          src={images[active]}
          alt={`${title}${hasMultiple ? ` — photo ${active + 1}` : ""}`}
          fill
          sizes="(min-width: 768px) 45vw, 90vw"
          priority
          className={`object-cover select-none ${sold ? "grayscale" : ""}`}
          style={{ WebkitTouchCallout: "none" }}
          draggable={false}
        />
        {sold && (
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
              className="touch-manipulation absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-paper backdrop-blur-sm transition-colors duration-200 hover:bg-ink/60"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="touch-manipulation absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-paper backdrop-blur-sm transition-colors duration-200 hover:bg-ink/60"
            >
              <ArrowIcon direction="right" />
            </button>
            <span className="eyebrow absolute bottom-4 right-4 z-10 rounded-full bg-ink/40 px-3 py-1 text-paper backdrop-blur-sm">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>
      {hasMultiple && (
        <div className="mt-4 grid grid-cols-5 gap-3">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-pressed={active === i}
              className={`touch-manipulation relative aspect-square overflow-hidden transition-opacity ${
                active === i ? "opacity-100 ring-1 ring-bronze" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="120px"
                className={`object-cover select-none ${sold ? "grayscale" : ""}`}
                style={{ WebkitTouchCallout: "none" }}
                draggable={false}
              />
            </button>
          ))}
        </div>
      )}
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

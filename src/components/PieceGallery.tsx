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

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper">
        <Image
          src={images[active]}
          alt={`${title}${images.length > 1 ? ` — photo ${active + 1}` : ""}`}
          fill
          sizes="(min-width: 768px) 45vw, 90vw"
          priority
          className={`object-cover ${sold ? "grayscale" : ""}`}
        />
        {sold && (
          <span className="eyebrow absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-plaster">
            Sold
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-5 gap-3">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-pressed={active === i}
              className={`relative aspect-square overflow-hidden transition-opacity ${
                active === i ? "opacity-100 ring-1 ring-bronze" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="120px"
                className={`object-cover ${sold ? "grayscale" : ""}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

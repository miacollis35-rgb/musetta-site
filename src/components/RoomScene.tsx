"use client";

import { useState } from "react";
import Image from "next/image";

type Hotspot = {
  id: string;
  label: string;
  price: string;
  note: string;
  top: string;
  left: string;
};

const hotspots: Hotspot[] = [
  {
    id: "armchair",
    label: "1960s reading chair",
    price: "$1,450",
    note: "Reupholstered once, in the fabric you see now. The one everyone tries first.",
    top: "62%",
    left: "45%",
  },
  {
    id: "lamp",
    label: "Brass table lamp",
    price: "$320",
    note: "Rewired to current safety standard, original shade retained.",
    top: "58%",
    left: "63%",
  },
  {
    id: "cup",
    label: "Hand-thrown coffee cup",
    price: "$45",
    note: "Part of a set of six — sold individually or together.",
    top: "68%",
    left: "76%",
  },
  {
    id: "artwork",
    label: "Untitled harbour study",
    price: "$980",
    note: "Unsigned, found with the frame you see it in.",
    top: "26%",
    left: "83%",
  },
  {
    id: "mirror",
    label: "Oval wall mirror",
    price: "$560",
    note: "Foxed glass, original to the frame — we left it as found.",
    top: "28%",
    left: "30%",
  },
];

export default function RoomScene() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="relative w-full overflow-hidden rounded-sm border border-line/70 bg-paper">
        <Image
          src="/brand/room-scene.svg"
          alt="Illustration of the Musetta showroom — an armchair, side table, lamp, cup, artwork, and mirror, each available to enquire about"
          width={1200}
          height={760}
          className="h-auto w-full"
        />

        {hotspots.map((h) => (
          <button
            key={h.id}
            type="button"
            onClick={() => setActive(active === h.id ? null : h.id)}
            onMouseEnter={() => setActive(h.id)}
            style={{ top: h.top, left: h.left }}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            aria-expanded={active === h.id}
            aria-label={`${h.label}, ${h.price}`}
          >
            <span className="block h-3 w-3 rounded-full bg-bordeaux ring-4 ring-bordeaux/20 transition-transform group-hover:scale-125" />
            <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-bordeaux/60" />
          </button>
        ))}
      </div>

      {/* Detail card */}
      <div className="mt-6 min-h-[6.5rem] border-t border-line/70 pt-6">
        {active ? (
          (() => {
            const h = hotspots.find((x) => x.id === active)!;
            return (
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <h3 className="font-display text-2xl">{h.label}</h3>
                  <p className="mt-1 max-w-md text-sm text-ink-soft">
                    {h.note}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <span className="font-mono text-lg text-bronze">
                    {h.price}
                  </span>
                  <a
                    href="/contact"
                    className="eyebrow underline decoration-line underline-offset-4 hover:text-bronze"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            );
          })()
        ) : (
          <p className="text-sm text-ink-soft">
            Every marked point in this room is for sale, the same way it
            would be if you were standing in it. Hover or tap a mark to see
            what it is.
          </p>
        )}
      </div>
    </div>
  );
}

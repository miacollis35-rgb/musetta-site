"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/collection", label: "Collection" },
  { href: "/showroom", label: "Showroom" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-plaster/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Musetta home">
          <Image
            src="/brand/musetta-icon-transparent.png"
            alt=""
            width={376}
            height={309}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="font-display text-2xl tracking-wide">Musetta</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`eyebrow transition-colors hover:text-bronze ${
                pathname === l.href ? "text-bronze" : "text-ink-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="eyebrow rounded-full border border-ink px-4 py-2 transition-colors hover:border-bronze hover:text-bronze"
          >
            Request a Viewing
          </Link>
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-px w-6 bg-ink" />
          <span className="h-px w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line/70 px-6 pb-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="eyebrow py-3 text-ink-soft"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="eyebrow py-3 text-bronze"
          >
            Request a Viewing
          </Link>
        </nav>
      )}
    </header>
  );
}

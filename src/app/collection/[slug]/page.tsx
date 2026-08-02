import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { pieces } from "@/data/pieces";
import PieceGallery from "@/components/PieceGallery";

export function generateStaticParams() {
  return pieces.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = pieces.find((p) => p.slug === slug);
  if (!piece) return {};
  return {
    title: `${piece.title} — Musetta`,
    description: piece.note,
  };
}

export default async function PiecePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = pieces.find((p) => p.slug === slug);
  if (!piece) notFound();

  const related = pieces
    .filter((p) => p.category === piece.category && p.slug !== piece.slug)
    .slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-8 md:px-10">
        <Link
          href="/collection"
          className="eyebrow text-ink-soft underline decoration-line underline-offset-4 hover:text-bronze"
        >
          ← Full Collection
        </Link>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-10 md:py-14">
        <PieceGallery images={piece.images} title={piece.title} sold={piece.sold} />

        <div className="md:pt-4">
          <p className="eyebrow text-bronze">{piece.category}</p>
          <h1 className="font-display mt-2 text-4xl md:text-5xl">{piece.title}</h1>
          <p className="mt-2 text-ink-soft">{piece.era}</p>

          <div className="mt-8 flex items-baseline gap-6">
            {piece.sold ? (
              <span className="eyebrow text-ink-soft">Sold</span>
            ) : (
              <span className="font-mono text-2xl text-bronze">{piece.price}</span>
            )}
          </div>

          <p className="mt-6 max-w-md leading-relaxed text-ink-soft">{piece.note}</p>
          <p className="mt-4 border-t border-line/60 pt-4 text-sm text-ink-soft">
            {piece.material}
          </p>

          {piece.sold ? (
            <p className="mt-8 max-w-sm text-sm text-ink-soft">
              This piece has found its home. Interested in something similar?
              We source on request.
            </p>
          ) : null}

          <Link
            href="/contact"
            className="eyebrow mt-8 inline-block rounded-full bg-ink px-6 py-3 text-plaster transition-colors hover:bg-bronze"
          >
            {piece.sold ? "Ask About Something Similar" : "Enquire About This Piece"}
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line/60 bg-paper">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
            <p className="eyebrow text-bronze">More {piece.category}</p>
            <div className="mt-8 grid gap-10 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/collection/${r.slug}`} className="group">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={r.images[0]}
                      alt={r.title}
                      fill
                      sizes="30vw"
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                        r.sold ? "grayscale" : ""
                      }`}
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl group-hover:text-bronze">{r.title}</h3>
                    {r.sold ? (
                      <span className="eyebrow shrink-0 text-ink-soft">Sold</span>
                    ) : (
                      <span className="font-mono shrink-0 text-sm text-bronze">
                        {r.price}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

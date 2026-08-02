import Image from "next/image";
import Link from "next/link";
import { pieces } from "@/data/pieces";

const featured = pieces.filter((p) => !p.sold).slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <Image
          src="/hero/living-room-harbor.webp"
          alt="A sunlit corner of the Musetta showroom in Elizabeth Bay, overlooking the harbour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/45" />

        <div className="relative flex flex-col items-center">
          <p className="eyebrow text-paper/90">
            Antiques &middot; Hosted Dinners &middot; Elizabeth Bay
          </p>
          <Image
            src="/brand/musetta-logo-full-transparent.png"
            alt="Musetta"
            width={2197}
            height={634}
            priority
            className="mt-8 h-auto w-full max-w-2xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]"
          />
          <p className="font-display mt-8 max-w-xl text-2xl italic text-paper md:text-3xl">
            A living showroom for objects that were always meant to be used,
            not shelved.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/showroom"
              className="eyebrow rounded-full bg-paper px-6 py-3 text-ink transition-colors hover:bg-bronze hover:text-paper"
            >
              Step Into the Showroom
            </Link>
            <Link
              href="/collection"
              className="eyebrow rounded-full border border-paper/70 px-6 py-3 text-paper transition-colors hover:border-paper hover:bg-paper/10"
            >
              View the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Full-bleed interior — let the room speak */}
      <section className="relative aspect-[16/10] w-full md:aspect-[21/9]">
        <Image
          src="/collection/room-wide-harbor-2.webp"
          alt="The Musetta living room, Elizabeth Bay"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <p className="eyebrow absolute bottom-6 left-6 text-paper/90 md:bottom-8 md:left-10">
          Elizabeth Bay
        </p>
      </section>

      {/* What is Musetta — one tight statement */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-10 md:py-32">
          <div className="relative aspect-[3/4] w-full overflow-hidden md:-translate-y-6">
            <Image
              src="/collection/corner-console-lamp.webp"
              alt="A corner of the Musetta showroom"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-bronze">What is Musetta?</p>
            <p className="font-display mt-3 text-3xl leading-snug text-ink md:text-4xl">
              An apartment, not a shop.
            </p>
            <p className="mt-6 max-w-md text-ink-soft">
              You come as you would to a friend&rsquo;s home — music
              playing, coffee offered, sometimes champagne. The pieces are
              used, lived with, understood in context: a chair you
              actually sit in, artworks that reveal themselves slowly. If
              you do choose to take something home, it doesn&rsquo;t feel
              like shopping. It feels like carrying a piece of a life well
              lived into your own.
            </p>
          </div>
        </div>
      </section>

      {/* Selected objects — asymmetric, editorial */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-bronze">Recently Found</p>
            <h2 className="font-display mt-2 text-3xl md:text-4xl">
              A few pieces passing through
            </h2>
          </div>
          <Link
            href="/collection"
            className="eyebrow hidden shrink-0 underline decoration-line underline-offset-4 hover:text-bronze md:block"
          >
            Full Collection →
          </Link>
        </div>

        {featured.length > 0 && (
          <div className="grid gap-10 md:grid-cols-2">
            <PieceCard item={featured[0]} tall />
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-1">
              {featured.slice(1, 3).map((item) => (
                <PieceCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        )}

        <Link
          href="/collection"
          className="eyebrow mt-10 block text-center underline decoration-line underline-offset-4 hover:text-bronze md:hidden"
        >
          Full Collection →
        </Link>
      </section>

      {/* Full-bleed interior */}
      <section className="relative aspect-[4/5] w-full md:aspect-[16/9]">
        <Image
          src="/collection/corner-art-suzani.webp"
          alt="Art and a Suzani armchair in the Musetta showroom"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Hosted dinners */}
      <section className="bg-bordeaux text-plaster">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/collection/dining-chairs.webp"
              alt="Dining chairs set for a hosted evening at the Musetta showroom"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-rose">Hosted Dinners</p>
            <h2 className="font-display mt-3 text-3xl leading-snug md:text-4xl">
              The table is set with what&rsquo;s in the room — and everything
              on it can go home with you.
            </h2>
            <p className="mt-6 max-w-lg text-plaster/85">
              A handful of evenings each season, the showroom becomes a
              dinner table and a cocktail hour turns the viewing into a
              soirée. Small parties, a menu built around the season, and a
              room full of pieces you&rsquo;re welcome to ask about
              between courses.
            </p>
            <div className="mt-8 flex flex-col gap-4 border-t border-plaster/25 pt-8">
              <p className="font-mono text-sm text-plaster/70">
                Next evening
                <br />
                <span className="text-plaster">Sydney — dates by enquiry</span>
              </p>
              <Link
                href="/contact"
                className="eyebrow mt-2 w-fit rounded-full border border-plaster/60 px-6 py-3 transition-colors hover:border-plaster hover:bg-plaster hover:text-bordeaux"
              >
                Request an Invitation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing / visit */}
      <section className="mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
        <h2 className="font-display text-3xl md:text-4xl">
          Come and see for yourself
        </h2>
        <p className="mx-auto mt-5 max-w-md text-ink-soft">
          Viewings are by private appointment in Elizabeth Bay. No
          obligation to buy anything — you&rsquo;re welcome to sit down.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/showroom"
            className="eyebrow rounded-full bg-ink px-6 py-3 text-plaster transition-colors hover:bg-bronze"
          >
            Step Into the Showroom
          </Link>
          <Link
            href="/contact"
            className="eyebrow rounded-full border border-ink px-6 py-3 transition-colors hover:border-bronze hover:text-bronze"
          >
            Request a Viewing
          </Link>
        </div>
      </section>
    </>
  );
}

function PieceCard({
  item,
  tall,
}: {
  item: (typeof pieces)[number];
  tall?: boolean;
}) {
  return (
    <Link href={`/collection/${item.slug}`} className="group block">
      <div
        className={`relative w-full overflow-hidden ${
          tall ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={item.images[0]}
          alt={item.title}
          fill
          sizes="(min-width: 768px) 35vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl group-hover:text-bronze">
          {item.title}
        </h3>
        <span className="font-mono shrink-0 text-sm text-bronze">
          {item.price}
        </span>
      </div>
      <p className="mt-1 text-sm text-ink-soft">{item.note}</p>
    </Link>
  );
}

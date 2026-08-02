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
            Antiques &middot; Hosted Dinners &middot; Paris
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

      {/* The idea */}
      <section className="border-y border-line/70 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/collection/corner-console-lamp.webp"
              alt="A corner of the Musetta showroom in Elizabeth Bay"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-bronze">The Idea</p>
            <p className="font-display mt-3 text-3xl leading-snug text-ink md:text-4xl">
              Most galleries put a piece behind glass and call that respect.
              We think a chair wants to be sat in.
            </p>
            <p className="mt-6 max-w-lg text-ink-soft">
              Musetta began as a rejection of the white cube: the sterile
              grid of stock photography and price tags that flattens every
              object into the same catalogue page. Instead, our showroom is a
              lived-in apartment — nearly everything in it, down to the cup
              you drink from and the table you set it on, is for sale. You
              meet each piece the way you would in a friend&rsquo;s home:
              in use, in context, in conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured pieces */}
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

        <div className="grid gap-10 md:grid-cols-3">
          {featured.map((item) => (
            <Link
              key={item.slug}
              href={`/collection/${item.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-line/70 bg-plaster-deep transition-colors group-hover:border-bronze">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
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
          ))}
        </div>

        <Link
          href="/collection"
          className="eyebrow mt-10 block text-center underline decoration-line underline-offset-4 hover:text-bronze md:hidden"
        >
          Full Collection →
        </Link>
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
              dinner table. Small parties, a menu built around the season,
              and a room full of pieces you&rsquo;re welcome to ask about
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

      {/* Paris */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <p className="eyebrow text-bronze">Opening Soon</p>
        <h2 className="font-display mt-3 text-3xl md:text-4xl">
          Musetta is coming to Paris
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-ink-soft">
          A second showroom, a second table. Join the list to hear first
          about the opening, the first dinners, and the pieces making the
          journey.
        </p>
        <Link
          href="/contact"
          className="eyebrow mt-8 inline-block rounded-full bg-ink px-6 py-3 text-plaster transition-colors hover:bg-bronze"
        >
          Join the Paris List
        </Link>
      </section>
    </>
  );
}

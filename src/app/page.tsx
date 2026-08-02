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
            <p className="eyebrow text-bronze">What is Musetta?</p>
            <p className="font-display mt-3 text-3xl leading-snug text-ink md:text-4xl">
              A lived-in gallery, not a showroom you view from behind glass.
            </p>
            <p className="mt-6 max-w-lg text-ink-soft">
              Musetta is an apartment in Elizabeth Bay where art and
              furniture are experienced as part of everyday life, not
              displayed at a distance. You come as you would to a
              friend&rsquo;s home — there&rsquo;s music playing, coffee
              offered, sometimes champagne. You sit, you talk, you spend
              time. The pieces in the space are used, lived with, and
              understood in context: a chair you actually sit in, a sofa
              you sink into, artworks that reveal themselves slowly.
            </p>
            <p className="mt-4 max-w-lg text-ink-soft">
              Nothing here is forced or transactional. You&rsquo;re welcome
              to come simply to look, to be inspired, to see how art and
              design can live together. And if you do choose to take
              something home, it doesn&rsquo;t feel like shopping — it
              feels like carrying a piece of a life well lived into your
              own.
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

      {/* Interiors */}
      <section className="bg-plaster-deep">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <p className="eyebrow text-bronze">Interiors</p>
          <p className="font-display mt-4 text-2xl italic leading-snug text-ink md:text-3xl">
            Our rooms are crafted to excite and inspire, never to
            intimidate.
          </p>
          <p className="mt-6 text-ink-soft">
            Each space invites you to dream and be swept up in its charm —
            much like an encounter with Musetta herself. We balance
            sophistication with warmth, where every corner tells a story
            and every piece has purpose. This isn&rsquo;t a showroom that
            simply displays exceptional design; it demonstrates how
            extraordinary objects enhance the rhythm and beauty of
            everyday life. Here, you&rsquo;re not merely observing design
            — you&rsquo;re experiencing how it transforms a room into a
            sanctuary of self-expression and artistic dialogue.
          </p>
        </div>
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
            <p className="mt-4 max-w-lg text-plaster/85">
              The cocktail hour that opens each evening turns a viewing
              into a soirée. As guests move through the rooms, drink in
              hand, they engage with design in its most natural state —
              appreciation happens organically, and each piece becomes
              part of an evening to remember rather than an object to
              observe.
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

      {/* Lifestyle */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="eyebrow text-bronze">Lifestyle</p>
        <h2 className="font-display mt-3 text-3xl md:text-4xl">
          Art and design, encountered through living
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-ink-soft">
          An armchair holds a quiet morning. A dining table carries
          celebration and conversation. By seeing pieces used as
          they&rsquo;re meant to be, you come to recognise what resonates
          with your own way of living, rather than what simply looks
          good — all in a corner of Elizabeth Bay you&rsquo;re welcome to
          visit for yourself.
        </p>
        <Link
          href="/showroom"
          className="eyebrow mt-8 inline-block rounded-full bg-ink px-6 py-3 text-plaster transition-colors hover:bg-bronze"
        >
          Step Into the Showroom
        </Link>
      </section>
    </>
  );
}

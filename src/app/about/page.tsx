import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-4 pt-16 text-center md:pt-20">
        <p className="eyebrow text-bronze">About</p>
        <h1 className="font-display mt-3 text-4xl md:text-5xl">
          A collector&rsquo;s apartment, opened up
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-ink-soft">
          Musetta is a living showroom in Elizabeth Bay — an apartment
          overlooking the harbour, where antique furniture, art, and
          objects are lived with rather than displayed.
        </p>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xl overflow-hidden">
          <Image
            src="/about/harbour-terrace.webp"
            alt="The harbour view from the Musetta balcony, Elizabeth Bay"
            fill
            sizes="(min-width: 768px) 576px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
          <p className="text-ink-soft">
            It started with a simple frustration: the pieces we loved most
            never looked like themselves in a shop. A chair on a showroom
            floor, isolated under a spotlight, tells you nothing about
            whether you&rsquo;d actually want to sit in it. Scale, light,
            the way something sits against everything else in a room — all
            of that disappears the moment an object is treated as stock.
          </p>
          <p className="mt-6 text-ink-soft">
            So Musetta isn&rsquo;t staged as a shop. It&rsquo;s an
            apartment, genuinely lived in, where the furniture gets used,
            the art hangs the way art hangs in a home, and the kilim is
            underfoot rather than rolled up in a warehouse. Pieces are
            sourced with an eye for provenance and presence — things that
            have stood the test of time and still hold their own in a room
            today. When something sells, the room changes; another piece
            takes its place.
          </p>
          <p className="mt-6 text-ink-soft">
            A handful of evenings each season, that same room becomes a
            dinner table. The idea is the same one that runs through
            everything here: that you understand an object properly once
            you&rsquo;ve lived alongside it, not before.
          </p>
          <p className="mt-6 text-ink-soft">
            Viewings are by private appointment. There&rsquo;s no
            obligation to buy anything, and you&rsquo;re always welcome to
            sit down.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
        <h2 className="font-display text-3xl md:text-4xl">
          Come and see it for yourself
        </h2>
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

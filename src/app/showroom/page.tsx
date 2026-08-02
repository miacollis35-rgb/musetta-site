import Link from "next/link";
import Image from "next/image";
import ShowroomCarousel from "@/components/ShowroomCarousel";

export default function Showroom() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-4 pt-16 text-center md:pt-20">
        <p className="eyebrow text-bronze">The Showroom</p>
        <h1 className="font-display mt-3 text-4xl md:text-5xl">
          A room to live in, not walk through
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-ink-soft">
          Our showroom is an apartment in Elizabeth Bay, and we mean that
          literally. Try the room below the way you&rsquo;d try it in
          person.
        </p>
      </section>

      <section className="px-6 py-14 md:py-20">
        <ShowroomCarousel />
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/collection/mirror-gilt-ornate.webp"
              alt="A gilt mirror in the Musetta showroom"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-bronze">Why a Home, Not a Gallery</p>
            <p className="font-display mt-3 text-2xl leading-snug md:text-3xl">
              A price tag on a shelf tells you what something costs. A
              chair you&rsquo;ve sat in tells you what it&rsquo;s worth.
            </p>
            <p className="mt-6 text-ink-soft">
              A stock-grid catalogue is efficient, but it strips a piece of
              everything that made us want it — scale, light, the way it
              sits against something else in a room. So we keep pieces in
              use instead, and change the room as they sell and new ones
              arrive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-plaster-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow text-bronze">Visiting</p>
          <p className="mt-3 max-w-md text-ink-soft">
            Viewings are by private appointment, generally 45 minutes to an
            hour. No obligation to buy anything — you&rsquo;re welcome to
            sit down.
          </p>
          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-6 border-t border-line/60 pt-6 text-sm">
            <div>
              <dt className="eyebrow text-ink-soft">Location</dt>
              <dd className="mt-2">Elizabeth Bay, Sydney</dd>
            </div>
            <div>
              <dt className="eyebrow text-ink-soft">Availability</dt>
              <dd className="mt-2">By appointment, most weekdays</dd>
            </div>
            <div>
              <dt className="eyebrow text-ink-soft">Group size</dt>
              <dd className="mt-2">1–4 guests</dd>
            </div>
          </dl>
          <Link
            href="/contact"
            className="eyebrow mt-8 inline-block rounded-full bg-ink px-6 py-3 text-plaster transition-colors hover:bg-bronze"
          >
            Request a Viewing
          </Link>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-bronze">Art at Musetta</p>
            <h2 className="font-display mt-3 text-2xl leading-snug md:text-3xl">
              A living canvas for today&rsquo;s most compelling artistic
              voices.
            </h2>
            <p className="mt-6 text-ink-soft">
              We exhibit contemporary creators alongside the antiques —
              pieces you experience intimately, not behind velvet ropes.
              The rooms rotate thoughtfully, giving artists a platform that
              transcends the traditional white cube.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="eyebrow text-bronze">How We Collect</p>
        <h2 className="font-display mt-3 text-3xl md:text-4xl">
          Provenance and presence
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-ink-soft">
          We look for objects that have stood the test of time yet remain
          vibrantly relevant — sourced through auctions, private sales,
          and consignments, and chosen for how they contrast and converse
          with everything else in the room.
        </p>
      </section>
    </>
  );
}

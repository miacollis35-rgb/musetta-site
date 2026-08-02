import Link from "next/link";
import RoomScene from "@/components/RoomScene";

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
          literally — it&rsquo;s where pieces live between owners. Try the
          room below the way you&rsquo;d try it in person.
        </p>
      </section>

      <section className="px-6 py-14 md:py-20">
        <RoomScene />
      </section>

      <section className="border-y border-line/70 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
          <div>
            <p className="eyebrow text-bronze">Why a Home, Not a Gallery</p>
            <p className="font-display mt-3 text-2xl leading-snug md:text-3xl">
              A price tag on a shelf tells you what something costs. A
              chair you&rsquo;ve sat in tells you what it&rsquo;s worth.
            </p>
            <p className="mt-6 text-ink-soft">
              The stock-grid catalogue is efficient, but it strips a piece
              of everything that made us want it in the first place —
              scale, light, the way it sits against something else in a
              room. So instead of photographing pieces in isolation, we
              keep them in use, and change the room as they sell and new
              ones arrive.
            </p>
          </div>
          <div>
            <p className="eyebrow text-bronze">Visiting</p>
            <p className="mt-3 text-ink-soft">
              Viewings are by private appointment, generally 45 minutes to
              an hour. There&rsquo;s no obligation to buy anything, and
              you&rsquo;re welcome to sit down.
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between border-b border-line/70 pb-3">
                <dt className="text-ink-soft">Location</dt>
                <dd>Elizabeth Bay, Sydney</dd>
              </div>
              <div className="flex justify-between border-b border-line/70 pb-3">
                <dt className="text-ink-soft">Availability</dt>
                <dd>By appointment, most weekdays</dd>
              </div>
              <div className="flex justify-between pb-3">
                <dt className="text-ink-soft">Group size</dt>
                <dd>1–4 guests</dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="eyebrow mt-8 inline-block rounded-full bg-ink px-6 py-3 text-plaster transition-colors hover:bg-bronze"
            >
              Request a Viewing
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <p className="eyebrow text-bronze">Coming Next</p>
        <h2 className="font-display mt-3 text-3xl md:text-4xl">
          A second room, in Paris
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          The same idea, a second city. Details to follow as the space
          comes together.
        </p>
      </section>
    </>
  );
}

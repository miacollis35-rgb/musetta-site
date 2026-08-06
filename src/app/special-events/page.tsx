import ContactForm from "@/components/ContactForm";

export default function SpecialEvents() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow text-bronze">Special Events</p>
        <h1 className="font-display mt-3 text-4xl md:text-5xl">
          Where the showroom comes alive
        </h1>
        <p className="mt-5 text-ink-soft">
          From time to time we open our doors for something a little
          different — hosted dinners with local chefs and curated menus (you
          can even buy the plate you ate off), pop-up exhibitions featuring
          local and emerging artists, live drawing nights, and the occasional
          idea we haven&rsquo;t tried yet. Keep an eye out for upcoming
          dates, or get in touch to hear what&rsquo;s next.
        </p>
      </div>

      <div className="mt-16">
        <p className="eyebrow text-ink-soft">What we&rsquo;ve hosted (or want to)</p>
        <dl className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <dt className="font-display text-xl">Chef&rsquo;s table dinners</dt>
            <dd className="mt-2 text-ink-soft">
              A full course menu from a local chef, served among the art.
              The plate is part of the piece — take it home if you like it.
            </dd>
          </div>
          <div>
            <dt className="font-display text-xl">Pop-up exhibitions</dt>
            <dd className="mt-2 text-ink-soft">
              Short-run shows spotlighting local and emerging artists and
              makers.
            </dd>
          </div>
          <div>
            <dt className="font-display text-xl">Live drawing nights</dt>
            <dd className="mt-2 text-ink-soft">
              Casual, hands-on sessions with a working artist in the room.
            </dd>
          </div>
          <div>
            <dt className="font-display text-xl">Something else entirely</dt>
            <dd className="mt-2 text-ink-soft">
              If you&rsquo;ve got an idea for a pop-up at Musetta, we&rsquo;d
              love to hear it.
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-16 grid gap-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow text-ink-soft">Pitch us</p>
          <h2 className="font-display mt-3 text-2xl md:text-3xl">
            Have an idea of your own?
          </h2>
          <p className="mt-5 max-w-sm text-ink-soft">
            Whether it&rsquo;s a dinner, a show, a workshop, or something we
            haven&rsquo;t thought of — pitch it to us. If it fits, we&rsquo;ll
            help bring it to life, including catering and event support
            where needed.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

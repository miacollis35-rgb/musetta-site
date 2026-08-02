import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow text-bronze">Get in Touch</p>
          <h1 className="font-display mt-3 text-4xl md:text-5xl">
            Come and see it in person
          </h1>
          <p className="mt-5 max-w-sm text-ink-soft">
            Whether it&rsquo;s a piece, a place at the table, or just a
            question — write to us and we&rsquo;ll reply within a day or
            two.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="eyebrow text-ink-soft">Showroom</dt>
              <dd className="mt-1">
                Elizabeth Bay, Sydney
                <br />
                By private appointment
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-ink-soft">Email</dt>
              <dd className="mt-1">musettaelizabethbay@gmail.com</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

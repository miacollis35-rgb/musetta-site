import ContactForm from "@/components/ContactForm";

export default function Dinners() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow text-bronze">Dinners</p>
        <h1 className="font-display mt-3 text-4xl md:text-5xl">
          Pop-up dinners, hosted by local chefs
        </h1>
        <p className="mt-5 text-ink-soft">
          From time to time we host intimate pop-up dinners with local chefs
          — a full course menu, priced according to the chef and the menu on
          the night. Keep an eye out, or get in touch to hear about upcoming
          dates.
        </p>
      </div>

      <div className="mt-16 grid gap-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow text-ink-soft">Host your own</p>
          <h2 className="font-display mt-3 text-2xl md:text-3xl">
            Want to host a dinner of your own?
          </h2>
          <p className="mt-5 max-w-sm text-ink-soft">
            We can help you plan and cater a dinner for your own event —
            write to us and tell us what you have in mind.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

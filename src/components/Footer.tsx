import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-plaster-deep">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/brand/musetta-wordmark.svg"
              alt="Musetta"
              width={200}
              height={23}
              className="h-5 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              Antique furniture and curated hosted dinners, shown in the
              context of a life rather than the isolation of a shelf.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-ink-soft">Visit</p>
            <p className="text-sm leading-relaxed text-ink-soft">
              The Showroom — Elizabeth Bay, Sydney
              <br />
              By private appointment
              <br />
              <br />
              Musetta Paris — opening soon
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-ink-soft">Correspondence</p>
            <p className="text-sm leading-relaxed text-ink-soft">
              hello@musetta.com
              <br />
              <Link href="/contact" className="underline decoration-line underline-offset-4 hover:text-bronze">
                Enquire about a piece or an evening
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line/70 pt-6 text-xs text-ink-soft/80 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Musetta. All rights reserved.</p>
          <p className="font-mono">Sydney — Paris</p>
        </div>
      </div>
    </footer>
  );
}

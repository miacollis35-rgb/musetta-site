# Musetta

The Musetta marketing site — antiques, hosted dinners, and the "living
showroom" concept. Built with Next.js (App Router) and Tailwind CSS.

## Pages

- `/` — Home
- `/collection` — editorial listing of current pieces
- `/showroom` — the interactive living-showroom concept
- `/contact` — enquiry form

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Content you'll want to edit first

- **Placeholder copy & prices** — `src/app/page.tsx`, `src/app/collection/page.tsx`,
  and `src/components/RoomScene.tsx` all contain draft text and made-up
  prices. Swap in the real thing before launch.
- **Placeholder images** — the collection page and home page use plain
  colour blocks (`bg-plaster-deep` / `bg-paper` divs) as image placeholders.
  Replace these with real photography — drop images into `public/` and
  swap the `<div>` placeholders for `next/image`.
- **Contact form email delivery** — `src/app/api/contact/route.ts`
  currently just validates and logs submissions to the server console; it
  does not send an email yet. Easiest fix is [Resend](https://resend.com):

  ```bash
  npm install resend
  ```

  ```ts
  // src/app/api/contact/route.ts
  import { Resend } from "resend";
  const resend = new Resend(process.env.RESEND_API_KEY);

  // inside POST, after validation:
  await resend.emails.send({
    from: "Musetta <enquiries@yourdomain.com>",
    to: "hello@musetta.com",
    subject: `New enquiry: ${body.reason}`,
    text: `${body.name} (${body.email}):\n\n${body.message}`,
  });
  ```

  Then add `RESEND_API_KEY` as an environment variable in Vercel
  (Project → Settings → Environment Variables).

## Brand assets

`public/brand/` holds the logo family:
- `musetta-logo-full.svg` — the full script mark (primary logo)
- `musetta-icon.svg` — the standalone "M" flourish
- `musetta-wordmark.svg` — the serif MUSETTA wordmark
- `room-scene.svg` — the illustrated showroom used on `/showroom`

Fonts (Cormorant Garamond, Lora, Space Mono) are self-hosted as woff2
files in `src/fonts/` rather than loaded from Google's CDN — this avoids
sending EU visitor data to Google at request time, which matters for the
Paris launch, and saves a third-party network request.

## Deploying

See `DEPLOY.md` for a step-by-step walkthrough of getting this from your
computer onto GitHub and live on Vercel.

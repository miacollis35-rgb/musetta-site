import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "musettaelizabethbay@gmail.com";

// Uses Resend's shared "onboarding@resend.dev" sender, which works
// immediately with no setup — no domain to verify, nothing else to
// configure. The only requirement is a RESEND_API_KEY environment
// variable in Vercel (Project → Settings → Environment Variables).
//
// Later, if you want emails to arrive "from Musetta" instead of from
// resend.dev, verify your own domain in the Resend dashboard and change
// the `from` address below to something like
// "Musetta <enquiries@yourdomain.com>". Until then, this exact setup
// already delivers real emails to musettaelizabethbay@gmail.com.
const FROM_EMAIL = "Musetta Website <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }

  const { name, email, message } = body;
  const reason = typeof body.reason === "string" ? body.reason : "General enquiry";

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No API key configured yet — log instead of failing, so the form
    // still "works" (visitors don't see an error) while you finish
    // setting up RESEND_API_KEY in Vercel.
    // eslint-disable-next-line no-console
    console.log("New Musetta enquiry (RESEND_API_KEY not set, not emailed):", {
      name,
      email,
      reason,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry: ${reason} — ${name}`,
      text: `From: ${name} <${email}>\nReason: ${reason}\n\n${message}`,
    });

    if (error) {
      // eslint-disable-next-line no-console
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again." },
        { status: 502 }
      );
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

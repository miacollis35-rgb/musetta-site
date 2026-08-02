import { NextRequest, NextResponse } from "next/server";

// This route currently just validates and logs the enquiry.
// To actually receive these by email, wire in a provider such as Resend
// (https://resend.com) or Formspree — see the README for the two-line change.
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

  // eslint-disable-next-line no-console
  console.log("New Musetta enquiry:", {
    name: body.name,
    email: body.email,
    reason: body.reason,
    message: body.message,
  });

  return NextResponse.json({ ok: true });
}

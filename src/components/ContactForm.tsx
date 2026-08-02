"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line/70 bg-paper p-8">
        <p className="font-display text-2xl">Thank you.</p>
        <p className="mt-2 text-ink-soft">
          Your note has reached us — we&rsquo;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="reason" className="eyebrow mb-2 block text-ink-soft">
          I&rsquo;m writing about
        </label>
        <select
          id="reason"
          name="reason"
          defaultValue="Viewing request"
          className="w-full border border-line bg-paper px-4 py-3 text-ink focus:border-bronze"
        >
          <option>Viewing request</option>
          <option>Hosted dinner enquiry</option>
          <option>A specific piece</option>
          <option>Sourcing request</option>
          <option>Something else</option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-2 block text-ink-soft">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-line bg-paper px-4 py-3 text-ink focus:border-bronze"
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow mb-2 block text-ink-soft">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-line bg-paper px-4 py-3 text-ink focus:border-bronze"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow mb-2 block text-ink-soft">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-line bg-paper px-4 py-3 text-ink focus:border-bronze"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-bordeaux">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="eyebrow rounded-full bg-ink px-6 py-3 text-plaster transition-colors hover:bg-bronze disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}

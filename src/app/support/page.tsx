import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "@/site";

const faqs = [
  {
    question: "Which permissions does Summate ask for and why?",
    answer:
      "Summate requests Location (When In Use for map viewing, trail navigation, and weather forecasts; Always only during an active hike for background recording and live Bluetooth group sharing), Motion (barometric altimeter for elevation gain), and Bluetooth (direct group location sharing and emergency alerts without cell signal).",
  },
  {
    question: "How do I test group location sharing?",
    answer:
      "Testing group sharing requires two physical iPhones with Bluetooth turned on. Group location updates and emergency alerts travel directly between nearby devices over Bluetooth rather than through a server.",
  },
  {
    question: "How do I import GPX files?",
    answer:
      "Open a .gpx file from the iOS Files app or accept a route shared over AirDrop and choose Summate to import the route directly onto your device.",
  },
  {
    question: "How do I delete my data?",
    answer:
      "Delete individual saved routes inside Summate or uninstall the app from your device. Removing the app deletes locally stored routes, hike history, display name, avatar choice, and settings. You can also turn off Location, Motion, or Bluetooth permissions in iOS Settings.",
  },
  {
    question: "How do I opt out of Mapbox telemetry?",
    answer:
      'Tap the "i" attribution button on the map inside Summate and turn off Mapbox telemetry in the attribution dialog.',
  },
];

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support contact information and answers to common questions about Summate permissions, Bluetooth group sharing, GPX import, data deletion, and Mapbox telemetry.",
};

export default function SupportPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
      <header className="rounded-[28px] border border-border bg-surface p-7 sm:p-9">
        <span className="inline-flex rounded-full bg-surface-elevated px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cream">
          Help and Contact
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Support
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Questions about Summate, bug reports, or privacy requests can be sent by email.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3.5">
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center justify-center rounded-full bg-accent-button px-6 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Email {contactEmail}
          </a>
          <Link
            href="/privacy"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface-elevated px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-white/25"
          >
            View Privacy Policy
          </Link>
        </div>
      </header>

      <section className="pt-10" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-5">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-[24px] border border-border bg-surface p-6 sm:p-7"
            >
              <h3 className="text-base font-bold text-foreground">{item.question}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

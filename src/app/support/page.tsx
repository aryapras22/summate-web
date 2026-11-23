import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, developerName } from "@/site";

const faqs = [
  {
    id: "permissions",
    question: "Which permissions does Summate ask for and why?",
    answer:
      "Summate requests Location (When In Use for map viewing, trail navigation, and weather forecasts; Always only during an active hike for background recording and live Bluetooth group sharing), Motion (barometric altimeter for elevation gain), and Bluetooth (direct group location sharing and emergency alerts without cell signal).",
  },
  {
    id: "group-sharing",
    question: "How do I test group location sharing?",
    answer:
      "Testing group sharing requires two physical iPhones with Bluetooth turned on. Group location updates and emergency alerts travel directly between nearby devices over Bluetooth rather than through a server.",
  },
  {
    id: "gpx-import",
    question: "How do I import GPX files?",
    answer:
      "Open a .gpx file from the iOS Files app or accept a route shared over AirDrop and choose Summate to import the route directly onto your device.",
  },
  {
    id: "delete-data",
    question: "How do I delete my data?",
    answer:
      "Delete individual saved routes inside Summate or uninstall the app from your device. Removing the app deletes locally stored routes, hike history, display name, avatar choice, and settings. You can also turn off Location, Motion, or Bluetooth permissions in iOS Settings.",
  },
  {
    id: "mapbox-telemetry",
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
    <article className="doc-shell fade-in">
      <header id="support-contact" className="contact-card">
        <h1 className="doc-title">Support</h1>
        <p className="doc-lead">
          Questions about Summate, bug reports, or privacy requests can be sent
          by email to {developerName}.
        </p>

        <div className="contact-card__actions">
          <a href={`mailto:${contactEmail}`} className="cta-primary">
            Email support
          </a>
          <Link href="/privacy" className="quiet-link">
            Privacy policy
          </Link>
        </div>

        <p className="contact-card__address">
          Direct address:{" "}
          <a href={`mailto:${contactEmail}`} className="inline-link">
            {contactEmail}
          </a>
        </p>
      </header>

      <section aria-labelledby="faq" className="doc-section">
        <h2 id="faq" className="doc-section__heading">
          Frequently Asked Questions
        </h2>

        <nav aria-label="FAQ topics" className="doc-toc">
          <ul className="doc-toc__list">
            {faqs.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="doc-toc__link">
                  {item.id === "permissions" && "Permissions"}
                  {item.id === "group-sharing" && "Bluetooth sharing"}
                  {item.id === "gpx-import" && "GPX import"}
                  {item.id === "delete-data" && "Delete data"}
                  {item.id === "mapbox-telemetry" && "Mapbox opt out"}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          {faqs.map((item) => (
            <article key={item.id} id={item.id} className="faq-item">
              <h3 className="faq-item__q">{item.question}</h3>
              <p className="faq-item__a">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}

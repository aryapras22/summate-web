import type { Metadata } from "next";
import { contactEmail, developerName, effectiveDate } from "@/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Summate handles on-device data, Bluetooth group sharing, permissions, and third-party services.",
};

const policyAnchors = [
  { id: "data-collected", label: "Data collected" },
  { id: "how-used", label: "How each is used" },
  { id: "third-parties", label: "Third parties" },
  { id: "retention", label: "Retention" },
  { id: "deletion", label: "Deletion" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <article className="doc-shell fade-in">
      <header className="doc-header">
        <h1 className="doc-title">Privacy Policy</h1>
        <p className="doc-meta">
          Effective date: <time dateTime={effectiveDate}>{effectiveDate}</time>{" "}
          / Developer: {developerName}
        </p>
        <p className="doc-lead">
          Summate requires no account, operates no server of its own, includes
          no analytics or ads, and performs no tracking.
        </p>

        <nav aria-label="Privacy policy sections" className="doc-toc">
          <ul className="doc-toc__list">
            {policyAnchors.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="doc-toc__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="doc-sections">
        <section aria-labelledby="data-collected" className="doc-section">
          <h2 id="data-collected" className="doc-section__heading">
            Data Collected and How
          </h2>
          <ul className="doc-list">
            <li>
              <span className="doc-strong">Stored only on device:</span> routes,
              hike history, display name, avatar choice, and settings are saved
              locally using SwiftData, UserDefaults, and Keychain.
            </li>
            <li>
              <span className="doc-strong">Permissions:</span> Summate requests
              access to Location (When In Use and Always, with Always used only
              during an active hike), Motion (altimeter), and Bluetooth.
            </li>
            <li>
              <span className="doc-strong">Bluetooth:</span> display name,
              avatar, live location, and emergency alerts go directly to nearby
              group members&apos; devices over Bluetooth, not through any
              server.
            </li>
          </ul>
        </section>

        <section aria-labelledby="how-used" className="doc-section">
          <h2 id="how-used" className="doc-section__heading">
            How Each Is Used
          </h2>
          <ul className="doc-list">
            <li>
              Routes, hike history, display name, avatar choice, and settings
              are kept on your device to render trails, record hikes, display
              your chosen group profile, and store preferences.
            </li>
            <li>
              Location permission (When In Use, and Always only during an active
              hike) is used for map positioning, active hike recording in the
              background, Bluetooth group location sharing, route directions,
              and weather forecasts.
            </li>
            <li>
              Motion permission (altimeter) is used to measure barometric
              elevation changes during a hike.
            </li>
            <li>
              Bluetooth permission is used to exchange display name, avatar,
              live location, and emergency alerts directly with nearby group
              members&apos; devices.
            </li>
          </ul>
        </section>

        <section aria-labelledby="third-parties" className="doc-section">
          <h2 id="third-parties" className="doc-section__heading">
            Third Parties and Their Policies
          </h2>
          <p className="doc-section__body">
            Data is sent to third parties only to provide app features, sharing
            only what each service needs and relying on their privacy terms:
          </p>
          <ul className="doc-list">
            <li>
              <span className="doc-strong">Mapbox:</span> provides map tiles;
              the Directions API receives route start and end coordinates; the
              Maps SDK sends de-identified location and usage telemetry by
              default, and users can opt out via the map&apos;s &quot;i&quot;
              attribution button. Privacy policy:{" "}
              <a
                href="https://www.mapbox.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                https://www.mapbox.com/legal/privacy
              </a>
            </li>
            <li>
              <span className="doc-strong">Open-Meteo:</span> receives route
              coordinates for elevation data. Terms:{" "}
              <a
                href="https://open-meteo.com/en/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                https://open-meteo.com/en/terms
              </a>
            </li>
            <li>
              <span className="doc-strong">Apple WeatherKit:</span> receives
              location for weather forecasts. Privacy policy:{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                https://www.apple.com/legal/privacy/
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="retention" className="doc-section">
          <h2 id="retention" className="doc-section__heading">
            Retention
          </h2>
          <p className="doc-section__body">
            Data stays on your device until you delete routes or uninstall the
            app. Retention by third-party services (Mapbox, Open-Meteo, and
            Apple WeatherKit) follows their policies.
          </p>
        </section>

        <section aria-labelledby="deletion" className="doc-section">
          <h2 id="deletion" className="doc-section__heading">
            Deletion and Revoking Consent
          </h2>
          <ul className="doc-list">
            <li>
              Delete saved routes inside the app or uninstall the app to remove
              on-device data.
            </li>
            <li>
              Turn off Location, Motion, or Bluetooth permissions in iOS
              Settings at any time.
            </li>
            <li>
              Opt out of Mapbox telemetry via the map&apos;s &quot;i&quot;
              attribution button.
            </li>
          </ul>
        </section>

        <section aria-labelledby="children" className="doc-section">
          <h2 id="children" className="doc-section__heading">
            Children
          </h2>
          <p className="doc-section__body">
            Summate requires no account, operates no server of its own, and
            includes no analytics, ads, or tracking for any user, including
            children. Routes, hike history, display name, avatar choice, and
            settings stay on the device unless shared directly with nearby group
            members over Bluetooth.
          </p>
        </section>

        <section aria-labelledby="changes" className="doc-section">
          <h2 id="changes" className="doc-section__heading">
            Changes to the Policy
          </h2>
          <p className="doc-section__body">
            Updates to this privacy policy will be published on this page with
            an updated effective date.
          </p>
        </section>

        <section aria-labelledby="contact" className="doc-section">
          <h2 id="contact" className="doc-section__heading">
            Contact
          </h2>
          <dl className="doc-dl">
            <div className="doc-dl__row">
              <dt className="doc-dl__term">Effective date:</dt>
              <dd className="doc-dl__value">{effectiveDate}</dd>
            </div>
            <div className="doc-dl__row">
              <dt className="doc-dl__term">Developer:</dt>
              <dd className="doc-dl__value">{developerName}</dd>
            </div>
            <div className="doc-dl__row">
              <dt className="doc-dl__term">Email:</dt>
              <dd className="doc-dl__value">
                <a href={`mailto:${contactEmail}`} className="inline-link">
                  {contactEmail}
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </article>
  );
}

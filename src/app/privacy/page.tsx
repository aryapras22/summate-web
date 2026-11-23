import type { Metadata } from "next";
import { contactEmail, developerName, effectiveDate } from "@/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Summate handles on-device data, Bluetooth group sharing, WatchConnectivity sync, permissions, and third-party services.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <header className="border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted">
          Effective date: <time dateTime={effectiveDate}>{effectiveDate}</time> | Developer:{" "}
          {developerName}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Summate requires no account, operates no server of its own, includes no analytics or ads, and performs no tracking.
        </p>
      </header>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted">
        <section aria-labelledby="data-collected">
          <h2 id="data-collected" className="text-xl font-semibold text-foreground">
            Data Collected and How
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="text-foreground">Stored only on device:</span> routes, hike history, display name, avatar choice, and settings are saved locally using SwiftData, UserDefaults, and Keychain.
            </li>
            <li>
              <span className="text-foreground">Permissions:</span> Summate requests access to Location (When In Use and Always, with Always used only during an active hike), Motion (altimeter), and Bluetooth.
            </li>
            <li>
              <span className="text-foreground">Bluetooth:</span> display name, avatar, live location, and emergency alerts go directly to nearby group members&apos; devices over Bluetooth, not through any server.
            </li>
            <li>
              <span className="text-foreground">Device sync:</span> iPhone and Apple Watch sync directly over WatchConnectivity.
            </li>
          </ul>
        </section>

        <section aria-labelledby="how-used">
          <h2 id="how-used" className="text-xl font-semibold text-foreground">
            How Each Is Used
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Routes, hike history, display name, avatar choice, and settings are kept on your device to render trails, record hikes, display your chosen group profile, and store preferences.
            </li>
            <li>
              Location permission (When In Use, and Always only during an active hike) is used for map positioning, active hike recording in the background, Bluetooth group location sharing, route directions, and weather forecasts.
            </li>
            <li>
              Motion permission (altimeter) is used to measure barometric elevation changes during a hike.
            </li>
            <li>
              Bluetooth permission is used to exchange display name, avatar, live location, and emergency alerts directly with nearby group members&apos; devices.
            </li>
            <li>
              WatchConnectivity is used to keep routes and hike activity synced between your paired iPhone and Apple Watch.
            </li>
          </ul>
        </section>

        <section aria-labelledby="third-parties">
          <h2 id="third-parties" className="text-xl font-semibold text-foreground">
            Third Parties and Their Policies
          </h2>
          <p className="mt-3">
            Data is sent to third parties only to provide app features, sharing only what each service needs and relying on their privacy terms:
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <span className="text-foreground">Mapbox:</span> provides map tiles; the Directions API receives route start and end coordinates; the Maps SDK sends de-identified location and usage telemetry by default, and users can opt out via the map&apos;s &quot;i&quot; attribution button. Privacy policy:{" "}
              <a
                href="https://www.mapbox.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:opacity-90"
              >
                https://www.mapbox.com/legal/privacy
              </a>
            </li>
            <li>
              <span className="text-foreground">Open-Meteo:</span> receives route coordinates for elevation data. Terms:{" "}
              <a
                href="https://open-meteo.com/en/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:opacity-90"
              >
                https://open-meteo.com/en/terms
              </a>
            </li>
            <li>
              <span className="text-foreground">Apple WeatherKit:</span> receives location for weather forecasts. Privacy policy:{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:opacity-90"
              >
                https://www.apple.com/legal/privacy/
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="retention">
          <h2 id="retention" className="text-xl font-semibold text-foreground">
            Retention
          </h2>
          <p className="mt-3">
            Data stays on your device until you delete routes or uninstall the app. Retention by third-party services (Mapbox, Open-Meteo, and Apple WeatherKit) follows their policies.
          </p>
        </section>

        <section aria-labelledby="deletion">
          <h2 id="deletion" className="text-xl font-semibold text-foreground">
            Deletion and Revoking Consent
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Delete saved routes inside the app or uninstall the app to remove on-device data.</li>
            <li>Turn off Location, Motion, or Bluetooth permissions in iOS Settings at any time.</li>
            <li>Opt out of Mapbox telemetry via the map&apos;s &quot;i&quot; attribution button.</li>
          </ul>
        </section>

        <section aria-labelledby="children">
          <h2 id="children" className="text-xl font-semibold text-foreground">
            Children
          </h2>
          <p className="mt-3">
            Summate requires no account, operates no server of its own, and includes no analytics, ads, or tracking for any user, including children. Routes, hike history, display name, avatar choice, and settings stay on the device unless shared directly with nearby group members over Bluetooth.
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes" className="text-xl font-semibold text-foreground">
            Changes to the Policy
          </h2>
          <p className="mt-3">
            Updates to this privacy policy will be published on this page with an updated effective date.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" className="text-xl font-semibold text-foreground">
            Contact
          </h2>
          <dl className="mt-3 space-y-2">
            <div>
              <dt className="inline text-foreground">Effective date: </dt>
              <dd className="inline">{effectiveDate}</dd>
            </div>
            <div>
              <dt className="inline text-foreground">Developer: </dt>
              <dd className="inline">{developerName}</dd>
            </div>
            <div>
              <dt className="inline text-foreground">Email: </dt>
              <dd className="inline">
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-accent underline underline-offset-4 hover:opacity-90"
                >
                  {contactEmail}
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}

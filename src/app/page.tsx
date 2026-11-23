import Link from "next/link";
import { appStoreUrl } from "@/site";

const features = [
  {
    title: "Trail discovery with 3D map, weather, and elevation",
    description:
      "Inspect trails on a 3D terrain map, review route elevation profiles before you depart, and check local weather forecasts for your trailhead and route.",
  },
  {
    title: "GPX import and AirDrop sharing",
    description:
      "Import GPX route files into your on-device library from Files or other apps, and send saved routes directly to nearby hikers over AirDrop.",
  },
  {
    title: "Group location sharing over Bluetooth with no cell signal",
    description:
      "Connect directly with nearby hikers over Bluetooth without cellular coverage. Share your display name, avatar, live location, and send an emergency alert directly to group members' devices.",
  },
  {
    title: "Background hike recording with barometric altimeter",
    description:
      "Record hikes reliably in the background while your phone stays in your pocket. Track route progress, elapsed time, and elevation gain measured with the barometric altimeter.",
  },
  {
    title: "Apple Watch compass, navigation, and free hike",
    description:
      "Check your compass heading, follow turn-by-turn route guidance, or start an open free hike from Apple Watch, with routes and hike history synced to your iPhone.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <section className="border-b border-border pb-14">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          iPhone and Apple Watch
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Trail navigation and off-grid group safety with no account required.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Summate combines 3D trail maps, elevation profiles, weather forecasts, GPX import, background barometric hike recording, Apple Watch navigation, and peer-to-peer Bluetooth group sharing. Your routes and hike history stay on your device.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Download on the App Store
          </a>
          <Link
            href="/privacy"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-muted"
          >
            Read Privacy Policy
          </Link>
        </div>
      </section>

      <section className="pt-14" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-2xl font-semibold tracking-tight text-foreground">
          Built for the trail
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Core navigation, recording, and group safety tools designed to work when cellular coverage drops.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-medium text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

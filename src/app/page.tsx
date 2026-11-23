import Image from "next/image";
import Link from "next/link";
import { appStoreUrl } from "@/site";

const trailBears = [
  { src: "/brand/bear.png", alt: "Summate trail bear avatar" },
  { src: "/brand/bear-mustard.png", alt: "Mustard bear avatar" },
  { src: "/brand/bear-cyan.png", alt: "Cyan bear avatar" },
  { src: "/brand/bear-crimson.png", alt: "Crimson bear avatar" },
  { src: "/brand/bear-green.png", alt: "Green bear avatar" },
];

const groupBears = [
  { src: "/brand/bear-orange.png", alt: "Orange bear avatar" },
  { src: "/brand/bear-purple.png", alt: "Purple bear avatar" },
  { src: "/brand/bear-navy.png", alt: "Navy bear avatar" },
  { src: "/brand/bear-brown.png", alt: "Brown bear avatar" },
];

const features = [
  {
    id: "discovery",
    badge: "3D Maps and Weather",
    title: "Trail discovery with 3D map, weather, and elevation",
    description:
      "Inspect trails on a 3D terrain map, review route elevation profiles before you depart, and check local weather forecasts for your trailhead and route.",
  },
  {
    id: "gpx",
    badge: "Files and AirDrop",
    title: "GPX import and AirDrop sharing",
    description:
      "Import GPX route files into your on-device library from Files or other apps, and send saved routes directly to nearby hikers over AirDrop.",
  },
  {
    id: "bluetooth",
    badge: "Peer-to-Peer Bluetooth",
    title: "Group location sharing over Bluetooth without cell signal, plus emergency alert",
    description:
      "Connect directly with nearby hikers over Bluetooth without cellular coverage. Share your display name, bear avatar, live location, and send an emergency alert directly to group members' devices.",
  },
  {
    id: "recording",
    badge: "Barometric Altimeter",
    title: "Background hike recording with barometric altimeter",
    description:
      "Record hikes reliably in the background while your iPhone stays in your pocket. Track route progress, elapsed time, and elevation gain measured with the barometric altimeter.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10 sm:py-14">
      <section className="relative overflow-hidden rounded-[28px] border border-border bg-surface">
        <Image
          src="/brand/mountain-bg.jpg"
          alt="Mountain trail ridge at dusk"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background"
        />

        <div className="relative z-10 grid gap-8 p-7 sm:p-12 lg:grid-cols-[1.35fr_0.9fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-elevated/90 px-3.5 py-1.5">
              <span
                aria-hidden="true"
                className="h-4 w-4"
                style={{
                  background: "linear-gradient(180deg, #F0BA42 0%, #DFB556 100%)",
                  WebkitMaskImage: "url(/brand/logo-mark.svg)",
                  maskImage: "url(/brand/logo-mark.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
              <span className="text-xs font-semibold uppercase tracking-wider text-cream">
                For iPhone
              </span>
            </div>

            <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Trail navigation and off-grid group safety with no account required.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Summate combines 3D trail maps, elevation profiles, weather forecasts, GPX import and AirDrop sharing, background barometric hike recording, and peer-to-peer Bluetooth group sharing. Your routes and hike history stay on your device.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent-button px-7 py-3.5 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Download on the App Store
              </a>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface-elevated px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-white/25"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border border-border bg-surface/90 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background p-2.5">
                  <span
                    aria-hidden="true"
                    className="block h-full w-full"
                    style={{
                      background: "linear-gradient(180deg, #F0BA42 0%, #DFB556 100%)",
                      WebkitMaskImage: "url(/brand/logo-mark.svg)",
                      maskImage: "url(/brand/logo-mark.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Trail Group</p>
                  <p className="text-xs text-muted">Direct Bluetooth link, no cell signal</p>
                </div>
              </div>
              <span className="rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold text-cream">
                On Device
              </span>
            </div>

            <div className="mt-5 flex items-center -space-x-2.5">
              {trailBears.map((bear) => (
                <Image
                  key={bear.src}
                  src={bear.src}
                  alt={bear.alt}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-background bg-surface-elevated object-cover"
                />
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-background/80 px-4 pt-3">
              <Image
                src="/brand/mountain.png"
                alt="Summate mountain elevation artwork"
                width={1863}
                height={671}
                className="h-20 w-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-14" aria-labelledby="features-heading">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="features-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Built for the trail
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Core navigation, recording, and group safety tools designed for iPhone when cellular coverage drops.
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-semibold text-accent">
            iOS Only
          </span>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="flex flex-col justify-between rounded-[24px] border border-border bg-surface p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-surface-elevated px-3 py-1 text-xs font-semibold text-cream">
                    {feature.badge}
                  </span>
                  {feature.id === "bluetooth" && (
                    <span className="rounded-full bg-danger/20 px-3 py-1 text-xs font-semibold text-[#FFB4AA]">
                      Emergency Alert
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>

              {feature.id === "discovery" && (
                <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background/70 px-4 pt-3">
                  <Image
                    src="/brand/mountain.png"
                    alt="3D mountain terrain silhouette"
                    width={1863}
                    height={671}
                    className="h-16 w-full object-contain object-bottom"
                  />
                </div>
              )}

              {feature.id === "gpx" && (
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-3">
                  <span className="text-xs font-medium text-muted">Saved GPX Route</span>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    Ready for AirDrop
                  </span>
                </div>
              )}

              {feature.id === "bluetooth" && (
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-3">
                  <div className="flex items-center -space-x-2">
                    {groupBears.map((bear) => (
                      <Image
                        key={bear.src}
                        src={bear.src}
                        alt={bear.alt}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full border-2 border-background bg-surface-elevated object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-cream">4 Nearby Hikers</span>
                </div>
              )}

              {feature.id === "recording" && (
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3">
                  <Image
                    src="/brand/bear.png"
                    alt="Hiker bear mascot"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border border-border bg-surface-elevated object-cover"
                  />
                  <div className="text-xs">
                    <p className="font-semibold text-foreground">Active Hike Recording</p>
                    <p className="text-muted">Barometric elevation gain tracked in background</p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

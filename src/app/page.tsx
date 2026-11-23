import Image from "next/image";
import Link from "next/link";
import { appStoreUrl } from "@/site";

const groupBears = [
  { src: "/brand/bear-mustard.png", alt: "Mustard Summate bear avatar" },
  { src: "/brand/bear-cyan.png", alt: "Cyan Summate bear avatar" },
  { src: "/brand/bear-orange.png", alt: "Orange Summate bear avatar" },
  { src: "/brand/bear-green.png", alt: "Green Summate bear avatar" },
  { src: "/brand/bear-crimson.png", alt: "Crimson Summate bear avatar" },
  { src: "/brand/bear-purple.png", alt: "Purple Summate bear avatar" },
];

const checkpoints = [
  { id: "stage-01", num: "01", shortLabel: "Choose" },
  { id: "stage-02", num: "02", shortLabel: "Route" },
  { id: "stage-03", num: "03", shortLabel: "Climb" },
  { id: "stage-04", num: "04", shortLabel: "Summit" },
];

function MobileCheckpoint({ isSummit }: { isSummit?: boolean }) {
  if (isSummit) {
    return (
      <svg
        width="22"
        height="26"
        viewBox="0 0 22 26"
        className="stage__rail-icon"
        aria-hidden="true"
      >
        <line
          x1="7"
          y1="20"
          x2="7"
          y2="3"
          className="spine-desktop__flag-pole"
        />
        <path
          d="M 7 3 L 20 8 L 7 13 Z"
          className="spine-desktop__flag-cloth"
        />
        <circle cx="7" cy="20" r="4.5" className="spine-desktop__dot-ring" />
        <circle cx="7" cy="20" r="2" className="spine-desktop__dot-core" />
      </svg>
    );
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className="stage__rail-icon"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="6" className="spine-desktop__dot-ring" />
      <circle cx="9" cy="9" r="2.5" className="spine-desktop__dot-core" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero fade-in" aria-labelledby="hero-heading">
        <div className="hero__inner">
          <h1 id="hero-heading" className="hero__headline">
            Hike together where the signal ends.
          </h1>

          <p className="hero__support">
            3D trail maps, GPX routes, Bluetooth group location, and barometric
            recording for iPhone.
          </p>

          <div className="hero__actions">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Download on the App Store
            </a>
            <Link href="/privacy" className="quiet-link">
              Privacy policy
            </Link>
          </div>
        </div>
      </section>

      <section className="workflow" aria-label="Four stages of a hike">
        <div className="spine-desktop">
          <svg
            viewBox="0 0 1120 196"
            className="spine-desktop__svg"
            role="img"
            aria-label="Rising elevation profile across four hike stages ending at a summit flag"
          >
            <line x1="16" y1="46" x2="1104" y2="46" className="spine-desktop__grid" />
            <line x1="16" y1="96" x2="1104" y2="96" className="spine-desktop__grid" />
            <line x1="16" y1="146" x2="1104" y2="146" className="spine-desktop__grid" />
            <line x1="16" y1="184" x2="1104" y2="184" className="spine-desktop__grid" />

            <path
              d="M 24 176 C 68 172, 102 162, 140 158 C 205 152, 240 156, 295 144 C 345 133, 378 134, 420 128 C 485 118, 535 122, 595 104 C 635 92, 668 96, 700 90 C 765 78, 825 84, 888 64 C 928 51, 956 50, 980 46 C 1018 46, 1052 72, 1096 92 L 1096 184 L 24 184 Z"
              className="spine-desktop__area"
            />

            <line x1="140" y1="158" x2="140" y2="184" className="spine-desktop__drop" />
            <line x1="420" y1="128" x2="420" y2="184" className="spine-desktop__drop" />
            <line x1="700" y1="90" x2="700" y2="184" className="spine-desktop__drop" />
            <line x1="980" y1="46" x2="980" y2="184" className="spine-desktop__drop" />

            <path
              d="M 24 176 C 68 172, 102 162, 140 158 C 205 152, 240 156, 295 144 C 345 133, 378 134, 420 128 C 485 118, 535 122, 595 104 C 635 92, 668 96, 700 90 C 765 78, 825 84, 888 64 C 928 51, 956 50, 980 46 C 1018 46, 1052 72, 1096 92"
              className="spine-desktop__ridge"
            />

            <g>
              <line
                x1="980"
                y1="44"
                x2="980"
                y2="10"
                className="spine-desktop__flag-pole"
              />
              <path
                d="M 980 10 L 1014 19 L 980 28 Z"
                className="spine-desktop__flag-cloth"
              />
            </g>

            <g>
              <circle cx="140" cy="158" r="7" className="spine-desktop__dot-ring" />
              <circle cx="140" cy="158" r="3" className="spine-desktop__dot-core" />
            </g>
            <g>
              <circle cx="420" cy="128" r="7" className="spine-desktop__dot-ring" />
              <circle cx="420" cy="128" r="3" className="spine-desktop__dot-core" />
            </g>
            <g>
              <circle cx="700" cy="90" r="7" className="spine-desktop__dot-ring" />
              <circle cx="700" cy="90" r="3" className="spine-desktop__dot-core" />
            </g>
            <g>
              <circle cx="980" cy="46" r="8" className="spine-desktop__dot-ring" />
              <circle cx="980" cy="46" r="3.5" className="spine-desktop__dot-core" />
            </g>
          </svg>

          <nav aria-label="Hike stages" className="spine-desktop__checkpoints">
            {checkpoints.map((cp) => (
              <a key={cp.id} href={`#${cp.id}`} className="spine-node">
                <span className="spine-node__num">{cp.num}</span>
                <span>{cp.shortLabel}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="stages-list">
          <article id="stage-01" className="stage">
            <div className="stage__rail" aria-hidden="true">
              <MobileCheckpoint />
              <span className="stage__rail-line" />
            </div>

            <div className="stage__content">
              <div className="stage__copy">
                <p className="stage__label">01</p>
                <h2 className="stage__heading">Choose a mountain</h2>
                <p className="stage__body">
                  Inspect trails on a 3D terrain map, read route elevation
                  profiles before you leave camp, and check local weather
                  forecasts for your trailhead and ridge.
                </p>
                <ul className="stage__points" aria-label="Stage 01 capabilities">
                  <li className="stage__point">Trail discovery</li>
                  <li className="stage__point">3D terrain map</li>
                  <li className="stage__point">Weather forecast</li>
                  <li className="stage__point">Elevation profile</li>
                </ul>
              </div>

              <figure className="stage__visual">
                <div className="art-photo">
                  <Image
                    src="/brand/mountain-bg.jpg"
                    alt="Volcanic mountain ridge rising above morning cloud cover"
                    width={1350}
                    height={1800}
                    priority
                    className="art-photo__img"
                  />
                </div>
              </figure>
            </div>
          </article>

          <article id="stage-02" className="stage stage--flip">
            <div className="stage__rail" aria-hidden="true">
              <MobileCheckpoint />
              <span className="stage__rail-line" />
            </div>

            <div className="stage__content">
              <div className="stage__copy">
                <p className="stage__label">02</p>
                <h2 className="stage__heading">Bring your route</h2>
                <p className="stage__body">
                  Import GPX route files from the iOS Files app or other apps
                  into your on-device library, then send saved trails directly
                  to nearby hikers over AirDrop.
                </p>
                <ul className="stage__points" aria-label="Stage 02 capabilities">
                  <li className="stage__point">GPX import</li>
                  <li className="stage__point">AirDrop sharing</li>
                  <li className="stage__point">Saved on device</li>
                </ul>
              </div>

              <figure className="stage__visual">
                <div className="art-gpx">
                  <svg
                    viewBox="0 0 480 260"
                    className="art-gpx__svg"
                    role="img"
                    aria-label="Topographic contour rings with a dashed GPX trail connecting three waypoints"
                  >
                    <path
                      d="M 28 220 C 110 198, 175 232, 260 190 C 335 152, 395 168, 452 126"
                      className="art-gpx__contour"
                    />
                    <path
                      d="M 28 164 C 122 140, 198 164, 286 122 C 354 88, 404 94, 452 64"
                      className="art-gpx__contour"
                    />
                    <path
                      d="M 56 108 C 142 84, 222 104, 314 62 C 368 38, 412 36, 448 22"
                      className="art-gpx__contour"
                    />
                    <path
                      d="M 68 206 C 126 190, 148 148, 214 142 C 276 136, 294 92, 352 78 C 384 70, 404 58, 422 48"
                      className="art-gpx__track"
                    />
                    <circle cx="68" cy="206" r="7" className="art-gpx__waypoint" />
                    <circle cx="68" cy="206" r="3" className="art-gpx__waypoint-fill" />
                    <circle cx="214" cy="142" r="7" className="art-gpx__waypoint" />
                    <circle cx="214" cy="142" r="3" className="art-gpx__waypoint-fill" />
                    <circle cx="422" cy="48" r="8" className="art-gpx__waypoint" />
                    <circle cx="422" cy="48" r="3.5" className="art-gpx__waypoint-fill" />
                  </svg>
                </div>
              </figure>
            </div>
          </article>

          <article id="stage-03" className="stage">
            <div className="stage__rail" aria-hidden="true">
              <MobileCheckpoint />
              <span className="stage__rail-line" />
            </div>

            <div className="stage__content">
              <div className="stage__copy">
                <p className="stage__label">03</p>
                <h2 className="stage__heading">Climb together</h2>
                <p className="stage__body">
                  Connect directly with nearby hikers over Bluetooth when cell
                  signal disappears. Share your display name, bear avatar, and
                  live location peer to peer, with no server in between.
                </p>
                <div className="alert-callout">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="alert-callout__icon"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 1.75L14.5 13.25H1.5L8 1.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 6V9.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="8" cy="11.4" r="0.85" fill="currentColor" />
                  </svg>
                  <span>Emergency alert over direct Bluetooth</span>
                </div>
              </div>

              <figure className="stage__visual">
                <div className="art-bears__grid">
                  {groupBears.map((bear) => (
                    <div key={bear.src} className="art-bears__item">
                      <Image
                        src={bear.src}
                        alt={bear.alt}
                        width={200}
                        height={200}
                        className="art-bears__img"
                      />
                    </div>
                  ))}
                </div>
              </figure>
            </div>
          </article>

          <article id="stage-04" className="stage stage--flip">
            <div className="stage__rail" aria-hidden="true">
              <MobileCheckpoint isSummit />
            </div>

            <div className="stage__content">
              <div className="stage__copy">
                <p className="stage__label">04</p>
                <h2 className="stage__heading">Record the summit</h2>
                <p className="stage__body">
                  Record hikes in the background while your iPhone stays in your
                  pocket. Track elapsed time and elevation gain with the
                  barometric altimeter, with your hike history kept strictly on
                  your device.
                </p>
                <ul className="stage__points" aria-label="Stage 04 capabilities">
                  <li className="stage__point">Background recording</li>
                  <li className="stage__point">Barometric altimeter</li>
                  <li className="stage__point">History stays on device</li>
                </ul>
              </div>

              <figure className="stage__visual">
                <div className="art-summit">
                  <Image
                    src="/brand/mountain.png"
                    alt="Layered golden mountain silhouette topped with a summit flag"
                    width={1863}
                    height={671}
                    className="art-summit__img"
                  />
                </div>
              </figure>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

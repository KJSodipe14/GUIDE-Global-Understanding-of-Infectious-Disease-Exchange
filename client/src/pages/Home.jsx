import logo from '../assets/guide-logo.png';
import { Link } from 'react-router-dom';

// Small line-icon set — no emoji, matches the two-tone circle-badge look
const ICON_PATHS = {
  data: (
    <>
      <ellipse cx="12" cy="5" rx="7" ry="2.5" />
      <path d="M5 5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
      <path d="M5 11v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </>
  ),
  verify: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  route: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 7.5C10 10 14 14 17 16.5" strokeDasharray="1 3.2" />
    </>
  ),
  plane: <path d="M3 13l6-1 4-7 2 .5-2 6.5 6 1v2l-6 1 1 4-2 .5-3-4-5 1-1-2 3-2-3-1z" />,
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 9.5h16M8 3v4M16 3v4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c2.5 2.3 2.5 13.7 0 16M12 4c-2.5 2.3-2.5 13.7 0 16" />
    </>
  ),
  shield: <path d="M12 4l7 3v5c0 4.5-3 7.5-7 8-4-.5-7-3.5-7-8V7l7-3z" />,
  pulse: <path d="M3 12h4l2-6 4 12 2-6h6" />,
  network: (
    <>
      <circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" /><path d="M7.5 7l4 9.5M16.5 7l-4 9.5M8 6h8" />
    </>
  ),
};

function Icon({ name, size = 22 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

const iconCircle = {
  width: "44px",
  height: "44px",
  borderRadius: "12px",
  background: "var(--code-bg)",
  color: "var(--accent)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

function Home() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "72px 24px 0" }}>

        {/* Hero */}
        <div style={{ display: "flex", gap: "48px", alignItems: "center", marginBottom: "72px" }}>
          <div style={{ maxWidth: "600px", flex: "1 1 auto" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: "999px",
              border: "1px solid var(--border)",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.06em",
              color: "var(--accent)",
              marginBottom: "20px",
            }}
          >
            GUIDE — GLOBAL UNDERSTANDING OF INFECTIOUS DISEASE EXCHANGE
          </div>

          <h1
            style={{
              fontSize: "44px",
              fontWeight: "700",
              lineHeight: "1.2",
              color: "var(--text-h)",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            See where outbreaks are heading before they land.
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: "var(--text)",
              lineHeight: "1.7",
              marginBottom: "32px",
            }}
          >
            GUIDE connects live infectious disease reports to real flight
            routes, so you can see which cities are actually exposed — not
            just where an outbreak started.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
            {[
              "Outbreak data pulled daily from the WHO and verified sources",
              "Flight-route exposure mapped from outbreak city to destination",
              "Open dashboard built for public health research",
            ].map((text, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "6px",
                    background: "var(--code-bg)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5 9-9" />
                  </svg>
                </span>
                <span style={{ fontSize: "15px", color: "var(--text)" }}>{text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "14px" }}>
            <Link
              to="/map"
              style={{
                padding: "13px 26px",
                borderRadius: "8px",
                background:
                  "linear-gradient(90deg, #0EA39A 0%, #2E9E4B 33%, #0F6FAE 66%, #3B2B80 100%)",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Explore the Map →
            </Link>
            <a
              href="#how-it-works"
              style={{
                padding: "13px 26px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                color: "var(--text-h)",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              How It Works
            </a>
          </div>
          </div>

          <div
            style={{
              flex: "0 0 auto",
              width: "300px",
            }}
          >
            <img
              src={logo}
              alt="GUIDE logo"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* How It Works */}
        <div style={{ marginBottom: "16px" }} id="how-it-works" />
        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "var(--text-h)", marginBottom: "8px" }}>
          How It Works
        </h2>
        <p style={{ fontSize: "15px", color: "var(--text)", marginBottom: "28px" }}>
          From raw outbreak report to mapped flight risk, in three steps.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
            marginBottom: "64px",
          }}
        >
          {[
            {
              step: "01",
              icon: "data",
              title: "Data Collection",
              desc: "Outbreak reports are pulled daily from the WHO Disease Outbreak News API and supplemented with curated regional sources.",
            },
            {
              step: "02",
              icon: "verify",
              title: "AI Verification",
              desc: "Each report is parsed to extract location, case count, and status, then checked before it's added to the map.",
            },
            {
              step: "03",
              icon: "route",
              title: "Route Mapping",
              desc: "Outbreaks are matched to the nearest airports and mapped against real flight routes to any destination.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "28px 24px",
                borderRadius: "14px",
                border: "1px solid var(--border)",
                background: "var(--bg)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <div style={iconCircle}>
                  <Icon name={item.icon} />
                </div>
                <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--border)" }}>{item.step}</span>
              </div>
              <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "700", color: "var(--text-h)" }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--text)", lineHeight: "1.6" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <h2 style={{ fontSize: "24px", fontWeight: "700", color: "var(--text-h)", marginBottom: "28px" }}>
          Key Features
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "56px",
          }}
        >
          {[
            { icon: "plane", title: "Travel Risk Calculator", desc: "Calculate flight time and distance from any outbreak location to your target city." },
            { icon: "route", title: "Flight Information", desc: "View real flights between outbreak airports and destination airports." },
            { icon: "calendar", title: "Date Filtering", desc: "Filter outbreaks by date to see what was active on any given day." },
            { icon: "globe", title: "Global Coverage", desc: "Tracks 20+ infectious diseases across every continent." },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "22px",
                borderRadius: "14px",
                border: "1px solid var(--border)",
                background: "var(--code-bg)",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <div style={{ ...iconCircle, background: "var(--bg)" }}>
                <Icon name={item.icon} />
              </div>
              <div>
                <h3 style={{ margin: "0 0 6px 0", fontSize: "15px", fontWeight: "700", color: "var(--text-h)" }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--text)", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "36px 0 56px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {[
            { icon: "shield", title: "Verified Sources", sub: "WHO-sourced data" },
            { icon: "pulse", title: "Real-Time Updates", sub: "Refreshed daily" },
            { icon: "network", title: "Open Data", sub: "Built for research" },
            { icon: "globe", title: "Global Coverage", sub: "Every continent" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ ...iconCircle, width: "38px", height: "38px", borderRadius: "10px" }}>
                <Icon name={item.icon} size={18} />
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "var(--text-h)" }}>{item.title}</div>
                <div style={{ fontSize: "12px", color: "var(--text)" }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
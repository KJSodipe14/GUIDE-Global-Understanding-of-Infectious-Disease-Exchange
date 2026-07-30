function Home() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div
        style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px" }}
      >
        {/* Hero Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "64px",
            gap: "40px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                marginBottom: "16px",
                lineHeight: "1.2",
              }}
            >
              Don't wait for the news.{" "}
              <span style={{ color: "var(--accent)" }}>Track infectious disease spread across global air routes, in real time.</span>
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text)",
                marginBottom: "12px",
                lineHeight: "1.7",
              }}
            >
              Every outbreak. Every flight route. Every risk, mapped.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--text)",
                marginBottom: "32px",
                lineHeight: "1.7",
              }}
            >
              Don't just track outbreaks. Understand how they travel.
              AirborneTrack connects real-time infectious disease data to global
              air traffic, so you know the risk before you fly.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="/map"
                style={{
                  padding: "12px 24px",
                  borderRadius: "8px",
                  background: "var(--accent)",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                Try it out
              </a>
              <a
                href="#how-it-works"
                style={{
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  color: "var(--text-h)",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <h2
          id="how-it-works"
          style={{ fontSize: "28px", marginBottom: "24px" }}
        >
          How It Works
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {[
            {
              icon: "🦠",
              title: "Data Collection",
              desc: "Outbreak data is fetched daily from the WHO Disease Outbreak News API and supplemented with curated disease reports.",
            },
            {
              icon: "🤖",
              title: "AI Analysis",
              desc: "Each outbreak is analyzed by Google Gemini AI to extract location, case count, status, and pandemic potential.",
            },
            {
              icon: "🗺️",
              title: "Visualization",
              desc: "Outbreaks are geocoded and displayed on an interactive map with color-coded markers by disease type.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "24px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--code-bg)",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                {item.icon}
              </div>
              <h3 style={{ margin: "0 0 8px 0", color: "var(--text-h)" }}>
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "var(--text)",
                  lineHeight: "1.6",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Key Features</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          {[
            {
              icon: "✈️",
              title: "Travel Risk Calculator",
              desc: "Calculate flight time and distance from any outbreak location to your target city.",
            },
            {
              icon: "🛫",
              title: "Flight Information",
              desc: "View real flights between outbreak airports and destination airports.",
            },
            {
              icon: "📅",
              title: "Date Filtering",
              desc: "Filter outbreaks by date to see what was active on any given day.",
            },
            {
              icon: "🌍",
              title: "Global Coverage",
              desc: "Tracks 20+ infectious diseases across every continent.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--code-bg)",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "24px" }}>{item.icon}</span>
              <div>
                <h3
                  style={{
                    margin: "0 0 6px 0",
                    fontSize: "16px",
                    color: "var(--text-h)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    color: "var(--text)",
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

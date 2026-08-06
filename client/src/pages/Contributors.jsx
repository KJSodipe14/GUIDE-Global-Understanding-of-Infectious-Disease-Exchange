import kjPhoto from "../assets/kj.jpg";
import anujPhoto from "../assets/Anuj.jpg";
import inayatPhoto from "../assets/inayat2.png";

function Contributors() {
  const contributors = [
    {
      name: "Olukolajo Sodipe",
      role: "Intern - Full Stack Developer",
      org: "Discovery Partners Institute (DPI)",
      linkedin: "https://www.linkedin.com/in/olukolajo-sodipe/",
      photo: kjPhoto,
    },
    {
      name: "Anuj Tiwari",
      role: "Project Supervisor",
      org: "Discovery Partners Institute (DPI)",
      linkedin: "https://www.linkedin.com/in/dranujtiwari/",
      photo: anujPhoto,
    },
    {
      name: "Inayat Chandra",
      role: "Intern - Research & Data",
      org: "Discovery Partners Institute (DPI)",
      linkedin: "https://www.linkedin.com/in/inayat-chandra-08733441a/",
      photo: inayatPhoto,
    },
  ];

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div
        style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px" }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "8px",
            color: "var(--text-h)",
          }}
        >
          Contributors
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "var(--text)",
            marginBottom: "48px",
            lineHeight: "1.7",
          }}
        >
          The team behind GUIDE.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "24px",
          }}
        >
          {contributors.map((c, i) => (
            <div
              key={i}
              style={{
                padding: "32px 24px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--code-bg)",
                textAlign: "center",
              }}
            >
              {c.photo ? (
                <img
                  src={c.photo}
                  alt={c.name}
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0 auto 16px",
                    display: "block",
                    border: "2px solid var(--accent)",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "var(--code-bg)",
                    border: "2px solid var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "var(--accent)",
                  }}
                >
                  {c.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
              <h3
                style={{
                  margin: "0 0 6px 0",
                  fontSize: "18px",
                  color: "var(--text-h)",
                }}
              >
                {c.name}
              </h3>
              <p
                style={{
                  margin: "0 0 4px 0",
                  fontSize: "13px",
                  color: "var(--accent)",
                  fontWeight: "600",
                }}
              >
                {c.role}
              </p>
              <p
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "12px",
                  color: "var(--text)",
                }}
              >
                {c.org}
              </p>
              <a
                href={c.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: "1px solid var(--border)",
                  color: "var(--text-h)",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                LinkedIn →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contributors;
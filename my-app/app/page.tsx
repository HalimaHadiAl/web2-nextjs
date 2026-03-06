import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
        background: "linear-gradient(180deg,#f8fafc,#e2e8f0)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 60px",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontWeight: "700" }}>Web Programming II</h3>

        <Link href="/profile">
          <button
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
            }}
          >
            Profile
          </button>
        </Link>
      </nav>

      {/* HERO */}
      <section
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "800",
            marginBottom: "20px",
            background:
              "linear-gradient(90deg,#2563eb,#06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hello Next.js 🚀
        </h1>

        <p
          style={{
            maxWidth: "600px",
            fontSize: "18px",
            color: "#475569",
            lineHeight: "1.6",
          }}
        >
          Ini adalah project pertama saya pada mata kuliah
          <b> Pemrograman Web II</b>. Website ini dibuat menggunakan
          framework modern <b>Next.js</b>.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
          <Link href="/profile">
            <button
              style={{
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                background: "#2563eb",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Lihat Profile
            </button>
          </Link>

          <button
            style={{
              padding: "12px 24px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              background: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Learn Next.js
          </button>
        </div>
      </section>

      {/* CARD SECTION */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          paddingBottom: "60px",
          flexWrap: "wrap",
        }}
      >
        {[
          { title: "Next.js", text: "Framework React modern untuk web." },
          { title: "React", text: "Library JavaScript untuk UI interaktif." },
          { title: "Project", text: "Tugas Web Programming II." },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              width: "220px",
              padding: "20px",
              borderRadius: "12px",
              background: "white",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
            <p style={{ color: "#64748b", fontSize: "14px" }}>
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "14px",
          color: "#64748b",
        }}
      >
        Built with Next.js • Web Programming II
      </footer>
    </main>
  );
}
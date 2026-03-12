import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        background: "#f8fafc",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 60px",
          alignItems: "center",
          borderBottom: "1px solid #e2e8f0",
          background: "white",
        }}
      >
        <h3 style={{ fontWeight: "700" }}>Web Programming II</h3>

        <div style={{ display: "flex", gap: "10px" }}>
          <Link href="/about">
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid #2563eb",
                background: "white",
                color: "#2563eb",
                cursor: "pointer",
              }}
            >
              About
            </button>
          </Link>

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
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          Hello Next.js 👋
        </h1>

        <p
          style={{
            maxWidth: "600px",
            fontSize: "18px",
            color: "#475569",
            lineHeight: "1.6",
          }}
        >
          Halo! Website ini merupakan project pertama saya pada mata kuliah
          <b> Pemrograman Web II</b>.  
          Project ini dibuat untuk mempelajari dasar pengembangan aplikasi web
          menggunakan framework modern yaitu <b>Next.js</b>.
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
              Lihat Profil
            </button>
          </Link>

          <Link href="/about">
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
              Tentang Project
            </button>
          </Link>
        </div>
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
        © 2026 - Project Pemrograman Web II
      </footer>
    </main>
  );
}
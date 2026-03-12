import Link from "next/link";

export default function About() {
  const topics = [
    {
      title: "Next.js Framework",
      text: "Framework React modern yang digunakan untuk membangun aplikasi web dengan performa tinggi dan routing yang mudah.",
    },
    {
      title: "Routing System",
      text: "Next.js menggunakan sistem routing berbasis folder sehingga setiap halaman dapat dibuat dengan struktur folder yang sederhana.",
    },
    {
      title: "Rendering Web",
      text: "Mahasiswa mempelajari konsep rendering seperti CSR, SSR, SSG, dan ISR untuk meningkatkan performa dan SEO website.",
    },
    {
      title: "Version Control (Git)",
      text: "Git digunakan untuk melacak perubahan kode, melakukan commit, serta mengelola repository project secara kolaboratif.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
        background: "#f8fafc",
        padding: "40px",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "38px", marginBottom: "10px" }}>
          Tentang Project
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "auto",
            color: "#475569",
            lineHeight: "1.6",
          }}
        >
          Website ini dibuat sebagai bagian dari tugas mata kuliah
          <b> Pemrograman Web II</b>. Project ini bertujuan untuk
          mempelajari konsep dasar pengembangan web modern menggunakan
          framework <b>Next.js</b>.
        </p>
      </div>

      {/* HIGHLIGHT MATERI */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {topics.map((item) => (
          <div
            key={item.title}
            style={{
              width: "240px",
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>

            <p style={{ fontSize: "14px", color: "#64748b" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* INFO MAHASISWA */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#475569",
        }}
      >
        <p>
          Project ini dikerjakan oleh mahasiswa D3 Informatika:
        </p>

        <p><b>Halima Hadi Alfina</b></p>
        <p>NIM : 3.34.24.0.10</p>
      </div>

      {/* BUTTON */}
      <div style={{ textAlign: "center" }}>
        <Link href="/">
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
            Kembali ke Home
          </button>
        </Link>
      </div>
    </main>
  );
}
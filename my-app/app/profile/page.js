import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
        background: "linear-gradient(180deg,#f8fafc,#e2e8f0)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          maxWidth: "420px",
          textAlign: "center",
        }}
      >
        {/* FOTO */}
        <div
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 20px auto",
          }}
        >
          <Image
            src="/profile.png"
            alt="Foto Profil"
            width={130}
            height={130}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* NAMA */}
        <h1 style={{ marginBottom: "15px" }}>
          Halima Hadi Alfina
        </h1>

        {/* DATA MAHASISWA */}
        <div
          style={{
            textAlign: "left",
            margin: "0 auto",
            maxWidth: "260px",
            fontSize: "14px",
            color: "#475569",
            lineHeight: "1.8",
          }}
        >
          <p><strong>NIM</strong> : 3.34.24.0.10</p>
          <p><strong>Kelas</strong> : IK-2A</p>
          <p><strong>Jurusan</strong> : Teknik Elektro</p>
        </div>

        {/* DESKRIPSI */}
        <p
          style={{
            fontSize: "14px",
            color: "#475569",
            lineHeight: "1.6",
            marginTop: "20px",
          }}
        >
          Saya adalah mahasiswa yang memiliki minat pada pengembangan
          web terutama dalam bidang desain antarmuka dan pengalaman
          pengguna. Saya tertarik mempelajari teknologi web modern
          serta pendekatan pengembangan yang lebih ramah lingkungan.
        </p>

        {/* MINAT */}
        <div style={{ marginTop: "25px" }}>
          <h3 style={{ marginBottom: "12px" }}>Minat Topik Web</h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "#e0f2fe",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              UI/UX Design
            </span>

            <span
              style={{
                background: "#dcfce7",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              Green Computing
            </span>

            <span
              style={{
                background: "#ede9fe",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              Web Development
            </span>

            <span
              style={{
                background: "#fef9c3",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              No-Code Development
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <div style={{ marginTop: "30px" }}>
          <Link href="/">
            <button
              style={{
                padding: "10px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Kembali ke Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
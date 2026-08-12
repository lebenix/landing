// Dynamic OG image — auto-detected by Next.js, served at /opengraph-image
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lebenix — Software para nutricionistas en LATAM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1A2E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(59, 165, 143, 0.08)",
            right: -100,
            bottom: -100,
          }}
        />

        {/* Logo + nombre */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <img
            src="https://www.lebenix.com/logo.png"
            width={56}
            height={56}
            style={{ borderRadius: 14 }}
          />
          <span style={{ color: "white", fontSize: 36, fontWeight: 700 }}>Lebenix</span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "white",
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: 820,
            marginBottom: 24,
          }}
        >
          Tu consulta nutricional,{" "}
          <span style={{ color: "#3BA58F" }}>toda en un solo lugar</span>
        </div>

        {/* Subtítulo */}
        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 26, maxWidth: 680 }}>
          Software para nutricionistas en LATAM
        </div>
      </div>
    ),
    { ...size },
  );
}

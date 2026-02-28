import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AAC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
      }}
    >
      <div style={{ fontSize: 96, fontWeight: 700 }}>AAC</div>
      <div style={{ fontSize: 32, opacity: 0.8 }}>Your B2C SaaS Boilerplate</div>
    </div>,
    { ...size },
  );
}

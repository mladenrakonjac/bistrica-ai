import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bistrica.AI — Agentic AI for European Insurance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(140deg, #060E1E 0%, #0F2040 55%, #162B55 100%)",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow — top right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 580,
            height: 580,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 68%)",
          }}
        />
        {/* Glow — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: 80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(43,108,176,0.22) 0%, transparent 70%)",
          }}
        />

        {/* ── Logo row ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* Water drop SVG */}
          <svg width="52" height="66" viewBox="0 0 44 55" fill="none">
            <defs>
              <linearGradient id="og-drop" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#63B3ED" />
                <stop offset="48%" stopColor="#2B6CB0" />
                <stop offset="100%" stopColor="#1A365D" />
              </linearGradient>
            </defs>
            <path
              d="M22 1.5 C22 1.5 4 20 4 33 C4 43.5 12 52 22 52 C32 52 40 43.5 40 33 C40 20 22 1.5 22 1.5Z"
              fill="url(#og-drop)"
            />
            <ellipse cx="16" cy="19" rx="4.5" ry="8.5" fill="white" opacity="0.22" transform="rotate(-20 16 19)" />
            <ellipse cx="14" cy="13" rx="2.5" ry="4" fill="white" opacity="0.5" transform="rotate(-20 14 13)" />
          </svg>
          <span style={{ color: "white", fontSize: 46, fontWeight: 800, letterSpacing: -1 }}>
            bistrica<span style={{ color: "#63B3ED" }}>.AI</span>
          </span>
        </div>

        {/* ── Main headline ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              background: "rgba(99,179,237,0.12)",
              border: "1px solid rgba(99,179,237,0.28)",
              borderRadius: 6,
              padding: "6px 14px",
              width: "fit-content",
            }}
          >
            <span
              style={{
                color: "#63B3ED",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Agentic &amp; Generative AI · European Insurance
            </span>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                color: "white",
                fontSize: 78,
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: -3,
              }}
            >
              Insurance AI
            </span>
            <span
              style={{
                color: "#63B3ED",
                fontSize: 78,
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: -3,
              }}
            >
              that ships to production
            </span>
          </div>

          {/* River tagline */}
          <span
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: "0.02em",
              fontStyle: "italic",
            }}
          >
            Clear · Fast · Production-ready — like the river it&apos;s named after
          </span>
        </div>

        {/* ── Bottom stats bar ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
            width: "100%",
          }}
        >
          {[
            { value: "60%", label: "Faster claim processing" },
            { value: "94%", label: "OCR accuracy" },
            { value: "3×", label: "Underwriter decisions" },
            { value: "GDPR", label: "Compliant by design" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ color: "#63B3ED", fontSize: 28, fontWeight: 900, letterSpacing: -0.5 }}>
                {s.value}
              </span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontWeight: 500 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

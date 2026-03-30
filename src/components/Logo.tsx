import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  /** Use on dark backgrounds — text turns white */
  inverted?: boolean;
}

const dims = {
  sm: { h: 28, textSize: 15 },
  md: { h: 36, textSize: 19 },
  lg: { h: 48, textSize: 25 },
};

export default function Logo({ size = "md", inverted = false }: LogoProps) {
  const { h, textSize } = dims[size];
  const dropW = Math.round(h * 0.72);
  const total = dropW + 6 + Math.round(textSize * 5.1); // drop + gap + text width approx

  return (
    <Link href="/" className="inline-flex items-center group select-none">
      <svg
        width={total}
        height={h}
        viewBox={`0 0 ${total} ${h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Bistrica"
      >
        <defs>
          <linearGradient id="lg-drop" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%"   stopColor="#63B3ED" />
            <stop offset="48%"  stopColor="#2B6CB0" />
            <stop offset="100%" stopColor="#1A365D" />
          </linearGradient>
          {/* inner highlight */}
          <radialGradient id="lg-shine" cx="38%" cy="28%" r="42%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Water drop ── */}
        {/* Scale drop to fit height h, natural viewBox 0 0 44 55 */}
        <g transform={`scale(${h / 55})`}>
          {/* Drop body */}
          <path
            d="M22 1.5 C22 1.5 4 20 4 33 C4 43.5 12 52 22 52 C32 52 40 43.5 40 33 C40 20 22 1.5 22 1.5Z"
            fill="url(#lg-drop)"
          />
          {/* Highlight overlay */}
          <path
            d="M22 1.5 C22 1.5 4 20 4 33 C4 43.5 12 52 22 52 C32 52 40 43.5 40 33 C40 20 22 1.5 22 1.5Z"
            fill="url(#lg-shine)"
          />
          {/* White arc — edge highlight along lower-left inner rim of drop */}
          <path
            d="M 9 34 Q 8 40 11 46"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
        </g>

        {/* ── Wordmark ── */}
        <text
          x={dropW + 7}
          y={h * 0.72}
          fontFamily="Montserrat, system-ui, sans-serif"
          fontWeight="700"
          fontSize={textSize}
          letterSpacing="-0.3"
          fill={inverted ? "#ffffff" : "#1A365D"}
          className="group-hover:opacity-80 transition-opacity duration-200"
        >
          bistrica
        </text>
      </svg>
    </Link>
  );
}

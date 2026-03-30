import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showDot?: boolean;
}

const sizes = {
  sm: { drop: 24, text: "text-lg" },
  md: { drop: 32, text: "text-xl" },
  lg: { drop: 44, text: "text-2xl" },
};

export default function Logo({ size = "md", showDot = true }: LogoProps) {
  const { drop, text } = sizes[size];

  return (
    <Link href="/" className="flex items-center gap-2.5 group select-none">
      {/* Water drop SVG */}
      <svg
        width={drop}
        height={Math.round(drop * 1.25)}
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
      >
        <defs>
          <linearGradient id="dropGrad" x1="20" y1="0" x2="20" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#63B3ED" />
            <stop offset="50%" stopColor="#2B6CB0" />
            <stop offset="100%" stopColor="#1A365D" />
          </linearGradient>
          {/* Subtle highlight */}
          <radialGradient id="dropHighlight" cx="35%" cy="25%" r="40%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Drop shape */}
        <path
          d="M20 2C20 2 4 20 4 32C4 41.941 11.163 48 20 48C28.837 48 36 41.941 36 32C36 20 20 2 20 2Z"
          fill="url(#dropGrad)"
        />
        {/* Highlight overlay */}
        <path
          d="M20 2C20 2 4 20 4 32C4 41.941 11.163 48 20 48C28.837 48 36 41.941 36 32C36 20 20 2 20 2Z"
          fill="url(#dropHighlight)"
        />
        {/* Small white arc — AI symbol inside drop */}
        <path
          d="M12 38 Q16 34 20 38"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
      </svg>

      {/* Wordmark */}
      <span className={`font-bold tracking-tight ${text}`}>
        <span className="text-deep-navy">bistrica</span>
        {showDot && (
          <span className="text-royal-blue">.AI</span>
        )}
      </span>
    </Link>
  );
}

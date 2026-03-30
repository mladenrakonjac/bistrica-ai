import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const heights = { sm: 28, md: 36, lg: 48 };

export default function Logo({ size = "md" }: LogoProps) {
  const h = heights[size];
  // width is ~2.5x height based on the logo proportions (bistrica logo is wider than tall)
  const w = Math.round(h * 2.8);

  return (
    <Link href="/" className="flex items-center group">
      {/*
        The PNG has a light gray background.
        mix-blend-mode: multiply makes gray disappear on white/off-white backgrounds.
      */}
      <Image
        src="/logo.png"
        alt="Bistrica.AI"
        width={w}
        height={h}
        priority
        style={{ mixBlendMode: "multiply" }}
        className="group-hover:opacity-85 transition-opacity duration-200"
      />
      <span
        className="font-extrabold text-royal-blue -ml-1"
        style={{ fontSize: h * 0.44, lineHeight: 1 }}
      >
        .AI
      </span>
    </Link>
  );
}

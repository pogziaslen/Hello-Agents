/**
 * A flat, minimalist bee mark. Used across the site (nav, footer, reveal).
 * Colors are parameterized so the mark reads on both acid-yellow and dark bg.
 */
export default function BeeLogo({
  size = 36,
  className = "",
  dark = true,
}: {
  size?: number;
  className?: string;
  dark?: boolean;
}) {
  const body = dark ? "#0a0a0a" : "#d8f600";
  const accent = dark ? "#d8f600" : "#0a0a0a";
  const wing = dark ? "rgba(10,10,10,0.18)" : "rgba(216,246,0,0.25)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* wings */}
      <ellipse cx="31" cy="27" rx="17" ry="12" transform="rotate(-34 31 27)" fill={wing} stroke={body} strokeWidth="2.5" />
      <ellipse cx="65" cy="27" rx="17" ry="12" transform="rotate(34 65 27)" fill={wing} stroke={body} strokeWidth="2.5" />
      {/* antennae */}
      <path d="M41 32 C39 20 33 15 25 12" stroke={body} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M55 32 C57 20 63 15 71 12" stroke={body} strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="25" cy="12" r="3.4" fill={body} />
      <circle cx="71" cy="12" r="3.4" fill={body} />
      {/* head */}
      <ellipse cx="48" cy="36" rx="13" ry="12" fill={body} />
      <circle cx="53" cy="34" r="2.6" fill={accent} />
      {/* body */}
      <ellipse cx="48" cy="60" rx="21" ry="24" fill={body} />
      {/* stripes */}
      <path d="M27.5 54 Q48 48 68.5 54 L68 63 Q48 58 28 63 Z" fill={accent} />
      <path d="M27.2 70 Q48 64 68.8 70 L68 79 Q48 74 28 79 Z" fill={accent} />
      {/* stinger */}
      <path d="M48 84 L48 90" stroke={body} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

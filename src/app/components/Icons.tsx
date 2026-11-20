import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const HomeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
  </svg>
);

export const PatientsIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <circle cx="17.5" cy="9" r="2.5" />
    <path d="M17 14c2.8 0 4.5 1.8 4.5 4.5" />
  </svg>
);

export const CalendarIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export const MessageIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
  </svg>
);

export const CardIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M2.5 10h19M6 15h4" />
  </svg>
);

export const GearIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 14.5a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h0a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5h0a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v0a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
  </svg>
);

export const MoreVerticalIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <circle cx="12" cy="5" r="1.8" />
    <circle cx="12" cy="12" r="1.8" />
    <circle cx="12" cy="19" r="1.8" />
  </svg>
);

export const MoreHorizontalIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <circle cx="5" cy="12" r="1.8" />
    <circle cx="12" cy="12" r="1.8" />
    <circle cx="19" cy="12" r="1.8" />
  </svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.2-4.2" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const GenderFemaleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="M12 14v7M9 18h6" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 4h3.5l1.8 4.5-2.2 1.4a11 11 0 0 0 5.5 5.5l1.4-2.2L20 15v3.5a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4z" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.5 3 8 7.5 9.5 4.5-1.5 7.5-5 7.5-9.5V6z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </svg>
);

export const DownloadIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={2} {...p}>
    <path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
  </svg>
);

export const TriangleUpIcon = (p: IconProps) => (
  <svg viewBox="0 0 10 10" fill="currentColor" aria-hidden {...p}>
    <path d="M5 2 9 8H1z" />
  </svg>
);

export const TriangleDownIcon = (p: IconProps) => (
  <svg viewBox="0 0 10 10" fill="currentColor" aria-hidden {...p}>
    <path d="M5 8 1 2h8z" />
  </svg>
);

/* Illustrative vital icons (duotone, matching the design's colours). */

export const LungsIllustration = (p: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden {...p}>
    <path
      d="M30 6v22M30 28c-4 3-6 5-8 5M34 28c4 3 6 5 8 5"
      stroke="#072635"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M26 18c-6 2-14 12-15 26-.5 7 3 11 8 10 5-1 7-5 7-10V24c0-3-1-5-0-6z"
      fill="#a5d8f0"
      stroke="#1e7fb0"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M38 18c6 2 14 12 15 26 .5 7-3 11-8 10-5-1-7-5-7-10V24c0-3 1-5 0-6z"
      fill="#a5d8f0"
      stroke="#1e7fb0"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const ThermometerIllustration = (p: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden {...p}>
    <rect
      x="24"
      y="6"
      width="16"
      height="38"
      rx="8"
      fill="#fff"
      stroke="#072635"
      strokeWidth="2.5"
    />
    <circle cx="32" cy="50" r="9" fill="#e5484d" stroke="#072635" strokeWidth="2.5" />
    <path d="M32 18v30" stroke="#e5484d" strokeWidth="5" strokeLinecap="round" />
    <path
      d="M44 14h6M44 22h6M44 30h6"
      stroke="#072635"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const HeartIllustration = (p: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden {...p}>
    <path
      d="M32 55C14 42 6 32 6 22a13 13 0 0 1 26-3 13 13 0 0 1 26 3c0 10-8 20-26 33z"
      fill="#ff6b81"
      stroke="#072635"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M10 32h14l4-8 6 16 4-8h16"
      stroke="#072635"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Brand mark for the logo. */
export const LogoMark = (p: IconProps) => (
  <svg viewBox="0 0 48 48" aria-hidden {...p}>
    <path d="M24 2 34 12 24 22 14 12z" fill="#01f0d0" />
    <path d="M12 14 22 24 12 34 2 24z" fill="#1fb6d8" />
    <path d="M36 14 46 24 36 34 26 24z" fill="#0f8fbf" />
    <path d="M24 26 34 36 24 46 14 36z" fill="#01f0d0" />
  </svg>
);
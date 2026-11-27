// The LUPA mark: the lobatools wolf head with a magnifying glass as its only eye.
// Paths come from the brand canvas (brand/lupa-mark.svg); the clip keeps the glass handle inside the head.
const HEAD = 'M18.26 10.51 L42.95 40.68 L60.00 33.37 L77.05 40.68 L101.74 10.51 L98.97 63.10 L60.00 107.27 L21.03 63.10 Z'
const HEAD_CLIP = 'M14.78 1.52 L43.84 37.03 L60.0 30.1 L76.16 37.03 L105.22 1.52 L101.91 64.3 L60.0 111.8 L18.09 64.3 Z'

function Glass({ id, color }: { id: string; color: string }) {
  return (
    <>
      <defs>
        <clipPath id={id}>
          <path d={HEAD_CLIP} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <circle cx="44" cy="57" r="8" fill="none" stroke={color} strokeWidth="4.5" />
        <path d="M38.3 62.7 L19 82" stroke={color} strokeWidth="4.5" />
      </g>
    </>
  )
}

/** Two-colour mark for light backgrounds: ink head, Ocean lens. */
export function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <g transform="translate(60 60) scale(0.8989) translate(-60 -60)">
        <path d={HEAD} fill="#17171B" stroke="#17171B" strokeWidth="6" strokeLinejoin="round" />
        <Glass id="mark-clip" color="#0A72B8" />
      </g>
    </svg>
  )
}

/** The "Neon" dark-mode app icon: faded head on a dark tile, glowing lens. */
export function NeonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id="neon-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5A6578" />
          <stop offset="1" stopColor="#121A28" />
        </linearGradient>
        <filter id="neon-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="120" height="120" rx="27" fill="#0B1220" />
      <rect x="0.75" y="0.75" width="118.5" height="118.5" rx="26.3" fill="none" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.5" />
      <g transform="translate(18 18) scale(0.7)">
        <g transform="translate(60 60) scale(0.8989) translate(-60 -60)">
          <path d={HEAD} fill="url(#neon-fade)" stroke="url(#neon-fade)" strokeWidth="6" strokeLinejoin="round" />
        </g>
      </g>
      <g transform="translate(18 18) scale(0.7)" filter="url(#neon-glow)">
        <g transform="translate(60 60) scale(0.8989) translate(-60 -60)">
          <Glass id="neon-clip" color="#549CCD" />
        </g>
      </g>
    </svg>
  )
}

const BAND = 36;
const FLAP_TIP = { x: 350, y: 310 };

// A strip of the Khmer border running from one point to another, on one side of that line
function Band({
  x1,
  y1,
  x2,
  y2,
  side,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  side: 'above' | 'below';
}) {
  const length = Math.hypot(x2 - x1, y2 - y1);
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  const y = side === 'above' ? -BAND : 0;
  return (
    <g transform={`translate(${x1} ${y1}) rotate(${angle.toFixed(2)})`}>
      <rect y={y} width={length} height={BAND} fill="url(#gate-band)" />
      <path d={`M0 ${y}H${length}M0 ${y + BAND}H${length}`} stroke="#c9a350" strokeWidth="1.2" />
    </g>
  );
}

// Shared by the pockets and the flap, which are separate SVGs
export function EnvelopeDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <pattern id="gate-band" width="87.2" height={BAND} patternUnits="userSpaceOnUse">
          <rect width="87.2" height={BAND} fill="#3f4422" />
          <image href="/art/band.webp" y="2" width="87.2" height="32" preserveAspectRatio="none" />
        </pattern>
        <pattern id="gate-damask" width="150" height="103" patternUnits="userSpaceOnUse">
          <image href="/art/damask-ivory.webp" width="150" height="103" preserveAspectRatio="none" />
        </pattern>
        <pattern id="gate-damask-olive" width="150" height="103" patternUnits="userSpaceOnUse">
          <image href="/art/damask-olive.webp" width="150" height="103" preserveAspectRatio="none" />
        </pattern>
        {/* Shade over the damask, darkest at the outer edges */}
        <linearGradient id="gate-shade-left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity=".2" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gate-shade-right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity=".05" />
          <stop offset="1" stopColor="#000" stopOpacity=".28" />
        </linearGradient>
        <pattern id="gate-grain" width="140" height="140" patternUnits="userSpaceOnUse">
          <image href="/art/grain.webp" width="140" height="140" />
        </pattern>
        {/* Light falls from the top left, and each fold rounds away from it at the tip */}
        <linearGradient id="gate-light-flap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a2a10" stopOpacity=".16" />
          <stop offset=".1" stopColor="#fff" stopOpacity=".1" />
          <stop offset=".65" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#3a2a10" stopOpacity=".12" />
        </linearGradient>
        <linearGradient id="gate-light-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".14" />
          <stop offset="1" stopColor="#3a2a10" stopOpacity=".2" />
        </linearGradient>
        <filter id="gate-pocket-shadow" x="-5%" y="-10%" width="110%" height="120%">
          <feDropShadow dx="0" dy="-2" stdDeviation="4" floodColor="#1c1405" floodOpacity=".45" />
        </filter>
        <clipPath id="gate-left">
          <path d={`M0 0 ${FLAP_TIP.x} ${FLAP_TIP.y} 0 500Z`} />
        </clipPath>
        <clipPath id="gate-right">
          <path d={`M700 0 ${FLAP_TIP.x} ${FLAP_TIP.y} 700 500Z`} />
        </clipPath>
        <clipPath id="gate-bottom">
          <path d={`M0 500 ${FLAP_TIP.x} ${FLAP_TIP.y} 700 500Z`} />
        </clipPath>
        <clipPath id="gate-top">
          <path d={`M0 0H700L${FLAP_TIP.x} ${FLAP_TIP.y}Z`} />
        </clipPath>
      </defs>
    </svg>
  );
}

export function EnvelopePockets() {
  return (
    <svg viewBox="0 0 700 500" preserveAspectRatio="none" className="gate-pockets" aria-hidden>
      <path d={`M0 0 ${FLAP_TIP.x} ${FLAP_TIP.y} 0 500Z`} fill="url(#gate-damask-olive)" />
      <path d={`M700 0 ${FLAP_TIP.x} ${FLAP_TIP.y} 700 500Z`} fill="url(#gate-damask-olive)" />
      <path d={`M0 0 ${FLAP_TIP.x} ${FLAP_TIP.y} 0 500Z`} fill="url(#gate-shade-left)" />
      <path d={`M700 0 ${FLAP_TIP.x} ${FLAP_TIP.y} 700 500Z`} fill="url(#gate-shade-right)" />
      <g clipPath="url(#gate-left)">
        <Band x1={12} y1={0} x2={12} y2={500} side="above" />
      </g>
      <g clipPath="url(#gate-right)">
        <Band x1={688} y1={0} x2={688} y2={500} side="below" />
      </g>
      <path d={`M0 0 ${FLAP_TIP.x} ${FLAP_TIP.y} 700 0V500H0Z`} fill="url(#gate-grain)" />
      <g filter="url(#gate-pocket-shadow)">
        <g clipPath="url(#gate-bottom)">
          <path d={`M0 500 ${FLAP_TIP.x} ${FLAP_TIP.y} 700 500Z`} fill="url(#gate-damask)" />
          <Band x1={0} y1={500} x2={FLAP_TIP.x} y2={FLAP_TIP.y} side="below" />
          <Band x1={700} y1={500} x2={FLAP_TIP.x} y2={FLAP_TIP.y} side="above" />
          <path d={`M0 500 ${FLAP_TIP.x} ${FLAP_TIP.y} 700 500Z`} fill="url(#gate-light-bottom)" />
          <path d={`M0 500 ${FLAP_TIP.x} ${FLAP_TIP.y} 700 500Z`} fill="url(#gate-grain)" />
        </g>
      </g>
    </svg>
  );
}

export function FlapFront() {
  return (
    <svg viewBox="0 0 700 310" preserveAspectRatio="none" className="size-full" aria-hidden>
      <g clipPath="url(#gate-top)">
        <rect width="700" height="310" fill="url(#gate-damask)" />
        <Band x1={0} y1={0} x2={FLAP_TIP.x} y2={FLAP_TIP.y} side="above" />
        <Band x1={700} y1={0} x2={FLAP_TIP.x} y2={FLAP_TIP.y} side="below" />
        <rect width="700" height="310" fill="url(#gate-light-flap)" />
        <rect width="700" height="310" fill="url(#gate-grain)" />
        <path d="M0 1H700" stroke="#2c200a" strokeOpacity=".4" strokeWidth="2" />
        <path d="M0 3.5H700" stroke="#fff" strokeOpacity=".4" strokeWidth="1.5" />
        <path
          d={`M0 0 ${FLAP_TIP.x} ${FLAP_TIP.y} 700 0`}
          fill="none"
          stroke="#fff8e0"
          strokeOpacity=".6"
          strokeWidth="2.5"
        />
      </g>
    </svg>
  );
}

// Pressed wax: a round disc with an uneven, lobed edge
function waxPath() {
  const points: string[] = [];
  for (let i = 0; i < 360; i++) {
    const t = (i / 360) * Math.PI * 2;
    const r = 44 + 3.4 * Math.abs(Math.cos(t * 5)) + 0.9 * Math.sin(t * 3 + 1) + 0.6 * Math.sin(t * 7);
    points.push(`${(50 + Math.cos(t) * r).toFixed(2)} ${(50 + Math.sin(t) * r).toFixed(2)}`);
  }
  return `M${points.join('L')}Z`;
}

const WAX = waxPath();

export function WaxSeal() {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden>
      <defs>
        <linearGradient id="gate-wax" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2dc98" />
          <stop offset=".45" stopColor="#c49a45" />
          <stop offset=".75" stopColor="#e6c878" />
          <stop offset="1" stopColor="#9a7229" />
        </linearGradient>
        <radialGradient id="gate-wax-well">
          <stop offset="0" stopColor="#e3c473" />
          <stop offset="1" stopColor="#b98f3d" />
        </radialGradient>
        <filter id="gate-wax-relief" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.3" result="height" />
          <feSpecularLighting
            in="height"
            surfaceScale="3.2"
            specularConstant=".85"
            specularExponent="20"
            lightingColor="#fff4cf"
            result="gloss"
          >
            <fePointLight x="22" y="12" z="55" />
          </feSpecularLighting>
          <feComposite in="gloss" in2="SourceAlpha" operator="in" result="glossOnWax" />
          <feComposite in="SourceGraphic" in2="glossOnWax" operator="arithmetic" k2="1" k3=".85" />
        </filter>
      </defs>
      <g filter="url(#gate-wax-relief)">
        <path d={WAX} fill="url(#gate-wax)" stroke="#8a6524" strokeWidth=".5" />
      </g>
      {/* The stamp's pressed well: shaded on the lit side, catching light opposite */}
      <circle cx="50" cy="50" r="35" fill="url(#gate-wax-well)" />
      <circle cx="50" cy="50" r="34.6" fill="none" stroke="#7d5c1e" strokeOpacity=".7" strokeWidth="1.2" transform="translate(-.5 -.6)" />
      <circle cx="50" cy="50" r="35.6" fill="none" stroke="#fbeec2" strokeOpacity=".9" strokeWidth=".8" transform="translate(.5 .6)" />
    </svg>
  );
}

import { GraduationCap, Store, Utensils, type LucideIcon } from 'lucide-react';
import { WEDDING } from '@/src/data/wedding';

const [venueKind, venueName] = WEDDING.venue.name.split(' ');

const GROUND = '#1b1812';
const ROAD = '#3a362a';
const ROAD_EDGE = '#4d4737';
const GOLD = '#ecd28f';
const MUTED = '#c9c2ac';

const ROADS = [
  'M-800 500 L470 345 Q560 334 630 280',
  'M492 -20 L470 345 L470 620',
  'M612 -20 L630 280',
  'M630 280 L820 285',
  'M630 280 L690 620',
];

// From the old market roundabout to the restaurant, following the arrows printed on the card
const ROUTE = 'M820 285 L660 281 A30 30 0 1 0 606 298 Q560 334 470 345 L190 379 L190 356';

const SIDE_ARROWS = ['M481 130 L477 215', 'M470 540 L470 450'];

function Place({ icon: Icon, label, x, y }: { icon: LucideIcon; label: string; x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="24" fill={ROAD} stroke={ROAD_EDGE} strokeWidth="2" />
      <Icon x={x - 13} y={y - 13} width="26" height="26" color={GOLD} strokeWidth={1.75} />
      <text x={x} y={y + 56} textAnchor="middle" fontSize="25" fill={MUTED}>
        {label}
      </text>
    </g>
  );
}

// Redrawn from the map printed on the invitation card. It shows the way, not the exact scale.
// The viewBox holds the whole route. On wide frames the ground and main road carry on to the left, under the details card.
export function VenueMap() {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMaxYMid meet" aria-hidden className="block size-full font-sans">
      <defs>
        <pattern id="map-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#ffffff" opacity="0.07" />
        </pattern>
        <marker id="map-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill={MUTED} />
        </marker>
      </defs>

      <rect x="-1200" y="-200" width="2400" height="1000" fill={GROUND} />
      <rect x="-1200" y="-200" width="2400" height="1000" fill="url(#map-dots)" />

      <g fill="none" strokeLinejoin="round">
        <g stroke={ROAD_EDGE} strokeWidth="46">
          {ROADS.map((road) => (
            <path key={road} d={road} />
          ))}
        </g>
        <g stroke={ROAD} strokeWidth="42">
          {ROADS.map((road) => (
            <path key={road} d={road} />
          ))}
        </g>
      </g>
      <circle cx="630" cy="280" r="48" fill={ROAD} stroke={ROAD_EDGE} strokeWidth="2" />
      <circle cx="630" cy="280" r="16" fill={GROUND} stroke={ROAD_EDGE} strokeWidth="2" />

      <g fill="none" stroke={MUTED} strokeWidth="3" markerEnd="url(#map-arrow)" opacity="0.7">
        {SIDE_ARROWS.map((arrow) => (
          <path key={arrow} d={arrow} />
        ))}
      </g>

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d={ROUTE} className="map-route-draw" pathLength={1} strokeDasharray="1" stroke={GOLD} strokeWidth="16" opacity="0.2" />
        <path d={ROUTE} className="map-route-draw" pathLength={1} strokeDasharray="1" stroke={GOLD} strokeWidth="7" />
        <path d={ROUTE} className="map-route-flow" stroke="#fffaf0" strokeWidth="3" strokeDasharray="2 22" />
      </g>

      <Place icon={GraduationCap} label="BBU" x={262} y={462} />
      <Place icon={Store} label="ផ្សារក្រោម" x={372} y={480} />
      <Place icon={Store} label="ផ្សារចាស់" x={722} y={170} />
      <text textAnchor="middle" fontSize="23" fill={MUTED}>
        <tspan x="738" y="350">
          រង្វង់មូល
        </tspan>
        <tspan x="738" dy="32">
          ផ្សារចាស់
        </tspan>
      </text>

      <circle cx="190" cy="356" r="16" className="map-pulse" fill={GOLD} opacity="0.35" />
      <g className="map-pin">
      <path d="M190 356 C178 338 154 326 154 305 A36 36 0 1 1 226 305 C226 326 202 338 190 356 Z" fill={GOLD} />
      <circle cx="190" cy="305" r="26" fill={GROUND} />
      <Utensils x="175" y="290" width="30" height="30" color={GOLD} strokeWidth={2} />

      <rect x="86" y="178" width="208" height="84" rx="16" fill={GROUND} fillOpacity="0.9" stroke={GOLD} strokeOpacity="0.45" />
      <text x="190" y="212" textAnchor="middle" fontSize="22" fill={MUTED}>
        {venueKind}
      </text>
      <text x="190" y="247" textAnchor="middle" fontSize="28" fontWeight="600" fill={GOLD}>
        {venueName} (A)
      </text>
      </g>

      <g>
        <circle cx="752" cy="48" r="26" fill={GROUND} stroke={ROAD_EDGE} strokeWidth="2" />
        <path d="M752 28 L761 48 L743 48 Z" fill={GOLD} />
        <path d="M752 68 L761 48 L743 48 Z" fill={ROAD_EDGE} />
        <text x="752" y="100" textAnchor="middle" fontSize="20" fill={MUTED}>
          ជើង
        </text>
      </g>
    </svg>
  );
}

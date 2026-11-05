import { useId, type ReactNode } from 'react';
import clsx from 'clsx';
import { Ornament } from './ornament';

const W = 400;
const H = 520;

// An oval whose edge is broken into soft lobes, like the die-cut card
function scallopPath(scale: number, lobes = 22, depth = 0.032) {
  const points: string[] = [];
  for (let i = 0; i < 720; i++) {
    const t = (i / 720) * Math.PI * 2;
    const c = Math.cos(t);
    const s = Math.sin(t);
    const oval = (Math.abs(c) ** 2.35 + Math.abs(s) ** 2.35) ** (-1 / 2.35);
    const lobe = 1 - depth * (1 - Math.abs(Math.sin((t * lobes) / 2)) ** 0.55);
    const r = oval * lobe * scale;
    points.push(`${(W / 2 + c * r * (W / 2)).toFixed(1)} ${(H / 2 + s * r * (H / 2)).toFixed(1)}`);
  }
  return `M${points.join('L')}Z`;
}

const EDGE = scallopPath(0.985);
const INNER = scallopPath(0.915);

export function ScallopCard({
  tone,
  className,
  children,
}: {
  tone: 'ivory' | 'olive';
  className?: string;
  children: ReactNode;
}) {
  const id = useId();
  const ivory = tone === 'ivory';
  return (
    <div className={clsx('scallop', className)}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={ivory ? '#fdfbf0' : '#676d3e'} />
            <stop offset="1" stopColor={ivory ? '#f1edd8' : '#4f552d'} />
          </linearGradient>
        </defs>
        <path d={EDGE} fill={`url(#${id})`} />
        <path d={INNER} fill="none" stroke={ivory ? '#e2dcbe' : '#737a48'} strokeWidth="1.4" />
      </svg>
      <Ornament
        name="wreath"
        tone={ivory ? 'emboss-ivory' : 'emboss-olive'}
        className="absolute! inset-x-[11%] top-1/2 -translate-y-1/2"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">{children}</div>
    </div>
  );
}

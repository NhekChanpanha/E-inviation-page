import type { CSSProperties } from 'react';
import clsx from 'clsx';

const RATIOS = {
  wreath: '760 / 971',
  bloom: '440 / 488',
  medallion: '560 / 764',
  flower: '1 / 1',
  'ornament-line': '900 / 1150',
  'couple-hearts': '327 / 247',
} as const;

type OrnamentProps = {
  name: keyof typeof RATIOS;
  tone?: 'foil' | 'foil-deep' | 'ivory' | 'emboss-ivory' | 'emboss-olive';
  className?: string;
};

export function Ornament({ name, tone = 'foil', className }: OrnamentProps) {
  const style = {
    '--art': `url(/art/${name}.webp)`,
    aspectRatio: RATIOS[name],
  } as CSSProperties;
  return <span aria-hidden className={clsx('ornament', `ornament--${tone}`, className)} style={style} />;
}

// The small gold pieces scattered over the table
export function Token({ className }: { className?: string }) {
  return <Ornament name="flower" className={clsx('token', className)} />;
}

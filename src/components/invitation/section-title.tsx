import type { ReactNode } from 'react';
import clsx from 'clsx';
import { Ornament } from './ornament';

export function SectionTitle({
  children,
  tone = 'dark',
  className,
}: {
  children: ReactNode;
  // The surface behind the title: gold foil needs the deeper tone on ivory
  tone?: 'dark' | 'ivory';
  className?: string;
}) {
  const ivory = tone === 'ivory';
  return (
    <div className={clsx('reveal reveal-title flex flex-col items-center text-center', className)}>
      <h2 className="font-wedding text-[clamp(1.3rem,4vw,2.1rem)] leading-[1.9] font-normal">
        <span className={clsx('foil-text', ivory && 'foil-text--deep')}>{children}</span>
      </h2>
      <div className="section-rule">
        <Ornament name="flower" tone={ivory ? 'foil-deep' : 'foil'} className="w-5" />
      </div>
    </div>
  );
}

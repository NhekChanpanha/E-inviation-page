import { useId } from 'react';
import clsx from 'clsx';

// Opened envelope, flap lifted to show the painted liner
export function OpenEnvelope({ className }: { className?: string }) {
  const clip = useId();
  return (
    <div className={clsx('relative aspect-7/8 drop-shadow-(--shadow-piece)', className)}>
      <svg viewBox="0 0 700 800" className="absolute inset-0 size-full" aria-hidden>
        <defs>
          <clipPath id={clip}>
            <path d="M30 330 350 28 670 330V770H30Z" />
          </clipPath>
        </defs>
        <path d="M0 330 350 0 700 330V800H0Z" fill="#5b6136" />
        <image
          href="/art/pond.webp"
          x="-60"
          y="10"
          width="820"
          height="780"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clip})`}
        />
        <path d="M0 330 350 610 0 800Z" fill="#5a6035" stroke="#4a4f2a" />
        <path d="M700 330 350 610 700 800Z" fill="#555b31" stroke="#4a4f2a" />
        <path d="M0 800 350 545 700 800Z" fill="#62683a" stroke="#4a4f2a" />
      </svg>
    </div>
  );
}

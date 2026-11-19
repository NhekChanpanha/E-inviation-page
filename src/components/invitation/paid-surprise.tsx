'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { Heart, PartyPopper, X } from 'lucide-react';
import { WEDDING } from '@/src/data/wedding';
import { Ornament } from './ornament';

type Kind = 'flower' | 'heart' | 'paper';

// Fixed values rather than Math.random() so server and client render the same.
const PIECES = Array.from({ length: 48 }, (_, i) => {
  const angle = (i * 137.5) % 360; // golden angle spreads them evenly
  const rad = (angle * Math.PI) / 180;
  const reach = 30 + ((i * 53) % 25); // vmin
  const kind: Kind = i % 5 === 0 ? 'heart' : i % 3 === 0 ? 'flower' : 'paper';
  return {
    id: i,
    kind,
    dx: Math.cos(rad) * reach,
    dy: Math.sin(rad) * reach - 10,
    spin: ((i * 97) % 720) - 360,
    size: kind === 'paper' ? 0.5 + ((i * 7) % 5) / 10 : 1.1 + ((i * 11) % 6) / 10,
    delay: (i % 6) * 0.03,
    hue: i % 4,
  };
});

export function PaidSurprise() {
  const [open, setOpen] = useState(false);
  const [round, setRound] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    navigator.vibrate?.([30, 40, 60]);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setRound((r) => r + 1);
          setOpen(true);
        }}
        className="paid-button"
      >
        <PartyPopper className="size-4" aria-hidden />
        ខ្ញុំបានផ្ញើរួចហើយ
      </button>

      {open && (
        <div
          key={round}
          className="surprise"
          role="dialog"
          aria-modal="true"
          aria-label="សូមអរគុណ"
          onClick={() => setOpen(false)}
        >
          <span className="surprise-flash" aria-hidden />
          <span className="surprise-ring" aria-hidden />
          <span className="surprise-ring surprise-ring--late" aria-hidden />
          <div className="surprise-burst" aria-hidden>
            {PIECES.map((p) => (
              <span
                key={p.id}
                className={`surprise-piece surprise-piece--${p.kind} surprise-piece--h${p.hue}`}
                style={
                  {
                    '--dx': `${p.dx.toFixed(2)}vmin`,
                    '--dy': `${p.dy.toFixed(2)}vmin`,
                    '--spin': `${p.spin}deg`,
                    '--size': `${p.size}rem`,
                    '--delay': `${p.delay}s`,
                  } as CSSProperties
                }
              >
                {p.kind === 'flower' && <Ornament name="flower" className="w-full" />}
                {p.kind === 'heart' && <Heart className="size-full" fill="currentColor" strokeWidth={0} />}
              </span>
            ))}
          </div>

          <div className="surprise-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setOpen(false)} className="surprise-close" aria-label="បិទ">
              <X className="size-4" />
            </button>
            <Ornament name="couple-hearts" className="surprise-hearts mx-auto w-24" />
            <p className="mt-3 font-wedding text-[clamp(1.4rem,6vw,2rem)] leading-[1.9]">
              <span className="foil-text">សូមអរគុណ!</span>
            </p>
            <p className="mt-2 leading-[1.9] text-ink">អរគុណយ៉ាងជ្រាលជ្រៅចំពោះចំណងដៃ និងក្តីស្រឡាញ់របស់លោកអ្នក</p>
            <p className="mt-3 font-wedding text-sm leading-[1.9] text-olive">
              {WEDDING.groom} និង {WEDDING.bride}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

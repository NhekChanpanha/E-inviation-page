'use client';

import { useEffect, useRef, useState } from 'react';
import { Pointer } from 'lucide-react';
import { WEDDING } from '@/src/data/wedding';
import { FallingPieces } from './falling-pieces';
import { EnvelopeDefs, EnvelopePockets, FlapFront, WaxSeal } from './gate-envelope-art';
import { Ornament } from './ornament';
import { ScallopCard } from './scallop-card';

type Stage = 'sealed' | 'opening' | 'leaving' | 'gone';

// Keep in step with the transition delays on .gate in globals.css
const LEAVE_AFTER_MS = 2300;
const GONE_AFTER_MS = 3100;

export function EnvelopeGate() {
  const [stage, setStage] = useState<Stage>('sealed');
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (stage === 'gone') return;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = '';
    };
  }, [stage]);

  // The cover's entrance in globals.css waits for this, so guests see it as the envelope fades
  useEffect(() => {
    if (stage === 'leaving' || stage === 'gone') document.documentElement.dataset.opened = 'true';
  }, [stage]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const open = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStage('gone');
      return;
    }
    setStage('opening');
    timers.current.push(
      setTimeout(() => setStage('leaving'), LEAVE_AFTER_MS),
      setTimeout(() => setStage('gone'), GONE_AFTER_MS),
    );
  };

  if (stage === 'gone') return null;

  return (
    <div className="gate leather" data-stage={stage}>
      <div className="gate-frame" aria-hidden>
        <span className="corner top-1.5 left-1.5" />
        <span className="corner top-1.5 right-1.5 -scale-x-100" />
        <span className="corner bottom-1.5 left-1.5 -scale-y-100" />
        <span className="corner right-1.5 bottom-1.5 -scale-100" />
      </div>
      <FallingPieces />
      <EnvelopeDefs />
      <div className="gate-heading">
        <p className="text-sm tracking-wide text-ivory/80 sm:text-base">សូមគោរពអញ្ជើញ</p>
        <h2 className="font-wedding text-[clamp(1.25rem,7vw,2.4rem)] leading-[2] font-normal">
          <span className="foil-text">សិរីមង្គលអាពាហ៍ពិពាហ៍</span>
        </h2>
      </div>

      <div className="gate-envelope">
        <span className="gate-liner" />
        <div className="gate-card">
          <ScallopCard tone="ivory" className="h-full">
            <p className="font-wedding text-[clamp(1rem,4.4vw,1.6rem)] leading-[2]">
              <span className="foil-text foil-text--deep block">{WEDDING.groom}</span>
              <span className="foil-text foil-text--deep block text-[.62em]">និង</span>
              <span className="foil-text foil-text--deep block">{WEDDING.bride}</span>
            </p>
          </ScallopCard>
        </div>
        <EnvelopePockets />
        <div className="gate-flap">
          <span className="gate-flap-face gate-flap-face--front">
            <FlapFront />
          </span>
          <span className="gate-flap-face gate-flap-face--back" />
        </div>
        <span className="gate-sheen" />
        <span className="gate-seal">
          <WaxSeal />
          <Ornament name="flower" tone="foil-deep" className="w-[56%]" />
        </span>
        <button
          type="button"
          onClick={open}
          disabled={stage !== 'sealed'}
          aria-label="ចុចដើម្បីបើកធៀប"
          className="gate-button"
        />
      </div>

      {/* A second way to open for touch users; the envelope button is the labelled one */}
      <button type="button" onClick={open} disabled={stage !== 'sealed'} tabIndex={-1} aria-hidden className="gate-hint">
        <span>ចុចលើស្រោមសំបុត្រដើម្បីបើកធៀប</span>
        <Pointer className="gate-hand" strokeWidth={1.5} />
      </button>
      <noscript>
        <style>{'.gate{display:none}'}</style>
      </noscript>
    </div>
  );
}

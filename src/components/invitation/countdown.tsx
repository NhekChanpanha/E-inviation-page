'use client';

import { useSyncExternalStore } from 'react';
import { toKhmerDigits } from '@/src/lib/khmer';
import { Stamp } from './stamp';

const UNITS = [
  { label: 'ថ្ងៃ', seconds: 86400, wrap: Infinity },
  { label: 'ម៉ោង', seconds: 3600, wrap: 24 },
  { label: 'នាទី', seconds: 60, wrap: 60 },
  { label: 'វិនាទី', seconds: 1, wrap: 60 },
];

const toKhmer = (n: number) => toKhmerDigits(String(n).padStart(2, '0'));

const subscribe = (tick: () => void) => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
};
const nowInSeconds = () => Math.floor(Date.now() / 1000);

export function Countdown({ target }: { target: string }) {
  const now = useSyncExternalStore(subscribe, nowInSeconds, () => null);
  const left = now === null ? null : Math.max(0, Math.floor(new Date(target).getTime() / 1000) - now);

  return (
    <div className="reveal-stagger reveal-stagger--zoom mx-auto grid max-w-xl grid-cols-4 gap-2 sm:gap-4" role="timer" aria-label="រាប់ថយក្រោយដល់ថ្ងៃមង្គល">
      {UNITS.map(({ label, seconds, wrap }) => (
        <Stamp key={label}>
          <div className="stamp-count">
            <span className="foil-text foil-text--deep font-khmer text-[clamp(1.35rem,6vw,2.6rem)] leading-[1.5] font-semibold">
              {left === null ? '--' : toKhmer(Math.floor(left / seconds) % wrap)}
            </span>
            <span className="text-[clamp(.72rem,2.4vw,.9rem)] text-ink">{label}</span>
          </div>
        </Stamp>
      ))}
    </div>
  );
}

import type { CSSProperties } from 'react';

// Fixed values rather than Math.random() so server and client render the same.
// Big pieces read as closer: they fall a little faster than the small ones.
const PIECES = [
  { x: 4, size: 2, duration: 16, delay: 0, sway: 1.2, alpha: 0.95 },
  { x: 13, size: 1, duration: 26, delay: 3, sway: 0.7, alpha: 0.4 },
  { x: 21, size: 1.7, duration: 20, delay: 7, sway: 1, alpha: 0.85 },
  { x: 36, size: 1.2, duration: 24, delay: 5, sway: 0.8, alpha: 0.45 },
  { x: 44, size: 1.4, duration: 24, delay: 10, sway: 0.8, alpha: 0.8 },
  { x: 60, size: 2.1, duration: 19, delay: 2, sway: 1.1, alpha: 0.95 },
  { x: 68, size: 1, duration: 25, delay: 12, sway: 0.7, alpha: 0.4 },
  { x: 85, size: 1.5, duration: 23, delay: 8, sway: 0.9, alpha: 0.8 },
  { x: 93, size: 1.2, duration: 24, delay: 0.5, sway: 0.8, alpha: 0.45 },
  { x: 25, size: 2.3, duration: 15, delay: 3.5, sway: 1.4, alpha: 0.9 },
  { x: 56, size: 1, duration: 26, delay: 9, sway: 0.7, alpha: 0.4 },
  { x: 72, size: 1.4, duration: 27, delay: 15, sway: 0.6, alpha: 0.8 },
  { x: 97, size: 1.4, duration: 26, delay: 2.5, sway: 0.7, alpha: 0.8 },
  { x: 81, size: 1.9, duration: 20.5, delay: 13, sway: 1, alpha: 0.85 },
];

export function FallingPieces() {
  return (
    <div className="falling-pieces" aria-hidden>
      {PIECES.map((piece) => (
        <span
          key={`${piece.x}-${piece.size}`}
          className="falling-piece"
          style={
            {
              '--x': `${piece.x}%`,
              '--size': `${piece.size}rem`,
              '--duration': `${piece.duration}s`,
              // Negative so the screen is already full on first paint
              '--delay': `${-piece.delay}s`,
              '--sway': `${piece.sway}rem`,
              '--alpha': piece.alpha,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

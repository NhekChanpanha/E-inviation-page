import type { ReactNode } from 'react';

export function Stamp({ children }: { children: ReactNode }) {
  return (
    <div className="stamp-shadow">
      <div className="stamp">{children}</div>
    </div>
  );
}

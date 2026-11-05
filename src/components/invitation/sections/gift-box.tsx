'use client';

import { useState } from 'react';
import { WEDDING } from '@/src/data/wedding';
import { Ornament, Token } from '../ornament';
import { SectionTitle } from '../section-title';

export function GiftBox() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative px-4 pt-6 pb-16 text-center lg:pb-20">
      <SectionTitle tone="ivory">ប្រអប់អំណោយ</SectionTitle>
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={open}
        aria-label="ចុចដើម្បីបើកប្រអប់អំណោយ"
        className="gift"
        data-open={open}
      >
        <Token className="gift-burst gift-burst--1" />
        <Token className="gift-burst gift-burst--2" />
        <Token className="gift-burst gift-burst--3" />
        <span className="gift-lid">
          <span className="gift-ribbon" />
        </span>
        <span className="gift-body">
          <span className="gift-ribbon" />
          <Ornament name="flower" className="gift-knot" />
        </span>
      </button>
      {open ? (
        <p role="status" className="gift-message mx-auto mt-6 max-w-md font-khmer text-lg leading-[1.9] text-ink">
          {WEDDING.giftMessage}
        </p>
      ) : (
        <p className="mt-6 text-sm text-ink/80">ចុចដើម្បីបើក</p>
      )}
    </section>
  );
}

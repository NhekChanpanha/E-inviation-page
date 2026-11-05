'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WEDDING } from '@/src/data/wedding';
import { toKhmerDigits } from '@/src/lib/khmer';
import { PhotoFrame } from '../photo-frame';
import { SectionTitle } from '../section-title';

const PHOTOS = WEDDING.photos.gallery;

export function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const slideWidth = () => {
    const [first, second] = track.current?.children ?? [];
    return first && second ? second.getBoundingClientRect().left - first.getBoundingClientRect().left : 1;
  };

  // Wide screens show several slides, so start in the middle to fill both sides
  useEffect(() => {
    if (track.current && window.matchMedia('(min-width: 768px)').matches) {
      track.current.scrollLeft = Math.floor(PHOTOS.length / 2) * slideWidth();
    }
  }, []);

  const onScroll = () => {
    if (track.current) setCurrent(Math.round(track.current.scrollLeft / slideWidth()));
  };

  const go = (index: number) => {
    track.current?.scrollTo({ left: index * slideWidth(), behavior: 'smooth' });
  };

  return (
    <section className="relative pt-8 pb-14 lg:pb-20">
      <SectionTitle tone="ivory" className="px-4">
        កម្រងរូបភាព
      </SectionTitle>
      <div ref={track} onScroll={onScroll} className="gallery-track reveal-stagger reveal-stagger--zoom mt-6" tabIndex={0} aria-label="កម្រងរូបភាព">
        {PHOTOS.map((photo, index) => (
          <PhotoFrame
            key={index}
            src={photo}
            alt={`រូបភាពទី ${toKhmerDigits(index + 1)}`}
            index={index}
            sizes="(min-width: 768px) 340px, 68vw"
            className="gallery-slide"
          />
        ))}
      </div>
      <div className="reveal mt-5 flex items-center justify-center gap-5 text-ink">
        <button
          type="button"
          onClick={() => go(current - 1)}
          disabled={current <= 0}
          aria-label="រូបភាពមុន"
          className="round-button"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <p className="min-w-16 text-center text-sm" aria-live="polite">
          {toKhmerDigits(current + 1)} / {toKhmerDigits(PHOTOS.length)}
        </p>
        <button
          type="button"
          onClick={() => go(current + 1)}
          disabled={current >= PHOTOS.length - 1}
          aria-label="រូបភាពបន្ទាប់"
          className="round-button"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </section>
  );
}

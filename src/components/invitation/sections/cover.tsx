import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { WEDDING } from '@/src/data/wedding';
import { FallingPieces } from '../falling-pieces';
import { Ornament } from '../ornament';

const { groom, bride, date, venue, photos } = WEDDING;

const DATE_CELLS = [
  { km: date.weekday, en: date.en.weekday },
  { km: `ទី${date.day}`, en: date.en.day },
  { km: `ខែ${date.month}`, en: date.en.month },
  { km: `ឆ្នាំ${date.year}`, en: date.en.year },
];

export function Cover() {
  return (
    <section className="cover">
      <Image
        src={photos.cover}
        alt={`${groom} និង ${bride}`}
        fill
        preload
        sizes="(max-aspect-ratio: 5/4) 150vh, 100vw"
        className="cover-photo"
      />
      <div className="cover-shade" />
      <FallingPieces />
      <div className="cover-frame" aria-hidden>
        <span className="corner top-1 left-1" />
        <span className="corner top-1 right-1 -scale-x-100" />
        <span className="corner bottom-1 left-1 -scale-y-100" />
        <span className="corner right-1 bottom-1 -scale-100" />
      </div>

      <div className="cover-content">
        <header className="cover-head">
          <Ornament name="bloom" className="w-[clamp(2.75rem,8svh,4.5rem)]" />
          <p className="mt-1 font-wedding text-[clamp(1.05rem,min(5.6vw,3svh),1.9rem)] leading-[2]">
            <span className="foil-text">សិរីមង្គលអាពាហ៍ពិពាហ៍</span>
          </p>
          <p className="font-script text-[clamp(1.25rem,min(6vw,3.2svh),2.1rem)] leading-tight text-ivory">
            The Wedding Invitation
          </p>
        </header>

        <h1 className="cover-names">
          <span className="block">
            <span className="foil-text">{groom}</span>
          </span>
          <span className="sr-only">និង</span>
          <span className="section-rule justify-center" aria-hidden>
            <Ornament name="couple-hearts" className="w-[1.05em]" />
          </span>
          <span className="block">
            <span className="foil-text">{bride}</span>
          </span>
        </h1>

        <div className="cover-details">
          <Ornament name="medallion" className="cover-crest" />
          <p className="cover-greeting font-khmer text-[clamp(1rem,2.2svh,1.25rem)] leading-[1.9] font-semibold text-ivory">
            សូមគោរពអញ្ជើញ
          </p>
          <div className="cover-panel">
            <span aria-hidden className="cover-band left-[0.45rem]" />
            <span aria-hidden className="cover-band right-[0.45rem] -scale-x-100" />
            <dl className="cover-date">
              {DATE_CELLS.map(({ km, en }) => (
                <div key={en} className="cover-date-cell">
                  <dt className="font-khmer text-[clamp(.8rem,min(3.4vw,2.2svh),1.25rem)] leading-[1.7] font-semibold">
                    <span className="foil-text">{km}</span>
                  </dt>
                  <dd className="font-khmer text-[clamp(.68rem,min(2.9vw,1.6svh),.9rem)] leading-[1.5] text-ivory/85">{en}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="cover-venue text-balance">
            <p className="font-khmer text-[clamp(.92rem,2svh,1.15rem)] leading-[1.8] font-semibold">
              <span className="foil-text">{venue.name}</span>
            </p>
            <p className="text-[clamp(.76rem,1.6svh,.9rem)] leading-[1.8] text-ivory/85">{venue.address}</p>
          </div>
        </div>

        <p className="cover-hint">
          សូមរំកិលចុះ ដើម្បីទស្សនាធៀបការ
          <ChevronDown className="cover-chevron" strokeWidth={1.5} aria-hidden />
        </p>
      </div>
    </section>
  );
}

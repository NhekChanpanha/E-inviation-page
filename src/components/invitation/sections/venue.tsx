import { CalendarDays, Clock, MapPin, Navigation } from 'lucide-react';
import { WEDDING } from '@/src/data/wedding';
import { SectionTitle } from '../section-title';
import { VenueMap } from '../venue-map';

const { venue, date, dressCode } = WEDDING;

export function Venue() {
  return (
    <section className="relative px-4 py-14 lg:py-20">
      <SectionTitle>ទីតាំងកម្មវិធី</SectionTitle>
      <div className="venue-stage reveal mx-auto mt-8 max-w-5xl">
        <a
          href={venue.mapUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`បើកផែនទីទៅកាន់ ${venue.name} ក្នុង Google Maps`}
          className="venue-map"
        >
          <VenueMap />
        </a>
        <div className="venue-panel reveal reveal--left">
          <h3 className="font-khmer text-xl leading-[1.8] font-semibold text-ivory">{venue.name}</h3>
          <p className="mt-1 flex gap-2.5 text-sm leading-[1.8] text-ivory/70">
            <MapPin className="venue-icon" aria-hidden />
            {venue.address}
          </p>
          <ul className="mt-5 grid gap-3 border-t border-white/10 pt-5 text-sm leading-[1.7] text-ivory/90">
            <li className="flex gap-2.5">
              <CalendarDays className="venue-icon" aria-hidden />
              {date.km}
            </li>
            <li className="flex gap-2.5">
              <Clock className="venue-icon" aria-hidden />
              {date.time}
            </li>
          </ul>
          <a href={venue.mapUrl} target="_blank" rel="noreferrer" className="foil-button venue-button">
            <Navigation className="size-4" aria-hidden />
            បើកផែនទី Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export function DressCode() {
  return (
    <section className="relative px-4 pt-14 pb-6 lg:pt-20">
      <SectionTitle>ក្រមសម្លៀកបំពាក់</SectionTitle>
      <p className="reveal mt-3 text-center leading-[1.9] text-ivory/90">{dressCode.label}</p>
      <ul className="reveal-stagger reveal-stagger--zoom mt-5 flex justify-center gap-5">
        {dressCode.colors.map((color) => (
          <li key={color.value} className="flex flex-col items-center gap-1 text-xs text-ivory/80">
            <span className="dress-swatch" style={{ backgroundColor: color.value }} />
            {color.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

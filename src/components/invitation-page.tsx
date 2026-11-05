import { WEDDING } from '@/src/data/wedding';
import { EnvelopeGate } from './invitation/envelope-gate';
import { Ornament } from './invitation/ornament';
import { ScrollReveal } from './invitation/scroll-reveal';
import { Ceremony } from './invitation/sections/ceremony';
import { Cover } from './invitation/sections/cover';
import { CountdownCalendar } from './invitation/sections/countdown-calendar';
import { Gallery } from './invitation/sections/gallery';
import { LoveStory } from './invitation/sections/love-story';
import { Schedule } from './invitation/sections/schedule';
import { DressCode, Venue } from './invitation/sections/venue';

function Closing() {
  const { groom, bride } = WEDDING;
  return (
    <footer className="relative px-4 pt-12 pb-16 text-center">
      <div className="reveal reveal--zoom seal mx-auto w-28 sm:w-32">
        <Ornament name="medallion" className="w-[62%]" />
      </div>
      <p className="reveal mt-6 leading-[1.9] text-ivory/85">សូមអរគុណចំពោះវត្តមានរបស់លោកអ្នក</p>
      <p className="reveal mt-2 font-wedding text-[clamp(1.5rem,5vw,2.25rem)] leading-[1.9]">
        <span className="foil-text">
          {groom} និង {bride}
        </span>
      </p>
    </footer>
  );
}

export function InvitationPage() {
  return (
    <>
      <EnvelopeGate />
      <ScrollReveal />
      <main className="leather lattice relative overflow-x-clip">
        <div className="relative">
          <Cover />
          <div className="ivory-paper">
            <LoveStory />
            <Gallery />
          </div>
          <Ceremony />
          <CountdownCalendar />
          <Venue />
          <div className="olive-paper relative">
            <DressCode />
            <Schedule />
          </div>
          <Closing />
        </div>
      </main>
    </>
  );
}

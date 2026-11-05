import { WEDDING } from '@/src/data/wedding';
import { PhotoFrame } from '../photo-frame';
import { SectionTitle } from '../section-title';

const { groom, bride, photos } = WEDDING;

function Person({ role, name }: { role: string; name: string }) {
  return (
    <div className="reveal text-center">
      <p className="text-sm text-ink/80">{role}</p>
      <p className="font-wedding text-[clamp(1.2rem,4.4vw,2rem)] leading-[1.9]">
        <span className="foil-text foil-text--deep">{name}</span>
      </p>
    </div>
  );
}

export function LoveStory() {
  return (
    <section className="relative px-4 pt-14 pb-10 lg:pt-20">
      <SectionTitle tone="ivory">កូនកំលោះ និង កូនក្រមុំ</SectionTitle>
      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 items-center gap-x-5 gap-y-2 sm:gap-x-10">
        <PhotoFrame
          src={photos.groom}
          alt={groom}
          sizes="(min-width: 768px) 500px, 65vw"
          focus="45% 35%"
          zoom={1.4}
          className="reveal reveal--left aspect-square -rotate-6"
        />
        <Person role="កូនកំលោះ" name={groom} />
        <Person role="កូនក្រមុំ" name={bride} />
        <PhotoFrame
          src={photos.bride}
          alt={bride}
          index={1}
          sizes="(min-width: 768px) 360px, 45vw"
          focus="50% 22%"
          className="reveal reveal--right aspect-square rotate-5"
        />
      </div>
    </section>
  );
}

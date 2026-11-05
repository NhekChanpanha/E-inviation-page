import { WEDDING } from '@/src/data/wedding';
import { Ornament } from '../ornament';
import { SectionTitle } from '../section-title';

const { programme, date } = WEDDING;

export function Schedule() {
  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-14 lg:pb-20">
      <span aria-hidden className="side-border left-[max(.5rem,calc(50%-37rem))]" />
      <span aria-hidden className="side-border right-[max(.5rem,calc(50%-37rem))]" />
      <SectionTitle>កម្មវិធីសិរីមង្គលអាពាហ៍ពិពាហ៍</SectionTitle>
      <p className="reveal mt-2 text-center text-ivory/80">{date.km}</p>
      <div className="mx-auto mt-8 grid max-w-4xl gap-10 md:grid-cols-2">
        {programme.map((part) => (
          <div key={part.title}>
            <h3 className="reveal text-center font-khmer text-xl leading-[1.8] font-semibold">
              <span className="foil-text">{part.title}</span>
            </h3>
            <ol className="timeline reveal-stagger reveal-stagger--side mt-5">
              {part.items.map((item) => (
                <li key={item.time} className="timeline-item">
                  <span className="text-right font-khmer font-semibold text-gold-light">{item.time}</span>
                  <Ornament name="flower" className="timeline-dot" />
                  <span className="leading-[1.8] text-ivory">{item.label}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}

import { WEDDING } from '@/src/data/wedding';
import { toKhmerDigits } from '@/src/lib/khmer';
import { Countdown } from '../countdown';
import { Ornament } from '../ornament';
import { SectionTitle } from '../section-title';

const { date } = WEDDING;

const WEEKDAYS = ['ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស', 'អា'];

function calendarDays() {
  const [year, month, day] = date.iso.slice(0, 10).split('-').map(Number);
  // Monday-first offset of the 1st, and days in the month
  const offset = (new Date(Date.UTC(year, month - 1, 1)).getUTCDay() + 6) % 7;
  const length = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return { offset, length, day };
}

function Calendar() {
  const { offset, length, day } = calendarDays();
  return (
    <div className="calendar">
      <p className="pb-2 text-center font-khmer leading-[1.8] font-semibold">
        ខែ{date.month} {date.year}
      </p>
      <div className="grid grid-cols-7 border-b border-gold-light/40 pb-1 text-center text-xs text-ivory/70">
        {WEEKDAYS.map((weekday) => (
          <span key={weekday}>{weekday}</span>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-y-1 text-center text-sm">
        {Array.from({ length }, (_, index) => {
          const current = index + 1;
          const isDay = current === day;
          return (
            <span
              key={current}
              className={isDay ? 'calendar-day' : 'leading-8'}
              style={index === 0 ? { gridColumnStart: offset + 1 } : undefined}
              aria-current={isDay ? 'date' : undefined}
            >
              {toKhmerDigits(current)}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function CountdownCalendar() {
  return (
    <section className="relative px-4 py-14 lg:py-20">
      <SectionTitle>រាប់ថយក្រោយដល់ថ្ងៃមង្គល</SectionTitle>
      <div className="mx-auto mt-8 max-w-3xl">
        <Countdown target={date.iso} />
        <div className="reveal mx-auto mt-10 max-w-sm">
          <Calendar />
        </div>
        <div className="reveal reveal--zoom mt-10">
          <Ornament name="flower" className="token mx-auto w-8" />
        </div>
      </div>
    </section>
  );
}

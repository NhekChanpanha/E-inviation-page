import { WEDDING } from '@/src/data/wedding';
import { Ornament } from '../ornament';
import { SectionTitle } from '../section-title';

const { groom, bride, family, parents, date, venue, reception } = WEDDING;

function Spouse({ role, name }: { role: string; name: string }) {
  return (
    <div>
      <p className="text-sm leading-[1.8]">{role}</p>
      <p className="font-wedding text-[clamp(1.3rem,5.4vw,1.65rem)] leading-[1.9]">
        <span className="foil-text foil-text--deep">{name}</span>
      </p>
    </div>
  );
}

function DateRow() {
  return (
    <div className="mt-2 text-ivory">
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <span className="min-w-16 text-right text-sm">{date.weekday}</span>
        <span className="h-9 w-px bg-gold-light/60" />
        <span className="font-khmer text-[2rem] leading-[1.6] font-semibold">{date.day}</span>
        <span className="h-9 w-px bg-gold-light/60" />
        <span className="min-w-16 text-left text-sm">{date.month}</span>
      </div>
      <p className="font-khmer text-lg leading-[1.8]">{date.year}</p>
    </div>
  );
}

export function Ceremony() {
  return (
    <section className="olive-paper relative overflow-hidden px-4 py-14 lg:py-20">
      <span aria-hidden className="corner top-2 left-2" />
      <span aria-hidden className="corner top-2 right-2 -scale-x-100" />
      <span aria-hidden className="corner bottom-2 left-2 -scale-y-100" />
      <span aria-hidden className="corner right-2 bottom-2 -scale-100" />

      <SectionTitle>ព័ត៌មានពិធីមង្គលការ</SectionTitle>

      <div className="reveal reveal--zoom ivory-paper gold-frame card-shadow relative mx-auto mt-8 max-w-3xl px-[clamp(3.25rem,10vw,6.5rem)] py-[clamp(3.75rem,9vw,6rem)] text-center">
        <div className="flex justify-between gap-2 text-[clamp(.72rem,3.4vw,.875rem)] leading-[1.9] font-medium whitespace-nowrap max-[340px]:-mx-2 sm:text-base">
          <ul className="text-left">
            {parents.groom.map((person) => (
              <li key={person}>{person}</li>
            ))}
          </ul>
          <ul className="text-right">
            {parents.bride.map((person) => (
              <li key={person}>{person}</li>
            ))}
          </ul>
        </div>

        <p className="mt-6 font-wedding text-[clamp(.95rem,3.6vw,1.25rem)] leading-[2] text-balance">
          <span className="foil-text foil-text--deep">យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</span>
        </p>
        <div className="section-rule justify-center">
          <Ornament name="flower" tone="foil-deep" className="w-4" />
        </div>

        <p className="mt-3 leading-[2]">
          ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
          និងប្រិយមិត្តអញ្ជើញចូលរួមជាអធិបតីនិងជាភ្ញៀវកិត្តិយស
          ក្នុង <strong>ពិធីរៀបអាពាហ៍ពិពាហ៍</strong> កូនប្រុស និងកូនស្រី
        </p>

        <div className="mt-6 grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr] sm:gap-3">
          <Spouse role="កូនប្រុសនាម" name={`${family.groom} ${groom}`} />
          <div className="flex flex-col items-center">
            <Ornament name="couple-hearts" tone="foil-deep" className="w-12" />
            <p className="text-sm leading-[1.8] font-semibold">ជាគូនឹង</p>
          </div>
          <Spouse role="កូនស្រីនាម" name={`${family.bride} ${bride}`} />
        </div>

        <p className="mt-6 leading-[2]">
          សូមគោរពអញ្ជើញភ្ញៀវកិត្តិយសចូលរួមពិសារភោជនាហារ ដែលនឹងប្រព្រឹត្តទៅនៅ <strong>{date.lunar}</strong> ត្រូវនឹង
          <strong>
            ថ្ងៃទី{date.day} ខែ{date.month} ឆ្នាំ{date.year}
          </strong>{' '}
          វេលាម៉ោង <strong>{date.time}</strong> នៅ <strong>{venue.name}</strong> {venue.address} ដោយមេត្រីភាព។
        </p>

        <p className="mt-3 text-center font-semibold leading-[1.9]">សូមអរគុណ!</p>
      </div>

      <div className="reveal-stagger mx-auto mt-14 max-w-xl text-center">
        <SectionTitle>ព័ត៌មានពិធីទទួលភ្ញៀវ</SectionTitle>
        <p className="mt-4 leading-[1.9] text-ivory/90">ពិធីទទួលភ្ញៀវនឹងប្រព្រឹត្តទៅនៅ {venue.name}</p>
        <DateRow />
        <dl className="mx-auto mt-5 grid max-w-xs grid-cols-2 gap-4 text-ivory">
          <div>
            <dt className="text-sm text-ivory/80">ទទួលភ្ញៀវ</dt>
            <dd className="font-khmer text-xl leading-[1.8] text-gold-light">{reception.welcome}</dd>
          </div>
          <div>
            <dt className="text-sm text-ivory/80">ពិសាភោជនាហារ</dt>
            <dd className="font-khmer text-xl leading-[1.8] text-gold-light">{reception.time}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

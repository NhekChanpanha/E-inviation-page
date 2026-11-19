import Image from 'next/image';
import { Download } from 'lucide-react';
import { WEDDING } from '@/src/data/wedding';
import { PaidSurprise } from '../paid-surprise';
import { SectionTitle } from '../section-title';

const { giftQr, giftMessage } = WEDDING;

export function GiftQr() {
  return (
    <section className="relative px-4 py-14 lg:py-20">
      <SectionTitle>ចំណងដៃ</SectionTitle>
      <p className="reveal mx-auto mt-3 max-w-md text-center leading-[1.9] text-ivory/90">{giftMessage}</p>
      <p className="reveal mx-auto mt-1 max-w-md text-center text-sm leading-[1.9] text-ivory/70">
        សម្រាប់លោកអ្នកដែលមិនអាចចូលរួមបាន អាចផ្ញើចំណងដៃតាមរយៈ KHQR ខាងក្រោម
      </p>
      <figure className="reveal reveal--zoom mx-auto mt-8 w-full max-w-[17rem] sm:max-w-xs">
        <div className="rounded-2xl border border-[#c9a24d]/60 bg-ivory/5 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
          <Image
            src={giftQr.src}
            alt={`KHQR ធនាគារ ${giftQr.bank} – ${giftQr.name}`}
            width={769}
            height={1280}
            sizes="(min-width: 640px) 20rem, 17rem"
            className="h-auto w-full rounded-xl"
          />
        </div>
        <figcaption className="mt-3 text-center text-sm leading-[1.8] text-ivory/80">
          {giftQr.name} · {giftQr.bank}
        </figcaption>
      </figure>
      <div className="reveal mt-6 flex flex-wrap justify-center gap-3">
        <a href={giftQr.src} download="khqr.webp" className="foil-button rounded-full">
          <Download className="size-4" aria-hidden />
          រក្សាទុក QR
        </a>
        <PaidSurprise />
      </div>
    </section>
  );
}

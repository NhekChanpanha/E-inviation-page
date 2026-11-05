'use client';

import { useMemo, useState, useSyncExternalStore, type FormEvent } from 'react';
import { WEDDING } from '@/src/data/wedding';
import { SectionTitle } from '../section-title';

type Wish = { id: number; name: string; message: string };

const STORAGE_KEY = 'wedding-wishes';
const CHANGE_EVENT = 'wedding-wishes-change';

// No backend yet, so a wish lives only in the browser of the guest who wrote it
const readStored = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? '[]';
  } catch {
    return '[]';
  }
};

const subscribe = (onChange: () => void) => {
  window.addEventListener('storage', onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
};

function parseWishes(raw: string): Wish[] {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function Guestbook() {
  const raw = useSyncExternalStore(subscribe, readStored, () => '[]');
  const stored = useMemo(() => parseWishes(raw), [raw]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const wish = { id: Date.now(), name: name.trim(), message: message.trim() };
    if (!wish.name || !wish.message) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([wish, ...stored]));
      window.dispatchEvent(new Event(CHANGE_EVENT));
    } catch {
      return;
    }
    setName('');
    setMessage('');
  };

  return (
    <section className="relative px-4 pt-14 pb-10 lg:pt-20">
      <SectionTitle tone="ivory">សៀវភៅជូនពរ</SectionTitle>
      <div className="reveal mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
        <form onSubmit={submit} className="wish-card flex flex-col gap-3 self-start">
          <label className="flex flex-col gap-1 text-sm">
            ឈ្មោះរបស់អ្នក
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              maxLength={60}
              className="wish-field"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            ពាក្យជូនពរ
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              maxLength={500}
              rows={4}
              className="wish-field resize-y"
            />
          </label>
          <button type="submit" className="foil-button justify-center">
            ផ្ញើពាក្យជូនពរ
          </button>
          <p className="text-xs leading-[1.8] text-ink/75">
            បច្ចុប្បន្ន ពាក្យជូនពររបស់អ្នកត្រូវបានរក្សាទុកតែនៅលើឧបករណ៍នេះប៉ុណ្ណោះ
          </p>
        </form>
        <ul className="flex max-h-120 flex-col gap-3 overflow-y-auto pr-1" tabIndex={0} aria-label="ពាក្យជូនពរ">
          {[...stored, ...WEDDING.wishes].map((wish) => (
            <li key={`${wish.name}-${wish.message}`} className="wish-card">
              <p className="font-khmer leading-[1.8] font-semibold text-ink">{wish.name}</p>
              <p className="leading-[1.8] wrap-anywhere text-ink">{wish.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

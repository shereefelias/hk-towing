import { useState, useEffect } from 'react';
import './HolidayBanner.css';

interface HolidayConfig {
  key: string;
  emoji: string;
  message: string;
  subtext: string;
}

function getNthWeekday(year: number, month: number, weekday: number, n: number): Date {
  const first = new Date(year, month - 1, 1);
  const offset = (weekday - first.getDay() + 7) % 7;
  return new Date(year, month - 1, 1 + offset + (n - 1) * 7);
}

function getLastWeekday(year: number, month: number, weekday: number): Date {
  const last = new Date(year, month, 0);
  const offset = (last.getDay() - weekday + 7) % 7;
  return new Date(year, month - 1, last.getDate() - offset);
}

function inRange(now: Date, start: Date, end: Date): boolean {
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
  return d >= s && d <= e;
}

function getActiveHoliday(now: Date): HolidayConfig | null {
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();

  // Christmas: Dec 24–26
  if (m === 12 && d >= 24 && d <= 26) {
    return { key: 'christmas', emoji: '🎄', message: 'Merry Christmas!', subtext: "We're still here for you — 24/7" };
  }

  // New Year's: Dec 31–Jan 1
  if ((m === 12 && d === 31) || (m === 1 && d === 1)) {
    return { key: 'newyear', emoji: '🎆', message: "Happy New Year!", subtext: "We're on the road if you need us" };
  }

  // 4th of July: Jul 3–5
  if (m === 7 && d >= 3 && d <= 5) {
    return { key: 'july4', emoji: '🎇', message: "Happy 4th of July!", subtext: "We're here all day & night" };
  }

  // Thanksgiving: 4th Thursday of November → Thu through Sun
  const thanksgiving = getNthWeekday(y, 11, 4, 4);
  const thanksgivingEnd = new Date(y, thanksgiving.getMonth(), thanksgiving.getDate() + 3);
  if (inRange(now, thanksgiving, thanksgivingEnd)) {
    return { key: 'thanksgiving', emoji: '🦃', message: "Happy Thanksgiving!", subtext: "From HK Towing — available if you need us" };
  }

  // Memorial Day: last Monday of May → Fri through Mon
  const memorialDay = getLastWeekday(y, 5, 1);
  const memorialStart = new Date(y, memorialDay.getMonth(), memorialDay.getDate() - 3);
  if (inRange(now, memorialStart, memorialDay)) {
    return { key: 'memorial', emoji: '🇺🇸', message: "Happy Memorial Day!", subtext: "Honoring our heroes — here for you 24/7" };
  }

  // Labor Day: 1st Monday of September → Sat through Mon
  const laborDay = getNthWeekday(y, 9, 1, 1);
  const laborStart = new Date(y, laborDay.getMonth(), laborDay.getDate() - 2);
  if (inRange(now, laborStart, laborDay)) {
    return { key: 'laborday', emoji: '🛠️', message: "Happy Labor Day!", subtext: "From HK Towing — we never stop working" };
  }

  // Mother's Day: 2nd Sunday of May → Sat through Sun
  const mothersDay = getNthWeekday(y, 5, 0, 2);
  const mothersStart = new Date(y, mothersDay.getMonth(), mothersDay.getDate() - 1);
  if (inRange(now, mothersStart, mothersDay)) {
    return { key: 'mothersday', emoji: '💛', message: "Happy Mother's Day!", subtext: "Wishing all moms a wonderful day" };
  }

  // Father's Day: 3rd Sunday of June → Sat through Sun
  const fathersDay = getNthWeekday(y, 6, 0, 3);
  const fathersStart = new Date(y, fathersDay.getMonth(), fathersDay.getDate() - 1);
  if (inRange(now, fathersStart, fathersDay)) {
    return { key: 'fathersday', emoji: '💛', message: "Happy Father's Day!", subtext: "Wishing all dads a wonderful day" };
  }

  return null;
}

export default function HolidayBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [dismissing, setDismissing] = useState(false);

  const holiday = getActiveHoliday(new Date());
  const year = new Date().getFullYear();

  useEffect(() => {
    if (holiday && sessionStorage.getItem(`hk-banner-${holiday.key}-${year}`)) {
      setDismissed(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!holiday || dismissed) return null;

  const handleDismiss = () => {
    setDismissing(true);
    sessionStorage.setItem(`hk-banner-${holiday.key}-${year}`, '1');
    setTimeout(() => setDismissed(true), 250);
  };

  return (
    <>
      <div className="holiday-spacer" aria-hidden="true" />
      <div className={`holiday-banner${dismissing ? ' holiday-banner--out' : ''}`} role="status">
        <div className="holiday-banner-inner">
          <span className="holiday-emoji" aria-hidden="true">{holiday.emoji}</span>
          <div className="holiday-text">
            <strong>{holiday.message}</strong>
            <span className="holiday-subtext"> {holiday.subtext}</span>
          </div>
          <button
            className="holiday-dismiss"
            onClick={handleDismiss}
            aria-label="Close holiday banner"
          >
            <span aria-hidden="true">✕</span>
            <span className="holiday-dismiss-label">Dismiss</span>
          </button>
        </div>
      </div>
    </>
  );
}

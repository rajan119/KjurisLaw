"use client";

import React, { useMemo, useState } from "react";

/**
 * BookConsultation
 * Next.js + Tailwind CSS component recreating the "Book a Consultation"
 * page: hero image, host profile card with reviews, and a fully
 * functional TidyCal-style calendar + time-slot picker.
 *
 * Usage:
 *   import BookConsultation from "@/components/BookConsultation";
 *   <BookConsultation />
 *
 * Functionality included:
 * - Month navigation (prev/next) with real date generation (no hardcoded
 *   calendar grid — it's computed from the actual current month).
 * - Clicking a date selects it, highlights it, and loads that date's time
 *   slots in the right-hand panel.
 * - Clicking a time slot selects it (highlighted) — wire `onConfirm` /
 *   your booking API call where indicated.
 * - Timezone dropdown and "Show mutual availability" toggle are wired to
 *   local state (visual + functional toggle; connect to real timezone
 *   logic / calendar-sync data as needed).
 *
 * Notes:
 * - Replace `hostReviews` and `TIME_SLOTS` with real data from your
 *   backend / TidyCal API.
 * - The "Powered by TidyCal" badge links to https://tidycal.com — replace
 *   with your actual TidyCal booking page link, or remove if not using
 *   TidyCal.
 */

interface Review {
  name: string;
  date: string;
  rating: number; // 1-5
  tag?: string;
  comment: string;
}

const hostReviews: Review[] = [
  {
    name: "Su",
    date: "Jul 2026",
    rating: 1,
    tag: "B2B Discovery Call",
    comment:
      "Nagendra did not pitch for the call. Extremely unprofessional and a waste of my time.",
  },
  {
    name: "Michael",
    date: "Jul 2026",
    rating: 3,
    tag: "B2B Discovery Call",
    comment: "haven't had it yet...",
  },
  {
    name: "Hitesh",
    date: "Jul 2026",
    rating: 5,
    tag: "30 Minute Meeting",
    comment: "Best",
  },
  {
    name: "Kirsty",
    date: "Jun 2026",
    rating: 1,
    tag: "B2B Discovery Call",
    comment:
      "Nagendra invited me for several B2B Discovery Calls. The invite arrived less than 24 hours before the call, which meant that...",
  },
];

// Demo time slots — swap for real availability from your backend
const TIME_SLOTS = [
  "8:30 PM",
  "8:45 PM",
  "9:00 PM",
  "9:15 PM",
  "9:30 PM",
  "9:45 PM",
  "10:00 PM",
];

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const ACCENT = "text-[#C1793C]";

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-amber-400" : "text-gray-300"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.73.99-5.8-4.21-4.1 5.82-.85z" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} filled={i <= Math.round(rating)} />
      ))}
    </div>
  );
}

function buildCalendarGrid(year: number, month: number) {
  // month: 0-11. Returns an array of weeks, each week an array of
  // { date: Date, inMonth: boolean }
  const firstOfMonth = new Date(year, month, 1);
  const startWeekday = firstOfMonth.getDay(); // 0 = Sun
  const gridStart = new Date(year, month, 1 - startWeekday);

  const weeks: { date: Date; inMonth: boolean }[][] = [];
  let cursor = new Date(gridStart);

  for (let w = 0; w < 6; w++) {
    const week: { date: Date; inMonth: boolean }[] = [];
    for (let d = 0; d < 7; d++) {
      week.push({ date: new Date(cursor), inMonth: cursor.getMonth() === month });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function BookConsultation() {
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [showMutualAvailability, setShowMutualAvailability] = useState(false);
  const [timezone, setTimezone] = useState("Asia/Calcutta");

  const weeks = useMemo(
    () => buildCalendarGrid(viewYear, viewMonth),
    [viewYear, viewMonth]
  );

  const goPrevMonth = () => {
    const m = viewMonth === 0 ? 11 : viewMonth - 1;
    const y = viewMonth === 0 ? viewYear - 1 : viewYear;
    setViewMonth(m);
    setViewYear(y);
  };

  const goNextMonth = () => {
    const m = viewMonth === 11 ? 0 : viewMonth + 1;
    const y = viewMonth === 11 ? viewYear + 1 : viewYear;
    setViewMonth(m);
    setViewYear(y);
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleConfirmSlot = (slot: string) => {
    setSelectedSlot(slot);
    // TODO: call your booking API here, e.g.
    // await fetch("/api/book", { method: "POST", body: JSON.stringify({ date: selectedDate, slot, timezone }) })
  };

  const selectedDayLabel = `${WEEKDAYS[selectedDate.getDay()] === "SUN" ? "Sunday" : ""}`;
  const dayName = selectedDate.toLocaleDateString("en-US", { weekday: "long" });
  const dayOrdinal = (n: number) => {
    if (n > 3 && n < 21) return `${n}th`;
    switch (n % 10) {
      case 1: return `${n}st`;
      case 2: return `${n}nd`;
      case 3: return `${n}rd`;
      default: return `${n}th`;
    }
  };

  return (
    <section className="bg-white">
    <div>
      {/* Hero image */}
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
          alt="Consultation meeting"
          className="w-full h-[420px] object-cover"
        />
      </div>

      <h1 className="text-center text-gray-600 text-lg font-medium mt-8 mb-8">
        Book a Consultation
      </h1>

      <div className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10">
        {/* Left: host profile + reviews */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Nagendra</p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <StarRating rating={2.5} />
                <span>13 reviews</span>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-3">30 Minute Meeting</h2>
          <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" />
            </svg>
            30 minutes
          </div>
          <p className="text-gray-700 mb-6">Book a meeting with me for 30 minutes!</p>

          <hr className="border-gray-200 mb-6" />

          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold text-gray-900">2.5</span>
            <StarRating rating={2.5} />
            <span className="text-sm text-gray-500">(13 reviews)</span>
          </div>

          <div className="space-y-6">
            {hostReviews.map((review, i) => (
              <div key={i}>
                <p className="font-semibold text-gray-800">{review.name}</p>
                <p className="text-xs text-gray-400 mb-1">{review.date}</p>
                <div className="flex items-center gap-2 mb-1">
                  <StarRating rating={review.rating} />
                  {review.tag && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {review.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: calendar + slots */}
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="relative">
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-full pl-9 pr-8 py-2 text-sm text-gray-700"
              >
                <option value="Asia/Calcutta">Asia/Calcutta</option>
                <option value="Asia/Dubai">Asia/Dubai</option>
                <option value="Europe/London">Europe/London</option>
                <option value="America/New_York">America/New_York</option>
              </select>
              <svg
                className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
              </svg>
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
              <span>Show mutual availability</span>
              <button
                type="button"
                role="switch"
                aria-checked={showMutualAvailability}
                onClick={() => setShowMutualAvailability((v) => !v)}
                className={`w-10 h-5 rounded-full transition relative ${
                  showMutualAvailability ? "bg-[#3548a8]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition ${
                    showMutualAvailability ? "left-5" : "left-0.5"
                  }`}
                />
              </button>
            </label>

            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-md p-1">
              <button
                type="button"
                className="w-8 h-8 rounded bg-[#3548a8] text-white flex items-center justify-center"
                aria-label="Calendar view"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M3 9h18M8 3v3M16 3v3" />
                </svg>
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded text-gray-500 flex items-center justify-center hover:bg-gray-100"
                aria-label="List view"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6">
            {/* Calendar */}
            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={goPrevMonth}
                  aria-label="Previous month"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
                <span className="font-semibold text-gray-800">
                  {MONTH_NAMES[viewMonth]}
                </span>
                <button
                  type="button"
                  onClick={goNextMonth}
                  aria-label="Next month"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-2">
                {WEEKDAYS.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {weeks.flat().map(({ date, inMonth }, i) => {
                  const isPast =
                    date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                  const isSelected = sameDay(date, selectedDate);
                  const disabled = !inMonth || isPast;

                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={disabled}
                      onClick={() => !disabled && handleSelectDate(date)}
                      className={`h-10 rounded-lg text-sm transition ${
                        isSelected
                          ? "bg-[#3548a8] text-white font-semibold"
                          : disabled
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-800 bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time slots */}
            <div className="bg-white rounded-xl p-5">
              <p className="text-center font-semibold text-gray-800 mb-4">
                {dayName} {dayOrdinal(selectedDate.getDate())}
              </p>
              <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => handleConfirmSlot(slot)}
                    className={`w-full py-2.5 rounded-lg text-sm transition ${
                      selectedSlot === slot
                        ? "bg-[#3548a8] text-white font-semibold"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {selectedSlot && (
            <p className="text-sm text-gray-600 mt-4">
              Selected:{" "}
              <span className="font-semibold text-gray-800">
                {dayName} {dayOrdinal(selectedDate.getDate())} at {selectedSlot} ({timezone})
              </span>
            </p>
          )}

          <a
            href="https://tidycal.com/?utm_source=tidycal&utm_medium=bookings_page&utm_campaign=ltd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-xs text-gray-500 hover:text-gray-700"
          >
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}
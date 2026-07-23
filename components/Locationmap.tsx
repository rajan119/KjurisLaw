"use client";

import React from "react";

/**
 * LocationMap
 * Embeds "Express Zone B Wing" (Mumbai) on Google Maps.
 *
 * Usage:
 *   import LocationMap from "@/components/LocationMap";
 *   <LocationMap />
 *
 * You can drop this straight into any page/section of your Next.js app
 * (App Router or Pages Router — no special setup needed, since it's just
 * an <iframe>, no API key required for the embed).
 */

const LAT = 19.1765462;
const LNG = 72.8584159;
const PLACE_NAME = "Express Zone B Wing";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/place/Express+Zone+B+Wing/@${LAT},${LNG},17z`;

interface LocationMapProps {
  height?: number | string;
  width?: number | string;
  className?: string;
}

export default function LocationMap({
  height = 450,
  width = "100%",
  className = "",
}: LocationMapProps) {
  // Standard Google Maps embed URL (no API key needed for this format)
  const embedSrc = `https://maps.google.com/maps?q=${LAT},${LNG}&z=17&output=embed`;

  return (
    <div
      className={`rounded-xl overflow-hidden border border-gray-200 shadow-sm ${className}`}
      style={{ width }}
    >
      <iframe
        title={PLACE_NAME}
        src={embedSrc}
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex items-center justify-between px-4 py-3 bg-white text-sm">
        <span className="font-medium text-gray-800">{PLACE_NAME}</span>
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Google Maps
        </a>
      </div>
    </div>
  );
}
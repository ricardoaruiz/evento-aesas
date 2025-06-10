"use server";

import { client } from "@/lib/sanity-client";
import { SanityDocument } from "next-sanity";
import { CALENDAR_QUERY, CALENDAR_SLUG_QUERY } from "./query";
import { Calendar } from "./types";

/**
 * Fetches the slugs of all calendars.
 * @returns An array of calendar slugs.
 */
export async function getCalendarsSlug(): Promise<string[]> {
  const data = await client.fetch<SanityDocument<{ slug: string }>[]>(
    CALENDAR_SLUG_QUERY,
    {},
    {
      next: {
        revalidate: 30,
      },
    }
  );

  return data.map((item) => item.slug);
}

/**
 * Fetches a calendar by its slug.
 * @param slug - The slug of the calendar to fetch.
 * @returns A Calendar object or null if not found.
 */
export async function getCalendar(slug: string): Promise<Calendar | null> {
  const data = await client.fetch<SanityDocument<Calendar[]>>(
    CALENDAR_QUERY,
    { slug },
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const [calendar] = data;
  if (!calendar) return null;

  return {
    slug: calendar.slug,
    color: calendar.color,
    poster: calendar.poster,
    header: {
      firstLine: calendar.header.firstLine,
      secondLine: calendar.header.secondLine,
    },
    banner: {
      firstLine: calendar.banner.firstLine,
      secondLine: calendar.banner.secondLine,
    },
    events: !calendar.events
      ? []
      : calendar.events.map((event) => ({
          month: event.month,
          contentTitle: event.contentTitle,
          contentDescription: event.contentDescription,
          onlineTime: event.onlineTime,
          onlineDates: event.onlineDates,
          presencialTime: event.presencialTime,
          presencialDates: event.presencialDates,
          footerText: event.footerText,
          contentTileSize: event.contentTileSize,
          tagText: event.tagText,
          tagTextSize: event.tagTextSize,
          tagVariant: event.tagVariant,
        })),
  };
}

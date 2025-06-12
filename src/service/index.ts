"use server";

import { client } from "@/lib/sanity-client";
import { SanityDocument } from "next-sanity";
import {
  CALENDAR_QUERY,
  CALENDAR_SLUG_QUERY,
  EVENTS_QUERY,
  EVENTS_SLUG_QUERY,
} from "./query";
import { Calendar, Event } from "./types";

/**
 * Fetches the slugs of all calendars.
 * @returns An array of calendar slugs.
 */
export async function getCalendarsSlug(): Promise<string[]> {
  const data = await client.fetch<SanityDocument<{ slug: string }>[]>(
    CALENDAR_SLUG_QUERY,
    {},
    {
      cache: "force-cache",
    },
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
      cache: "force-cache",
    },
  );

  const [calendar] = data;

  return !calendar
    ? null
    : {
        ...calendar,
        events: calendar.events ?? [],
      };
}

/**
 * Fetches the slugs of all events.
 * @returns An array of event slugs.
 */
export async function getEventSlugs(): Promise<string[]> {
  const data = await client.fetch<SanityDocument<{ slug: string }>[]>(
    EVENTS_SLUG_QUERY,
    {},
    {
      cache: "force-cache",
    },
  );

  return data.map((item) => item.slug);
}

/**
 * Fetches an event by its slug.
 * @param slug - The slug of the event to fetch.
 * @returns An Event object or null if not found.
 */
export async function getEvent(slug: string): Promise<Event | null> {
  const data = await client.fetch<SanityDocument<Event[]>>(
    EVENTS_QUERY,
    { slug },
    {
      cache: "force-cache",
    },
  );

  const [event] = data;

  return event ?? null;
}

import {
  Banner,
  Cards,
  Footer,
  Header,
  type ContentTypeSize,
  type TagTextSize,
  type TagVariantColor,
} from "@/components";
import { cn } from "@/lib/utils";

import { getCalendar, getCalendarsSlug } from "@/service";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function CalendarPage({ params }: CalendarProps) {
  const { slug } = await params;
  const calendar = await getCalendar(slug);

  if (!calendar) {
    return notFound();
  }

  const events = calendar.events.map((event) => ({
    slug: event.slug,
    isActive: event.isActive,
    title: event.title.toUpperCase(),
    contentTitle: event.contentTitle,
    contentDescription: event.contentDescription,
    onlineTime: event.onlineTime,
    onlineDates: event.onlineDates,
    presencialTime: event.presencialTime,
    presencialDates: event.presencialDates,
    footerText: `${event.footerText} ${event.workload}`,
    contentTileSize: event.contentTileSize as ContentTypeSize,
    tagText: event.tagText,
    tagTextSize: event.tagTextSize as TagTextSize,
    tagVariant: event.tagVariant as TagVariantColor,
  }));

  return (
    <>
      <div className="relative bg-white md:sticky md:top-0 md:z-50">
        <Header
          title={calendar.header.firstLine}
          subtitle={calendar.header.secondLine}
          className={cn("text-black")}
        />
        <Banner.CalendarBanner
          title={calendar.banner.firstLine}
          subtitle={calendar.banner.secondLine}
          color={calendar.color.hex}
          className={cn("text-white")}
        />
      </div>

      {/* Poster Image for example */}
      {calendar.poster && (
        <div className="relative h-[300px] w-full">
          <Image
            src={calendar.poster.url}
            alt={calendar.poster.originalFilename}
            fill
            className="object-cover"
          />
        </div>
      )}

      <section className="flex-1 items-center justify-center bg-white bg-[url('/images/fundo.png')] bg-cover bg-center px-1 py-4 text-black md:px-10">
        <div className="container mx-auto max-w-[1000px]">
          <Cards data={events} color={calendar.color.hex} />
        </div>
      </section>

      <Footer.CalendarFooter color={calendar.color.hex} />
    </>
  );
}

/**
 * Generates static parameters for dynamic routes.
 * @returns An array of objects containing the slug for each calendar.
 */
export async function generateStaticParams() {
  const slugs = await getCalendarsSlug();

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: CalendarProps): Promise<{ title: string; description: string }> {
  const { slug } = await params;

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const calendar = await getCalendar(slug);

  if (!calendar) {
    return {
      title: "Calendário não encontrado",
      description: "O calendário solicitado não existe.",
    };
  }

  return {
    title,
    description: `${calendar.header.firstLine} ${calendar.header.secondLine}`,
  };
}

/**
 * Type definition for the CalendarProps.
 */
type CalendarProps = {
  params: Promise<{ slug: string }>;
};

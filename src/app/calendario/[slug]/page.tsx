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
import { notFound } from "next/navigation";

type CalendarProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getCalendarsSlug();

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default async function CalendarPage({ params }: CalendarProps) {
  const { slug } = await params;
  const calendar = await getCalendar(slug);

  if (!calendar) {
    return notFound();
  }

  const events = calendar.events.map((event) => ({
    title: event.month.toUpperCase(),
    contentTitle: event.contentTitle,
    contentDescription: event.contentDescription,
    onlineTime: event.onlineTime,
    onlineDates: event.onlineDates,
    presencialTime: event.presencialTime,
    presencialDates: event.presencialDates,
    footerText: event.footerText,
    contentTileSize: event.contentTileSize as ContentTypeSize,
    tagText: event.tagText,
    tagTextSize: event.tagTextSize as TagTextSize,
    tagVariant: event.tagVariant as TagVariantColor,
  }));

  return (
    <div className="flex flex-col container max-w-[1000px] mx-auto min-h-dvh">
      <div className="sticky top-0 bg-white z-50">
        <Header
          title={calendar.header.firstLine}
          subtitle={calendar.header.secondLine}
          className={cn("text-black")}
        />
        <Banner
          title={calendar.banner.firstLine}
          subtitle={calendar.banner.secondLine}
          color={calendar.color}
          className={cn("text-white")}
        />
      </div>

      <main className="flex-1 items-center justify-center py-4 px-1 md:px-10 bg-white text-black bg-[url('/images/fundo.png')] bg-cover bg-center">
        <Cards data={events} color={calendar.color} />
      </main>

      <Footer color={calendar.color} />
    </div>
  );
}

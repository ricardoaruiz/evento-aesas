import { Banner, Cards, Footer, Header } from "@/components";
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

  return (
    <div className="flex flex-col container max-w-[1000px] mx-auto min-h-dvh">
      <div className="sticky top-0 bg-white z-50">
        <Header
          title={calendar.header.firstLine}
          subtitle={calendar.header.secondLine}
          className="text-black"
        />
        <Banner
          title={calendar.banner.firstLine}
          subtitle={calendar.banner.secondLine}
          className="text-white"
        />
      </div>

      <main className="flex-1 items-center justify-center p-4 bg-white text-black">
        <Cards />
      </main>

      <Footer />
    </div>
  );
}

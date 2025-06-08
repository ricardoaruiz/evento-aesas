import { Banner, Cards, Footer, Header } from "@/components";
import { getCalendarData, getCalendarSlugs } from "@/service";
import { notFound } from "next/navigation";

type CalendarPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getCalendarSlugs();

  return posts.map((post) => ({
    slug: post,
  }));
}

export default async function CalendarPage({ params }: CalendarPageProps) {
  const { slug } = await params;
  const data = await getCalendarData(slug);

  if (!data) {
    return notFound();
  }

  return (
    <div className="container max-w-[1040px] mx-auto">
      <Header
        title={data.header.title}
        subtitle={data.header.subtitle}
        className="text-black"
      />
      <Banner
        title={data.banner.title}
        subtitle={data.banner.subtitle}
        className="text-white"
      />

      <main className="flex flex-col items-center justify-center p-4 bg-white text-black">
        <Cards />
      </main>

      <Footer />
    </div>
  );
}

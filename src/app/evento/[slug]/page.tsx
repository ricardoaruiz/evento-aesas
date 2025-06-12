import { Banner, Footer, Header } from "@/components";
import { Avatar } from "@/components/avatar";
import { cn } from "@/lib/utils";
import { getEvent, getEventSlugs } from "@/service";
import { notFound } from "next/navigation";

export default async function EventoPage({ params }: EventProps) {
  const { slug } = await params;

  const event = await getEvent(slug);
  const header = event?.calendar[0].header || {
    firstLine: "",
    secondLine: "",
  };

  if (!event) {
    return notFound();
  }

  return (
    <>
      <Header
        title={header.firstLine}
        subtitle={header.secondLine}
        className={cn("text-black")}
      />

      <Banner.EventBanner
        type={event.contentDescription}
        name={event.contentTitle}
        associatedPrice={event.associatedPrice}
        nonAssociatedPrice={event.nonAssociatedPrice}
        onlineDates={event.onlineDates}
        onlineHours={event.onlineTime}
        presencialDates={event.presencialDates}
        presencialHours={event.presencialTime}
        workload={event.workload}
        imageUrlLeft={event.bannerLeftImage.url}
        imageUrlRight={event.bannerRightImage.url}
      />

      <section className="flex flex-col items-center gap-8 bg-zinc-300 px-6 py-8">
        <div className="flex max-w-[1000px] flex-wrap items-center justify-center gap-8">
          {Array.from({ length: 7 }).map((_, idx) => (
            <Avatar
              key={idx}
              name={`FULANO DE TAL ${idx + 1}`}
              organization={`ORGANIZATION NAME ${idx + 1}`}
              imageUrl="/images/avatar.jpeg"
            />
          ))}
        </div>
      </section>

      <Footer.EventFooter />
    </>
  );
}

export async function generateMetadata({
  params,
}: EventProps): Promise<{ title: string; description: string }> {
  const { slug } = await params;

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const event = await getEvent(slug);

  if (!event) {
    return {
      title: "Evento não encontrado",
      description: "O evento solicitado não existe.",
    };
  }

  return {
    title,
    description: `${event.contentTitle}`,
  };
}

export async function generateStaticParams() {
  const slugs = await getEventSlugs();

  return slugs.map((slug: string) => ({
    slug,
  }));
}

/**
 * Type definition for the EventProps.
 */
type EventProps = {
  params: Promise<{ slug: string }>;
};

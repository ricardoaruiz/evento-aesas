import { notFound } from 'next/navigation'

import { Banner, Footer, Header } from '@/components'
import { Avatar } from '@/components/avatar'
import { DEFAULT_COLORS } from '@/constants'
import { cn } from '@/lib/utils'
import { getEvent, getEventSlugs } from '@/service'

export default async function EventoPage({ params }: EventProps) {
  const { slug } = await params

  const event = await getEvent(slug)
  const header = event?.calendar[0].header || {
    firstLine: '',
    secondLine: '',
  }

  if (!event) {
    return notFound()
  }

  return (
    <>
      <Header
        title={header.firstLine}
        subtitle={header.secondLine}
        color={event.bannerTextColor ?? DEFAULT_COLORS.event.banner.text}
        className={cn('text-black')}
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
        imageUrlLeft={event.bannerLeftImage?.url}
        imageUrlRight={event.bannerRightImage?.url}
        bannerTextColor={event.bannerTextColor}
      />

      {!!event.instructors && (
        <section className="flex flex-col items-center gap-8 bg-zinc-100 px-6 py-8">
          <h2 className="font-glacial self-start text-3xl text-black">
            INSTRUTORES
          </h2>
          <div className="flex max-w-[1000px] flex-wrap items-center justify-center gap-8">
            {event.instructors.map((instructor, idx) => (
              <Avatar
                key={idx}
                name={instructor.name}
                organization={instructor.organization}
                imageUrl={instructor.image.url}
              />
            ))}
          </div>
        </section>
      )}

      <Footer.EventFooter
        color={event.color?.hex}
        textColor={event.footerTextColor}
        registrationLink={event.registrationLink}
        registrationLinkGovernmentEmployee={
          event.registrationLinkGovernmentEmployee
        }
      />
    </>
  )
}

export async function generateMetadata({
  params,
}: EventProps): Promise<{ title: string; description: string }> {
  const { slug } = await params

  const title = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())

  const event = await getEvent(slug)

  if (!event) {
    return {
      title: 'Evento não encontrado',
      description: 'O evento solicitado não existe.',
    }
  }

  return {
    title,
    description: `${event.contentTitle}`,
  }
}

export async function generateStaticParams() {
  const slugs = await getEventSlugs()

  return slugs.map((slug: string) => ({
    slug,
  }))
}

/**
 * Type definition for the EventProps.
 */
type EventProps = {
  params: Promise<{ slug: string }>
}

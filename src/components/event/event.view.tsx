import { DEFAULT_COLORS } from '@/constants'
import { cn } from '@/lib/utils'

import { Avatar } from '../avatar'
import { Banner } from '../banner'
import { Footer } from '../footer'
import { Header } from '../header'
import { EventViewProps } from './event.types'

export function EventView({
  event,
  showInstructors = true,
  showRegistrationLinksIfExists = true,
}: EventViewProps) {
  const header = event?.calendar[0]?.header || {
    firstLine: '',
    secondLine: '',
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

      {showInstructors && !!event.instructors && (
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

      {event.isHibrid && (
        <div className="flex justify-center bg-zinc-200 px-10 py-5 text-2xl md:px-50 md:py-8 md:text-4xl/relaxed">
          <p
            className="text-center font-bold"
            style={{ color: event.color?.hex }}
          >
            GRATUITO PARA PROFISSIONAIS DE ÓRGÃOS AMBIENTAIS DE TODO O PAÍS
          </p>
        </div>
      )}

      <Footer.EventFooter
        color={event.color?.hex}
        textColor={event.footerTextColor}
        registrationLink={event.registrationLink}
        registrationLinkGovernmentEmployee={
          event.registrationLinkGovernmentEmployee
        }
        showRegistrationLinksIfExists={showRegistrationLinksIfExists}
      />
    </>
  )
}

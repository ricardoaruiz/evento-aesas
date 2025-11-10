import { notFound } from 'next/navigation'

import { EventPageContent } from '@/components/event'
import { getEvent } from '@/service'

import type { EventProps } from '../generate-functions'

/*
 * Main component for the event page.
 * @param params - The parameters containing the slug of the event.
 * @returns The rendered event page content or a not found page if the event does not exist.
 */
export default async function EventoPage({ params }: EventProps) {
  const { slug } = await params
  const event = await getEvent(slug)

  if (!event) return notFound()
  return (
    <EventPageContent
      event={event}
      showRegistrationLinksIfExists={false}
      showContent
    />
  )
}

export { generateMetadata, generateStaticParams } from '../generate-functions'

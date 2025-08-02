import { getEvent, getEventSlugs } from '@/service'

/**
 * Type definition for the EventProps.
 */
export type EventProps = {
  params: Promise<{ slug: string }>
}

/**
 * Generates metadata for the event page.
 * @param params - The parameters containing the slug of the event.
 * @returns An object containing the title and description for the event page.
 */
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

/**
 * Generates static parameters for the event page.
 * @returns An array of objects containing the slug of the event.
 */
export async function generateStaticParams() {
  const slugs = await getEventSlugs()

  return slugs.map((slug: string) => ({
    slug,
  }))
}

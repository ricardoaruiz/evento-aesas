import { Event } from '@/service/types'

export type EventViewProps = {
  event: Event
  showInstructors?: boolean
  showSponsors?: boolean
  showRegistrationLinksIfExists?: boolean
  showContent?: boolean
}

import { Event } from '@/service/types'

export type EventViewProps = {
  event: Event
  showInstructors?: boolean
  showRegistrationLinksIfExists?: boolean
}

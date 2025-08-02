import { ComponentProps } from 'react'

export type EventFooterProps = ComponentProps<'footer'> & {
  color?: string
  textColor?: string
  registrationLink?: string
  registrationLinkGovernmentEmployee?: string
  showRegistrationLinksIfExists?: boolean
}

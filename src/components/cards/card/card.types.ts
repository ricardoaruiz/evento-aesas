import { TagTextSize, TagVariantColor } from './tag/tag.types'

export type ContentTypeSize = 'small' | 'medium' | 'large'

export type CardProps = {
  slug: string
  isActive: boolean
  title: string
  contentTitle: string
  contentDescription: string
  onlineTime: string
  onlineDates: string
  presencialTime?: string
  presencialDates?: string
  footerText: string
  contentTileSize?: ContentTypeSize
  tagText?: string
  tagTextSize?: TagTextSize
  tagVariant?: TagVariantColor
  color?: string
  className?: string
}

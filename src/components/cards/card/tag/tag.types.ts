import { SVGProps } from 'react'

export type TagTextSize = 'small' | 'medium' | 'large'
export type TagVariantColor = 'gold' | 'silver' | 'bronze'

export type TagProps = SVGProps<SVGSVGElement> & {
  text: string
  textSize?: TagTextSize
  variant?: TagVariantColor
  className?: string
}

export type TagDegradationColors = {
  color: string
}

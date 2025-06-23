import { cn } from '@/lib/utils'

import { TagDegradationColors, TagProps, TagVariantColor } from './tag.types'

export function Tag({
  text,
  textSize = 'medium',
  variant = 'gold',
  className,
  ...props
}: TagProps) {
  const tagVariantColors: Record<TagVariantColor, TagDegradationColors> = {
    gold: {
      color: '#D3B22E',
    },
    silver: {
      color: '#C0C0C0',
    },
    bronze: {
      color: '#CD7F32',
    },
  }

  const tagVariantColor = tagVariantColors[variant as TagVariantColor]

  const tagVariantTextSize = {
    'text-[8px]': textSize === 'small',
    'text-[10px]': textSize === 'medium',
    'text-[12px]': textSize === 'large',
  }

  return (
    <div className={cn('absolute', className)}>
      {/* Overlay for the tag text */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <span
          className={cn(
            'relative -top-[14px] -right-1 line-clamp-1 min-w-[100px] rotate-[48deg] pl-2 text-center font-bold text-black',
            tagVariantTextSize,
          )}
        >
          {text}
        </span>
      </div>

      {/* <svg> */}
      <svg
        width={64}
        height={77}
        viewBox="0 0 64 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <mask id="path-1-inside-1_27_12" fill="white">
          <path d="M59.5346 58.8796H64.5346V66.8796H59.5346V58.8796Z" />
        </mask>
        <path
          d="M59.5346 58.8796H64.5346V66.8796H59.5346V58.8796Z"
          fill="#BEBABA"
        />
        <path
          d="M64.5346 66.8796V66.3796H59.5346V66.8796V67.3796H64.5346V66.8796Z"
          fill="black"
          mask="url(#path-1-inside-1_27_12)"
        />
        <mask id="path-3-inside-2_27_12" fill="white">
          <path d="M4.99998 0H14V4H4.99998V0Z" />
        </mask>
        <path d="M4.99998 0H14V4H4.99998V0Z" fill="#BEBABA" />
        <path
          d="M4.99998 4H5.49998V0H4.99998H4.49998V4H4.99998Z"
          fill="black"
          mask="url(#path-3-inside-2_27_12)"
        />
        <g filter="url(#filter0_d_27_12)">
          <rect
            x={17.4705}
            y={-11.7253}
            width={90.0246}
            height={17}
            transform="rotate(48.6812 17.4705 -11.7253)"
            fill={tagVariantColor.color}
          />
          <rect
            x={17.4478}
            y={-11.3725}
            width={89.5246}
            height={16.5}
            transform="rotate(48.6812 17.4478 -11.3725)"
            stroke="black"
            strokeWidth={0.5}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_27_12"
            x={0.702667}
            y={-11.7253}
            width={80.2063}
            height={87.837}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={5} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_27_12"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_27_12"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      {/* <svg
        width={105}
        height={116}
        viewBox="0 0 105 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <mask id="path-1-inside-1_5_128" fill="white">
          <path d="M73.5346 91.8796H78.5346V99.8796H73.5346V91.8796Z" />
        </mask>
        <path
          d="M73.5346 91.8796H78.5346V99.8796H73.5346V91.8796Z"
          fill="#BEBABA"
        />
        <path
          d="M78.5346 99.8796V99.3796H73.5346V99.8796V100.38H78.5346V99.8796Z"
          fill="black"
          mask="url(#path-1-inside-1_5_128)"
        />
        <mask id="path-3-inside-2_5_128" fill="white">
          <path d="M19 33H28V37H19V33Z" />
        </mask>
        <path d="M19 33H28V37H19V33Z" fill="#BEBABA" />
        <path
          d="M19 37H19.5V33H19H18.5V37H19Z"
          fill="black"
          mask="url(#path-3-inside-2_5_128)"
        />
        <g filter="url(#filter0_d_5_128)">
          <rect
            x={31.4705}
            y={21.2747}
            width={90.0246}
            height={17}
            transform="rotate(48.6812 31.4705 21.2747)"
            fill={tagVariantColor.color}
          />
          <rect
            x={31.4478}
            y={21.6275}
            width={89.5246}
            height={16.5}
            transform="rotate(48.6812 31.4478 21.6275)"
            stroke="black"
            strokeWidth={0.5}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_5_128"
            x={14.7027}
            y={21.2747}
            width={80.2063}
            height={87.837}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={5} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5_128"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5_128"
              result="shape"
            />
          </filter>
        </defs>
      </svg> */}
    </div>
  )
}

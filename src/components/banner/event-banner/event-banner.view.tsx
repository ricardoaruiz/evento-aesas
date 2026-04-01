import Image from 'next/image'

import { DEFAULT_COLORS } from '@/constants'
import { cn } from '@/lib/utils'

import { EventBannerProps } from './event-banner.types'

export function EventBanner({
  type,
  name,
  associatedPrice,
  nonAssociatedPrice,
  onlineDates,
  onlineHours,
  presencialDates,
  presencialHours,
  workload,
  imageUrlLeft = '/images/event-banner-default-bg.webp',
  imageUrlRight = '/images/event-banner-default-bg.webp',
  bannerTextColor,
  isOnlyOemas,
  // oemasTagColor,
}: EventBannerProps) {
  const isOnline = type === 'aulas on-line'
  const isPresencial = type === 'aulas presenciais'
  const isHibrid = type === 'aulas on-line e presenciais'

  return (
    <div className="relative flex flex-col-reverse overflow-hidden drop-shadow-xl lg:flex-row">
      {/* Left Side */}
      <div
        className="relative flex flex-1 flex-col gap-16 bg-cover bg-center p-6"
        style={{
          backgroundImage: `url('${imageUrlLeft}')`,
          color: bannerTextColor ?? DEFAULT_COLORS.event.banner.text,
        }}
      >
        {/* {isOnlyOemas && (
          <>
            <div className="oemas-float absolute top-0 right-0 z-20 hidden md:block">
              <Stamp color={oemasTagColor} text="EXCLUSIVO OEMAS" size={150} />
            </div>
            <div className="oemas-float absolute top-0 right-0 z-20 block md:hidden">
              <Stamp color={oemasTagColor} text="EXCLUSIVO OEMAS" size={110} />
            </div>
          </>
        )} */}
        <div className="pt-4">
          <h2 className="text-center text-xl tracking-widest md:text-left md:text-4xl">
            {type}
          </h2>
        </div>

        {/* Title */}
        <div className="flex flex-1 flex-col items-center gap-4 md:items-start">
          <h2 className="text-center text-3xl font-extrabold md:text-left md:text-4xl lg:text-[3.25rem]">
            {name}
          </h2>
          {isOnlyOemas && (
            <p className="text-center text-base font-bold tracking-wide text-red-500 uppercase md:text-left">
              EXCLUSIVO PARA SERVIDORES DE ORGÃOS AMBIENTAIS
            </p>
          )}
        </div>

        {/* Pricing */}
        <div className="flex flex-1 flex-col justify-center gap-2">
          {associatedPrice && (
            <p className="text-xl">
              <span className="font-bold">
                <span className="hidden md:inline">VALOR </span>ASSOCIADO:
              </span>{' '}
              {associatedPrice}
            </p>
          )}

          {nonAssociatedPrice && (
            <p className="text-xl">
              <span className="font-bold">
                <span className="hidden md:inline">VALOR </span>NÃO ASSOCIADO:
              </span>{' '}
              {nonAssociatedPrice}
            </p>
          )}

          {/* Online */}
          {(isOnline || isHibrid) && (
            <div
              className={cn({
                'flex flex-col gap-2': !isHibrid,
                'my-2': isHibrid,
              })}
            >
              {isHibrid && <p className="text-xl font-bold">ON-LINE</p>}
              <p
                className={cn('text-xl', {
                  'pl-2': isHibrid,
                })}
              >
                <span className="font-bold">DATAS:</span> {onlineDates}
              </p>
              <p
                className={cn('text-xl', {
                  'pl-2': isHibrid,
                })}
              >
                <span className="font-bold">HORÁRIO:</span> {onlineHours}
              </p>
            </div>
          )}

          {/* Presencial */}
          {(isPresencial || isHibrid) && (
            <div
              className={cn({
                'flex flex-col gap-2': !isHibrid,
                'my-2': isHibrid,
              })}
            >
              {isHibrid && <p className="text-xl font-bold">PRESENCIAL</p>}
              <p
                className={cn('text-xl', {
                  'pl-2': isHibrid,
                })}
              >
                <span className="font-bold">DATAS:</span> {presencialDates}
              </p>
              <p
                className={cn('text-xl', {
                  'pl-2': isHibrid,
                })}
              >
                <span className="font-bold">HORÁRIO:</span> {presencialHours}
              </p>
            </div>
          )}

          <p className="text-xl">
            <span className="font-bold">CARGA HORÁRIA:</span> {workload}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative min-h-[400px] w-full flex-1 sm:min-h-[500px] lg:min-h-[600px]">
        <Image
          src={imageUrlRight}
          alt="Event Banner Right"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
      </div>
    </div>
  )
}

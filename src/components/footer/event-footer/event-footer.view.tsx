import Image from 'next/image'

import { DEFAULT_COLORS } from '@/constants'
import { cn } from '@/lib/utils'

import { EventFooterProps } from './event-footer.types'

export function EventFooter({
  color,
  textColor,
  registrationLink,
  registrationLinkGovernmentEmployee,
}: EventFooterProps) {
  const hasSomeRegistrationLinks =
    registrationLink || registrationLinkGovernmentEmployee
  const defaultRegistrationLink = 'https://www.aesas.com.br'
  return (
    <footer
      className={cn(
        'flex flex-col items-center justify-between gap-12 p-8 text-xl lg:flex-row lg:gap-14',
      )}
      style={{
        backgroundColor: color ?? DEFAULT_COLORS.event.footer.background,
        color: textColor ?? DEFAULT_COLORS.event.footer.text,
      }}
    >
      {!hasSomeRegistrationLinks && (
        <>
          <a
            href={registrationLink ?? defaultRegistrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl font-bold transition-colors duration-300 hover:text-zinc-400"
          >
            WWW.AESAS.COM.BR
          </a>
        </>
      )}

      {hasSomeRegistrationLinks && (
        <div className="flex flex-col gap-10 lg:gap-2">
          {registrationLink && (
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-start">
              <p className="text-center text-xl font-bold md:text-left md:text-2xl">
                Associados e não associados:
              </p>
              <a
                href={registrationLink ?? defaultRegistrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse text-base underline transition-colors duration-300 hover:text-zinc-300 md:text-xl"
              >
                clique aqui para se inscrever
              </a>
            </div>
          )}

          {registrationLinkGovernmentEmployee && (
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-start">
              <p className="text-center text-xl font-bold md:text-2xl">
                Servidores de Órgãos Ambientais:
              </p>
              <a
                href={
                  registrationLinkGovernmentEmployee ?? defaultRegistrationLink
                }
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse text-base underline transition-colors duration-300 hover:text-zinc-300 md:text-xl"
              >
                clique aqui para pré-inscrição
              </a>
            </div>
          )}
        </div>
      )}

      <div>
        <p>Organização</p>
        <Image
          src="/images/logo_soldi.svg"
          alt="Aesas Logo"
          width={100}
          height={50}
        />
      </div>
    </footer>
  )
}

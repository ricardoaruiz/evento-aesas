import Image from 'next/image'

import { DEFAULT_COLORS } from '@/constants'

import { EventContentViewProps } from './event-content.types'

export function EventContentView({
  data,
  isVisible,
  color,
  textColor,
}: EventContentViewProps) {
  const {
    content,
    registerAssociantedAndNonAssociantedButtonLabel,
    registrationLink,
    oemasTitle,
    oemasDisclaimerText,
    registerOemasButtonLabel,
    registrationLinkGovernmentEmployee,
  } = data

  const hasSomeData =
    !!content?.length ||
    !!registerAssociantedAndNonAssociantedButtonLabel ||
    !!oemasTitle ||
    !!oemasDisclaimerText ||
    !!registerOemasButtonLabel

  if (
    !isVisible ||
    (!content &&
      !registerAssociantedAndNonAssociantedButtonLabel &&
      !oemasTitle &&
      !oemasDisclaimerText &&
      !registerOemasButtonLabel)
  ) {
    return null
  }

  return (
    <div className="flex flex-col items-center gap-10 bg-zinc-100 px-10 py-15 text-black">
      {content && (
        <>
          <h2 className="self-center text-center text-3xl font-bold">
            CONTEÚDO PROGRAMÁTICO
          </h2>

          <ul className="mx-auto w-full max-w-[750px] list-disc self-start text-2xl/relaxed text-justify space-y-5">
            {content.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </>
      )}

      {registerAssociantedAndNonAssociantedButtonLabel && (
        <>
          <Image
            src="/images/double_arrow_down.png"
            alt=""
            width={33}
            height={18}
          />
          <a
            href={registrationLink ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-80 px-5 py-3 text-center text-xl font-bold"
            style={{
              backgroundColor: color ?? DEFAULT_COLORS.event.footer.background,
              color: textColor ?? DEFAULT_COLORS.event.footer.text,
            }}
          >
            {registerAssociantedAndNonAssociantedButtonLabel}
          </a>
        </>
      )}

      {(oemasTitle || oemasDisclaimerText) && (
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-xl font-bold">{oemasTitle}</p>
          <p className="max-w-3xl text-center text-lg">{oemasDisclaimerText}</p>
        </div>
      )}

      {registerOemasButtonLabel && (
        <>
          <a
            href={registrationLinkGovernmentEmployee ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-80 px-5 py-3 text-center text-xl font-bold"
            style={{
              backgroundColor: color,
              color: textColor,
            }}
          >
            {registerOemasButtonLabel}
          </a>

          <Image
            src="/images/double_arrow_down.png"
            alt=""
            width={33}
            height={18}
          />
        </>
      )}

      {hasSomeData && (
        <a
          href="https://www.aesas.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4"
        >
          www.aesas.com.br
          <Image
            src="/images/right-circle-arrow.png"
            alt=""
            width={22}
            height={22}
          />
        </a>
      )}
    </div>
  )
}

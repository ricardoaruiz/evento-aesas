import Image from 'next/image'

import { cn } from '@/lib/utils'

import logoMinistery from '../../../../public/images/logo_ministerio.svg'
import logoSoldi from '../../../../public/images/logo_soldi.svg'
import { CalendarFooterProps } from './calendar-footer.types'
export function CalendarFooter({
  color,
  className,
  ...props
}: CalendarFooterProps) {
  return (
    <footer
      className={cn(
        'flex flex-col gap-10 p-4 px-6 lg:flex-row lg:gap-2',
        'inset-shadow-sm inset-shadow-gray-500',
        className,
      )}
      style={{ backgroundColor: color }}
      {...props}
    >
      <div className="flex flex-1 flex-col items-center gap-4 px-0 md:items-start md:px-4 lg:gap-0">
        <p className="flex-1 text-center text-lg font-bold md:text-xl lg:text-left lg:text-2xl">
          A realização dos cursos está sujeita a quantidade mínima de inscritos.
          Os valores serão divulgados no momento da abertura das inscrições.
        </p>
        <a
          href="https://www.aesas.com.br"
          className="inline-block w-full flex-1 pt-4 text-center text-xl font-bold md:text-2xl lg:text-left"
          target="_blank"
          rel="noopener noreferrer"
          title="Aesas"
          aria-label="Aesas"
        >
          WWW.AESAS.COM.BR
        </a>
      </div>

      <div className="flex flex-col justify-center gap-4 md:gap-20 lg:flex-row">
        <div className="flex flex-col items-center gap-2">
          <p>Organização</p>
          <Image src={logoSoldi} alt="Logo Soldi" width={100} height={100} />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p>Cooperação</p>
          <Image
            src={logoMinistery}
            alt="Logo Ministério"
            width={100}
            height={100}
          />
        </div>
      </div>
    </footer>
  )
}

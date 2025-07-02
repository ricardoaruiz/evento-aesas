import Image from 'next/image'

import { cn } from '@/lib/utils'

import logoAesas from '../../../public/images/logo-aesas.svg'
import logoSenac from '../../../public/images/logo-senac.svg'
import { BannerProps } from './header.types'

export function Header({ title, subtitle, color, className }: BannerProps) {
  return (
    <header
      className={cn(
        'flex flex-col justify-between bg-white px-10 py-12 text-black md:flex-row',
        "bg-[url('/images/fundo.webp')] bg-cover bg-center",
        className,
      )}
      style={{ color }}
    >
      <div className="flex flex-1 flex-col items-center md:items-start">
        <h1 className="font-biryani w-full text-center text-5xl/relaxed font-bold md:text-left lg:text-7xl/relaxed">
          {title}
        </h1>

        <div className="flex w-full flex-col justify-between gap-10 md:flex-row md:gap-0">
          <h2 className="font-glacial max-w-[700px] self-start text-center text-3xl/snug md:text-start lg:text-5xl/snug">
            {subtitle}
          </h2>
          <div className="flex flex-col items-center justify-end gap-[10px]">
            <p className="text-lg font-bold text-zinc-800">Realização:</p>
            <div className="flex gap-8 p-2">
              <Image
                src={logoAesas}
                alt="logo aesas"
                width={100}
                height={100}
              />
              <Image
                src={logoSenac}
                alt="logo senac"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

import { cn } from "@/lib/utils";
import Image from "next/image";
import logoAesas from "../../../public/images/logo-aesas.svg";
import logoSenac from "../../../public/images/logo-senac.svg";
import { BannerProps } from "./header.types";

export function Header({ title, subtitle, color, className }: BannerProps) {
  return (
    <header
      className={cn(
        "flex flex-col justify-between gap-[10px] bg-white px-10 py-3 text-black md:flex-row",
        "bg-[url('/images/fundo.png')] bg-cover bg-center",
        className,
      )}
      style={{ color }}
    >
      <div className="flex flex-col items-center gap-4 p-2 md:items-start">
        <h1 className="text-center text-4xl font-bold md:text-left md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <h2 className="text-center text-2xl font-semibold md:text-left md:text-3xl lg:text-4xl">
          {subtitle}
        </h2>
      </div>
      <div className="flex flex-col items-center justify-end gap-[10px]">
        <p className="flex-1 text-xs font-bold text-zinc-800">Realização:</p>
        <div className="flex gap-8 p-2">
          <Image src={logoAesas} alt="logo aesas" width={100} height={100} />
          <Image src={logoSenac} alt="logo senac" width={100} height={100} />
        </div>
      </div>
    </header>
  );
}

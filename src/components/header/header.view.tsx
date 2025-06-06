import { cn } from "@/lib/utils";
import Image from "next/image";
import logoAesas from "../../../public/images/logo-aesas.svg";
import logoSenac from "../../../public/images/logo-senac.svg";
import { BannerProps } from "./header.types";

export function Header({ title, subtitle, className }: BannerProps) {
  return (
    <header
      className={cn(
        "bg-white flex flex-col md:flex-row justify-between gap-[10px] text-black p-2",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 md:items-start p-2">
        <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold">
          {title}
        </h1>
        <h2 className="text-base md:text-xl text-center md:text-left max-w-80">
          {subtitle}
        </h2>
      </div>
      <div className="flex flex-col justify-end items-center gap-[10px]">
        <p className="text-xs font-bold text-gray-400 flex-1">Realização:</p>
        <div className="flex gap-[10px] p-2">
          <Image src={logoAesas} alt="logo aesas" width={100} height={100} />
          <Image src={logoSenac} alt="logo senac" width={100} height={100} />
        </div>
      </div>
    </header>
  );
}

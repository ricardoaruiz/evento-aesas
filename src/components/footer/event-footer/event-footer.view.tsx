import { DEFAULT_COLORS } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { EventFooterProps } from "./event-footer.types";

export function EventFooter({
  color = DEFAULT_COLORS.event,
}: EventFooterProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-7 p-8 text-xl lg:flex-row lg:gap-14",
      )}
      style={{ backgroundColor: color }}
    >
      <p>Inscrição</p>
      <a
        href="https://www.aesas.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl font-bold text-white transition-colors duration-300 hover:text-zinc-400"
      >
        WWW.AESAS.COM.BR
      </a>
      <p>Organização</p>
      <Image
        src="/images/logo_soldi.svg"
        alt="Aesas Logo"
        width={100}
        height={50}
      />
    </div>
  );
}

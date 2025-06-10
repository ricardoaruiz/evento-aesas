import { cn } from "@/lib/utils";
import Image from "next/image";
import logoMinistery from "../../../public/images/logo_ministerio.svg";
import logoSoldi from "../../../public/images/logo_soldi.svg";
import { FooterProps } from "./footer.types";
export function Footer({ color, className, ...props }: FooterProps) {
  const internalColor = color || "blue";
  const degradientColor = `bg-gradient-to-t from-${internalColor}-500 to-${internalColor}-800`;

  return (
    <footer
      className={cn(
        "flex flex-col gap-10 lg:flex-row lg:gap-2 p-4",
        degradientColor,
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-4 lg:gap-0 items-center md:items-start px-0 md:px-4">
        <p className="text-base font-bold flex-1 text-center lg:text-left">
          A realização dos cursos está sujeita a quantidade mínima de inscritos.
          Os valores serão divulgados no momento da abertura das inscrições.
        </p>
        <a
          href="https://www.aesas.com.br"
          className="inline-block text-center lg:text-left text-xl font-bold flex-1 pt-4 w-full"
          target="_blank"
          rel="noopener noreferrer"
          title="Aesas"
          aria-label="Aesas"
        >
          WWW.AESAS.COM.BR
        </a>
      </div>

      <div className="flex justify-center gap-[10px] flex-col lg:flex-row">
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
  );
}

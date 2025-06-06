import Image from "next/image";
import logoMinistery from "../../../public/images/logo_ministerio.svg";
import logoSoldi from "../../../public/images/logo_soldi.svg";
export function Footer() {
  return (
    <footer className="flex p-4 bg-gradient-to-t from-blue-500 to-blue-800">
      <div className="flex flex-col">
        <p className="text-base font-bold flex-1">
          A realização dos cursos está sujeita a quantidade mínima de inscritos.
          Os valores serão divulgados no momento da abertura das inscrições.
        </p>
        <a
          href="https://www.aesas.com.br"
          className="text-xl font-bold flex-1 pt-4"
          target="_blank"
          rel="noopener noreferrer"
          title="Aesas"
          aria-label="Aesas"
        >
          WWW.AESAS.COM.BR
        </a>
      </div>
      <div className="flex gap-[10px]">
        <div className="flex flex-col items-center gap-1">
          <p>Organização</p>
          <Image src={logoSoldi} alt="Logo Soldi" width={100} height={100} />
        </div>

        <div className="flex flex-col items-center gap-1">
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

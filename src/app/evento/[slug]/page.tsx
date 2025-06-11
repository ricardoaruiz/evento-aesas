import { Banner, Footer, Header } from "@/components";
import { Avatar } from "@/components/avatar";
import { cn } from "@/lib/utils";

export default function EventoPage() {
  return (
    <>
      <Header
        title="ENCONTROS TÉCNICOS"
        subtitle="DE GERENCIAMENTO DE ÁREAS CONTAMINADAS"
        className={cn("text-black")}
      />

      <Banner.EventBanner
        type="CURSO ONLINE"
        name="CONTROLE DE QUALIDADE  NA AMOSTRAGEM E NO PROCESSO ANALÍTICO"
        associatedPrice="R$ 567,00"
        nonAssociatedPrice="R$ 567,00"
        dates=" 26/05, 28/05, 02/06, 04/06"
        hours="08h às 12h"
        workload="16 horas"
        imageUrlLeft="/images/fundo1.png"
        imageUrlRight="https://cdn.sanity.io/images/ejmsm84f/develop/c4f3651628407264ff12df30a9dc3ee8be50e004-500x500.png"
      />

      <section className="flex flex-col items-center gap-8 bg-zinc-300 px-6 py-8">
        <div className="flex max-w-[1000px] flex-wrap items-center justify-center gap-8">
          {Array.from({ length: 7 }).map((_, idx) => (
            <Avatar
              key={idx}
              name={`FULANO DE TAL ${idx + 1}`}
              organization={`ORGANIZATION NAME ${idx + 1}`}
              imageUrl="/images/avatar.jpeg"
            />
          ))}
        </div>
      </section>

      <Footer.EventFooter />
    </>
  );
}

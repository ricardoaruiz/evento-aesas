import { Banner, Cards, Footer, Header } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col container max-w-[1040px] mx-auto min-h-dvh">
      <div className="sticky top-0 z-10 bg-white z-50">
        <Header
          title="ENCONTROS TÉCNICOS"
          subtitle="DE GERENCIAMENTO DE ÁREAS CONTAMINADAS"
          className="text-black"
        />
        <Banner
          title="AGENDA DE EVENTOS"
          subtitle="SEGUNDO SEMESTRE DE 2025"
          className="text-white"
        />
      </div>

      <main className="flex-1 items-center justify-center p-4 bg-white text-black">
        <Cards />
      </main>

      <Footer />
    </div>
  );
}

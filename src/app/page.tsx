import { Banner, Cards, Footer, Header } from "@/components";

export default function Home() {
  return (
    <div className="container max-w-[1040px] mx-auto">
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

      <main className="flex flex-col items-center justify-center p-4 bg-white text-black">
        <Cards />
      </main>

      <Footer />
    </div>
  );
}

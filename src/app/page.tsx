import { Banner, Footer, Header } from "@/components";

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
      <Footer />
    </div>
  );
}

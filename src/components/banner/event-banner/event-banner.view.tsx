import { EventBannerProps } from "./event-banner.types";

export function EventBanner({
  type,
  name,
  associatedPrice,
  nonAssociatedPrice,
  dates,
  hours,
  workload,
  imageUrlRight,
  imageUrlLeft = "/images/fundo1.png", // Default background image
}: EventBannerProps) {
  return (
    <div className="flex flex-col-reverse drop-shadow-xl lg:flex-row">
      {/* Description */}
      <div
        className="flex flex-1 flex-col gap-16 bg-cover bg-center p-6"
        style={{ backgroundImage: `url('${imageUrlLeft}')` }}
      >
        <div className="pt-4">
          <h2 className="text-center text-2xl tracking-widest md:text-left md:text-4xl">
            {type}
          </h2>
        </div>

        {/* Title */}
        <div className="flex flex-1 items-center">
          <h2 className="text-center text-3xl font-extrabold md:text-left md:text-4xl lg:text-[3.25rem]">
            {name}
          </h2>
        </div>

        {/* Pricing */}
        <div className="flex flex-1 flex-col justify-center gap-2">
          <p className="text-xl">
            <span className="font-bold">VALOR ASSOCIADO:</span>{" "}
            {associatedPrice}
          </p>
          <p className="text-xl">
            <span className="font-bold">VALOR NÃO ASSOCIADO:</span>{" "}
            {nonAssociatedPrice}
          </p>
          <p className="text-xl">
            <span className="font-bold">DATAS:</span> {dates}
          </p>
          <p className="text-xl">
            <span className="font-bold">HORÁRIO:</span> {hours}
          </p>
          <p className="text-xl">
            <span className="font-bold">CARGA HORÁRIA:</span> {workload}
          </p>
        </div>
      </div>

      {/* Image */}
      <div
        className={`min-h-[650px] flex-1 bg-cover bg-center`}
        style={{ backgroundImage: `url('${imageUrlRight}')` }}
      />
    </div>
  );
}

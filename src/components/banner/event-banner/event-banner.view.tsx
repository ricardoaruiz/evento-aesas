import { DEFAULT_COLORS } from "@/constants";
import { cn } from "@/lib/utils";
import { EventBannerProps } from "./event-banner.types";

export function EventBanner({
  type,
  name,
  associatedPrice,
  nonAssociatedPrice,
  onlineDates,
  onlineHours,
  presencialDates,
  presencialHours,
  workload,
  imageUrlLeft = "/images/event-banner-default-bg.png",
  imageUrlRight = "/images/event-banner-default-bg.png",
  bannerTextColor,
}: EventBannerProps) {
  const isOnline = type === "aulas on-line";
  const isPresencial = type === "aulas presenciais";
  const isHibrid = type === "aulas on-line e presenciais";

  return (
    <div className="flex flex-col-reverse drop-shadow-xl lg:flex-row">
      {/* Left Side */}
      <div
        className="relative flex flex-1 flex-col gap-16 bg-cover bg-center p-6"
        style={{
          backgroundImage: `url('${imageUrlLeft}')`,
          color: bannerTextColor ?? DEFAULT_COLORS.event.banner.text,
        }}
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
          {associatedPrice && (
            <p className="text-xl">
              <span className="font-bold">VALOR ASSOCIADO:</span>{" "}
              {associatedPrice}
            </p>
          )}

          {nonAssociatedPrice && (
            <p className="text-xl">
              <span className="font-bold">VALOR NÃO ASSOCIADO:</span>{" "}
              {nonAssociatedPrice}
            </p>
          )}

          {/* Online */}
          {(isOnline || isHibrid) && (
            <div
              className={cn({
                "flex flex-col gap-2": !isHibrid,
                "my-2": isHibrid,
              })}
            >
              {isHibrid && <p className="text-xl font-bold">ON-LINE</p>}
              <p
                className={cn("text-xl", {
                  "pl-2": isHibrid,
                })}
              >
                <span className="font-bold">DATAS:</span> {onlineDates}
              </p>
              <p
                className={cn("text-xl", {
                  "pl-2": isHibrid,
                })}
              >
                <span className="font-bold">HORÁRIO:</span> {onlineHours}
              </p>
            </div>
          )}

          {/* Presencial */}
          {(isPresencial || isHibrid) && (
            <div
              className={cn({
                "flex flex-col gap-2": !isHibrid,
                "my-2": isHibrid,
              })}
            >
              {isHibrid && <p className="text-xl font-bold">PRESENCIAL</p>}
              <p
                className={cn("text-xl", {
                  "pl-2": isHibrid,
                })}
              >
                <span className="font-bold">DATAS:</span> {presencialDates}
              </p>
              <p
                className={cn("text-xl", {
                  "pl-2": isHibrid,
                })}
              >
                <span className="font-bold">HORÁRIO:</span> {presencialHours}
              </p>
            </div>
          )}

          <p className="text-xl">
            <span className="font-bold">CARGA HORÁRIA:</span> {workload}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`min-h-[650px] flex-1 bg-cover bg-center`}
        style={{
          backgroundImage: `url('${imageUrlRight}')`,
        }}
      />
    </div>
  );
}

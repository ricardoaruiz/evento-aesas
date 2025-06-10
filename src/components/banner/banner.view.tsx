import { cn, getGradientColor } from "@/lib/utils";
import { BannerProps } from "./banner.types";

export function Banner({ title, subtitle, color, className }: BannerProps) {
  const gradientInternalColor = getGradientColor(color);

  return (
    <div
      className={cn(
        gradientInternalColor,
        "p-4 flex flex-col gap-2 items-center text-xl md:text-2xl font-bold",
        "shadow-lg shadow-gray-500/50",
        className
      )}
    >
      <p className="text-center md:text-left">{title}</p>
      <p className="text-center md:text-left">{subtitle}</p>
    </div>
  );
}

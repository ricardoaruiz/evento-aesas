import { cn } from "@/lib/utils";
import { BannerProps } from "./banner.types";

export function Banner({ title, subtitle, color, className }: BannerProps) {
  const degradientColor = color
    ? `bg-gradient-to-t from-${color}-500 to-${color}-800`
    : "bg-gradient-to-t from-blue-500 to-blue-800";

  return (
    <div
      className={cn(
        // "bg-gradient-to-t from-green-500 to-green-800",
        degradientColor,
        "p-4 flex flex-col gap-2 items-center text-xl md:text-2xl font-bold",
        className
      )}
    >
      <p className="text-center md:text-left">{title}</p>
      <p className="text-center md:text-left">{subtitle}</p>
    </div>
  );
}

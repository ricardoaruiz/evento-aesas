import { cn } from "@/lib/utils";
import { CalendarBannerProps } from "./calendar-banner.types";

export function CalendarBanner({
  title,
  subtitle,
  color,
  className,
}: CalendarBannerProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 p-4 text-xl font-bold md:text-2xl",
        "shadow-lg shadow-gray-500/50",
        className,
      )}
      style={{ backgroundColor: color }}
    >
      <p className="text-center md:text-left">{title}</p>
      <p className="text-center md:text-left">{subtitle}</p>
    </div>
  );
}

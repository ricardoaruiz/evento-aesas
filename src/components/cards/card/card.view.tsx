import { cn } from "@/lib/utils";
import { CardProps } from "./card.types";
import { Tag } from "./tag/tag.view";

export function Card({
  title,
  contentTitle,
  contentDescription,
  onlineTime,
  onlineDates,
  presencialTime,
  presencialDates,
  footerText,
  contentTileSize = "medium",
  tagText,
  tagTextSize,
  tagVariant,
  className,
}: CardProps) {
  const contentTitleFontSize = (() => {
    switch (contentTileSize) {
      case "small":
        return "text-sm";
      case "large":
        return "text-xl";
      case "medium":
      default:
        return "text-lg";
    }
  })();

  return (
    <div className={cn("relative flex flex-col p-2", className)}>
      {tagText && (
        <Tag
          text={tagText}
          textSize={tagTextSize}
          variant={tagVariant}
          className="-top-7 -right-6"
        />
      )}

      {/* Header */}
      <div className="flex flex-col">
        <div className="flex justify-center items-center p-1 bg-blue-500 text-white rounded-t-md">
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[10px] p-[10px] border-l border-l-blue-500 border-r border-r-blue-500 flex-1">
        <p
          className={cn("text-sm font-bold text-center", contentTitleFontSize)}
        >
          {contentTitle}
        </p>
        <p className="text-sm font-bold text-center">{contentDescription}</p>

        <div className="flex flex-col items-center text-sm">
          <p className="text-center">
            <span className="mr-1 font-bold">ONLINE:</span>
            <span>{onlineTime}</span>
          </p>
          <p className="text-center">{onlineDates}</p>
        </div>

        {presencialTime && presencialDates && (
          <div className="flex flex-col items-center text-sm">
            <p className="text-center">
              <span className="mr-1 font-bold">PRESENCIAL:</span>
              <span>{presencialTime}</span>
            </p>
            <p className="text-center">{presencialDates}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-center py-1 bg-blue-500 text-white rounded-b-md shadow-md text-lg">
        <p className="font-bold">{footerText}</p>
      </div>
    </div>
  );
}

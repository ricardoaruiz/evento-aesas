import { cn } from "@/lib/utils";
import { useMemo } from "react";
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
  contentTileSize,
  tagText,
  tagTextSize,
  tagVariant,
  color,
  className,
}: CardProps) {
  const contentTitleFontSize = useMemo(() => {
    switch (contentTileSize) {
      case "small":
        return "text-sm";
      case "large":
        return "text-xl";
      case "medium":
      default:
        return "text-lg";
    }
  }, [contentTileSize]);

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden bg-transparent p-1",
        className,
      )}
    >
      {tagText && (
        <Tag
          text={tagText}
          textSize={tagTextSize}
          variant={tagVariant}
          className="top-0 right-0"
        />
      )}

      {/* Header */}
      <div className="flex flex-col">
        <div
          className={cn(
            "flex items-center justify-center rounded-t-md p-1 text-white",
            // gradientInternalColor,
          )}
          style={{ backgroundColor: color }}
        >
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-[10px] border-r border-l border-r-blue-500 border-l-blue-500 bg-white p-[10px]">
        <p
          className={cn(
            "mx-auto w-full px-2 text-center font-bold",
            contentTitleFontSize,
          )}
        >
          {contentTitle}
        </p>
        <p className="text-center text-sm font-bold">{contentDescription}</p>

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
      <div
        className={cn(
          "flex justify-center rounded-b-md bg-blue-500 py-1 text-lg text-white shadow-md",
          // gradientInternalColor,
        )}
        style={{ backgroundColor: color }}
      >
        <p className="font-bold">{footerText}</p>
      </div>
    </div>
  );
}

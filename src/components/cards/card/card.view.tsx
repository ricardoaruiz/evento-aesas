import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMemo } from "react";
import { CardProps } from "./card.types";
import { Tag } from "./tag/tag.view";

export function Card({
  slug,
  title,
  isActive,
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
      <div
        className="flex flex-1 flex-col gap-[10px] border-r border-l bg-white p-[10px]"
        style={{ borderColor: color }}
      >
        <p
          className={cn(
            "mx-auto w-full px-2 text-center font-bold",
            contentTitleFontSize,
          )}
        >
          {contentTitle}
        </p>
        <p className="text-center font-bold">{contentDescription}</p>

        <div className="flex flex-col items-center">
          <p className="text-center">
            <span className="mr-1 font-bold">ONLINE:</span>
            <span>{onlineTime}</span>
          </p>
          <p className="text-center">{onlineDates}</p>
        </div>

        {presencialTime && presencialDates && (
          <div className="flex flex-col items-center">
            <p className="text-center">
              <span className="mr-1 font-bold">PRESENCIAL:</span>
              <span>{presencialTime}</span>
            </p>
            <p className="text-center">{presencialDates}</p>
          </div>
        )}

        {isActive && (
          <Link
            href={`/evento/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link para o evento ${title}`}
            className="mx-auto mt-auto w-30 cursor-pointer rounded-lg px-4 py-2 text-center font-bold text-white hover:opacity-80"
            style={{ backgroundColor: color }}
          >
            Ver evento
          </Link>
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

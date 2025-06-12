import Link from "next/link";
import { CardProps } from "./card/card.types";
import { Card } from "./card/card.view";

type CardsProps = {
  data: CardProps[];
  color?: string;
};

export function Cards({ data, color }: CardsProps) {
  return (
    <div className="container mx-auto grid grid-cols-1 place-items-center gap-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <Link
          key={index}
          href={`/evento/${item.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link para o evento ${item.title}`}
          className="flex w-full max-w-[300px] self-stretch"
        >
          <Card
            slug={item.slug}
            color={color}
            title={item.title}
            contentTitle={item.contentTitle}
            contentDescription={item.contentDescription}
            onlineTime={item.onlineTime}
            onlineDates={item.onlineDates}
            presencialTime={item.presencialTime}
            presencialDates={item.presencialDates}
            footerText={item.footerText}
            contentTileSize={item.contentTileSize}
            tagText={item.tagText}
            tagTextSize={item.tagTextSize}
            tagVariant={item.tagVariant}
          />
        </Link>
      ))}
    </div>
  );
}

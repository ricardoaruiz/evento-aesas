import { CardProps } from "./card/card.types";
import { Card } from "./card/card.view";

type CardsProps = {
  data: CardProps[];
  color?: string;
};

export function Cards({ data, color }: CardsProps) {
  return (
    <div className="container mx-auto grid grid-cols-1 place-items-center gap-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            slug={item.slug}
            isActive={item.isActive}
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
            className="flex min-h-[300px] w-full max-w-[300px] self-stretch"
          />
        );
      })}
    </div>
  );
}

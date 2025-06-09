import { CardProps } from "./card/card.types";
import { Card } from "./card/card.view";

type CardsProps = {
  data: CardProps[];
};

export function Cards({ data }: CardsProps) {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {data.map((item, index) => (
        <Card
          key={index}
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
          // className="w-[220px] min-h-[300px]"
        />
      ))}
    </div>
  );
}

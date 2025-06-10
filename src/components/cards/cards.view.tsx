import { CardProps } from "./card/card.types";
import { Card } from "./card/card.view";

type CardsProps = {
  data: CardProps[];
  color?: string;
};

export function Cards({ data, color }: CardsProps) {
  return (
    <div className="container mx-auto place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {data.map((item, index) => (
        <Card
          key={index}
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
          className="w-full max-w-[300px] self-stretch"
        />
      ))}
    </div>
  );
}

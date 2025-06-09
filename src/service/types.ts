export type CalendarHeader = {
  firstLine: string;
  secondLine: string;
};
export type CalendarBanner = {
  firstLine: string;
  secondLine: string;
};
export type Event = {
  month: string;
  contentTitle: string;
  contentDescription: string;
  onlineTime: string;
  onlineDates: string;
  presencialTime: string;
  presencialDates: string;
  footerText: string;
  contentTileSize: string;
  tagText: string;
  tagTextSize: string;
  tagVariant: string;
};
export type Calendar = {
  slug: string;
  header: CalendarHeader;
  banner: CalendarBanner;
  events: Event[];
};

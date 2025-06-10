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
  color: string;
  header: CalendarHeader;
  banner: CalendarBanner;
  events: Event[];
  poster?: Image;
};

export type Image = {
  uploadId: string;
  mimeType: string;
  originalFilename: string;
  size: number;
  url: string;
};

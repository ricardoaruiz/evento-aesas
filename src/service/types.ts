export type CalendarHeader = {
  firstLine: string;
  secondLine: string;
};

export type CalendarBanner = {
  firstLine: string;
  secondLine: string;
};

export type Event = {
  slug: string;
  isActive: boolean;
  title: string;
  contentTitle: string;
  contentDescription: string;
  onlineTime: string;
  onlineDates: string;
  presencialTime: string;
  presencialDates: string;
  workload: string;
  footerText: string;
  registrationLink?: string;
  color?: Color;
  headerTextColor?: string;
  bannerTextColor?: string;
  footerTextColor?: string;
  associatedPrice?: string;
  nonAssociatedPrice?: string;
  contentTileSize?: string;
  tagText?: string;
  tagTextSize?: string;
  tagVariant?: string;
  calendar: {
    header: CalendarHeader;
  }[];
  bannerLeftImage: Image;
  bannerRightImage: Image;
  instructors?: Person[];
};

export type Calendar = {
  slug: string;
  color: Color;
  header: CalendarHeader;
  banner: CalendarBanner;
  events: Event[];
  poster?: Image;
};

export type Color = {
  hex: string;
};

export type Image = {
  uploadId: string;
  mimeType: string;
  originalFilename: string;
  size: number;
  url: string;
};

export type Person = {
  slug: string;
  name: string;
  organization: string;
  image: Image;
};

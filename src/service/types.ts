export type CalendarData = {
  data: {
    header: HeaderData;
    banner: BannerData;
  };
};

export type BannerData = {
  data: Banner;
};

export type HeaderData = {
  data: Header;
};

export type Calendar = {
  banner: Banner;
  header: Header;
};

export type Banner = {
  title: string;
  subtitle: string;
};

export type Header = {
  title: string;
  subtitle: string;
};

export type Related = {
  id: string;
};

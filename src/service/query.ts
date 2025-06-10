export const CALENDAR_SLUG_QUERY = `*[_type == "calendar"]{
  slug
}`;

export const CALENDAR_QUERY = `*[_type == "calendar" && slug == $slug]{
  slug,
  color,
  header->{
    firstLine,
    secondLine,
  },
  banner->{
    firstLine,
    secondLine,
  },
  "events": events[]->{
    month,
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
    tagVariant
  }
}`;

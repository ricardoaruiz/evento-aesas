export const CALENDAR_SLUG_QUERY = `*[_type == "calendar"]{
  slug
}`;

export const CALENDAR_QUERY = `*[_type == "calendar" && slug == $slug]{
  slug,
  color {
    hex
  },
  "poster": poster.asset->{
    uploadId,
    mimeType,
    originalFilename,
    size,
    url
  },
  header->{
    firstLine,
    secondLine,
  },
  banner->{
    firstLine,
    secondLine,
  },
  "events": events[]->{
    "slug": title,
    isActive,
    "title": month,
    contentTitle,
    contentDescription,
    onlineTime,
    onlineDates,
    presencialTime,
    presencialDates,
    footerText,
    workload,
    contentTileSize,
    tagText,
    tagTextSize,
    tagVariant
  }
}`;

export const EVENTS_SLUG_QUERY = `*[_type == "event"]{
  "slug": title
}`;

export const EVENTS_QUERY = `*[_type == "event" && title == $slug]{
  "slug": title,
  color {
    hex
  },
  registrationLink,
  registrationLinkGovernmentEmployee,
  month,
  contentTitle,
  contentDescription,
  associatedPrice,
  nonAssociatedPrice,
  onlineTime,
  onlineDates,
  presencialTime,
  presencialDates,
  workload,
  footerText,
  headerTextColor,
  bannerTextColor,
  footerTextColor,
  "calendar": *[_type == "calendar" && references(^._id)]{
    header->{
      firstLine,
      secondLine
    }    
  },
  "bannerLeftImage": bannerLeftImage.asset->{
    uploadId,
    mimeType,
    originalFilename,
    size,
    url
  },
  "bannerRightImage": bannerRightImage.asset->{
    uploadId,
    mimeType,
    originalFilename,
    size,
    url
  },
  "instructors": instructors[]->{
    slug,
    name,
    organization,
    "image": image.asset->{
      uploadId,
      mimeType,
      originalFilename,
      size,
      url
    }
  }
}`;

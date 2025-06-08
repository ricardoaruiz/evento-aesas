"use server";

import { createClient } from "@/prismicio";
import { BannerData, HeaderData, Related } from "./types";

const prismic = createClient();

export async function getCalendarSlugs() {
  const result = await prismic.getAllByType("calendar");
  return result.map((item) => item.uid);
}

export async function getCalendarData(uid: string) {
  try {
    const result = await prismic.getByUID("calendar", uid);

    const headerId = (result.data.header as Related).id;
    const headerDoc = await prismic.getByID(headerId);
    const headerData = headerDoc as unknown as HeaderData;

    const bannerId = (result.data.banner as Related).id;
    const bannerDoc = await prismic.getByID(bannerId);
    const bannerData = bannerDoc as unknown as BannerData;

    return {
      header: headerData.data,
      banner: bannerData.data,
    };
  } catch (_error) {
    return null;
  }
}

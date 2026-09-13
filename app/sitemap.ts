import type { MetadataRoute } from "next";

const siteUrl = "https://www.moya-travel.com";

const publicPageUrls = [
  `${siteUrl}/`,
  `${siteUrl}/partners`,
  `${siteUrl}/topics/20260909-02`,
  `${siteUrl}/journeys/discover-mogami`,
  `${siteUrl}/journeys/discover-mogami/in-the-cedar-forests`,
  `${siteUrl}/journeys/discover-mogami/along-the-water`,
  `${siteUrl}/journeys/discover-mogami/historic-hot-springs-and-architecture`,
  `${siteUrl}/journeys/discover-mogami/along-the-railway`,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPageUrls.map((url) => ({
    url,
  }));
}

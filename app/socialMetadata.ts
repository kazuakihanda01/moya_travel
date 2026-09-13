import type { Metadata } from "next";

export const socialImage = "/images/hero-mountain.png";

type PageSeoMetadata = {
  title: string;
  description: string;
  alternates: { canonical: string };
};

export function createSocialMetadata(
  title: string,
  description: string,
  url: string
): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: "MOYA Travel",
      type: "website",
      locale: "ja_JP",
      images: [socialImage]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage]
    }
  };
}

export function createPageMetadata(seo: PageSeoMetadata): Metadata {
  return {
    ...seo,
    ...createSocialMetadata(seo.title, seo.description, seo.alternates.canonical)
  };
}

export type MogamiLocation = {
  nameJa: string;
  nameEn: string;
};

export type MogamiJourneyTheme = {
  id: string;
  number: string;
  titleJa: string;
  titleEn: string;
  image: string;
  fallbackImage: string;
  slug: string;
  locations: MogamiLocation[];
  galleryImages: string[];
};

// Add only files that actually exist to galleryImages. Keeping these lists explicit
// prevents the browser from requesting missing 01–99 photographs.
export const mogamiJourneyThemes: MogamiJourneyTheme[] = [
  {
    id: "cedar-forests",
    number: "01",
    titleJa: "杉林での体験",
    titleEn: "IN THE CEDAR FORESTS",
    image: "/images/02_01_TOP.jpg",
    fallbackImage: "/images/journey-field.jpg",
    slug: "in-the-cedar-forests",
    locations: [],
    galleryImages: []
  },
  {
    id: "along-the-water",
    number: "02",
    titleJa: "水辺での体験",
    titleEn: "ALONG THE WATER",
    image: "/images/02_02_TOP.jpg",
    fallbackImage: "/images/journey-walk.jpg",
    slug: "along-the-water",
    locations: [],
    galleryImages: []
  },
  {
    id: "historic-hot-springs",
    number: "03",
    titleJa: "歴史ある温泉と建築",
    titleEn: "HISTORIC HOT SPRINGS & ARCHITECTURE",
    image: "/images/02_03_TOP.jpg",
    fallbackImage: "/images/journey-stay.jpg",
    slug: "historic-hot-springs-and-architecture",
    locations: [{ nameJa: "瀬見温泉", nameEn: "SEMI ONSEN" }],
    galleryImages: []
  }
];

export function findMogamiJourneyTheme(slug: string) {
  return mogamiJourneyThemes.find(theme => theme.slug === slug);
}

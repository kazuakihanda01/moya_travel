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
  slug: string;
  locations: MogamiLocation[];
};

// Each theme can later point from its slug to a dedicated photo trunk. Locations
// deliberately remain optional content: an empty list does not affect the index.
export const mogamiJourneyThemes: MogamiJourneyTheme[] = [
  { id: "cedar-forests", number: "01", titleJa: "杉林での体験", titleEn: "IN THE CEDAR FORESTS", image: "/images/journey-field.jpg", slug: "in-the-cedar-forests", locations: [] },
  { id: "along-the-water", number: "02", titleJa: "水辺での体験", titleEn: "ALONG THE WATER", image: "/images/journey-walk.jpg", slug: "along-the-water", locations: [] },
  {
    id: "historic-hot-springs",
    number: "03",
    titleJa: "歴史ある温泉と建築",
    titleEn: "HISTORIC HOT SPRINGS & ARCHITECTURE",
    image: "/images/journey-stay.jpg",
    slug: "historic-hot-springs-and-architecture",
    locations: [{ nameJa: "瀬見温泉", nameEn: "SEMI ONSEN" }]
  }
];

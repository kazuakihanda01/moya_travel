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
    titleJa: "杉林で",
    titleEn: "Among the Cedar Forests",
    image: "/images/02_01_TOP.jpg",
    fallbackImage: "/images/journey-field.jpg",
    slug: "in-the-cedar-forests",
    locations: [{ nameJa: "大美輪の大杉・岩円地蔵 ／ 金山", nameEn: "Ōmiwa Great Cedar & Iwaen Jizō / Kaneyama" }],
    galleryImages: [
      "/images/02_01_01.jpg",
      "/images/02_01_02.jpg",
      "/images/02_01_03.jpg",
    ],
  },
  {
    id: "along-the-water",
    number: "02",
    titleJa: "水辺で",
    titleEn: "Along the Water",
    image: "/images/02_02_TOP.jpg",
    fallbackImage: "/images/journey-walk.jpg",
    slug: "along-the-water",
    locations: [{ nameJa: "田屋の一本桜・谷口銀山・春木川 ／ 金山", nameEn: "Taya’s Lone Cherry Tree, Taniguchi Silver Mine & Haruki River / Kaneyama" }],
    galleryImages: [
      "/images/02_02_01.jpg",
      "/images/02_02_02.jpg",
      "/images/02_02_03.jpg",
    ]
  },
  {
    id: "historic-hot-springs",
    number: "03",
    titleJa: "歴史ある温泉街",
    titleEn: "In a Historic Onsen Town",
    image: "/images/02_03_TOP.jpg",
    fallbackImage: "/images/journey-stay.jpg",
    slug: "historic-hot-springs-and-architecture",
    locations: [{ nameJa: "瀬見温泉街・喜至楼 ／ 最上", nameEn: "Semi Onsen & Kijirō / Mogami" }],
    galleryImages: []
  }
];

export function findMogamiJourneyTheme(slug: string) {
  return mogamiJourneyThemes.find(theme => theme.slug === slug);
}

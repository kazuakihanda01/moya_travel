import type { GalleryImage } from "./galleryImages";

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
  galleryImages: GalleryImage[];
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
      { src: "/images/02_01_01.jpg", width: 2000, height: 3000 },
      { src: "/images/02_01_02.jpg", width: 3000, height: 2000 },
      { src: "/images/02_01_03.jpg", width: 1448, height: 1086 },
      { src: "/images/02_01_04.jpg", width: 2000, height: 3000 },
      { src: "/images/02_01_05.jpg", width: 1402, height: 1122 },
      { src: "/images/02_01_06.jpg", width: 3024, height: 4032 },
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
      { src: "/images/02_02_01.jpg", width: 7359, height: 5888 },
      { src: "/images/02_02_02.jpg", width: 4284, height: 5712 },
      { src: "/images/02_02_03.jpg", width: 2592, height: 3888 },
      { src: "/images/02_02_04.jpg", width: 3024, height: 4032 },
      { src: "/images/02_02_05.jpg", width: 3024, height: 4032 },
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
    galleryImages: [
      { src: "/images/02_03_01.jpg", width: 2592, height: 3888 },
      { src: "/images/02_03_02.jpg", width: 5712, height: 4284 },
      { src: "/images/02_03_03.jpg", width: 4284, height: 5712 },
      { src: "/images/02_03_04.jpg", width: 4284, height: 5712 },
      { src: "/images/02_03_05.jpg", width: 6016, height: 4012 },
      { src: "/images/02_03_06.jpg", width: 5712, height: 4284 },
      { src: "/images/02_03_07.jpg", width: 3024, height: 4032 },
      { src: "/images/02_03_08.jpg", width: 4284, height: 5712 },
    ]
  },
  {
    id: "along-the-railway",
    number: "04",
    titleJa: "鉄路",
    titleEn: "Along the Railway",
    image: "/images/02_04_TOP.jpg",
    fallbackImage: "/images/journey-field.jpg",
    slug: "along-the-railway",
    locations: [{ nameJa: "陸羽東線 ／ 新庄・最上", nameEn: "Rikuu East Line / Shinjo & Mogami" }],
    galleryImages: [
      { src: "/images/02_04_01.jpg", width: 2592, height: 3888 },
      { src: "/images/02_04_02.jpg", width: 2592, height: 3888 },
      { src: "/images/02_04_03.jpg", width: 5712, height: 4284 },
      { src: "/images/02_04_04.jpg", width: 3024, height: 4032 },
      { src: "/images/02_04_05.jpg", width: 3024, height: 4032 },
      { src: "/images/02_04_06.jpg", width: 3024, height: 4032 },
    ]
  }
];

export function findMogamiJourneyTheme(slug: string) {
  return mogamiJourneyThemes.find(theme => theme.slug === slug);
}

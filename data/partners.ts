import type { GalleryImage } from "./galleryImages";

export type PartnerCategory = "STAY" | "TRANSPORTATION" | "EXPERIENCE" | "LOCAL PARTNER";

export type Partner = {
  id: string;
  category: PartnerCategory;
  nameJa: string;
  nameEn: string;
  copyJa?: string | null;
  copyEn?: string | null;
  descriptionJa?: string | null;
  descriptionEn?: string | null;
  image?: string | null;
  galleryImages: GalleryImage[];
  url?: string | null;
  linkLabel?: string;
};

// Register only photographs that exist under public/images. Setting `image`
// switches a partner from the text directory to the editorial feature layout;
// `galleryImages` enables its Photo Trunk without guessing numbered filenames.
export const partners: Partner[] = [
  {
    id: "schoenes-heim-kaneyama",
    category: "STAY",
    nameJa: "シェーネスハイム金山",
    nameEn: "SCHÖNES HEIM KANEYAMA",
    copyJa: "森につつまれた美しい場所",
    copyEn: "A beautiful place surrounded by forest.",
    descriptionJa: "グリーンバレー神室にたたずむ滞在型リゾートホテル",
    descriptionEn: "A resort hotel for a relaxing stay in Green Valley Kamuro.",
    image: "/images/stay_01_TOP.jpg",
    galleryImages: [
      { src: "/images/stay_01_01.jpg", width: 2000, height: 3000 },
      { src: "/images/stay_01_02.jpg", width: 2000, height: 3000 },
      { src: "/images/stay_01_03.jpg", width: 2000, height: 3000 },
      { src: "/images/stay_01_04.jpg", width: 2000, height: 3000 },
      { src: "/images/stay_01_05.jpg", width: 2000, height: 3000 },
      { src: "/images/stay_01_06.jpg", width: 3000, height: 2000 },
      { src: "/images/stay_01_07.jpg", width: 2000, height: 3000 }
    ],
    url: "https://schonesheim.jp/",
    linkLabel: "VIEW PARTNER →"
  },
  {
    id: "shiki-hotel",
    category: "STAY",
    nameJa: "SHIKI HOTEL",
    nameEn: "SHIKI HOTEL",
    copyJa: "ときを忘れ、四季を巡る",
    copyEn: "Lose track of time and journey through the seasons.",
    descriptionJa: "悠久の四季を超え、人々が紡いだ、文化を愛す宿",
    descriptionEn: "A place that cherishes the culture woven by generations through the passing seasons.",
    image: "/images/stay_02_TOP.jpg",
    galleryImages: [
      { src: "/images/stay_02_01.jpg", width: 540, height: 761 },
      { src: "/images/stay_02_02.jpg", width: 567, height: 762 }
    ],
    url: "https://shiki-hotel.com/"
  },
  {
    id: "kijiro-semi-onsen",
    category: "STAY",
    nameJa: "喜至楼（瀬見温泉）",
    nameEn: "KISHIRO / SEMI ONSEN",
    copyJa: "山形で最も古い木造建築旅館",
    copyEn: "Yamagata’s oldest wooden ryokan.",
    image: "/images/stay_03_TOP.jpg",
    galleryImages: [
      { src: "/images/stay_03_01.jpg", width: 4284, height: 5712 },
      { src: "/images/stay_03_02.jpg", width: 3024, height: 4032 },
      { src: "/images/stay_03_03.jpg", width: 4284, height: 5712 },
      { src: "/images/stay_03_04.jpg", width: 3024, height: 4032 },
      { src: "/images/stay_03_05.jpg", width: 5712, height: 4284 },
      { src: "/images/stay_03_06.jpg", width: 3024, height: 4032 }
    ],
    url: null
  },
  {
    id: "trans-ocean-bus",
    category: "TRANSPORTATION",
    nameJa: "トランスオーシャンバス株式会社",
    nameEn: "TRANS OCEAN BUS",
    copyJa: null,
    copyEn: null,
    image: null,
    galleryImages: [],
    url: "https://www.to-bus.com/"
  }
];

// Set this to a file added under `public` when a representative Partners image
// is available. Keeping it null omits the image area entirely on the top page.
export const partnersRepresentativeImage: string | null = "/images/partners_top.jpg";

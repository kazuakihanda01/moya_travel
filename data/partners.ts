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
  imageAlt?: string | null;
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
    imageAlt: "山形県最上郡金山町の神室リゾートにあるリゾートホテル・シェーネスハイム金山",
    galleryImages: [
      { src: "/images/stay_01_01.jpg", alt: "山形県最上郡金山町の金山杉を使ったドイツ風建築のシェーネスハイム金山", width: 2000, height: 3000 },
      { src: "/images/stay_01_02.jpg", alt: "山形県最上郡金山町のシェーネスハイム金山、ゆったりとした広さの客室", width: 2000, height: 3000 },
      { src: "/images/stay_01_03.jpg", alt: "山形県最上郡金山町のシェーネスハイム金山、ゆったりとした広さの客室", width: 2000, height: 3000 },
      { src: "/images/stay_01_04.jpg", alt: "山形県最上郡金山町の神室温泉・ホットハウス神室、ホテルに併設された天然温泉", width: 2000, height: 3000 },
      { src: "/images/stay_01_05.jpg", alt: "シェーネスハイム金山のバルコニーから一望する神室バレー", width: 2000, height: 3000 },
      { src: "/images/stay_01_06.jpg", alt: "シェーネスハイム金山のファミリーやグループ向けメゾネットタイプの客室", width: 3000, height: 2000 },
      { src: "/images/stay_01_07.jpg", alt: "シェーネスハイム金山のフロントと、キャンプやペット連れ向けのグッズを扱うショップ", width: 2000, height: 3000 }
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
    imageAlt: "山形県最上郡金山町にある築100年の伝統的な母屋を生かしたSHIKI HOTEL",
    galleryImages: [
      { src: "/images/stay_02_01.jpg", alt: "山形県最上郡金山町のSHIKI HOTEL、木の温もりを感じる広々としたモダンな和室", width: 540, height: 761 },
      { src: "/images/stay_02_02.jpg", alt: "山形県最上郡金山町のSHIKI HOTEL、白壁と切妻屋根が美しい金山住宅", width: 567, height: 762 }
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
    imageAlt: "山形県最上郡最上町にある県内で最も古い旅館建築・喜至楼の歴史を感じる外観",
    galleryImages: [
      { src: "/images/stay_03_01.jpg", alt: "山形県最上郡最上町の喜至楼、新館のモダンで歴史を感じる外観", width: 4284, height: 5712 },
      { src: "/images/stay_03_02.jpg", alt: "喜至楼名物のローマ式千人風呂、タイル張りのモダンな西洋風温泉", width: 3024, height: 4032 },
      { src: "/images/stay_03_03.jpg", alt: "山形県最上郡最上町の喜至楼、館内に残る懐かしいタペストリー", width: 4284, height: 5712 },
      { src: "/images/stay_03_04.jpg", alt: "喜至楼本館の畳敷きと障子が懐かしい落ち着いた和室", width: 3024, height: 4032 },
      { src: "/images/stay_03_05.jpg", alt: "喜至楼の歴史を感じるモダンな造りの館内廊下", width: 5712, height: 4284 },
      { src: "/images/stay_03_06.jpg", alt: "喜至楼の歴史ある廊下に置かれた火鉢", width: 3024, height: 4032 }
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

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
  imageAlt: string;
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
    imageAlt: "山形県最上郡金山町大美輪にそびえる大杉",
    fallbackImage: "/images/journey-field.jpg",
    slug: "in-the-cedar-forests",
    locations: [{ nameJa: "大美輪の大杉・岩円地蔵 ／ 金山", nameEn: "Ōmiwa Great Cedar & Iwaen Jizō / Kaneyama" }],
    galleryImages: [
      { src: "/images/02_01_01.jpg", alt: "山形県最上郡金山町大美輪の大杉で、モデルを囲んで撮影するフォトグラファーたち", width: 2000, height: 3000 },
      { src: "/images/02_01_02.jpg", alt: "山形県最上郡金山町に残る江戸時代からの杉林を歩く風景", width: 3000, height: 2000 },
      { src: "/images/02_01_03.jpg", alt: "山形県最上郡金山町の岩円地蔵、碧緑の杉林の奥に佇む岩の自然のほこら", width: 1448, height: 1086 },
      { src: "/images/02_01_04.jpg", alt: "蛙が生息する山形県最上郡金山町の自然豊かな杉林", width: 2000, height: 3000 },
      { src: "/images/02_01_05.jpg", alt: "山形県最上郡金山町の岩円地蔵、碧緑の杉林で行うモデル撮影ワークショップ", width: 1402, height: 1122 },
      { src: "/images/02_01_06.jpg", alt: "山形県最上郡金山町の岩円地蔵、碧緑の杉林に佇む和服姿のモデル", width: 3024, height: 4032 },
    ],
  },
  {
    id: "along-the-water",
    number: "02",
    titleJa: "水辺で",
    titleEn: "Along the Water",
    image: "/images/02_02_TOP.jpg",
    imageAlt: "山形県最上郡金山町田屋の杉林に静かに囲まれた、一本桜で知られる沼",
    fallbackImage: "/images/journey-walk.jpg",
    slug: "along-the-water",
    locations: [{ nameJa: "田屋の一本桜・谷口銀山・春木川 ／ 金山", nameEn: "Taya’s Lone Cherry Tree, Taniguchi Silver Mine & Haruki River / Kaneyama" }],
    galleryImages: [
      { src: "/images/02_02_01.jpg", alt: "山形県最上郡金山町の谷口銀山、坑道を流れる滝壺で行うモデル撮影ワークショップ", width: 7359, height: 5888 },
      { src: "/images/02_02_02.jpg", alt: "山形県最上郡金山町田屋の一本桜、堤の水辺に映える満開の桜", width: 4284, height: 5712 },
      { src: "/images/02_02_03.jpg", alt: "山形県最上郡金山町上春木の山里、中田春木川の小さな滝と清らかな流れで行うモデル撮影ワークショップ", width: 2592, height: 3888 },
      { src: "/images/02_02_04.jpg", alt: "山形県最上郡金山町を流れる中田春木川、水が澄んだ河原の風景", width: 3024, height: 4032 },
      { src: "/images/02_02_05.jpg", alt: "山形県最上郡金山町田屋の一本桜", width: 3024, height: 4032 },
    ]
  },
  {
    id: "historic-hot-springs",
    number: "03",
    titleJa: "歴史ある温泉街",
    titleEn: "In a Historic Onsen Town",
    image: "/images/02_03_TOP.jpg",
    imageAlt: "山形県最上郡最上町の瀬見温泉に佇む歴史ある木造旅館・喜至楼",
    fallbackImage: "/images/journey-stay.jpg",
    slug: "historic-hot-springs-and-architecture",
    locations: [{ nameJa: "瀬見温泉街・喜至楼 ／ 最上", nameEn: "Semi Onsen & Kijirō / Mogami" }],
    galleryImages: [
      { src: "/images/02_03_01.jpg", alt: "山形県最上郡最上町の喜至楼、レトロな館内で行うモデル撮影ワークショップ", width: 2592, height: 3888 },
      { src: "/images/02_03_02.jpg", alt: "山形県最上郡最上町を流れる小国川と河原に湧く瀬見温泉", width: 5712, height: 4284 },
      { src: "/images/02_03_03.jpg", alt: "山形県最上郡最上町、山形県で最も古い旅館建築とされる喜至楼本館の外観", width: 4284, height: 5712 },
      { src: "/images/02_03_04.jpg", alt: "山形県最上郡最上町、歴史ある趣を残す喜至楼本館の玄関", width: 4284, height: 5712 },
      { src: "/images/02_03_05.jpg", alt: "山形県最上郡最上町の喜至楼、レトロな洋館風の廊下で行うモデル撮影", width: 6016, height: 4012 },
      { src: "/images/02_03_06.jpg", alt: "山形県最上郡最上町の瀬見温泉街と義経ゆかりの伝説を伝える神社", width: 5712, height: 4284 },
      { src: "/images/02_03_07.jpg", alt: "山形県最上郡最上町の喜至楼本館、玄関を入ると広がる戦前の面影を残す館内", width: 3024, height: 4032 },
      { src: "/images/02_03_08.jpg", alt: "山形県最上郡最上町、瀬見温泉街の街角", width: 4284, height: 5712 },
    ]
  },
  {
    id: "along-the-railway",
    number: "04",
    titleJa: "鉄路",
    titleEn: "Along the Railway",
    image: "/images/02_04_TOP.jpg",
    imageAlt: "山形県最上地域を横断する陸羽東線と沿線の風景",
    fallbackImage: "/images/journey-field.jpg",
    slug: "along-the-railway",
    locations: [{ nameJa: "陸羽東線 ／ 新庄・最上", nameEn: "Rikuu East Line / Shinjo & Mogami" }],
    galleryImages: [
      {
        src: "/images/02_04_01.jpg",
        alt: "山形県最上郡最上町の陸羽東線、草が生い茂る線路と鉄橋へ続く風景",
        width: 2592,
        height: 3888,
      },
      { src: "/images/02_04_02.jpg", alt: "山形県最上郡最上町、陸羽東線鵜杉駅のプラットホーム", width: 2592, height: 3888 },
      { src: "/images/02_04_03.jpg", alt: "山形県最上郡最上町、陸羽東線鵜杉駅からヤナ茶屋方向を望む風景", width: 5712, height: 4284 },
      { src: "/images/02_04_04.jpg", alt: "雪の陸羽東線を走り終点の山形県新庄駅に到着したキハ110系", width: 3024, height: 4032 },
      { src: "/images/02_04_05.jpg", alt: "雪に包まれた山形県最上郡最上町の堺田駅と、駅構内にある太平洋側と日本海側を分ける分水嶺", width: 3024, height: 4032 },
      { src: "/images/02_04_06.jpg", alt: "白い雪に日差しが輝く陸羽東線の終点・山形県新庄駅と昔からの車両基地", width: 3024, height: 4032 },
    ]
  }
];

export function findMogamiJourneyTheme(slug: string) {
  return mogamiJourneyThemes.find(theme => theme.slug === slug);
}

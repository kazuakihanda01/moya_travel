export type PartnerCategory = "STAY" | "TRANSPORTATION" | "EXPERIENCE" | "LOCAL PARTNER";

export type Partner = {
  id: string;
  category: PartnerCategory;
  nameJa: string;
  nameEn: string;
  copyJa?: string | null;
  copyEn?: string | null;
  image?: string | null;
  url?: string | null;
};

// Add partner photographs to public/images, then set `image` to switch that
// partner from the text directory to the editorial feature layout.
export const partners: Partner[] = [
  {
    id: "schoenes-heim-kaneyama",
    category: "STAY",
    nameJa: "シェーネスハイム金山",
    nameEn: "SCHÖNES HEIM KANEYAMA",
    copyJa: "金山の森に滞在する。",
    copyEn: "Stay among the forests of Kaneyama.",
    image: null,
    url: null
  },
  {
    id: "trans-ocean-bus",
    category: "TRANSPORTATION",
    nameJa: "トランスオーシャンバス",
    nameEn: "TRANS OCEAN BUS",
    copyJa: null,
    copyEn: null,
    image: null,
    url: null
  }
];

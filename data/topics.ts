export type TopicExternalLink = {
  label: string;
  href: string;
};

export type Topic = {
  topicId: string;
  date: string;
  titleJa: string;
  titleEn: string;
  body: string[];
  externalLinks?: TopicExternalLink[];
};

/**
 * The home-page list and article pages share this source of truth. Add a new
 * object to this array to publish a new topic in both places.
 */
export const topics: Topic[] = [
  {
    topicId: "20260909-02",
    date: "2026.09.09",
    titleJa: "第2回金山リーディングス ― 地域シンポジウムと連携した旅行企画",
    titleEn: "The 2nd Kaneyama Readings — A Travel Program in Collaboration with a Local Symposium",
    body: [
      "地域イベントと旅を組み合わせた企画事例",
      "MOYA Travelでは、シンポジウムやワークショップなど、地域で開催されるイベントと連携した旅行企画の現地手配・コーディネートを行っています。",
      "今回、第2回金山リーディングスと連携し、金山・最上地域をめぐる1泊2日の旅行企画を実施します。",
      "旅行の企画・催行は有限会社トランスオーシャンツーリスト、MOYA Travelはランドオペレーターとして、最上地域での旅程づくりや現地手配・案内を担当します。",
      "金山／本の庭・最上地域をめぐる1泊2日の旅"
    ],
    externalLinks: [
      {
        label: "ツアーの詳細・お申し込みはこちら",
        href: "https://www.moya-kaneyama.org/events/lbsp6slo8uzrm0pgd3028y8t9m7rvd"
      }
    ]
  },
  {
    topicId: "20260909-01",
    date: "2026.09.09",
    titleJa: "MOYA Travelウェブサイトを公開しました。",
    titleEn: "The MOYA Travel website is now live.",
    body: [
      "MOYA Travelのウェブサイトを公開しました。",
      "今後のお知らせは、こちらのTOPICSでご案内します。"
    ]
  },
  {
    topicId: "20260820-01",
    date: "2026.08.20",
    titleJa: "Capture Tokyoとのコラボレーションプロジェクトについて",
    titleEn: "Our collaborative project with Capture Tokyo.",
    body: [
      "Capture TokyoとのコラボレーションによるPhotography Experienceについてご案内します。"
    ],
    externalLinks: [
      {
        label: "Capture Tokyo Photography Experience",
        href: "https://www.capturetokyo.com/photography-experience"
      }
    ]
  }
];

export function getTopic(topicId: string) {
  return topics.find((topic) => topic.topicId === topicId);
}

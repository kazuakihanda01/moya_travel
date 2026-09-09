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

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../../components/Sections";
import { getTopic, topics } from "../../../data/topics";
import { createPageMetadata } from "../../socialMetadata";

type TopicPageProps = {
  params: { topicId: string };
};

const topicMetadata: Record<string, Metadata> = {
  "20260909-02": createPageMetadata({
    title: "地域シンポジウムと連携した旅行企画 | 第2回金山リーディングス | MOYA Travel",
    description: "地域シンポジウムと旅を組み合わせ、旅程づくり、現地手配、案内まで行うMOYA Travelの取り組み事例。第2回金山リーディングスと連携し、金山・最上地域をめぐる1泊2日の旅を形にしました。",
    alternates: { canonical: "/topics/20260909-02" }
  })
};

export function generateStaticParams() {
  return topics.map(({ topicId }) => ({ topicId }));
}

export function generateMetadata({ params }: TopicPageProps): Metadata {
  const topic = getTopic(params.topicId);
  if (!topic) return {};

  return topicMetadata[topic.topicId] ?? {};
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopic(params.topicId);
  if (!topic) notFound();

  return <>
    <Header />
    <main className="topic-page">
      <article className="topic-article">
        <p className="label">TOPICS</p>
        <header className="topic-article-header">
          <time dateTime={topic.date.replaceAll(".", "-")}>{topic.date}</time>
          <h1>{topic.titleJa}</h1>
          <p lang="en">{topic.titleEn}</p>
        </header>
        <div className="topic-article-body">
          {topic.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        {topic.externalLinks && topic.externalLinks.length > 0 && <div className="topic-external-links">
          {topic.externalLinks.map(link => <a className="text-link" key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} →</a>)}
        </div>}
        <a className="text-link topic-back" href="/#topics">BACK TO TOPICS →</a>
      </article>
    </main>
    <Footer />
  </>;
}

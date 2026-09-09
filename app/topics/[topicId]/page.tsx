import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../../components/Sections";
import { getTopic, topics } from "../../../data/topics";

type TopicPageProps = {
  params: { topicId: string };
};

export function generateStaticParams() {
  return topics.map(({ topicId }) => ({ topicId }));
}

export function generateMetadata({ params }: TopicPageProps): Metadata {
  const topic = getTopic(params.topicId);
  if (!topic) return {};

  return {
    title: `${topic.titleJa} | MOYA Travel`,
    description: topic.body[0]
  };
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

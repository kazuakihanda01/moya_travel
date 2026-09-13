import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../../../components/Sections";
import { findMogamiJourneyTheme, mogamiJourneyThemes } from "../../../../data/mogamiJourneys";
import { createPageMetadata } from "../../../socialMetadata";

type ThemeTrunkPageProps = {
  params: { slug: string };
};

const themeMetadata: Record<string, Metadata> = {
  "in-the-cedar-forests": createPageMetadata({
    title: "金山町の杉林を歩く旅 | 大美輪・岩円地蔵 | MOYA Travel",
    description: "山形県金山町の大美輪の大杉や岩円地蔵へ。長い時間をかけて育まれた杉林を歩き、森の風景や撮影を楽しみながら金山の自然に触れます。",
    alternates: { canonical: "/journeys/discover-mogami/in-the-cedar-forests" }
  }),
  "along-the-water": createPageMetadata({
    title: "金山町の水辺をめぐる旅 | 谷口銀山・田屋・中田春木川 | MOYA Travel",
    description: "谷口銀山、田屋の一本桜、中田春木川。山形県金山町の山里を流れる清らかな水と、水辺に生まれた風景をめぐります。",
    alternates: { canonical: "/journeys/discover-mogami/along-the-water" }
  }),
  "historic-hot-springs-and-architecture": createPageMetadata({
    title: "瀬見温泉・喜至楼を訪ねる旅 | 山形・最上町 | MOYA Travel",
    description: "山形県最上町の瀬見温泉と歴史ある旅館・喜至楼へ。小国川沿いの温泉街を歩き、木造建築や館内に残る歴史と土地の物語に触れます。",
    alternates: { canonical: "/journeys/discover-mogami/historic-hot-springs-and-architecture" }
  }),
  "along-the-railway": createPageMetadata({
    title: "陸羽東線の風景をたどる旅 | 山形・最上 | MOYA Travel",
    description: "山形県最上地域を横断する陸羽東線。最上町から新庄へ、駅や雪景色、鉄路の風景をたどりながら、復旧へ向かう現在の陸羽東線を見つめます。",
    alternates: { canonical: "/journeys/discover-mogami/along-the-railway" }
  })
};

export function generateStaticParams() {
  return mogamiJourneyThemes.map(theme => ({ slug: theme.slug }));
}

export function generateMetadata({ params }: ThemeTrunkPageProps): Metadata {
  const theme = findMogamiJourneyTheme(params.slug);
  return theme
    ? themeMetadata[theme.slug]
    : {};
}

export default function MogamiThemeTrunkPage({ params }: ThemeTrunkPageProps) {
  const theme = findMogamiJourneyTheme(params.slug);
  if (!theme) notFound();

  return <><Header /><main className="mogami-trunk">
    <div className="mogami-trunk-inner wrap">
      <a className="mogami-trunk-back text-link" href="/journeys/discover-mogami">← DISCOVER MOGAMI</a>
      <header className="mogami-trunk-header">
        <p className="mogami-trunk-number">{theme.number}</p>
        <div className="mogami-trunk-title">
          <h1>{theme.titleJa}</h1>
          <p lang="en">{theme.titleEn}</p>
          {theme.locations.length > 0 && <div className="mogami-trunk-locations" aria-label="場所">
            {theme.locations.map(location => <p key={`${location.nameJa}-${location.nameEn}`}>
              <span>{location.nameJa}</span><span lang="en">{location.nameEn}</span>
            </p>)}
          </div>}
        </div>
      </header>
      {theme.galleryImages.length > 0 && <div className="mogami-trunk-gallery" data-count={theme.galleryImages.length}>
        {theme.galleryImages.map(image => <figure className="mogami-trunk-photo" key={image.src}>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 700px) calc(100vw - 42px), 67vw" />
          {(image.captionJa || image.captionEn) && <figcaption>
            {image.captionJa && <p>{image.captionJa}</p>}
            {image.captionEn && <p lang="en">{image.captionEn}</p>}
          </figcaption>}
        </figure>)}
      </div>}
      <a className="mogami-trunk-return text-link" href="/journeys/discover-mogami">← DISCOVER MOGAMI</a>
    </div>
  </main><Footer /></>;
}

import type { Metadata } from "next";
import { existsSync } from "node:fs";
import Image from "next/image";
import path from "node:path";
import { Footer, Header } from "../../../components/Sections";
import { mogamiJourneyThemes } from "../../../data/mogamiJourneys";

export const metadata: Metadata = {
  title: "最上を知る、小さな旅。 | MOYA Travel",
  description: "最上の風景や場所を、その土地で過ごす時間とともに紹介します。"
};

export default function DiscoverMogamiPage() {
  return <><Header /><main className="mogami-index">
    <header className="mogami-intro wrap">
      <a className="mogami-back text-link" href="/#journeys">← BACK / JOURNEYS</a>
      <div className="mogami-intro-grid">
        <p className="mogami-number">02</p>
        <div><h1>最上を知る、小さな旅。</h1><p className="mogami-heading-en" lang="en">Ways to discover Mogami.</p></div>
        <p className="mogami-deck">最上の風景や場所を、<br />その土地で過ごす時間とともに紹介します。</p>
      </div>
    </header>
    <section className="mogami-themes wrap" aria-label="最上を知る旅のテーマ">
      {mogamiJourneyThemes.map(theme => {
        const trunkHref = `/journeys/discover-mogami/${theme.slug}`;
        const image = existsSync(path.join(process.cwd(), "public", theme.image)) ? theme.image : theme.fallbackImage;
        return <article className={`mogami-theme mogami-theme-${theme.number}`} id={theme.slug} key={theme.id}>
          <a className="mogami-theme-image" href={trunkHref} aria-label={`${theme.titleJa}の写真トランクを開く`}><Image src={image} alt={`${theme.titleJa}を伝える最上の風景`} fill sizes="(max-width: 700px) calc(100vw - 42px), 72vw" /></a>
          <div className="mogami-theme-copy"><p className="mogami-theme-number">{theme.number}</p><a href={trunkHref}><h2>{theme.titleJa}</h2><p className="mogami-theme-en" lang="en">{theme.titleEn}</p></a>
            {theme.locations.length > 0 && <div className="mogami-locations" aria-label="場所">{theme.locations.map(location => <p key={`${location.nameJa}-${location.nameEn}`}><span>{location.nameJa}</span><span lang="en">{location.nameEn}</span></p>)}</div>}
          </div>
        </article>;
      })}
    </section>
    <div className="mogami-return wrap"><a className="text-link" href="/#journeys">← BACK / JOURNEYS</a></div>
  </main><Footer /></>;
}

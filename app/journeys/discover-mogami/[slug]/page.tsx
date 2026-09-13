import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../../../components/Sections";
import { findMogamiJourneyTheme, mogamiJourneyThemes } from "../../../../data/mogamiJourneys";

type ThemeTrunkPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return mogamiJourneyThemes.map(theme => ({ slug: theme.slug }));
}

export function generateMetadata({ params }: ThemeTrunkPageProps): Metadata {
  const theme = findMogamiJourneyTheme(params.slug);
  return theme
    ? { title: `${theme.titleJa} | Discover Mogami | MOYA Travel` }
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
        {theme.galleryImages.map((image, index) => <figure className="mogami-trunk-photo" key={image.src}>
          <Image src={image.src} alt={`${theme.titleJa}の写真 ${index + 1}`} width={image.width} height={image.height} sizes="(max-width: 700px) calc(100vw - 42px), 67vw" />
        </figure>)}
      </div>}
      <a className="mogami-trunk-return text-link" href="/journeys/discover-mogami">← DISCOVER MOGAMI</a>
    </div>
  </main><Footer /></>;
}

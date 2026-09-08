"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const travelInquiryUrl = process.env.NEXT_PUBLIC_TRAVEL_INQUIRY_URL;

const navigationLinks = [
  { label: "ABOUT MOYA TRAVEL", href: "#about" },
  { label: "JOURNEYS & LOCAL EXPERIENCES", href: "#journeys" },
  { label: "PLACES / PHOTOGRAPHS", href: "#places" },
  { label: "COLLABORATIVE PROJECTS", href: "#projects" },
  { label: "LAND OPERATOR", href: "#land-operator" },
  { label: "FOR TRAVELERS", href: "#for-travelers" }
];

const journeys = [
  {
    no: "01",
    title: "美しい町並みを歩く旅",
    titleEn: "A journey through beautiful townscapes.",
    text: <>最上・金山の、蔵屋敷や大堰、伝統的な金山住宅。<br />暮らしとともに受け継がれてきた美しい風景を歩く。</>,
    textEn: <>Traditional Kaneyama houses, historic storehouses, and the Ōzeki waterway<br />in Mogami, Kaneyama.<br />Walk through beautiful landscapes shaped and preserved by generations of local life.</>,
    image: "/images/journey-walk.svg.jpg"
  },
  {
    no: "02",
    title: "最上を知る旅",
    titleEn: "Discover Mogami.",
    text: <>自然、温泉、食、地域文化。<br />最上を彩る8つの地域、それぞれのカラーに触れながら、<br />この土地を深く知る旅。</>,
    textEn: <>Nature, hot springs, food, and local culture.<br />A journey through the eight distinct communities that give Mogami its color,<br />offering a deeper experience of the region.</>,
    image: "/images/journey-stay.svg"
  },
  {
    no: "03",
    title: "最上で集い、語らう旅",
    titleEn: "Gather, Create and Connect in Mogami.",
    text: <>社員旅行や仲間とのセッション、ワークショップ、シンポジウム。<br />自然豊かな最上に集い、都会を離れて語り合う。<br />新しい発想やつながりが生まれる、クリエイティブな時間を旅にする。</>,
    textEn: <>Company retreats, group sessions, workshops, and symposiums.<br />Step away from the city and gather in the nature of Mogami—<br />a journey for conversation, creativity, and new connections.</>,
    image: "/images/journey-field.svg"
  }
];
type PhotoTrunk = {
  no: string;
  nameJa: string;
  nameEn: string;
  descriptionJa?: string | null;
  descriptionEn?: string | null;
  featuredImage: string;
  galleryImages: string[];
};

// Add a trunk here after placing its trunkNN01–07.jpg files in public/images/places/.
// 01 is the featured image; the gallery accepts any one to six images from 02–07.
const photoTrunks: PhotoTrunk[] = [{
  no: "01",
  nameJa: "金山の街並み",
  nameEn: "KANEYAMA TOWNSCAPE",
  featuredImage: "/images/places/trunk0101.jpg",
  galleryImages: Array.from({ length: 6 }, (_, index) => `/images/places/trunk01${String(index + 2).padStart(2, "0")}.jpg`)
}];

const Label = ({ children }: { children: React.ReactNode }) => <p className="label">{children}</p>;

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><a href="#top" className="brand">MOYA Travel</a><button className="menu" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>MENU</button><nav id="navigation" className={open ? "open" : ""} aria-label="メインナビゲーション">{navigationLinks.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav></header>;
}
export function Hero() { return <section className="hero" id="top"><Image src="/images/hero-mountain.png" alt="霧の中に連なる最上の山々" fill priority sizes="100vw" /><div className="hero-copy"><h1>最上を、旅する。</h1><p className="tagline">Journey through Mogami/Yamagata.</p></div></section>; }
export function Introduction() {
  return <section className="intro wrap" id="about">
    <Label>ABOUT MOYA TRAVEL</Label>
    <div className="intro-grid">
      <div className="intro-lead">
        <div className="intro-pair">
          <h2>風景と時間を旅する。</h2>
          <p lang="en">Journey through landscapes and time.</p>
        </div>
        <div className="intro-pair">
          <h2>出会えた物語を写真にする。</h2>
          <p lang="en">Turning the stories we encounter into photographs.</p>
        </div>
      </div>
      <div className="intro-body">
        <div className="intro-pair">
          <p>山形県最上地域。</p>
          <p lang="en">Mogami, Yamagata, Japan.</p>
        </div>
        <div className="intro-pair">
          <p>MOYA Travelは、この土地に流れる時間や風景を、<br />旅と写真を通じた体験として届けていきます。</p>
          <p lang="en">MOYA Travel creates experiences that bring you closer to the landscapes<br />and rhythms of this land through travel and photography.</p>
        </div>
      </div>
    </div>
  </section>;
}
export function Journeys() { return <section className="section wrap" id="journeys"><Label>JOURNEYS &amp; LOCAL EXPERIENCES</Label><h2 className="journeys-title">最上の旅をつくる</h2><p className="journeys-title-en" lang="en">Creating journeys through Mogami.</p><div className="journey-list">{journeys.map(item => <article className="journey" key={item.no}><div className="journey-image"><Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, 55vw" /></div><div className="journey-text"><span>{item.no}</span><h3>{item.title}</h3><p className="journey-title-en" lang="en">{item.titleEn}</p><p>{item.text}</p><p className="journey-description-en" lang="en">{item.textEn}</p></div></article>)}</div></section>; }
function TrunkPhoto({ src, alt, featured = false, onOpen }: { src: string; alt: string; featured?: boolean; onOpen?: () => void }) {
  const [missing, setMissing] = useState(false);
  if (missing) return null;
  const image = <img src={src} alt={alt} onError={() => setMissing(true)} />;
  return featured ? <button className="trunk-featured" type="button" onClick={onOpen} aria-label={`${alt}からフォトトランクを開く`}>{image}<span>VIEW PHOTO TRUNK →</span></button> : <figure className="trunk-photo">{image}</figure>;
}

export function Places() {
  const [openTrunk, setOpenTrunk] = useState<PhotoTrunk | null>(null);
  useEffect(() => {
    if (!openTrunk) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpenTrunk(null);
    document.body.classList.add("trunk-view-open");
    window.addEventListener("keydown", close);
    return () => { document.body.classList.remove("trunk-view-open"); window.removeEventListener("keydown", close); };
  }, [openTrunk]);

  return <section className="section places-bg" id="places"><div className="wrap places-wrap">
    <Label>PLACES / PHOTOGRAPHS</Label>
    <div className="places-heading"><h2>最上の風景。</h2><p lang="en">Landscapes of Mogami.</p></div>
    <div className="trunk-list">{photoTrunks.map(trunk => <article className="photo-trunk" key={trunk.no}>
      <header className="trunk-header"><p className="trunk-number">{trunk.no}</p><div className="trunk-title"><h3>{trunk.nameJa}</h3><p lang="en">{trunk.nameEn}</p></div></header>
      <TrunkPhoto src={trunk.featuredImage} alt={`${trunk.nameJa}の代表写真`} featured onOpen={() => setOpenTrunk(trunk)} />
    </article>)}</div>
  </div>{openTrunk && <div className="trunk-view" role="dialog" aria-modal="true" aria-labelledby={`trunk-view-title-${openTrunk.no}`}>
    <button type="button" className="trunk-back" onClick={() => setOpenTrunk(null)} aria-label="フォトトランク一覧へ戻る"><span aria-hidden="true">←</span> BACK</button>
    <div className="trunk-view-inner">
      <header className="trunk-view-header"><p className="trunk-number">{openTrunk.no}</p><div className="trunk-title"><h3 id={`trunk-view-title-${openTrunk.no}`}>{openTrunk.nameJa}</h3><p lang="en">{openTrunk.nameEn}</p></div>
        {(openTrunk.descriptionJa || openTrunk.descriptionEn) && <div className="trunk-description">{openTrunk.descriptionJa && <p>{openTrunk.descriptionJa}</p>}{openTrunk.descriptionEn && <p lang="en">{openTrunk.descriptionEn}</p>}</div>}
      </header>
      <div className="trunk-gallery" data-count={openTrunk.galleryImages.length}>{openTrunk.galleryImages.slice(0, 6).map((src, index) => <TrunkPhoto key={src} src={src} alt={`${openTrunk.nameJa}の写真 ${index + 1}`} />)}</div>
      <button type="button" className="trunk-return" onClick={() => setOpenTrunk(null)}><span aria-hidden="true">←</span> PHOTO TRUNKSへ戻る</button>
    </div>
  </div>}</section>;
}
export function Projects() { return <section className="section wrap" id="projects"><Label>COLLABORATIVE PROJECTS</Label><article className="project"><div className="project-image"><Image src="/images/BF_13147.jpg" alt="山間の撮影地で大型カメラを構える写真家たち" width={1365} height={2048} sizes="(max-width: 700px) calc(100vw - 42px), 52vw" /></div><div><Label>PHOTOGRAPHY PROJECT</Label><h3>Capture Tokyo <span>×</span> MOYA Travel</h3><div className="project-copy"><div className="project-lead"><h4>最上を舞台に作品をつくる旅。</h4><p lang="en">Create your story in Mogami.</p></div><p>Capture TokyoとのコラボレーションによるPhotography Experience。</p><p className="project-format" lang="en">Model Photography ＋ Landscape Photography</p><div className="project-description-ja"><p>プロの日本人モデルとのポートレート撮影と、</p><p>金山の町並み、歴史ある建築、森や里山をめぐるランドスケープ撮影。</p><p>自然光の中で、その土地を歩き、光を探し、構図をつくる。</p><p>最上で出会う風景と時間を、自分だけの写真作品へ。</p></div><div className="project-description-en" lang="en"><p>Portrait photography with professional Japanese models, together with landscape photography through the townscapes, historic architecture, forests and countryside of Mogami.</p><p>Discover the light and landscapes of Mogami, and transform what you encounter into photographs of your own.</p></div></div><a className="text-link" href="https://www.capturetokyo.com/photography-experience" target="_blank" rel="noopener noreferrer">VIEW PROJECT →</a></div></article></section>; }
export function Professionals() { return <section className="professionals" id="land-operator"><div className="wrap land-operator">
  <div className="land-operator-heading"><Label>LAND OPERATOR</Label><h2>最上だから、つくれる旅がある。</h2><p lang="en">Journeys that can only be created in Mogami.</p></div>
  <div className="land-operator-content">
    <div className="land-operator-intro"><p>MOYA Travelでは、最上・金山を知るランドオペレーターとして、</p><ol>{journeys.map(item => <li key={item.no}><span>{item.no}</span>「{item.title}」</li>)}</ol><p>をベースに、ご要望に合わせた旅をアレンジします。</p></div>
    <div className="land-operator-services"><p>旅行業者様の旅行商品造成に向けた地域コンテンツのご提案、<br />最上地域での宿泊・移動等の旅行サービスの手配、<br />撮影・体験コンテンツの企画・調整など、<br />旅行業者様からのご相談を承ります。</p></div>
    <address><p>NPO法人MOYA<br />山形県最上郡金山町大字金山325</p><p>山形県知事登録 旅行サービス手配業 第サービス-33号<br />（営業拠点：山形県新庄市沖ノ町5-1）</p></address>
    <p className="business-inquiry"><a href="https://business.form-mailer.jp/lp/54d1d843367560" target="_blank" rel="noopener noreferrer">BUSINESS INQUIRY →</a></p>
  </div>
</div></section>; }
export function Contact() {
  return <section className="section wrap travelers" id="for-travelers">
    <Label>FOR TRAVELERS</Label>
    <div className="travelers-grid">
      <div className="travelers-heading">
        <h2>最上を、旅したい人へ。</h2>
        <p lang="en">For those who wish to journey through Mogami.</p>
      </div>
      <div className="travelers-content">
        <div className="travelers-intro">
          <p>旅行者様からのお問い合わせ・旅行のご相談は、<br />提携する旅行業者にて承ります。</p>
          <p lang="en">For travel inquiries and consultations, please contact our partner travel agency,<br />Trans Ocean Tourist Co., Ltd.</p>
        </div>
        <address className="travel-agency">
          <div>
            <p>有限会社トランスオーシャンツーリスト</p>
            <p>山形県知事登録旅行業 第2-200号</p>
            <p>〒996-0021 山形県新庄市常葉町1-30</p>
          </div>
          <div>
            <p lang="en">Trans Ocean Tourist Co., Ltd.</p>
            <p lang="en">Registered Travel Agency, Yamagata Prefecture No. 2-200</p>
            <p lang="en">1-30 Tokiha-machi, Shinjo, Yamagata 996-0021, Japan</p>
          </div>
        </address>
        {travelInquiryUrl ? <a className="text-link" href={travelInquiryUrl} target="_blank" rel="noopener noreferrer">INQUIRY FORM →</a> : <span className="text-link travel-inquiry-pending">INQUIRY FORM →</span>}
      </div>
    </div>
  </section>;
}
export function Footer() {
  return <footer>
    <div className="footer-identity">
      <a className="footer-brand" href="#top">MOYA Travel</a>
      <address>
        <p>NPO法人MOYA<br />山形県最上郡金山町大字金山325</p>
        <p>山形県知事登録 旅行サービス手配業 第サービス-33号<br />（営業拠点：山形県新庄市沖ノ町5-1）</p>
      </address>
    </div>
    <nav aria-label="フッターナビゲーション">{navigationLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <small>© MOYA TRAVEL</small>
  </footer>;
}

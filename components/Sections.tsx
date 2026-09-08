"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

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
  return <header className="header"><a href="#top" className="brand">MOYA Travel</a><button className="menu" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>MENU</button><nav id="navigation" className={open ? "open" : ""} aria-label="メインナビゲーション">{["ABOUT", "JOURNEYS", "PLACES", "PROJECTS", "CONTACT"].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setOpen(false)}>{x}</a>)}</nav></header>;
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
export function Projects() { return <section className="section wrap" id="projects"><Label>COLLABORATIVE PROJECTS</Label><h2>土地を見る、新しい視点。</h2><article className="project"><div className="project-image"><Image src="/images/BF_13147.jpg" alt="山間の撮影地で大型カメラを構える写真家たち" width={1365} height={2048} sizes="(max-width: 700px) calc(100vw - 42px), 52vw" /></div><div><Label>PHOTOGRAPHY PROJECT</Label><h3>Capture Tokyo <span>×</span> MOYA</h3><p>写真を通じて地域を記録し、<br />土地の魅力を新しい視点で伝える共同プロジェクト。</p><a className="text-link" href="https://www.capturetokyo.com/photography-experience" target="_blank" rel="noopener noreferrer">VIEW PROJECT →</a></div></article></section>; }
export function Social() { return <section className="section wrap"><Label>FOLLOW THE JOURNEY</Label><h2>最上の日常を。</h2><div className="social-grid">{["social-mountain.svg", "social-house.svg", "social-sugi.svg"].map((image, i) => <a href="#contact" aria-label={`最上の日常 写真 ${i + 1}`} key={image}><Image src={`/images/${image}`} alt="最上の日常の記録" fill sizes="(max-width: 700px) 100vw, 33vw" /></a>)}</div></section>; }
export function Professionals() { return <section className="professionals"><div className="wrap pro-grid"><div><Label>FOR TRAVEL PROFESSIONALS</Label><h2>旅行業者・事業者の皆さまへ</h2></div><div><p>MOYA Travelでは、最上地域を中心とした旅行コンテンツの企画、地域事業者との調整、旅行サービスの手配を行っています。</p><p>地域を訪れるツアーや撮影、交流企画、滞在プログラム等についてご相談ください。</p><a className="outline" href="#contact">CONTACT US</a></div></div></section>; }
export function Contact() { const [sent, setSent] = useState(false); const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); }; return <section className="section wrap contact" id="contact"><Label>CONTACT</Label><div className="contact-grid"><div><h2>お問い合わせ</h2><p>旅行コンテンツや地域での企画について、<br />こちらからお問い合わせください。</p></div><form onSubmit={submit}>{[["name", "お名前", "text"], ["company", "会社名 / 団体名", "text"], ["email", "メールアドレス", "email"], ["tel", "電話番号", "tel"]].map(([id,label,type]) => <label key={id}>{label}<input id={id} name={id} type={type} required={id === "name" || id === "email"} /></label>)}<label>お問い合わせ種別<select name="type" defaultValue=""><option value="" disabled>選択してください</option>{["旅行コンテンツについて", "地域での撮影・企画について", "旅行サービス手配について", "共同企画について", "その他"].map(x => <option key={x}>{x}</option>)}</select></label><label>お問い合わせ内容<textarea name="message" rows={5} required /></label><button className="outline" type="submit">SEND MESSAGE</button>{sent && <p className="form-note" role="status">現在はプレビュー版です。送信機能は公開時に接続されます。</p>}</form></div></section>; }
export function Footer() { return <footer><div><a className="footer-brand" href="#top">MOYA <span>Travel</span></a><p>MOGAMI, YAMAGATA / JAPAN</p></div><nav aria-label="フッターナビゲーション"><a href="#about">ABOUT</a><a href="#journeys">JOURNEYS</a><a href="#places">PLACES</a><a href="#contact">CONTACT</a></nav><small>© MOYA TRAVEL</small></footer>; }

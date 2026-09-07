"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const journeys = [
  { no: "01", title: "金山の風景を歩く", text: "町並み、杉、山間の暮らしを巡る小さな旅。", image: "/images/journey-walk.svg" },
  { no: "02", title: "地域を知るための滞在", text: "宿泊、地域文化、食、自然を組み合わせた滞在型プログラム。", image: "/images/journey-stay.svg" },
  { no: "03", title: "地域を考える旅", text: "シンポジウム、フィールドワーク、交流企画など。", image: "/images/journey-field.svg" }
];
const places = [
  { category: "KANEYAMA", title: "金山の町並み", text: "杉と白壁がつくる、山間の町の輪郭。", image: "/images/kaneyama.svg", className: "place-wide" },
  { category: "FOREST", title: "杉の森", text: "手入れされた森に差す、静かな光。", image: "/images/forest.svg", className: "place-tall" },
  { category: "SNOW", title: "雪の季節", text: "音を包み、暮らしを変える冬。", image: "/images/snow.svg", className: "" },
  { category: "ARCHITECTURE", title: "土地の建築", text: "風土から生まれ、受け継がれる形。", image: "/images/architecture.svg", className: "" }
];

const Label = ({ children }: { children: React.ReactNode }) => <p className="label">{children}</p>;

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><a href="#top" className="brand">MOYA <span>Travel</span></a><button className="menu" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>MENU</button><nav id="navigation" className={open ? "open" : ""} aria-label="メインナビゲーション">{["ABOUT", "JOURNEYS", "PLACES", "PROJECTS", "CONTACT"].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setOpen(false)}>{x}</a>)}</nav></header>;
}
export function Hero() { return <section className="hero" id="top"><Image src="/images/hero.svg" alt="霧の中に連なる最上の山々" fill priority sizes="100vw" /><div className="hero-copy"><p className="hero-place">MOYA TRAVEL<br />MOGAMI, YAMAGATA / JAPAN</p><h1>最上を、旅する。</h1><p className="tagline">Travel slowly.<br /><em>Stay close to the land.</em></p></div></section>; }
export function Introduction() { return <section className="intro wrap" id="about"><Label>ABOUT MOYA TRAVEL</Label><div className="intro-grid"><h2>山間・森との時間に触れる。<br />写真と物語で世界へ届ける。</h2><div><p>山形県最上地域。<br />山、森、雪、杉、集落、そしてそこに暮らす人々。</p><p>MOYA Travelは、この土地に流れる時間や風景を、<br />旅と写真を通じて伝えていきます。</p><p className="english"><em>Journeys shaped by landscape,<br />people and time.</em></p></div></div></section>; }
export function Journeys() { return <section className="section wrap" id="journeys"><Label>JOURNEYS &amp; LOCAL EXPERIENCES</Label><h2>旅を、つくる。</h2><div className="journey-list">{journeys.map((item, i) => <article className="journey" key={item.no}><div className="journey-image"><Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, 55vw" /></div><div className="journey-text"><span>{item.no}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>; }
export function Places() { return <section className="section places-bg" id="places"><div className="wrap"><Label>PLACES / STORIES / PHOTOGRAPHS</Label><h2>土地の記憶。</h2><div className="places-grid">{places.map(item => <article className={`place ${item.className}`} key={item.title}><div className="place-image"><Image src={item.image} alt={`${item.title}をイメージした風景`} fill sizes="(max-width: 700px) 100vw, 40vw" /></div><Label>{item.category}</Label><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>; }
export function Projects() { return <section className="section wrap" id="projects"><Label>COLLABORATIVE PROJECTS</Label><h2>土地を見る、新しい視点。</h2><article className="project"><div className="project-image"><Image src="/images/BF_13147.jpg" alt="山間の撮影地で大型カメラを構える写真家たち" width={1365} height={2048} sizes="(max-width: 700px) calc(100vw - 42px), 52vw" /></div><div><Label>PHOTOGRAPHY PROJECT</Label><h3>Capture Tokyo <span>×</span> MOYA</h3><p>写真を通じて地域を記録し、<br />土地の魅力を新しい視点で伝える共同プロジェクト。</p><a className="text-link" href="https://www.capturetokyo.com/photography-experiences" target="_blank" rel="noopener noreferrer">VIEW PROJECT →</a></div></article></section>; }
export function Social() { return <section className="section wrap"><Label>FOLLOW THE JOURNEY</Label><h2>最上の日常を。</h2><div className="social-grid">{["social-mountain.svg", "social-house.svg", "social-sugi.svg"].map((image, i) => <a href="#contact" aria-label={`最上の日常 写真 ${i + 1}`} key={image}><Image src={`/images/${image}`} alt="最上の日常の記録" fill sizes="(max-width: 700px) 100vw, 33vw" /></a>)}</div></section>; }
export function Professionals() { return <section className="professionals"><div className="wrap pro-grid"><div><Label>FOR TRAVEL PROFESSIONALS</Label><h2>旅行業者・事業者の皆さまへ</h2></div><div><p>MOYA Travelでは、最上地域を中心とした旅行コンテンツの企画、地域事業者との調整、旅行サービスの手配を行っています。</p><p>地域を訪れるツアーや撮影、交流企画、滞在プログラム等についてご相談ください。</p><a className="outline" href="#contact">CONTACT US</a></div></div></section>; }
export function Contact() { const [sent, setSent] = useState(false); const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); }; return <section className="section wrap contact" id="contact"><Label>CONTACT</Label><div className="contact-grid"><div><h2>お問い合わせ</h2><p>旅行コンテンツや地域での企画について、<br />こちらからお問い合わせください。</p></div><form onSubmit={submit}>{[["name", "お名前", "text"], ["company", "会社名 / 団体名", "text"], ["email", "メールアドレス", "email"], ["tel", "電話番号", "tel"]].map(([id,label,type]) => <label key={id}>{label}<input id={id} name={id} type={type} required={id === "name" || id === "email"} /></label>)}<label>お問い合わせ種別<select name="type" defaultValue=""><option value="" disabled>選択してください</option>{["旅行コンテンツについて", "地域での撮影・企画について", "旅行サービス手配について", "共同企画について", "その他"].map(x => <option key={x}>{x}</option>)}</select></label><label>お問い合わせ内容<textarea name="message" rows={5} required /></label><button className="outline" type="submit">SEND MESSAGE</button>{sent && <p className="form-note" role="status">現在はプレビュー版です。送信機能は公開時に接続されます。</p>}</form></div></section>; }
export function Footer() { return <footer><div><a className="footer-brand" href="#top">MOYA <span>Travel</span></a><p>MOGAMI, YAMAGATA / JAPAN</p></div><nav aria-label="フッターナビゲーション"><a href="#about">ABOUT</a><a href="#journeys">JOURNEYS</a><a href="#places">PLACES</a><a href="#contact">CONTACT</a></nav><small>© MOYA TRAVEL</small></footer>; }

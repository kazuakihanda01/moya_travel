import type { Metadata } from "next";
import { Footer, Header, PartnersDirectory } from "../../components/Sections";
import { createPageMetadata } from "../socialMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "MOYA Travelのパートナー | 最上の旅をともにつくる事業者様",
  description: "山形県最上地域で、MOYA Travelと旅をともにつくる事業者様をご紹介。宿泊、交通、飲食、体験、地域コンテンツなど、最上地域の様々な事業者様と連携し、最上でしか体験できない旅を形にしていきます。",
  alternates: { canonical: "/partners" }
});

export default function PartnersPage() {
  return <>
    <Header />
    <PartnersDirectory />
    <Footer />
  </>;
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import { createSocialMetadata } from "./socialMetadata";

const mincho = Shippori_Mincho({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mincho", display: "swap" });
const cormorant = Cormorant_Garamond({ weight: ["400", "500"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-serif", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-ui", display: "swap" });

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.moya-travel.com/#organization",
  name: "MOYA Travel",
  legalName: "特定非営利活動法人MOYA",
  url: "https://www.moya-travel.com/",
  description: "山形県最上地域の自然、町並み、文化、暮らしに出会う旅を提案するMOYA Travel。",
  address: {
    "@type": "PostalAddress",
    addressLocality: "金山町",
    addressRegion: "山形県",
    addressCountry: "JP"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moya-travel.com"),
  title: "MOYA Travel | 最上を、旅する。",
  description: "山形県最上地域の旅、風景、写真、地域企画を伝えるMOYA Travel。",
  ...createSocialMetadata(
    "MOYA Travel | 最上を、旅する。",
    "山形県最上地域の旅、風景、写真、地域企画を伝えるMOYA Travel。",
    "/"
  )
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body className={`${mincho.variable} ${cormorant.variable} ${inter.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData).replace(/</g, "\\u003c") }} />{children}</body></html>;
}

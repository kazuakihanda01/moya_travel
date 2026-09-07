import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const mincho = Shippori_Mincho({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mincho", display: "swap" });
const cormorant = Cormorant_Garamond({ weight: ["400", "500"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-serif", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-ui", display: "swap" });

export const metadata: Metadata = {
  title: "MOYA Travel | 最上を、旅する。",
  description: "山形県最上地域の旅、風景、写真、地域企画を伝えるMOYA Travel。",
  openGraph: { title: "MOYA Travel | 最上を、旅する。", description: "山形県最上地域の旅、風景、写真、地域企画を伝えるMOYA Travel。", type: "website", locale: "ja_JP" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body className={`${mincho.variable} ${cormorant.variable} ${inter.variable}`}>{children}</body></html>;
}

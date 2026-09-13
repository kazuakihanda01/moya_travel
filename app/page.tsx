import type { Metadata } from "next";
import { Contact, Footer, Header, Hero, Introduction, Journeys, Partners, Places, Professionals, Projects, Topics } from "../components/Sections";

export const metadata: Metadata = {
  title: "MOYA Travel | 山形・最上を旅する",
  description: "山形県最上地域の自然、町並み、文化、暮らしに出会う旅。MOYA Travelは、金山町をはじめとする最上地域で、地域に根ざした旅や体験を提案します。",
  alternates: { canonical: "/" }
};

export default function Home() {
  return <>
    <Header />
    <main>
      <Hero />
      <Introduction />
      <Journeys />
      <Projects />
      <Partners />
      <Topics />
      {/* Temporarily hidden until the PLACES / PHOTOGRAPHS photo data is ready. */}
      {/* <Places /> */}
      <Professionals />
      <Contact />
    </main>
    <Footer />
  </>;
}

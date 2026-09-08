import { Contact, Footer, Header, Hero, Introduction, Journeys, Places, Professionals, Projects } from "../components/Sections";

export default function Home() {
  return <>
    <Header />
    <main>
      <Hero />
      <Introduction />
      <Journeys />
      <Projects />
      {/* Temporarily hidden until the PLACES / PHOTOGRAPHS photo data is ready. */}
      {/* <Places /> */}
      <Professionals />
      <Contact />
    </main>
    <Footer />
  </>;
}

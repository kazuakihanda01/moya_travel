import { Contact, Footer, Header, Hero, Introduction, Journeys, Places, Professionals, Projects, Topics } from "../components/Sections";

export default function Home() {
  return <>
    <Header />
    <main>
      <Hero />
      <Introduction />
      <Journeys />
      <Projects />
      <Topics />
      {/* Temporarily hidden until the PLACES / PHOTOGRAPHS photo data is ready. */}
      {/* <Places /> */}
      <Professionals />
      <Contact />
    </main>
    <Footer />
  </>;
}

import { useEffect } from "react";
import { I18nProvider, useI18n } from "./i18n";
import { applyPageMeta } from "./utils/documentMeta";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import FocusAreas from "./components/FocusAreas";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import SiteAbout from "./components/SiteAbout";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Shell() {
  const { lang, t } = useI18n();

  useEffect(() => {
    applyPageMeta(t.meta.title, t.meta.description);
  }, [lang, t]);

  return (
    <>
      <a className="skip-link" href="#main">
        {lang === "pt-BR" ? "Ir para o conteúdo" : "Skip to content"}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FocusAreas />
        <Certifications />
        <Education />
        <SiteAbout />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Shell />
    </I18nProvider>
  );
}

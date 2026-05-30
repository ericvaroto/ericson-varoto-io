import { useI18n } from "../i18n";
import { LINKEDIN_URL, SHORT_NAME } from "../data/profile";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label={SHORT_NAME}>
          Ericson <span>Varoto</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#about">{t.nav.about}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#focus">{t.nav.focus}</a>
          <a href="#certifications">{t.nav.certifications}</a>
          <a href="#education">{t.nav.education}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="nav-right">
          <div className="lang-switch" role="group" aria-label={t.nav.languageLabel}>
            <button
              type="button"
              className={lang === "pt-BR" ? "active" : ""}
              onClick={() => setLang("pt-BR")}
              aria-pressed={lang === "pt-BR"}
            >
              PT
            </button>
            <button
              type="button"
              className={lang === "en-US" ? "active" : ""}
              onClick={() => setLang("en-US")}
              aria-pressed={lang === "en-US"}
            >
              EN
            </button>
          </div>
          <a
            className="btn btn-secondary"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.linkedin}
          </a>
        </div>
      </div>
    </header>
  );
}

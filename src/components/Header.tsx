import { useEffect, useState } from "react";
import { useI18n } from "../i18n";
import { LINKEDIN_URL, SHORT_NAME } from "../data/profile";

const NAV_IDS = [
  "about",
  "skills",
  "experience",
  "focus",
  "certifications",
  "education",
  "contact",
] as const;

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label={SHORT_NAME} onClick={closeMenu}>
          Ericson <span>Varoto</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={t.nav.menuLabel}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav
          id="primary-nav"
          className={`nav-links${menuOpen ? " open" : ""}`}
          aria-label="Primary"
        >
          {NAV_IDS.map((id) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {t.nav[id]}
            </a>
          ))}
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
            className="btn btn-secondary nav-linkedin"
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

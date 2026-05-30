import { useI18n } from "../i18n";
import { CV_AVAILABLE, CV_BY_LANG, FULL_NAME, LINKEDIN_URL } from "../data/profile";

export default function Hero() {
  const { t, lang } = useI18n();
  const cv = CV_BY_LANG[lang];
  return (
    <section id="top" className="hero">
      <div className="container reveal">
        <p className="headline">{t.hero.headline}</p>
        <h1>{FULL_NAME}</h1>
        <ul className="hero-tags" aria-label={t.hero.headline}>
          {t.hero.tags.map((tag) => (
            <li key={tag}>
              <span className="hero-tag">{tag}</span>
            </li>
          ))}
        </ul>
        <p className="short">{t.hero.short}</p>
        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.hero.primary}
          </a>
          {CV_AVAILABLE ? (
            <a
              className="btn btn-secondary"
              href={cv.path}
              download={cv.downloadName}
              aria-label={t.hero.secondary}
            >
              {t.hero.secondary}
            </a>
          ) : (
            <button className="btn btn-secondary" type="button" disabled aria-disabled="true">
              {t.hero.secondaryComingSoon}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

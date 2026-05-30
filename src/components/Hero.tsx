import { useI18n } from "../i18n";
import { CV_AVAILABLE, CV_PATH, FULL_NAME, LINKEDIN_URL } from "../data/profile";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="hero">
      <div className="container reveal">
        <p className="headline">{t.hero.headline}</p>
        <h1>{FULL_NAME}</h1>
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
            <a className="btn btn-secondary" href={CV_PATH} target="_blank" rel="noopener noreferrer">
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

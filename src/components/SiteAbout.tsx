import { useI18n } from "../i18n";

export default function SiteAbout() {
  const { t } = useI18n();
  return (
    <section id="site-about" className="site-about">
      <div className="container">
        <h2>{t.siteAbout.title}</h2>
        <div className="site-about-card">
          <p>{t.siteAbout.text}</p>
        </div>
      </div>
    </section>
  );
}

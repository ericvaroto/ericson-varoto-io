import { useI18n } from "../i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>{t.about.title}</h2>
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
        <p>{t.about.p4}</p>
        <p className="interests">{t.about.interests}</p>
      </div>
    </section>
  );
}

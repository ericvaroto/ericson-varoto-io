import { useI18n } from "../i18n";

export default function Education() {
  const { t } = useI18n();
  return (
    <section id="education">
      <div className="container">
        <h2>{t.education.title}</h2>
        <div className="edu-card">
          <h3>{t.education.school}</h3>
          <div className="course">{t.education.course}</div>
          <div className="period">{t.education.period}</div>
        </div>
      </div>
    </section>
  );
}

import { useI18n } from "../i18n";

export default function Certifications() {
  const { t } = useI18n();
  return (
    <section id="certifications">
      <div className="container">
        <h2>{t.certifications.title}</h2>
        <div className="cert-grid">
          <div className="cert-card">
            <h3>{t.certifications.certificationsLabel}</h3>
            <ul>
              {t.certifications.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="cert-card">
            <h3>{t.certifications.awardsLabel}</h3>
            <ul>
              {t.certifications.awards.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

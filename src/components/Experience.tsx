import { useI18n } from "../i18n";

export default function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience">
      <div className="container">
        <h2>{t.experience.title}</h2>
        <div className="timeline">
          {t.experience.items.map((item) => (
            <article className="exp-card" key={`${item.company}-${item.period}`}>
              <div className="exp-head">
                <h3 className="exp-company">{item.company}</h3>
                <span className="exp-meta">
                  {item.period} · {item.location}
                </span>
              </div>
              <div className="exp-role">{item.role}</div>
              <ul>
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="exp-stack">
                <strong>{t.experience.stackLabel}:</strong> {item.stack}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

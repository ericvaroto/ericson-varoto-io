import { useI18n } from "../i18n";

const GROUP_ORDER = ["backend", "cloud", "arch", "tools"] as const;

export default function Skills() {
  const { t } = useI18n();
  return (
    <section id="skills">
      <div className="container">
        <h2>{t.skills.title}</h2>
        <div className="skills-grid">
          {GROUP_ORDER.map((key) => (
            <div className="skill-card" key={key}>
              <h3>{t.skills.groups[key]}</h3>
              <div className="skill-tags">
                {t.skills.items[key].map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

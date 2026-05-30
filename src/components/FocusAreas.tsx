import { useI18n } from "../i18n";

export default function FocusAreas() {
  const { t } = useI18n();
  return (
    <section id="focus">
      <div className="container">
        <h2>{t.focus.title}</h2>
        <div className="focus-grid">
          {t.focus.cards.map((c) => (
            <div className="focus-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

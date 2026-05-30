import { useI18n } from "../i18n";
import { LINKEDIN_URL } from "../data/profile";

export default function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact">
      <div className="container">
        <h2>{t.contact.title}</h2>
        <div className="contact-box">
          <p>{t.contact.text}</p>
          <a
            className="btn btn-primary"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.contact.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

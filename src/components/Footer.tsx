import { useI18n } from "../i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <div className="container">{t.footer.text}</div>
    </footer>
  );
}

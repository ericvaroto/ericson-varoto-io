import { useI18n } from "../i18n";

const GROUPS = {
  backend: ["C#", ".NET", "ASP.NET", "Python", "JavaScript", "TypeScript", "Kotlin", "REST APIs", "Microservices"],
  cloud: ["AWS", "Lambda", "ECS", "EKS", "DynamoDB", "S3", "SQS", "CloudWatch", "Terraform", "CI/CD"],
  arch: [
    "Distributed Systems",
    "Event-Driven Architecture",
    "Observability",
    "SRE",
    "Incident Analysis",
    "Postmortems",
    "FinOps",
    "Unit Tests",
    "Integration Tests",
  ],
  tools: ["Datadog", "Grafana", "Git", "GitHub", "Devin", "GitHub Copilot", "StackSpot"],
};

export default function Skills() {
  const { t } = useI18n();
  const order: Array<keyof typeof GROUPS> = ["backend", "cloud", "arch", "tools"];
  return (
    <section id="skills">
      <div className="container">
        <h2>{t.skills.title}</h2>
        <div className="skills-grid">
          {order.map((key) => (
            <div className="skill-card" key={key}>
              <h3>{t.skills.groups[key]}</h3>
              <div className="skill-tags">
                {GROUPS[key].map((s) => (
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

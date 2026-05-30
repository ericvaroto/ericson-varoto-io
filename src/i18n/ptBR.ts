import type { Translation } from "./index";

export const ptBR: Translation = {
  meta: {
    title: "Ericson Baldino Varoto | Tech Lead e Engenheiro de Software Sênior Backend",
    description:
      "Tech Lead e Engenheiro de Software Sênior Backend com foco em backend, arquitetura cloud, AWS, observabilidade, SRE e IA aplicada ao desenvolvimento de software.",
  },
  nav: {
    about: "Sobre",
    skills: "Competências",
    experience: "Experiência",
    focus: "Foco",
    certifications: "Certificações",
    education: "Formação",
    contact: "Contato",
    linkedin: "LinkedIn",
    languageLabel: "Idioma",
    menuLabel: "Abrir menu",
  },
  hero: {
    headline: "Tech Lead | Engenheiro Backend Sênior",
    tags: ["Arquitetura Cloud", "AWS", "C# .NET", "Python", "Observabilidade", "SRE"],
    short:
      "Mais de 10 anos construindo soluções backend e cloud confiáveis para sistemas críticos de alta escala.",
    primary: "Ver LinkedIn",
    secondary: "Baixar CV",
    secondaryComingSoon: "Currículo em breve",
  },
  about: {
    title: "Sobre",
    p1: "Engenheiro de Software Sênior e Tech Lead com mais de 10 anos de experiência no desenvolvimento de soluções corporativas, com forte foco em backend, arquitetura cloud, microsserviços, sistemas distribuídos, observabilidade e confiabilidade de aplicações críticas.",
    p2: "Atuo em ambientes financeiros de alta escala, liderando tecnicamente squads ágeis, apoiando decisões arquiteturais, desenho de soluções, code review, mentoria técnica, desenvolvimento de APIs, integrações entre sistemas e sustentação em produção.",
    p3: "Tenho experiência com C#, .NET, Python, JavaScript, Kotlin, AWS, Lambda, ECS, EKS, DynamoDB, S3, SQS, CloudWatch, Kafka, SQL Server, Datadog, Grafana, Terraform, CI/CD, APIs REST e arquitetura orientada a eventos.",
    p4: "Também venho aplicando IA ao longo do ciclo de desenvolvimento de software com ferramentas como Devin, GitHub Copilot e StackSpot, apoiando desenho de soluções, criação de testes unitários, análise de código e ganho de produtividade com qualidade técnica.",
    interests:
      "Principais interesses: engenharia backend, arquitetura cloud, sistemas distribuídos, observabilidade, SRE, liderança técnica e uso prático de IA em engenharia de software.",
  },
  skills: {
    title: "Competências",
    groups: {
      backend: "Backend",
      cloud: "Cloud e DevOps",
      arch: "Arquitetura e Confiabilidade",
      tools: "Ferramentas",
    },
    items: {
      backend: ["C#", ".NET", "ASP.NET", "Python", "JavaScript", "TypeScript", "Kotlin", "APIs REST", "Microsserviços"],
      cloud: ["AWS", "Lambda", "ECS", "EKS", "DynamoDB", "S3", "SQS", "CloudWatch", "Terraform", "CI/CD"],
      arch: [
        "Sistemas Distribuídos",
        "Arquitetura Orientada a Eventos",
        "Observabilidade",
        "SRE",
        "Análise de Incidentes",
        "Postmortems",
        "FinOps",
        "Testes Unitários",
        "Testes Integrados",
      ],
      tools: ["Datadog", "Grafana", "Git", "GitHub", "Devin", "GitHub Copilot", "StackSpot"],
    },
  },
  experience: {
    title: "Experiência",
    present: "Presente",
    stackLabel: "Stack",
    items: [
      {
        company: "Itaú Unibanco",
        role: "Engenheiro de Software Sênior | Tech Lead",
        period: "Out 2021 - Presente",
        location: "São Paulo, Brasil",
        bullets: [
          "Liderança técnica de squads ágeis no desenvolvimento de soluções backend de alta escala em cloud.",
          "Decisões arquiteturais, desenho de soluções, code review e mentoria técnica.",
          "APIs REST de alta performance, microsserviços e sistemas distribuídos.",
          "Observabilidade com logs, métricas, traces, dashboards e alertas.",
          "Atuação em incidentes críticos, análise de causa raiz e postmortems.",
          "Práticas de SRE, FinOps, testes unitários e integrados.",
          "Uso prático de IA com Devin, GitHub Copilot e StackSpot no ciclo de desenvolvimento.",
        ],
        stack:
          "C#, .NET, Python, JavaScript, TypeScript, Kotlin, AWS (Lambda, ECS, EKS, DynamoDB, S3, SQS, CloudWatch), Kafka, SQL Server, Datadog, Grafana, Terraform, CI/CD.",
      },
      {
        company: "Itaú Unibanco",
        role: "Analista de Projetos Pleno | Full Stack",
        period: "Dez 2019 - Out 2021",
        location: "São Paulo, Brasil",
        bullets: [
          "Desenvolvimento full stack para o produto Consignado, do refinamento à sustentação.",
          "Construção de APIs RESTful e soluções web com C#, ASP.NET, SQL Server e Angular.",
          "Testes unitários e integrados para garantir estabilidade e segurança.",
        ],
        stack: "C#, ASP.NET Core, SQL Server, Angular, TypeScript, Git, CI/CD, Terraform.",
      },
      {
        company: "Indra",
        role: "Analista de Sistemas Pleno | Full Stack",
        period: "Jun 2018 - Nov 2019",
        location: "São Paulo, Brasil",
        bullets: [
          "Projeto terceirizado para o Itaú Unibanco, com foco em automações e aplicações corporativas.",
          "Desenvolvimento e sustentação de sistemas desktop e web, integrações e manutenção evolutiva.",
        ],
        stack: "C#, SQL Server, aplicações web e desktop.",
      },
      {
        company: "Stefanini Brasil",
        role: "Analista Programador Pleno | Full Stack",
        period: "Abr 2016 - Mai 2018",
        location: "São Paulo, Brasil",
        bullets: [
          "Sustentação e desenvolvimento de sistemas globais de Service Desk, com interação internacional.",
          "Migração para projeto interno de BPM/ECM, com implantação em clientes pelo Brasil.",
        ],
        stack: "C#, ASP.NET WebForms, ASP.NET MVC, SQL Server, jQuery, JavaScript.",
      },
      {
        company: "Telefônica Brasil",
        role: "Analista Programador em Marketing | Full Stack",
        period: "Ago 2014 - Mar 2016",
        location: "São Paulo, Brasil",
        bullets: [
          "Liderança em sustentação e upgrades de ferramentas de marketing B2B (Front, Back, DB, Servidor).",
          "Otimizações de performance com tuning de queries em SQL Server.",
        ],
        stack: "C#, ASP.NET WebForms, SQL Server, JavaScript, jQuery.",
      },
      {
        company: "T-Systems do Brasil",
        role: "Analista Programador / Estagiário",
        period: "Set 2012 - Jul 2014",
        location: "São Bernardo do Campo, Brasil",
        bullets: [
          "Desenvolvimento e manutenção de ferramenta de suporte ao cliente.",
          "Implementação de relatórios via Reporting Services e Crystal Reports.",
        ],
        stack: "C#, ASP.NET WebForms, .NET Framework, SQL Server.",
      },
    ],
  },
  focus: {
    title: "Foco Profissional",
    cards: [
      {
        title: "Engenharia Backend",
        desc: "Desenvolvimento de APIs e serviços backend de alta performance, baixa latência e alta confiabilidade.",
      },
      {
        title: "Arquitetura Cloud",
        desc: "Arquitetura cloud-native em AWS com Lambda, ECS, EKS, DynamoDB, S3, SQS e CloudWatch.",
      },
      {
        title: "Sistemas Distribuídos",
        desc: "Microsserviços, arquitetura orientada a eventos e integrações de alto volume transacional.",
      },
      {
        title: "Observabilidade e SRE",
        desc: "Logs, métricas, traces, dashboards, alertas, análise de incidentes e postmortems.",
      },
      {
        title: "Liderança Técnica",
        desc: "Tech Lead em squads ágeis, decisões arquiteturais, code review e mentoria técnica.",
      },
      {
        title: "IA na Engenharia de Software",
        desc: "Uso prático de Devin, GitHub Copilot e StackSpot para acelerar desenho, testes e qualidade.",
      },
    ],
  },
  certifications: {
    title: "Certificações e Reconhecimentos",
    certificationsLabel: "Certificações",
    awardsLabel: "Reconhecimentos",
    certifications: [
      "SRE - Trained (pt-BR)",
      "Vibe Coding",
      "Bot Developer",
      "Automation Anywhere - Jumpstart for Developers",
      "Salesforce - Workflow Digital - Trained",
    ],
    awards: [
      "Você em Alta",
      "PRAD - Programa de Remuneração por Alto Desempenho",
    ],
  },
  education: {
    title: "Formação",
    school: "Faculdade Engenheiro Salvador Arena",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "Junho de 2011 - Junho de 2014",
  },
  siteAbout: {
    title: "Sobre este site",
    text: "Este site foi desenvolvido em React e Vite como um projeto pessoal, utilizando um fluxo de desenvolvimento assistido por IA. Usei ChatGPT para estruturação de prompts e refinamento de conteúdo, Lovable para acelerar a prototipação da interface e Cursor para ajustes técnicos, refinamento do código, deploy e melhorias finais.",
  },
  contact: {
    title: "Contato",
    text: "Para contato profissional, acesse meu LinkedIn.",
    cta: "Abrir LinkedIn",
  },
  footer: {
    text: "© 2026 Ericson Baldino Varoto. Desenvolvido com React, Vite e apoio de IA no processo de desenvolvimento.",
  },
};

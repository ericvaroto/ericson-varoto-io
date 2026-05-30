# Ericson Baldino Varoto — Personal Site

Site pessoal profissional publicado em [https://ericsonvaroto.github.io](https://ericsonvaroto.github.io).

## Tecnologias

- React 18
- Vite 5
- TypeScript
- CSS puro
- Sem backend, sem banco de dados, sem dependências pesadas

## Rodar localmente

```bash
npm install
npm run dev
```

Servidor em `http://localhost:8080`.

## Build de produção

```bash
npm run build
npm run preview
```

Artefatos em `dist/`.

## Deploy no GitHub Pages

O repositório deve ser `ericsonvaroto/ericsonvaroto.github.io`.

1. No GitHub: **Settings → Pages → Source: GitHub Actions**.
2. Faça push na branch `main`.
3. O workflow `.github/workflows/deploy.yml` faz build e publica automaticamente.
4. O site fica disponível em `https://ericsonvaroto.github.io`.

> O `vite.config.ts` usa `base: "/"`, correto para o repositório `<usuario>.github.io` (raiz do domínio).

## Adicionar o CV (futuro)

1. Coloque o arquivo em `public/cv.pdf`.
2. Em `src/data/profile.ts` altere:
   ```ts
   export const CV_AVAILABLE = true;
   ```
3. O botão "Download CV" / "Baixar CV" passará a apontar para `/cv.pdf`.

## Alterar traduções

- Português: `src/i18n/ptBR.ts`
- Inglês: `src/i18n/enUS.ts`
- Lógica e detecção: `src/i18n/index.tsx`

Detecção automática pelo idioma do navegador (pt → pt-BR, demais → en-US), com seletor manual no topo e preferência salva em `localStorage`.

## Atualizar informações profissionais

- Texto multilíngue: arquivos de tradução acima.
- Lista de skills: `src/components/Skills.tsx`.
- Dados estáticos (nome, LinkedIn, flag de CV): `src/data/profile.ts`.

## Privacidade

E-mail, telefone, CPF e endereço foram **intencionalmente omitidos**. O único canal de contato exposto é o LinkedIn.

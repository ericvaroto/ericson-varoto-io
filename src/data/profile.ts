import type { Lang } from "../i18n";

export const LINKEDIN_URL = "https://www.linkedin.com/in/ericvaroto/";
export const FULL_NAME = "Ericson Baldino Varoto";
export const SHORT_NAME = "Ericson Varoto";
// Set to true once /public/cv-pt-br.pdf and /public/cv-en-us.pdf are added
export const CV_AVAILABLE = true;

export const CV_BY_LANG: Record<Lang, { path: string; downloadName: string }> = {
  "pt-BR": {
    path: "/cv-pt-br.pdf",
    downloadName: "Ericson-Varoto-CV-PT-BR.pdf",
  },
  "en-US": {
    path: "/cv-en-us.pdf",
    downloadName: "Ericson-Varoto-CV-EN-US.pdf",
  },
};
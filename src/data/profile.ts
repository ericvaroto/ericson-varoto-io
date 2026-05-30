import type { Lang } from "../i18n";

export const LINKEDIN_URL = "https://www.linkedin.com/in/ericvaroto/";
export const FULL_NAME = "Ericson Baldino Varoto";
export const SHORT_NAME = "Ericson Varoto";
// Requires public/cv-pt-br.pdf and public/cv-en-us.pdf
export const CV_AVAILABLE = true;

const assetBase = import.meta.env.BASE_URL;

export const CV_BY_LANG: Record<Lang, { path: string; downloadName: string }> = {
  "pt-BR": {
    path: `${assetBase}cv-pt-br.pdf`,
    downloadName: "ericson-varoto-cv-pt-br.pdf",
  },
  "en-US": {
    path: `${assetBase}cv-en-us.pdf`,
    downloadName: "ericson-varoto-cv-en-us.pdf",
  },
};
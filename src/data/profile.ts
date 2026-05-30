import type { Lang } from "../i18n";

export const LINKEDIN_URL = "https://www.linkedin.com/in/ericvaroto/";
export const FULL_NAME = "Ericson Baldino Varoto";
export const SHORT_NAME = "Ericson Varoto";
// Set to true once public/ericson-varoto-cv.pdf and public/ericson-varoto-cv-en.pdf are added
export const CV_AVAILABLE = true;

const assetBase = import.meta.env.BASE_URL;

export const CV_BY_LANG: Record<Lang, { path: string; downloadName: string }> = {
  "pt-BR": {
    path: `${assetBase}ericson-varoto-cv.pdf`,
    downloadName: "ericson-varoto-cv.pdf",
  },
  "en-US": {
    path: `${assetBase}ericson-varoto-cv-en.pdf`,
    downloadName: "ericson-varoto-cv-en.pdf",
  },
};
import { OG_IMAGE_PATH, SITE_URL } from "../data/site";

type MetaAttr = "name" | "property";

function setMeta(attr: MetaAttr, key: string, content: string): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string): void {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function applyPageMeta(title: string, description: string): void {
  document.title = title;

  setMeta("name", "description", description);
  setMeta("property", "og:type", "website");
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", SITE_URL);
  setMeta("property", "og:image", absoluteOgImageUrl());
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", absoluteOgImageUrl());

  setLink("canonical", SITE_URL);
}

function absoluteOgImageUrl(): string {
  return new URL(OG_IMAGE_PATH, SITE_URL).href;
}

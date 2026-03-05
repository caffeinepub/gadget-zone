/**
 * SEO helpers for dynamic meta tag updates on route changes.
 */

interface SEOMeta {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

const DEFAULT_TITLE =
  "Gadget Zone – Mobile Phones, Repair & CCTV | Thiruvanmiyur, Chennai";
const DEFAULT_DESCRIPTION =
  "Gadget Zone in Thiruvanmiyur, Chennai – Buy new mobiles (Apple, Samsung, Motorola, OnePlus), get expert repair, exchange & upgrade, accessories, CCTV installation, and EMI options.";
const DEFAULT_OG_IMAGE = "/assets/generated/hero-showroom.dim_1600x900.jpg";
const SITE_URL = "https://gadgetzone.in";

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

export function updateSEO(meta: SEOMeta) {
  const title = meta.title ?? DEFAULT_TITLE;
  const description = meta.description ?? DEFAULT_DESCRIPTION;
  const canonical = meta.canonical ? `${SITE_URL}${meta.canonical}` : SITE_URL;
  const ogTitle = meta.ogTitle ?? title;
  const ogDescription = meta.ogDescription ?? description;
  const ogImage = meta.ogImage ?? DEFAULT_OG_IMAGE;
  const ogUrl = meta.ogUrl ? `${SITE_URL}${meta.ogUrl}` : canonical;

  document.title = title;
  setMeta("description", description);
  setCanonical(canonical);
  setMeta("og:title", ogTitle, true);
  setMeta("og:description", ogDescription, true);
  setMeta("og:image", ogImage, true);
  setMeta("og:url", ogUrl, true);
  setMeta("twitter:title", ogTitle);
  setMeta("twitter:description", ogDescription);
  setMeta("twitter:image", ogImage);
}

export function useSEO(meta: SEOMeta) {
  // Called at component mount; no React import needed here
  if (typeof document !== "undefined") {
    updateSEO(meta);
  }
}

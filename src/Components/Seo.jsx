import { useEffect } from "react";

function upsertMeta(name, content, attr = "name") {
  let tag = document.head.querySelector(`meta[${attr}='${name}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let tag = document.head.querySelector(`link[rel='${rel}']`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function upsertJsonLd(id, json) {
  let tag = document.head.querySelector(`script[data-seo-id='${id}']`);
  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.dataset.seoId = id;
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(json);
}

export default function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    const baseUrl = "https://zainflowers.pk";
    const canonical = `${baseUrl}${path}`;

    document.title = title;
    upsertMeta("description", description);
    upsertMeta(
      "keywords",
      "flower shop near me, f6 flower market, flower shop, flower shop islamabad, flower bouquet shop f6, flower market, flower shops in islamabad"
    );

    upsertMeta("og:type", "website", "property");
    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:url", canonical, "property");
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertLink("canonical", canonical);

    upsertJsonLd("local-business", {
      "@context": "https://schema.org",
      "@type": "Florist",
      name: "Zain Flowers",
      image: `${baseUrl}/src/assets/logo/logo.png`,
      url: canonical,
      telephone: "+92 310 7949463",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop No 11, Super Market F-6/2, School Road",
        addressLocality: "Islamabad",
        addressCountry: "PK"
      },
      areaServed: ["Islamabad", "Rawalpindi", "Gujar Khan", "Attock"]
    });
  }, [description, path, title]);

  return null;
}

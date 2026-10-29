import { business } from "../config/business";

export const dynamic = "force-static";

const siteOrigin = business.canonicalDomain
  ? new URL("/", business.canonicalDomain).origin
  : undefined;

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(siteOrigin ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}),
  };
}

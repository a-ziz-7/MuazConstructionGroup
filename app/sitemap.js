import { business } from "../config/business";

export const dynamic = "force-static";

export default function sitemap() {
  if (!business.canonicalDomain) {
    return [];
  }

  return [
    {
      url: new URL("/", business.canonicalDomain).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

import "./globals.css";
import { business } from "../config/business";

const canonicalUrl = business.canonicalDomain
  ? new URL("/", business.canonicalDomain).toString()
  : undefined;

export const metadata = {
  metadataBase: canonicalUrl ? new URL(canonicalUrl) : undefined,
  title: business.metadata.title,
  description: business.metadata.description,
  alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
  openGraph: {
    title: business.metadata.title,
    description: business.metadata.description,
    siteName: business.name,
    type: "website",
    url: canonicalUrl,
    ...(canonicalUrl
      ? {
          images: [
            {
              url: "/assets/logo.png",
              alt: `${business.name} logo`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary",
    title: business.metadata.title,
    description: business.metadata.description,
    ...(canonicalUrl ? { images: ["/assets/logo.png"] } : {}),
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: business.name,
  email: business.email,
  telephone: business.phone,
  areaServed: {
    "@type": "AdministrativeArea",
    name: business.serviceArea,
  },
  ...(canonicalUrl ? { url: canonicalUrl } : {}),
  ...(business.socialLinks.length > 0 ? { sameAs: business.socialLinks } : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

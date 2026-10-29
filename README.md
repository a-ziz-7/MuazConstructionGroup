# MUAZ Construction Group Inc. website

The site is built with Next.js and exported as static files. It has no API
routes, database, server actions, or runtime server dependencies.

## Local development and production build

Install dependencies and run the local development server:

```sh
npm install
npm run dev
```

Create the production static export:

```sh
npm run build
```

The deployable site is written to `out/`. The build also emits `robots.txt` and
`sitemap.xml` from the App Router metadata routes. With no production domain
configured, canonical metadata and sitemap entries are omitted rather than
using a placeholder domain.

## Set the production domain

When the business selects and owns its domain, update `canonicalDomain` in
[`config/business.js`](./config/business.js) to the HTTPS origin, for example
`https://www.example.com` (replace this example; do not deploy it as-is).
The same configuration module controls the business name, public contact
details, service area, SEO title and description, social links, and project
gallery. Rebuild after changing configuration.

## Deploy as a static site on Vercel

1. Push this project to a Git provider and import it into Vercel.
2. Select the **Next.js** framework preset. Use `npm run build` as the build
   command and `out` as the output directory if Vercel requests an output
   directory.
3. Deploy. Next.js `output: "export"` builds the static site into `out/`; no
   API or server-function deployment is required.
4. After the domain is selected, add it in Vercel's project domain settings,
   set `canonicalDomain` in `config/business.js`, and deploy again.

## Google Search Console

After the production domain is live and `canonicalDomain` is configured,
verify the domain in Google Search Console. Open the **Sitemaps** report and
submit `https://YOUR-REAL-DOMAIN/sitemap.xml`, replacing the example with the
actual production domain. The corresponding sitemap reference is also emitted
in the exported `robots.txt`.

## Contact estimate form

The estimate form validates required fields in the browser and opens a
pre-filled message addressed to the configured public email. Visitors must
review and send that message in their email app; the site does not claim that a
request was received.

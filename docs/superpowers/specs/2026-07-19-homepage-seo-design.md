# HRPC Homepage SEO Design

## Goal

Improve the homepage's relevance and crawlability for branded searches including:

- HRPC
- HRPC Kerala
- Human Rights Protection Council
- കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി
- Kerala Manushyavakasha Samrakshana Samithi and common transliteration variants

The primary search language is Malayalam, with English and transliterated terms included naturally for discovery.

## Naming

- Official Malayalam name: കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി
- Official English name: Human Rights Protection Council
- Abbreviation: HRPC
- Canonical website: https://hrpckerala.com/

All remaining references to “Society” will be replaced with “Council.” HRPS must not appear anywhere in crawlable or visible content.

## Technical SEO

- Use a concise Malayalam-first title containing HRPC and Kerala.
- Write a Malayalam-first meta description that identifies the organization and its services.
- Keep the canonical URL, Open Graph URLs, and image URLs on `hrpckerala.com`.
- Add complete `Organization` and `WebSite` JSON-LD with consistent names, URL, logo, founding date, contact information, service area, and languages.
- Keep `robots.txt` and `sitemap.xml` aligned with the canonical domain.
- Preserve Malayalam as the document's primary language.

The legacy `keywords` meta tag may include the approved terms for secondary crawlers, but it is not treated as a Google ranking mechanism.

## On-Page SEO

- Ensure the homepage has one descriptive H1 containing the official Malayalam name and HRPC.
- Include concise visible copy describing HRPC's Kerala focus, complaint support, legal aid, and human-rights awareness.
- Include English and transliterated identity terms naturally in visible supporting text.
- Keep navigation and image alternative text descriptive and consistent.
- Avoid hidden keyword blocks, repeated phrases, and unsupported legal or government-affiliation claims.

## Social Search Presentation

Keep WhatsApp, Facebook, LinkedIn, and X cards Malayalam-first using the official Malayalam name, a Malayalam summary, the canonical URL, and the HRPC logo.

## Verification

- Search the repository for HRPS, stale Vercel URLs, and “Protection Society.”
- Validate required title, description, canonical, Open Graph, and JSON-LD values.
- Run lint, type checking, and the production build.
- Confirm the built HTML contains the intended crawlable metadata.

## Deployment Follow-Up

After deployment, submit `https://hrpckerala.com/sitemap.xml` in Google Search Console and request indexing for the homepage. Ranking is not guaranteed by metadata alone; indexing, useful content, backlinks, domain history, and ongoing updates also affect results.

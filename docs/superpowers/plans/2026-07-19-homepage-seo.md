# HRPC Homepage SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a consistent Malayalam-first SEO foundation for branded HRPC Kerala searches.

**Architecture:** Keep crawl-critical metadata in the static `index.html`, enrich it with linked `Organization` and `WebSite` JSON-LD, and strengthen the existing semantic React homepage content. Add a dependency-free Node validation script so branding, canonical URLs, and required SEO fields cannot silently regress.

**Tech Stack:** React 18, TypeScript, Vite 5, static HTML metadata, Schema.org JSON-LD, Node.js validation script.

## Global Constraints

- Official Malayalam name: `കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി`
- Official English name: `Human Rights Protection Council`
- Abbreviation: `HRPC`
- Canonical website: `https://hrpckerala.com/`
- Malayalam remains the primary document and search language.
- Include English and transliterated identity terms naturally; do not keyword-stuff visible copy.
- `HRPS`, `Protection Society`, and `hrpc.vercel.app` must not appear in crawlable or visible site content.
- Do not add unsupported government-affiliation, legal-status, or service claims.

---

## File Structure

- Create `scripts/check-seo.mjs`: dependency-free regression checks for metadata, schema, domain, and branding.
- Modify `package.json`: expose the checker as `npm run check:seo`.
- Modify `index.html`: primary search metadata, social cards, and JSON-LD.
- Modify `src/i18n/translations.ts`: canonical organization name and homepage search copy.
- Modify `src/components/NewsSection.tsx`: remove stale “Society” branding from English reports.
- Modify `src/components/HeroSection.tsx`: improve the hero image alternative text.
- Modify `src/components/SiteHeader.tsx`: use HRPC in the visible header brand.
- Modify `src/components/SiteFooter.tsx`: use HRPC in the visible footer brand.
- Modify `src/i18n/LanguageContext.tsx`: use the `hrpc-lang` preference key.
- Modify `public/sitemap.xml`: canonical homepage and current modification date.
- Verify `public/robots.txt`: canonical sitemap URL.

### Task 1: Technical Metadata and Structured Data

**Files:**
- Create: `scripts/check-seo.mjs`
- Modify: `package.json`
- Modify: `index.html`

**Interfaces:**
- Produces: `npm run check:seo`, a zero-dependency validation command that exits non-zero and prints every failed SEO invariant.
- Produces: static homepage metadata and a Schema.org `@graph` containing one `Organization` and one `WebSite`.

- [ ] **Step 1: Create the failing SEO checker**

Create `scripts/check-seo.mjs`:

```js
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const failures = [];

function expect(condition, message) {
  if (!condition) failures.push(message);
}

expect(
  html.includes('<title>കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി | HRPC Kerala</title>'),
  'The title must be Malayalam-first and include HRPC Kerala.',
);
expect(
  html.includes('<link rel="canonical" href="https://hrpckerala.com/" />'),
  'The canonical URL must use hrpckerala.com.',
);
expect(
  html.includes('property="og:title"') &&
    html.includes('content="കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി | HRPC Kerala"'),
  'The Open Graph title must use the approved Malayalam-first title.',
);
expect(
  html.includes('property="og:url" content="https://hrpckerala.com/"'),
  'The Open Graph URL must use the canonical domain.',
);

const jsonLdBlocks = [...html.matchAll(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
)].map((match) => JSON.parse(match[1]));
const schemaNodes = jsonLdBlocks.flatMap((block) => block['@graph'] ?? [block]);

expect(
  schemaNodes.some((node) => node['@type'] === 'Organization'),
  'Organization structured data is missing.',
);
expect(
  schemaNodes.some((node) => node['@type'] === 'WebSite'),
  'WebSite structured data is missing.',
);

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log('SEO checks passed.');
```

Add the package script:

```json
"check:seo": "node scripts/check-seo.mjs"
```

- [ ] **Step 2: Run the checker and verify it fails for the intended reasons**

Run:

```bash
npm run check:seo
```

Expected: FAIL because the title lacks `HRPC Kerala` and the `WebSite` schema is absent.

- [ ] **Step 3: Implement the static metadata**

In `index.html`, use:

```html
<title>കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി | HRPC Kerala</title>
<meta
  name="description"
  content="കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി (HRPC Kerala) മനുഷ്യാവകാശ സംരക്ഷണം, പരാതി പരിഹാരം, നിയമസഹായം, ബോധവൽക്കരണം എന്നിവയ്ക്കായി കേരളത്തിൽ പ്രവർത്തിക്കുന്നു."
/>
<meta
  name="keywords"
  content="HRPC, HRPC Kerala, Human Rights Protection Council, കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി, Kerala Manushyavakasha Samrakshana Samithi, മനുഷ്യാവകാശ സംരക്ഷണം, മനുഷ്യാവകാശ പരാതി, നിയമസഹായം കേരളം"
/>
```

Use the same title for `og:title` and `twitter:title`. Keep the Malayalam social description, `ml_IN` locale, canonical URL, and all image URLs on `https://hrpckerala.com/`.

Replace the current JSON-LD object with:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hrpckerala.com/#organization",
      "name": "കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി",
      "alternateName": [
        "HRPC",
        "HRPC Kerala",
        "Human Rights Protection Council",
        "Kerala Manushyavakasha Samrakshana Samithi"
      ],
      "url": "https://hrpckerala.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hrpckerala.com/hrpc_logo.png"
      },
      "description": "കേരളത്തിൽ മനുഷ്യാവകാശ സംരക്ഷണം, പരാതി പരിഹാരം, നിയമസഹായം, ബോധവൽക്കരണം എന്നിവയ്ക്കായി പ്രവർത്തിക്കുന്ന സംഘടന.",
      "foundingDate": "1995",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Kerala"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9526775936",
        "contactType": "helpline",
        "areaServed": "IN-KL",
        "availableLanguage": ["Malayalam", "English"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://hrpckerala.com/#website",
      "url": "https://hrpckerala.com/",
      "name": "കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി | HRPC Kerala",
      "publisher": {
        "@id": "https://hrpckerala.com/#organization"
      },
      "inLanguage": ["ml-IN", "en-IN"]
    }
  ]
}
```

Do not add a `SearchAction`; the site does not have working search.

- [ ] **Step 4: Run the checker and inspect the remaining failures**

Run:

```bash
npm run check:seo
```

Expected: PASS with `SEO checks passed.`

- [ ] **Step 5: Commit the technical SEO foundation**

```bash
git add index.html package.json scripts/check-seo.mjs
git commit -m "feat: strengthen homepage SEO metadata"
```

### Task 2: On-Page Naming and Content Consistency

**Files:**
- Modify: `src/i18n/translations.ts`
- Modify: `src/components/NewsSection.tsx`
- Modify: `src/components/HeroSection.tsx`
- Modify: `src/components/SiteHeader.tsx`
- Modify: `src/components/SiteFooter.tsx`
- Modify: `src/i18n/LanguageContext.tsx`

**Interfaces:**
- Consumes: the naming invariants enforced by `npm run check:seo`.
- Produces: one Malayalam-first H1, consistent HRPC naming in both languages, and descriptive hero image text.

- [ ] **Step 1: Extend the checker with branding and H1 invariants**

In `scripts/check-seo.mjs`, change the imports to:

```js
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
```

After `expect()`, add:

```js
function collectSourceFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) return collectSourceFiles(path);
    return ['.ts', '.tsx', '.html', '.xml', '.txt'].includes(extname(path)) ? [path] : [];
  });
}

const checkedFiles = [
  join(root, 'index.html'),
  join(root, 'public', 'robots.txt'),
  join(root, 'public', 'sitemap.xml'),
  ...collectSourceFiles(join(root, 'src')),
];
const siteText = checkedFiles.map((path) => readFileSync(path, 'utf8')).join('\n');
const translations = readFileSync(join(root, 'src', 'i18n', 'translations.ts'), 'utf8');

expect(
  !/HRPS|hrps|Protection Society|hrpc\.vercel\.app/.test(siteText),
  'Stale HRPS, Protection Society, or Vercel branding remains.',
);
expect(
  translations.includes("ml: 'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി (HRPC Kerala)'"),
  'The Malayalam homepage H1 must contain the official name and HRPC Kerala.',
);
```

- [ ] **Step 2: Run the checker and verify the new assertions fail**

Run:

```bash
npm run check:seo
```

Expected: FAIL with `Stale HRPS, Protection Society, or Vercel branding remains.`

- [ ] **Step 3: Update canonical homepage copy**

In `src/i18n/translations.ts`, replace the corresponding values with:

```ts
orgName: {
  ml: 'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി',
  en: 'Human Rights Protection Council',
},
heading: {
  ml: 'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി (HRPC Kerala)',
  en: 'Human Rights Protection Council (HRPC Kerala)',
},
subheading: {
  ml: 'കേരളത്തിൽ മനുഷ്യാവകാശ സംരക്ഷണം, പരാതി പരിഹാരം, നിയമസഹായം, ബോധവൽക്കരണം, പരിസ്ഥിതി സംരക്ഷണം എന്നിവയ്ക്കായി 1995 മുതൽ പ്രവർത്തിക്കുന്നു.',
  en: 'Working across Kerala since 1995 for human-rights protection, grievance support, legal aid, awareness, and environmental conservation.',
},
members: {
  subheading: {
    ml: 'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതിയുടെ സംസ്ഥാനതല നേതൃനിര',
    en: 'State leadership of the Human Rights Protection Council',
  },
},
```

Replace every English occurrence of `Kerala Human Rights Protection Society` with `Human Rights Protection Council` and every standalone organizational use of `Society` with `Council` in `src/components/NewsSection.tsx`. Preserve the event facts and all Malayalam copy.

Confirm the visible brand is `HRPC KERALA` in both `src/components/SiteHeader.tsx` and `src/components/SiteFooter.tsx`. Confirm `src/i18n/LanguageContext.tsx` uses:

```ts
const STORAGE_KEY = 'hrpc-lang';
```

- [ ] **Step 4: Improve the hero image alternative text**

In `src/components/HeroSection.tsx`, change:

```tsx
alt="Justice Scales"
```

to:

```tsx
alt="നീതിയുടെയും മനുഷ്യാവകാശ സംരക്ഷണത്തിന്റെയും പ്രതീകമായ തുലാസ്"
```

- [ ] **Step 5: Run the SEO checker**

Run:

```bash
npm run check:seo
```

Expected: PASS with `SEO checks passed.`

- [ ] **Step 6: Run source validation**

Run:

```bash
npm run typecheck && npm run lint
```

Expected: both commands exit 0 with no TypeScript or ESLint errors.

- [ ] **Step 7: Commit the on-page SEO copy**

```bash
git add scripts/check-seo.mjs src/i18n/translations.ts src/i18n/LanguageContext.tsx src/components/NewsSection.tsx src/components/HeroSection.tsx src/components/SiteHeader.tsx src/components/SiteFooter.tsx
git commit -m "fix: standardize HRPC homepage content"
```

### Task 3: Crawl Files and Production Verification

**Files:**
- Modify: `public/sitemap.xml`
- Verify: `public/robots.txt`
- Verify generated output: `dist/index.html`

**Interfaces:**
- Consumes: canonical metadata and `npm run check:seo`.
- Produces: deployable crawl directives and a verified production bundle.

- [ ] **Step 1: Update the sitemap date**

Use the canonical homepage entry:

```xml
<url>
  <loc>https://hrpckerala.com/</loc>
  <lastmod>2026-07-19</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
```

Confirm `public/robots.txt` contains:

```txt
User-agent: *
Allow: /

Sitemap: https://hrpckerala.com/sitemap.xml
```

- [ ] **Step 2: Run all source checks**

Run:

```bash
npm run check:seo && npm run typecheck && npm run lint
```

Expected: all commands exit 0.

- [ ] **Step 3: Build the production site**

Run:

```bash
npm run build
```

Expected: Vite exits 0 and writes `dist/index.html`.

- [ ] **Step 4: Verify built metadata**

Run:

```bash
node -e "const h=require('fs').readFileSync('dist/index.html','utf8'); for (const value of ['കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി | HRPC Kerala','https://hrpckerala.com/','https://hrpckerala.com/#organization','https://hrpckerala.com/#website']) if (!h.includes(value)) throw new Error('Missing built SEO value: '+value); console.log('Built SEO metadata verified.');"
```

Expected: `Built SEO metadata verified.`

- [ ] **Step 5: Check the final diff**

Run:

```bash
git diff --check
git status --short
```

Expected: no whitespace errors; only intended SEO files are changed.

- [ ] **Step 6: Commit crawl-file updates**

```bash
git add public/sitemap.xml public/robots.txt
git commit -m "chore: update production crawl metadata"
```

## Post-Deployment Checklist

1. Open `https://hrpckerala.com/robots.txt` and `https://hrpckerala.com/sitemap.xml`.
2. Confirm `https://hrpckerala.com/hrpc_logo.png` returns the logo publicly.
3. Add the domain property in Google Search Console using DNS verification.
4. Submit `https://hrpckerala.com/sitemap.xml`.
5. Inspect `https://hrpckerala.com/` and request indexing.
6. Validate the deployed URL with Google Rich Results Test and Schema.org Validator.
7. Recheck indexing after Google recrawls; do not expect immediate ranking changes.

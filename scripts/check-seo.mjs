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

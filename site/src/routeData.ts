// Adds the page's JSON-LD graph (site-seo) to Starlight's head.
import profile from './components/site-footer/profile.json';
import { docsJsonLd } from './components/site-seo/starlight.mjs';

export const onRequest = docsJsonLd({
  name: 'Writing With Agents',
  repo: 'https://github.com/Jeffallan/writing-with-agents',
  base: '/writing-with-agents',
  profile,
});

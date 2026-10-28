// og:image cards for every docs page, at /writing-with-agents/og/<page>.png (site-seo).
import { getCollection } from 'astro:content';
import { docsPages, ogRoute } from '../../components/site-seo/og.mjs';

export const { getStaticPaths, GET } = await ogRoute({
  name: 'Writing With Agents',
  pages: docsPages(await getCollection('docs')),
});

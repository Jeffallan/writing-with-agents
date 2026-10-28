import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import seoGraph from '@jdevalk/astro-seo-graph/integration';
import { llmsSectionsFromSync } from './src/components/site-sync/llms.mjs';

const SITE_URL = 'https://jeffallan.github.io/writing-with-agents';
const DESCRIPTION =
  '10 specialized writing skills for Claude Code — AI-assisted writing with progressive disclosure and collaborative oscillation.';

export default defineConfig({
  site: 'https://jeffallan.github.io',
  base: '/writing-with-agents',
  integrations: [
    starlight({
      title: 'Writing With Agents',
      description: DESCRIPTION,
      routeMiddleware: './src/routeData.ts',
      plugins: [starlightLinksValidator()],
      customCss: [
        '@fontsource-variable/outfit',
        '@fontsource-variable/source-sans-3',
        './src/components/site-style/tokens.css',
        './src/components/site-style/starlight.css',
        './src/styles/custom.css',
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=GT-MK98CW3N',
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-MK98CW3N');
          `,
        },
        {
          tag: 'link',
          attrs: {
            rel: 'alternate',
            type: 'text/plain',
            href: '/writing-with-agents/llms.txt',
            title: 'LLM-friendly content',
          },
        },
        {
          tag: 'script',
          attrs: {
            type: 'module',
          },
          content: `
            import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
            mermaid.initialize({ startOnLoad: false, theme: 'dark' });

            function renderMermaid() {
              document.querySelectorAll('pre[data-language="mermaid"]').forEach((pre, i) => {
                const lines = pre.querySelectorAll('.ec-line');
                const code = Array.from(lines).map(line => line.textContent).join('\\n');
                const div = document.createElement('div');
                div.className = 'mermaid';
                div.id = 'mermaid-' + i;
                div.textContent = code;
                const block = pre.closest('.expressive-code');
                // Expressive Code puts its one stylesheet and script inside the first
                // code block on the page. Keep them when that block is a diagram.
                block.querySelectorAll('link, script').forEach((el) => document.head.append(el));
                block.replaceWith(div);
              });
              mermaid.run();
            }

            renderMermaid();
            document.addEventListener('astro:page-load', renderMermaid);
          `,
        },
      ],
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
        Header: './src/components/Header.astro',
        Footer: './src/components/Footer.astro',
        Hero: './src/components/Hero.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Jeffallan/writing-with-agents',
        },
      ],
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Skills',
          items: [
            {
              label: 'Generation',
              collapsed: true,
              items: [{ autogenerate: { directory: 'skills/generation' } }],
            },
            {
              label: 'Structure',
              collapsed: true,
              items: [{ autogenerate: { directory: 'skills/structure' } }],
            },
            {
              label: 'Craft',
              collapsed: true,
              items: [{ autogenerate: { directory: 'skills/craft' } }],
            },
            {
              label: 'Quality',
              collapsed: true,
              items: [{ autogenerate: { directory: 'skills/quality' } }],
            },
            {
              label: 'SEO',
              collapsed: true,
              items: [{ autogenerate: { directory: 'skills/seo' } }],
            },
            {
              label: 'Strategy',
              collapsed: true,
              items: [{ autogenerate: { directory: 'skills/strategy' } }],
            },
            {
              label: 'Research',
              collapsed: true,
              items: [{ autogenerate: { directory: 'skills/research' } }],
            },
          ],
        },
        {
          label: 'Workflows',
          collapsed: true,
          items: [{ autogenerate: { directory: 'workflows' } }],
        },
        {
          label: 'Project',
          items: [
            { label: 'README', link: '/readme/' },
            { label: 'Changelog', link: '/changelog/' },
          ],
        },
      ],
    }),
    // llms.txt from site-sync's page list (D-028); site-sync writes llms-full.txt
    seoGraph({
      // Its link check reads links from the domain root and misses the base path, so it
      // reports every internal link as a 404. starlight-links-validator checks them instead
      validateInternalLinks: false,
      llmsTxt: {
        title: 'Writing With Agents',
        siteUrl: SITE_URL,
        summary: DESCRIPTION,
        sections: llmsSectionsFromSync(import.meta.dirname, SITE_URL),
      },
    }),
  ],
});

// This site's call-to-action line, used by the hero, the skill pages
// (middleware.ts) and the end of other pages (Footer.astro).
export const ctaText = 'Want help building an AI-assisted writing workflow?';

/** Skill detail pages: /skills/<domain>/<skill>/ under the site's base. */
export const isSkillPage = (pathname: string) => /\/skills\/[^/]+\/[^/]+\/$/.test(pathname);

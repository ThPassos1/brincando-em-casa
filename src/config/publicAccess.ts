/**
 * Controle de acesso público do site.
 *
 * `false` = site off no domínio gratuito (Vercel). Visitantes veem só a
 * página de indisponibilidade; robots em noindex.
 *
 * Para o lançamento com domínio próprio, mude para `true` e restaure
 * indexação em `index.html`, `public/robots.txt` e `public/sitemap.xml`.
 * Também espelhe o valor em `vite.config.ts` (`SITE_PUBLIC_ACCESS`).
 */
export const SITE_PUBLIC_ACCESS = false

# Brincando em Casa

Landing page de conversão para a [Brincando em Casa](https://brincandoemcasa.com.br), espaço educativo em Manaus com práticas inspiradas na Pedagogia Waldorf. O objetivo é receber o tráfego de anúncios (Meta e Google) e levar a família até o WhatsApp para agendar uma visita.

**Live:** [brincando-em-casa.vercel.app](https://brincando-em-casa.vercel.app)

Projeto desenvolvido pela [TechT](https://www.techt.agency/).

## O que o site faz

- Hero com carrossel de fotos reais, tipografia da marca e CTA principal para visita
- Seções de proposta pedagógica, espaço físico (com mapa), cotidiano, depoimentos em vídeo 9:16 e FAQ
- Botão flutuante de WhatsApp, com mensagem diferente conforme a origem do clique (hero, espaço, matrículas)
- SEO local para Manaus: Open Graph, sitemap, robots, JSON-LD (`EducationalOrganization`, `ChildCare`, `Preschool`)
- Layout mobile-first, áreas seguras de iPhone e animações com respeito a `prefers-reduced-motion`
- Headers de produção (CSP, clickjacking, referrer, HSTS) e política de privacidade em linguagem simples

## Stack

| Camada | Ferramenta |
| --- | --- |
| UI | React 19, TypeScript |
| Build | Vite 8 |
| Estilo | Tailwind CSS 4, tokens da marca |
| Motion | Framer Motion |
| Deploy | Vercel |

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Conversão e conteúdo

WhatsApp: `wa.me/5592985779009`. As mensagens por origem ficam em `src/lib/whatsapp.ts`. Dados públicos do espaço (endereço, horário, Instagram) em `src/lib/site.ts`.

Tracking de anúncios (Meta Pixel / Google Ads) só entra com IDs reais e atualização do CSP. Não há cadastro nem backend: o site é estático.

## Licença

Código de portfólio. Marca, textos, fotos e vídeos pertencem à Brincando em Casa.

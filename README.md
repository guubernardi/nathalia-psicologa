# Nathalia Psicóloga

Site institucional para a psicóloga Nathalia (CRP 23/2742), com atendimento psicológico online voltado a adultos. Landing page de página única com apresentação profissional, processo de atendimento, benefícios da terapia, perguntas frequentes e chamada para agendamento pelo WhatsApp.

Site no ar: **https://nathalia-psicologa.vercel.app**

## Destaques

- Revelação de conteúdo ao rolar a página, via uma única instância de `IntersectionObserver` compartilhada por todos os elementos (`plugins/revelar.js`), exposta como diretiva `v-revelar` — evita criar um observer por elemento.
- Fallback de acessibilidade sem JavaScript: uma tag `<noscript>` no `app.vue` neutraliza a animação de revelação (`opacity`/`transform`) caso o `IntersectionObserver` não rode, garantindo que o conteúdo continue visível.
- SEO on-page com `useHead` por página e FAQ marcado com JSON-LD (`FAQPage`/`Question`) na seção de perguntas frequentes.
- Imagens responsivas via `@nuxt/image` (`<NuxtImg>`), com `sizes`, `format="webp"`, `loading="lazy"` e `preload` na imagem do hero.
- Navegação fixa que reage ao scroll, menu mobile com `aria-label` dinâmico (abrir/fechar) e navegação por âncoras de uma página só.
- Design tokens centralizados em SASS (`assets/css/variaveis.sass`): paleta de cores e escala tipográfica fluida com `clamp()` como variáveis CSS (`:root`).
- Seções separadas por divisores em onda (SVG), reduzindo o uso de bordas retas entre blocos de conteúdo.

## Stack

- [Nuxt 3](https://nuxt.com/) (Vue 3, Vue Router) com SSR habilitado
- SASS indentado (`sass-embedded`) como pré-processador de estilos
- [Pinia](https://pinia.vuejs.org/) para estado global
- [@nuxt/image](https://image.nuxt.com/) para otimização de imagens
- [@edusites/icons](https://www.npmjs.com/package/@edusites/icons) como biblioteca de ícones/SVGs
- Axios (utilitário de requisição incluso no boilerplate)
- pnpm como gerenciador de pacotes

## Estrutura

```
assets/css/       tokens (variáveis), fontes, normalize, animações, scrollbar
components/global/  header, footer, elementos de UI (botão, campo, onda) e ícones
components/pages/    seções específicas da home e das páginas de documentos
pages/               rotas: home e páginas de política/termos
layouts/             layout base (nav + main + footer)
plugins/             revelação no scroll, ícones, emitter de eventos, cliente HTTP
middleware/          tratamento de rota não encontrada (404)
helpers/             funções utilitárias de formatação
stores/              store Pinia
public/              favicons, fontes, imagens e manifest
```

## Rodando localmente

Projeto usa pnpm (há `pnpm-lock.yaml` no repositório).

```bash
pnpm install

# ambiente de desenvolvimento
pnpm dev

# build de produção
pnpm build

# preview do build de produção
pnpm preview
```

---

Desenvolvido por [Gustavo Bernardi](https://github.com/guubernardi).

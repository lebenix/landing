# Lebenix Landing — Documento Técnico

## Descripción
Landing page pública de Lebenix en `www.lebenix.com`.
Marketing, SEO y blog de contenido para nutricionistas en LATAM.
Separada del frontend de la app (`app.lebenix.com`) y la API (`api.lebenix.com`).

## Convenciones de código

### Colores — siempre usar tokens, nunca hex hardcodeados

Los tokens están definidos en `globals.css`:

```css
@theme inline {
  --color-dark: #1A1A2E;
  --color-primary: #3BA58F;
  --color-primary-dark: #339980;
  --color-gold: #D4A95E;
}
```

Uso correcto en componentes:

```tsx
// ✅ correcto
<div className="bg-dark text-primary hover:bg-primary-dark" />

// ❌ incorrecto
<div className="bg-[#1A1A2E] text-[#3BA58F] hover:bg-[#339980]" />
```

### URLs de la app — siempre desde lib/config.ts

```ts
import { APP_URL, APP_REGISTER_URL, SITE_URL } from "@/lib/config";

// APP_URL          → https://app.lebenix.com
// APP_REGISTER_URL → https://app.lebenix.com/register
// SITE_URL         → https://www.lebenix.com
```

Nunca escribir estas URLs hardcodeadas en componentes o páginas.

### Server Components por defecto

Solo agregar `"use client"` cuando sea estrictamente necesario (estado, eventos).
Actualmente solo `Navbar.tsx` es Client Component.

### Metadata SEO

Cada página exporta su propio `metadata` con:
- `title`, `description`
- `alternates.canonical`
- `openGraph` completo con `locale: "es_419"`
- `twitter.card: "summary_large_image"`

El `metadataBase` está en `layout.tsx` — no repetir en páginas individuales.

---

## Blog — cómo agregar un post

1. Crear archivo en `content/blog/mi-slug.mdx`
2. Agregar frontmatter:

```mdx
---
title: "Título del artículo"
description: "Descripción corta para SEO y listado."
date: "2026-MM-DD"
---

Contenido en Markdown...
```

3. El slug se deriva del nombre del archivo.
4. `readingTime` se calcula automáticamente (200 palabras/min) — no incluir en frontmatter.
5. El sitemap y el listado del blog se actualizan automáticamente en el próximo build.
6. Actualizar `lastModified` de `/blog` en `sitemap.ts` si es necesario.

---

## SEO — qué está configurado

```
robots.txt          → /robots.ts — permite todos los crawlers
sitemap.xml         → /sitemap.ts — todas las páginas + posts dinámicamente
OG image            → /opengraph-image.tsx — dinámica, 1200×630
metadataBase        → https://www.lebenix.com (en layout.tsx)
JSON-LD             → Organization en layout.tsx (todo el sitio)
                       Article en blog/[slug]/page.tsx (por post)
Google Search       → verification en layout.tsx metadata
Canonical URLs      → declarado en cada página
locale OG           → es_419 (español latinoamericano)
```

---

## Deploy

```
Plataforma:  pendiente de configurar (lebenix.com → apunta a la landing)
Build:       next build
Deploy:      push a main → GitHub Actions auto-deploy
```

La landing comparte dominio principal `lebenix.com` con la app en subdominio `app.lebenix.com`.

---

## Decisiones técnicas

- `next/font`: DM Sans auto-hosteado, sin petición externa a Google Fonts.
- Tailwind v4 `@theme inline`: colores de marca en un solo lugar (`globals.css`).
- `readingTime` calculado desde contenido MDX (200 palabras/min) — no va en frontmatter.
- `blog/[slug]` usa `generateStaticParams` (SSG) y `generateMetadata` con try/catch (slug inválido → 404, no 500).
- `lib/config.ts` centraliza `APP_URL` y `APP_REGISTER_URL`.

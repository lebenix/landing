# Lebenix Landing

Landing pública de Lebenix (`www.lebenix.com`): marketing, SEO y blog de contenido para nutricionistas en LATAM.

La app vive en `app.lebenix.com`. Este repo no necesita la misma rigurosidad técnica que el frontend de la app: priorizar claridad, velocidad, buen criterio editorial y cambios simples.

## Producto

Lebenix es un SaaS de gestión clínica para nutricionistas en LATAM.

Ayuda a centralizar:

- Pacientes e historial clínico
- Agenda de citas
- Mediciones corporales y evolución
- Planes alimenticios
- Integración opcional con Google Calendar

No inventar funcionalidades que no existan en el producto.

## Voz Editorial

Escribir en español latinoamericano, con tono claro, profesional y cercano.

La voz debe sentirse:

- práctica y directa
- útil para nutricionistas independientes o centros pequeños
- enfocada en problemas reales de consulta
- confiable, sin sonar académica de más
- comercial solo cuando tenga sentido

Evitar:

- promesas exageradas
- afirmaciones médicas fuertes sin sustento
- tono de venta agresivo
- relleno genérico de marketing
- cifras, estudios o datos inventados

Lebenix debe aparecer como una solución natural al problema, no como una interrupción publicitaria.

## Blog

Los artículos viven en `content/blog/*.mdx`.

Cada post debe tener solo este frontmatter:

```mdx
---
title: "Título del artículo"
description: "Descripción corta para SEO y listado."
date: "YYYY-MM-DD"
---
```

Reglas para artículos:

- El slug sale del nombre del archivo.
- No agregar `readingTime`; se calcula automáticamente.
- Usar títulos claros, buscables y naturales.
- Escribir para búsquedas reales de nutricionistas en LATAM.
- Mantener una estructura simple: problema, contexto, recomendaciones y cierre.
- Cerrar con una mención breve a Lebenix y CTA suave hacia `https://app.lebenix.com/register`.
- Si el artículo usa datos, normas, estudios o recomendaciones clínicas específicas, verificarlos antes de escribirlos.

## SEO Mínimo

Para posts:

- `title` debe ser específico y útil.
- `description` debe resumir el beneficio del artículo.
- El listado del blog y el sitemap se actualizan automáticamente.

Para páginas nuevas:

- Agregar `metadata` básica: `title`, `description` y canonical.
- Usar URLs públicas con `https://www.lebenix.com`.

## Código

Mantener el código simple y parecido al estilo existente.

- Usar Tailwind y los tokens definidos en `app/globals.css`.
- No hardcodear URLs de la app en componentes; usar `lib/config.ts`.
- Solo usar `"use client"` cuando haga falta estado o eventos.
- Si el cambio es solo un artículo MDX, no hace falta sobrerrevisar todo el proyecto.
- Para cambios en TS/TSX, correr `npm run lint` cuando sea razonable.

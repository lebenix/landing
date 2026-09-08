# Lebenix Landing

Landing pública de Lebenix (`www.lebenix.com`): marketing, SEO y blog para nutricionistas en LATAM.

La app vive en `app.lebenix.com`. Este repo prioriza claridad, velocidad, criterio editorial y cambios simples; no requiere la misma rigurosidad técnica que el frontend de la app.

**Rule:** do not add `Co-Authored-By: Claude` to commits.

## Git — Absolute Rules

- **Never commit directly to `main`.**
- `development` → day-to-day work.
- `main` → production deploy only.
- Push to `main` → GitHub Actions auto-deploys to production.
- **Never commit without explicit user confirmation.** Wait for "yes" or "commit it" before running `git commit`.
- **Never use `git commit --amend`.** Fix mistakes with a new commit.
- **Never `git push --force` to `main` or `development`.**

```bash
git checkout main && git pull
git merge --ff-only development
git push origin main

# If branches diverged:
git checkout main && git pull
git merge development -m "feat|fix|chore: description"
git push origin main

# Sync back after every deploy:
git checkout development && git merge --ff-only main && git push origin development
```

Branch naming: `feat/`, `fix/`, `hotfix/`, `chore/`, `test/`.

**`git add` pathspec trap:** stage deleted and modified files separately, or verify with `git status` before committing.

## Producto

Lebenix es un SaaS de gestión clínica para nutricionistas en LATAM: pacientes, historial clínico, agenda, mediciones, planes alimenticios, alimentos, recetas, plantillas e integración opcional con Google Calendar.

No inventar funcionalidades que no existan.

## Voz Editorial

Escribir en español latinoamericano, claro, profesional y cercano.

Tono:

- práctica y directa
- útil para nutricionistas independientes o centros pequeños
- enfocada en problemas reales de consulta
- confiable sin sonar demasiado académica
- comercial solo cuando tenga sentido

Evitar:

- promesas exageradas
- afirmaciones médicas fuertes sin sustento
- tono de venta agresivo
- relleno genérico de marketing
- cifras, estudios o datos inventados

Lebenix debe aparecer como solución natural, no como interrupción publicitaria.

## Blog

Los artículos viven en `content/blog/*.mdx`.

Frontmatter obligatorio:

```mdx
---
title: "Título del artículo"
description: "Descripción corta para SEO y listado."
date: "YYYY-MM-DD"
---
```

Reglas:

- El slug sale del nombre del archivo.
- No agregar `readingTime`; se calcula automáticamente.
- Usar títulos claros, buscables y naturales.
- Escribir para búsquedas reales de nutricionistas en LATAM.
- Estructura recomendada: problema, contexto, recomendaciones y cierre.
- Cerrar con mención breve a Lebenix y CTA suave hacia `https://app.lebenix.com/register`.
- Verificar datos, normas, estudios o recomendaciones clínicas específicas antes de escribirlos.

## SEO Mínimo

- En posts, cuidar `title` y `description`.
- El blog y sitemap se actualizan automáticamente.
- En páginas nuevas, agregar `metadata` básica y canonical con `https://www.lebenix.com`.

## Código

- Usar Tailwind y los tokens definidos en `app/globals.css`.
- Usar `lib/config.ts` para URLs de la app en componentes.
- Solo usar `"use client"` cuando haga falta estado o eventos.
- Para cambios en TS/TSX, correr `npm run lint` cuando sea razonable.

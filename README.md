# Leonardo Ferrucci | WAYA S.A.

Sitio institucional para presentar a Leonardo Ferrucci, CEO y Presidente de WAYA S.A., y reunir notas de prensa en formato blog.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Estructura principal

```txt
src/pages/index.astro          Home
src/pages/historia.astro       Perfil ejecutivo
src/pages/prensa/index.astro   Listado de prensa/blog
src/pages/prensa/[slug].astro  Página individual de cada nota
src/content/press/             Notas en Markdown
public/images/press/           Imágenes de referencia o tapas de notas
```

## Cómo agregar una nueva nota de prensa

1. Crear un archivo en `src/content/press/`.
2. Usar nombre en minúsculas y con guiones. Ejemplo:

```txt
src/content/press/entrevista-la-nacion.md
```

3. Copiar esta plantilla:

```md
---
title: "Título de la nota"
description: "Resumen breve de una o dos líneas."
date: 2026-08-01
outlet: "Nombre del medio"
category: "Entrevista"
featured: false
image: "/images/press/waya-reference.svg"
imageAlt: "Descripción de la imagen"
author: "WAYA S.A."
tags: ["WAYA", "Fintech", "Inclusión financiera"]
url: "https://link-a-la-nota-original.com"
---

Texto interno, resumen o bajada editorial de la nota.
```

## Cómo agregar una imagen nueva

1. Subir la imagen a:

```txt
public/images/press/nombre-imagen.jpg
```

2. Referenciarla en el Markdown:

```md
image: "/images/press/nombre-imagen.jpg"
```

Si una nota no tiene imagen, el sitio usa una imagen institucional de referencia.

## Campos importantes

- `featured: true` destaca la nota arriba del listado.
- `url` es opcional. Si existe, aparece el botón “Ver nota original”.
- `tags` permite marcar temas como fintech, pymes, educación financiera, etc.

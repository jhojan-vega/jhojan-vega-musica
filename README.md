# Jhojan Vega Música

Esqueleto técnico inicial del catálogo musical. La aplicación pública y el panel administrativo están separados, pero se despliegan juntos mediante Docker Compose.

## Arquitectura

- `apps/public-web`: catálogo público React + Vite + TypeScript.
- `apps/admin-web`: punto de entrada privado React + Vite + TypeScript, publicado en `/admin/`.
- `services/api`: API Node.js + Fastify. Por ahora expone únicamente `GET /health`.
- `packages/shared-types`: tipos TypeScript compartidos, sin lógica de negocio.
- `infra/nginx`: proxy inverso y entrega de archivos multimedia públicos.
- PostgreSQL y el almacenamiento multimedia se ejecutan como volúmenes persistentes de Docker.

## Multimedia inicial

Antes del primer despliegue, los archivos iniciales pueden situarse en:

```text
infra/docker/media/initial/public/images/
infra/docker/media/initial/public/mp3/
infra/docker/media/initial/public/reels/
```

El servicio `media-init` los copia al volumen persistente **solo si está vacío**. Después del primer despliegue, los nuevos archivos deberán llegar mediante el futuro panel `/admin`; el contenido existente no se sobrescribe al reiniciar contenedores.

## Inicio local

1. Copia `.env.example` como `.env` y ajusta las variables locales.
2. Instala las dependencias: `npm install`.
3. Inicia las aplicaciones de desarrollo con `npm run dev` o la API con `npm run dev:api`.
4. Para el conjunto de contenedores: `docker compose up --build`.

Con Docker, el proxy queda disponible en `http://localhost:8080` por defecto; `/admin/` y `/api/health` se encaminan a sus respectivos servicios.

No hay aún autenticación, CRUD, migraciones, carga de archivos, procesamiento multimedia ni diseño definitivo. El despliegue inicial en el VPS será manual; GitHub Actions no forma parte de esta fase.

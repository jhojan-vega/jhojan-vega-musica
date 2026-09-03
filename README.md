# Jhojan Vega Música

Sitio web público del catálogo musical de Jhojan Vega. Es una aplicación ligera construida con React, Vite y TypeScript, publicada mediante Docker y Nginx.

## Arquitectura

La arquitectura está simplificada para servir únicamente el sitio público:

- `apps/public-web`: aplicación pública React + Vite + TypeScript.
- `infra/nginx`: configuración de Nginx como punto de entrada y servidor de multimedia.
- `infra/docker/media/initial`: estructura de contenido inicial para el volumen de medios.
- `docker-compose.yml`: levanta los servicios `public-web`, `media-init` y `nginx`.

## Multimedia

La multimedia pesada se sirve mediante la ruta `/media/` desde el volumen Docker `media-data`.

`media-init` copia el contenido de `infra/docker/media/initial/` al volumen únicamente cuando este está vacío. Esto permite conservar los medios entre recreaciones de contenedores.

Los MP3 actuales del catálogo público se sirven desde `/audio/`, a partir de `apps/public-web/public/audio/`.

## Inicio local

Para construir y levantar el sitio:

```bash
docker compose up -d --build
```

El sitio queda disponible en [http://localhost:8080](http://localhost:8080).

Si se requiere un puerto distinto, se puede crear un archivo `.env` con `HTTP_PORT`.

## Preparación para VPS

El despliegue final se realizará en un VPS con Docker y Docker Compose. Antes del primer arranque, verifica que la multimedia destinada al volumen `media-data` esté disponible en el servidor, ya que los archivos pesados se mantienen separados de la aplicación pública cuando es posible.

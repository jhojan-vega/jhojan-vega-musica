# Docker

`media/initial/` es el paquete opcional de contenido para el primer despliegue. El archivo `.gitkeep` conserva la estructura vacía en Git.

El volumen Docker `media-data` se conserva entre recreaciones de contenedores. `media-init` solo lo llena si aún no contiene archivos.

# Convenciones del proyecto

## Idiomas

| Ámbito | Idioma |
|---|---|
| Código (variables, funciones, clases) | Inglés |
| Comentarios en código | Inglés |
| Commits | Inglés |
| Documentación (`/docs`, README) | Español |
| UI (labels, textos, mensajes) | Español |

## Commits

Se usa [Conventional Commits](https://www.conventionalcommits.org/).

Tipos principales:
- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `docs:` cambios en documentación

El resto de tipos (`refactor`, `chore`, `style`, `test`, `perf`) están disponibles si el caso lo justifica.

## Branches

No se usan branches. Todo va a `main`.

## Tags y releases

No se usan tags ni releases formales.

## Ambientes

> A definir. Se resolverá con comandos de ejecución (no con branches).

## Estructura de carpetas

### Raíz del proyecto

```
personal-assistant/
  /docs    → documentación
  /src     → código de la aplicación
  TODO.md
  README.md
```

### Dentro de `/src`

> A definir cuando se elija el stack.

## Diseño / UI

La base concreta de diseño/UI vive en [docs/DESIGN.md](docs/DESIGN.md). Este archivo solo conserva las convenciones generales del proyecto.

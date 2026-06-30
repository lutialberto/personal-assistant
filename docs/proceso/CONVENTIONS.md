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

Ver `docs/arquitectura/ENVIRONMENTS.md`.

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

Ver `docs/arquitectura/STRUCTURE.md`.

## Componentes genéricos

Los componentes que no tienen lógica de negocio y son completamente genéricos usan el sufijo `App`:
- `ButtonApp`, `TextApp`, `InputApp`, etc.

Esto los distingue de componentes de módulo que sí pueden tener lógica propia.

## Comentarios en código

Solo cuando el motivo no es obvio. Tipos reservados:

- `// TEMPORAL:` — código que debe eliminarse antes de mergear o subir a producción.
- `// HINT:` — pista o recordatorio sobre cómo completar o adaptar el fragmento.
- `// DEBUG:` — solo para depuración, no debe quedar en código final.

## Diseño / UI

La base concreta de diseño/UI vive en [docs/diseno/DESIGN.md](docs/diseno/DESIGN.md). Este archivo solo conserva las convenciones generales del proyecto.

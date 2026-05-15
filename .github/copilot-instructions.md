# Contexto del proyecto — Personal Assistant

## Qué es
Aplicación personal de asistencia para el día a día y largo plazo.
De uso propio, no se publica en tiendas.
No tiene backend: toda la lógica corre en el frontend, con persistencia en storage local y backup en Drive como feature de la app.

## Stack
> A definir.

## Decisiones tomadas

- Sin backend. Todo en frontend.
- Persistencia: storage local + backup a Drive (feature de la app, no script externo).
- Sin branches. Siempre se pushea a `main`.
- Un solo repositorio.
- Estructura raíz: `/docs`, `/src`, `TODO.md`, `README.md`.

## Idiomas

| Ámbito | Idioma |
|---|---|
| Código, comentarios, commits | Inglés |
| Documentación (`/docs`, README) | Español |
| UI | Español |

## Commits
Conventional Commits. Tipos principales: `feat`, `fix`, `docs`.

## Lo que NO hacer
- No crear branches.
- No proponer backend ni APIs propias.
- No asumir stack hasta que esté definido.

## Etapas del proyecto
Ver `docs/STAGES.md` para el detalle completo.

0. Infraestructura
1. Definición
2. Arquitectura
3. MVP
4. Iteraciones
5. Mantenimiento

## Estado actual
Etapa 0 — Infraestructura del proyecto. Ver `TODO.md` para el detalle.

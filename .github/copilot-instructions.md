# Contexto del proyecto — Personal Assistant

## Cómo usar este repo
- Antes de actuar, leer `docs/proceso/STATE.md` y `TODO.md`.
- Este archivo contiene reglas estables del proyecto.
- El estado vivo del trabajo se mantiene en `docs/proceso/STATE.md`.
- Al iniciar una sesión, verificar que `STATE.md` y `TODO.md` reflejan el trabajo de la sesión anterior. Si algo parece sin registrar o desactualizado, avisar antes de continuar.
- `STATE.md` contiene solo el estado actual y el próximo paso — no es un log histórico.
- Antes de cada commit, verificar si `STATE.md` y `TODO.md` necesitan actualizarse. Si es así, actualizarlos primero e incluirlos en el mismo commit.

## Qué es
Aplicación personal de asistencia para el día a día y largo plazo.
De uso propio, no se publica en tiendas.
No tiene backend: toda la lógica corre en el frontend, con persistencia en storage local y backup en Drive como feature de la app.

## Stack
Ver `docs/arquitectura/STACK.md`.

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
- Si surge algo fuera de scope de la etapa actual, anotarlo en `TODO.md` con la etapa correspondiente y no resolverlo en el momento.

## Etapas del proyecto
Ver `docs/proceso/STAGES.md` para el detalle completo.

0. Infraestructura
1. Definición
2. Arquitectura
3. Base técnica
4. MVP
5. Iteraciones
6. Mantenimiento

## Estado actual
Etapa 3 — Base técnica. Ver `docs/proceso/STATE.md` para el contexto vivo.

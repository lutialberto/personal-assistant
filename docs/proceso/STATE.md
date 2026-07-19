# Estado vivo

## Objetivo
Mantener el contexto actual del trabajo para que el siguiente chat no tenga que reconstruirlo desde cero.

## Estado actual

- Etapa 3 — Base técnica. Etapa 2 cerrada.
- Dependencias de la sección 3 instaladas en `src/`.
- Toda la arquitectura documentada en `docs/arquitectura/`.
- Snippets de VSCode copiados, `.env`/`.env.test`/`.env.production`/`.env.local` copiados a `src/`, y `app.json` reemplazado por `app.config.js` (nombre "Personal Assistant", package `com.personalassistant`, ver `docs/arquitectura/ENVIRONMENTS.md`).
- Nota: `_commands/copy-env.bat` del template tiene un bug (rutas relativas sin `%~dp0`), no se usó; los archivos se copiaron a mano.
- `node_modules/prettier` estaba corrupto (faltaba `bin/`); se reinstaló localmente en `src/`.

## Próximo paso
- Correr `eas build:configure` (requiere login EAS) y luego editar `eas.json` con los perfiles de ambiente (sección 6.4).

## Regla de uso
- Si cambia lo que se está haciendo, actualizar este archivo primero.
- Si se empieza una tarea nueva, dejar aquí el resumen corto del punto de partida.

## Última actualización
2026-07-19

# Estado vivo

## Objetivo
Mantener el contexto actual del trabajo para que el siguiente chat no tenga que reconstruirlo desde cero.

## Estado actual

- Etapa 3 — Base técnica. Etapa 2 cerrada.
- Dependencias de la sección 3 instaladas en `src/`.
- Toda la arquitectura documentada en `docs/arquitectura/`.
- Snippets de VSCode copiados, `.env`/`.env.test`/`.env.production`/`.env.local` copiados a `src/`, y `app.json` reemplazado por `app.config.js` (nombre "Personal Assistant", package `com.personalassistant`, ver `docs/arquitectura/ENVIRONMENTS.md`).
- `eas build:configure` ejecutado correctamente dentro de `src/` (Android configurado).
- `eas.json` actualizado con perfiles `development`, `test` y `production` según `docs/arquitectura/ENVIRONMENTS.md`.
- El perfil `test` queda preparado como APK interno autocontenido para instalar sin Metro.
- Se removió el `prepare` de `src/package.json` para que EAS no ejecute Husky durante `npm ci`.
- Flujo de build normalizado: `android:apk` vuelve al comando estándar `eas build --profile test --platform android`.
- Lockfile regenerado con npm `10.9.8` y verificado con `npm ci --include=dev` en `src/`.
- Limpieza post-setup completada: eliminados `src/AGENTS.md`, `src/CLAUDE.md` y `src/.claude/settings.json`.
- Nota: `_commands/copy-env.bat` del template tiene un bug (rutas relativas sin `%~dp0`), no se usó; los archivos se copiaron a mano.
- `node_modules/prettier` estaba corrupto (faltaba `bin/`); se reinstaló localmente en `src/`.

## Próximo paso
- Configurar Expo Router con estructura de navegación global.

## Regla de uso
- Si cambia lo que se está haciendo, actualizar este archivo primero.
- Si se empieza una tarea nueva, dejar aquí el resumen corto del punto de partida.

## Última actualización
2026-09-16

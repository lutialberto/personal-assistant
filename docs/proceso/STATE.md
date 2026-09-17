# Estado vivo

## Objetivo
Mantener el contexto actual del trabajo para que el siguiente chat no tenga que reconstruirlo desde cero.

## Estado actual

- Etapa 3 — Base técnica. Etapa 2 cerrada.
- El template limpio (`create-expo-app tabs`) sirvió para destrabar el fallo de `npm ci` en EAS Build. El fix real fueron 4 cambios: `env` en `eas.json` (`EAS_NO_FROZEN_LOCKFILE`, `EAS_BUILD_DISABLE_NPM_CACHE`), `engines`/`packageManager`/`.nvmrc` fijando node/npm, `eas-cli` como devDependency con script `npm exec eas -- build ...`, y `package-lock.json` regenerado sin drift.
- Ese fix ya se replicó sobre la app original (componentes, forms, theme, Drive/Google Sign-In, etc., recuperada del historial en el commit `0366cff`), que ahora vive en `src/`. El template limpio quedó archivado en `src_clean_template/` por si hace falta comparar algo.
- `app.config.js` de `src/` quedó de nuevo en el proyecto EAS `d6568ac7-...`: se probó cambiarlo a `ee3799a0-...` (el proyecto del template limpio) pero falló porque ese proyecto tiene slug `"src"` registrado, y no coincide con `"personal-assistant"`. El slug de un proyecto EAS no se puede cambiar localmente sin reasignarlo, así que se mantiene el proyecto original.
- `npm ci` validado localmente y confirmado también en el build remoto de EAS (`npm run android:apk`, perfil `test`): pasó OK. El fix del bloqueante de `npm ci` en EAS Build queda cerrado.
- `src_clean_template/` (template limpio archivado) ya se eliminó, con el build de `src/` confirmado.
- Investigado el config plugin de `@react-native-google-signin/google-signin`: para Android con el SDK legacy de esta librería no hace falta ningún plugin (autolink alcanza). El plugin solo aporta algo si se usa Firebase (classpath/`google-services.json`, que no tenemos) o para iOS sin Firebase (`iosUrlScheme`, un client ID de OAuth que todavía no está configurado). Se descarta agregarlo ahora — se retoma cuando se implemente la integración real de Drive.

## Próximo paso
- Base técnica: elegir el siguiente item de `TODO.md` (Expo Router, SQLite con migraciones, Drive backup dummy, tema global, componentes compartidos, o Error Boundary global).

## Regla de uso
- Si cambia lo que se está haciendo, actualizar este archivo primero.
- Si se empieza una tarea nueva, dejar aquí el resumen corto del punto de partida.

## Última actualización
2026-09-17

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
- Error Boundary global: ya estaba implementado desde antes (no estaba marcado en el TODO). De paso se limpió un componente fallback duplicado sin usar y un `headerStyle` rojo/marrón de placeholder.
- Tema global: `hooks/theme/Colors.ts` ya usa los tokens de color de `docs/diseno/DESIGN.md` (antes tenía los placeholders del template). Tipografía/espaciado no se tocaron (viven fuera de `hooks/theme/`, en `components/texts/`).
- Modo oscuro: se sacó por completo (la app es light-only). Causa real de que se vieran fondos en dark: `app/_layout.tsx` alternaba `DarkTheme`/`DefaultTheme` de React Navigation según el sistema, algo aparte de `Colors.ts`. Ahora `Colors.ts` es un objeto plano (sin `{light, dark}`), `useThemeColor` ya no depende de `useColorScheme()`, `app/_layout.tsx` usa un `AppTheme` fijo con los tokens propios y llama `Appearance.setColorScheme("light")` al inicio (con chequeo de soporte — `react-native-web` no lo implementa, tiró `Appearance.default.setColorScheme is not a function`), `app.config.js` tiene `userInterfaceStyle: "light"`, y `app/+html.tsx` sin el `@media (prefers-color-scheme: dark)`. Confirmado visualmente por el usuario, se ve OK.
- Importante: el usuario tiene otra sesión propia trabajando en paralelo sobre este mismo repo/directorio (no worktree separado) — ya aparecieron 2 commits (`66b1be9`, `a46b23d`) hechos por esa sesión mientras se trabajaba acá. Tenerlo en cuenta: el estado del working tree puede cambiar por fuera de esta conversación.

## Próximo paso
- Base técnica: quedan pendientes Expo Router (navegación real: tabs `Hábitos`/`Compras`/`Finanzas`/`Configuración`), SQLite con migraciones, Drive backup dummy, y determinar componentes compartidos a usar/descartar.

## Regla de uso
- Si cambia lo que se está haciendo, actualizar este archivo primero.
- Si se empieza una tarea nueva, dejar aquí el resumen corto del punto de partida.

## Última actualización
2026-09-17

# Estado vivo

## Objetivo
Mantener el contexto actual del trabajo para que el siguiente chat no tenga que reconstruirlo desde cero.

## Estado actual

- Etapa 3 — Base técnica. Etapa 2 cerrada.
- Se reinició `src/` desde cero con `create-expo-app` (`tabs`) para volver al flujo oficial sin customizaciones.
- `eas build:configure` ejecutado de nuevo en el proyecto limpio, con `eas.json` generado por CLI.
- El build interno Android (`preview`) está configurado como APK (`android.buildType = apk`).
- `package.json` incluye script estándar `android:apk` -> `eas build --profile preview --platform android --clear-cache`.
- El build remoto más reciente sigue fallando en `npm ci` (`INSTALL_DEPENDENCIES`) y se está investigando compatibilidad de lockfile con el worker Linux de EAS.

## Próximo paso
- Resolver el fallo de `npm ci` en EAS Build para obtener el primer APK del proyecto limpio.

## Regla de uso
- Si cambia lo que se está haciendo, actualizar este archivo primero.
- Si se empieza una tarea nueva, dejar aquí el resumen corto del punto de partida.

## Última actualización
2026-09-16

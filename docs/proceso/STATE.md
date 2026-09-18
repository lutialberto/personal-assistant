# Estado vivo

## Objetivo
Mantener el contexto actual del trabajo para que el siguiente chat no tenga que reconstruirlo desde cero.

## Estado actual

- Etapa 3 — Base técnica. Etapa 2 cerrada.
- Setup del proyecto y bloqueante de `npm ci` en EAS Build resueltos (detalle en `TODO.md`). Build remoto de EAS confirmado OK.
- De Base técnica ya están hechos: tema global (`hooks/theme/Colors.ts` con los tokens de `docs/diseno/DESIGN.md`), modo oscuro sacado por completo (la app es light-only), Error Boundary global (ya estaba implementado, solo faltaba marcarlo), y SQLite con sistema de migraciones (`services/database/`, conectado en `app/_layout.tsx`, verificado funcionando en web).
- De paso quedó `src/metro.config.js` (antes no existía): soporte `.wasm` + headers COEP/COOP para que `expo-sqlite` funcione en `expo start --web` (el flujo de desarrollo del usuario usa web para probar, y Android solo para los builds/deploys). También `app.config.js` tiene `web.output: "single"` (era `"static"`) para evitar un bug de Metro con workers en el dev server.
- Drive backup dummy es el próximo: la referencia ya revisada en `C:\Users\betom\Desktop\Proyectos\tasks\integrations\google-drive-bkp\` guarda `lastBackupDate` con `AsyncStorage` — hay que adaptar eso a una tabla en SQLite (ya disponible) al portarla.
- Importante: el usuario corre otra sesión propia en paralelo sobre este mismo repo/directorio (no worktree separado) — el working tree puede cambiar por fuera de esta conversación.

## Próximo paso
- Integrar Drive backup como entidad dummy (auth + upload/download/list, `lastBackupDate` en SQLite en vez de AsyncStorage). Después: navegación real (Expo Router, tabs `Hábitos`/`Compras`/`Finanzas`/`Configuración`), y determinar componentes compartidos a usar/descartar.

## Regla de uso
- Si cambia lo que se está haciendo, actualizar este archivo primero.
- Si se empieza una tarea nueva, dejar aquí el resumen corto del punto de partida.

## Última actualización
2026-09-17

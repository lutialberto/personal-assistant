# TODO

## Etapa actual
**Etapa 3 — Base técnica**

## Hecho (Etapa 0)
- Infraestructura del proyecto completa

## Hecho (Etapa 1)
- [x] Descripción de la app, módulos y vistas → `docs/definicion/DEFINITION.md`
- [x] Desglose de tareas por funcionalidad → `docs/definicion/TASKS.md`
- [x] Orden y prioridad de tareas → `docs/definicion/PRIORITY.md`
- [x] Diseño detallado de vistas (qué contiene cada pantalla) → `docs/definicion/VIEWS.md`
- [x] Documento base de diseño/UI → `docs/diseno/DESIGN.md`
- [x] Layouts por pantalla → `docs/diseno/layouts/`

## Hecho (Etapa 2)
- [x] Stack tecnológico → `docs/arquitectura/STACK.md`
- [x] Estructura interna de `/src` → `docs/arquitectura/STRUCTURE.md`
- [x] Ambientes, comandos y deploy → `docs/arquitectura/ENVIRONMENTS.md`
- [x] Seguridad → `docs/arquitectura/SECURITY.md`
- [x] Persistencia → `docs/arquitectura/PERSISTENCE.md`
- [x] Manejo de errores y logging → `docs/arquitectura/ERRORS.md`

## Etapa 3

### Setup del proyecto (README del template: `C:\Users\betom\OneDrive\Desktop\Proyectos\rn-getting-started\rn-getting-started\readme.md`)
- [x] Crear proyecto: `npx create-expo-app . --template tabs` en `src/` — (sección 2)
- [ ] Correr `setup-base.bat` (`app/`, `hooks/theme/`, `assets/fonts/`, `.vscode/`) — (sección 4.1) (pendiente tras reinicio limpio)
- [x] Instalar dependencias — (sección 3)
- [ ] Copiar snippets de VSCode (`copy-snippet.bat`) — (sección 7) (pendiente tras reinicio limpio)
- [ ] Copiar archivos de entorno y renombrar `app.json` → `app.config.js` — (sección 6.2) (pendiente tras reinicio limpio)
- [ ] Editar `app.config.js` (IS_DEV, IS_TEST, nombre, package ID) — (sección 6.3) (pendiente tras reinicio limpio)
- [x] Correr `eas build:configure` (requiere login EAS) — (sección 6.1)
- [x] Editar `eas.json` (perfiles de build) — (sección 6.4, depende del paso anterior)

### Bloqueante actual (resuelto)
- [x] Resolver error de `npm ci` en EAS Build (`Install dependencies`) — fix aplicado en `eas.json`/`package.json`/`.nvmrc`/lockfile, replicado sobre la app original en `src/`
- [x] Correr el build remoto (`npm run android:apk`, perfil `test`) para confirmar el APK — build remoto de EAS pasó OK
- [x] Decidir si se elimina `src_clean_template/` (template limpio archivado) una vez confirmado el build de `src/` — eliminado

### Limpieza post-setup
- [x] Revisar y eliminar archivos del template que no corresponden: `src/AGENTS.md`, `src/CLAUDE.md`, `src/.claude/settings.json`

### Base técnica
- [ ] Configurar Expo Router con estructura de navegación global — hoy `app/` tiene el scaffold genérico del template (`Tab One`/`Tab Two`, `index`/`two`), no la navegación real. Reemplazar por bottom tabs `Hábitos` (default), `Compras`, `Finanzas`, `Configuración` según `docs/definicion/VIEWS.md`
- [ ] Inicializar SQLite con sistema de migraciones
- [ ] Integrar Drive backup como entidad dummy (auth + upload + download funcionales; datos reales de módulos se integran en Etapa 4). Incluye: configurar `webClientId` real en `.env` y, si se agrega el config plugin de `@react-native-google-signin/google-signin` a `app.config.js`, solo hace falta para iOS (`iosUrlScheme`) — Android con el SDK legacy no lo necesita (autolink alcanza)
- [x] Implementar tema global (`hooks/theme/`): `hooks/theme/Colors.ts` ahora usa los tokens de `docs/diseno/DESIGN.md` (colores por rol: `text`, `background`, `surface`, `border`, `primary`/`tint`, `accentStrong`, `success`, `warning`, `error`, `info`, etc.). Pendiente: tipografía y espaciado (tokens de texto/spacing) no se tocaron, solo colores
- [x] Sacar el manejo de modo oscuro (la app es light-only, no estaba en el TODO original pero apareció como bug: algunos fondos se veían en dark). `Colors.ts` pasó de `{light, dark}` a un objeto plano; `useThemeColor` ya no lee `useColorScheme()`; `app/_layout.tsx` usa un `AppTheme` fijo (ya no alterna `DarkTheme`/`DefaultTheme` de React Navigation, que era la causa real del bug) y llama `Appearance.setColorScheme("light")` (con chequeo de soporte, ya que `react-native-web` no lo implementa) para cubrir también librerías de terceros; `app.config.js` con `userInterfaceStyle: "light"`; `app/+html.tsx` sin el `@media (prefers-color-scheme: dark)`
- [ ] Determinar componentes compartidos a usar/descartar revisando el template
- [x] Implementar Error Boundary global — ya estaba implementado (`app/_layout.tsx` con `<Try catch={MainFallbackApp}>`, fallback en `components/containers/error/MainFallbackApp.tsx`). De paso se eliminó el duplicado sin usar `components/error/MainFallbackApp.tsx` y el `headerStyle` rojo/marrón de placeholder en el `Stack`

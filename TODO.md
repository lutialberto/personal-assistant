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
- [x] Correr `setup-base.bat` (`app/`, `hooks/theme/`, `assets/fonts/`, `.vscode/`) — (sección 4.1)
- [x] Instalar dependencias — (sección 3)
- [x] Copiar snippets de VSCode (`copy-snippet.bat`) — (sección 7)
- [x] Copiar archivos de entorno y renombrar `app.json` → `app.config.js` — (sección 6.2) (`copy-env.bat` del template tiene un bug de rutas relativas; se copiaron los `.env*` a mano)
- [x] Editar `app.config.js` (IS_DEV, IS_TEST, nombre, package ID) — (sección 6.3)
- [ ] Correr `eas build:configure` (requiere login EAS) — (sección 6.1)
- [ ] Editar `eas.json` (perfiles de build) — (sección 6.4, depende del paso anterior)

### Limpieza post-setup
- [ ] Revisar y eliminar archivos del template que no corresponden: `src/AGENTS.md`, `src/CLAUDE.md`, `src/.claude/settings.json`

### Base técnica
- [ ] Configurar Expo Router con estructura de navegación global
- [ ] Inicializar SQLite con sistema de migraciones
- [ ] Integrar Drive backup como entidad dummy (auth + upload + download funcionales; datos reales de módulos se integran en Etapa 4)
- [ ] Implementar tema global (`hooks/theme/`): ajustar a tokens de `docs/diseno/DESIGN.md`
- [ ] Determinar componentes compartidos a usar/descartar revisando el template
- [ ] Implementar Error Boundary global

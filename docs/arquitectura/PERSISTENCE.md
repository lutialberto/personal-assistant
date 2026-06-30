# Persistencia

## Decisión de arquitectura

La app no tiene backend. Esta decisión es de **simplicidad**: evitar desarrollar y mantener un servidor para una app con un solo cliente. No es una decisión de seguridad.

Las vistas llaman a la capa de `services/` como si un backend existiera. Los services abstraen el origen de los datos (SQLite, Drive, etc.). Las vistas no saben ni les importa de dónde vienen los datos.

## Estrategia de persistencia

La app tiene dos capas de almacenamiento que se complementan:

| Capa | Tecnología | Qué guarda |
|---|---|---|
| Storage del dispositivo | `expo-sqlite` + `expo-secure-store` | Fuente de verdad principal. Todos los datos de la app |
| Backup remoto | Google Drive | Copia de seguridad de los datos locales. No es la fuente de verdad |

El flujo es: la app lee y escribe siempre en el dispositivo. Drive es solo backup — se exporta desde el dispositivo y se restaura hacia el dispositivo.

## expo-sqlite

- Base de datos relacional en el dispositivo.
- Fuente de verdad para todos los datos de la app (hábitos, compras, finanzas).
- El schema se define y evoluciona manualmente — sin ORM ni herramienta de migraciones.
- Las migraciones se versionan con un número incremental y se ejecutan al iniciar la app si la versión del schema cambió.

## expo-secure-store

- Solo para tokens de autenticación de Drive.
- Límite de 2KB por ítem (Keychain de iOS) — no usar para datos de la app.

## Backup a Drive

- Feature propia de la app, no un script externo.
- Librería de autenticación: `@react-native-google-signin/google-signin`.
- El backup se exporta como JSON desde SQLite y se sube a una carpeta en Drive del usuario.
- Drive no es la fuente de verdad — es solo copia de seguridad. La restauración importa desde Drive hacia SQLite.
- El archivo de backup incluye: versión del schema, timestamp, fecha de exportación y los datos.
- La fecha del último backup se guarda en SQLite (no en AsyncStorage).
- El `webClientId` de Google va en `.env`, no hardcodeado.

### Archivos de la integración Drive

Los archivos fuente están en `C:\Users\betom\OneDrive\Desktop\Proyectos\tasks\integrations\google-drive-bkp\`. Ya fueron revisados y adaptados según la arquitectura de este proyecto.

| Archivo original | Ruta en `src/` |
|---|---|
| `services/googleDriveService.ts` | `src/services/googleDriveService.ts` |
| `hooks/useGoogleDrive.ts` | `src/hooks/useGoogleDrive.ts` |
| `hooks/useBackup.ts` | `src/hooks/useBackup.ts` |
| `config/googleDriveConfig.ts` | `src/constants/googleDrive.ts` — `webClientId` desde `.env` |
| `config/backupConfig.ts` | `src/constants/backup.ts` |

## Lo que no usamos

- `AsyncStorage` — reemplazado por expo-sqlite para datos estructurados y expo-secure-store para datos sensibles.

# Stack tecnológico

## Base

| Tecnología | Versión | Motivo |
|---|---|---|
| React Native | latest (via Expo) | Framework de UI mobile |
| TypeScript | latest (via Expo) | Tipado estático |
| Expo | SDK latest | Toolchain y acceso a APIs nativas |

## Navegación

| Librería | Motivo |
|---|---|
| Expo Router | File-based routing nativo de Expo, estructurado y sin configuración manual |

## Estado global

| Librería | Motivo |
|---|---|
| Zustand | Manejo de estado simple, sin boilerplate, adecuado para una app de uso personal |

## Persistencia local

| Librería | Uso | Motivo |
|---|---|---|
| expo-sqlite | Datos de la app (hábitos, compras, finanzas) | Base de datos relacional en dispositivo, sin límite de tamaño |
| expo-secure-store | Datos sensibles (tokens de Drive) | Almacenamiento seguro del sistema operativo (Keychain/Keystore) |

## Formularios

| Librería | Motivo |
|---|---|
| React Hook Form | Manejo de formularios. Sin librería de validación adicional — validación manual simple |

## Componentes de input

| Librería | Motivo |
|---|---|
| @react-native-community/datetimepicker | Selector de fechas nativo. Útil en Hábitos y Finanzas |
| expo-checkbox | Checkboxes |
| react-native-pager-view | Carruseles y vistas paginadas |

## UI / Feedback

| Librería | Motivo |
|---|---|
| react-native-toast-message | Notificaciones tipo toast |
| @expo/vector-icons | Íconos. Incluida en Expo, suficiente para el scope de la app |

## Gráficos

| Librería | Motivo |
|---|---|
| react-native-gifted-charts | Gráficos para el módulo de Finanzas (proyección de retiro) |

## Fechas

| Librería | Motivo |
|---|---|
| dayjs | Operaciones de fecha para Hábitos (rachas, calendario) y Finanzas (proyecciones). Liviana (~2KB) |

## Tooling

| Herramienta | Motivo |
|---|---|
| Prettier | Formateo automático de código |
| Husky + lint-staged | Pre-commit hook que ejecuta Prettier antes de cada commit |

## Distribución

| Herramienta | Motivo |
|---|---|
| EAS Build | Build y distribución vía Expo Application Services. App de uso personal, no publicada en tiendas |

## Autenticación Google / Drive

| Librería | Motivo |
|---|---|
| @react-native-google-signin/google-signin | Autenticación con Google y acceso a tokens para Drive API |

## Diferencias respecto al template base (`rn-getting-started`)

Al seguir el template base durante la creación del proyecto, tener en cuenta:

| Decisión en el template | Decisión en este proyecto | Motivo |
|---|---|---|
| `AsyncStorage` (implícito por defecto en Expo) | `expo-sqlite` | AsyncStorage es key-value sin estructura; SQLite soporta mejor el modelo de datos relacional de la app |
| No incluye librería de gráficos | `react-native-gifted-charts` | Necesario para el módulo de Finanzas |
| No incluye manejo de fechas | `dayjs` | Necesario para rachas en Hábitos y proyecciones en Finanzas |
| No incluye integración con Google | `@react-native-google-signin/google-signin` | Necesario para backup a Drive |

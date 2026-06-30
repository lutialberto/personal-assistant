# Ambientes

## Ambientes definidos

| Ambiente | APP_VARIANT | Uso |
|---|---|---|
| development | `development` | Desarrollo local |
| test | `test` | Pruebas antes de producción |
| production | _(sin valor)_ | Build final de uso real |

## Configuración

### `app.config.js`

El archivo `app.json` se renombra a `app.config.js` para permitir lógica dinámica:

```js
const IS_DEV = process.env.APP_VARIANT === "development";
const IS_TEST = process.env.APP_VARIANT === "test";

export default {
  // ...
  name: "Personal Assistant" + (IS_DEV ? " - Dev" : IS_TEST ? " - Test" : ""),
  android: {
    package: "com.personalassistant" + (IS_DEV ? ".dev" : IS_TEST ? ".test" : ""),
  },
  ios: {
    bundleIdentifier: "com.personalassistant" + (IS_DEV ? ".dev" : IS_TEST ? ".test" : ""),
  },
};
```

Esto permite instalar los tres ambientes en el mismo dispositivo como apps separadas.

### `eas.json`

```json
{
  "build": {
    "development": {
      "env": { "APP_VARIANT": "development" }
    },
    "test": {
      "extends": "development",
      "env": { "APP_VARIANT": "test" }
    },
    "production": {}
  }
}
```

### Variables de entorno

- Usar `.env` para variables estables.
- Usar `.env.local` para sobreescribir variables en desarrollo local. No commitear `.env.local`.
- No incluir datos sensibles en `.env`.

## Comandos

| Acción | Comando |
|---|---|
| Iniciar en local | `npx expo start` |
| Build development (Android) | `eas build --profile development --platform android` |
| Build test (Android) | `eas build --profile test --platform android` |
| Build production (Android) | `eas build --profile production --platform android` |
| Configurar EAS | `eas build:configure` |

# Manejo de errores y logging

## Estrategia

App de uso personal sin backend. No se usa ningún servicio externo de reporte de crashes.

## Error Boundaries

Se usan React Error Boundaries para capturar errores de renderizado en producción y mostrar un estado de error controlado en lugar de un crash total de la app.

- Un Error Boundary global envuelve la app completa.
- Opcionalmente, Error Boundaries por módulo para aislar fallos (ej: un crash en Finanzas no rompe Hábitos).

## Logging

- En desarrollo: `console.log` / `console.error` estándar.
- En producción: sin logging externo. Los errores capturados por Error Boundaries se muestran al usuario con un mensaje genérico.

## Lo que no usamos

- Sentry ni ningún servicio de crash reporting — no justificado para una app de uso personal.

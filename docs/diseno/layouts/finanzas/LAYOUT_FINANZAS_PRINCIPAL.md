# Layout de Finanzas — Vista principal

## Objetivo

Mostrar el estado actual del plan de retiro y permitir registrar un aporte o snapshot con el mínimo de pasos posible.

## Tipo de vista

- Dashboard de estado del plan de retiro.
- Pantalla principal del módulo Finanzas.

## Relación con otras vistas

- Navega a `Historial` desde un acceso secundario en la pantalla.
- Navega a `Configuración del plan` desde el ícono de configuración en el encabezado.

## Layout general

- Encabezado con título del módulo e ícono de acceso a configuración.
- Bloque de métricas principales.
- Bloque de acciones de registro.
- Acceso secundario al historial.

## Jerarquía de elementos

- Primero: métricas clave (estado actual del plan).
- Segundo: acciones de registro (aporte / snapshot).
- Tercero: acceso al historial.

## Métricas principales

- Capital actual en pesos y su equivalente en USD.
- Capital objetivo (FIRE number) en pesos y USD.
- Porcentaje de avance hacia el objetivo (con barra de progreso visual).
- Aporte mínimo mensual necesario (calculado con capital actual y meses restantes).
- Meses restantes hasta el retiro.

## Bloque de acciones de registro

- Botón `Registrar aporte`: abre formulario para ingresar fecha (precarga la actual) y monto. Precarga tipo de cambio vigente (editable).
- Botón `Registrar snapshot`: abre formulario para ingresar fecha y valor total del portfolio. Precarga tipo de cambio vigente (editable).
- Ambas acciones guardan automáticamente los parámetros del plan vigentes en ese momento que tambien debe ser visibles, precargados y editables.

## Elementos fijos

- Encabezado con título e ícono de configuración.
- Bloque de métricas (siempre visible).
- Botones de registro.

## Elementos variables

- Valores de todas las métricas (se recalculan con cada nuevo aporte o snapshot).
- Estado de avance (porcentaje y barra).

## Estados relevantes

- **Sin datos**: no hay aportes ni snapshots. Métricas muestran solo lo calculable desde los parámetros del plan. Barra de progreso en cero. Acciones de registro visibles y disponibles.
- **Con datos**: métricas completas, progreso actualizado.
- **Plan sin configurar**: si faltan parámetros obligatorios, bloquear registro y mostrar CTA para completar configuración.

## Transiciones

- Al tocar `Registrar aporte` o `Registrar snapshot`: abrir formulario modal o pantalla de ingreso. Al confirmar, volver a la vista principal con métricas actualizadas.
- Al tocar ícono de configuración: navegar a `Configuración del plan`.
- Al tocar acceso al historial: navegar a `Historial`.

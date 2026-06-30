# Layout de Finanzas — Historial

## Objetivo

Mostrar la evolución real del portfolio en el tiempo, comparada con la proyección del plan. El foco es visual: los gráficos ocupan el máximo de espacio disponible.

## Tipo de vista

- Pantalla dedicada a visualización histórica.
- Accesible desde la vista principal de Finanzas.

## Relación con otras vistas

- Se accede desde la vista principal de Finanzas.
- No navega a otras vistas.

## Layout general

- Encabezado con título y navegación de regreso.
- Control de zoom (segmented control) debajo del encabezado.
- Gráfico de línea ocupando la mayor parte del espacio disponible.
- Gráfico de barras debajo del gráfico de línea.

## Control de zoom

- Opciones: `1M` / `1A` / `5A` / `10A`.
- Controla el nivel de detalle del eje X en ambos gráficos simultáneamente.
- A mayor zoom (10A), mayor período visible; a menor zoom (1M), mayor detalle del período reciente.
- A 10A la fecha objetivo de retiro entra en el campo visual.
- No hay scroll ni pan horizontal; el zoom es la única forma de navegar el eje temporal.

## Gráfico de línea (curva de capital)

- Eje X: tiempo, con granularidad según el zoom activo.
- Eje Y: capital en pesos (o USD según preferencia del usuario).
- Contenido:
  - Curva real: puntos de cada snapshot, unidos por línea. Representa el capital real del portfolio en cada momento.
  - Curva proyectada: línea discontinua desde el último snapshot hasta la fecha objetivo de retiro, calculada con los parámetros efectivos vigentes.
- Los aportes posteriores al último snapshot se suman al último punto para mostrar el capital actual estimado.

## Gráfico de barras (aportes)

- Eje X: mismo rango temporal y granularidad que el gráfico de línea, alineado.
- Eje Y: monto del aporte en pesos.
- Una barra por cada aporte registrado.
- Permite ver la regularidad y magnitud de los aportes a lo largo del tiempo.

## Elementos fijos

- Encabezado con navegación de regreso.
- Control de zoom.
- Estructura de dos gráficos apilados (línea arriba, barras abajo).

## Elementos variables

- Nivel de zoom activo.
- Puntos de la curva real (según snapshots registrados).
- Curva proyectada (se recalcula con parámetros vigentes).
- Barras de aportes (según registros).

## Estados relevantes

- **Sin snapshots ni aportes**: gráficos vacíos con mensaje de estado vacío y CTA para registrar el primer dato desde la vista principal.
- **Solo aportes, sin snapshots**: gráfico de barras con datos; curva de línea solo con proyección desde cero.
- **Con snapshots y aportes**: vista completa con curva real + proyección + barras.

## Transiciones

- Al tocar el botón de regreso: volver a la vista principal de Finanzas.
- No hay acciones de edición desde esta pantalla.

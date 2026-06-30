# Layout de Finanzas — Configuración del plan

## Objetivo

Permitir ver y editar los parámetros del plan de retiro, con distinción explícita entre simular (ver el efecto sin guardar) y guardar efectivo (aplicar el cambio para los próximos registros).

## Tipo de vista

- Pantalla de configuración del plan de retiro.
- Accesible desde el encabezado de la vista principal de Finanzas.

## Relación con otras vistas

- Se accede desde la vista principal de Finanzas.
- No navega a otras vistas.

## Layout general

- Encabezado con título, navegación de regreso y estado del modo actual (efectivo / simulación).
- Secciones de parámetros agrupadas.
- Barra de acciones al pie según el modo activo.

## Grupos de parámetros

### Personales
- Año de nacimiento.
- Edad objetivo de retiro.
- Mes objetivo de retiro.

### Financieros
- Retorno anual real esperado (%).
- Multiplicador de gasto al retiro.
- Tasa de retiro sostenible (%).

### Operativos
- Gasto mensual actual.
- Tipo de cambio de referencia (pesos por dólar).

## Modo simulación vs efectivo

El usuario puede editar parámetros en dos modos:

**Modo efectivo:**
- El usuario activa el modo explícitamente.
- Cualquier cambio guardado actualiza los parámetros del plan.
- Los próximos aportes y snapshots usarán los nuevos valores.
- Acción al pie: `Guardar cambios`.

**Modo simulación (por defecto):**
- Puede modificar cualquier parámetro y ver en tiempo real cómo cambian las métricas y la proyección (mostradas en un bloque de vista previa dentro de la misma pantalla).
- Al salir del modo simulación, los parámetros vuelven a los valores efectivos sin guardar nada.
- Indicador visual claro en el encabezado cuando el modo simulación está activo.

## Elementos fijos

- Encabezado con navegación de regreso e indicador de modo.
- Grupos de parámetros.
- Barra de acciones al pie.

## Elementos variables

- Valores de cada parámetro.
- Indicador y acciones al pie según el modo activo.
- Bloque de vista previa de métricas (solo visible en modo simulación).

## Estados relevantes

- **Modo efectivo**: parámetros editables.
- **Modo simulación activo**: encabezado con indicador visible, bloque de preview de métricas visible, acciones al pie cambiadas.

## Transiciones

- Al tocar regreso sin cambios pendientes: volver a vista principal.
- Al tocar regreso con cambios sin guardar en modo efectivo: confirmar antes de salir (se perderían los cambios).
- Al activar modo simulación: encabezado cambia, bloque de preview aparece, acciones al pie cambian.
- Al tocar `Aplicar como efectivo`: guardar parámetros simulados como efectivos y salir del modo simulación.
- Al tocar `Cancelar simulación`: restaurar valores efectivos originales y salir del modo simulación.
- Al tocar `Guardar cambios` en modo efectivo: guardar y volver a vista principal.

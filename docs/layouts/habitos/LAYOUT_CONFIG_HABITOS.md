# Layout de Configuración de hábitos

## Objetivo

Definir la estructura visual y de interacción del flujo de configuración de hábitos, donde se listan hábitos y se gestionan desde su detalle.

## Tipo de vista

- Vista de administración dentro del módulo de Hábitos.
- Pantalla de configuración con foco en alta y acceso a detalle por hábito.
- Flujo con acciones sensibles que requieren confirmación explícita.

## Relación con otras vistas

- Se abre desde `Hábitos principal`.
- Puede abrirse desde estado vacío de `Registro diario` cuando no hay hábitos configurados.
- Abre `Detalle de hábito` al seleccionar un ítem del listado.
- Al guardar cambios, vuelve a la vista anterior dentro del tab de Hábitos.

## Layout general

- Encabezado superior con título y acción principal para crear hábito.
- Área principal con lista de hábitos existentes en formato de filas o tarjetas compactas.
- Cada ítem muestra nombre.
- Cada ítem funciona como acceso al `Detalle de hábito`.

## Formulario de hábito (alta/edición)

### Campos

- Nombre del hábito.
- Tipo de hábito.
- Color para identificar el hábito.
- Icono para identificar el hábito.

### Tipo de hábito y campos condicionales

- El selector de tipo define qué campos aparecen en el formulario.
- Al cambiar de tipo, se conservan solo los datos compatibles y se limpia lo que no aplica.

#### Tipo: `lastSince`

- Objetivo: mostrar cuántos días pasaron desde la última vez.
- Campos extra: no requiere configuración adicional.

#### Tipo: `streak`

- Objetivo: mantener días consecutivos.
- Campos extra: no requiere configuración adicional.

#### Tipo: `window`

- Objetivo: controlar hábitos con tolerancia de días.
- Campos extra:
	- Días de tolerancia (obligatorio).

#### Tipo: `periodic`

- Objetivo: cumplir un mínimo de registro en dias dentro de un período.
- Campos extra:
	- Período (semanal/mensual/etc.) (obligatorio).
	- Mínimo de días a registrar (obligatorio).
	- Día inicial y dia final dentro del periodo (opcional)

#### Tipo: `none`

- Objetivo: registrar el hábito sin métrica prominente.
- Campos extra: no requiere configuración adicional.

### Acciones

- `Guardar`: persiste cambios y vuelve a la pantalla anterior.
- `Cancelar`: descarta cambios no guardados.
- `Borrar` elimina el habito.

## Detalle de hábito

- Vista secundaria dentro de Configuración de hábitos.
- Muestra resumen del hábito y bloques de configuración editables.
- Centraliza acciones de gestión del hábito para evitar acciones sensibles en el listado.

### Acciones del detalle

- Editar hábito (abre formulario precargado).
- Eliminar hábito (acción sensible con confirmación obligatoria).

## Elementos fijos

- Título de la pantalla.
- Acción visible para crear hábito.
- Listado de hábitos configurados.

## Elementos variables

- Cantidad de hábitos configurados.
- Datos visibles en detalle según tipo de hábito.

## Estados relevantes

- Sin hábitos configurados: estado vacío con explicación corta y CTA principal para crear el primer hábito.
- Lista extensa: mantener legibilidad y acceso rápido a edición sin perder contexto.
- Error de guardado: mensaje claro, mantener cambios locales y ofrecer reintento.
- Eliminación en curso: pedir confirmación explícita desde detalle, mostrando impacto.

## Transiciones

- Al tocar crear: abrir formulario de alta de hábito.
- Al tocar un hábito del listado: abrir `Detalle de hábito`.
- Desde detalle, al tocar editar: abrir formulario con datos precargados.
- Desde detalle, al tocar eliminar: abrir confirmación y, si se acepta, quitar hábito y volver al listado.

## Notas de composición

- La acción de crear hábito debe ser visible sin hacer scroll.
- El listado debe ser limpio y no incluir botones de acciones sensibles por ítem.
- La edición de un hábito debe requerir pocos pasos y mantener foco en campos clave.
- Las acciones destructivas no deben competir visualmente con acciones primarias.
- La pantalla debe priorizar claridad operacional sobre densidad visual.
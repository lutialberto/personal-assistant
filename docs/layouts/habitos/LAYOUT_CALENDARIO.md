# Layout de Calendario

## Objetivo

Definir la estructura visual y de navegación de la pantalla de Calendario, usada para visualizar el historial mensual de hábitos y abrir ediciones por día.

## Tipo de vista

- Vista de navegación temporal.
- Calendario mensual interactivo.
- Pantalla de exploración y edición puntual desde días concretos.

## Relación con otras vistas

- Se abre desde `Hábitos`.
- Se abre desde `Registro diario` cuando el usuario toca la fecha.
- Lleva a `Registro diario` al tocar un día.

## Layout general

- Encabezado superior con mes.
- Controles de navegación para ir al mes anterior o siguiente.
- Grilla central con los días del mes.
- Cada día puede mostrar indicadores pequeños de hábitos realizados en forma de puntos pequeños del color del habito debajo de el numero de cada dia.
- Panel de habitos configurados, debajo de la grilla. Son los seleccionables para resaltar dias de la grilla

## Elementos fijos

- Mes y año activos.
- Controles de navegación de mes.
- Grilla mensual.
- Panel de habitos.

## Elementos variables

- Mes visible.
- Cantidad de días con datos.
- Puntos o marcas por día según hábitos realizados.
- Estado del panel de hábito seleccionado.

## Estados relevantes

- Sin datos del mes: calendario visible sin puntos referenciando habitos.
- Sin hábitos configurados: calendario funcional, pero sin con panel de habitos vacio.
- Filtro activo: los días relevantes quedan resaltados y el resto pierde protagonismo.

## Transiciones

- Al tocar mes anterior o siguiente: cambiar de mes dentro de la misma vista.
- Al tocar un día: abrir `Registro diario` con esa fecha preseleccionada.

## Notas de composición

- El mes activo debe ser el primer dato que se lee.
- El dia actual debe estar levemente destacado.
- La grilla es el cuerpo principal de la pantalla.
- Los indicadores por día deben ser discretos; la vista debe funcionar como mapa rápido, no como detalle completo.
- El resaltado por hábito no debe interferir con la lectura general del mes, solamente debe utilizar el color del habito seleccionado para resaltar cada dia asociado. Temporalmente se esconden los puntos de los demas habitos en cada uno de los dias del mes.
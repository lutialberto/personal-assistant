# Layout de Hábitos principal

## Objetivo

Definir la estructura visual y de navegación de la pantalla principal de Hábitos, que funciona como punto de entrada diario y resumen del estado actual.

## Tipo de vista

- Dashboard operativo con tarjetas de estado.
- Vista principal de tab.
- Pantalla de lectura rápida con acciones de acceso frecuente.

## Relación con otras vistas

- Entrada por defecto de la app.
- Lleva a `Registro diario`.
- Lleva a `Calendario`.
- Lleva a `Configuración de hábitos`.

## Layout general

- Encabezado superior con título.
- Accesos rápidos en la parte superior para las acciones más frecuentes.
- Bloque principal con la lista de hábitos en tarjetas.
- Cada tarjeta muestra la métrica principal del hábito, su estado visual y una acción de acceso al detalle o edición.
- Mostrar agrupaciones visuales por estado: vencidos, vence hoy, próximos, en curso y completados.
- Los hábitos más urgentes aparecen primero.

## Elementos fijos

- Título de la pantalla.
- Accesos rápidos a registro, calendario y configuración.
- Lista de hábitos.

## Elementos variables

- Cantidad de hábitos.
- Estados de urgencia.
- Métrica visible según tipo de hábito.
- Estados vacíos o de carga.

## Estados relevantes

- Sin hábitos configurados: estado vacío con CTA para crear el primer hábito.
- Sin datos para el día: estado neutral, sin alertas.
- Hábitos con urgencia: resaltado visual mayor.

## Transiciones

- Al tocar una tarjeta de hábito: abrir detalle o edición.
- Al tocar registro diario: navegar con fecha actual preseleccionada.
- Al tocar calendario: navegar al mes actual.
- Al tocar configuración: abrir configuración de hábitos dentro del mismo tab.

## Notas de composición

- La pantalla debe leerse de arriba hacia abajo sin obligar a desplazarse para entender el estado general.
- La acción principal no debe competir con el listado de hábitos.
- La tarjeta debe ser el bloque visual base de la vista.
- Intentar que cada habito no ocupe mucho espacio vertical para poder apilar la maxima cantidad posible de habitos visibles sin necesidad de scrollear.
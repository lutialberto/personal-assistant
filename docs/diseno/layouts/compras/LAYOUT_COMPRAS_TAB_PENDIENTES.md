# Layout de Compras — Tab Pendientes

## Objetivo

Definir la estructura del tab para gestionar pendientes manuales y predictivos antes de iniciar una sesión.

## Tipo de vista

- Vista operativa de listado.
- Gestión rápida de pendientes.

## Relación con otras vistas

- Vive dentro de `Compras principal`.
- Alimenta el flujo de `Sesión de compra` al iniciar una nueva.

## Layout general

- Acción superior para agregar pendiente manual (solo nombre).
- Lista de pendientes con agrupación o etiqueta por origen:
  - Manual.
  - Predictivo.
- Acciones por ítem:
  - Marcar/desmarcar pendiente activo.
  - Quitar pendiente de la vista actual.

## Jerarquía de elementos

- Primero: acción de agregar pendiente manual.
- Segundo: lista de pendientes actuales.
- Tercero: acciones por ítem.

## Elementos fijos

- Botón de agregar pendiente manual.
- Estructura de lista con indicador de origen.

## Elementos variables

- Cantidad de pendientes.
- Tipo de origen por pendiente.
- Estado del pendiente (activo o descartado para la sesión actual).

## Estados relevantes

- Sin pendientes: estado vacío con CTA para agregar pendiente manual.
- Con pendientes mixtos: diferencia visual inmediata entre manual y predictivo.

## Transiciones

- Al agregar pendiente manual: insertar ítem en la lista actual.
- Al desmarcar o quitar pendiente: removerlo de sugerencias de la sesión actual.
- Al iniciar nueva sesión desde franja superior: ofrecer selección de pendientes a incluir.

## Notas de composición

- Debe poder gestionarse con pocos toques.
- El origen del pendiente debe leerse sin abrir detalle.
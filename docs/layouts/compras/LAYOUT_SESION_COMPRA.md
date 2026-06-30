# Layout de Sesión de compra

## Objetivo

Definir la estructura visual y de interacción de la vista donde se ejecuta una compra activa con checklist de ítems y acciones de cierre.

## Tipo de vista

- Vista operativa de ejecución en tiempo real.
- Pantalla de checklist con edición rápida.
- Flujo con cierre explícito de sesión.

## Relación con otras vistas

- Se abre desde `Compras principal` al iniciar sesión nueva.
- Se abre desde `Compras principal` al continuar sesión activa.
- Puede consumir ítems desde `Configuración de compras` (plantillas y frecuencias ya definidas).
- Al finalizar, vuelve a `Compras principal` con estado actualizado.

## Layout general

- Encabezado con nombre de sesión, fecha y estado (activa/finalizada).
- Bloque principal con lista de ítems de la sesión:
  - Checkbox comprado/no comprado por ítem.
  - Estado visual claro para completados.
- Bloque de acciones para agregar ítems:
  - Agregar ítem nuevo solo para esta sesión.
  - Agregar ítems desde plantillas.
  - Agregar ítems desde pendientes.
- Bloque de sugerencias:
  - Sugerencias por frecuencia configurada.
  - Sugerencias por historial (cuando aplique).
- Acción de cierre al final de la vista: finalizar sesión.

## Jerarquía de elementos

- Primero: lista de ítems de la sesión (núcleo operativo).
- Segundo: acciones para sumar ítems faltantes.
- Tercero: sugerencias como apoyo, sin bloquear el flujo principal.
- Cuarto: acción de finalizar sesión, separada de acciones de edición.

## Elementos fijos

- Encabezado de sesión (nombre/fecha/estado).
- Lista base de ítems de sesión.
- Acciones de agregado de ítems.
- Acción de finalizar sesión.

## Elementos variables

- Cantidad de ítems de la sesión.
- Estado de compra por ítem (comprado/no comprado).
- Disponibilidad de sugerencias.
- Estado de la sesión (activa/finalizada).

## Estados relevantes

- Sesión vacía: mostrar CTA para agregar ítems desde plantillas, pendientes o manual.
- Sesión activa con ítems: habilitar marcado/desmarcado y agregado de nuevos ítems.
- Sesión finalizada: modo lectura, sin edición ni agregado.
- Error al guardar cambios: informar causa y ofrecer reintento sin perder estado local.

## Transiciones

- Al marcar/desmarcar ítem: persistir estado del ítem en la sesión activa.
- Al agregar ítem manual: insertar en la lista actual sin modificar plantillas.
- Al agregar desde plantillas o pendientes: incorporar selección a la sesión actual.
- Al finalizar sesión: pedir confirmación y volver a `Compras principal`.

## Notas de composición

- La interacción primaria debe ser el checkbox de cada ítem.
- La lectura de qué falta comprar debe ser inmediata, incluso con listas largas.
- Finalizar sesión debe verse como acción irreversible del flujo actual.
- La vista debe permitir operar con una mano y pocos toques durante la compra.
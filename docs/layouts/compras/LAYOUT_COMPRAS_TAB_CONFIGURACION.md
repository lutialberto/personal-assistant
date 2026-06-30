# Layout de Compras — Tab Configuración

## Objetivo

Definir la estructura del tab para manejar plantillas de compra y sus ítems asociados.

## Tipo de vista

- Vista de mantenimiento del módulo Compras.
- Gestión CRUD de plantillas e ítems.

## Relación con otras vistas

- Vive dentro de `Compras principal`.
- Sus plantillas se usan luego en `Sesión de compra`.

## Layout general

- Lista de plantillas existentes.
- Acción principal para crear nueva plantilla.
- Por cada plantilla:
  - Editar nombre.
  - Eliminar plantilla (confirmación obligatoria).
  - Abrir detalle de plantilla.
- En detalle de plantilla:
  - Lista de ítems.
  - Agregar ítem (nombre obligatorio, frecuencia opcional).
  - Editar ítem (nombre y frecuencia opcional).
  - Eliminar ítem.

## Jerarquía de elementos

- Primero: listado de plantillas.
- Segundo: acción de crear plantilla.
- Tercero: acciones por plantilla e ítem.

## Elementos fijos

- Estructura de listado de plantillas.
- Acción visible de crear plantilla.

## Elementos variables

- Cantidad de plantillas.
- Cantidad de ítems por plantilla.
- Estado de cada plantilla (vacía o con ítems).
- Datos por ítem: nombre y frecuencia (si fue definida).

## Estados relevantes

- Sin plantillas: estado vacío con CTA para crear la primera.
- Plantilla sin ítems: estado vacío en detalle con CTA para agregar ítem.
- Error de guardado: mantener cambios locales y permitir reintento.

## Transiciones

- Al crear plantilla: agregar al listado y permitir abrir su detalle.
- Al editar nombre: actualizar en lista sin salir del tab.
- Al eliminar plantilla: confirmar y quitar del listado.
- Al abrir detalle: mostrar ítems de esa plantilla.
- Al agregar o editar ítem: validar nombre, permitir frecuencia opcional y persistir cambios en la plantilla abierta.
- Al eliminar ítem: quitar de la plantilla abierta.

## Notas de composición

- Este tab es de mantenimiento; no debe competir con la acción principal de compra.
- Las acciones destructivas deben estar separadas de las acciones de edición.
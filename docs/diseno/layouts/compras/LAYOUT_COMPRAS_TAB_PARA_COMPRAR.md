# Layout de Compras — Tab Para comprar

## Objetivo

Definir la estructura del tab orientado a decidir si conviene iniciar una sesión de compra ahora, usando recordatorios por horizonte temporal.

## Tipo de vista

- Vista de decisión.
- Resumen accionable de contexto de compra.

## Relación con otras vistas

- Vive dentro de `Compras principal`.
- Se apoya en la franja de sesión para iniciar o continuar compra.
- Puede derivar a `Sesión de compra` al iniciar nueva sesión.

## Layout general

- Bloque de resumen por horizonte temporal:
  - `Toca hoy`.
  - `Se puede comprar para mañana`.
  - `Se puede comprar esta semana`.
- Lista corta de ítems sugeridos priorizados por urgencia.
- CTA secundaria para iniciar sesión cuando no hay sesión activa.

## Jerarquía de elementos

- Primero: señales de urgencia (`hoy` > `mañana` > `semana`).
- Segundo: ítems sugeridos concretos para tomar decisión.
- Tercero: CTA de inicio de sesión.

## Elementos fijos

- Encabezado del tab.
- Estructura de los tres horizontes temporales.

## Elementos variables

- Cantidad de ítems por horizonte.
- Contenido de ítems sugeridos.
- Estado del CTA según exista sesión activa o no.

## Estados relevantes

- Sin recordatorios: estado neutral sin alertas.
- Con recordatorios: destacar el bloque más urgente.
- Sin sesión activa: CTA de iniciar sesión visible.
- Con sesión activa: CTA secundario pierde protagonismo frente a la franja fija superior.

## Transiciones

- Al tocar iniciar sesión: abrir flujo de creación y selección opcional de pendientes.
- Al tocar ítem sugerido: puede marcarse para inclusión en próxima sesión.

## Notas de composición

- Este tab debe responder en segundos si conviene comprar ahora.
- Evitar detalle excesivo para no competir con la vista de sesión.
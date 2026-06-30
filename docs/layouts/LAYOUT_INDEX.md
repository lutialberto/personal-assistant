# Índice de layouts por pantalla

Este índice organiza la documentación de layout por pantalla o por grupos de pantallas que se usan juntas. El objetivo es evitar que un solo documento crezca demasiado y mezcle decisiones de distinta granularidad.

## Regla de división

- Un documento cubre una pantalla cuando esa pantalla tiene una estructura propia y puede entenderse sola.
- Un documento cubre un grupo de pantallas cuando comparten navegación, jerarquía y componentes base de forma estable.
- Si una pantalla tiene variantes fuertes por estado o subflujo, se documenta aparte.

## Propuesta de documentos

### Hábitos
- `habitos/LAYOUT_HABITOS_PRINCIPAL.md`
- `habitos/LAYOUT_REGISTRO_DIARIO.md`
- `habitos/LAYOUT_CALENDARIO.md`
- `habitos/LAYOUT_CONFIG_HABITOS.md`

### Compras
- `compras/LAYOUT_COMPRAS_PRINCIPAL.md`
- `compras/LAYOUT_COMPRAS_TAB_PARA_COMPRAR.md`
- `compras/LAYOUT_COMPRAS_TAB_PENDIENTES.md`
- `compras/LAYOUT_COMPRAS_TAB_CONFIGURACION.md`
- `compras/LAYOUT_SESION_COMPRA.md`

### Finanzas
- `finanzas/LAYOUT_FINANZAS_PRINCIPAL.md`
- `finanzas/LAYOUT_FINANZAS_HISTORIAL.md`
- `finanzas/LAYOUT_FINANZAS_CONFIGURACION.md`

### Otras pantallas
- `global/LAYOUT_CONFIGURACION.md`

## Orden de trabajo sugerido

1. Hábitos principal.
2. Registro diario.
3. Calendario.
4. Configuración de hábitos.
5. Compras principal (contenedor con top tabs).
6. Tabs de Compras: Para comprar, Pendientes y Configuración.
7. Sesión de compra.
8. Finanzas.
9. Configuración global.

## Estructura sugerida para cada documento

- Tipo de vista.
- Objetivo.
- Layout general.
- Jerarquía de elementos.
- Elementos fijos y variables.
- Estados relevantes.
- Transiciones de entrada y salida.
- Relación con otras vistas.

## Estado actual

- Completados en `habitos/`: `LAYOUT_HABITOS_PRINCIPAL.md`, `LAYOUT_REGISTRO_DIARIO.md`, `LAYOUT_CALENDARIO.md` y `LAYOUT_CONFIG_HABITOS.md`.
- Completados en `compras/`: `LAYOUT_COMPRAS_PRINCIPAL.md`, `LAYOUT_COMPRAS_TAB_PARA_COMPRAR.md`, `LAYOUT_COMPRAS_TAB_PENDIENTES.md`, `LAYOUT_COMPRAS_TAB_CONFIGURACION.md` y `LAYOUT_SESION_COMPRA.md`.
- Completados en `finanzas/`: `LAYOUT_FINANZAS_PRINCIPAL.md`, `LAYOUT_FINANZAS_HISTORIAL.md` y `LAYOUT_FINANZAS_CONFIGURACION.md`.
- Completado en `global/`: `LAYOUT_CONFIGURACION.md`.
- Este índice sirve como mapa de navegación y corte de alcance.
# Estado vivo

## Objetivo
Mantener el contexto actual del trabajo para que el siguiente chat no tenga que reconstruirlo desde cero.

## Estado actual

- Etapa 2 — Arquitectura. Etapa 1 cerrada.
- Se agregó checklist UX mínima de cierre para completar definición antes de pasar a arquitectura.
- Se empezó a definir la base global de diseño/UI para la futura Etapa 2.
- Se creó la guía concreta de diseño/UI en `docs/DESIGN.md`.
- Se definieron tokens iniciales de color, texto, botones y espacios.
- Se empezó la documentación de layouts por pantalla en `docs/layouts/LAYOUT_INDEX.md` y `docs/layouts/habitos/LAYOUT_HABITOS_PRINCIPAL.md`.
- Se agregó `docs/layouts/habitos/LAYOUT_REGISTRO_DIARIO.md`.
- Se agregó `docs/layouts/habitos/LAYOUT_CALENDARIO.md`.
- Se agregó `docs/layouts/habitos/LAYOUT_CONFIG_HABITOS.md`.
- Se agregó `docs/layouts/compras/LAYOUT_COMPRAS_PRINCIPAL.md`.
- Se agregó `docs/layouts/compras/LAYOUT_SESION_COMPRA.md`.
- Se ajustó `docs/layouts/compras/LAYOUT_COMPRAS_PRINCIPAL.md` a arquitectura con franja fija de sesión + top tabs (`Para comprar`, `Pendientes`, `Configuración`).
- Se desglosó cada top tab de Compras en archivos propios:
	- `docs/layouts/compras/LAYOUT_COMPRAS_TAB_PARA_COMPRAR.md`
	- `docs/layouts/compras/LAYOUT_COMPRAS_TAB_PENDIENTES.md`
	- `docs/layouts/compras/LAYOUT_COMPRAS_TAB_CONFIGURACION.md`
- Se reorganizó `docs/layouts/` en subcarpetas por dominio (`habitos/`, `compras/`, `global/`, `finanzas/`).
- Se replantó Finanzas como módulo de plan de retiro (no contabilidad general).
- Se cerró el modelo conceptual en `docs/FINANZAS_MODELO_V2.md` (glosario de variables, fórmulas, entidades, reglas).
- Se definió la navegación del módulo: 3 vistas (Principal, Historial, Configuración del plan).
- Se completaron los 3 layouts de Finanzas en `docs/layouts/finanzas/`.
- Se actualizaron `docs/VIEWS.md` y `docs/DEFINITION.md` para reflejar el nuevo modelo.
- Entregables de Etapa 1 completados:
	- `docs/DEFINITION.md`
	- `docs/TASKS.md`
	- `docs/PRIORITY.md`
	- `docs/VIEWS.md`
- Se alinearon definiciones entre vistas, tareas y prioridad (estructura por tabs, configuración por tab, backup/restauración y nomenclatura).

## Próximo paso
- Iniciar Etapa 2: elegir stack, definir estructura de `/src` y comandos de ambiente.

## Regla de uso
- Si cambia lo que se está haciendo, actualizar este archivo primero.
- Si se empieza una tarea nueva, dejar aquí el resumen corto del punto de partida.

## Última actualización
2026-06-30
# Layout de Compras principal

## Objetivo

Definir la estructura visual y de interacción de la pantalla principal del tab Compras usando una arquitectura mixta: estado de sesión siempre visible y navegación interna por top tabs.

## Tipo de vista

- Dashboard operativo del módulo Compras.
- Pantalla con franja fija de sesión en la parte superior.
- Vista de contexto por top tabs para separar decisión, pendientes y configuración de plantillas.

## Relación con otras vistas

- Es la vista principal del tab `Compras`.
- Navega a `Sesión de compra` al iniciar una sesión nueva.
- Navega a `Sesión de compra` al continuar una sesión activa.
- Incluye tab de configuración orientado a manejo de plantillas.

## Layout general

- Encabezado superior con título de la vista.
- Franja fija de sesión justo debajo del encabezado:
  - Si hay sesión activa: CTA principal `Continuar sesión` + resumen breve de estado.
  - Si no hay sesión activa: CTA principal `Iniciar sesión nueva`.
- Área de contenido con top tabs:
  - Tab `Para comprar`.
  - Tab `Pendientes`.
  - Tab `Configuración`.

## Layouts por top tab

- `Para comprar`: ver `docs/layouts/compras/LAYOUT_COMPRAS_TAB_PARA_COMPRAR.md`.
- `Pendientes`: ver `docs/layouts/compras/LAYOUT_COMPRAS_TAB_PENDIENTES.md`.
- `Configuración`: ver `docs/layouts/compras/LAYOUT_COMPRAS_TAB_CONFIGURACION.md`.

## Jerarquía de elementos

- Primero: franja de sesión, siempre visible y con mayor peso visual.
- Segundo: tab activo como contexto de trabajo actual.
- Tercero: acciones secundarias dentro de cada tab.

## Elementos fijos

- Título de la pantalla.
- Franja de sesión en la parte superior.
- Estructura de top tabs (`Para comprar`, `Pendientes`, `Configuración`).

## Elementos variables

- Presencia o ausencia de sesión activa.
- Tab activo.
- Cantidad y contenido de pendientes.
- Segmentación de recordatorios según datos disponibles.
- Estado de cada pendiente (manual o predictivo).
- Cantidad de plantillas y cantidad de ítems por plantilla.

## Estados relevantes

- Sin sesión activa: franja superior con CTA `Iniciar sesión nueva` y foco en tab `Para comprar`.
- Con sesión activa: franja superior con CTA `Continuar sesión` y progreso de la sesión.
- Sin pendientes: tab `Pendientes` con estado vacío y CTA para cargar pendientes manuales.
- Sin recordatorios: tab `Para comprar` con estado neutral sin alertas.
- Sin plantillas: tab `Configuración` con estado vacío y CTA para crear la primera plantilla.

## Transiciones

- Al tocar `Iniciar sesión nueva`: abrir flujo de creación de sesión y preguntar si se agregan pendientes (todos o selección parcial).
- Al tocar `Continuar sesión`: abrir `Sesión de compra` activa.
- Al cambiar top tab: mantener franja de sesión fija y actualizar solo el contenido inferior.
- Al marcar o desmarcar pendiente en tab `Pendientes`: actualizar estado local sin salir del tab.
- En tab `Configuración`, al tocar crear plantilla: abrir formulario simple de alta.
- En tab `Configuración`, al tocar una plantilla: abrir su detalle para gestionar ítems.
- En detalle de plantilla, al tocar agregar ítem: insertar nuevo ítem en esa plantilla.

## Notas de composición

- La franja de sesión debe quedar visible y tener máximo contraste visual.
- La diferencia visual entre pendiente manual y predictivo debe ser inmediata.
- El módulo debe poder usarse en pocos toques para continuar o iniciar una compra real.
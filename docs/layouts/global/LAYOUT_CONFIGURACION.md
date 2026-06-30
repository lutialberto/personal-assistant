# Layout de Configuración global

## Objetivo

Centralizar configuraciones globales que afectan a toda la app: preferencias generales, backup/restauración con Drive e información de la app.

## Tipo de vista

- Pantalla principal del tab `Configuración`.
- Vista única, sin sub-navegación interna.

## Relación con otras vistas

- Accesible desde el bottom tab bar.
- No navega a otras vistas.

## Layout general

- Encabezado con título del tab.
- Lista de secciones agrupadas, con separadores visuales entre cada una.
- Scroll vertical si el contenido excede la pantalla.

## Secciones

### 1) Preferencias

Configuraciones generales de uso y visualización.

- Parámetros visuales globales (ej: moneda de visualización preferida, tema).
- Preferencias generales de comportamiento de la app no ligadas a un módulo puntual.

> El detalle de estos parámetros se define en la etapa de arquitectura, una vez elegido el stack.

### 2) Datos

Todo lo relacionado con backup y restauración a través de Drive.

**Estado de conexión con Drive:**
- Indicador de cuenta de Drive vinculada (conectada / no conectada).
- Acción para conectar o reconectar cuenta.

**Backup:**
- Fila de estado del último backup: fecha/hora y resultado (éxito / error).
- Botón `Exportar backup ahora` para ejecutar backup manual.
- Toggle de backup automático (activo / inactivo).

**Restauración:**
- Botón `Restaurar desde Drive`: abre flujo de restauración.
  - Paso 1: lista de archivos de backup disponibles en Drive (con fecha y versión).
  - Paso 2: elegir tipo de restauración (total o parcial). En parcial, el usuario selecciona qué módulos restaurar.
  - Paso 3: confirmación explícita antes de aplicar.
  - Resultado: pantalla de resumen con lo que se restauró o el error ocurrido.

**Mantenimiento:**
- Opciones globales de mantenimiento de datos (ej: limpiar datos, resetear configuración). Requieren confirmación explícita.

### 3) App

- Versión de la app.
- Parámetros globales de comportamiento no cubiertos en Preferencias.

## Elementos fijos

- Encabezado con título.
- Estructura de secciones con separadores.

## Elementos variables

- Estado de conexión con Drive.
- Fecha/hora y resultado del último backup.
- Estado del toggle de backup automático.

## Estados relevantes

- **Drive no conectado**: en la sección Datos, indicador de "no conectado" + CTA para vincular. Botones de backup y restauración deshabilitados hasta conectar.
- **Backup en progreso**: botón `Exportar backup ahora` deshabilitado con indicador de carga.
- **Error de backup**: fila de último backup muestra el error con opción de reintentar.
- **Operación sensible** (restaurar total, limpiar datos, resetear): siempre requiere confirmación explícita antes de ejecutar.
- **Error de restauración**: pantalla de resultado informa la causa y permite reintentar.

## Transiciones

- Todas las acciones de backup y restauración se ejecutan dentro de esta pantalla (sin navegar a pantallas separadas), excepto el flujo de restauración que usa pasos modales o pantallas intermedias.
- Al finalizar una restauración, volver a esta pantalla con el estado actualizado.

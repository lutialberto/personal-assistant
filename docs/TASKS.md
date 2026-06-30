# Desglose de tareas por funcionalidad

Cada tarea representa una unidad de trabajo implementable. La prioridad y el orden de ejecución se definen en `PRIORITY.md`.

---

## Módulo 1 — Tracker de hábitos

### Configuración de hábitos
- T01 · Crear hábito (código, nombre, color, icono, tipo)
- T02 · Editar hábito
- T03 · Eliminar hábito
- T03.1 · Vista de configuración de hábitos dentro del tab de hábitos

Los tipos de hábito son fijos (hardcodeados). Cada tipo determina qué métrica se muestra y cómo se evalúa el cumplimiento:

| Tipo | Configuración adicional | Métrica en vista principal de hábitos |
|---|---|---|
| `lastSince` | — | Días desde la última vez que se hizo |
| `streak` | — | Días consecutivos haciéndolo |
| `window` | Días de tolerancia | "Faltan X días" → "Falta 1 día" → "Vence hoy" → "Vencido hace X días" |
| `periodic` | Período (semanal/mensual/etc.), mínimo de días, deadline opcional dentro del período | Progreso (ej: 2/3 días) + estados de urgencia cuando el deadline se acerca + "Completado" cuando se alcanza el mínimo antes de que cierre |
| `none` | — | Sin métrica prominente |

### Registro diario
- T10 · Marcar hábitos del día actual (checklist rápido)
- T11 · Cargar o editar hábitos de un día pasado
- T11.1 · La vista de hábitos debe mostrar una lista de todos los hábitos configurados, pero marcar claramente cuáles fueron los que se hicieron ese día. No se pueden marcar hábitos que no estén configurados, pero sí se pueden dejar sin marcar los que sí lo están. Se debe poder confirmar o cancelar la operación de registro para evitar cambios accidentales. Ademas se debe mostrar el día. En caso de no tener un dia seleccionado y se abre la vista, se usa el dia actual. En caso de presionar el campo de dia, se navega a la vista de calendario.

### Métricas y vista principal de hábitos
- T12 · Calcular métrica según tipo de hábito (`lastSince`, `streak`, `window`, `periodic`)
- T13 · Renderizar tarjeta de hábito en vista principal de hábitos según su tipo
- T14 · Alerta visual cuando un hábito está próximo a vencer o vencido (tipos `window` y `periodic`)
- T15 · Ordenar hábitos en la vista principal de hábitos por urgencia (vencidos → vence hoy → próximos a vencer → en curso → completados)

---

## Módulo 2 — Calendario

- T18 · Vista mensual del calendario
- T19 · Marcar días con pequeños puntos de colores según hábitos realizados (overlay visual)
- T20 · Resaltar días del calendario por hábito específico desde panel de hábitos. Cuando se presiona desde el panel un hábito, se resaltan los días con dicho color del hábito.
- T21 · Navegar entre meses hacia atras y adelante.
- T22 · Abrir registro de un día pasado desde el calendario. Cuando se presiona un día, se navega hacia la vista de hábitos con el día elegido.

---

## Módulo 3 — Listas de compras

### Plantillas
- T23 · Crear plantilla de lista (nombre) desde configuración de compras
- T24 · Editar nombre de plantilla desde configuración de compras
- T25 · Eliminar plantilla desde configuración de compras
- T26 · Agregar ítem a plantilla (nombre, frecuencia de uso) desde configuración de compras
- T27 · Editar frecuencia de ítem de plantilla desde configuración de compras
- T28 · Eliminar ítem de plantilla desde configuración de compras
- T28.4 · Vista de configuración de compras dentro del tab de compras

### Pendientes manuales
- T28.1 · Marcar ítem como pendiente manualmente
- T28.2 · Quitar ítem de pendientes manuales
- T28.3 · Listar pendientes manuales en pantalla principal de compras

### Sesión de compra
- T29 · Iniciar sesión nueva de compra (nombre, fecha)
- T30 · Instanciar sesión vacía
- T31 · Agregar ítem "nuevo" a la sesión activa
- T32 · Agregar ítems desde plantilla a la sesión activa
- T32.1 · Al iniciar sesión nueva, preguntar si se desean agregar pendientes (todos o selección)
- T32.2 · Agregar pendientes seleccionados a la sesión activa
- T33 · Marcar/desmarcar ítem como comprado durante la sesión
- T34 · Cerrar / finalizar sesión
- T34.1 · Acceso rápido para continuar sesión actual desde pantalla principal de compras

### Sugerencias de reposición
- T35 · Configurar frecuencia de uso por ítem (ej: "1 unidad por semana")
- T36 · Calcular fecha estimada de agotamiento según frecuencia configurada
- T37 · Calcular fecha estimada según historial de compras del ítem
- T38 · Mostrar sugerencias de reposición al instanciar una nueva sesión
- T39 · Mostrar sugerencias de reposición en pantalla principal de compras segmentadas por: esta semana, para mañana, toca hoy

---

## Módulo 4 — Finanzas

### Cuentas e inversiones
- T40 · Crear cuenta / vehículo de inversión (nombre, tipo, moneda)
- T41 · Editar cuenta
- T42 · Eliminar cuenta

### Movimientos
- T43 · Registrar movimiento (depósito, retiro, rendimiento, transferencia)
- T44 · Editar movimiento
- T45 · Eliminar movimiento

### Visualización
- T46 · Gráfico de evolución de una cuenta a lo largo del tiempo
- T47 · Gráfico de distribución del capital entre cuentas
- T48 · Resumen general del capital actual

### Simulador
- T49 · Ingresar parámetros: capital inicial, tasa, plazo, tipo de capitalización
- T50 · Proyectar resultado final y evolución mensual
- T51 · Comparar dos o más escenarios en simultáneo

---

## Transversal

### Persistencia
- T51 · Definir modelo de datos (estructura de storage local)
- T52 · Implementar lectura / escritura en storage local
- T53 · Backup a Drive: exportar datos (siempre total)
- T54 · Backup a Drive: importar / restaurar datos
- T53.2 · Exportar backup con timestamp y versión de esquema
- T53.3 · Guardar metadata de backup local (fecha/hora, resultado)
- T53.4 · Mostrar estado de último backup e historial simple
- T53.6 · Ejecutar backup automático total según configuración
- T54.2 · Validar integridad y compatibilidad de versión antes de restaurar
- T54.3 · Restaurar en modo reemplazo total de datos locales
- T54.6 · Restaurar en modo parcial por secciones independientes
- T54.7 · Selector de secciones a restaurar en modo parcial
- T54.4 · Confirmación obligatoria previa a restauración
- T54.5 · Manejo de errores de backup/restauración (conexión, permisos, archivo inválido, incompatibilidad)

### Notificaciones
- T55 · Alerta: hábito no registrado en el día
- T56 · Alerta: ítem próximo a agotarse
- T57 · Definir e implementar mecanismo de entrega de notificaciones (depende del tipo de app — ver arquitectura)

### Navegación y configuración
- T58 · Estructura de navegación entre vistas
- T59 · Vista de configuración general global (preferencias transversales, datos y mantenimiento)

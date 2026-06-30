# Orden y prioridad de tareas

Este documento define el orden recomendado de implementación para el MVP.

Criterios usados:
- Dependencias funcionales (qué desbloquea a qué).
- Valor temprano para uso real.
- Reducción de riesgo técnico antes de módulos complejos.

---

## Bloque 1 — Base de hábitos (prioridad alta)

Objetivo: lograr uso diario real desde temprano.

1. T01 · Crear hábito
2. T02 · Editar hábito
3. T03 · Eliminar hábito
4. T03.1 · Vista de configuración de hábitos dentro del tab de hábitos
5. T10 · Marcar hábitos del día actual
6. T11 · Cargar o editar hábitos de un día pasado
7. T11.1 · Reglas de vista de hábitos por día y confirmación/cancelación
8. T12 · Calcular métrica según tipo de hábito
9. T13 · Renderizar tarjeta de hábito en vista principal de hábitos según su tipo
10. T14 · Alerta visual de vencimiento/proximidad
11. T15 · Ordenar hábitos por urgencia

Resultado esperado del bloque:
- Se puede configurar hábitos, registrar días y ver métricas útiles en la vista principal de hábitos.

---

## Bloque 2 — Calendario de hábitos (prioridad alta)

Objetivo: editar historial y visualizar consistencia temporal.

1. T18 · Vista mensual del calendario
2. T21 · Navegar entre meses
3. T19 · Marcar días con puntos de colores según hábitos
4. T22 · Abrir registro de un día desde calendario
5. T20 · Resaltar días por hábito seleccionado

Resultado esperado del bloque:
- Se puede navegar el historial y operar registro diario desde calendario.

---

## Bloque 3 — Listas de compras (prioridad media)

Objetivo: cubrir flujo completo de compra con reutilización.

1. T28.4 · Vista de configuración de compras dentro del tab de compras
2. T23 · Crear plantilla (desde configuración de compras)
3. T24 · Editar plantilla (desde configuración de compras)
4. T25 · Eliminar plantilla (desde configuración de compras)
5. T26 · Agregar ítem a plantilla (desde configuración de compras)
6. T27 · Editar frecuencia de ítem (desde configuración de compras)
7. T28 · Eliminar ítem de plantilla (desde configuración de compras)
8. T28.1 · Marcar ítem como pendiente manualmente
9. T28.2 · Quitar ítem de pendientes manuales
10. T28.3 · Listar pendientes manuales en pantalla principal de compras
11. T29 · Iniciar sesión nueva de compra
12. T34.1 · Acceso rápido para continuar sesión actual
13. T30 · Instanciar sesión vacía
14. T31 · Agregar ítem nuevo a sesión activa
15. T32 · Agregar ítems desde plantilla a sesión activa
16. T32.1 · Preguntar si se desean agregar pendientes (todos o selección)
17. T32.2 · Agregar pendientes seleccionados a la sesión activa
18. T33 · Marcar/desmarcar ítem comprado
19. T34 · Cerrar/finalizar sesión
20. T35 · Configurar frecuencia de uso por ítem
21. T36 · Calcular agotamiento estimado por frecuencia
22. T37 · Calcular agotamiento estimado por historial
23. T38 · Mostrar sugerencias al instanciar sesión
24. T39 · Mostrar sugerencias en pantalla principal segmentadas por: esta semana, para mañana, toca hoy

Resultado esperado del bloque:
- Flujo de compra completo con configuración propia del tab, pendientes manuales y sugerencias segmentadas por horizonte temporal.

---

## Bloque 4 — Finanzas (prioridad media-baja)

Objetivo: seguimiento macro y proyecciones.

1. T40 · Crear cuenta/vehículo
2. T41 · Editar cuenta
3. T42 · Eliminar cuenta
4. T43 · Registrar movimiento
5. T44 · Editar movimiento
6. T45 · Eliminar movimiento
7. T48 · Resumen general del capital
8. T46 · Gráfico de evolución
9. T47 · Gráfico de distribución
10. T49 · Parámetros de simulación
11. T50 · Proyección mensual y resultado final
12. T51 · Comparar escenarios

Resultado esperado del bloque:
- Estado actual del capital, evolución y simulaciones comparables.

---

## Bloque 5 — Transversal (prioridad según arquitectura)

Objetivo: consolidar base técnica y experiencia de uso.

1. T51 (Transversal) · Definir modelo de datos de storage local
2. T52 · Implementar lectura/escritura en storage local
3. T58 · Definir estructura de navegación
4. T59 · Vista de configuración general global
5. T53 · Backup a Drive (exportar)
6. T54 · Backup a Drive (importar/restaurar)
7. T57 · Definir e implementar mecanismo de notificaciones
8. T55 · Alerta de hábito no registrado
9. T56 · Alerta de ítem próximo a agotarse

Notas:
- La numeración T51 está repetida en `docs/definicion/TASKS.md` (Finanzas y Transversal). Se conserva tal cual para no romper referencia histórica y debe normalizarse cuando se revise el backlog.
- T57 depende del tipo de app elegido en etapa de arquitectura.

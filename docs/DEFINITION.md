# Definición de la app

## Qué es

Aplicación personal de uso propio que centraliza el seguimiento de hábitos, compras y finanzas en un solo lugar. Reemplaza múltiples apps dispersas con una experiencia integrada.

## Problema que resuelve

La información del día a día (hábitos, listas de compras, inversiones) está fragmentada en distintas apps. Esta app la unifica con una interfaz personalizada y pensada para uso propio.

## Qué no es

- No es multiusuario.
- No tiene backend propio.
- No está pensada para publicarse en tiendas.
- No es un gestor de gastos del día a día (sin registro de transacciones cotidianas).

---

## Módulos

Todos los módulos forman parte del MVP.

### 1. Tracker de hábitos

Registro diario de hábitos. Cada hábito es booleano por día: se hizo o no se hizo.

Cada hábito tiene un **tipo**, que es fijo (hardcodeado en la app) y determina cómo se evalúa y muestra en la vista principal de hábitos:

| Tipo | Descripción | Métrica |
|---|---|---|
| `lastSince` | Cosas que hacés de vez en cuando y querés saber cuánto hace | Días desde la última vez |
| `streak` | Hábitos que querés mantener todos los días | Días consecutivos haciéndolo |
| `window` | Hábitos con tolerancia — si no lo hacés en X días, es un problema | "Faltan X días" → "Falta 1 día" → "Vence hoy" → "Vencido hace X días" |
| `periodic` | Hábitos que deben ocurrir N veces en un período, con deadline opcional (ej: pagar alquiler antes del día 10 del mes) | Progreso (ej: 2/3 días) + estados de urgencia cuando el deadline se acerca ("Faltan X días", "Vence hoy", etc.) + "Completado" cuando se alcanza el mínimo antes de que cierre |
| `none` | Se registra pero sin métrica prominente | — |

**Features:**
- Registro diario rápido: marcar cuáles hábitos se hicieron hoy.
- Vista principal de hábitos con tarjeta por hábito mostrando su métrica según tipo, ordenadas por urgencia (vencidos → vence hoy → próximos a vencer → en curso → completados).
- Alerta visual cuando un hábito tipo `window` o `periodic` está próximo a vencer.
- Configuración de hábitos dentro del tab de hábitos.

### 2. Calendario

Visualización de hábitos en el tiempo.

**Features:**
- Vista de calendario mensual con días marcados según qué hábitos se hicieron.
- Posibilidad de cargar o editar hábitos de días pasados.
- Filtros por hábito para resaltar días específicos.

### 3. Listas de compras

Sistema de listas reutilizables con sesiones de compra activas.

Vista principal de compras orientada a sesión: iniciar nueva o continuar actual, con recordatorios por horizonte temporal.

**Features:**
- Inicio rápido de compra: iniciar sesión nueva o continuar sesión activa.
- Plantillas de listas pre-armadas con ítems (gestionadas desde configuración propia del tab de compras).
- Instanciar una sesión de compra desde plantillas configuradas (o vacía).
- Chequeo de ítems durante la sesión de compra.
- Agregado de items a la sesión activa, pero sin modificar la plantilla (ej: "me acordé que necesito algo más, lo agrego a esta sesión pero no quiero que quede guardado en la plantilla").
- Sugerencia automática de reposición: cada ítem tiene una frecuencia de uso definida por el usuario (ej: "uso 1 unidad por semana"). La app calcula cuándo es probable que se agote y lo sugiere al instanciar una nueva sesión. También podría calcularse según el historial de compras de dicho ítem.
- Ítem pendiente manual: se puede marcar manualmente que un ítem ya está pendiente.
- Al iniciar sesión nueva, la app pregunta si se quieren agregar pendientes (todos o selección parcial).
- Recordatorios en vista principal: se puede comprar esta semana, se puede comprar para mañana, toca hoy.
- Configuración de compras dentro del tab de compras (plantillas, ítems, frecuencias y pendientes).

### 4. Finanzas

Seguimiento del plan de retiro personal.

Vista principal con métricas del plan, acceso al historial y a la configuración.

**Features:**
- Dashboard de métricas del plan de retiro: capital actual, FIRE number, porcentaje de avance, aporte mínimo mensual y meses restantes.
- Registro de aportes al portfolio (monto, fecha, tipo de cambio, nota opcional).
- Registro de snapshots del portfolio (valor total en un momento dado, tipo de cambio, nota opcional).
- Historial visual con curva real del portfolio y curva proyectada hasta la fecha de retiro.
- Configuración del plan con parámetros personales, financieros y operativos.
- Modo simulación: explorar el efecto de cambios en los parámetros sin modificar los valores efectivos.

---

## Vistas (pantallas)

| Vista | Contenido |
|---|---|
| Hábitos | Resumen del día, tarjetas de hábitos, alertas, acceso a registro diario y calendario |
| Configuración de hábitos | Alta, edición y deshabilitación de hábitos con sus tipos y parámetros |
| Registro diario | Formulario para marcar hábitos del día (o de un día pasado) |
| Calendario | Vista mensual con overlay de hábitos |
| Compras | Inicio rápido de sesión, pendientes manuales y recordatorios por horizonte temporal |
| Configuración de compras | Gestión de plantillas, ítems, frecuencias y pendientes manuales |
| Sesión de compra | Checklist de la sesión activa, con sugerencias de reposición |
| Finanzas — Principal | Dashboard con métricas del plan de retiro y acciones de registro |
| Finanzas — Historial | Curva real del portfolio y curva proyectada |
| Finanzas — Configuración del plan | Parámetros del plan con modo simulación |
| Configuración | Ajustes globales transversales de la app (preferencias, datos y mantenimiento) |

---

## Notificaciones

La app debe poder alertar al usuario de cosas pendientes (ej: hábito no registrado, ítem por agotarse). El mecanismo de notificación depende del tipo de app (web / mobile / desktop) y se definirá en la etapa de arquitectura.

---

## Backup y restauración (Drive)

- El backup en Drive siempre es total (incluye todos los datos de la app).
- La app debe permitir exportar un backup completo de datos locales a Drive.
- El backup puede ejecutarse manualmente o de forma automática.
- La app debe permitir importar/restaurar un backup desde Drive.
- La restauración puede ser total o parcial.
- En restauración parcial, cada parte es independiente y el usuario elige exactamente qué restaurar.
- Toda restauración debe pedir confirmación explícita antes de aplicar cambios.
- La app debe mostrar estado de último backup (fecha/hora) y resultado de la operación.
- Si falla una operación (conexión, permisos, archivo inválido, incompatibilidad), se debe informar claramente la causa.

---

## Fuera de scope

- Registro de gastos cotidianos.
- Integración con bancos o brokers.
- Sincronización en tiempo real entre dispositivos (el backup a Drive no implica sync en tiempo real).

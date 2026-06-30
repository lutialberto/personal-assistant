# Diseño detallado de vistas

Este documento define qué contiene cada pantalla del MVP, su objetivo, acciones principales, navegación y lineamientos visuales base.

## Convenciones de esta especificación
- Los textos de UI se escriben en español.
- Los nombres internos de módulos/tipos pueden mantenerse en inglés si ya están definidos en otros documentos.
- Se prioriza claridad funcional sobre detalle visual, pero esta etapa sí fija una base visual y de navegación para evitar ambigüedad.

## Navegación principal y base visual

### Navegación principal
- La navegación principal de la app se resuelve con un bottom tab bar.
- El tab por defecto al abrir la app es `Hábitos`.
- Orden de tabs:
  - `Hábitos`
  - `Compras`
  - `Finanzas`
  - `Configuración`
- Cada tab abre en su pantalla principal con datos.
- `Hábitos` agrupa el registro diario, el calendario y su configuración propia.
- `Compras` agrupa la sesión de compra y su configuración propia.
- Las pantallas secundarias se abren dentro del tab correspondiente, sin crear tabs adicionales.

### Lineamientos visuales base
- Interfaz orientada a uso diario, clara y de lectura rápida.
- Jerarquía visual marcada por tarjetas, estados y énfasis en métricas.
- Uso de color por contexto funcional:
  - Urgencia y estado en hábitos.
  - Colores de hábitos en calendario.
  - Estados de compra y confirmación en listas.
  - Resumen y evolución en finanzas.
- Las pantallas deben evitar exceso de densidad visual, pero mantener suficiente información para operar sin entrar en subpantallas innecesarias.
- Las acciones primarias deben ser visibles desde cada vista, y las secundarias quedar agrupadas o al final.

---

## 1) Hábitos

### Objetivo
Dar una vista rápida del estado de hábitos y del día actual.

### Contenido
- Accesos rápidos a registro diario, calendario y configuración.
- Sección de hábitos:
  - Tarjetas pequeñas por hábito agrupados por métrica según tipo (`lastSince`, `streak`, `window`, `periodic`, `none`).
  - Ordenadas por estado visual de urgencia (vencido, vence hoy, próximo, en curso, completado).

### Acciones
- Abrir detalle/edición de hábito desde su tarjeta.
- Navegar al registro diario con fecha actual preseleccionada.
- Navegar al calendario con mes actual.
- Navegar a configuración de hábitos dentro del tab `Hábitos`.

### Estados
- Vacío (sin hábitos configurados): CTA para crear primer hábito.

---

## 2) Registro diario de hábitos

### Objetivo
Registrar rápidamente qué hábitos se realizaron en una fecha específica.

Esta vista vive dentro del tab `Hábitos`.

### Contenido
- Selector de fecha:
  - Si se carga con una fecha explícita, usar día actual.
  - Al presionar fecha, navegar a calendario para elegir día.
- Lista de hábitos configurados:
  - Toggle visual en cada hábito.
  - Indicación clara de qué hábitos están marcados para ese día.
  - Indicación clara de que un hábito estaba originalmente marcado cuando se cargó la vista y ahora se muestra como desmarcado (no se debe ver igual a un hábito que nunca fue marcado).
  - Cuando se ingresa a la vista y ya contiene hábitos marcados, se ordenan al inicio. Luego se mantiene el orden natural de los hábitos.
- Barra de acciones:
  - Confirmar cambios.
  - Cancelar cambios.

### Acciones
- Marcar/desmarcar hábitos para la fecha seleccionada.
- Confirmar guardado para persistir cambios.
- Cancelar para descartar cambios no confirmados.
- Navegar a calendario al presionar la fecha.

### Estados
- Vacío (sin hábitos): mensaje + CTA para crear hábitos en configuración.

---

## 3) Calendario

### Objetivo
Visualizar y editar el historial mensual de hábitos.

Esta vista también vive dentro del tab `Hábitos`.

### Contenido
- Controles de navegación de mes:
  - Mes anterior.
  - Mes siguiente.
- Grilla mensual de días.
- Overlay por día con puntos de colores según hábitos realizados.
- Filtro/resaltado opcional por hábito seleccionado.

### Acciones
- Cambiar de mes.
- Presionar un día para abrir registro diario con esa fecha.
- Activar/desactivar resaltado por hábito.

### Estados
- Sin datos del mes: calendario visible sin puntos.
- Sin hábitos configurados: calendario funcional, sin overlays.

---

## 3.5) Configuración de hábitos

### Objetivo
Agregar, eliminar y/o editar hábitos

Esta vista también vive dentro del tab `Hábitos`.

### Contenido
- Sección de hábitos:
  - Nombre del hábito, color, icono y tipo.


### Acciones
- Crear nuevo hábito. Elige nombre, icono y color.
- Deshabilitar hábito. Deja de ser elegible/editable por el registro diario pero se mantiene visible en el calendario. Desaparece de la vista principal de `Hábitos`.
- Modificar tipo. Configura según la característica asociada para mostrar en la vista principal de hábitos.

### Estados
- Sin hábitos configurados.

---

## 4) Compras

### Objetivo
Dar acceso inmediato a iniciar una sesión nueva o continuar la sesión actual, y mostrar recordatorios de compra por horizonte temporal.

Esta es la pantalla principal del tab `Compras`.

### Contenido
- Bloque principal de sesión:
  - Botón primario para iniciar sesión nueva.
  - Botón destacado para continuar sesión actual (si existe).
- Bloque de pendientes:
  - Lista de ítems marcados como pendientes (diferenciar manual vs predictivo).
  - Resumen de cantidad de pendientes.
  - Acceso a marcar/desmarcar ítems pendientes. En caso de desmarcar, se ignora la sugerencia de inclusión en una sesión y además se quita de la vista principal de compras (solo la sugerencia actual, no la posibilidad de volver a sugerirla para la próxima frecuencia).
- Bloque de recordatorios de compra:
  - Toca hoy.
  - Se puede comprar para mañana.
  - Se puede comprar esta semana.

### Acciones
- Iniciar nueva sesión de compra.
- Entrar a sesión activa.
- Cerrar sesión activa.
- Marcar ítem como pendiente manualmente.
- Quitar ítem de pendientes.
- Al iniciar sesión nueva, preguntar si se desean agregar pendientes (todos o selección parcial). Aquellos agregados, en caso de luego comprarlos, se deben quitar de la lista de pendientes cuando se complete la sesión.

### Estados
- Sin sesión activa: priorizar acción de iniciar sesión nueva.
- Con sesión activa: priorizar acción de continuar sesión.
- Sin pendientes: mostrar CTA para cargar pendientes manuales o definir frecuencias.

---

## 4.5) Configuración de compras

### Objetivo
Configurar plantillas, ítems y frecuencias de compra que alimentan sesiones y recordatorios.

Esta vista vive dentro del tab `Compras`.

### Contenido
- Lista de plantillas de compra.
- Detalle de plantilla con sus ítems.
- Frecuencia de compra por ítem.
- Gestión de pendientes manuales globales.

### Acciones
- Crear, editar y eliminar plantillas.
- Crear, editar y eliminar ítems de plantilla.
- Definir y editar frecuencia de compra por ítem.
- Marcar/desmarcar pendientes manuales globales.

### Estados
- Sin plantillas: CTA para crear la primera plantilla.
- Sin ítems en plantilla: CTA para agregar ítems.

---

## 5) Sesión de compra

### Objetivo
Operar una compra en curso con checklist y sugerencias de reposición.

Esta vista se abre desde la pantalla principal del tab `Compras`.

### Contenido
- Encabezado de sesión:
  - Nombre de sesión.
  - Estado (activa/finalizada).
- Lista de ítems de la sesión:
  - Checkbox comprado/no comprado.
- Acciones de ítems:
  - Agregar ítem nuevo (solo en sesión).
  - Agregar ítems desde plantillas configuradas.
  - Agregar ítems desde pendientes.
- Sección de sugerencias:
  - Ítems sugeridos por frecuencia configurada.
  - Ítems sugeridos por historial (cuando aplique).
- Acción de cierre:
  - Finalizar sesión.

### Acciones
- Marcar/desmarcar ítems durante la compra.
- Agregar ítems ad hoc sin modificar plantillas.
- Agregar pendientes manuales (todos o selección).
- Finalizar sesión y dejar registro histórico.

### Estados
- Vacío (sesión sin ítems): CTA para agregar ítems.
- Finalizada: vista en modo lectura, sin edición.

---

## 6) Finanzas — Principal

### Objetivo
Mostrar el estado actual del plan de retiro y permitir registrar un aporte o snapshot con el mínimo de pasos posible.

Esta es la pantalla principal del tab `Finanzas`.

### Contenido
- Métricas del plan:
  - Capital actual en pesos y USD.
  - Capital objetivo (FIRE number) en pesos y USD.
  - Porcentaje de avance con barra visual.
  - Aporte mínimo mensual necesario.
  - Meses restantes hasta el retiro.
- Botones de registro: `Registrar aporte` y `Registrar snapshot`.
- Acceso secundario al historial.
- Acceso a configuración del plan desde el encabezado.

### Acciones
- Registrar un aporte (monto, fecha, nota opcional; guarda tipo de cambio y parámetros vigentes).
- Registrar un snapshot del portfolio (valor total, fecha, nota opcional; guarda tipo de cambio y parámetros vigentes).
- Navegar al historial.
- Navegar a configuración del plan.

### Estados
- Sin datos: métricas solo con lo calculable desde los parámetros del plan. Barra de progreso en cero.
- Plan sin configurar: bloquear registro y mostrar CTA para completar configuración.
- Con datos: métricas completas y progreso actualizado.

---

## 6.5) Finanzas — Historial

### Objetivo
Visualizar la evolución real del portfolio comparada con la proyección del plan.

Esta vista vive dentro del tab `Finanzas`.

### Contenido
- Gráfico de línea (curva real + curva proyectada):
  - Eje X: tiempo (mes/año).
  - Curva real: puntos por snapshot, unidos por línea.
  - Curva proyectada: línea discontinua desde el último dato hasta la fecha objetivo de retiro.
- Gráfico de barras (aportes):
  - Una barra por cada aporte registrado, alineada al mismo eje temporal.

### Acciones
- Volver a la vista principal.

### Estados
- Sin datos: gráficos vacíos con CTA para registrar desde la vista principal.
- Solo aportes, sin snapshots: gráfico de barras con datos; curva de línea solo con proyección.
- Con snapshots y aportes: vista completa.

---

## 6.7) Finanzas — Configuración del plan

### Objetivo
Ver y editar los parámetros del plan de retiro, con distinción explícita entre simular y guardar efectivo.

Esta vista vive dentro del tab `Finanzas`.

### Contenido
- Parámetros personales: año de nacimiento, edad objetivo de retiro, mes objetivo de retiro.
- Parámetros financieros: retorno anual real esperado, multiplicador de gasto al retiro, tasa de retiro sostenible.
- Parámetros operativos: gasto mensual actual, tipo de cambio de referencia.
- Indicador de modo activo (efectivo / simulación).
- Bloque de preview de métricas (solo visible en modo simulación).

### Acciones
- Editar y guardar parámetros en modo efectivo.
- Activar modo simulación para explorar cambios sin guardar.
- Aplicar los parámetros simulados como efectivos.
- Cancelar simulación y restaurar valores efectivos.

### Estados
- Modo efectivo sin cambios: `Guardar` deshabilitado.
- Modo efectivo con cambios: `Guardar` habilitado.
- Modo simulación activo: indicador en encabezado + bloque de preview visible.

---

## 7) Configuración

### Objetivo
Centralizar configuraciones globales que afectan a toda la app (no configuraciones de tabs específicos).

Esta vista vive dentro del tab `Configuración`.

### Contenido
- Sección de perfil/preferencias:
  - Preferencias generales de uso.
  - Parámetros visuales globales.
- Sección de datos:
  - Exportar backup a Drive.
  - Importar/restaurar backup desde Drive.
  - Último backup: fecha/hora y resultado.
  - Historial simple de backups recientes.
  - Opciones globales de mantenimiento de datos.
- Sección de app:
  - Información de versión.
  - Parámetros globales de comportamiento (no ligados a un tab puntual).

### Flujo de backup con Drive
- Exportar backup:
  - Siempre exporta un backup total (todos los datos de la app).
  - Puede ejecutarse manualmente bajo demanda o automáticamente.
  - Genera un archivo de backup con timestamp y versión de esquema.
  - Sube archivo a carpeta de la app en Drive.
- Importar/restaurar backup:
  - Permite elegir archivo de backup desde Drive.
  - Valida compatibilidad mínima de versión antes de restaurar.
  - Permite restauración total o parcial.
  - En restauración parcial, cada parte es independiente y seleccionable por el usuario.
  - Requiere confirmación explícita antes de aplicar.
  - Al finalizar, informa resultado y datos restaurados.
- Errores contemplados:
  - Sin conexión.
  - Permisos de Drive no concedidos o vencidos.
  - Archivo inválido/corrupto.
  - Incompatibilidad de versión de backup.

### Acciones
- Mantener parámetros maestros que usan los módulos.
- Ejecutar backup/restauración bajo demanda.
- Conectar/reconectar cuenta de Drive para backup.
- Activar/desactivar backup automático.

### Estados
- Operaciones sensibles (eliminar/restaurar): requerir confirmación.
- Error de importación/exportación: mostrar causa y permitir reintento.
- Sin cuenta conectada: CTA para vincular Drive.

---

## Navegación esperada entre vistas

- App -> `Hábitos` como tab inicial.
- Bottom tab bar con `Hábitos`, `Compras`, `Finanzas`, `Configuración`.
- `Hábitos` -> Registro diario (fecha actual).
- `Hábitos` -> Calendario.
- `Hábitos` -> Configuración de hábitos.
- `Registro diario` -> Calendario (al elegir fecha).
- `Calendario` -> Registro diario (al elegir un día).
- `Compras` -> Iniciar sesión nueva.
- `Compras` -> Sesión de compra (al abrir sesión activa o crear una nueva).
- `Compras` -> Prompt para agregar pendientes (todos o algunos) al iniciar sesión.
- `Compras` -> Configuración de compras.
- `Finanzas` -> Historial.
- `Finanzas` -> Configuración del plan.
- `Historial` -> `Finanzas` (regreso).
- `Configuración del plan` -> `Finanzas` (regreso).
- `Configuración` <-> módulos, según necesidades de edición.

---

## Criterio de completitud de esta definición

Esta especificación se considera completa para Etapa 1 si:
- Todas las vistas del MVP están descritas.
- Cada vista define objetivo, contenido, acciones y estados mínimos.
- La navegación principal entre vistas está explícita.

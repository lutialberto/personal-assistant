# Layout de Registro diario

## Objetivo

Definir la estructura visual y de navegación de la pantalla de Registro diario, donde se marca qué hábitos se realizaron en una fecha específica.

## Tipo de vista

- Formulario operativo de edición puntual.
- Vista de trabajo centrada en una fecha.
- Pantalla con confirmación explícita antes de persistir cambios.

## Relación con otras vistas

- Se abre desde `Hábitos` con la fecha actual preseleccionada.
- Se abre desde `Calendario` cuando el usuario toca un día.
- Al tocar la fecha, deriva a `Calendario` para elegir otra fecha.
- Vuelve a `Hábitos` al confirmar o cancelar, según la acción del usuario.

## Layout general

- Encabezado superior con fecha a utilizar.
- Área principal con lista de hábitos configurados.
- Cada hábito se presenta con un control de marcado claro y consistente.
- Los hábitos que ya estaban marcados al entrar deben destacarse visualmente como estado previo, no como un estado normal cualquiera.
- La lista prioriza primero los hábitos ya marcados al cargar la vista y después mantiene el orden natural.
- Barra inferior o bloque final con acciones de confirmar y cancelar.

## Elementos fijos

- Fecha seleccionada.
- Lista de hábitos configurados.
- Acciones de confirmar y cancelar.

## Elementos variables

- Fecha activa.
- Cantidad de hábitos configurados.
- Hábitos marcados para la fecha.
- Hábitos que estaban marcados al ingresar y fueron desmarcados durante la edición.

## Estados relevantes

- Sin hábitos configurados: estado vacío con mensaje y CTA para ir a configuración de hábitos.

## Transiciones

- Al tocar la fecha: abrir `Calendario` para elegir otro día.
- Al tocar confirmar: guardar y volver a la pantalla anterior.
- Al tocar cancelar: descartar cambios y volver sin persistir.

## Notas de composición

- La fecha debe ser el primer dato que se entiende.
- El control de cada hábito debe ser más importante visualmente que adornos secundarios.
- La pantalla debe facilitar edición rápida sin requerir navegación extra.
- La diferencia entre estado original y estado editado debe ser visible para evitar confusión.
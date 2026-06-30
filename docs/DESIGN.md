# Guía de diseño UI

## Objetivo

Definir una base visual concreta para la app antes de bajar decisiones a componentes y pantallas específicas.

La dirección elegida es **sobria funcional**: una interfaz clara, ordenada y tranquila, con una presencia visual contenida y sin exceso de ornamentación.

## Principios

- La claridad visual tiene prioridad sobre la decoración.
- Cada pantalla debe tener una intención principal evidente.
- El sistema visual debe ser consistente en todas las vistas.
- Las decisiones visuales deben ayudar a escanear, entender y actuar rápido.
- La app debe sentirse confiable, ordenada y amable, no fría ni recargada.

## Sensación general

- Serena, limpia y práctica.
- Más cercana a una herramienta bien cuidada que a una interfaz llamativa.
- Con una identidad suave, pero sin perder firmeza ni estructura.

## Sistema base

La app debe usar un sistema visual con valores conocidos y reutilizables. La regla general es que una pantalla no elige colores, fuentes, tamaños o espacios libremente: usa variantes ya definidas y solo las sobreescribe por excepción.

### Tokens concretos iniciales

Estos son los valores base de partida. Más adelante se pueden ajustar, pero no deberían cambiar por pantalla.

- Color primario / acento: azul profundo.
- Rol de acento principal: `acento`.
- Rol de acento fuerte: `acentoFuerte`.
- Fondo general: marfil muy claro.
- Superficie: blanco roto.
- Texto principal: grafito oscuro.
- Texto secundario: gris medio.
- Bordes y separadores: gris suave.
- Éxito: verde contenido.
- Advertencia: ámbar suave.
- Error: rojo contenido.
- Información: azul grisáceo.

El color primario es el azul profundo porque transmite orden, confianza y estabilidad sin volver la interfaz fría.

### Roles de color

- Los colores se definen por utilidad, no por pantalla.
- Cada color debe tener un nombre de propósito, no solo un valor visual.
- Ejemplos de roles: `fondo`, `superficie`, `texto`, `textoSuave`, `borde`, `acento`, `acentoFuerte`, `exito`, `advertencia`, `error`, `info`.
- Cada pantalla debe usar estos roles por defecto y no inventar combinaciones propias.
- Las excepciones deben ser intencionales y justificadas.

### Variantes de tipografía y texto

- La tipografía base debe ser fija para toda la app.
- Los textos deben salir de variantes predefinidas, no de estilos ad hoc.
- Ejemplos de variantes: `titulo`, `subtitulo`, `seccion`, `cuerpo`, `cuerpoSuave`, `caption`, `label`, `ayuda`, `error`.
- Las diferencias entre variantes deben resolver jerarquía y legibilidad, no decorar.
- Si un texto necesita destacarse, debe hacerlo por una variante existente o por una excepción explícita.

### Definición inicial de texto

- `titulo`: encabezado principal de pantalla. Debe usarse una sola vez por vista.
- `subtitulo`: apoyo directo del título o contexto inmediato.
- `seccion`: nombre de bloque interno dentro de una pantalla.
- `cuerpo`: texto normal de lectura.
- `cuerpoSuave`: texto secundario, metadatos o aclaraciones.
- `caption`: texto breve de soporte, pie o ayuda compacta.
- `label`: nombre de campo, control o categoría.
- `ayuda`: explicación corta de uso o contexto.
- `error`: mensaje de validación o fallo.

El título no es un texto cualquiera: debe marcar la intención principal de la pantalla y quedar visualmente por encima del resto.

### Variantes de botones

- Los botones también deben tener variantes con comportamiento y presencia definidos.
- Ejemplos de variantes: `primary`, `secondary`, `tertiary`, `destructive`, `ghost`.
- `primary` debe ser único por contexto cuando sea posible.
- `destructive` debe ser evidente y no confundirse con una acción normal.
- Las pantallas no deberían mezclar estilos de botón inventados por su cuenta.

### Definición inicial de botones

- `primary`: acción principal de la pantalla o bloque.
- `secondary`: acción importante pero no dominante.
- `tertiary`: acción de apoyo o navegación secundaria.
- `destructive`: eliminación, borrado o acción irreversible.
- `ghost`: acción liviana, discreta o contextual.

Regla práctica: si dos botones compiten por protagonismo, la pantalla todavía no está bien resuelta.

### Espaciado

- Sí, conviene tratar el espaciado como un sistema con variantes.
- El espacio debe estar tokenizado igual que el color o la tipografía.
- Ejemplos de escalas: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`.
- Las distancias entre elementos deben repetirse de forma consistente.
- Cada pantalla debe usar la escala base y solo apartarse de ella por necesidad clara.

### Definición inicial de espacios

- `xs`: separación mínima entre elementos muy relacionados.
- `sm`: separación corta entre piezas de un mismo bloque.
- `md`: espacio base entre elementos comunes.
- `lg`: separación entre secciones o grupos visuales.
- `xl`: separación importante entre bloques principales.
- `2xl`: corte fuerte entre áreas de una pantalla.

Los espacios también tienen intención: un espacio grande no solo separa, también cambia la lectura de la pantalla.

## Color

### Base

- Fondo principal: crema o gris cálido muy claro.
- Superficies: blanco roto o un tono apenas más alto que el fondo.
- Texto principal: grafito, no negro puro.
- Texto secundario: gris medio, con contraste suficiente.

### Acento

- Un solo color de acento dominante.
- Recomendación: azul profundo o verde petróleo.
- Usarlo para acciones primarias, foco, enlaces relevantes y estados positivos.
- Evitar usar el acento en demasiados lugares al mismo tiempo.

### Estados

- Éxito: un tono claro y reconocible, sin saturar.
- Advertencia: visible, pero menos agresivo que un error.
- Error: claro y directo, reservado para casos realmente problemáticos.
- Información: neutral, útil para orientar sin competir con la acción principal.

## Tipografía

- Prioridad absoluta: legibilidad.
- Evitar una tipografía con demasiada personalidad.
- Usar una escala pequeña y estable.
- Reservar el mayor peso visual para títulos, valores importantes y acciones principales.

## Espaciado y ritmo

- Las pantallas deben respirar.
- Evitar bloques demasiado juntos.
- Mantener separación consistente entre secciones, listas y formularios.
- Usar el espacio para ordenar, no para decorar.

## Forma y componentes

### Contenedores

- Tarjetas simples, con bordes suaves.
- Sombras mínimas o muy sutiles.
- Evitar relieves exagerados.

### Botones

- Primario: único por vista, con mayor presencia.
- Secundario: visualmente más liviano.
- Destructivo: claramente distinguible y separado.
- Evitar varios botones compitiendo por atención.

### Formularios

- Campos claros, con etiquetas explícitas.
- Estados de foco, error y completado bien visibles.
- Ayudas cortas cuando hagan falta.
- Evitar campos con comportamiento ambiguo o escondido.

### Listas y tarjetas

- Estructura uniforme.
- Jerarquía clara entre título, metadatos y acciones.
- La información clave debe verse sin esfuerzo.

## Interacción

- Toda acción importante debe dar feedback inmediato.
- Las acciones sensibles deben pedir confirmación clara.
- Los cambios automáticos deben ser visibles y explicables.
- Si algo tarda, la interfaz debe comunicar que está procesando.

## Estados vacíos y bloqueos

- Un estado vacío no solo informa: orienta el próximo paso.
- Un bloqueo debe explicar por qué existe.
- Los errores deben ser accionables, no genéricos.
- Evitar mensajes largos si una explicación breve alcanza.

## Accesibilidad

- Contraste suficiente en texto y controles.
- No depender solo del color para comunicar estado.
- Mantener tamaños legibles en escritorio y mobile.
- La interfaz debe seguir siendo clara con menos espacio disponible.

## Reglas prácticas

- Si un elemento no mejora claridad, confianza o velocidad de uso, no se agrega.
- Si una decisión visual compite con la tarea principal, se simplifica.
- Si un componente puede reutilizarse, debe reutilizarse.

## Paleta y tokens concretos

### Colores

| Rol | Valor hex | RGB | Uso |
|---|---|---|---|
| `acento` (azul profundo) | `#1F4788` | rgb(31, 71, 136) | Botones primary, enlaces, elementos destacados |
| `acentoFuerte` (azul más oscuro) | `#0D2D5C` | rgb(13, 45, 92) | Estados hover/active, énfasis máximo |
| `exito` (verde) | `#4CAF50` | rgb(76, 175, 80) | Confirmaciones, estados positivos |
| `advertencia` (ámbar) | `#F57C00` | rgb(245, 124, 0) | Alertas, advertencias |
| `error` (rojo) | `#D32F2F` | rgb(211, 47, 47) | Errores, acciones destructivas |
| `info` (azul grisáceo) | `#0288D1` | rgb(2, 136, 209) | Información, estados neutrales |
| `fondo` (marfil claro) | `#FFFAF5` | rgb(255, 250, 245) | Fondo general de pantallas |
| `superficie` (blanco roto) | `#FDFCFA` | rgb(253, 252, 250) | Tarjetas, paneles, contenedores |
| `texto` (grafito) | `#2C2C2C` | rgb(44, 44, 44) | Texto principal, encabezados |
| `textoSuave` (gris medio) | `#666666` | rgb(102, 102, 102) | Texto secundario, metadatos |
| `borde` (gris suave) | `#E0E0E0` | rgb(224, 224, 224) | Bordes, separadores, líneas |

### Tipografía

**Familia base:** `Segoe UI`, `-apple-system`, `BlinkMacSystemFont`, `Roboto`, sans-serif

| Variante | Tamaño | Peso | Line-height | Uso |
|---|---|---|---|---|
| `titulo` | 32px | 700 | 1.2 | Encabezado principal de pantalla |
| `subtitulo` | 24px | 600 | 1.3 | Apoyo del título, contexto principal |
| `seccion` | 20px | 600 | 1.3 | Nombre de bloque o sección |
| `cuerpo` | 16px | 400 | 1.5 | Texto normal, párrafos |
| `cuerpoSuave` | 14px | 400 | 1.5 | Texto secundario, aclaraciones |
| `caption` | 12px | 400 | 1.4 | Pie de foto, ayuda compacta |
| `label` | 14px | 500 | 1.4 | Nombre de campo, control |
| `ayuda` | 12px | 400 | 1.4 | Explicación contextual |
| `error` | 12px | 500 | 1.4 | Mensaje de validación (color: `error`) |

### Espaciado

| Token | Valor (rem) | Valor (px) | Uso |
|---|---|---|---|
| `xs` | 0.25 | 4 | Separación mínima entre elementos muy relacionados |
| `sm` | 0.5 | 8 | Espacio corto entre piezas de un mismo bloque |
| `md` | 1 | 16 | Espacio base entre elementos comunes |
| `lg` | 1.5 | 24 | Separación entre secciones o grupos |
| `xl` | 2 | 32 | Separación entre bloques principales |
| `2xl` | 3 | 48 | Corte fuerte entre áreas de una pantalla |

### Bordes y sombras

- **Bordes:** 1px sólido en color `borde`
- **Sombra leve:** `0 1px 3px rgba(0, 0, 0, 0.08)` — para tarjetas y superficies
- **Sombra media:** `0 2px 8px rgba(0, 0, 0, 0.1)` — para modales y dropdowns
- **Radio de bordes:** 6px (contenedores), 4px (inputs), 20px (botones pill)

### Ejemplo de uso

Si necesitas un color rojo para un mensaje de error, usas `#D32F2F` (token `error`).  
Si necesitas un espacio entre dos elementos de la misma sección, usas `8px` (token `sm`).  
Si necesitas texto de ayuda pequeño, usas variante `ayuda`: 12px, peso 400, color `textoSuave`.

## Alcance

Este documento define la base visual general. Más adelante se podrá bajar a un sistema de componentes y a reglas por vista.
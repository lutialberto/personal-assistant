# Etapas del proyecto

## Etapa 0 — Infraestructura
Estructura del repo, convenciones, documentación base, git/GitHub. Todo lo necesario para trabajar de forma ordenada antes de tocar la app.

**Entregables:**
- Convenciones definidas (idiomas, commits, branches)
- Estructura de carpetas documentada
- Flujo de trabajo con el agente documentado
- Procesos del proyecto documentados
- Etapas con entregables y criterios de cierre definidos

**Cierre:** todo lo anterior está escrito y no hay ítems "a definir" pendientes dentro de esta etapa.

---

## Etapa 1 — Definición
Qué es la app, qué resuelve, qué no es. Antes de tocar arquitectura o código.

**Entregables:**
- Descripción de la app: propósito, problema que resuelve, qué no es
- Lista de funcionalidades, separando lo que va al MVP de lo que va a iteraciones posteriores
- Desglose de tareas por funcionalidad
- Diseño de vistas: qué pantallas existen y qué contiene cada una

**Checklist UX mínima para cierre de etapa:**
- Estados por vista definidos (vacío, error, confirmación y bloqueos)
- Reglas de interacción clave definidas (confirmar/cancelar, efectos de acciones sensibles)
- Criterios UX de aceptación por vista documentados

**Cierre:** existe un documento claro que permite pasar a arquitectura sin ambigüedad.

---

## Etapa 2 — Arquitectura
Todas las decisiones técnicas tomadas y documentadas antes de escribir código.

**Entregables:**
- Stack tecnológico (framework, lenguaje, herramientas base)
- Librerías principales a usar y justificación de cada una
- Estructura interna de `/src`
- Manejo de ambientes (local, producción) y comandos de ejecución
- Estrategia de deploy
- Seguridad: qué se protege y cómo
- Persistencia: cómo funciona el storage local y el backup a Drive
- Manejo de errores y logging: cómo se detectan y registran fallos en producción

**Cierre:** un desarrollador puede arrancar a codear sin preguntar nada.

---

## Etapa 3 — MVP
La versión mínima funcional que ya sirve para uso real.

**Entregables:**
- App corriendo con las funcionalidades definidas en etapa 1 como MVP
- Criterios de "listo" definidos en etapa 1 cumplidos

**Cierre:** la app es usable para su propósito mínimo.

---

## Etapa 4 — Iteraciones
Bloques de features agrupadas por valor. Cada iteración agrega funcionalidad sobre el MVP.

Sin criterio de cierre — es un proceso continuo.

---

## Etapa 5 — Mantenimiento
Evolución continua. Mejoras, refactors, nuevas ideas.

Sin criterio de cierre — es un proceso continuo.

---

**Estado actual:** Etapa 1

**Regla de avance:** aunque se completen entregables, no se cambia de etapa sin confirmación explícita del usuario.

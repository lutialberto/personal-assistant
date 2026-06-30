# Interacción con el agente

> Este archivo es una guía para el usuario. Las instrucciones que el agente sigue están configuradas en el IDE (custom instructions de VS Code) — no en este archivo.

## Contexto entre sesiones

El agente no recuerda nada entre conversaciones. `docs/proceso/STATE.md` es el puente entre sesiones — hay que mantenerlo actualizado para que el agente tenga contexto al arrancar.

Al cerrar una sesión de trabajo, actualizar:
- `STATE.md` — qué se hizo, en qué punto quedó el trabajo
- `TODO.md` — agregar, completar o repriorizar tareas según corresponda

## Cuándo pedir planificación vs ejecución

- **Pedir plan primero** — tareas complejas, con múltiples pasos, o que involucran decisiones de diseño o arquitectura.
- **Ejecución directa** — tareas claras y acotadas donde no hay ambigüedad sobre qué hacer.

## Cómo corregir al agente

Si una respuesta está mal o no es lo que se esperaba, decirlo explícitamente antes de continuar. No ignorarlo y seguir — el agente puede asumir que lo que dijo fue correcto.

## Qué esperar del agente

- Toma iniciativa: propone, no solo ejecuta lo que se le dicta.
- Si algo está fuera de scope de la etapa actual, lo señala y lo anota en `TODO.md` con la etapa correspondiente en lugar de resolverlo en el momento.
- Si hay ambigüedad, pregunta antes de asumir.

# Finanzas — Modelo conceptual

## Alcance del módulo

El módulo Finanzas gestiona un único plan de retiro personal. No es una herramienta contable general. Su propósito es:

1. Calcular cuánto hay que aportar por mes para alcanzar el objetivo de retiro.
2. Registrar aportes reales y valor actual del portfolio.
3. Mostrar si se va bien respecto al plan.

## Entidades principales

### 1) Plan de retiro

Configuración central del módulo. Existe una sola instancia.

Parámetros personales:
- Año de nacimiento.
- Edad objetivo de retiro.
- Mes objetivo de retiro.

Parámetros financieros (raramente cambian):
- Retorno anual real esperado (porcentaje, descontando inflación).
- Multiplicador de gasto al retiro (relación entre gasto mensual actual y presupuesto de retiro).
- Tasa de retiro sostenible (porcentaje anual seguro para retirar del capital acumulado).

Parámetros operativos (se actualizan cuando cambia la realidad):
- Gasto mensual actual.
- Tipo de cambio de referencia (pesos por dólar, para mostrar equivalente en USD).

### 2) Snapshot de portfolio

Registro del valor real del portfolio en un momento dado. El usuario lo carga cuando quiere (mensual, trimestral, cuando le parece). Puede ser positivo o negativo respecto al snapshot anterior — eso es parte del flujo normal.

Atributos:
- Fecha.
- Valor total del portfolio en pesos.
- Tipo de cambio en ese momento (pesos por dólar).
- Parámetros del plan vigentes al momento del registro (para auditoría).
- Nota opcional.

### 3) Aporte

Plata nueva que el usuario transfiere a la inversión ese mes.

Atributos:
- Fecha.
- Monto en pesos.
- Tipo de cambio en ese momento (pesos por dólar).
- Parámetros del plan vigentes al momento del registro (para auditoría).
- Nota opcional.

## Capital actual

> **Capital actual = valor del último snapshot + suma de aportes posteriores a ese snapshot.**

Si no hay ningún snapshot, el capital actual es la suma de todos los aportes.

## Glosario de variables

Todas las variables nombradas corresponden a las del modelo original en Excel.

| Variable | Nombre | Tipo | Fórmula |
|---|---|---|---|
| A | Año de nacimiento | Entrada dinámica | — |
| B | Año actual | Derivada | Fecha actual |
| B1 | Mes actual | Derivada | Fecha actual |
| C | Edad objetivo de retiro | Entrada dinámica | — |
| C1 | Mes objetivo de retiro | Entrada dinámica | — |
| D | Capital actual | Derivada | Último snapshot + aportes posteriores |
| F | Gasto mensual actual | Entrada dinámica | — |
| G | Retorno anual real esperado | Entrada fija | — |
| H | Multiplicador de gasto al retiro | Entrada fija | — |
| M | Tasa anual de retiro sostenible | Entrada fija | — |
| H1 | Edad actual | Calculada | B − A |
| I | Años restantes hasta el retiro | Calculada | C − H1 |
| J | Ingreso mensual deseado al retiro | Calculada | F × H |
| K | Ingreso anual deseado al retiro | Calculada | J × 12 |
| L | Capital objetivo (FIRE number) | Calculada | K / M |
| N | Retorno mensual esperado | Calculada | (1 + G)^(1/12) − 1 |
| O | Meses restantes hasta el retiro | Calculada | (C − H1) × 12 + C1 − B1 |
| E | Aporte mínimo mensual | Salida | (L − D×(1+N)^O) / [((1+N)^O − 1) / N] |
| P | Capital proyectado al retiro | Salida | D×(1+N)^O + E×[((1+N)^O − 1) / N] |

## Cálculos del plan

| Variable | Fórmula | Descripción |
|---|---|---|
| Edad actual (H1) | B − A | Año actual menos año de nacimiento |
| Meses restantes (O) | (C − H1) × 12 + C1 − B1 | Meses que faltan hasta jubilarse |
| Retorno mensual (N) | (1 + G)^(1/12) − 1 | Tasa anual convertida a mensual |
| Ingreso mensual deseado (J) | F × H | Gasto mensual actual por el multiplicador |
| Capital objetivo / FIRE number (L) | J × 12 / M | Capital total necesario al retiro |
| Aporte mínimo mensual (E) | (L − D×(1+N)^O) / [((1+N)^O − 1) / N] | PMT: mínimo mensual para llegar al objetivo |
| Capital proyectado (P) | D×(1+N)^O + E×(((1+N)^O − 1) / N) | FV: capital esperado al retiro bajo el plan |

Todos los cálculos son en pesos; se muestra equivalente en USD dividiendo por el tipo de cambio de referencia.

## Métricas principales a mostrar

- Capital objetivo (FIRE number) en pesos y USD.
- Capital actual en pesos y USD.
- Porcentaje de avance hacia el objetivo.
- Aporte mínimo mensual necesario (recalculado siempre con el capital actual y meses restantes reales).
- Comparación del aporte del mes real vs el mínimo necesario.
- Meses restantes hasta el retiro.
- Curva histórica: puntos reales del portfolio en el tiempo (snapshots + aportes posteriores al último snapshot).
- Curva proyectada (desde hoy en adelante): calculada con el capital actual y los parámetros efectivos vigentes.

## Parámetros: simulación vs efectivo

Cambiar un parámetro del plan tiene dos modos:

- **Simular**: el usuario ajusta uno o más parámetros para ver cómo cambia la proyección. No guarda nada. Al salir del modo simulación, los parámetros vuelven a los valores efectivos.
- **Guardar efectivo**: el usuario confirma el cambio. A partir de ahí, los próximos registros (aportes y snapshots) usarán los nuevos valores.

Los parámetros efectivos solo se actualizan por acción explícita del usuario, nunca al simular.

## Reglas conceptuales

- El plan de retiro es único — no hay múltiples planes.
- El aporte mínimo se recalcula en cada consulta con el capital actual y los meses restantes reales.
- El capital actual se actualiza con nuevos snapshots o aportes; los datos anteriores se preservan.
- Cada aporte y snapshot guarda el tipo de cambio y los parámetros vigentes en ese momento, para auditoría.
- Los cálculos son aproximaciones operativas, no proyecciones financieras de precisión.
- La curva proyectada siempre usa los parámetros efectivos vigentes y el capital actual — no parámetros históricos.

## Fuera de scope

- Gestión de las 3 capas del sistema financiero personal (liquidez, reserva, inversión).
- Rebalanceo de cartera (80/20 SPY/EEM).
- Múltiples planes o escenarios simultáneos de retiro.
- Integración con brokers o bancos.
- Cálculos fiscales o impositivos.

## Estado

Modelo conceptual v1 cerrado.

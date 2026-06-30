# Estructura de `/src`

```
src/
  app/                  → Expo Router: layouts y rutas (file-based routing)
  assets/
    icons/
    images/
    fonts/
  components/           → componentes UI compartidos entre módulos
    buttons/
    containers/
    forms/
    texts/
    toast/
  hooks/                → hooks compartidos entre módulos
    theme/              → hooks de tema y estilos globales
  models/               → modelos y tipos TypeScript globales
  services/             → servicios compartidos (storage local, Drive, etc.)
  utils/                → utilidades compartidas (fechas, formateo, etc.)
  constants/            → constantes globales de la app
  habitos/
    components/
    hooks/
    models/
    services/
    store/
  compras/
    components/
    hooks/
    models/
    services/
    store/
  finanzas/
    components/
    hooks/
    models/
    services/
    store/
```

## Criterios de ubicación

- **Global vs módulo:** si algo es reutilizable entre módulos, va en la carpeta global correspondiente. Si es exclusivo de un módulo, va dentro de ese módulo.
- **`models/`:** tipos e interfaces TypeScript. Global para modelos compartidos, dentro del módulo para tipos propios.
- **`services/`:** lógica de acceso a datos o servicios externos. Las vistas llaman a los services como si un backend existiera — los services abstraen si los datos vienen de SQLite, Drive u otra fuente. Global para storage local y Drive; por módulo para operaciones específicas del dominio.
- **`app/`:** solo contiene archivos de rutas de Expo Router. Las pantallas reales viven en cada módulo e importadas desde ahí.

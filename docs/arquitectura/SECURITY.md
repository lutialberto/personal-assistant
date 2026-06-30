# Seguridad

## Contexto

La app no tiene backend. Esta decisión es de simplicidad, no de seguridad. Ver `docs/arquitectura/PERSISTENCE.md` para el detalle.

Como consecuencia, no existe superficie de ataque de servidor (APIs expuestas, autenticación remota, bases de datos remotas).

## Almacenamiento

| Tipo de dato | Storage | Motivo |
|---|---|---|
| Datos de la app (hábitos, compras, finanzas) | `expo-sqlite` | No son sensibles. SQLite sin encriptar es suficiente para uso personal |
| Tokens de Drive | `expo-secure-store` | Dato sensible. Usa Keychain (iOS) / Keystore (Android) del sistema operativo |

## Variables de entorno

- No incluir datos sensibles en `.env`.
- Usar `.env.local` para sobreescribir en desarrollo local. No se commitea.

## Lo que no aplicamos

- Encriptación de la base de datos SQLite — no justificado para una app personal de uso propio.
- Autenticación de usuario — la app no tiene usuarios, es de uso personal.
- Certificate pinning ni seguridad de red — no hay backend propio.

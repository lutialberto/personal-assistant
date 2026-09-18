import { SQLiteDatabase } from "expo-sqlite";

export type Migration = {
  version: number;
  up: (db: SQLiteDatabase) => Promise<void>;
};

/**
 * Cada migración corre una sola vez, en orden de `version` (incremental, empieza en 1).
 * No se editan migraciones ya aplicadas: los cambios de schema van en una migración nueva.
 */
export const migrations: Migration[] = [];

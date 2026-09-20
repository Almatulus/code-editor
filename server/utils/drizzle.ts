// server/utils/drizzle.ts

export { sql, eq, and, or } from "drizzle-orm";

import { db } from "hub:db";
import * as schema from "../database/schema";

export const tables = schema;

export const useDrizzle = () => db;

export type User = typeof schema.users.$inferSelect;

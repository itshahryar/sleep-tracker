import { PrismaClient } from '@/src/generated/prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
// add  no-var

/* eslint-disable no-var */

declare global {
  var prisma: PrismaClient | undefined;
}

/* eslint-disable no-var */

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

export const db = globalThis.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}


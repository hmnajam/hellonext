import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
  } from 'drizzle-orm/pg-core'
 
  export const UsersTable = pgTable(
    'users',
    {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
      email: text('email').notNull(),
      image: text('image').notNull(),
      createdAt: timestamp('createdAt').defaultNow().notNull(),
    }
  )


// Connect to Vercel Postgres
export const db = drizzle(sql as any)
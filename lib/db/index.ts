import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

// Check if DATABASE_URL is configured
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is not defined. Please add it to your .env.local file.\n" +
    "Example: DATABASE_URL=postgresql://user:password@localhost:5432/dbname"
  )
}

// Create postgres connection
const connectionString = process.env.DATABASE_URL

// For query purposes
const queryClient = postgres(connectionString)
export const db = drizzle(queryClient, { schema })

// For migrations
export const migrationClient = postgres(connectionString, { max: 1 })

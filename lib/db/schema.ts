import { pgTable, varchar, integer, timestamp, pgEnum, json, index } from "drizzle-orm/pg-core"
import { createId } from "@paralleldrive/cuid2"

// Payment Status Enum
export const paymentStatusEnum = pgEnum("payment_status", [
  "CREATED",
  "AUTHORIZED",
  "CAPTURED",
  "FAILED",
  "REFUNDED",
])

// Payment Table
export const payments = pgTable(
  "payments",
  {
    id: varchar("id", { length: 128 })
      .primaryKey()
      .$defaultFn(() => createId()),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),

    // Razorpay Details
    razorpayOrderId: varchar("razorpay_order_id", { length: 255 }).notNull().unique(),
    razorpayPaymentId: varchar("razorpay_payment_id", { length: 255 }).unique(),
    razorpaySignature: varchar("razorpay_signature", { length: 500 }),

    // Package Details
    packageName: varchar("package_name", { length: 255 }).notNull(),
    packageDescription: varchar("package_description", { length: 1000 }),
    amount: integer("amount").notNull(), // Amount in paise
    currency: varchar("currency", { length: 10 }).default("INR").notNull(),

    // Customer Details
    customerName: varchar("customer_name", { length: 255 }),
    customerEmail: varchar("customer_email", { length: 255 }),
    customerPhone: varchar("customer_phone", { length: 20 }),

    // Payment Status
    status: paymentStatusEnum("status").default("CREATED").notNull(),

    // Additional Notes (JSON)
    notes: json("notes"),
  },
  (table) => ({
    razorpayOrderIdIdx: index("razorpay_order_id_idx").on(table.razorpayOrderId),
    razorpayPaymentIdIdx: index("razorpay_payment_id_idx").on(table.razorpayPaymentId),
    customerEmailIdx: index("customer_email_idx").on(table.customerEmail),
    statusIdx: index("status_idx").on(table.status),
  })
)

// Type exports
export type Payment = typeof payments.$inferSelect
export type NewPayment = typeof payments.$inferInsert

# Database Quick Start Guide

## ✅ Prisma Schema Created!

Your payment database schema has been created in `prisma/schema.prisma`.

It includes:
- Payment model with all Razorpay fields
- Customer information fields
- Payment status tracking
- Timestamps and indexes

---

## 🚀 Quick Setup Options

### Option 1: Prisma Postgres (Easiest - Recommended for Development)

```bash
# Start local Prisma Postgres
npx prisma dev
```

This will:
1. Start a local Postgres server
2. Automatically configure DATABASE_URL
3. Create all tables
4. Open Prisma Studio to view data

**Pros:**
- Zero configuration
- Works offline
- Perfect for development
- Free

**Cons:**
- Local only (not for production)

---

### Option 2: Neon (Best for Production)

1. **Sign up:** https://neon.tech (free tier)

2. **Create a project** and get your connection string

3. **Add to `.env.local`:**
   ```env
   DATABASE_URL="postgresql://user:pass@ep-xxx.neon.tech/dbname?sslmode=require"
   ```

4. **Create tables:**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

**Pros:**
- Cloud-hosted
- Free 3GB storage
- Works in production
- Auto-scaling

---

### Option 3: Local PostgreSQL

If you have PostgreSQL installed locally:

1. **Create database:**
   ```sql
   CREATE DATABASE peakseason;
   ```

2. **Add to `.env.local`:**
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/peakseason"
   ```

3. **Create tables:**
   ```bash
   npx prisma migrate dev --name init
   ```

---

## 📊 What Gets Created

### Payment Table

| Field | Type | Description |
|-------|------|-------------|
| id | String | Unique payment ID |
| razorpayOrderId | String | Razorpay order ID |
| razorpayPaymentId | String | Razorpay payment ID (after success) |
| razorpaySignature | String | Payment signature for verification |
| packageName | String | Peak Essentials/Ready/Enterprise |
| packageDescription | String | Package details |
| amount | Int | Amount in paise (₹1 = 100 paise) |
| currency | String | INR |
| customerName | String | Customer name |
| customerEmail | String | Customer email |
| customerPhone | String | Customer phone |
| status | Enum | CREATED/CAPTURED/FAILED/REFUNDED |
| notes | JSON | Additional data |
| createdAt | DateTime | When created |
| updatedAt | DateTime | Last updated |

---

## 🔧 Next Steps

### 1. Choose Your Database Option

**For development (easiest):**
```bash
npx prisma dev
```

**For production (Neon):**
1. Sign up at https://neon.tech
2. Get connection string
3. Add to `.env.local`
4. Run migrations

### 2. Test Database Connection

```bash
# Open Prisma Studio to view database
npx prisma studio
```

This opens a web UI at http://localhost:5555 where you can:
- View all payments
- Add/edit/delete records
- Test queries

### 3. Update API Routes

The API routes are already prepared in `PAYMENT_DATABASE_SETUP.md`.

You need to update:
- `app/api/razorpay/create-order/route.ts` - Save payment on order creation
- `app/api/razorpay/verify-payment/route.ts` - Update status on payment success

### 4. Create Prisma Client Helper

Create `lib/prisma.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

---

## 📝 Common Commands

```bash
# View database in browser
npx prisma studio

# Create migration (after schema changes)
npx prisma migrate dev --name your_migration_name

# Generate Prisma Client (after schema changes)
npx prisma generate

# Reset database (careful - deletes all data!)
npx prisma migrate reset

# Push schema without creating migration
npx prisma db push
```

---

## 🎯 Recommended Flow

1. **Right now (development):**
   ```bash
   npx prisma dev
   ```

2. **When ready for production:**
   - Sign up for Neon
   - Get connection string
   - Update `.env` on hosting platform (Vercel/Netlify)
   - Run migrations in production

---

## ⚠️ Important Notes

- Never commit `.env` or `.env.local` to Git
- Use different databases for development and production
- Backup your database regularly
- Test payments in test mode before going live

---

## 🆘 Troubleshooting

### "Command not found: npx"
```bash
# Use pnpm instead
pnpm dlx prisma dev
```

### "DATABASE_URL not found"
- Check `.env.local` file exists
- Check DATABASE_URL is set correctly
- Restart your dev server

### "Migration failed"
- Check PostgreSQL is running
- Check connection string is correct
- Check database user has permissions

---

## 🎊 Ready!

Your database schema is ready. Choose an option above and start saving payment data!

**Quick start:** Just run `npx prisma dev` and you're good to go! 🚀

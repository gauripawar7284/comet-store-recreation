# Nimbus — Sample E-Commerce App

An original streetwear/apparel storefront built as a demo: React (Vite) frontend + Node.js/Express/MongoDB backend, JWT auth, cart/checkout, Stripe test-mode payment, and an admin panel.

This is **not** a copy of any real company's site, branding, or content — it's a generic scaffold you can restyle and extend.

## Structure

```
ecommerce-app/
  backend/    Express API + MongoDB (Mongoose)
  frontend/   React (Vite) + Tailwind CSS
```

## Backend setup

```bash
cd backend
npm install
cp env.example.txt .env
```

Edit `.env`:
- `MONGO_URI` — your MongoDB connection string (local or Atlas)
- `JWT_SECRET` — any long random string (do not reuse this in production; store real secrets in a secret manager such as Azure Key Vault)
- `STRIPE_SECRET_KEY` — a Stripe **test** secret key if you want real checkout sessions (optional — orders still work without it)

```bash
npm run seed   # loads sample products + an admin user
npm run dev    # starts the API on http://localhost:5000
```

The seed script prints a demo admin login (`admin@nimbus.example.com` / `ChangeMe123!`). Change that password immediately if you keep this data around.

## Frontend setup

```bash
cd frontend
npm install
cp env.example.txt .env
npm run dev    # starts the app on http://localhost:5173
```

## Features

- Product catalog with category filtering
- Product detail page with size selection
- Cart persisted in localStorage
- Checkout that creates an order and (if Stripe is configured) a Stripe Checkout session
- JWT-based signup/login, protected routes
- Admin panel: product CRUD, order status management

## Notes

- Passwords are hashed with bcrypt; JWTs expire after 7 days.
- Stripe is optional — without a key, orders are created directly with `pending` status so you can still exercise the full flow locally.
- All product data, images, and copy are placeholders — swap in your own before using this for anything real.
- Review and test any generated code in a non-production environment before deploying it.

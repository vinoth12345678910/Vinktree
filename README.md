# Vinktree

A modern, beautiful link-in-bio SaaS platform built with **Next.js**, **Tailwind CSS**, and **Stripe**. Share all your links, grow your audience, and unlock premium features with a stunning, responsive UI.
**Frontend is located at [`client/vinktree`](./client/vinktree)**
**Backend is located at [`server`](./server)**

---

## 🚀 Features
- **Landing Page:** World-class SaaS landing with animated hero, social proof, how-it-works, FAQ, and premium CTA.
- **Authentication:** Register and login with JWT-based auth.
- **Dashboard:** Manage your profile, bio, and social links in a beautiful, card-based UI.
- **Premium Subscription:** Subscribe via Stripe for unlimited links and advanced features.
- **Responsive Design:** Looks great on all devices.
- **Dark Mode:** Fully supported.
- **Modern UI:** Built with Tailwind CSS and custom components.

---

## 🛠️ Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/) (subscription payments)
- [Express.js](https://expressjs.com/) (backend API)
- [MongoDB](https://www.mongodb.com/) (database)
- [ShadcnUi](https://ui.shadcn.com/) (UI)

---

## ⚡ Getting Started

### 1. **Clone the Repo**
```bash
git clone https://github.com/yourusername/vinktree.git
cd vinktree
```

### 2. **Install Dependencies**
```bash
# For frontend
cd client/vinktree
npm install

# For backend
cd ../../server
npm install
```

### 3. **Set Up Environment Variables**
Create a `.env` file in `/server` with:
```env
USERNAME=youradminusername
PASSWORD=youradminpassword
JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=3600
MONGODB_URL=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PRICE_ID=your_stripe_price_id
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

> **Get Stripe keys and price ID from your [Stripe Dashboard](https://dashboard.stripe.com/test/products)**

### 4. **Run the Backend**
```bash
cd server
npm start # or nodemon app.js
```

### 5. **Run the Frontend**
```bash
cd client/vinktree
npm run dev
```

---

## 💳 Stripe Integration
- **Test Mode:** Stripe is set up in test mode. Use test cards for checkout.
- **Webhook:** Use [ngrok](https://ngrok.com/) to expose your backend for Stripe webhooks in development.
- **Premium:** After successful payment, users are upgraded to premium automatically.

---

## 🌈 Customization
- **Styling:** All UI is built with Tailwind CSS. Tweak `globals.css` and components for your brand.
- **Landing Page:** Edit `app/page.tsx` for your hero, features, FAQ, and more.
- **Dashboard:** Edit `app/dashboard/page.tsx` for profile and link management.
- **Components:** Reusable UI in `components/ui/`.

---

## 📦 Project Structure
```
linktree/
  client/
    vinktree/
      app/           # Next.js app pages (landing, login, register, dashboard)
      components/    # UI components
      public/        # Static assets (SVGs, logos)
      ...
  server/
    Routes/         # Express API routes
    models/         # Mongoose models
    middleware/     # Auth and premium checks
    ...
```

---

## 📝 License
MIT. Feel free to use, modify, and deploy!

---

## 🙏 Credits
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
- [Vercel](https://vercel.com/)

---

## 💬 Questions?
Open an issue or email [support@vinktree.com](mailto:support@vinktree.com)

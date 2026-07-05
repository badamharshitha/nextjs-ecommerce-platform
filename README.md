# 🛒 Next.js E-commerce Platform

A modern and responsive **E-commerce Platform** built with **Next.js App Router**, **React**, **TypeScript**, and **Tailwind CSS**. The application provides a complete shopping experience, including product browsing, search, filtering, wishlist management, shopping cart, multi-step checkout, and account management.

---

## 🚀 Features

- 🏠 Responsive Home Page
- 🛍️ Product Listing
- 📄 Product Detail Page
- 🔍 Product Search
- 🏷️ Category Filtering
- ↕️ Product Sorting
- ❤️ Wishlist Management
- 🛒 Shopping Cart
- ➕ Increase/Decrease Product Quantity
- 💰 Dynamic Order Summary
- 💳 Multi-Step Checkout Process
  - Shipping Information
  - Billing Information
  - Payment Review
- ✅ Order Success Page
- 👤 Account Dashboard
- 📦 Recent Orders
- 💾 Cart & Wishlist Persistence using Local Storage
- ♿ Accessible UI with Semantic HTML and ARIA Labels
- 📱 Fully Responsive Design
- ⚡ Static Site Generation (SSG) with Next.js App Router

---

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- React Context API
- Local Storage
- ESLint

---

## 📂 Project Structure

```
app/
├── account/
├── cart/
├── checkout/
│   └── success/
├── products/
│   └── [id]/
├── search/
├── wishlist/
├── layout.tsx
└── page.tsx

components/
├── footer.tsx
├── header.tsx
├── product-card.tsx
├── product-detail-actions.tsx
└── providers.tsx

lib/
└── data.ts

public/
└── images/
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/badamharshitha/nextjs-ecommerce-platform.git
```

Navigate to the project directory:

```bash
cd nextjs-ecommerce-platform
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 🧪 Build Verification

Build the project:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Verify TypeScript compilation:

```bash
npx tsc --noEmit
```

---

## ✨ Key Functionalities

### Product Browsing

- Browse featured products
- View detailed product information
- Display product ratings and customer reviews

### Search & Filtering

- Search products by name
- Filter by category
- Sort by rating and price

### Wishlist

- Add products to wishlist
- Remove products from wishlist
- Persistent wishlist using Local Storage

### Shopping Cart

- Add and remove products
- Update product quantity
- Automatic subtotal and total calculation

### Checkout

- Multi-step checkout process
- Shipping details
- Billing details
- Payment review
- Order confirmation page

### Account

- User profile
- Wishlist overview
- Recent order history

---

## ♿ Accessibility

- Semantic HTML
- Keyboard Navigation
- ARIA Labels
- Responsive Layout

---

## 📱 Responsive Design

Optimized for:

- 💻 Desktop
- 💼 Laptop
- 📱 Mobile
- 📟 Tablet

---

## 📈 Future Improvements

- User Authentication
- Payment Gateway Integration
- Backend API Integration
- Database Support
- Unit Testing with Jest
- Integration Testing
- End-to-End Testing with Playwright

---

## 👩‍💻 Author

**Badam Nikhila Sri Harshitha**

**GitHub:**  
https://github.com/badamharshitha

**LinkedIn:**  
https://www.linkedin.com/in/nikhila-sri-harshitha-badam-463769365/

---

## 📄 License

This project is intended for educational, learning, and portfolio purposes.
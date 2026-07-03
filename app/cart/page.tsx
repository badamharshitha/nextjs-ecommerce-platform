'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { products } from '@/lib/data'

type CartItem = { id: string; quantity: number }

const CART_KEY = 'storefront-cart'

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = window.localStorage.getItem(CART_KEY)
    if (stored) {
      setCart(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  const updateQuantity = (id: string, quantity: number) => {
    setCart((current) => current.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id: string) => {
    setCart((current) => current.filter((item) => item.id !== id))
  }

  const items = cart.map((item) => ({
    ...products.find((product) => product.id === item.id)!,
    quantity: item.quantity,
  }))

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-semibold text-slate-900">Shopping cart</h1>
        {items.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-xl font-medium text-slate-900">Your cart is empty</p>
            <p className="mt-2 text-sm text-slate-600">Add items from the shop to continue.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">{item.name}</p>
                      <p className="mt-1 text-sm text-slate-500">${item.price} each</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm font-medium text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <label htmlFor={`qty-${item.id}`} className="text-sm font-medium text-slate-700">
                      Quantity
                    </label>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                      className="w-24 rounded-full border border-slate-300 px-4 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                </div>
              ))}
            </div>
            <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Order summary</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Shipping</span>
                  <span>$10.00</span>
                </div>
                <div className="flex items-center justify-between text-base font-semibold text-slate-900">
                  <span>Total</span>
                  <span>${(subtotal + 10).toFixed(2)}</span>
                </div>
              </div>
              <button className="mt-8 w-full rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
                Proceed to checkout
              </button>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

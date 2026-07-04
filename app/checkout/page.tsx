'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useCartWishlist } from '@/components/providers'
import { products } from '@/lib/data'

const STEPS = ['Shipping', 'Billing', 'Payment'] as const

type Step = (typeof STEPS)[number]

type FormState = {
  shipping: string
  city: string
  postal: string
  billingName: string
  cardNumber: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const { cartItems, cartTotal, clearCart } = useCartWishlist()
  const [step, setStep] = useState<Step>('Shipping')
  const [form, setForm] = useState<FormState>({
    shipping: '',
    city: '',
    postal: '',
    billingName: '',
    cardNumber: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const isEmptyCart = cartItems.length === 0

  const orderSubtotal = useMemo(() => cartTotal, [cartTotal])
  const orderTotal = orderSubtotal + 10

  const next = () => {
    setSubmitted(false)
    const current = STEPS.indexOf(step)
    if (current < STEPS.length - 1) {
      setStep(STEPS[current + 1])
    }
  }

  const prev = () => {
    const current = STEPS.indexOf(step)
    if (current > 0) {
      setStep(STEPS[current - 1])
    }
  }

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const placeOrder = async () => {
    setSubmitted(true)
    // simple validation
    if (!form.shipping || !form.city || !form.postal || !form.billingName || !form.cardNumber) {
      return
    }

    // simulate order request
    await new Promise((res) => setTimeout(res, 700))

    // clear cart only after order success
    clearCart()
    router.push('/checkout/success')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-semibold text-slate-900">Checkout</h1>
        <div className="mt-6 flex flex-wrap gap-3">
          {STEPS.map((item) => (
            <span key={item} className={`rounded-full px-4 py-2 text-sm font-medium ${item === step ? 'bg-brand-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <section className="rounded-3xl bg-white p-8 shadow-sm">
          {step === 'Shipping' && (
            <div className="space-y-6">
              <div>
                <label htmlFor="shipping" className="block text-sm font-medium text-slate-700">Street address</label>
                <input id="shipping" value={form.shipping} onChange={(event) => updateField('shipping', event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-slate-700">City</label>
                  <input id="city" value={form.city} onChange={(event) => updateField('city', event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
                </div>
                <div>
                  <label htmlFor="postal" className="block text-sm font-medium text-slate-700">Postal code</label>
                  <input id="postal" value={form.postal} onChange={(event) => updateField('postal', event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
                </div>
              </div>
            </div>
          )}

          {step === 'Billing' && (
            <div className="space-y-6">
              <div>
                <label htmlFor="billingName" className="block text-sm font-medium text-slate-700">Billing name</label>
                <input id="billingName" value={form.billingName} onChange={(event) => updateField('billingName', event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
              </div>
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-slate-700">Card number</label>
                <input id="cardNumber" value={form.cardNumber} onChange={(event) => updateField('cardNumber', event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
              </div>
            </div>
          )}

          {step === 'Payment' && (
            <div className="space-y-6">
              <p className="text-sm text-slate-600">Review your details before completing your purchase.</p>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
                <p><strong>Shipping:</strong> {form.shipping}, {form.city}, {form.postal}</p>
                <p className="mt-2"><strong>Billing:</strong> {form.billingName}</p>
                <p className="mt-2"><strong>Card:</strong> •••• {form.cardNumber.slice(-4)}</p>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button onClick={prev} disabled={step === 'Shipping'} className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50">
              Back
            </button>
            <button
              onClick={step === 'Payment' ? placeOrder : next}
              className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
              aria-label={step === 'Payment' ? 'Place order' : 'Continue checkout'}
            >
              {step === 'Payment' ? 'Place order' : 'Continue'}
            </button>
          </div>
          </section>

          <aside className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Order summary</h2>
            <div className="mt-6 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-sm text-slate-600">Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const p = products.find((pr) => pr.id === item.id)!
                    return (
                      <div key={item.id} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-900">{p.name}</p>
                          <p className="text-xs text-slate-600">Qty {item.quantity}</p>
                        </div>
                        <div className="text-sm text-slate-700">${(p.price * item.quantity).toFixed(2)}</div>
                      </div>
                    )
                  })}

                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>Subtotal</span>
                      <span>${orderSubtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>Shipping</span>
                      <span>$10.00</span>
                    </div>
                    <div className="flex items-center justify-between text-base font-semibold text-slate-900 mt-2">
                      <span>Total</span>
                      <span>${orderTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}

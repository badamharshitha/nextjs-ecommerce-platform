'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const STEPS = ['Shipping', 'Billing', 'Payment'] as const

type Step = (typeof STEPS)[number]

export default function CheckoutPage() {
  const [step, setStep] = useState<Step>('Shipping')
  const [form, setForm] = useState({
    shipping: '',
    city: '',
    postal: '',
    billingName: '',
    cardNumber: '',
  })

  const next = () => {
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

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
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
            <button onClick={next} className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
              {step === 'Payment' ? 'Complete order' : 'Continue'}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

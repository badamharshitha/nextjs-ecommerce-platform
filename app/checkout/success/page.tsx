
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm text-center">
          <h1 className="text-4xl font-semibold text-slate-900">Order placed!</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Your order has been received and is being processed. You will receive an email confirmation shortly.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/products" className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800">
              Continue shopping
            </Link>
            <Link href="/account" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              View account
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { products } from '@/lib/data'

export const dynamicParams = false
export const revalidate = 60

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }))
}

function getProduct(id: string) {
  return products.find((product) => product.id === id)
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <Image src={product.image} alt={product.name} width={800} height={700} className="w-full rounded-3xl object-cover" priority />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">{product.category}</p>
              <h1 className="text-4xl font-semibold text-slate-900">{product.name}</h1>
              <p className="text-sm text-slate-500">{product.rating.toFixed(1)} ★ | {product.reviews.length} reviews</p>
              <p className="text-3xl font-semibold text-slate-900">${product.price}</p>
            </div>
            <p className="text-base leading-8 text-slate-600">{product.description}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Availability</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{product.available ? 'In stock' : 'Out of stock'}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Fast delivery</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Free shipping on orders over $75</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
                Add to cart
              </button>
              <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>

        <section className="mt-12 rounded-[2rem] bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Customer reviews</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {product.reviews.map((review) => (
                <article key={review.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-slate-900">{review.author}</p>
                  <p className="mt-1 text-sm text-slate-500">{review.rating} ★</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{review.message}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-400">{review.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { products, categories } from '@/lib/data'

export default function HomePage() {
  const featured = products.slice(0, 3)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <section className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Next-gen storefront</p>
            <h1 className="mt-6 max-w-xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Performance first commerce built for modern shoppers.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Discover products, compare ratings, and checkout with a fast, accessible shopping experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
                Shop all products
              </Link>
              <Link href="/account" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                Your account
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-slate-100 p-8 shadow-lg">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Featured categories</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {categories.slice(1).map((category) => (
                  <Link key={category} href="/products" className="rounded-3xl bg-white px-5 py-6 text-sm font-medium text-slate-900 shadow-sm transition hover:shadow-lg">
                    {category}
                  </Link>
                ))}
              </div>
              <div className="rounded-3xl bg-slate-900 p-6 text-white">
                <h2 className="text-xl font-semibold">Built for speed</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Hybrid rendering, optimized images, and accessible UI ensure fast load times and high search visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Featured products</h2>
            <Link href="/products" className="text-sm font-medium text-brand-700 hover:text-brand-900">
              Browse catalog
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

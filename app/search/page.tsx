import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { products, categories } from '@/lib/data'

const normalize = (value: string) => value.toLowerCase()

export default function SearchPage({ searchParams }: { searchParams?: { q?: string; category?: string } }) {
  const query = normalize(searchParams?.q ?? '')
  const category = searchParams?.category ?? 'All'

  const filteredProducts = products.filter((product) => {
    const matchesQuery =
      query.length === 0 ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)

    const matchesCategory = category === 'All' || product.category === category

    return matchesQuery && matchesCategory
  })

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">Search products</h1>
          <p className="mt-2 text-sm text-slate-600">Search by name, category, or description.</p>
        </div>

        <form method="get" className="grid gap-4 sm:grid-cols-[1.5fr_0.5fr]">
          <label className="sr-only" htmlFor="q">Search</label>
          <input
            id="q"
            name="q"
            defaultValue={searchParams?.q ?? ''}
            placeholder="Search products..."
            className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
          <select
            id="category"
            name="category"
            defaultValue={category}
            className="rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button type="submit" className="rounded-3xl bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 sm:col-span-2">
            Search
          </button>
        </form>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="col-span-full rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <p className="text-lg font-semibold text-slate-900">No products found</p>
              <p className="mt-2 text-sm text-slate-600">Try another search term or remove the category filter.</p>
              <Link href="/products" className="mt-6 inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800">
                Browse all products
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

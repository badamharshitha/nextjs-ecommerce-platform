import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { categories, products } from '@/lib/data'

type FilterOptions = {
  category: string
  sort: string
}

function filterProducts(productsList: typeof products, filters: FilterOptions) {
  let filtered = productsList

  if (filters.category && filters.category !== 'All') {
    filtered = filtered.filter((product) => product.category === filters.category)
  }

  if (filters.sort === 'price-asc') {
    filtered = filtered.slice().sort((a, b) => a.price - b.price)
  } else if (filters.sort === 'price-desc') {
    filtered = filtered.slice().sort((a, b) => b.price - a.price)
  } else if (filters.sort === 'rating') {
    filtered = filtered.slice().sort((a, b) => b.rating - a.rating)
  }

  return filtered
}

export default function ProductsPage({ searchParams }: { searchParams: { category?: string; sort?: string } }) {
  const category = searchParams.category ?? 'All'
  const sort = searchParams.sort ?? 'rating'
  const filteredProducts = filterProducts(products, { category, sort })

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Shop all products</h1>
            <p className="mt-2 text-sm text-slate-600">Filter by category and sort to find the right products fast.</p>
          </div>
          <form method="get" className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="sr-only" htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              defaultValue={category}
              className="rounded-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            >
              {categories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <label className="sr-only" htmlFor="sort">Sort</label>
            <select
              id="sort"
              name="sort"
              defaultValue={sort}
              className="rounded-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            >
              <option value="rating">Best rated</option>
              <option value="price-asc">Price low to high</option>
              <option value="price-desc">Price high to low</option>
            </select>
            <button type="submit" className="rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
              Apply
            </button>
          </form>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

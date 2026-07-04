'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { products } from '@/lib/data'
import { useCartWishlist } from '@/components/providers'

export default function WishlistPage() {
  const { wishlistIds, removeFromWishlist, addToCart } = useCartWishlist()
  const wishlistProducts = products.filter((product) => wishlistIds.includes(product.id))

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-semibold text-slate-900">Your wishlist</h1>
        {wishlistProducts.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-xl font-medium text-slate-900">No saved items yet</p>
            <p className="mt-2 text-sm text-slate-600">Add favorites and they will appear here.</p>
            <Link href="/products" className="mt-6 inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {wishlistProducts.map((product) => (
              <article key={product.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <Link href={`/products/${product.id}`} className="text-lg font-semibold text-slate-900 hover:text-brand-700">
                  {product.name}
                </Link>
                <p className="mt-2 text-sm text-slate-600">{product.category}</p>
                <p className="mt-3 text-sm font-semibold text-slate-900">${product.price}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => addToCart(product.id)}
                    className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(product.id)}
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

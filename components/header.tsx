'use client'

import Link from 'next/link'
import { Heart, Search, ShoppingCart } from 'lucide-react'
import { useCartWishlist } from '@/components/providers'

export default function Header() {
  const { cartCount, wishlistCount } = useCartWishlist()

  return (
    <header className="border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold text-slate-900">
          Storefront
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link href="/products" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Shop
          </Link>
          <Link href="/search" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Search
          </Link>
          <Link href="/account" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Account
          </Link>
          <Link href="/wishlist" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-slate-300 hover:text-slate-900">
            <Heart size={16} />
            <span className="sr-only">Wishlist</span>
            {wishlistCount > 0 && <span className="rounded-full bg-brand-700 px-2 py-0.5 text-xs font-semibold text-white">{wishlistCount}</span>}
          </Link>
          <Link href="/cart" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-slate-300 hover:text-slate-900">
            <ShoppingCart size={16} />
            <span className="sr-only">Cart</span>
            {cartCount > 0 && <span className="rounded-full bg-brand-700 px-2 py-0.5 text-xs font-semibold text-white">{cartCount}</span>}
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/search" aria-label="Search products" className="rounded-full bg-slate-100 p-2 text-slate-700">
            <Search size={18} />
          </Link>
        </div>
      </div>
    </header>
  )
}

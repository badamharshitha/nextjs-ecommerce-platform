import Link from 'next/link'
import { Search, Heart, ShoppingCart } from 'lucide-react'

export default function Header() {
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
          <Link href="/account" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Account
          </Link>
          <Link href="/cart" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-slate-300 hover:text-slate-900">
            <ShoppingCart size={16} /> Cart
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/products" aria-label="Shop products" className="rounded-full bg-slate-100 p-2 text-slate-700">
            <ShoppingCart size={18} />
          </Link>
        </div>
      </div>
    </header>
  )
}

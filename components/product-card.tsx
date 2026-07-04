'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import type { Product } from '@/lib/data'
import { useCartWishlist } from '@/components/providers'

type Props = { product: Product }

export default function ProductCard({ product }: Props) {
  const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist()
  const isWishlisted = isInWishlist(product.id)

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white transition-shadow hover:shadow-lg">
      <Link href={`/products/${product.id}`} className="block overflow-hidden rounded-t-3xl">
        <Image src={product.image} alt={product.name} width={640} height={480} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
      </Link>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-2 text-sm text-slate-500">
          <span>{product.category}</span>
          <span>{product.rating.toFixed(1)} ★</span>
        </div>
        <Link href={`/products/${product.id}`} className="text-xl font-semibold text-slate-900 hover:text-brand-700">
          {product.name}
        </Link>
        <p className="text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="flex items-center justify-between gap-3 pt-2">
          <span className="text-lg font-semibold text-slate-900">${product.price}</span>
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${product.available ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
            {product.available ? 'In stock' : 'Sold out'}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => addToCart(product.id)}
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            <ShoppingCart size={16} />
            Add to cart
          </button>
          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            aria-pressed={isWishlisted}
          >
            <Heart size={16} className={isWishlisted ? 'text-brand-700' : 'text-slate-600'} />
            {isWishlisted ? 'Remove' : 'Wishlist'}
          </button>
        </div>
      </div>
    </article>
  )
}

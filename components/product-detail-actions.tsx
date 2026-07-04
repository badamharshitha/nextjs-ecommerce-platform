'use client'

import { Heart, ShoppingCart } from 'lucide-react'
import { useCartWishlist } from '@/components/providers'

export default function ProductDetailActions({ productId, available }: { productId: string; available: boolean }) {
  const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist()
  const isWishlisted = isInWishlist(productId)

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => addToCart(productId)}
        disabled={!available}
        className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        <ShoppingCart size={16} />
        Add to cart
      </button>
      <button
        type="button"
        onClick={() => toggleWishlist(productId)}
        className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
        aria-pressed={isWishlisted}
      >
        <Heart size={16} className={isWishlisted ? 'text-brand-700' : 'text-slate-600'} />
        {isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      </button>
    </div>
  )
}

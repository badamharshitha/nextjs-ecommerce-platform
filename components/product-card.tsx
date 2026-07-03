import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/data'

type Props = { product: Product }

export default function ProductCard({ product }: Props) {
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
      </div>
    </article>
  )
}

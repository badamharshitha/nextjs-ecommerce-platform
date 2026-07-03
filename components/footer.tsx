export default function Footer() {
  return (
    <footer className="border-t bg-white/90 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Storefront. Built for modern e-commerce experiences.</p>
        <div className="flex flex-wrap gap-4">
          <a href="/products" className="hover:text-slate-900">
            Shop
          </a>
          <a href="/account" className="hover:text-slate-900">
            Account
          </a>
          <a href="/cart" className="hover:text-slate-900">
            Checkout
          </a>
        </div>
      </div>
    </footer>
  )
}

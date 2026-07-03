import Header from '@/components/header'
import Footer from '@/components/footer'

const orders = [
  { id: 'ORDER-2121', date: '2026-06-18', total: 233.0, status: 'Delivered' },
  { id: 'ORDER-2090', date: '2026-04-27', total: 89.0, status: 'In transit' },
]

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <section className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h1 className="text-3xl font-semibold text-slate-900">Your account</h1>
            <p className="mt-3 text-sm text-slate-600">View your order history and manage your wishlist.</p>
            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Profile</h2>
                <p className="mt-2 text-sm text-slate-600">Name: Alex Morgan</p>
                <p className="text-sm text-slate-600">Email: alex@example.com</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Wishlist</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>Minimalist Backpack</li>
                  <li>Noise Cancelling Headphones</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Recent orders</h2>
            <div className="mt-6 space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-slate-900">{order.id}</p>
                  <p className="text-sm text-slate-600">{order.date} · ${order.total.toFixed(2)} · {order.status}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

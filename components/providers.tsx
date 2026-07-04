'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { products } from '@/lib/data'

type CartItem = {
  id: string
  quantity: number
}

type CartWishlistContextValue = {
  cartItems: CartItem[]
  cartCount: number
  cartTotal: number
  wishlistIds: string[]
  wishlistCount: number
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  incrementQuantity: (id: string) => void
  decrementQuantity: (id: string) => void
  clearCart: () => void
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  toggleWishlist: (id: string) => void
  isInWishlist: (id: string) => boolean
}

const CartWishlistContext = createContext<CartWishlistContextValue | null>(null)

const CART_KEY = 'storefront-cart'
const WISHLIST_KEY = 'storefront-wishlist'

export function Providers({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [wishlistIds, setWishlistIds] = useState<string[]>([])

  useEffect(() => {
    const savedCart = typeof window !== 'undefined' ? window.localStorage.getItem(CART_KEY) : null
    const savedWishlist = typeof window !== 'undefined' ? window.localStorage.getItem(WISHLIST_KEY) : null

    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch {
        setCartItems([])
      }
    }

    if (savedWishlist) {
      try {
        setWishlistIds(JSON.parse(savedWishlist))
      } catch {
        setWishlistIds([])
      }
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistIds))
  }, [wishlistIds])

  const addToCart = (id: string) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === id)
      if (existing) {
        return current.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...current, { id, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setCartItems((current) => current.filter((item) => item.id !== id))
  }

  const incrementQuantity = (id: string) => {
    setCartItems((current) => current.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  const decrementQuantity = (id: string) => {
    setCartItems((current) => current.flatMap((item) => {
      if (item.id !== id) return item
      if (item.quantity <= 1) return []
      return { ...item, quantity: item.quantity - 1 }
    }))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const addToWishlist = (id: string) => {
    setWishlistIds((current) => (current.includes(id) ? current : [...current, id]))
  }

  const removeFromWishlist = (id: string) => {
    setWishlistIds((current) => current.filter((itemId) => itemId !== id))
  }

  const toggleWishlist = (id: string) => {
    setWishlistIds((current) => (current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id]))
  }

  const isInWishlist = (id: string) => wishlistIds.includes(id)

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const cartTotal = useMemo(
    () =>
      cartItems.reduce((sum, item) => {
        const product = products.find((product) => product.id === item.id)
        return product ? sum + product.price * item.quantity : sum
      }, 0),
    [cartItems],
  )

  const wishlistCount = wishlistIds.length

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      cartTotal,
      wishlistIds,
      wishlistCount,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      clearCart,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isInWishlist,
    }),
    [cartItems, cartCount, cartTotal, wishlistIds, wishlistCount],
  )

  return <CartWishlistContext.Provider value={value}>{children}</CartWishlistContext.Provider>
}

export function useCartWishlist() {
  const context = useContext(CartWishlistContext)
  if (!context) {
    throw new Error('useCartWishlist must be used within Providers')
  }
  return context
}

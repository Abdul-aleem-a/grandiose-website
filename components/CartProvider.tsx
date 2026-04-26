"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"

type CartContextType = {
  cart: string[]
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {

  // ✅ Safe initialization
  const [cart, setCart] = useState<string[]>([])

  // ✅ Load from localStorage safely
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart")
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setCart(parsed)
        } else {
          setCart([]) // fallback
        }
      }
    } catch (error) {
      console.error("Invalid cart in localStorage")
      setCart([])
    }
  }, [])

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // ✅ Prevent duplicates
  const addToCart = (id: string) => {
    setCart((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    )
  }

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item !== id))
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}
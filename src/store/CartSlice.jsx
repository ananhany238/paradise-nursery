import { createSlice } from '@reduxjs/toolkit'

const readStoredCart = () => {
  try {
    const stored = window.localStorage.getItem('paradise-nursery-cart')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: readStoredCart() },
  reducers: {
    addToCart: (state, action) => {
      const incoming = action.payload
      const existing = state.items.find((item) => item.id === incoming.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...incoming, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((plant) => plant.id === action.payload)
      if (item) item.quantity += 1
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((plant) => plant.id === action.payload)
      if (item && item.quantity > 1) item.quantity -= 1
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)

export default cartSlice.reducer

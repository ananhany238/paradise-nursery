import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'

export const store = configureStore({
  reducer: { cart: cartReducer },
})

store.subscribe(() => {
  try {
    window.localStorage.setItem(
      'paradise-nursery-cart',
      JSON.stringify(store.getState().cart.items),
    )
  } catch {
    // Storage can be unavailable in private browsing; the in-memory cart still works.
  }
})

import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from './features/wishlist.slice'

export const store = configureStore({
  reducer: {
    counterSlice,
  },
})
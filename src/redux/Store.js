import { configureStore } from '@reduxjs/toolkit'
import CartSlice from '../redux/slices/CartSlice'

const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default Store;
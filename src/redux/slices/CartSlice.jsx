import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state,action) => {
      state.cart = state.cart.filter(function(item){
        return action.payload.id !==item.id;
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart} = CartSlice.actions

export default CartSlice.reducer
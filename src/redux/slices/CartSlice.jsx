import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const existingItem = state.cart.find(function(item){
          return item.id === action.payload.id;
      })
      if(existingItem){
        state.cart = state.cart.map(function(item){
          console.log(item.qty);
          return item.id === action.payload.id ? {...item, qty: item.qty+1} : item;
        })
      }
      else{
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state,action) => {
      state.cart = state.cart.filter(function(item){
        return action.payload !==item.id;
      })

    },
    incrementQty: (state,action) => {
        state.cart = state.cart.map(function(item){
          return item.id === action.payload ? {...item, qty:item.qty+1}:item;
        })
    },
    decrementQty: (state,action) => {
      state.cart = state.cart.map(function(item){
        return item.id === action.payload ? {...item, qty:item.qty-1}:item;
      })

  },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementQty, decrementQty} = CartSlice.actions

export default CartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const CartItemSlice = createSlice({

   name: "cart",
   initialState: {
      cart: [],
      

   },
   reducers: {
      addToCart: (state, action) => {
         const OldItems = state.cart.find((item) => item.id === action.payload.id)
         console.log("from slice", action.payload)
         if (OldItems) {
            OldItems.quantity += action.payload.quantity;
         } else {
            state.cart.push({ ...action.payload , quantity : action.payload.quantity})
         }
      },

      removeFromCart: (state, action) => {
         const removeItem = state.cart.filter((item) => item.id !== action.payload.id)
         state.cart = removeItem
      },
      
      // setting quanity based on the input field 
      incrementQty: (state, action) => {
            const cartItem = state.cart.find((item)=> item.id === action.payload.id)
            const qty = action.payload.quantity;
            cartItem.quantity = qty
      }
   }
})
export const { addToCart, removeFromCart , incrementQty} = CartItemSlice.actions
export default CartItemSlice.reducer
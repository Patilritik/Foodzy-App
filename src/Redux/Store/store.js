import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from '../Slices/ProductSlice'
import CartItemReducer from '../Slices/CartItemSlice'

export const store = configureStore({

    reducer :{
        Product : ProductReducer,
        CartItem : CartItemReducer,
    },
})
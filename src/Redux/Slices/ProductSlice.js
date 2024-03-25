import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name:"Product_Slice",
    initialState :{
        value :  false,
    },
    reducers :{
        change : (state)=>{
                state.value = !state.value
        },
       
    }
})
export const {change} = ProductSlice.actions;
export default ProductSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },



        //DELETE
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload),
            )
        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure } = productSlice.actions;

export default productSlice.reducer;
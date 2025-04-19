import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basketCount: 0,
    basketDataItems: []

}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        basketLength: (state, action) => {
            console.log('in the store');
            console.log('state', state);
            console.log('actions', action.payload);
            state.basketCount = action.payload;
        },
        basketData: (state, action) => {
            console.log('in the store 2');
            console.log(action.payload);
            state.basketDataItems.push(action.payload);
            console.log('basketDataItems-------',state.basketDataItems);
        }
    }
})

export const { basketLength, basketData } = productSlice.actions;
export const productReducer = productSlice.reducer;

export default productSlice;
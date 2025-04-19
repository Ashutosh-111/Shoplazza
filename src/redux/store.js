import {configureStore} from '@reduxjs/toolkit';
import { productReducer } from './slice/productSlice';  // Import the reducer from the slice


export const store = configureStore({
    reducer: {
        product: productReducer,  // Use the reducer from the slice, not the entire slice object
    },
  });
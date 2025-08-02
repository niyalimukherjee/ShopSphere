import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice'
import uiReducer from './slices/uiSlice'

const store= configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
        ui:uiReducer,
    }
});
export default store;
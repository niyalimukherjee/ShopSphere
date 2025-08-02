import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {fetchAllProducts} from '../../services/api'

export const loadProducts=createAsyncThunk('products/fetchProductById',async()=>{
    const data=await fetchAllProducts()
    return data;
});
const productsSlice=createSlice({
    name:'products',
    initialState:{
        items:[],
        loading:false,
        error:null,
    },

    reducers:{},
    extraReducers:(builder)=>{
        builder
       .addCase(loadProducts.fulfilled, (state, action) => {
    state.items = action.payload;
    state.loading = false;
})
.addCase(loadProducts.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
})
        
    },
});
export default productsSlice.reducer;
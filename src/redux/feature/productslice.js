import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { httpAxios } from '@/helper/httpHelper';
import { date } from 'yup';


export const fetchAllProducts = createAsyncThunk('showUser', async () => {
    try {
        let data = await httpAxios.get("/api/products");
        console.log('data', data.data.result)
        return data.data.result
    }
    catch (err) {
        console.log(err)
    }

});

export const addProduct = createAsyncThunk("addUser", async (formData, { rejectWithValue }) => {
    console.log('call')
    try {
        const response = await httpAxios.post('/api/products', formData)
        console.log('response', response)
        // toast.success('User Added Successfully')
        return response.data.result
    } catch (error) {
        console.log('error', error)
        toast.error('error while creating user')
        return rejectWithValue(error);
    }
})

export const fetchSingleProduct = createAsyncThunk(
    "user/single",
    async (id) => {
        console.log('thunkAPI', id)
        try {
            let data = await httpAxios.get(`/api/products/${id}`);
            console.log('data', data)
            return data.data.result
        } catch (err) {
            // console.log(err)
            return rejectWithValue(err);

        }
    }
)




export const updateProduct = createAsyncThunk(
    "user/update",
    async (thunkAPI, data) => {
        console.log('thunkAPI', thunkAPI)
        console.log('data', data)

        try {
            let data = await httpAxios.put(`/api/products/${thunkAPI}`, data);
            return data.data.result
        } catch (err) {
            toast.error('error while updating user')
        }
    }
)


export const deleteProduct = createAsyncThunk("delete/user", async (id, { rejectWithValue }) => {
    console.log(id)
    const data = await httpAxios.delete(`/api/products/${id}`);
    console.log('data', data)
    try {
        // const data = await response.data;
        return data.data.result
    } catch (error) {
        return rejectWithValue(error);
    }
})


const productReducer = createSlice({
    name: 'product',
    initialState: {
        allProduct: [],
        singleProduct: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [fetchAllProducts.pending]: (state) => {
            state.loading = true;
        },
        [fetchAllProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.allProduct = action.payload;
        },
        [fetchAllProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [addProduct.pending]: (state) => {
            state.loading = true;
        },
        [addProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.allProduct.push(action.payload);
        },
        [addProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // [updateUser.pending]: (state) => {
        //     state.loading = true;
        // },
        // [updateUser.fulfilled]: (state, action) => {
        //     console.log(action.payload);
        //     state.loading = false;
        //     state.allusers = state.allusers.map((ele) =>
        //         ele.id === action.payload.id ? action.payload : ele
        //     );
        // },
        // [updateUser.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // },
        [deleteProduct.pending]: (state) => {
            state.loading = true;
        },
        [deleteProduct.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.allProduct = state.allProduct.filter((ele) => ele.id !== action.payload.id);
        },
        [deleteProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [fetchSingleProduct.pending]: (state) => {
            state.loading = true;
        },
        [fetchSingleProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.singleProduct = action.payload
        },
        [fetchSingleProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    }
})

export default productReducer.reducer;

// export const { searchUser } = userReducer.actions;